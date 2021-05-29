import {add} from './add'
import {map} from './map'

test('works properly', () => {
  expect(map(add(5), [1, 2, 3])).toEqual([6, 7, 8])
})

test('supports partial application', () => {
  expect(map(add(5))([1, 2, 3])).toEqual([6, 7, 8])
})
