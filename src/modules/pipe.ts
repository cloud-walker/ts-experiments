export const pipe = (funcOrValue, ...functions) => {
  if (typeof funcOrValue != 'function') {
    return functions.reduce((acc, val) => val(acc), funcOrValue)
  }
}
