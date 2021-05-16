export function includes<Value>(
  value: Value,
): <ArrayContent>(arr: ReadonlyArray<ArrayContent>) => boolean
export function includes<Value, ArrayContent>(
  value: Value,
  arr: ReadonlyArray<ArrayContent>,
): boolean
export function includes(value: unknown, arr?: ReadonlyArray<unknown>) {
  const includer = (arr: ReadonlyArray<unknown>) => arr.includes(value)

  if (arr == null) {
    return includer
  }

  return includer(arr)
}
