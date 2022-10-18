import { Types } from 'mongoose';
import { RequestBody } from '../../../definitions/custom';
import {
  EditSubscriberInput,
  SubscriberResult,
} from '../../../definitions/generated/graphql';
import { GqlError, Occupation, Product } from '../../../definitions/types';
import {
  handleErrorResponse,
  checkEmailIsValid,
  filterNonExistingProducts,
  getFormattedProductObject,
  getFormattedOccupationObject,
} from '../../../utils/tools.utils';
import { Subscriber } from '../../../models/models';
import {
  checkSubscriberExists,
  isLanguageValid,
  getUpdatedSubscriberProducts,
  addNonExistingOccupation,
} from '../../../utils/database.utils';
import { checkRequestIsAuthed } from '../../../utils/auth.utils';

export default async function editSubscriber(
  args: { editSubscriberInput: EditSubscriberInput },
  req: RequestBody
): Promise<SubscriberResult | GqlError> {
  try {
    const params = {
      email: args.editSubscriberInput.email.toLowerCase(),
      occupation: getFormattedOccupationObject(
        <Occupation>args.editSubscriberInput.occupation
      ),
      products: args.editSubscriberInput.products?.map((p) =>
        getFormattedProductObject(p)
      ),
      language: args.editSubscriberInput.language?.toLowerCase(),
    };

    const [authed, authError] = checkRequestIsAuthed(req);

    if (!authed) {
      return authError!;
    }

    const [emailIsValid, emailError] = checkEmailIsValid(params.email);

    if (!emailIsValid) {
      return emailError!;
    }

    const [exists, existsError] = await checkSubscriberExists(params.email);

    if (!exists) {
      return existsError!;
    }

    if (!Array.isArray(args.editSubscriberInput.products)) {
      throw new Error('Products must be in an array.');
    }

    const subscriber = (await Subscriber.findOne({ email: params.email }))!;

    if (params.products != null) {
      params.products = <Product[]>(
        await filterNonExistingProducts(params.products)
      );

      subscriber.products = new Types.DocumentArray<Product>(
        getUpdatedSubscriberProducts(
          <Product[]>(<unknown>subscriber.products),
          params.products
        )
      );
    }

    if (params.occupation != null) {
      await addNonExistingOccupation(params.occupation);
      subscriber.occupation.name = params.occupation.name;
      subscriber.occupation.displayName = params.occupation.displayName
        ? params.occupation.displayName
        : params.occupation.name;
    }

    if (params.language != null) {
      params.language = (await isLanguageValid(params.language))
        ? params.language
        : 'en';

      subscriber.language = params.language;
    }

    subscriber.save();

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
