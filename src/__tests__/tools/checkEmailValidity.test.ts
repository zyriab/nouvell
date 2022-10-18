/* eslint-disable no-underscore-dangle */
import checkEmailValidity from '../../utils/tools/checkEmailIsValid.utils';

test('Should validate email', () => {
  let [success, error] = checkEmailValidity('example@email.com');
  expect(success).toBeTruthy();
  expect(error).toBeUndefined();

  [success, error] = checkEmailValidity('ExAmPle@eMAIl.cOm');
  expect(success).toBeTruthy();
  expect(error).toBeUndefined();
});

test('Should NOT validate email and return a GQL error', () => {
  let [success, error] = checkEmailValidity('example@email');
  expect(success).toBeFalsy();
  expect(error).not.toBeUndefined();
  expect(error?.__typename).toBe('WrongEmailFormat');

  [success, error] = checkEmailValidity('example');
  expect(success).toBeFalsy();
  expect(error).not.toBeUndefined();
  expect(error?.__typename).toBe('WrongEmailFormat');
});
