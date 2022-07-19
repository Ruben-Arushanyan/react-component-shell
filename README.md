[1]: https://react-component-shell.js.org
[2]: https://github.com/ruben-arushanyan
[3]: https://github.com/Ruben-Arushanyan/react-component-shell/blob/master/LICENSE
# React Component Shell
## Description

**react-component-shell** is a package that allows you to create a shell object and to connect to the react component.

## Usage

```js
import {Shell, defineExternalAPI} from 'Libs/react-component-shell'
import {SecureEventEmitter} from 'Libs/secure-event-emitter'

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
import { ShellProvider } from 'Libs/react-component-shell'

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
import {useShell} from 'Libs/react-component-shell'

// ...
const shell = useShell()
// ...
```

## Get the shell state from the react component

```js
import {useShellState} from 'Libs/react-component-shell'

// ...
const isPause = useShellState(state => state.isPause)
// ...
```

## Authors

- [Ruben Arushanyan][2]
## License

[MIT License][3]
