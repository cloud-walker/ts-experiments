import {add} from './add'
import {reduce} from './reduce'
import {Reducer} from './types/Reducer'
import {UnknownObject} from './types/UnknownObject'

type FooBar = Partial<{foo: number; bar: number; baz: number}>
const addFooBar: Reducer<number, FooBar> = (a, b) =>
  a + (b.foo ?? b.bar ?? b.baz ?? 0)
const merge = (a: UnknownObject, b: UnknownObject) => ({...a, ...b})
const nums = [1, 2, 3] as const
const fooBars = [{foo: 1}, {bar: 2}, {baz: 3}] as const

test('works properly', () => {
  {
    const result = reduce(add, 0, nums)
    expect(result).toBe(6)
  }

  {
    const result = reduce(add, 0, [])
    expect(result).toBe(0)
  }

  {
    const result = reduce(merge, {}, fooBars)
    expect(result).toEqual({foo: 1, bar: 2, baz: 3})
  }

  {
    const result = reduce(merge, {}, [])
    expect(result).toEqual({})
  }
})

test('supports partial application', () => {
  const sum = reduce(add, 0)
  const mergeAll = reduce(merge, {})
  const sumFooBar = reduce(addFooBar, 0)

  {
    const result = sum(nums)
    expect(result).toBe(6)
  }

  {
    const result = sumFooBar(fooBars)
    expect(result).toBe(6)
  }

  {
    const result = mergeAll(fooBars)
    expect(result).toEqual({foo: 1, bar: 2, baz: 3})
  }
})
