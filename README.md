# [React Component Shell](https://ruben-arushanyan.github.io/react-component-shell/)
> You can find the full documentation on the [website](https://ruben-arushanyan.github.io/react-component-shell/)

**react-component-shell** is a package that allows you to quickly and easily create **react-contexts** and implement **state management**.

## Installation

```bash
npm install react-component-shell
```

## Basic Usage

Let's create a Game shell and use it in the react components.

*game.js*
```js
import {Shell, createShellProvider} from 'react-component-shell'

class Game extends Shell {
   state = { paused: true }
   run() {
      this.updateState(state => {
          return {...state, paused: false}
      })
   }
   stop() {
      this.updateState(state => {
          return {...state, paused: true}
      })
   }
}

const [
    GameProvider,
    useGame, 
    useGameState
] = createShellProvider({ shellClass: Game })

export {GameProvider, useGame, useGameState}

```

*App.js*
```jsx
import {GameProvider, useGame, useGameState} from './game'

const App = (props) => {
    return (
        <GameProvider>
            <GamePauseButton />
        </GameProvider>
    )
}

const GamePauseButton = (props) => {
    const game = useGame()
    const paused = useGameState(state => state.paused)

    const clickHandler = () => {
        if (paused) {
            game.run()
        } else {
            game.stop()
        }
    }

    return <button onClick={clickHandler}>{ paused ? 'Run' : 'Stop' }</button>
    
}

export default App
```

<br/>

## [Documentation](https://ruben-arushanyan.github.io/react-component-shell/)


- ### [Introduction](https://ruben-arushanyan.github.io/react-component-shell/docs/introduction)
- ### [Shell](https://ruben-arushanyan.github.io/react-component-shell/docs/shell)
- ### [createShellProvider](https://ruben-arushanyan.github.io/react-component-shell/docs/createShellProvider)


<br/>

## [Contributing](https://github.com/ruben-arushanyan/react-component-shell/blob/master/CONTRIBUTING.md)

Read our [contributing guide](https://github.com/ruben-arushanyan/react-component-shell/blob/master/CONTRIBUTING.md) to learn about our development process.

## [Code of Conduct](https://github.com/ruben-arushanyan/react-component-shell/blob/master/CODE_OF_CONDUCT.md)

This project has adopted the [Contributor Covenant](https://www.contributor-covenant.org) as its Code of Conduct, and we expect project participants to adhere to it. Please read the [full text](https://github.com/ruben-arushanyan/react-component-shell/blob/master/CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

## Authors

- [Ruben Arushanyan](https://github.com/ruben-arushanyan)
## License

[MIT License](https://github.com/Ruben-Arushanyan/react-component-shell/blob/master/LICENSE)
