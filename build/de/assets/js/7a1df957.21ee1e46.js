"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2730],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),m=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},u=function(e){var n=m(e.components);return r.createElement(o.Provider,{value:n},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=m(t),c=a,g=s["".concat(o,".").concat(c)]||s[c]||p[c]||i;return t?r.createElement(g,d(d({ref:n},u),{},{components:t})):r.createElement(g,d({ref:n},u))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,d=new Array(i);d[0]=c;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[s]="string"==typeof e?e:a,d[1]=l;for(var m=2;m<i;m++)d[m]=t[m];return r.createElement.apply(null,d)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3141:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var r=t(7462),a=(t(7294),t(3905));const i={id:"conan_becomeadmin",title:"Admin auf dem eigenen Server werden",description:"Informationen, wie du Admin auf deinem Conan Exiles-Server von ZAP-Hosting wirst - ZAP-Hosting.com Dokumentationen",sidebar_label:"Admin werden"},d=void 0,l={unversionedId:"conan_becomeadmin",id:"conan_becomeadmin",title:"Admin auf dem eigenen Server werden",description:"Informationen, wie du Admin auf deinem Conan Exiles-Server von ZAP-Hosting wirst - ZAP-Hosting.com Dokumentationen",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/conan_becomeadmin.md",sourceDirName:".",slug:"/conan_becomeadmin",permalink:"/guides/de/docs/conan_becomeadmin",draft:!1,editUrl:"https://github.com/zaphosting/docs/tree/master/docs/conan_becomeadmin.md",tags:[],version:"current",frontMatter:{id:"conan_becomeadmin",title:"Admin auf dem eigenen Server werden",description:"Informationen, wie du Admin auf deinem Conan Exiles-Server von ZAP-Hosting wirst - ZAP-Hosting.com Dokumentationen",sidebar_label:"Admin werden"},sidebar:"gameserverSidebar",previous:{title:"Mods installieren",permalink:"/guides/de/docs/beammp_mods"},next:{title:"Server Konfiguration",permalink:"/guides/de/docs/conan_configuration"}},o={},m=[{value:"Admin werden",id:"admin-werden",level:2},{value:"H\xe4ufig verwendete Befehle",id:"h\xe4ufig-verwendete-befehle",level:2}],u={toc:m},s="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(s,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"admin-werden"},"Admin werden"),(0,a.kt)("p",null,"Mit Administrator-Rechten kannst du direkt im Spiel \xc4nderungen im Live Zustand an deinem Server vornehmen, ohne diese in der Config vorzunehmen. Damit man sich selbst oder auch anderen Spielern Administrator-Rechte zuweisen kann, muss als erstes ein Serveradmin Passwort definiert werden. Das definieren des Passworts erfolgt in den ",(0,a.kt)("strong",{parentName:"p"},"Einstellungen")," deines Servers."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/26007280/189707562-a06d3a2e-5b3e-4f39-a633-221e64437662.png",alt:"image"})),(0,a.kt)("p",null,"In den Einstellungen angekommen, suchen wir nach ",(0,a.kt)("strong",{parentName:"p"},"Admin Passwort")," und setzen dort sofern gew\xfcnscht ein individuelles Passwort."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/26007280/189707600-0046b896-0519-4ed7-b35e-badcdb6cd837.png",alt:"image"})),(0,a.kt)("p",null,"Sofern das gew\xfcnschte Passwort angegeben wurde, bitte die \xc4nderungen speichern und den Server einmal neu starten. Im Anschluss kannst du dich mit deinem Server verbinden und \xfcber die ESC-Taste auf Server-Einstellungen klicken und dort dann das Admin Passwort setzen und dich zum Admin machen."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/26007280/189707621-659be0b9-571b-44bd-bb8f-9472836115e8.png",alt:"image"})),(0,a.kt)("p",null,"Im Anschluss kannst du s\xe4mtliche Server-Befehle als Admin ausf\xfchren. Im folgenden findest du eine \xdcbersicht von den am h\xe4ufigsten benutzten Befehle."),(0,a.kt)("h2",{id:"h\xe4ufig-verwendete-befehle"},"H\xe4ufig verwendete Befehle"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Befehl"),(0,a.kt)("th",{parentName:"tr",align:null},"Beschreibung"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"MakeMeAdmin ","[AdminPassword]"),(0,a.kt)("td",{parentName:"tr",align:null},"Aktiviert den Admin-Modus")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"MakeMeNormal"),(0,a.kt)("td",{parentName:"tr",align:null},"Beendet den Admin-Modus")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LearnEmote ","[emote]"),(0,a.kt)("td",{parentName:"tr",align:null},"Gebe in den Chat /emote ","[emote]"," ein oder halte R gedr\xfcckt, um das Emote-Men\xfc aufzurufen. Admin-Modus erforderlich")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"God"),(0,a.kt)("td",{parentName:"tr",align:null},"Aktiviert/Deaktiviert den Gott-Modus")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"PlayerCanBuildEverywhere ","[PlayerName]"),(0,a.kt)("td",{parentName:"tr",align:null},"Erm\xf6glicht den Bau von Geb\xe4uden, bei denen das Geb\xe4ude f\xfcr den angegebenen Spieler deaktiviert ist")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Teleport"),(0,a.kt)("td",{parentName:"tr",align:null},"Teleportiere dich an eine Oberfl\xe4che oder in die Luft")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TeleportPlayer X","[float]"," Y","[float]"," Z","[float]"),(0,a.kt)("td",{parentName:"tr",align:null},"Teleportiert dich oder einen anderen Spieler zu den angegebenen Koordinaten")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TeleportToPlayer ","[PlayerName]"),(0,a.kt)("td",{parentName:"tr",align:null},"Teleportiert dich zu dem angegebenen Spieler")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Fly"),(0,a.kt)("td",{parentName:"tr",align:null},"Aktiviert den Flug-Modus")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Ghost"),(0,a.kt)("td",{parentName:"tr",align:null},"Aktiviert den Geist-Modus (Unsichtbar, Noclip)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SetServerSetting serverSetting","[FString]"," Value","[FString]"),(0,a.kt)("td",{parentName:"tr",align:null},"Erlaubt das \xc4ndern der Servereinstellungen aus ServerSettings.ini w\xe4hrend des Spiels.")))),(0,a.kt)("p",null,"Weitere Admin-Befehle rund ums Spiel findest du auf der ",(0,a.kt)("a",{parentName:"p",href:"https://conanexiles.gamepedia.com/Admin_Panel"},"Gamepedia")," von Conan Exiles."))}p.isMDXComponent=!0}}]);