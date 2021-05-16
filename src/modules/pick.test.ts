import {pick} from './pick'

test('works properly', () => {
  expect(pick(['bar'], {foo: 1, bar: 2, baz: 3})).toEqual({bar: 2})
  expect(pick(['bar', 'baz'], {foo: 1, bar: 2, baz: 3})).toEqual({
    bar: 2,
    baz: 3,
  })
  expect(pick(['zz'], {foo: 1, bar: 2, baz: 3})).toEqual({})
})
