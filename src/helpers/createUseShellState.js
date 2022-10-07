import {useEffect, useState, useContext} from 'react'
import {error_if_invalid_selector} from './errors'

const createUseShellState = (Context) => {
    return (selector) => {
        error_if_invalid_selector(selector)
        const shell = useContext(Context)
        const [value, setValue] = useState(selector(shell.state))

        useEffect(() => {
            setValue(selector(shell.state))
            const unsubscribe = shell.subscribeSelector(selector, () => {
                setValue(selector(shell.state))
            })
            return () => unsubscribe()
        }, [shell, selector])

        return value
    }
}

export {createUseShellState}