import { RequestBody } from '../../../definitions/custom';
import { SubscriberResult } from '../../../definitions/generated/graphql';
import { GqlError, Product } from '../../../definitions/types';
import { Subscriber } from '../../../models/models';
import { checkRequestIsAuthed } from '../../../utils/auth.utils';
import { checkSubscriberExists } from '../../../utils/database.utils';
import {
  checkEmailIsValid,
  handleErrorResponse,
} from '../../../utils/tools.utils';

export default async function removeSubscriber(
  args: { emailInput: string },
  req: RequestBody
): Promise<SubscriberResult | GqlError> {
  try {
    const params = {
      email: args.emailInput.toLowerCase(),
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

    const deletedSubscriber = await Subscriber.findOne({ email: params.email });
    await Subscriber.deleteOne({ email: params.email });

    // TODO: send confirmation email

    return {
      __typename: 'Subscriber',
      email: deletedSubscriber!.email,
      occupation: deletedSubscriber!.occupation,
      products: <Product[]>(<unknown>deletedSubscriber!.products),
      language: deletedSubscriber!.language,
    };
  } catch (e) {
    return handleErrorResponse(e as Error);
  }
}
