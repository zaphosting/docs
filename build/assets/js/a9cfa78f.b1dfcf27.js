"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5617],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),g=a,h=p["".concat(l,".").concat(g)]||p[g]||m[g]||o;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7799:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={id:"fivem_gamechange",title:"Gamechange",description:"Change your FiveM Version",sidebar_label:"Gamechange"},i=void 0,c={unversionedId:"fivem_gamechange",id:"fivem_gamechange",title:"Gamechange",description:"Change your FiveM Version",source:"@site/docs/fivem_gamechange.md",sourceDirName:".",slug:"/fivem_gamechange",permalink:"/guides/docs/fivem_gamechange",draft:!1,editUrl:"https://github.com/zaphosting/docs/tree/master/docs/fivem_gamechange.md",tags:[],version:"current",frontMatter:{id:"fivem_gamechange",title:"Gamechange",description:"Change your FiveM Version",sidebar_label:"Gamechange"},sidebar:"gameserverSidebar",previous:{title:"Enable DLC Gamebuild",permalink:"/guides/docs/fivem_gamebuild"},next:{title:"Steam Web API Key",permalink:"/guides/docs/fivem-steam-web-api-key"}},l={},u=[{value:"Changing your FiveM Version",id:"changing-your-fivem-version",level:2},{value:"The change in detail",id:"the-change-in-detail",level:2}],s={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"changing-your-fivem-version"},"Changing your FiveM Version"),(0,a.kt)("p",null,"Thanks to our gamecloud, you can easily switch between all fivem versions for free."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f The change between the linux based Games (txAdmin, ESX Roleplay, FiveM Linux) to Windows, will erase all data")),(0,a.kt)("p",null,'You should always have a backup of your data, you can easily create one in your "Backup"-tab in the interface.'),(0,a.kt)("h2",{id:"the-change-in-detail"},"The change in detail"),(0,a.kt)("p",null,'To change the game (the version) of your FiveM-Server, you need to open "Games" in our interface.'),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159138107-da3e5822-307c-41d1-ab79-fd68c2963f53.png",alt:"image"})),(0,a.kt)("p",null,'There you can see all Fivem versions in "Available Games", simply search there "FiveM"'),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159138109-12d76fc3-9309-48d8-8808-bf3395034f81.png",alt:"image"})),(0,a.kt)("p",null,"Choose the version of your like and press the green button to start the installation. There will be a popup which requires a confirmation to start the process."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f A change between Linux and Windows, changes the ip address of your server, if you haven't booked your own")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f If you switch between ESX RP, Linux or txAdmin you need to enable the version after the installation with the blue button in Games")))}m.isMDXComponent=!0}}]);