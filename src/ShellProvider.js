import React, {
    createContext,
    memo,
} from 'react'

import {privateSymbol} from './privateSymbol'
import {Shell} from './Shell'

const defaultShell = new Shell()
const ShellContext = createContext(defaultShell)

const ShellProvider = memo((props) => {
    const {
        shell,
        children,
    } = props

    const private_shell = shell[privateSymbol] || shell

    return (
        <ShellContext.Provider value={private_shell}>
            {children}
        </ShellContext.Provider>
    )
})

export {
    ShellProvider,
    ShellContext,
}
