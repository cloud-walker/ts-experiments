import {Predicate} from './types/Predicate'

export function filter<A>(
  predicate: Predicate<A>,
): <B>(arr: ReadonlyArray<B>) => Array<B>
export function filter<A, B>(
  predicate: Predicate<A>,
  arr: ReadonlyArray<B>,
): Array<B>
export function filter<Value>(
  predicate: Predicate<Value>,
  arr?: ReadonlyArray<Value>,
) {
  const _filter = (arr: ReadonlyArray<Value>) => {
    let result = []

    for (const value of arr) {
      if (predicate(value)) {
        result.push(value)
      }
    }

    return result
  }

  return arr != null ? _filter(arr) : _filter
}
