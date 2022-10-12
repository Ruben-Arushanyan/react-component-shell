---
sidebar_position: 1
title: Introduction
---

# React Component Shell

## Description

**React Component Shell** is a package that allows you to quickly and easily create **react-contexts** and implement **state management**.


## Installation

```bash
npm install react-component-shell
```

## Basic Usage

Let's create a Game shell and use it in the react components.


```js title="game.js"
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

// Let's create a react-context provider and two hooks to access the shell and shell state.
const [ GameProvider, useGame, useGameState ] = createShellProvider({ shellClass: Game })

export {GameProvider, useGame, useGameState}

```

Let's connect the shell in a react components.

```jsx title="App.js"
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