import {Predicate} from './types/Predicate'
import {complement} from './complement'
import {filter} from './filter'

export function reject<A, B>(
  predicate: Predicate<A>,
  arr: ReadonlyArray<B>,
): Array<B>
export function reject<A>(
  predicate: Predicate<A>,
): <B>(arr: ReadonlyArray<B>) => Array<B>
export function reject(
  predicate: Predicate<unknown>,
  arr?: ReadonlyArray<unknown>,
) {
  const rejectable = filter(complement(predicate))

  if (arr == null) {
    return rejectable
  }

  return rejectable(arr)
}
