import { add } from './add'
import { chain } from './chain'

const double = (n: number) => n + n
const duplicate = (n: number) => [n, n]

test('works properly with a function which return an element', () => {
  expect(chain(double, [1, 2, 3])).toEqual([2, 4, 6])
})

test('works properly with a function which return array', () => {
  expect(chain(duplicate, [1, 2, 3])).toEqual([1, 1, 2, 2, 3, 3])
})

test('supports partial application', () => {
  expect(chain(duplicate)([1, 2, 3])).toEqual([1, 1, 2, 2, 3, 3])
})
