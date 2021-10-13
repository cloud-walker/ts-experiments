export function fromPairs<A extends string | number, B>(
  pairs: Array<[A, B]>
): Record<string, B> {
  return Object.fromEntries(pairs)
}
