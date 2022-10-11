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

```