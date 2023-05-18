"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6388],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=l(t),m=a,g=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return t?r.createElement(g,s(s({ref:n},c),{},{components:t})):r.createElement(g,s({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=m;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[d]="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6567:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const i={id:"gameserver_database_external_access",title:"Externer Datenbankzugriff",description:"Informationen, wie du mit externen Verwaltungsprogrammen auf die Datenbanken von Gameservern von ZAP-Hosting zugreifen kannst - ZAP-Hosting.com Dokumentationen",sidebar_label:"Externer Datenbankzugriff"},s=void 0,o={unversionedId:"gameserver_database_external_access",id:"gameserver_database_external_access",title:"Externer Datenbankzugriff",description:"Informationen, wie du mit externen Verwaltungsprogrammen auf die Datenbanken von Gameservern von ZAP-Hosting zugreifen kannst - ZAP-Hosting.com Dokumentationen",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/gameserver_database_external_access.md",sourceDirName:".",slug:"/gameserver_database_external_access",permalink:"/guides/de/docs/gameserver_database_external_access",draft:!1,editUrl:"https://github.com/zaphosting/docs/tree/master/docs/gameserver_database_external_access.md",tags:[],version:"current",frontMatter:{id:"gameserver_database_external_access",title:"Externer Datenbankzugriff",description:"Informationen, wie du mit externen Verwaltungsprogrammen auf die Datenbanken von Gameservern von ZAP-Hosting zugreifen kannst - ZAP-Hosting.com Dokumentationen",sidebar_label:"Externer Datenbankzugriff"},sidebar:"gameserverSidebar",previous:{title:"PHPMyAdmin",permalink:"/guides/de/docs/gameserver_databases_pma"},next:{title:"Zum Server verbinden",permalink:"/guides/de/docs/minecraft_firststeps_connect"}},u={},l=[{value:"Datenbank Zugriff (Extern)",id:"datenbank-zugriff-extern",level:2},{value:"Vorbereitung",id:"vorbereitung",level:3},{value:"Einrichtung",id:"einrichtung",level:3},{value:"HeidiSQL",id:"heidisql",level:3},{value:"Navicat",id:"navicat",level:3}],c={toc:l},d="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"datenbank-zugriff-extern"},"Datenbank Zugriff (Extern)"),(0,a.kt)("p",null,"Bei den Gameserver Produkten bietet ZAP-Hosting MySQL Datenbanken inklusive an. Diese k\xf6nnen sowohl intern via phpMyAdmin als auch \xfcber externen MySQL-Verwaltungsprogrammen wie zum Beispiel Navicat oder HeidiSQL verwaltet werden. "),(0,a.kt)("h3",{id:"vorbereitung"},"Vorbereitung"),(0,a.kt)("p",null,"Zun\xe4chst ben\xf6tigen wir eine Software um zur Datenbank zu verbinden, in diesem Beispiel zeigen wir die Nutzung von ",(0,a.kt)("a",{parentName:"p",href:"https://www.chip.de/downloads/Navicat-Lite_70358373.html"},"Navicat")," oder ",(0,a.kt)("a",{parentName:"p",href:"https://www.heidisql.com/download.php"},"HeidiSQL")," Im Anschluss wird die heruntergeladene Datei ausgef\xfchrt und der Einrichtungsvorgang befolgt. Wenn dieser Schritt abgeschlossen ist, dann kann das Programm gestartet werden und die Verbindung zur Datenbank hergestellt werden. "),(0,a.kt)("h3",{id:"einrichtung"},"Einrichtung"),(0,a.kt)("p",null,"Hierf\xfcr werden die Zugangsdaten zu der Datenbank ben\xf6tigt. Diese befinden sich in der Gameserver Verwaltung unter Datenbanken. Hierbei werden die Informationen bez\xfcglich ",(0,a.kt)("strong",{parentName:"p"},"Server/IP"),", ",(0,a.kt)("strong",{parentName:"p"},"Datenbank"),", ",(0,a.kt)("strong",{parentName:"p"},"Benutzer"),", ",(0,a.kt)("strong",{parentName:"p"},"Passwort")," und des Standard Port ",(0,a.kt)("strong",{parentName:"p"},"3306")," ben\xf6tigt:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159171035-cbada76f-c540-42d1-8a77-26d9b09acaa1.png",alt:"image"})),(0,a.kt)("h3",{id:"heidisql"},"HeidiSQL"),(0,a.kt)("p",null,'Damit die Verbindung in HeidiSQL hergestellt werden kann, legen wir mit "Neu" eine neue Verbindung an.'),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/71441339/161415767-8acd5679-6462-4207-9021-8d5ea4b4c4c5.png",alt:"image"})),(0,a.kt)("p",null,'Bei Hostname / IP, tragen wir den Namen deiner Datenbank an, in unserem Beispiel "mysql-mariadb-5-101.zap-hosting.com"\nBenutzername und Passwort sind ebenso den Angaben zu entnehmen, Port bleibt auf 3306'),(0,a.kt)("p",null,'Danach klicken wir einfach "\xd6ffnen"'),(0,a.kt)("h3",{id:"navicat"},"Navicat"),(0,a.kt)("p",null,"Damit die Verbindung in Navicat hergestellt werden kann legen wir eine neue Verbindung an. Unter ",(0,a.kt)("strong",{parentName:"p"},"Connection")," w\xe4hlen wir ",(0,a.kt)("strong",{parentName:"p"},"MySQL")," aus. Im Anschluss \xf6ffnet sich ein weiteres Popup Fenster wo die Datenbank Informationen eingetragen werden."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61839701/165672645-81f0c3ed-0f1c-4be5-8a85-d92df335981f.png",alt:null})),(0,a.kt)("p",null,"Der ",(0,a.kt)("strong",{parentName:"p"},"Connection Name")," gilt nur zur \xdcbersicht der Datenbanken und kann daher frei gew\xe4hlt werden. Alle weiteren Informationen \xfcbernehmen wir aus dem Interface wie oben beschrieben. Im Anschluss klicken wir auf ",(0,a.kt)("strong",{parentName:"p"},"OK"),' und fertig ist die Einrichtung. Die Verbindung kann im Anschluss links in der Datenbank \xdcbersicht hergestellt\nwerden. Klicke daf\xfcr einmal einen Doppelklick auf deine Datenbank oder Rechtsklick und w\xe4hle "\xd6ffne Verbindung":'),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61839701/165673163-213ab077-478f-4102-b36b-60ff5e1f2262.png",alt:null})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61839701/165673099-e1cd908a-5421-4ec4-bb88-186c3d894c39.png",alt:null})),(0,a.kt)("p",null,"Im Anschluss \xf6ffnet sich die Datenbank mit allen vorhandenen Datenbanktabellen. Dort kann nun deine Datenbank \xe4hnlich wie in phpMyAdmin sowohl per Klick als auch per SQL-Befehle ver\xe4ndert oder verwaltet werden.\n",(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159171040-0e45c5ef-997f-49dd-aab8-3f6e0171a1dd.png",alt:"image"})))}p.isMDXComponent=!0}}]);