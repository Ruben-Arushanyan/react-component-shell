const {
    useState,
} = require('react')
const {
    useShell,
} = require('./useShell')
const {
    useListener,
} = require('secure-event-emitter/react')
const {
    isFunction,
} = require('./utils')

const useShellState = (selector) => {
    if (!isFunction(selector)) {
        throw new TypeError('[[useShellState]] argument type must be a [[Function]]')
    }
    const shell = useShell()
    const [selectedState, setSelectedState] = useState(selector(shell.state))

    useListener(shell.onStateChange, (state) => {
        const newSelectedState = selector(state)
        if (newSelectedState !== selectedState) {
            setSelectedState(newSelectedState)
        }
    })

    return selectedState
}

module.exports = {
    useShellState,
}