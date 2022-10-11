---
sidebar_position: 2
description: react-component-shell is a package that allows you to quickly and easily create react-contexts and implement state management.
title: Shell
---

The Shell is a base class that provides the necessary methods and attributes for the class objects.

## Import

```js
import { Shell } from 'react-component-shell'
```

## Basic Usage

Let's create a Game shell.

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
Now let's create a game object and interact with it․

```js title="index.js"
import {Game} from './game'

// create game instance
const game = new Game()

// print game state
console.log(game.state) // { paused: true }

// run the game
game.run()

// print game state
console.log(game.state) // { paused: false }

// print game preview state
console.log(game.prevState) // { paused: true }

// update game state
game.updateState(state => {
   return {...state, score: 100}
})

// print game state
console.log(game.state) // { paused: false,  score: 100}

// subscribe game state changes.
game.subscribe((state, prevState) => {
    console.log('game state changed:', state)
})

// subscribe certain state value change which is defined by the selector.
store.subscribeSelector(state => state.score, (value, prevValue) => {
    console.log('score changed:', value)
})

// stop the game
game.stop()

```

<br/>

## API

- [state](#state)
- [updateState](#updatestate)
- [subscribe](#subscribe)
- [subscribeSelector](#subscribeselector)
- [prevState](#prevstate)

<br></br>

### **state**  
Get the current state of the shell.  
`shell.state`

```js
import { Shell } from 'react-component-shell'

class Game extends Shell {
   state = { paused: true }
}

const game = new Game()

// Get the current state 
game.state // { paused: true }
```

<br></br>

### **updateState**  
Change shell state value.  
`shell.updateState(updater)`

- **updater** `<Function>`  
    Updater is a function that receives the current state as an argument, and the returned value will be the new state of the shell.

```js
import { Shell } from 'react-component-shell'

class Game extends Shell {
   state = { paused: true }
}

const game = new Game()

// Update state
game.updateState(state => {
    return {...state, paused: false}
})

game.state // { paused: false }
```

<br></br>

### **subscribe**  
Subscribe state changes.  
`shell.subscribe(callback)`  

- **callback** `<Function>`  
    A callback is a function that will be called when the state changes․ It gets the new state in the first argument and the previous state in the second argument․

```js
import { Shell } from 'react-component-shell'

class Game extends Shell {
   state = { paused: true }
}

const game = new Game()

game.subscribe((state, prevState) => {
    console.log('state changed:', state)
})
```

*Return value:*  
The subscribe method returns a function to unsubscribe the passed callback from listening to state changes.

`const unsubscribe = shell.subscibe(callback)`

```js
import { Shell } from 'react-component-shell'

class Game extends Shell {
   state = { paused: true }
}

const game = new Game()

const unsubscribe = game.subscribe((state, prevState) => {
    console.log('state changed:', state)
})

// unsubscribe after 10 seconds
setTimeout(() => {
    unsubscribe()
}, 10000)
```

<br></br>

### **subscribeSelector**  
Subscribe certain values change which is defined by the selector․  
`shell.subscribeSelector(selector, callback)`

- **selector** `<Function>`  
    The selector is a function that receives state as a first argument and returns a certain selected value.
- **callback** `<Function>`  
    A callback is a function that will be called when the selected value changes․ It gets the new value in the first argument and the previous value in the second argument․

```js
import { Shell } from 'react-component-shell'

class Game extends Shell {
   state = { paused: true }
}

const game = new Game()

game.subscribeSelector(state => state.paused, (value, prevValue) => {
    console.log('paused value changed:', value)
})
```

*Return value:*  
The subscribeSelector method returns a function to unsubscribe the passed callback from listening to selected value changes.

`const unsubscribe = shell.subscribeSelector(selector, callback)`

```js
import { Shell } from 'react-component-shell'

class Game extends Shell {
   state = { paused: true }
}

const game = new Game()

const unsubscribe = game.subscribeSelector(state => state.paused, (value, prevValue) => {
    console.log('paused value changed:', value)
})

// unsubscribe after 10 seconds
setTimeout(() => {
    unsubscribe()
}, 10000)
```

<br></br>

### **prevState**  
Get the previous state of the shell.  
`shell.prevState`

```js
import { Shell } from 'react-component-shell'

class Game extends Shell {
   state = { paused: true }
}

const game = new Game()

game.updateState(state => {
    return {...state, paused: false}
})
// Get the current state 
game.state // {paused: false}

// Get the previous state 
game.prevState // {paused: true}

```
