import {useContext} from 'react'

import { ShellContext } from './ShellProvider'

const useShell = () => {
    return useContext(ShellContext)
}

export {
    useShell, 
}
