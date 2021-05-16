import {filter} from './filter'

const isEven = (n: number) => n % 2 == 0

test('works properly', () => {
  expect(filter(isEven, [1, 2, 3])).toEqual([2])
  expect(filter(isEven)([1, 2, 3])).toEqual([2])
})
