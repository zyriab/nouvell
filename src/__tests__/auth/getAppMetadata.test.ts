import getAppMetadata from '../../utils/auth/getAppMetadata.utils';
import { decrypt } from '../../utils/crypto.utils';
import mockToken from '../../helpers/mockToken.help';
import { DecodedToken } from '../../definitions/auth';
import 'dotenv/config';

beforeAll(() => {
  process.env.NODE_ENV = 'test';
});

test('Should return App metadata', () => {
  const token: DecodedToken = { ...mockToken };
  const result = getAppMetadata(token);
  expect(result).not.toBeUndefined();
  expect(decrypt(`${result?.tenant}`)).toEqual('foobar');
});
