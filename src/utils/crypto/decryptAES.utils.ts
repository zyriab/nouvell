import AES from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8'
import { hasJsonStructure } from '../json/json.utils';

// TODO: maybe replace by RSA
export default function decryptAES(
  data: string,
  key?: string
): string | object | false {
  if (typeof data === 'string') {
    const dt = data;
    const d = AES.decrypt(dt, <string>(key || process.env.AES_KEY)).toString(
      Utf8
    );
    return hasJsonStructure(d) ? JSON.parse(d) : d;
  }
  return false;
}
