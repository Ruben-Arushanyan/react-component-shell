const {
    createContext,
    memo,
} = require('react')

const {privateSymbol} = require('./privateSymbol')
const {Shell} = require('./Shell')
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

module.exports = {
    ShellProvider,
    ShellContext,
}