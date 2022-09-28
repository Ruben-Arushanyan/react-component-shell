[1]: https://react-component-shell.js.org
[2]: https://github.com/ruben-arushanyan
[3]: https://github.com/Ruben-Arushanyan/react-component-shell/blob/master/LICENSE
# React Component Shell
## Description

**react-component-shell** is a package that allows you to create a shell object and to connect to the react component.

## Installation

```bash
npm install react-component-shell
```
## Usage

```js
import {Shell, defineExternalAPI} from 'react-component-shell'
import {SecureEventEmitter} from 'secure-event-emitter'

class GameShell extends Shell {
    #emitterKey = Symbol('Game Shell emitterKey')

    emitter = new SecureEventEmitter(
        ['pause', 'run'],
        this.#emitterKey
    )

    state={
        isPause: true
    }

    // methods
    pause = () => {
        this.setState(state => {
            state.isPause = true
        })
        this.emitter.unlock(this.#emitterKey).emit('pause')
    }
    run = (payload) => {
        this.setState(state => {
            state.isPause = false
        })
        this.emitter.unlock(this.#emitterKey).emit('play')
    }
}


export default defineExternalAPI(
    GameShell,
    (shell) => ({
        emitter: shell.emitter,
        pause: shell.pause,
        run: shell.run,
    }),
)
```

## Connect to the react component

```js
import { ShellProvider } from 'react-component-shell'

// ...
 const game_shell = new GameShell()
// ...

    <ShellProvider shell={game_shell}>
        <GameComponent />
    </ShellProvider>
// ...
```

## Get the shell from the react component

```js
import {useShell} from 'react-component-shell'

// ...
const shell = useShell()
// ...
```

## Get the shell state from the react component

```js
import {useShellState} from 'react-component-shell'

// ...
const isPause = useShellState(state => state.isPause)
// ...
```

## [Contributing](https://github.com/ruben-arushanyan/react-component-shell/blob/master/CONTRIBUTING.md)

Read our [contributing guide](https://github.com/ruben-arushanyan/react-component-shell/blob/master/CONTRIBUTING.md) to learn about our development process.

## [Code of Conduct](https://github.com/ruben-arushanyan/react-component-shell/blob/master/CODE_OF_CONDUCT.md)

This project has adopted the [Contributor Covenant](https://www.contributor-covenant.org) as its Code of Conduct, and we expect project participants to adhere to it. Please read the [full text](https://github.com/ruben-arushanyan/react-component-shell/blob/master/CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

## Authors

- [Ruben Arushanyan][2]
## License

[MIT License][3]
