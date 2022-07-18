const {useContext} = require('react')

const { ShellContext } = require('./ShellProvider')

const useShell = () => {
    return useContext(ShellContext)
}

module.exports = {
    useShell, 
}