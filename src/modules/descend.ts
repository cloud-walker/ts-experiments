import {sortWith} from './sortWith'
import {Comparator} from './types/Comparator'

export function descend<A, B>(transform: (value: A) => B) {
  const _ascend = (a: A, b: A) => {
    const aa = transform(a)
    const bb = transform(b)
    return aa > bb ? -1 : aa < bb ? 1 : 0
  }

  return _ascend
}

const isEven = (value: number) => value % 2 == 0

const foo = sortWith([descend(isEven)], [1, 2, 3, 4, 5])
