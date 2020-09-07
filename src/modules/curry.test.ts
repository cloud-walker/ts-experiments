import {add} from './add'
import {curry} from './curry'

test('should work properly', () => {
  const cAdd = curry(add)

  expect(cAdd.name).toBe('curry(add)')

  expect(cAdd(1, 2)).toBe(3)
  expect(cAdd(1)(2)).toBe(3)

  const add2 = cAdd(2)

  expect(add2).toBeInstanceOf(Function)
  expect(add2(3)).toBe(5)
})

test('should fail for insufficient parameters', () => {
  expect(() => curry(() => {})).toThrow()
  expect(() => curry((a: number) => a + a)).toThrow()
})
