---
sidebar_position: 1
title: Introduction
---

# React Component Shell

## Description

**React Component Shell** is a package that allows you to quickly and easily create **react-contexts** and implement **state management**.  

**Shell** is a JavaScript class that has certain methods and properties to provide some type of functionality in the project.

The main concept is to create **shell objects** and connect them to react components.

## Installation

```bash
npm install react-component-shell
```

## Basic Usage

Let's create a **Game** shell that has two methods: `run()` and `stop()` that update the `.paused` property of the **state**.

```js title="game.js"
import {Shell} from 'react-component-shell'

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

export {Game}
```

Now let's use the `createShellProvider()` function to create a react-context provider and access hooks for the Game shell.

```js title="game-context.js"
import {createShellProvider} from 'react-component-shell'
import {Game} from './game.js'

const [ GameProvider, useGame, useGameState ] = createShellProvider({ shellClass: Game })

export {GameProvider, useGame, useGameState}
```
The `createShellProvider()` function returns an array with three values. The first value is a provider component, the second value is a react hook that returns a shell object, and the last value is a react hook that return a state value by a selector.

In our example, we created the `GameProvider` provider and `useGame`, `useGameState` hooks.

Now let's use them in react app.

```jsx title="App.js"
import {GameProvider, useGame, useGameState} from './game-context.js'

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

In the example above, we can apply the `useGame()` or `useGameState()` hooks to any component inside the `<GameProvider>`.

`useGame()` returns a game object, and we can call its methods `run()` or `stop()` or read and write its properties.

`useGameState(selector)` returns the value of the state of the game, which is indicated by the **selector** function, and every time the change of the specified value in the state will result in the re-rendering of the given component.