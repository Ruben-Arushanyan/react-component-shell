import {createShellContext} from './helpers/createShellContext'
import {createUseShell} from './helpers/createUseShell'
import {createUseShellState} from './helpers/createUseShellState'
import {getShellClass, getProviderWrapper} from './helpers/utils'


const createShellProvider = (options) => {
    const shellClass = getShellClass(options)
    const ProviderWrapper = getProviderWrapper(options)

    const {Provider, Context} = createShellContext(shellClass, ProviderWrapper)
    const useShell = createUseShell(Context)
    const useShellState = createUseShellState(Context)
    return [Provider, useShell, useShellState]
}


export {createShellProvider}