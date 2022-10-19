import { hasJsonStructure, safeJsonParse } from '../../utils/json/json.utils';

test('Should confirm has JSON structure', () => {
  let foo: any = { bar: 'baz' };
  let result = hasJsonStructure(JSON.stringify(foo));

  expect(result).toBe(true);

  foo = ['bar', 'baz'];
  result = hasJsonStructure(JSON.stringify(foo));

  expect(result).toBe(true);
});

test('Should confirm has NOT JSON structure', () => {
  let foo: any = 17;
  let result = hasJsonStructure(JSON.stringify(foo));

  expect(result).toBe(false);

  foo = { bar: 'baz' };
  result = hasJsonStructure(foo);

  expect(result).toBe(false);
});

test('Should safely parse JSON', () => {
  const foo = { bar: 'baz' };
  const [error, result] = safeJsonParse(JSON.stringify(foo));

  expect(error).toBeUndefined();
  expect(result).toBeInstanceOf(Object);
});

test('Should reject safe JSON parse', () => {
  const foo: any = 17;
  const [error, result] = safeJsonParse(foo);

  expect(result).toBeUndefined();
  expect(error).toBeInstanceOf(Error);
});
