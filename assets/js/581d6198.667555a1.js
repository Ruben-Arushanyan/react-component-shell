"use strict";(self.webpackChunkreact_component_shell_website=self.webpackChunkreact_component_shell_website||[]).push([[106],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=i(n),d=a,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2530:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:2,description:"react-component-shell is a package that allows you to quickly and easily create react-contexts and implement state management.",title:"Shell"},l=void 0,s={unversionedId:"shell",id:"shell",title:"Shell",description:"react-component-shell is a package that allows you to quickly and easily create react-contexts and implement state management.",source:"@site/docs/shell.md",sourceDirName:".",slug:"/shell",permalink:"/react-component-shell/docs/shell",draft:!1,editUrl:"https://github.com/Ruben-Arushanyan/react-component-shell/edit/master/website/docs/shell.md",tags:[],version:"current",lastUpdatedBy:"Ruben Arushanyan",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"react-component-shell is a package that allows you to quickly and easily create react-contexts and implement state management.",title:"Shell"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/react-component-shell/docs/introduction"},next:{title:"createShellProvider",permalink:"/react-component-shell/docs/createShellProvider"}},c={},i=[{value:"Import",id:"import",level:2},{value:"Basic Usage",id:"basic-usage",level:2}],p={toc:i};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Shell is a base class that provides the necessary methods and attributes for the class objects."),(0,a.kt)("h2",{id:"import"},"Import"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { Shell } from 'react-component-shell'\n")),(0,a.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,a.kt)("p",null,"Let's create a Game shell."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="game.js"',title:'"game.js"'},"import {Shell} from 'react-component-shell'\n\nclass Game extends Shell {\n   state = { paused: true }\n\n   run() {\n      this.updateState(state => {\n          return {...state, paused: false}\n      })\n   }\n   \n   stop() {\n      this.updateState(state => {\n          return {...state, paused: true}\n      })\n   }\n}\n\n")))}u.isMDXComponent=!0}}]);