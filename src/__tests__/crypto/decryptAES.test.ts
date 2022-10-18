import { decrypt, encrypt } from '../../utils/crypto.utils'
import 'dotenv/config';

beforeAll(() => {
  process.env.NODE_ENV = 'test';
});

test('Should decrypt a given encrypted string', () => {

  const result = decrypt(`${encrypt('foobar')}`);
  expect(result).toEqual('foobar');
});
