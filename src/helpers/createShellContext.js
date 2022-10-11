
import React, {createContext} from 'react'
import {
    isUndefined,
} from './utils'
import {
    error_if_invalid_shellObject,
} from './errors'

const createShellContext = (shellClass, ProviderWrapper) => {
    const shell = new shellClass()
    const Context = createContext()

    const Provider = (props) => {
        const {shell: overriddenShell} = props
        let finalShell = shell

        if (!isUndefined(overriddenShell)) {
            error_if_invalid_shellObject(overriddenShell)
            finalShell = overriddenShell
        }

        return (
            <Context.Provider value={finalShell}>
                <ProviderWrapper {...props} shell={finalShell}/>
            </Context.Provider>
        )
    }

    return {
        Context,
        Provider,
    }
}

export {createShellContext}