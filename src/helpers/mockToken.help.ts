import { encrypt } from '../utils/crypto.utils';
import { DecodedToken } from '../definitions/auth';
import 'dotenv/config';

const METADATA_NS = `https://${process.env.NAMESPACE}/app_metadata`;
const EMAIL_NS = `https://${process.env.NAMESPACE}/email`;
const USERNAME_NS = `https://${process.env.NAMESPACE}/username`;

const token: DecodedToken = {
  aud: [],
  azp: '',
  exp: 9999,
  iat: 9999,
  iss: '',
  scope: '',
  sub: 'auth0|1234abcd',
  [METADATA_NS]: {
    tenant: `${encrypt('foobar')}`,
  },
  [EMAIL_NS]: 'test-user@example.com',
  [USERNAME_NS]: 'test-user',
};

export default token;
