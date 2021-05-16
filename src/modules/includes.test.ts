import {includes} from './includes'

const subject = ['foo', 'bar', 'baz']

test('works properly', () => {
  expect(includes('foo', subject)).toBe(true)
  expect(includes('asd', subject)).toBe(false)

  expect(includes('foo')(subject)).toBe(true)
  expect(includes('asd')(subject)).toBe(false)
})
