import {
  SubscriberInput,
  SubscriberResult,
  Subscriber,
} from '../../../definitions/generated/graphql';
import { GqlError, Product } from '../../../definitions/types';
import {
  handleErrorResponse,
  checkEmailIsValid,
  filterNonExistingProducts,
  getFormattedProductObject,
  getFormattedOccupationObject,
} from '../../../utils/tools.utils';
import {
  Subscriber as SubscriberModel,
  Product as ProductModel,
} from '../../../models/models';
import {
  isLanguageValid,
  getUpdatedSubscriberProducts,
  addNonExistingOccupation,
} from '../../../utils/database.utils';
import { sendSubscriptionConfirmationEmail } from '../../../utils/email.utils';

export default async function addSubscriber(args: {
  subscriberInput: SubscriberInput;
}): Promise<SubscriberResult | GqlError> {
  try {
    const params = {
      email: args.subscriberInput.email.toLowerCase(),
      occupation: getFormattedOccupationObject(args.subscriberInput.occupation),
      products: args.subscriberInput.products.map((p) =>
        getFormattedProductObject(p)
      ),
      language: args.subscriberInput.language.toLowerCase(),
    };

    const [emailIsValid, emailError] = checkEmailIsValid(params.email);

    if (!emailIsValid) {
      return emailError!;
    }

    if (!Array.isArray(args.subscriberInput.products)) {
      throw new Error('Products must be in an array.');
    }

    params.products = <Product[]>(
      await filterNonExistingProducts(params.products)
    );

    params.language = (await isLanguageValid(params.language))
      ? params.language
      : 'en';

    let subscriber = await SubscriberModel.findOne({ email: params.email });

    if (subscriber == null) {
      subscriber = await SubscriberModel.create(params);
      await sendSubscriptionConfirmationEmail(
        <Subscriber>(<unknown>subscriber)
      );
    } else {
      const newProducts = getUpdatedSubscriberProducts(
        <Product[]>(<unknown>subscriber.products),
        params.products
      );

      if (newProducts.length > 0) {
        subscriber.products.addToSet(new ProductModel(newProducts));
      }

      subscriber.save();
    }

    await addNonExistingOccupation(params.occupation);

    return {
      __typename: 'Subscriber',
      email: subscriber.email,
      occupation: subscriber.occupation,
      products: <Product[]>(<unknown>subscriber.products),
      language: subscriber.language,
    };
  } catch (e) {
    return handleErrorResponse(e as Error);
  }
}
