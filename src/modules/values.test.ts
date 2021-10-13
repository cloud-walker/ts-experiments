import { values } from './values'

test('it should return empty array', () => {
  expect(values({})).toEqual([])
})

test('it should return values for simple record', () => {
  const record = { a: 1, b: 2, c: 3 }
  expect(values(record)).toEqual([1, 2, 3])
})

test('it should return values for complex record', () => {
  const record = {
    a: 'hello world',
    b: { key1: 'value1', key2: 'value2' },
    c: 100,
  }
  expect(values(record)).toEqual([
    'hello world',
    { key1: 'value1', key2: 'value2' },
    100,
  ])
})
