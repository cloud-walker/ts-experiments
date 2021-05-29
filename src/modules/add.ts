export function add(a: number, b: number): number
export function add(a: number): (b: number) => number
export function add(a: number, b?: number) {
  const adder = (b: number) => a + b

  return b != null ? adder(b) : adder
}
