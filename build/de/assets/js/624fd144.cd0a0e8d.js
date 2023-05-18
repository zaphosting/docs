"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8624],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>k});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},o="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),o=c(t),m=a,k=o["".concat(l,".").concat(m)]||o[m]||p[m]||s;return t?r.createElement(k,i(i({ref:n},d),{},{components:t})):r.createElement(k,i({ref:n},d))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=m;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u[o]="string"==typeof e?e:a,i[1]=u;for(var c=2;c<s;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7450:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const s={id:"gameserver_backups",title:"Gameserver Backups erstellen, herunterladen und einspielen",description:"Informationen, wie du Backups f\xfcr deinen Gameserver von ZAP-Hosting erstellen, herunterladen und wieder einspielen kannst -ZAP-Hosting.com Dokumentationen",sidebar_label:"Backups"},i=void 0,u={unversionedId:"gameserver_backups",id:"gameserver_backups",title:"Gameserver Backups erstellen, herunterladen und einspielen",description:"Informationen, wie du Backups f\xfcr deinen Gameserver von ZAP-Hosting erstellen, herunterladen und wieder einspielen kannst -ZAP-Hosting.com Dokumentationen",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/gameserver_backups.md",sourceDirName:".",slug:"/gameserver_backups",permalink:"/guides/de/docs/gameserver_backups",draft:!1,editUrl:"https://github.com/zaphosting/docs/tree/master/docs/gameserver_backups.md",tags:[],version:"current",frontMatter:{id:"gameserver_backups",title:"Gameserver Backups erstellen, herunterladen und einspielen",description:"Informationen, wie du Backups f\xfcr deinen Gameserver von ZAP-Hosting erstellen, herunterladen und wieder einspielen kannst -ZAP-Hosting.com Dokumentationen",sidebar_label:"Backups"},sidebar:"gameserverSidebar",previous:{title:"Restartplaner",permalink:"/guides/de/docs/gameserver_restartplaner"},next:{title:"Server down - Was nun?",permalink:"/guides/de/docs/gameserver_server_down_what_now"}},l={},c=[{value:"Backup manuell erstellen",id:"backup-manuell-erstellen",level:2},{value:"Backup automatisiert erstellen",id:"backup-automatisiert-erstellen",level:2},{value:"Backups herunterladen/l\xf6schen",id:"backups-herunterladenl\xf6schen",level:2}],d={toc:c},o="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(o,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Wir bieten die M\xf6glichkeit individuell Backups per Klick zu erstellen. Dadurch k\xf6nnen Backups kinderleicht und ohne gro\xdfen Aufwand erstellt und zu einem sp\xe4teren Zeitpunkt jederzeit wieder importiert werden. Dieses Feature bieten wir sowohl f\xfcr die Server-Dateien deines Gameserver als auch f\xfcr die dazugeh\xf6rigen Datenbanken. Das Backup wird dann auf deinem Storage Server gespeichert, welcher standardm\xe4\xdfig 10GB kostenlosen Speicherplatz bietet. Solltest du mehr ben\xf6tigen, dann kannst du auch auf ein Premium Storage upgraden."),(0,a.kt)("p",null,"Neben dem manuellen erstellen von Backups k\xf6nnen auch Backups voll automatisiert erstellt werden. Es k\xf6nnen entweder t\xe4glich oder w\xf6chentlich Backups zu einer angegebenen Uhrzeit angelegt werden. Nach einer Wiederherstellung eines Backups befindet sich der Server auf dem Stand zum Zeitpunkt der Backuperstellung."),(0,a.kt)("h2",{id:"backup-manuell-erstellen"},"Backup manuell erstellen"),(0,a.kt)("p",null,"Um ein Backup manuell zu erstellen muss der gr\xfcne ",(0,a.kt)("strong",{parentName:"p"},"+")," Button neben der Backup Liste gedr\xfcckt werden. Im Anschluss startet der Backup Vorgang. "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Je nach Speichergr\xf6\xdfe des Servers kann das anlegen das Backups durchaus ein paar Minuten dauern!")),(0,a.kt)("h2",{id:"backup-automatisiert-erstellen"},"Backup automatisiert erstellen"),(0,a.kt)("p",null,"Unten am Ende der Seite befinden sich weitere Optionen, wo unter anderem auch die Einstellungen f\xfcr automatisierte Backups zu finden. Die Option ",(0,a.kt)("strong",{parentName:"p"},"Backups automatisch erstellen")," muss aktiviert sein, damit die Funktion aktiv ist. Zudem muss das Intervall gesetzt werden. "),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159171260-f3d1775e-25bc-45a0-b4aa-d6bdc13bfa0f.png",alt:"image"})),(0,a.kt)("p",null,"Je nach Spiel ist es oftmals auch zu empfehlen die Datenbank mit zu sichern, da dort oftmals wichtige Daten wie Spielst\xe4nde, Rechte und vieles mehr gespeichert werden. "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f Ausreichend Speicherplatz ist essenziell, damit regelm\xe4\xdfige Backups erstellt werden k\xf6nnen. Stelle daher sicher, dass du immer ausreichend Speicherplatz hast. ")),(0,a.kt)("h2",{id:"backups-herunterladenl\xf6schen"},"Backups herunterladen/l\xf6schen"),(0,a.kt)("p",null,"Um Backups herunterladen oder zu l\xf6schen muss man sich per FTP mit dem Storage Server verbinden. Eine Anleitung zum Benutzen von FTP findest du hier: ",(0,a.kt)("a",{parentName:"p",href:"/guides/de/docs/gameserver_ftpaccess"},"FTP-Zugang")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159171263-ef2c31b3-1541-4f41-b7b1-e8a70c96a422.png",alt:"image"})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159171264-187a5aca-1829-41a0-967b-f9125df236c1.png",alt:"image"})),(0,a.kt)("p",null,"Dort angelangt findet man die Zugangsdaten zum Storage Server und den aktuell belegten Speicherplatz. Wenn du per FTP verbunden bist, dann findest du dort die Backups und kannst sie dar\xfcber herunterladen oder l\xf6schen."))}p.isMDXComponent=!0}}]);