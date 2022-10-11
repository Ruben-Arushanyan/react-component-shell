import {useEffect, useState, useContext} from 'react'
import {error_if_invalid_selector} from './errors'

const createUseShellState = (Context) => {
    return (selector) => {
        error_if_invalid_selector(selector)
        const shell = useContext(Context)
        const [,forceUpdate] = useState({})

        useEffect(() => {
            return shell.subscribeSelector(selector, () => {
                forceUpdate({})
            })
        }, [shell, selector])

        return selector(shell.state)
    }
}

export {createUseShellState}