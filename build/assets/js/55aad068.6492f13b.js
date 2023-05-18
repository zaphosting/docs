"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4604],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2684:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={id:"fivem_rcon",title:"Use Rcon",description:"Information on how to use Rcon on your FiveM server to send commands to the server - ZAP-Hosting.com documentation",sidebar_label:"Use Rcon"},a=void 0,s={unversionedId:"fivem_rcon",id:"fivem_rcon",title:"Use Rcon",description:"Information on how to use Rcon on your FiveM server to send commands to the server - ZAP-Hosting.com documentation",source:"@site/docs/fivem_rcon.md",sourceDirName:".",slug:"/fivem_rcon",permalink:"/guides/docs/fivem_rcon",draft:!1,editUrl:"https://github.com/zaphosting/docs/tree/master/docs/fivem_rcon.md",tags:[],version:"current",frontMatter:{id:"fivem_rcon",title:"Use Rcon",description:"Information on how to use Rcon on your FiveM server to send commands to the server - ZAP-Hosting.com documentation",sidebar_label:"Use Rcon"},sidebar:"gameserverSidebar",previous:{title:"Coloured Servername",permalink:"/guides/docs/fivem_servername_color"},next:{title:"Own License Key",permalink:"/guides/docs/fivem_licensekey"}},c={},l=[{value:"What is Rcon?",id:"what-is-rcon",level:2},{value:"Preparation",id:"preparation",level:3},{value:"Define rcon password",id:"define-rcon-password",level:3},{value:"Usage",id:"usage",level:3}],d={toc:l},u="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-rcon"},"What is Rcon?"),(0,o.kt)("p",null,"Rcon is a protocol for executing commands on the server without having direct access to the console."),(0,o.kt)("h3",{id:"preparation"},"Preparation"),(0,o.kt)("p",null,"A suitable Rcon tool is required for the use. For example, the well-known Rcon tool Icecon can be used for this. This example is based on Icecon. The tool can be set up by downloading and executing the icecon_windows_amd64.exe."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159168520-9b0e166a-9ae9-47ef-8121-733b447092e0.png",alt:"image"})),(0,o.kt)("p",null,"An additional installation is not required. The program can be started right away. To establish the connection, the information about the IP address, port and rcon password is required."),(0,o.kt)("h3",{id:"define-rcon-password"},"Define rcon password"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Configuration via the settings")),(0,o.kt)("p",null,'With the FiveM server products "FiveM (Linux/Windows/ESX RP Server/QBCore)" the rcon password can be defined under the settings by default. The password defined there is then required for the following rcon connection via Icecon.'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/26007280/190453536-bbe82057-9772-45a4-bdb0-1dc6e5bc7884.png",alt:"image"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Configuration via the server config")),(0,o.kt)("p",null,"The rcon password can alternatively also be set directly via the server config. The value of the following command must be adjusted for this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'rcon_password "DeinWunschRconPasswort"\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"To manage it via the server config, the option of the rcon field must first be deactivated under the settings. ")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"txAdmin:")," The definition of the rcon password is only possible via the server config for txAdmin.")),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("p",null,'Once the password has been defined and the server has been restarted, the rcon connection can be established. To do this, complete the two fields IP:Port and Password (Rcon) with the information from your server and click on "OK". '),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159168532-0b80c7c5-16e0-4a3b-8b06-907c2846f5d4.png",alt:"image"})),(0,o.kt)("p",null,"The connection will be established afterwards and you can now execute your desired commands there!"))}p.isMDXComponent=!0}}]);