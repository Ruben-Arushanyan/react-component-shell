import {
    isConstructable,
    isFunction,
} from './utils'
import {
    privateSymbol,
} from './privateSymbol'

function defineExternalAPI(Private, apiCreator) {
    if (!isFunction(apiCreator)) {
        throw new TypeError('defineExternalAPI apiCreator must be a function')
    }
    return function (...args) {
        const _private = isConstructable(Private) ? new Private(...args) : Private(...args)
        const externalAPI = apiCreator(_private)

        // require methods
        externalAPI.addPlugin = _private.addPlugin
        externalAPI.addPlugins = _private.addPlugins
        externalAPI.removePlugin = _private.removePlugin
        externalAPI.onStateChange = _private.onStateChange
        externalAPI.onPluginAdd = _private.onPluginAdd
        externalAPI.onPluginRemove = _private.onPluginRemove
        externalAPI.getState = _private.getState


        _private._publicAPI = externalAPI
        externalAPI[privateSymbol] = _private
        return externalAPI
    }
}

export {
    defineExternalAPI,
}