import getUsername from '../../utils/auth/getUsername.utils';
import mockToken from '../../helpers/mockToken.help';
import 'dotenv/config';

beforeAll(() => {
  process.env.NODE_ENV = 'test';
});

test('Should return username', () => {
  const result = getUsername(mockToken);
  expect(result).toBe('test-user');
});
