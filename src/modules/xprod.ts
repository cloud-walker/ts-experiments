export function xprod<A, B>(arr1: Array<A>, arr2: Array<B>): Array<[A, B]> {
  let result: Array<[A, B]> = []
  for (let e1 of arr1) {
    const partialResult = []
    for (let e2 of arr2) {
      partialResult.push([e1, e2] as [A, B])
    }
    result = result.concat(partialResult)
  }
  return result
}
