import getTenant from '../../utils/auth/getTenant.utils';
import mockToken from '../../helpers/mockToken.help';
import 'dotenv/config';

beforeAll(() => {
  process.env.NODE_ENV = 'test';
});

test('Should return decrypted tenant', () => {
  const expectedTenant = {
    name: 'foobar',
  };

  const result = getTenant(mockToken);
  expect(result).toEqual(expectedTenant);
});
