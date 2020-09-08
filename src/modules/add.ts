import {curry} from './curry'

export const add = curry((a: number, b: number) => a + b)

Object.defineProperty(add, 'name', {value: 'add'})
