import {filter} from './filter'

const isEven = (n: number) => n % 2 == 0

const nums = [1, 2, 3, 4, 5, 6] as const

test('works properly', () => {
  const evens = filter(isEven, nums)

  expect(evens).toEqual([2, 4, 6])
})

test('supports partial application', () => {
  const filterEvens = filter(isEven)

  expect(filterEvens(nums)).toEqual([2, 4, 6])
})
