"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[659],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,f=c["".concat(p,".").concat(d)]||c[d]||l[d]||o;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5859:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={id:"fivem-steam-web-api-key",title:"Steam Web API Key setup",description:"Information on Steam Web Api key setup - ZAP-Hosting.com Documentation",sidebar_label:"Steam Web API Key"},i=void 0,s={unversionedId:"fivem-steam-web-api-key",id:"fivem-steam-web-api-key",title:"Steam Web API Key setup",description:"Information on Steam Web Api key setup - ZAP-Hosting.com Documentation",source:"@site/docs/fivem-steam-web-api-key.md",sourceDirName:".",slug:"/fivem-steam-web-api-key",permalink:"/guides/docs/fivem-steam-web-api-key",draft:!1,editUrl:"https://github.com/zaphosting/docs/tree/master/docs/fivem-steam-web-api-key.md",tags:[],version:"current",frontMatter:{id:"fivem-steam-web-api-key",title:"Steam Web API Key setup",description:"Information on Steam Web Api key setup - ZAP-Hosting.com Documentation",sidebar_label:"Steam Web API Key"},sidebar:"gameserverSidebar",previous:{title:"Gamechange",permalink:"/guides/docs/fivem_gamechange"},next:{title:"Whitelist",permalink:"/guides/docs/fivem_whitelist"}},p={},u=[{value:"Requirements",id:"requirements",level:2},{value:"API Key request",id:"api-key-request",level:2},{value:"API Key einf\xfcgen",id:"api-key-einf\xfcgen",level:2}],m={toc:u},c="wrapper";function l(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"A Steam Web API key has important uses for FiveM. This includes authentication by the API Key when Steam is used as identifier by different scripts and/or resources."),(0,a.kt)("p",null,"A non-limited Steam account is required to request an API key. Restricted Steam accounts have limited access to Steam's features, so without full access it is not possible to request an API key. You have to spend at least ",(0,a.kt)("strong",{parentName:"p"},"5.00 USD")," in the Steam store to unlock your account and its features."),(0,a.kt)("h2",{id:"api-key-request"},"API Key request"),(0,a.kt)("p",null,"Once you have a Steam account and already spent more than ",(0,a.kt)("strong",{parentName:"p"},"5.00 USD")," in the store, you should be able to request your own Steam API key. To do so, sign up ",(0,a.kt)("a",{parentName:"p",href:"https://steamcommunity.com/dev/apikey"},"here")," with your Steam account name and password.\n",(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/115637675/195389732-939c0a8e-f011-4242-8048-97bb51122a58.png",alt:"image"})),(0,a.kt)("p",null,"You will now have to enter a domain name, confirm the terms of use for the Steam API and click on ",(0,a.kt)("em",{parentName:"p"},'"Register "'),". The domain will be your ",(0,a.kt)("strong",{parentName:"p"},"server IP")," ",(0,a.kt)("em",{parentName:"p"},"(without port)"),", so enter it there."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/115637675/195401735-0615a6e3-ea01-4a77-97ce-f91d3d753bee.png",alt:"image"})),(0,a.kt)("p",null,"If everything went well, you should be able to see your own Steam Web API Key, as shown below."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/115637675/195397282-c79aff45-2e38-49f9-bf1a-3efd563b3294.png",alt:"image"})),(0,a.kt)("h2",{id:"api-key-einf\xfcgen"},"API Key einf\xfcgen"),(0,a.kt)("p",null,"So now that we have our API key, we just need to add it to ",(0,a.kt)("strong",{parentName:"p"},"server.cfg"),".Open the ",(0,a.kt)("em",{parentName:"p"},"server.cfg")," via ",(0,a.kt)("strong",{parentName:"p"},"Configs")," and insert the key at the line ",(0,a.kt)("strong",{parentName:"p"},'set steam_webApiKey ""'),".\n",(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/115637675/195388724-bdbf700a-a636-45d2-9a21-92b1e2af304a.png",alt:"image"})),(0,a.kt)("p",null,"If you do not have this line/command, you can easily add it later on:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'set steam_webApiKey "KEYS"\n')),(0,a.kt)("p",null,"Restart your server once to apply the change."))}l.isMDXComponent=!0}}]);