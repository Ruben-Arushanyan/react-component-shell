---
sidebar_position: 2
---

**createShellProvider** is a function with the help of which we can create a react-context provider and hooks for a certain shell type.

## Import

```js
import { createShellProvider } from 'react-component-shell'
```

## Basic Usage

Let's create a `Count` class, which stores the count **state** and has an `increment()` method to add the count by one. The `Count` class inherits from the `Shell` class, which provides additional methods for **state management**. For example, the `updateState()` method, with the help of which we update the **state** of the `Count` class. For more details about the `Shell` base class, please see them [here](/docs/shell)

```js title="Count.js"
import { Shell } from 'react-component-shell'

class Count extends Shell {
    state = {count: 0}

    increment() {
        this.updateState(state => {
            return {count: state.count + 1}
        })
    }
}

export {Count}
```

Now let's use `createShellProvider` function to create a react-context provider and hooks.

```js title="count-context.js"
import { createShellProvider } from 'react-component-shell'
import { Count } from './Count.js'

const [
    CountProvider,
    useCount,
    useCountState,
] = createShellProvider({ shellClass: Count })

export {CountProvider, useCount, useCountState}
```

Now let's use in react component.

```jsx title="App.js"
import {CountProvider, useCount, useCountState} from './count-context.js'

const App = (props) => {
    return (
        <CountProvider>
            <CurrentCount />
            <IncrementButton />
        </CountProvider>
    )
}

const CurrentCount = () => {
    const count = useCountState(state => state.count)

    return <div>{count}</div>
}

const IncrementButton = (props) => {
    const countShell = useCount()

    const increment = () => {
        countShell.increment()
    }

    return <button onClick={increment}>Increment</button>
}

export default App
```