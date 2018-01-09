import gendiff from '../src';

describe('simple data', () => {
  const expected = `
{
    host: hexlet.io
  + timeout: 20
  - timeout: 50
  - proxy: 123.234.53.22
  + verbose: true
}`;

  test('diff JSON flat files ', () => {
    expect(gendiff('__tests__/__fixtures__/before.json', '__tests__/__fixtures__/after.json')).toBe(expected);
  });

  test('diff YAML flat files ', () => {
    expect(gendiff('__tests__/__fixtures__/before.yaml', '__tests__/__fixtures__/after.yaml')).toBe(expected);
  });

  test('diff INI flat files ', () => {
    expect(gendiff('__tests__/__fixtures__/before.ini', '__tests__/__fixtures__/after.ini')).toBe(expected);
  });
});
