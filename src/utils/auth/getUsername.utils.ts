import { DecodedToken } from '../../definitions/auth';

export default function getUsername(tkn: DecodedToken): string | false {
  const ns = `https://${process.env.NAMESPACE}/username`;
  if (tkn[ns]) return tkn[ns];
  return false;
}
