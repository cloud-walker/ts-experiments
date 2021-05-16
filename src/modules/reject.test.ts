import {reject} from './reject'

const isEven = (n: number) => n % 2 == 0

test('works properly', () => {
  expect(reject(isEven, [1, 2, 3])).toEqual([1, 3])
  expect(reject(isEven)([1, 2, 3])).toEqual([1, 3])
})
