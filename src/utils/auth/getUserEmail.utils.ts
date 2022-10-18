import { DecodedToken } from '../../definitions/auth';

export default function getUserEmail(tkn: DecodedToken): string | false {
  const ns = `https://${process.env.NAMESPACE}/email`;
  if (tkn[ns]) return tkn[ns];
  return false;
}
