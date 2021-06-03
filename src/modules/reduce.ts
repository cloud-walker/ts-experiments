import {Reducer} from './types/Reducer'

export function reduce<Accumulator, Value>(
  reducer: Reducer<Accumulator, Value>,
  initialValue: Accumulator,
): (arr: ReadonlyArray<Value>) => Accumulator

/**
 * This case covers point-free partial-applicated mono-type reducers
 * like "add(number, number)"
 */
export function reduce<Value>(
  reducer: Reducer<Value, Value>,
  initialValue: Value,
): (arr: ReadonlyArray<Value>) => Value

export function reduce<Accumulator, Value>(
  reducer: Reducer<Accumulator, Value>,
  initialValue: Accumulator,
  arr: ReadonlyArray<Value>,
): Accumulator
export function reduce<Accumulator, Value>(
  reducer: Reducer<Accumulator, Value>,
  initialValue: Accumulator,
  arr?: ReadonlyArray<Value>,
) {
  const _reduce = (arr: ReadonlyArray<Value>) => {
    let result = initialValue

    for (const value of arr) {
      result = reducer(result, value)
    }

    return result
  }

  return arr != null ? _reduce(arr) : _reduce
}
