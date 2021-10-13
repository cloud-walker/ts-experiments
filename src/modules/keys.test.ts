import { keys } from './keys'

test('work properly with empty object', () => {
  expect(keys({})).toEqual([])
})

test('works properly with a simple object', () => {
  expect(keys({ a: 1, b: 2, c: 3 })).toEqual(['a', 'b', 'c'])
})

test('works properly with a simple object', () => {
  const value = {
    a: {
      key1: {
        key2: {
          key3: {
            test: 'test',
          },
        },
      },
    },
  }
  expect(keys(value)).toEqual(['a'])
})
