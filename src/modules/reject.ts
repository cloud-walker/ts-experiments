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
export function reject<Value>(
  predicate: Predicate<Value>,
  arr?: ReadonlyArray<Value>,
) {
  const _reject = filter(complement(predicate))

  return arr != null ? _reject(arr) : _reject
}
