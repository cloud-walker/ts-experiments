import { identity } from './identity'

test('it should return true', () => {
  const a = identity(true)
  expect(identity(true)).toEqual(true)
})

test('it should return false', () => {
  expect(identity(false)).toEqual(false)
})

test('it should return a number', () => {
  expect(identity(10)).toEqual(10)
})

test('it should return an object', () => {
  expect(identity({ a: 1, b: 2, c: 3 })).toEqual({ a: 1, b: 2, c: 3 })
})

test('it should return an array', () => {
  expect(identity([1, 2, 'test', 'help'])).toEqual([1, 2, 'test', 'help'])
})
