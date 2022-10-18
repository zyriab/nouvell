import { DecodedToken, AppMetadata } from '../../definitions/auth';

export default function getAppMetadata(tkn: DecodedToken): AppMetadata | undefined {
  const ns = `https://${process.env.NAMESPACE}/app_metadata`;
  if (tkn[ns]) return tkn[ns];
  return undefined;
}
