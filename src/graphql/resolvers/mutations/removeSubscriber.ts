/* eslint-disable no-console */
// import { RequestBody } from '../../../definitions/custom';
import { HydratedDocument } from 'mongoose';
import { SubscriberResult } from '../../../definitions/generated/graphql';
import { GqlError, Subscriber } from '../../../definitions/types';
import { Subscriber as SubscriberModel } from '../../../models/models';
// import { checkRequestIsAuthed } from '../../../utils/auth.utils';
import { checkSubscriberExists } from '../../../utils/database.utils';
import {
  checkEmailIsValid,
  handleErrorResponse,
} from '../../../utils/tools.utils';

export default async function removeSubscriber(
  args: { emailInput: string }
  // req: RequestBody
): Promise<SubscriberResult | GqlError> {
  try {
    console.log('Removing subscriber...');

    const params = {
      email: args.emailInput.toLowerCase(),
    };

    console.dir(params);

    // FIXME: Removed auth until a proper frontend solution has been implemented :)
    // const [authed, authError] = checkRequestIsAuthed(req);

    // if (!authed) {
    //   return authError!;
    // }

    const [emailIsValid, emailError] = checkEmailIsValid(params.email);

    if (!emailIsValid) {
      return emailError!;
    }

    const [exists, existsError] = await checkSubscriberExists(params.email);

    if (!exists) {
      return existsError!;
    }

    const deletedSubscriber = <HydratedDocument<Subscriber>>(
      (await SubscriberModel.findOne({ email: params.email }))!
    );

    await SubscriberModel.deleteOne({ email: params.email });

    // TODO: send confirmation email

    return {
      __typename: 'Subscriber',
      email: deletedSubscriber.email,
      occupation: deletedSubscriber.occupation,
      products: deletedSubscriber.products,
      language: deletedSubscriber.language,
    };
  } catch (e) {
    return handleErrorResponse(e as Error);
  }
}
