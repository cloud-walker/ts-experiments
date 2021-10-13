import { fromPairs } from './fromPairs'

test('works properly with empty array', () => {
  expect(fromPairs([])).toEqual({})
})

test('works properly from simple array of pairs', () => {
  expect(
    fromPairs([
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ])
  ).toEqual({ a: 1, b: 2, c: 3 })
})

test('works properly from complex array of pairs', () => {
  const value = [
    ['key1', 'value1'],
    [200, 123456],
    ['abc123', { a: 1, b: 2, c: 3 }],
  ]
  const result = {
    key1: 'value1',
    200: 123456,
    abc123: { a: 1, b: 2, c: 3 },
  }
  expect(fromPairs(value)).toEqual(result)
})
