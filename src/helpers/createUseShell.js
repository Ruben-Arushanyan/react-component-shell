import {useContext} from 'react'

const createUseShell = (context) => {
    return () => {
        return useContext(context)
    }
}

export {createUseShell}