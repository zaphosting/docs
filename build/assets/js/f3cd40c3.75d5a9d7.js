"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[455],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),g=a,d=p["".concat(i,".").concat(g)]||p[g]||m[g]||o;return r?n.createElement(d,s(s({ref:t},u),{},{components:r})):n.createElement(d,s({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=g;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},7169:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={id:"assettocorsa_contentmanager",title:"Configure Server with Content Manager",description:"Information on how to configure your Assetto Corsa server from ZAP-Hosting using the Content Manager - ZAP-Hosting.com Documentation",sidebar_label:"Configure Server with Content Manager"},s=void 0,c={unversionedId:"assettocorsa_contentmanager",id:"assettocorsa_contentmanager",title:"Configure Server with Content Manager",description:"Information on how to configure your Assetto Corsa server from ZAP-Hosting using the Content Manager - ZAP-Hosting.com Documentation",source:"@site/docs/assettocorsa_contentmanager.md",sourceDirName:".",slug:"/assettocorsa_contentmanager",permalink:"/guides/docs/assettocorsa_contentmanager",draft:!1,editUrl:"https://github.com/zaphosting/docs/tree/master/docs/assettocorsa_contentmanager.md",tags:[],version:"current",frontMatter:{id:"assettocorsa_contentmanager",title:"Configure Server with Content Manager",description:"Information on how to configure your Assetto Corsa server from ZAP-Hosting using the Content Manager - ZAP-Hosting.com Documentation",sidebar_label:"Configure Server with Content Manager"},sidebar:"gameserverSidebar",previous:{title:"Configure Server",permalink:"/guides/docs/assettocorsa_configure"},next:{title:"Install Mods",permalink:"/guides/docs/assettocorsa_mods"}},i={},l=[{value:"Preparation",id:"preparation",level:2},{value:"Set Server Slots",id:"set-server-slots",level:2},{value:"Set Map",id:"set-map",level:2},{value:"Set Cars",id:"set-cars",level:2},{value:"Configure FTP Upload",id:"configure-ftp-upload",level:2}],u={toc:l},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Important")," To manage the server with Content Manager, the full version is required, the lite version can ",(0,a.kt)("em",{parentName:"p"},"not")," manage servers.")),(0,a.kt)("h2",{id:"preparation"},"Preparation"),(0,a.kt)("p",null,'First, we open our Content Manager and click on the sandwich menu at the top right, where we select "Server":'),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159136989-b4cfb732-072d-472d-bb8b-8abe97508107.png",alt:"image"})),(0,a.kt)("p",null,"Here we now create a new preset and select it:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159136995-7994802f-4902-47c2-bdde-97187e7ccbf0.png",alt:"image"})),(0,a.kt)("h2",{id:"set-server-slots"},"Set Server Slots"),(0,a.kt)("p",null,"We first need to set how much capacity our server has, in our case our server is only 10 slots, so we select '10' for Capacity:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159137001-22301dbb-838a-46dc-a24c-ebdf903b1768.png",alt:"image"})),(0,a.kt)("h2",{id:"set-map"},"Set Map"),(0,a.kt)("p",null,"Here Imola is selected as map by default, by clicking on the map we can select our own map:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159137008-d2e5e0ef-d3df-402e-9611-66b93b4916fb.png",alt:"image"})),(0,a.kt)("h2",{id:"set-cars"},"Set Cars"),(0,a.kt)("p",null,'Now we change to the tab "Entry List", here we can now add new cars:'),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159137029-f4dcf8ef-c3f6-4428-bb1e-27315637c36a.png",alt:"image"})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159137034-22cb04a5-17a4-4c39-9697-c65fdac44561.png",alt:"image"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note that all car slots are filled and no more than the amount of available slots are set.\n",(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159137039-17947b65-947a-4276-b681-0a7f27b49e3e.png",alt:"image"}))),(0,a.kt)("h2",{id:"configure-ftp-upload"},"Configure FTP Upload"),(0,a.kt)("p",null,'Via the "Advanced" menu we can configure an FTP uploader so that you can upload your server config with one click.'),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159137074-ab04ba8b-29af-499f-a938-f611c6046cce.png",alt:"image"})),(0,a.kt)("p",null,"Now enter your FTP data here:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159137117-597633df-d277-4ae6-b5bc-e155b4fbdf30.png",alt:"image"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'In the "Folder" you must enter the ID of your game server as you see it in the URL of your game server, for example:'),(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://zap-hosting.com/en/customer/gameserver/show/**427814**/ftpBrowser/"},"https://zap-hosting.com/en/customer/gameserver/show/**427814**/ftpBrowser/")))),(0,a.kt)("p",null,"In our case, the whole thing would be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/g427814/assetto-corsa/\n")),(0,a.kt)("p",null,"For AssettoServer: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/g427814/assettoserver/\n")),(0,a.kt)("p",null,'After that you can click on "Upload Content", the config, track and cars that have been configured will be uploaded automatically, then you only need to start your server!'))}m.isMDXComponent=!0}}]);