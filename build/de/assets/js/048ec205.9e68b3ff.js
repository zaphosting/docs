"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6259],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>f});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=t.createContext({}),c=function(e){var n=t.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(d.Provider,{value:n},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),l=c(r),p=i,f=l["".concat(d,".").concat(p)]||l[p]||m[p]||a;return r?t.createElement(f,s(s({ref:n},u),{},{components:r})):t.createElement(f,s({ref:n},u))}));function f(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=p;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o[l]="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=r[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3887:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var t=r(7462),i=(r(7294),r(3905));const a={id:"minecraft_rcon",title:"Server RCON verwenden",description:"Informationen, wie du RCON mit deinem Minecraft-Server von ZAP-Hosting verwendest, um deinen Server zu verwalten - ZAP-Hosting.com Dokumentationen",sidebar_label:"RCON"},s=void 0,o={unversionedId:"minecraft_rcon",id:"minecraft_rcon",title:"Server RCON verwenden",description:"Informationen, wie du RCON mit deinem Minecraft-Server von ZAP-Hosting verwendest, um deinen Server zu verwalten - ZAP-Hosting.com Dokumentationen",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/minecraft_rcon.md",sourceDirName:".",slug:"/minecraft_rcon",permalink:"/guides/de/docs/minecraft_rcon",draft:!1,editUrl:"https://github.com/zaphosting/docs/tree/master/docs/minecraft_rcon.md",tags:[],version:"current",frontMatter:{id:"minecraft_rcon",title:"Server RCON verwenden",description:"Informationen, wie du RCON mit deinem Minecraft-Server von ZAP-Hosting verwendest, um deinen Server zu verwalten - ZAP-Hosting.com Dokumentationen",sidebar_label:"RCON"},sidebar:"gameserverSidebar",previous:{title:"Behavior/Resource Packs installieren",permalink:"/guides/de/docs/minecraftbedrock_behaviorresourcepacks"},next:{title:"Whitelist",permalink:"/guides/de/docs/minecraft_whitelist"}},d={},c=[{value:"Was ist RCON?",id:"was-ist-rcon",level:2},{value:"Wie benutze ich RCON bei Minecraft?",id:"wie-benutze-ich-rcon-bei-minecraft",level:2}],u={toc:c},l="wrapper";function m(e){let{components:n,...r}=e;return(0,i.kt)(l,(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Hier gelangst du zu unseren Minecraft Servern: ",(0,i.kt)("a",{parentName:"p",href:"https://zap-hosting.com/de/minecraft-server-mieten/"},"Minecraft Server mieten")),(0,i.kt)("h2",{id:"was-ist-rcon"},"Was ist RCON?"),(0,i.kt)("p",null,"RCON ist eine Schnittstelle in verschiedenen Programmen, wie also auch Gameservern,\nmit der Fernwartungen wie auch Fernverwaltungen durchgef\xfchrt werden k\xf6nnen.\nMit dieser Schnittstelle k\xf6nnen Server verwaltet werden, die bereits laufen und erreichbar sind.\nMit einem bestimmten Fernwartungsprogramm kann dann auf die Schnittstelle zugegriffen werden\nund der Server somit verwaltet werden."),(0,i.kt)("h2",{id:"wie-benutze-ich-rcon-bei-minecraft"},"Wie benutze ich RCON bei Minecraft?"),(0,i.kt)("p",null,"Um bei Minecraft RCON nutzen zu k\xf6nnen, muss es vorerst in der Datei ",(0,i.kt)("inlineCode",{parentName:"p"},"server.properties"),"\naktiviert werden. Suche dazu die Zeile mit folgendem Inhalt auf:\n",(0,i.kt)("inlineCode",{parentName:"p"},"enable-rcon=false")),(0,i.kt)("p",null,"Entferne den Wert ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," und trage dort stattdessen ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," ein.\nNun brauch die Schnittstelle noch ein Passwort, damit sich nicht jeder mit dieser\nFernwartungsschnittstelle verbinden kann. Das Passwort daf\xfcr kann in der Zeile\nmit folgendem Inhalt eingetragen werden:\n",(0,i.kt)("inlineCode",{parentName:"p"},"rcon.password=")),(0,i.kt)("p",null,"Schreibe zum Festlegen des Kennworts hinter das Gleichheitszeichen dein gew\xfcnschtes Passwort.\nIst das getan, musst du nur noch herausfinden, wie der Port deiner RCON Schnittstelle lautet.\nDieser kann in der Zeile ",(0,i.kt)("inlineCode",{parentName:"p"},"rcon.port")," abgelesen und festgelegt werden. Der Port besteht aus einer\nbis zu f\xfcnfstelligen Zahl zwischen ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," und ",(0,i.kt)("inlineCode",{parentName:"p"},"65534"),"."),(0,i.kt)("p",null,"Hast du den Port davon herausgefunden, \xf6ffne nun ein beliebiges RCON Programm, mit dem du dich auf die\nSchnittstelle verbinden kannst. Eine Empfehlung unsererseits f\xfcr ein RCON-taugliches Programm w\xe4re die ",(0,i.kt)("a",{parentName:"p",href:"https://sourceforge.net/projects/rconconsole/"},"RCON Console"),".\nTrage nun die IP-Adresse deines Servers in das oben stehende Textfeld ",(0,i.kt)("inlineCode",{parentName:"p"},"Address")," ein. Direkt daneben den\nRCON-Port deines Gameservers und dahinter das Passwort. Stelle nun sicher, dass dein Gameserver l\xe4uft\nund erreichbar ist und verbinde nun mit dem Programm per RCON auf deinen Server."),(0,i.kt)("p",null,"Bei erfolgreicher Verbindung kannst du nun Minecraft-Befehle an deinen Server senden. Trage dazu die Befehle in das\nuntenstehende Textfeld deines RCON Programms ein und beachte die R\xfcckgabe der Konsole in der Fenstermitte."))}m.isMDXComponent=!0}}]);