import {descend} from './descend'
import {sortWith} from './sortWith'

const nums = [1, 2, 3, 4, 5] as const
const isEven = (n: number) => n % 2 == 0

test('works properly', () => {
  expect(sortWith([descend(isEven)], nums)).toEqual([2, 4, 1, 3, 5])
})

test('supports partial application', () => {
  expect(sortWith([descend(isEven)])(nums)).toEqual([2, 4, 1, 3, 5])
})
