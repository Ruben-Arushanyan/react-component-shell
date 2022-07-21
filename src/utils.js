const isFunction = (x) => typeof x === 'function'
const isString = (x) => typeof x === 'string'
const isObject = (x) => (typeof x === 'object') && (x !== null)
const isConstructable = fn => {
  try {
    new (new Proxy(fn, { construct: () => ({}) }))()
    return true
  } catch (err) {
    return false
  }
}

export {
  isFunction,
  isString,
  isObject,
  isConstructable,
}