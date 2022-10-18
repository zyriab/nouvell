import AES from 'crypto-js/aes';
import { hasJsonStructure } from '../json/json.utils';

// TODO: maybe replace by RSA
export default function encryptAES(
  data: string | Object,
  key?: string
): string | false {
  const dt = data;
  if (typeof dt === 'string') {
    return AES.encrypt(dt, <string>(key || process.env.AES_KEY)).toString();
  }
  if (typeof dt === 'object' && hasJsonStructure(JSON.stringify(dt))) {
    return AES.encrypt(
      JSON.stringify(dt),
      <string>(key || process.env.AES_KEY)
    ).toString();
  }
  return false;
}
