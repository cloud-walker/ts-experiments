import {sum} from './sum'

test('should work properly', () => {
  expect(sum([0, 0, 0])).toBe(0)

  expect(sum([1, 1, 1])).toBe(3)

  expect(sum([0, 10])).toBe(10)
  expect(sum([10, 0])).toBe(10)

  expect(sum([3, 5])).toBe(8)
  expect(sum([5, 3])).toBe(8)

  expect(sum.name).toBe('sum')

  expect(sum(1, 2, 3)).toBe(6)
})
