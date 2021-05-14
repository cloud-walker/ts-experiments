import {pipe} from './pipe'
import {upper} from './upper'

const exclaim = (value: string) => value + '!'
const doubleSay = (value: string) => value + value

test('works properly', () => {
  {
    const pipeFunc = pipe(upper, exclaim, doubleSay)
    expect(pipeFunc('hi')).toBe('HI!HI!')
  }
})
