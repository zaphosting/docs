"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4661],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>b});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),l=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(o.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(t),m=i,b=p["".concat(o,".").concat(m)]||p[m]||c[m]||a;return t?r.createElement(b,u(u({ref:n},d),{},{components:t})):r.createElement(b,u({ref:n},d))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,u=new Array(a);u[0]=m;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[p]="string"==typeof e?e:i,u[1]=s;for(var l=2;l<a;l++)u[l]=t[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2705:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>u,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=t(7462),i=(t(7294),t(3905));const a={id:"vserver_linux_xrdp",title:"Installation von xRDP (Remotedesktop)",description:"Guide um xRDP (Remotedesktop) auf Linux zu installieren - ZAP-Hosting.com Dokumentationen",sidebar_label:"Linux Remotedesktop (xRDP)"},u=void 0,s={unversionedId:"vserver_linux_xrdp",id:"vserver_linux_xrdp",title:"Installation von xRDP (Remotedesktop)",description:"Guide um xRDP (Remotedesktop) auf Linux zu installieren - ZAP-Hosting.com Dokumentationen",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/vserver_linux_xrdp.md",sourceDirName:".",slug:"/vserver_linux_xrdp",permalink:"/guides/de/docs/vserver_linux_xrdp",draft:!1,editUrl:"https://github.com/zaphosting/docs/tree/master/docs/vserver_linux_xrdp.md",tags:[],version:"current",frontMatter:{id:"vserver_linux_xrdp",title:"Installation von xRDP (Remotedesktop)",description:"Guide um xRDP (Remotedesktop) auf Linux zu installieren - ZAP-Hosting.com Dokumentationen",sidebar_label:"Linux Remotedesktop (xRDP)"}},o={},l=[{value:"Installation von xRDP",id:"installation-von-xrdp",level:2},{value:"Verbindung",id:"verbindung",level:2}],d={toc:l},p="wrapper";function c(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Unter Linux gibt es default in der Regel eine SSH Console um den Server zu verwalten. In manchen F\xe4llen kann es einfacher sein eine Remote Desktop Verbindung zu nutzen, \xe4hnlich wie bei Windows.\nEine nachtr\xe4gliche Installation ist bei den meisten Linux Distrobutionen m\xf6glich. In diesem Guide wird dies f\xfcr Ubuntu und Debian erkl\xe4rt. "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f Wichtig: Es muss mindestens Ubuntu 18.04.X LTS (Bionic Beaver) oder Debian 10 (Buster) genutzt werden als OS. Neuere Versionen sind empfehlenswert. ")),(0,i.kt)("h2",{id:"installation-von-xrdp"},"Installation von xRDP"),(0,i.kt)("p",null,"Zuerst sollte der Server upgedatet werden: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"// Debian\nsudo apt update; sudo apt upgrade -y\n\n// Ubuntu\nsudo apt update; sudo apt upgrade -y\n")),(0,i.kt)("p",null,"Nach dem Update werden die n\xf6tigen Pakete installiert: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"// Debian\nsudo apt install xfce4 xfce4-goodies xorg dbus-x11 x11-xserver-utils -y\n\n// Ubuntu\nsudo apt install ubuntu-desktop -y\n")),(0,i.kt)("p",null,"Anschlie\xdfend kann xRDP installiert werden: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"// Debian\nsudo apt install xrdp\n\n// Ubuntu\nsudo apt install xrdp\n")),(0,i.kt)("p",null,'Nach der Installation sollte der Status "aktive" zur\xfcckgeben: '),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"// Debian\nsudo systemctl status xrdp\n\n// Ubuntu\nsudo systemctl status xrdp\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61953937/167338238-3a22fa41-5309-4076-b2a5-355f6a870454.png",alt:"xrdp"})),(0,i.kt)("p",null,"Nachdem der Status okay ist, muss noch ein User erstellt werden. Anschlie\xdfend wird der xRDP Service neu gestartet: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"// Debian\nsudo adduser xrdp ssl-cert; sudo systemctl restart xrdp\n\n// Ubuntu\nsudo adduser xrdp ssl-cert; sudo systemctl restart xrdp\n")),(0,i.kt)("p",null,"Nach Abschluss der Konfiguration kann man sich mit den Root oder den jeweiligen User Daten des Servers via Remote Desktop verbinden.\nDer default Port lautet: 3389"),(0,i.kt)("h2",{id:"verbindung"},"Verbindung"),(0,i.kt)("p",null,"Die Verbindung kann \xfcber jedes RDP Tool erfolgen, verbunden wird mit IP:PORT.\nBeim verbinden wird man nach den Logindaten gefragt: "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61953937/167338260-9c50c532-272a-4cdb-b912-8e47a499c899.png",alt:"xrdp2"})),(0,i.kt)("p",null,"Nach erfolgreicher Anmeldung sieht man den Desktop.\nBei Ubuntu sieht es etwas anders aus als bei Debian:"),(0,i.kt)("p",null,"Ubuntu: "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61953937/167338277-df2e5953-4457-41df-b45d-28f0b8f8d89f.png",alt:"xrdp3"})),(0,i.kt)("p",null,"Debian: "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61953937/167338282-57cd81f2-38d9-4db4-ae3b-0178dbf0fb79.png",alt:"xrdp4"})))}c.isMDXComponent=!0}}]);