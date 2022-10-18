import { GqlError } from '../../definitions/types';
import { Subscriber } from '../../models/models';

export default async function checkSubscriberExists(
  email: string
): Promise<[boolean, undefined] | [boolean, GqlError]> {
  if ((await Subscriber.exists({ email: email.toLowerCase() })) != null) {
    return [true, undefined];
  }

  return [
    false,
    {
      __typename: 'SubscriberNotFound',
      message: 'The requested subscriber could not be found.',
    },
  ];
}
