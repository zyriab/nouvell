import { RequestBody } from '../definitions/custom';
import 'dotenv/config';

const tkn = {
  aud: [],
  azp: '',
  exp: 9999,
  iat: 9999,
  iss: '',
  scope: '',
  sub: 'auth0|1234abcd',
};

const tenant = {
  name: 'foobar',
};

// @ts-ignore
const req: RequestBody = {
  body: {
    token: tkn,
    isAuth: true,
    userId: '1234abcd',
    username: 'test-user',
    userEmail: 'test-user@example.com',
    tenant,
  },
};

export default req;
