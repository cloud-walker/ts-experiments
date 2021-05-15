type Transform<A, B> = (a: A) => B

function pipeReducer<A, B>(value: A, fn: Transform<A, B>) {
  return fn(value)
}

export function pipe<A, B>(ab: Transform<A, B>): Transform<A, B>
export function pipe<A, B, C>(
  ab: Transform<A, B>,
  bc: Transform<B, C>,
): Transform<A, C>
export function pipe<A, B, C, D>(
  ab: Transform<A, B>,
  bc: Transform<B, C>,
  cd: Transform<C, D>,
): Transform<A, D>

export function pipe<A>(x: A): A
export function pipe<A, B>(x: A, ab: Transform<A, B>): B
export function pipe<A, B, C>(x: A, ab: Transform<A, B>, bc: Transform<B, C>): C
export function pipe<A, B, C, D>(
  x: A,
  ab: Transform<A, B>,
  bc: Transform<B, C>,
  cd: Transform<C, D>,
): D

export function pipe(x: unknown, ...fns: Transform<unknown, unknown>[]) {
  if (typeof x == 'function') {
    return (value: unknown) => x(fns.reduce(pipeReducer, value))
  }

  return fns.reduce(pipeReducer, x)
}
