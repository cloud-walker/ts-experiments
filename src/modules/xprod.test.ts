import { xprod } from './xprod'

test('it should return an empty array', () => {
  expect(xprod(['a', 'b', 'c'], [])).toEqual([])
})

test('it shoul return xprod for simple arrays', () => {
  const arr1 = ['a', 'b', 'c']
  const arr2 = [1, 2]
  const res = [
    ['a', 1],
    ['a', 2],
    ['b', 1],
    ['b', 2],
    ['c', 1],
    ['c', 2],
  ]
  expect(xprod(arr1, arr2)).toEqual(res)
})

test('it should return xprod for complex arrays', () => {
  const arr1 = [1, { a: 1, b: 2, c: 3 }]
  const arr2 = [100, { a: [1, 2, 3], b: { c: 3 } }]
  const res = [
    [1, 100],
    [1, { a: [1, 2, 3], b: { c: 3 } }],
    [{ a: 1, b: 2, c: 3 }, 100],
    [
      { a: 1, b: 2, c: 3 },
      { a: [1, 2, 3], b: { c: 3 } },
    ],
  ]
  expect(xprod(arr1, arr2)).toEqual(res)
})
