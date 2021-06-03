import {Predicate} from './types/Predicate'

export function complement<A>(predicate: Predicate<A>): Predicate<A> {
  const _complement = (a: A) => !predicate(a)

  return _complement
}
