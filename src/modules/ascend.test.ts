import {ascend} from './ascend'
import {sortWith} from './sortWith'

const nums = [1, 2, 3, 4, 5] as const
const isEven = (n: number) => n % 2 == 0

test('works properly', () => {
  expect(sortWith([ascend(isEven)], nums)).toEqual([1, 3, 5, 2, 4])
})

test('supports partial application', () => {
  expect(sortWith([ascend(isEven)])(nums)).toEqual([1, 3, 5, 2, 4])
})
