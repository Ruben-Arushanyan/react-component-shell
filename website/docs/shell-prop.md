---
sidebar_position: 4
title: 'shell property'
---

Sometimes we need to access the **shell object** outside of react-components and control the shell from anywhere in our project. We can easily do this by passing the **shell object** to the **Shell Provider** via the `shell` property․

## Example

Let's create a `Count` shell, which stores the count **state** and has an `increment()` method to add the count by one.

```js title="count.js"
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

const [
    CountProvider,
    useCount,
    useCountState,
] = createShellProvider()

export {CountProvider, useCount, useCountState}
```

As we noticed, we didn't pass any arguments to the `createShellProvider()` function.

Now let's use `<CountProvider>` with **shell** property.

```jsx title="App.js"
import {CountProvider, useCount, useCountState} from './count-context.js'
import {Count} from './count.js'

// highlight-start
const countShell = new Count()
setInterval(() => {
    countShell.increment()
}, 1000)
// highlight-end

const App = (props) => {
    return (
        // highlight-next-line
        <CountProvider shell={countShell}>
            <CurrentCount />
        </CountProvider>
    )
}

const CurrentCount = () => {
    const count = useCountState(state => state.count)

    return <div>{count}</div>
}

export default App
```

In the example above, we created a `countShell` object and passed it to the `<CountProvider>` via the **shell** property. Outside of the `<App>` component, we declared `setInterval()` which increments the count every second.
