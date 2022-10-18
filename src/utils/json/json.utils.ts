/** @see https://stackoverflow.com/a/52799327/2405887  */

export function hasJsonStructure(str: string): boolean {
  if (typeof str !== 'string') return false;
  try {
    const r = JSON.parse(str);
    const t = Object.prototype.toString.call(r);
    return t === '[object Object]' || t === '[object Array]';
  } catch (e) {
    return false;
  }
}

export function safeJsonParse(str: string): [undefined, Object] | [Error] {
  try {
    if (typeof str !== 'string') throw new Error('Invalid JSON string.');
    return [undefined, JSON.parse(str)];
  } catch (e) {
    return [e as Error];
  }
}
