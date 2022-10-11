import {Shell} from '../Shell'
import {DEFAULT_PROVIDER_WRAPPER} from './DEFAULT_PROVIDER_WRAPPER'
import {DEFAULT_SHELL} from './DEFAULT_SHELL'
import {
    error_if_invalid_shellClass,
    error_if_invalid_customProviderWrapper,
} from './errors'

const isFunction = (x) => typeof x === 'function'
const isUndefined = (x) => typeof x === 'undefined'
const isShellClass = (x) => (x?.prototype instanceof Shell)
const isShellObject = (x) => (x instanceof Shell)


const getShellClass = options => {
  const shellClass = options?.shellClass
  if (isUndefined(shellClass)) {
      return DEFAULT_SHELL
  }
  error_if_invalid_shellClass(shellClass)
  return shellClass
}

const getProviderWrapper = options => {
  const customProviderWrapper = options?.customProviderWrapper
  if (isUndefined(customProviderWrapper)) {
      return DEFAULT_PROVIDER_WRAPPER
  }
  error_if_invalid_customProviderWrapper(customProviderWrapper)
  return customProviderWrapper
}

export {
  isFunction,
  isUndefined,
  isShellClass,
  isShellObject,

  getShellClass,
  getProviderWrapper,
}