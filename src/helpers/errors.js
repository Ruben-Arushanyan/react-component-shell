import {
    isShellClass,
    isFunction,
    isShellObject,
} from './utils'

export const error_if_invalid_shellClass = (shellClass) => {
    if (!isShellClass(shellClass)) {
        throw new TypeError('Invalid shellClass. The shellClass must inherit from the Shell class')
    }
}


export const error_if_invalid_shellObject = (shellObject) => {
    if (!isShellObject(shellObject)) {
        throw new TypeError('Invalid shell value. The shell object must inherit from the Shell class')
    }
}

export const error_if_invalid_customProviderWrapper = (customProviderWrapper) => {
    if (!isFunction(customProviderWrapper)) {
        throw new TypeError('Invalid customProviderWrapper. The customProviderWrapper must be a valid react component')
    }
}

export const error_if_invalid_selector = (selector) => {
    if (!isFunction(selector)) {
        throw new TypeError('Invalid selector. The selector must be a function')
    }
}