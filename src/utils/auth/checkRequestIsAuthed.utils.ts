import { RequestBody } from '../../definitions/custom';
import { GqlError } from '../../definitions/types';

export default function checkRequestIsAuthed(
  req: RequestBody
): [boolean, undefined] | [boolean, GqlError] {
  if (!req.body.isAuth) {
    return [
      false,
      {
        __typename: 'Unauthenticated',
        message: 'Error: user must be logged in',
      },
    ];
  }

  return [true, undefined];
}
