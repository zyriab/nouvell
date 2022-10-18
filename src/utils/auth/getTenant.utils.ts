import { DecodedToken } from '../../definitions/auth';
import { Tenant } from '../../definitions/custom';
import { decrypt } from '../crypto.utils';

export default function getTenant(tkn: DecodedToken): Tenant | undefined {
  let name = '';
  const ns = `https://${process.env.NAMESPACE}/app_metadata`;
  if (tkn[ns]?.tenant) name = `${decrypt(tkn[ns].tenant)}`;

  if (!name) return undefined;

  name = name.replace('-dev', '');
  name = name.replace('-staging', '');

  return {
    name,
  };
}
