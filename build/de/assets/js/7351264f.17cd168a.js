"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3178],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),o=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=o(e.components);return r.createElement(m.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),c=o(n),u=a,g=c["".concat(m,".").concat(u)]||c[u]||p[u]||i;return n?r.createElement(g,l(l({ref:t},s),{},{components:n})):r.createElement(g,l({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var d={};for(var m in t)hasOwnProperty.call(t,m)&&(d[m]=t[m]);d.originalType=e,d[c]="string"==typeof e?e:a,l[1]=d;for(var o=2;o<i;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2940:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var r=n(7462),a=(n(7294),n(3905));const i={id:"eco_becomeadmin",title:"Admin werden",description:"Informationen, wie du Admin auf deinem ECO-Server bei ZAP-Hosting wirst - ZAP-Hosting.com Dokumentationen",sidebar_label:"Admin werden"},l=void 0,d={unversionedId:"eco_becomeadmin",id:"eco_becomeadmin",title:"Admin werden",description:"Informationen, wie du Admin auf deinem ECO-Server bei ZAP-Hosting wirst - ZAP-Hosting.com Dokumentationen",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/eco_becomeadmin.md",sourceDirName:".",slug:"/eco_becomeadmin",permalink:"/guides/de/docs/eco_becomeadmin",draft:!1,editUrl:"https://github.com/zaphosting/docs/tree/master/docs/eco_becomeadmin.md",tags:[],version:"current",frontMatter:{id:"eco_becomeadmin",title:"Admin werden",description:"Informationen, wie du Admin auf deinem ECO-Server bei ZAP-Hosting wirst - ZAP-Hosting.com Dokumentationen",sidebar_label:"Admin werden"},sidebar:"gameserverSidebar",previous:{title:"Plugins installieren",permalink:"/guides/de/docs/exiled_plugins"},next:{title:"Whitelist",permalink:"/guides/de/docs/eco_whitelist"}},m={},o=[{value:"Admin werden",id:"admin-werden",level:2},{value:"H\xe4ufig verwendete Befehle",id:"h\xe4ufig-verwendete-befehle",level:2}],s={toc:o},c="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"admin-werden"},"Admin werden"),(0,a.kt)("p",null,"Mit Administrator-Rechten kannst du direkt im Spiel \xc4nderungen im Live Zustand an deinem Server vornehmen, ohne diese in der Config vorzunehmen. Das hinzuf\xfcgen eines Admins erfolgt \xfcber die ",(0,a.kt)("strong",{parentName:"p"},"Users.eco")," Config, welche du im Interface unter Configs findest."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/26007280/189889325-21709231-9f93-49a4-a4dc-57fe2a7188e2.png",alt:"image"})),(0,a.kt)("p",null,"Um einen neuen Spieler als Admin hinzuzuf\xfcgen muss der folgende Teil in der ",(0,a.kt)("strong",{parentName:"p"},"Users.eco")," Config angepasst werden:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'  "Admins": {\n    "System.String": {\n      "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",\n      "$values": []\n    }\n  },\n')),(0,a.kt)("p",null,"Im Feld ",(0,a.kt)("strong",{parentName:"p"},"values")," wird der Spieler eingetragen, der Admin werden soll. Bei mehreren Admins werden diese mit einem Kommazeichen getrennt hinzugef\xfcgt. Zum identifizieren des Spielers wird die SteamID64 verwendet. "),(0,a.kt)("p",null,"Diese findest du, indem du zun\xe4chst einmal dein Steam Profil aufrufst und dort dann an einer beliebigen Stelle Rechtsklick dr\xfcckst. Dort kann dann die Steam URL des Profils kopiert werden."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/26007280/189889346-754e34b7-6702-4705-95b4-98108832c095.png",alt:"image"})),(0,a.kt)("p",null,"Im Anschluss kann die URL auf einer der folgenden Webseiten angeben werden:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://steamrep.com/"},"https://steamrep.com/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://steamidfinder.com/"},"https://steamidfinder.com/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://steamid.io/"},"https://steamid.io/"))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/26007280/189889366-7c977f37-bf4f-47b0-a91e-18358180ed11.png",alt:"image"})),(0,a.kt)("p",null,"Dadurch erh\xe4ltst du dort die sowohl die allgemeinen Accountinformationen als auch die Steam ID. Diese wird dann bei ",(0,a.kt)("strong",{parentName:"p"},"values")," eingetragen. Das sieht dann folgenderma\xdfen aus: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'  "Admins": {\n    "System.String": {\n      "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",\n      "$values": [\n            "123456789",\n            "weitereSteamID"\n    ]\n    }\n  },\n')),(0,a.kt)("p",null,"Nach einem Neustart des Servers wurde den dort eingetragenen Spielern Administrator Berechtigungen zugewiesen. Wenn du weitere Admins hinzuf\xfcgen m\xf6chtest, dann musst du das im Anschluss nicht mehr immer \xfcber die Config machen. Stattdessen kannst du das im Spiel mit dem folgenden Befehl machen:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/admin [player]\n")),(0,a.kt)("p",null,"Im folgenden findest du eine \xdcbersicht von h\xe4ufig verwendeten Admin Befehlen die du als Admin ausf\xfchren kannst."),(0,a.kt)("h2",{id:"h\xe4ufig-verwendete-befehle"},"H\xe4ufig verwendete Befehle"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Befehl"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Beschreibung"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"/allblocks"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Erzeugt alle Bl\xf6cke")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"/allconstructed"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Erstellt s\xe4mtliche f\xfcr Spieler erstellbaren Bl\xf6cke")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"/allplants"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Erzeugt alle Pflanzenbl\xf6cke")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"/allskills"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Schaltet alle F\xe4higkeiten frei")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"/allterrain"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Erzeugt alle grabbaren Bl\xf6cke")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"/allworldobjects"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Erzeugt alle Objekte der Welt")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"/kick ","[player]",",(reason)"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Spieler kicken")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"/ban ","[player]",",(reason)"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Spieler bannen")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"/give ","[itemname]",",(amount)"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Sich einen Gegenstand geben")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"/giveskillpoints ","[player]",",(amount)"),(0,a.kt)("td",{parentName:"tr",align:"center"},"F\xe4higkeitspunkte an einen anderen Spieler vergeben")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"/fly"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Schaltet den Flugmodus ein/aus")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"/move ","[x]",",","[y]",",","[z]"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Versetzt Spieler zur Position x, y, z;")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"/removeadmin ","[player]"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Entfernt einen Spieler als Admin")))),(0,a.kt)("p",null,"Noch weitere verf\xfcgbare Befehle findest du in der offiziellen ",(0,a.kt)("a",{parentName:"p",href:"https://eco.gamepedia.com/Chat_Commands"},"ECO Wiki"),"."))}p.isMDXComponent=!0}}]);