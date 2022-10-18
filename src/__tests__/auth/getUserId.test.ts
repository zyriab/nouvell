import getUserId from '../../utils/auth/getUserId.utils';
import mockToken from '../../helpers/mockToken.help';
import 'dotenv/config';

beforeAll(() => {
  process.env.NODE_ENV = 'test';
});

test('Should return user ID', () => {
  const result = getUserId(mockToken);
  expect(result).toBe('1234abcd');
});
