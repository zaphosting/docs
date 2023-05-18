"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6889],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),f=i,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7604:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const o={id:"vserver_linux_cockpit",title:"Installation von Cockpit",description:"Guide um Cockpit auf Linux zu installieren - ZAP-Hosting.com Dokumentationen",sidebar_label:"Cockpit"},a=void 0,c={unversionedId:"vserver_linux_cockpit",id:"vserver_linux_cockpit",title:"Installation von Cockpit",description:"Guide um Cockpit auf Linux zu installieren - ZAP-Hosting.com Dokumentationen",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/vserver_linux_cockpit.md",sourceDirName:".",slug:"/vserver_linux_cockpit",permalink:"/guides/de/docs/vserver_linux_cockpit",draft:!1,editUrl:"https://github.com/zaphosting/docs/tree/master/docs/vserver_linux_cockpit.md",tags:[],version:"current",frontMatter:{id:"vserver_linux_cockpit",title:"Installation von Cockpit",description:"Guide um Cockpit auf Linux zu installieren - ZAP-Hosting.com Dokumentationen",sidebar_label:"Cockpit"}},l={},u=[{value:"Installation",id:"installation",level:2}],s={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Cockpit ist ein Webinterface um einen oder mehere Linux Server (Cluster) zu verwalten. Von einfachen Log Ausgaben bis hin zum managen des Raids bietet Cockpit sehr viele Features.\nCockpit eigenet sich f\xfcr Einsteiger aber auch f\xfcr Fortgeschrittene, die gerne in kurzer Zeit alles wichtige einsehen/managen m\xf6chten. Zudem kann ein Zugriff von fast jedem Entger\xe4t erfolgen.\nDie Projektwebseite ist unter ",(0,i.kt)("a",{parentName:"p",href:"https://cockpit-project.org/"},"https://cockpit-project.org/")," erreichbar. "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f In diesem Guide wird die Installation bei Debian (ab Buster)/ bei Ubuntu (ab Bionic Beaver) erkl\xe4rt. Die Installation ist auf der Projektseite ebenfalls f\xfcr fedora, Red Hat, fedora CoreOS, CentOS, Clear Linux, archlinux und Tumbleweed verf\xfcgbar.   ")),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Zuerst wird der Server upgedatet:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"// Update\nsudo apt update; sudo apt upgrade -y\n")),(0,i.kt)("p",null,"Anschlie\xdfend kann die Installation erfolgen: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"// Cockpit installation\nsudo apt install cockpit -y\n")),(0,i.kt)("p",null,"Sobald die Installation abgeschlossen ist, kann das Cockpit-Panel \xfcber die IP:9090 erreicht werden.\nDer Login findet mit den normalen Logindaten des Servers/Users statt. "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61953937/167338111-31decaf3-6838-402b-819b-94323c87c11c.png",alt:"cockpit"})))}d.isMDXComponent=!0}}]);