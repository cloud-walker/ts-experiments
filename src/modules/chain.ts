export function chain<A, B extends readonly A[], C>(
  transform: (value: A, index: keyof B, arr: B) => C,
  arr: B
): C[]

export function chain<A, B extends readonly A[], C>(
  transform: (value: A, index: keyof B, arr: B) => C
): (arr: B) => C[]

export function chain(
  transform: (value: unknown, index: number, arr: unknown[]) => unknown,
  arr?: unknown[]
) {
  const mappable = (arr: unknown[]) => arr.flatMap(transform)

  return arr != null ? mappable(arr) : mappable
}
