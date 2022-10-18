import { DecodedToken } from '../../definitions/auth';

export default function getUserId(token: DecodedToken): string {
  return token.sub.split('|')[1] || '';
}
