export const pipe = (funcOrValue, ...functions) => {
  if (typeof funcOrValue != 'function') {
    return functions.reduce((acc, val) => val(acc), funcOrValue)
  }

  return (value) =>
    [funcOrValue, ...functions].reduce((acc, val) => val(acc), value)
}
