import getUserEmail from '../../utils/auth/getUserEmail.utils';
import mockToken from '../../helpers/mockToken.help';
import 'dotenv/config';

beforeAll(() => {
  process.env.NODE_ENV = 'test';
});

test('Should return user email', () => {
  const result = getUserEmail(mockToken);
  expect(result).toBe('test-user@example.com');
});
