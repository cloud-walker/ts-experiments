export const curry = (fn: Function) => {
  const functionName = `curry(${fn.name || 'unkown'})`

  if (fn.length <= 1) {
    throw new Error(
      `${functionName} :: The given function must have at least 2 parameters`,
    )
  }

  const curriedFunction = (...args: Array<unknown>) => {
    if (args.length >= fn.length) {
      return fn.apply(null, args)
    }

    return curriedFunction.bind(null, ...args)
  }

  Object.defineProperty(curriedFunction, 'name', {value: functionName})

  return curriedFunction
}
