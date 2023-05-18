"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4817],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>p});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=i.createContext({}),d=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=d(e.components);return i.createElement(o.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(t),g=r,p=c["".concat(o,".").concat(g)]||c[g]||m[g]||a;return t?i.createElement(p,s(s({ref:n},u),{},{components:t})):i.createElement(p,s({ref:n},u))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=g;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[c]="string"==typeof e?e:r,s[1]=l;for(var d=2;d<a;d++)s[d]=t[d];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},1600:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=t(7462),r=(t(7294),t(3905));const a={id:"cs16_plugins",title:"Plugins auf dem eigenen Server installieren",description:"Informationen, wie du Plugins auf deinem CS 1.6-Server von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentationen",sidebar_label:"Plugins installieren"},s=void 0,l={unversionedId:"cs16_plugins",id:"cs16_plugins",title:"Plugins auf dem eigenen Server installieren",description:"Informationen, wie du Plugins auf deinem CS 1.6-Server von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentationen",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/cs16_plugins.md",sourceDirName:".",slug:"/cs16_plugins",permalink:"/guides/de/docs/cs16_plugins",draft:!1,editUrl:"https://github.com/zaphosting/docs/tree/master/docs/cs16_plugins.md",tags:[],version:"current",frontMatter:{id:"cs16_plugins",title:"Plugins auf dem eigenen Server installieren",description:"Informationen, wie du Plugins auf deinem CS 1.6-Server von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentationen",sidebar_label:"Plugins installieren"},sidebar:"gameserverSidebar",previous:{title:"Admin werden",permalink:"/guides/de/docs/cs16_becomeadmin"},next:{title:"Garry's Mod Server.cfg Anpassungen",permalink:"/guides/de/docs/gmod_servercfg"}},o={},d=[{value:"AMXmodX / Metamod installation",id:"amxmodx--metamod-installation",level:2},{value:"Vorbereitung",id:"vorbereitung",level:3},{value:"Installation",id:"installation",level:3},{value:"Plugins installieren",id:"plugins-installieren",level:2},{value:"Vorbereitung",id:"vorbereitung-1",level:3},{value:"Installation",id:"installation-1",level:3}],u={toc:d},c="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"amxmodx--metamod-installation"},"AMXmodX / Metamod installation"),(0,r.kt)("p",null,"Um Plugins auf einem Counter-Strike 1.6 Server zu installieren wird ",(0,r.kt)("strong",{parentName:"p"},"AMXmodX")," und ",(0,r.kt)("strong",{parentName:"p"},"Metamod")," ben\xf6tigt. Dies sind zwei Half Life Erweiterungen, welche es erm\xf6glichen den Server noch mehr als \xfcblich zu individualisieren. Dazu geh\xf6rt zum Beispiel die Nutzung von Plugins und eine erweitere Administration deines Servers."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/26007280/189676187-c08cf45f-578d-4cbe-ba76-8d59792ea5c3.png",alt:"image"})),(0,r.kt)("h3",{id:"vorbereitung"},"Vorbereitung"),(0,r.kt)("p",null,"Zun\xe4chst einmal werden die eigentlichen Erweiterungen ben\xf6tigt. Die Erweiterungen k\xf6nnen auf ","[amxmodx.org]","(",(0,r.kt)("a",{parentName:"p",href:"https://www.amxmodx.org/downloads.php"},"https://www.amxmodx.org/downloads.php")," heruntergeladen werden. Hierbei ist es wichtig immer die neusten Versionen (",(0,r.kt)("strong",{parentName:"p"},"stable"),") zu benutzen, damit diese auch noch voll funktionsf\xe4hig bzw. kompatibel sind."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/26007280/189676150-be03a51b-65d2-4de5-9670-c9b0b9fc5f31.png",alt:"image"})),(0,r.kt)("p",null,"Es werden die Linux Pakete ",(0,r.kt)("strong",{parentName:"p"},"AMX Mod X Base, Counter-Strike Addon und Metamod")," ben\xf6tigt. Diese laden wir dort herunter. Im Anschluss solltest du drei gepackte Dateien heruntergeladen haben. Diese entpackst du auf deinem Computer. Dadurch solltest du einen Addons Ordner erhalten, indem sich ein ",(0,r.kt)("strong",{parentName:"p"},"amxmodx")," und ",(0,r.kt)("strong",{parentName:"p"},"metamod")," Ordner befindet: "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/26007280/189676092-8c9e94c0-dccf-469d-b58b-c67681cb4828.png",alt:"image"})),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Wenn die oben genannten Schritte abgeschlossen sind, dann geht es an die eigentliche Installation. Die Dateien m\xfcssen per FTP auf deinen Server hochgeladen werden. Um Dateien auf deinen Server hochladen zu k\xf6nnen ben\xf6tigst du einen FTP-Client. Falls du noch nicht wei\xdft, was FTP ist und wie es funktioniert, dann schaue dir am besten die folgende Anleitung an: ",(0,r.kt)("a",{parentName:"p",href:"https://zap-hosting.com/guides/docs/de/gameserver_ftpaccess/"},"FTP Dateizugriff")),(0,r.kt)("p",null,"Dort angelangt. wird nun der ",(0,r.kt)("strong",{parentName:"p"},"addons")," Ordner in das Hauptverzeichnis des Servers hochgeladen. Die Dateistruktur des Ordners sollte im Anschluss dann wie folgt aussehen:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/26007280/189676236-81210c54-5319-4c72-b350-d41f3c40b95c.png",alt:"image"})),(0,r.kt)("p",null,"Damit ist die Einrichtung von ",(0,r.kt)("strong",{parentName:"p"},"AMXmodX")," und ",(0,r.kt)("strong",{parentName:"p"},"Metamod")," abgeschlossen. Du kannst dich mit deinem Server im Spiel verbinden und in der Konsole mit dem ",(0,r.kt)("inlineCode",{parentName:"p"},"amxx version")," Befehl pr\xfcfen, ob AMX erfolgreich installiert wurde. Die Ausgabe sollte wie folgt aussehen:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"AMX Mod X 1.8.2\nAuthors: ....\nCompiled: Feb 14 2013, 00:56:31\nURL:http://www.amxmodx.org/\nCore mode: JIT\n")),(0,r.kt)("p",null,"Wenn dort lediglich ",(0,r.kt)("strong",{parentName:"p"},"Befehl wurde nicht erkannt steht"),", dann ist bei der Installation etwas schief gelaufen. "),(0,r.kt)("h2",{id:"plugins-installieren"},"Plugins installieren"),(0,r.kt)("h3",{id:"vorbereitung-1"},"Vorbereitung"),(0,r.kt)("p",null,"Nachdem die Einrichtung von ",(0,r.kt)("strong",{parentName:"p"},"AMXmodX")," und ",(0,r.kt)("strong",{parentName:"p"},"Metamod")," abgeschlossen ist und diese auch funktioniert kann mit der Installation von Plugins begonnen werden.  Zun\xe4chst einmal m\xfcssen die Plugins heruntergeladen werden, die auf dem Server installiert werden sollen. Eine gro\xdfe Auswahl an Plugins findest du unter ",(0,r.kt)("a",{parentName:"p",href:"https://www.amxmodx.org/compiler.php"},"amxmodx.org"),". Dort wurden \xfcber die Jahre zahlreiche Plugins ver\xf6ffentlicht und es kommen immer noch regelm\xe4\xdfig weitere dazu. Bei den jeweiligen Plugins wird die ",(0,r.kt)("strong",{parentName:"p"},".amxx")," Datei ben\xf6tigt. "),(0,r.kt)("h3",{id:"installation-1"},"Installation"),(0,r.kt)("p",null,"Nun wenn die gew\xfcnschten Plugins heruntergeladen wurden, dann kann mit der eigentlichen Installation der Plugins begonnen werden. Die Einrichtung der Plugins erfolgt ebenfalls per FTP. Die Plugin-Dateien werde nun in das Plugins Verzeichnis unter ",(0,r.kt)("inlineCode",{parentName:"p"},"../addons/amx")," hochgeladen. "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/26007280/189676311-9a9ccc7b-6694-417f-80cb-3ca7b0bb49e4.png",alt:"image"})),(0,r.kt)("p",null,"Beim n\xe4chsten Serverstart sollten die hochgeladenen Plugins dann automatisch geladen werden."))}m.isMDXComponent=!0}}]);