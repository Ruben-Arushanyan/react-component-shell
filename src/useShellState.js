import {
    useState,
} from 'react'
import {
    useShell,
} from './useShell'
import {
    useListener,
} from 'secure-event-emitter/react'
import {
    isFunction,
} from './utils'

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

export {
    useShellState,
}