import {add} from './add'

export const sum = (nums: Array<number> | number, ...args: Array<number>) => {
  const list = Array.isArray(nums) ? nums : [nums, ...args]

  return list.reduce(add)
}
