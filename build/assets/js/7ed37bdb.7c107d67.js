"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8572],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),c=s(n),p=a,g=c["".concat(l,".").concat(p)]||c[p]||u[p]||i;return n?r.createElement(g,o(o({ref:t},d),{},{components:n})):r.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var m={};for(var l in t)hasOwnProperty.call(t,l)&&(m[l]=t[l]);m.originalType=e,m[c]="string"==typeof e?e:a,o[1]=m;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},123:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>m,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={id:"valheim_admin",title:"Server Admin Commands & Cheats",description:"Information about admin commands and cheats for your Valheim server from ZAP-Hosting - ZAP-Hosting.com documentation",sidebar_label:"Admin Commands & Cheats"},o=void 0,m={unversionedId:"valheim_admin",id:"valheim_admin",title:"Server Admin Commands & Cheats",description:"Information about admin commands and cheats for your Valheim server from ZAP-Hosting - ZAP-Hosting.com documentation",source:"@site/docs/valheim_admin.md",sourceDirName:".",slug:"/valheim_admin",permalink:"/guides/docs/valheim_admin",draft:!1,editUrl:"https://github.com/zaphosting/docs/tree/master/docs/valheim_admin.md",tags:[],version:"current",frontMatter:{id:"valheim_admin",title:"Server Admin Commands & Cheats",description:"Information about admin commands and cheats for your Valheim server from ZAP-Hosting - ZAP-Hosting.com documentation",sidebar_label:"Admin Commands & Cheats"},sidebar:"gameserverSidebar",previous:{title:"Serverlisting Problems",permalink:"/guides/docs/valheim_serverlisting"},next:{title:"Valheim Plus",permalink:"/guides/docs/valheim_plus"}},l={},s=[{value:"Adding yourself as Admin",id:"adding-yourself-as-admin",level:2},{value:"Getting your Steam ID",id:"getting-your-steam-id",level:3},{value:"Access the Console",id:"access-the-console",level:2},{value:"Admin Commands",id:"admin-commands",level:3}],d={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"adding-yourself-as-admin"},"Adding yourself as Admin"),(0,a.kt)("h3",{id:"getting-your-steam-id"},"Getting your Steam ID"),(0,a.kt)("p",null,"To Add yourself as Admin, you first need to get your SteamID64, you can use a tool like the ",(0,a.kt)("a",{parentName:"p",href:"https://steamidfinder.com/"},"Steam ID Finder")),(0,a.kt)("p",null,"Here you enter your Steam URL:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159179966-154bb929-edcc-42aa-965e-cb747bb463f8.png",alt:"image"})),(0,a.kt)("p",null,"Then press ",(0,a.kt)("inlineCode",{parentName:"p"},"Find Steam ID")),(0,a.kt)("p",null,'Now we should be able to see our Steam Profile, here we copy our "Steam64ID (Dec)".'),(0,a.kt)("p",null,'Now we open our Servers Webinterface and open the Settings Page, here we will see an "Admins" Option where we can add our Steam ID:'),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159179970-41e1601a-b06c-4579-8360-b25bf0ac582f.png",alt:"image"})),(0,a.kt)("p",null,"After we have added our Steam ID, we save the Settings and then Restart the Server."),(0,a.kt)("h2",{id:"access-the-console"},"Access the Console"),(0,a.kt)("p",null,'The Console in Valheim can be accessed by pressing "F5" While Ingame, there you can type all Admin Commands or Cheats'),(0,a.kt)("h3",{id:"admin-commands"},"Admin Commands"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Command"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Arguments"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Effect"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"kick"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Name/PlayerID/IP"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Kicks the specified Player")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ban"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Name/PlayerID/IP"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Bans the specified Player")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"unban"),(0,a.kt)("td",{parentName:"tr",align:"center"},"PlayerID/IP"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Unbans the specified Player")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"banned"),(0,a.kt)("td",{parentName:"tr",align:"center"},"None"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Shows all banned Players")))))}u.isMDXComponent=!0}}]);