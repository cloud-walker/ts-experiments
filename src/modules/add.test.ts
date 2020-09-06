import {add} from './add'

test('should work properly', () => {
  expect(add(0, 0)).toBe(0)

  expect(add(1, 1)).toBe(2)

  expect(add(0, 10)).toBe(10)
  expect(add(10, 0)).toBe(10)

  expect(add(3, 5)).toBe(8)
  expect(add(5, 3)).toBe(8)
})
