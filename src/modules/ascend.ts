export function ascend<A, B>(transform: (value: A) => B) {
  const _ascend = (a: A, b: A) => {
    const aa = transform(a)
    const bb = transform(b)
    return aa < bb ? -1 : aa > bb ? 1 : 0
  }

  return _ascend
}
