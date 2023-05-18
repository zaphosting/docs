"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2318],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(t),p=i,f=u["".concat(s,".").concat(p)]||u[p]||m[p]||o;return t?r.createElement(f,a(a({ref:n},l),{},{components:t})):r.createElement(f,a({ref:n},l))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=p;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[u]="string"==typeof e?e:i,a[1]=c;for(var d=2;d<o;d++)a[d]=t[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2753:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=t(7462),i=(t(7294),t(3905));const o={id:"fivem_esx_changemoneyicon",title:"Geldicon \xc4ndern",description:"Informationen, wie du das Geldicon auf deinem FiveM-Server mit ESX von ZAP-Hosting \xe4ndern kannst - ZAP-Hosting.com Dokumentationen",sidebar_label:"Geldicon \xc4ndern"},a=void 0,c={unversionedId:"fivem_esx_changemoneyicon",id:"fivem_esx_changemoneyicon",title:"Geldicon \xc4ndern",description:"Informationen, wie du das Geldicon auf deinem FiveM-Server mit ESX von ZAP-Hosting \xe4ndern kannst - ZAP-Hosting.com Dokumentationen",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/fivem_esx_changemoneyicon.md",sourceDirName:".",slug:"/fivem_esx_changemoneyicon",permalink:"/guides/de/docs/fivem_esx_changemoneyicon",draft:!1,editUrl:"https://github.com/zaphosting/docs/tree/master/docs/fivem_esx_changemoneyicon.md",tags:[],version:"current",frontMatter:{id:"fivem_esx_changemoneyicon",title:"Geldicon \xc4ndern",description:"Informationen, wie du das Geldicon auf deinem FiveM-Server mit ESX von ZAP-Hosting \xe4ndern kannst - ZAP-Hosting.com Dokumentationen",sidebar_label:"Geldicon \xc4ndern"},sidebar:"gameserverSidebar",previous:{title:"Inventar (F2) Deaktivieren",permalink:"/guides/de/docs/fivem_esx_disableinventory"},next:{title:"Admin \xfcber Datenbank werden",permalink:"/guides/de/docs/fivem_esx_becomeadminoverdatabase"}},s={},d=[{value:"Mit FTP verbinden",id:"mit-ftp-verbinden",level:2},{value:"Config Editieren",id:"config-editieren",level:2}],l={toc:d},u="wrapper";function m(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"mit-ftp-verbinden"},"Mit FTP verbinden"),(0,i.kt)("p",null,"Zuerst muss der ",(0,i.kt)("a",{parentName:"p",href:"/guides/de/docs/gameserver_ftpaccess"},"FTP-Zugang")," eingerichtet werden."),(0,i.kt)("p",null,"Nachdem dieser eingerichtet wurde, kann sich nun verbunden werden und der Server Ordner ge\xf6ffnet werden."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159166832-2e63233a-f386-4d87-8481-873bfad56f4c.png",alt:"image"})),(0,i.kt)("p",null,"Hier \xf6ffnen wir im ",(0,i.kt)("inlineCode",{parentName:"p"},"server-data")," Ordner die server.cfg Datei"),(0,i.kt)("h2",{id:"config-editieren"},"Config Editieren"),(0,i.kt)("p",null,"Nun f\xfcgen wir \xfcber der ",(0,i.kt)("inlineCode",{parentName:"p"},"start essentialmode")," Zeile Folgendes ein:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Lua"},'set es_moneyIcon "$"\n')),(0,i.kt)("p",null,"Hier k\xf6nnen wir nun das $ mit unserem eigenen Icon ersetzen."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159166838-80e3974b-9a49-4604-9f85-50c1a5775f41.png",alt:"image"})),(0,i.kt)("p",null,"Nach einem Serverneustart wird das Geldicon Ingame Sichtbar sein."))}m.isMDXComponent=!0}}]);