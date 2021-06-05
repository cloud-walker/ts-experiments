import {sortWith} from './sortWith'

const nums = [5, 4, 3, 2, 1] as const
const compareNums = (a: number, b: number) => (a === b ? 0 : a < b ? -1 : 1)
const evenFirst = (a: number, b: number) => {
  const aMod = a % 2
  const bMod = b % 2

  if (aMod == bMod) {
    return 0
  }

  if (aMod == 0) {
    return -1
  }

  return 1
}

test('works properly', () => {
  {
    const result = sortWith([compareNums], nums)

    expect(result).toEqual([1, 2, 3, 4, 5])
  }

  {
    const result = sortWith([evenFirst], nums)

    expect(result).toEqual([4, 2, 5, 3, 1])
  }

  {
    const result = sortWith([evenFirst, compareNums], nums)

    expect(result).toEqual([2, 4, 1, 3, 5])
  }
})

test('supports partial application', () => {
  const sortNums = sortWith([compareNums])
  const sortEvenAndASC = sortWith([evenFirst, compareNums])

  expect(sortNums(nums)).toEqual([1, 2, 3, 4, 5])
  expect(sortEvenAndASC(nums)).toEqual([2, 4, 1, 3, 5])
})
