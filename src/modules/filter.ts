import {Predicate} from './types/Predicate'

export function filter<A>(
  predicate: Predicate<A>,
): <B>(arr: ReadonlyArray<B>) => Array<B>
export function filter<A, B>(
  predicate: Predicate<A>,
  arr: ReadonlyArray<B>,
): Array<B>
export function filter(
  predicate: Predicate<unknown>,
  arr?: ReadonlyArray<unknown>,
) {
  const filterable = (arr: ReadonlyArray<unknown>) => arr.filter(predicate)

  if (arr == null) {
    return filterable
  }

  return filterable(arr)
}
