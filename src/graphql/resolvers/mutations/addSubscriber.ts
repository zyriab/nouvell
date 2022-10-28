/* eslint-disable no-console */
import { HydratedDocument, Types } from 'mongoose';
import {
  SubscriberInput,
  SubscriberResult,
} from '../../../definitions/generated/graphql';
import { GqlError, Subscriber, Product } from '../../../definitions/types';
import {
  handleErrorResponse,
  checkEmailIsValid,
  filterNonExistingProducts,
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
  getProduct,
} from '../../../utils/database.utils';
import { sendSubscriptionConfirmationEmail } from '../../../utils/email.utils';

export default async function addSubscriber(args: {
  subscriberInput: SubscriberInput;
}): Promise<SubscriberResult | GqlError> {
  try {
    console.log('Adding subscriber...');

    const params = {
      email: args.subscriberInput.email.toLowerCase(),
      occupation: getFormattedOccupationObject(args.subscriberInput.occupation),
      products: await Promise.all(
        args.subscriberInput.products.map((p) => getProduct(p.name))
      ),
      language: args.subscriberInput.language.toLowerCase(),
    };

    console.dir(params);

    const [emailIsValid, emailError] = checkEmailIsValid(params.email);

    if (!emailIsValid) {
      return emailError!;
    }

    if (!Array.isArray(args.subscriberInput.products)) {
      throw new Error('Products must be in an array.');
    }

    params.products = await filterNonExistingProducts(params.products);

    params.language = (await isLanguageValid(params.language))
      ? params.language
      : 'en';

    let subscriber = <HydratedDocument<Subscriber> | null>(
      await SubscriberModel.findOne({ email: params.email })
    );

    if (subscriber == null) {
      subscriber = await SubscriberModel.create(params);
      await sendSubscriptionConfirmationEmail(subscriber);
    } else {
      const newProducts = getUpdatedSubscriberProducts(
        subscriber.products,
        <Product[]>params.products
      );

      if (newProducts.length > 0) {
        (<Types.Array<Product>>subscriber.products).addToSet(
          new ProductModel(newProducts)
        );
        subscriber.save();
      }
    }

    await addNonExistingOccupation(params.occupation);

    return {
      __typename: 'Subscriber',
      email: subscriber.email,
      occupation: subscriber.occupation,
      products: subscriber.products,
      language: subscriber.language,
    };
  } catch (e) {
    return handleErrorResponse(e as Error);
  }
}
