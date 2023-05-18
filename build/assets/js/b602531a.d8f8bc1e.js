"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[261],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=u(t),p=r,m=g["".concat(l,".").concat(p)]||g[p]||d[p]||o;return t?a.createElement(m,i(i({ref:n},c),{},{components:t})):a.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[g]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8906:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=t(7462),r=(t(7294),t(3905));const o={id:"vserver_windows_change_language",title:"VPS Add/change language on Windows Server",description:"Information on how to change the language of your Windows VPS from ZAP-Hosting and how to add languages - ZAP-Hosting.com documentation",sidebar_label:"Add/change language"},i=void 0,s={unversionedId:"vserver_windows_change_language",id:"vserver_windows_change_language",title:"VPS Add/change language on Windows Server",description:"Information on how to change the language of your Windows VPS from ZAP-Hosting and how to add languages - ZAP-Hosting.com documentation",source:"@site/docs/vserver_windows_change_language.md",sourceDirName:".",slug:"/vserver_windows_change_language",permalink:"/guides/docs/vserver_windows_change_language",draft:!1,editUrl:"https://github.com/zaphosting/docs/tree/master/docs/vserver_windows_change_language.md",tags:[],version:"current",frontMatter:{id:"vserver_windows_change_language",title:"VPS Add/change language on Windows Server",description:"Information on how to change the language of your Windows VPS from ZAP-Hosting and how to add languages - ZAP-Hosting.com documentation",sidebar_label:"Add/change language"}},l={},u=[{value:"Preparation",id:"preparation",level:2},{value:"Installation",id:"installation",level:2}],c={toc:u},g="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(g,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f By default we provide Windows in German and English, you can identify that on the (DE) and (EN) tags"),(0,r.kt)("hr",{parentName:"blockquote"})),(0,r.kt)("h2",{id:"preparation"},"Preparation"),(0,r.kt)("p",null,"Connect through Remotedesktop on your Windows Server and open the settings."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173307-1c9b4b7c-d70b-4ed5-bfa9-cc5e68c093f1.png",alt:"image"})),(0,r.kt)("p",null,'Choose the menu "Time & Language", there the submenu "Language"'),(0,r.kt)("p",null,'Press on "Add a language"'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173310-f9ebd0aa-9e59-4c9b-9cde-5f7bd8e14172.png",alt:"image"})),(0,r.kt)("p",null,"Search for the language of your like and be sure that its a display language."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173312-f53f9fe0-dec9-493f-8046-f2f05b96955c.png",alt:"image"})),(0,r.kt)("p",null,'Choose the language of your like by a mouseclick and proceed by pressing "Next", accept the installation of all additional packages'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'\u26a0\ufe0f "Display Language installation and use as windows display language" must be enabled.')),(0,r.kt)("p",null,"Windows is now downloading the language of your decision, this can take several minutes (30-60 minutes)."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173315-2927599d-7894-4171-8c7f-37516d6c5997.png",alt:"image"})),(0,r.kt)("p",null,"After the installation of your language was successfully done, you just need to sign in again or restart your server."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173318-6fa1e87a-2f5d-401e-abbf-383456b8bb70.png",alt:"image"})))}d.isMDXComponent=!0}}]);