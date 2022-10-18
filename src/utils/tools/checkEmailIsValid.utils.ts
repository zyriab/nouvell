import { GqlError } from '../../definitions/types';

export default function checkEmailIsValid(
  email: string
): [boolean, undefined] | [boolean, GqlError] {
  const emailValidationRegExp =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  if (!emailValidationRegExp.test(email.toLowerCase())) {
    return [
      false,
      {
        __typename: 'WrongEmailFormat',
        message: `The email address "${email}" is not valid. Format should look like "example@email.com".`,
      },
    ];
  }

  return [true, undefined];
}
