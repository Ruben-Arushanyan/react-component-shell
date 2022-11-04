---
sidebar_position: 5
title: 'customProviderWrapper'
---

Every time when we create a context provider using `createShellProvider()` function. Its default creates a component wrapper that just returns the children's components.

```jsx
const DEFAULT_PROVIDER_WRAPPER = (props) => {
    const {children, shell} = props
    return children
}
```

In most cases, this is what we want, but we may want to define our custom wrapper according to our requirements. To do this, we need to use the **customProviderWrapper** option when creating a provider.

## Syntax

`createShellProvider({ customProviderWrapper: CustomProvider })`

- **customProviderWrapper** ? `<ReactComponent>`  
    Any react component that overrides the shell provider component, and with the use of that, we can customize the shell provider component to our requirements.

## Example

```jsx
import { Shell, createShellProvider } from 'react-component-shell'

class Count extends Shell {
    state = {count: 0}
}

// highlight-start
const CustomProvider = (props) => {
    const {children, shell} = props
    return (
        <div>
            <h1>Hello</h1>
            {children}
        </div>
    )
}
// highlight-end

const [CountProvider, useCount, useCountState] = createShellProvider({ 
    shellClass: Count,
    // highlight-next-line
    customProviderWrapper: CustomProvider
})
```