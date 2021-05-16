import {Predicate} from './types/Predicate'

export function complement<A>(predicate: Predicate<A>): Predicate<A> {
  const complementable = (a: A) => !predicate(a)

  return complementable
}
