"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5562],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=p(a),m=n,d=g["".concat(l,".").concat(m)]||g[m]||u[m]||s;return a?r.createElement(d,i(i({ref:t},c),{},{components:a})):r.createElement(d,i({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[g]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<s;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6658:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const s={id:"ragemp_installpackages",title:"Installing packages on servers",description:"Information on how to install packages on your RageMP server from ZAP-Hosting - ZAP-Hosting.com documentation",sidebar_label:"Installing packages"},i=void 0,o={unversionedId:"ragemp_installpackages",id:"ragemp_installpackages",title:"Installing packages on servers",description:"Information on how to install packages on your RageMP server from ZAP-Hosting - ZAP-Hosting.com documentation",source:"@site/docs/ragemp_installpackages.md",sourceDirName:".",slug:"/ragemp_installpackages",permalink:"/guides/docs/ragemp_installpackages",draft:!1,editUrl:"https://github.com/zaphosting/docs/tree/master/docs/ragemp_installpackages.md",tags:[],version:"current",frontMatter:{id:"ragemp_installpackages",title:"Installing packages on servers",description:"Information on how to install packages on your RageMP server from ZAP-Hosting - ZAP-Hosting.com documentation",sidebar_label:"Installing packages"},sidebar:"gameserverSidebar",previous:{title:"Resource installation",permalink:"/guides/docs/redm_installresources"},next:{title:"Resource Installation",permalink:"/guides/docs/altv_installresources"}},l={},p=[{value:"Connect via FTP",id:"connect-via-ftp",level:2},{value:"RageMP Packages",id:"ragemp-packages",level:2},{value:"Client packages",id:"client-packages",level:3},{value:"Server packages",id:"server-packages",level:3}],c={toc:p},g="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(g,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"connect-via-ftp"},"Connect via FTP"),(0,n.kt)("p",null,"Before packages can be installed, the ",(0,n.kt)("a",{parentName:"p",href:"/guides/docs/gameserver_ftpaccess"},"FTP-Access")," must be set up:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159178012-0172691b-d49f-49d6-ab34-cc01eadbacf5.png",alt:"image"})),(0,n.kt)("h2",{id:"ragemp-packages"},"RageMP Packages"),(0,n.kt)("p",null,'RageMP packages are extensions or modifications.\nRageMP distinguishes between "',(0,n.kt)("strong",{parentName:"p"},"Client"),'" and "',(0,n.kt)("strong",{parentName:"p"},"Server"),'" packages'),(0,n.kt)("h3",{id:"client-packages"},"Client packages"),(0,n.kt)("p",null,'Client-side packages are used to edit the in-game user interface or other visual effects.\nThe client-side packages are uploaded to the "',(0,n.kt)("strong",{parentName:"p"},"client_packages"),'" folder'),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/26007280/189705362-37e49dcd-0fbf-479d-ab58-548c25f4704b.png",alt:"image"})),(0,n.kt)("p",null,'In this folder a "',(0,n.kt)("strong",{parentName:"p"},"gamemode"),'" folder and a "',(0,n.kt)("strong",{parentName:"p"},"index.js"),'" file will be created.\nThe "',(0,n.kt)("strong",{parentName:"p"},"index.js"),'" file is important as soon as all scripts have been uploaded. '),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/26007280/189705391-d9403807-a2bc-4093-a00a-69bf8424defe.png",alt:"image"})),(0,n.kt)("p",null,'In the "',(0,n.kt)("strong",{parentName:"p"},"gamemode"),'" folder the scripts are uploaded, which you want to use on the server.'),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/26007280/189705412-54cacbd1-fa8e-4d9d-a439-a1e8058ae51e.png",alt:"image"})),(0,n.kt)("p",null,'As soon as all desired scripts have been uploaded, the previously created "',(0,n.kt)("strong",{parentName:"p"},"index.js"),'" must be edited.\nThere for each script the line ',(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"require(./gamemode/DEINSCRIPTNAME.js);"))," is inserted"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159178015-9106b7ea-41c4-4876-868c-dbca30410d62.png",alt:"image"})),(0,n.kt)("h3",{id:"server-packages"},"Server packages"),(0,n.kt)("p",null,"Server side packages are used to edit basic settings from the server.\nFor example: Spawn, players, cars, markers"),(0,n.kt)("p",null,'The server side packages are uploaded to the "',(0,n.kt)("strong",{parentName:"p"},"packages"),'" folder'),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159178021-7b030066-b72a-41a9-9baa-c9abba124ff2.png",alt:"image"})),(0,n.kt)("p",null,"In this folder another folder will be created, the name of this folder is freely selectable."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159178028-2b2bbd99-c4a1-4422-b4c8-bad298aefea7.png",alt:"image"})),(0,n.kt)("p",null,"Once the folder is created, this folder will be filled with the server-side scripts."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159178033-5240c361-d4de-40dd-8d1f-64d207529842.png",alt:"image"})),(0,n.kt)("p",null,'After all desired scripts are on the server a "',(0,n.kt)("strong",{parentName:"p"},"index.js"),'" must be created in the same folder.'),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/26007280/189705458-b76e51c6-152e-4a7c-9f33-e8b693ec7c8b.png",alt:"image"})),(0,n.kt)("p",null,"There for each script the line ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"require(./DEINSCRIPTNAME.js);"))," is inserted"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159178015-9106b7ea-41c4-4876-868c-dbca30410d62.png",alt:null})),(0,n.kt)("p",null,'The "',(0,n.kt)("strong",{parentName:"p"},"Client"),'" as well as "',(0,n.kt)("strong",{parentName:"p"},"Server"),'" packages should be active directly on the server after a server restart'))}u.isMDXComponent=!0}}]);