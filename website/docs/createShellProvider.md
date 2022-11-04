---
sidebar_position: 2
title: 'createShellProvider()'
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

Now let's use the `createShellProvider()` function to create a react-context provider and access hooks for the Count shell.

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

The `createShellProvider()` function returns an array with three values. The first value is a provider component, the second value is a react hook that returns a shell object, and the last value is a react hook that return a state value by a selector.

In our example, we created the `CountProvider` provider and `useCount`, `useCountState` hooks.

Now let's use them in react app.

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

In the example above, we can apply the `useCount()` or `useCountState()` hooks to any component inside the `<CountProvider>`.

`useCount()` returns a game object, and we can call its method `increment()` or read and write its properties.

`useCountState(selector)` returns the value of the state of the countShell, which is indicated by the **selector** function, and every time the change of the specified value in the state will result in the re-rendering of the given component.


## Syntax

### `createShellProvider(options?)`

- **options** ? `<Object>`
    - **shellClass** ? `<Class>`  
    Any JavaScript class that inherits from the [Shell](/docs/shell) class.

    Example:
    ```js
    import { Shell, createShellProvider } from 'react-component-shell'

    class Count extends Shell {
        state = {count: 0}
    }

    const [CountProvider, useCount, useCountState] = createShellProvider({
        // highlight-next-line
        shellClass: Count
    })
    ```
    Default: 
    ```js
    class DEFAULT_SHELL extends Shell {}
    ```
    <br/>

    - **customProviderWrapper** ? `<ReactComponent>`  
    Any react component that overrides the shell provider component, and with the use of that, we can customize the shell provider component to our requirements.

    Example:
    ```jsx
    import { Shell, createShellProvider } from 'react-component-shell'

    class Count extends Shell {
        state = {count: 0}
    }
    const CustomProvider = (props) => {
        const {children, shell} = props
        return (
            <div>
                <h1>Hello</h1>
                {children}
            </div>
        )
    }

    const [CountProvider, useCount, useCountState] = createShellProvider({ 
        shellClass: Count,
        // highlight-next-line
        customProviderWrapper: CustomProvider
    })
    ```
    Default: 
    ```js
    const DEFAULT_PROVIDER_WRAPPER = (props) => {
        const {children, shell} = props
        return children
    }
    ```
    For more details about the **customProviderWrapper**, please see them [here](/docs/customProviderWrapper)