import { decrypt, encrypt } from '../../utils/crypto.utils';
import 'dotenv/config';

beforeAll(() => {
  process.env.NODE_ENV = 'test';
});

test('Should encrypt test-user', () => {
  const result = encrypt('test-user');

  expect(result).not.toEqual('test-user');
  expect(`${decrypt(`${result}`)}`).toEqual('test-user');
});
