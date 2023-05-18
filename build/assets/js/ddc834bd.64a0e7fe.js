"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7554],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=o,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6380:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={id:"redm_change_servericon",title:"Change server icon for the server list",description:"Information on how to change RedM server icon from ZAP-Hosting - ZAP-Hosting.com documentation",sidebar_label:"Change server icon"},i=void 0,s={unversionedId:"redm_change_servericon",id:"redm_change_servericon",title:"Change server icon for the server list",description:"Information on how to change RedM server icon from ZAP-Hosting - ZAP-Hosting.com documentation",source:"@site/docs/redm_change_servericon.md",sourceDirName:".",slug:"/redm_change_servericon",permalink:"/guides/docs/redm_change_servericon",draft:!1,editUrl:"https://github.com/zaphosting/docs/tree/master/docs/redm_change_servericon.md",tags:[],version:"current",frontMatter:{id:"redm_change_servericon",title:"Change server icon for the server list",description:"Information on how to change RedM server icon from ZAP-Hosting - ZAP-Hosting.com documentation",sidebar_label:"Change server icon"},sidebar:"gameserverSidebar",previous:{title:"Become admin",permalink:"/guides/docs/fivem_qbcore_admin"},next:{title:"Resource installation",permalink:"/guides/docs/redm_installresources"}},c={},l=[{value:"Preparation",id:"preparation",level:2},{value:"Installation",id:"installation",level:2}],u={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You want to customize your server and give it your own icon image? Don't worry, this can be done easily! In the following we will explain you which aspects have to be considered and how the setup is done. "),(0,o.kt)("h2",{id:"preparation"},"Preparation"),(0,o.kt)("p",null,"The use of a custom server icon requires certain requirements. The requirements include that the image file has a size of 96x96 pixels and that the image format is in PNG. Once you've chosen the image you want and made it fit the requirements, you are ready to start setting it up. "),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"The setup of an own icon is done via FTP. FTP allows you to upload the image file to your server. If you are not familiar with this yet, then we recommend to have a look at the ",(0,o.kt)("a",{parentName:"p",href:"/guides/docs/gameserver_ftpaccess"},"FTP access")," guide. Navigate to the folder ",(0,o.kt)("inlineCode",{parentName:"p"},"gXXXX/gta-fivem/server-data/")," and upload your server icon file there."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159137598-e4bd90d5-047e-4b16-8020-b9fc7c68f007.png",alt:"image"})),(0,o.kt)("p",null,"Copy the filename of your uploaded icon and open the server.cfg config file. You can also open it via FTP or in your game server dashboard under the Configs tab. Browse the file for the line ",(0,o.kt)("inlineCode",{parentName:"p"},"load_server_icon"),". The value of the command must match the name of your uploaded file. You can skip the renaming step if you keep the name of the original file. "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159137604-c8383001-abef-4cc9-ae10-e270c7aa33b3.png",alt:"image"})),(0,o.kt)("p",null,"The last step is to restart the server so that the change is applied and displayed. You will see the result in the server list or via direct connection."))}d.isMDXComponent=!0}}]);