type Comparator<T> = (a: T, b: T) => 1 | -1 | 0

export function sortWith<T>(
  comparators: readonly Comparator<T>[],
): (data: readonly T[]) => T[]
export function sortWith<T>(
  comparators: readonly Comparator<T>[],
  data: readonly T[],
): T[]
export function sortWith<T>(
  comparators: readonly Comparator<T>[],
  data?: readonly T[],
) {
  const _sortWith = (data: readonly T[]) =>
    [...data].sort((a, b) => {
      let result = 0

      for (const comparator of comparators) {
        result = comparator(a, b)

        if (result !== 0) {
          break
        }
      }

      return result
    })

  return data != null ? _sortWith(data) : _sortWith
}
