"use strict";(self.webpackChunkreact_component_shell_website=self.webpackChunkreact_component_shell_website||[]).push([[106],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,h=m["".concat(c,".").concat(d)]||m[d]||p[d]||s;return n?a.createElement(h,l(l({ref:t},i),{},{components:n})):a.createElement(h,l({ref:t},i))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<s;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2530:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const s={sidebar_position:2,title:"Shell"},l=void 0,o={unversionedId:"shell",id:"shell",title:"Shell",description:"The Shell is a base class that provides the necessary methods and attributes for the class objects.",source:"@site/docs/shell.md",sourceDirName:".",slug:"/shell",permalink:"/react-component-shell/docs/shell",draft:!1,editUrl:"https://github.com/Ruben-Arushanyan/react-component-shell/edit/master/website/docs/shell.md",tags:[],version:"current",lastUpdatedBy:"Ruben Arushanyan",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Shell"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/react-component-shell/docs/introduction"},next:{title:"createShellProvider",permalink:"/react-component-shell/docs/createShellProvider"}},c={},u=[{value:"Import",id:"import",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"API",id:"api",level:2},{value:"<strong>state</strong>",id:"state",level:3},{value:"<strong>updateState</strong>",id:"updatestate",level:3},{value:"<strong>subscribe</strong>",id:"subscribe",level:3},{value:"<strong>subscribeSelector</strong>",id:"subscribeselector",level:3},{value:"<strong>prevState</strong>",id:"prevstate",level:3}],i={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Shell")," is a base class that provides the necessary methods and attributes for the class objects."),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { Shell } from 'react-component-shell'\n")),(0,r.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,r.kt)("p",null,"Let's create a ",(0,r.kt)("strong",{parentName:"p"},"Game")," shell."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="game.js"',title:'"game.js"'},"import {Shell} from 'react-component-shell'\n\nclass Game extends Shell {\n   state = { paused: true }\n\n   run() {\n      this.updateState(state => {\n          return {...state, paused: false}\n      })\n   }\n   \n   stop() {\n      this.updateState(state => {\n          return {...state, paused: true}\n      })\n   }\n}\n\nexport {Game}\n\n")),(0,r.kt)("p",null,"Now let's create a game object and interact with it\u2024"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},"import {Game} from './game.js'\n\n// create game instance\nconst game = new Game()\n\n// print game state\nconsole.log(game.state) // { paused: true }\n\n// run the game\ngame.run()\n\n// print game state\nconsole.log(game.state) // { paused: false }\n\n// print game preview state\nconsole.log(game.prevState) // { paused: true }\n\n// update game state\ngame.updateState(state => {\n   return {...state, score: 100}\n})\n\n// print game state\nconsole.log(game.state) // { paused: false,  score: 100}\n\n// subscribe game state changes.\ngame.subscribe((state, prevState) => {\n    console.log('game state changed:', state)\n})\n\n// subscribe certain state value change which is defined by the selector.\ngame.subscribeSelector(state => state.score, (value, prevValue) => {\n    console.log('score changed:', value)\n})\n\n// stop the game\ngame.stop()\n\n")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#state"},"state")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#updatestate"},"updateState")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#subscribe"},"subscribe")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#subscribeselector"},"subscribeSelector")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#prevstate"},"prevState"))),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"state"},(0,r.kt)("strong",{parentName:"h3"},"state")),(0,r.kt)("p",null,"Get the current state of the shell.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"shell.state")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { Shell } from 'react-component-shell'\n\nclass Game extends Shell {\n   state = { paused: true }\n}\n\nconst game = new Game()\n\n// Get the current state \ngame.state // { paused: true }\n")),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"updatestate"},(0,r.kt)("strong",{parentName:"h3"},"updateState")),(0,r.kt)("p",null,"Change shell state value.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"shell.updateState(updater)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"updater")," ",(0,r.kt)("inlineCode",{parentName:"li"},"<Function>"),(0,r.kt)("br",{parentName:"li"}),"Updater is a function that receives the current state as an argument, and the returned value will be the new state of the shell.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { Shell } from 'react-component-shell'\n\nclass Game extends Shell {\n   state = { paused: true }\n}\n\nconst game = new Game()\n\n// Update state\ngame.updateState(state => {\n    return {...state, paused: false}\n})\n\ngame.state // { paused: false }\n")),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"subscribe"},(0,r.kt)("strong",{parentName:"h3"},"subscribe")),(0,r.kt)("p",null,"Subscribe state changes.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"shell.subscribe(callback)"),"  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"callback")," ",(0,r.kt)("inlineCode",{parentName:"li"},"<Function>"),(0,r.kt)("br",{parentName:"li"}),"A callback is a function that will be called when the state changes\u2024 It gets the new state in the first argument and the previous state in the second argument\u2024")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { Shell } from 'react-component-shell'\n\nclass Game extends Shell {\n   state = { paused: true }\n}\n\nconst game = new Game()\n\ngame.subscribe((state, prevState) => {\n    console.log('state changed:', state)\n})\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Return value:"),(0,r.kt)("br",{parentName:"p"}),"\n","The subscribe method returns a function to unsubscribe the passed callback from listening to state changes."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"const unsubscribe = shell.subscibe(callback)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { Shell } from 'react-component-shell'\n\nclass Game extends Shell {\n   state = { paused: true }\n}\n\nconst game = new Game()\n\nconst unsubscribe = game.subscribe((state, prevState) => {\n    console.log('state changed:', state)\n})\n\n// unsubscribe after 10 seconds\nsetTimeout(() => {\n    unsubscribe()\n}, 10000)\n")),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"subscribeselector"},(0,r.kt)("strong",{parentName:"h3"},"subscribeSelector")),(0,r.kt)("p",null,"Subscribe certain values change which is defined by the selector\u2024",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"shell.subscribeSelector(selector, callback)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"selector")," ",(0,r.kt)("inlineCode",{parentName:"li"},"<Function>"),(0,r.kt)("br",{parentName:"li"}),"The selector is a function that receives state as a first argument and returns a certain selected value."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"callback")," ",(0,r.kt)("inlineCode",{parentName:"li"},"<Function>"),(0,r.kt)("br",{parentName:"li"}),"A callback is a function that will be called when the selected value changes\u2024 It gets the new value in the first argument and the previous value in the second argument\u2024")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { Shell } from 'react-component-shell'\n\nclass Game extends Shell {\n   state = { paused: true }\n}\n\nconst game = new Game()\n\ngame.subscribeSelector(state => state.paused, (value, prevValue) => {\n    console.log('paused value changed:', value)\n})\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Return value:"),(0,r.kt)("br",{parentName:"p"}),"\n","The subscribeSelector method returns a function to unsubscribe the passed callback from listening to selected value changes."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"const unsubscribe = shell.subscribeSelector(selector, callback)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { Shell } from 'react-component-shell'\n\nclass Game extends Shell {\n   state = { paused: true }\n}\n\nconst game = new Game()\n\nconst unsubscribe = game.subscribeSelector(state => state.paused, (value, prevValue) => {\n    console.log('paused value changed:', value)\n})\n\n// unsubscribe after 10 seconds\nsetTimeout(() => {\n    unsubscribe()\n}, 10000)\n")),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"prevstate"},(0,r.kt)("strong",{parentName:"h3"},"prevState")),(0,r.kt)("p",null,"Get the previous state of the shell.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"shell.prevState")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { Shell } from 'react-component-shell'\n\nclass Game extends Shell {\n   state = { paused: true }\n}\n\nconst game = new Game()\n\ngame.updateState(state => {\n    return {...state, paused: false}\n})\n// Get the current state \ngame.state // {paused: false}\n\n// Get the previous state \ngame.prevState // {paused: true}\n\n")))}p.isMDXComponent=!0}}]);