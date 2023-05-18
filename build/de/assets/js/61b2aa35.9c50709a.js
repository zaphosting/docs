"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3215],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(o.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(t),m=a,g=c["".concat(o,".").concat(m)]||c[m]||p[m]||i;return t?r.createElement(g,s(s({ref:n},d),{},{components:t})):r.createElement(g,s({ref:n},d))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=m;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[c]="string"==typeof e?e:a,s[1]=l;for(var u=2;u<i;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7619:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const i={id:"webspace_mybb",title:"MyBB Forensoftware installieren",description:"Informationen, wie du die MyBulletinBoard Forensoftware auf deinen Webspace von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentationen",sidebar_label:"MyBB installieren"},s=void 0,l={unversionedId:"webspace_mybb",id:"webspace_mybb",title:"MyBB Forensoftware installieren",description:"Informationen, wie du die MyBulletinBoard Forensoftware auf deinen Webspace von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentationen",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/webspace_mybb.md",sourceDirName:".",slug:"/webspace_mybb",permalink:"/guides/de/docs/webspace_mybb",draft:!1,editUrl:"https://github.com/zaphosting/docs/tree/master/docs/webspace_mybb.md",tags:[],version:"current",frontMatter:{id:"webspace_mybb",title:"MyBB Forensoftware installieren",description:"Informationen, wie du die MyBulletinBoard Forensoftware auf deinen Webspace von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentationen",sidebar_label:"MyBB installieren"},sidebar:"domainwebspaceSidebar",previous:{title:"Discord Weiterleitung via Domain",permalink:"/guides/de/docs/webspace_htaccess_discord"},next:{title:"WordPress installieren",permalink:"/guides/de/docs/webspace_wordpress"}},o={},u=[{value:"Was ist MyBB?",id:"was-ist-mybb",level:2},{value:"MyBB einrichten",id:"mybb-einrichten",level:2},{value:"Vorbereitung",id:"vorbereitung",level:3},{value:"Installation",id:"installation",level:3}],d={toc:u},c="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"was-ist-mybb"},"Was ist MyBB?"),(0,a.kt)("p",null,"MyBB, urspr\xfcnglich MyBulletinBoard, ist eine freie und quelloffene Forensoftware, welche von der MyBB Group entwickelt wird. In dieser Anleitung erkl\xe4ren wir, wie diese Forensoftware auf unserem Webspace Produkt installiert werden kann. "),(0,a.kt)("h2",{id:"mybb-einrichten"},"MyBB einrichten"),(0,a.kt)("h3",{id:"vorbereitung"},"Vorbereitung"),(0,a.kt)("p",null,"Bevor die eigentliche Installation von MyBB durchgef\xfchrt werden kann, m\xfcssen gewisse Vorbereitungen vorgenommen werden. Dazu geh\xf6rt das Besorgen der Forensoftware, die Einrichtung der zu verwendenden Datenbank und der Mailserver (E-Mail Adresse)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Software")),(0,a.kt)("p",null,"Die Forensoftware  kann auf der offiziellen Webseite von MyBB heruntergeladen werden. Der Download dazu ist hier zu finden: ",(0,a.kt)("a",{parentName:"p",href:"https://mybb.com/download/"},"MyBB")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61953937/168512563-83fb02bd-ab40-4a8e-9178-8bf909614925.png",alt:"Bildschirmfoto vom 2022-05-15 23-16-59"})),(0,a.kt)("p",null,"Beim Download erh\xe4lt man eine gepackte Datei, welche auf dem lokalen Computer entpackt werden muss. Darin befindet sich dann ein Ordner mit dem Namen ",(0,a.kt)("strong",{parentName:"p"},"Upload"),". Dessen Inhalt wird ben\xf6tigt und muss entweder per ",(0,a.kt)("strong",{parentName:"p"},"FTP oder Datei-Manager")," hochgeladen werden. Unter ",(0,a.kt)("strong",{parentName:"p"},"Websites & Domains")," bei ",(0,a.kt)("strong",{parentName:"p"},"FTP-Access")," kannst du einen FTP-Benutzer anlegen."),(0,a.kt)("p",null,"Nach dem \xf6ffnen des Datei-Managers im Pleskpanel, navigieren wir in das ",(0,a.kt)("strong",{parentName:"p"},"httpdocs")," Verzeichnis und laden im Anschluss die Dateien der Forensoftware hoch."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61953937/168512586-31820a99-5b11-4f2f-a9c8-b110f81eb901.png",alt:"de-file"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Datenbank")),(0,a.kt)("p",null,"Als N\xe4chstes muss die Datenbank angelegt werden, in der sp\xe4ter alle Informationen vom Forum gespeichert werden sollen. Klicke dazu wieder auf ",(0,a.kt)("strong",{parentName:"p"},"Websites & Domains")," und dann auf ",(0,a.kt)("strong",{parentName:"p"},"Datenbanken"),". Dort klicken wir dann auf Datenbank hinzuf\xfcgen und legen eine Datenbank an: "),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61953937/168512610-ed66b068-eac3-4ab2-ba36-1d1de1637ce2.png",alt:"de-db"})),(0,a.kt)("p",null,"Im Anschluss auf ",(0,a.kt)("strong",{parentName:"p"},"OK")," klicken und schon wurde die Datenbank hinzugef\xfcgt."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Mailserver (E-Mail Adresse)")),(0,a.kt)("p",null,"Um einen Account beim Forum zu registrieren wird ein Mailserver mit einer E-Mail-Adresse ben\xf6tigt, damit die Registrierungsmails auch an die Benutzer verschickt werden k\xf6nnen. Eine Anleitung zur Einrichtung solch einer E-Mail-Adresse findest du hier: ",(0,a.kt)("a",{parentName:"p",href:"https://zap-hosting.com/guides/docs/de/webspace_plesk_sendmail/"},"E-Mails verschicken")),(0,a.kt)("h3",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Wenn alle Schritte von der Vorbereitung erf\xfcllt wurden, dann kann mit der eigentlichen Einrichtung von MyBB begonnen werden. Daf\xfcr muss nun im Internetbrowser die Webseite aufgerufen werden. Das sieht dann so aus: "),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61953937/168512635-934c6160-229b-4123-82ea-e0f04977f3a4.png",alt:"mybbinstall"})),(0,a.kt)("p",null,"Dort angelangt, m\xfcssen wir bei der Einrichtung nun die 9 Kategorien konfigurieren. W\xe4hrend der Konfiguration wird gepr\xfcft, ob alle Voraussetzungen erf\xfcllt wurden, die Datenbank und Forensoftware wird konfiguriert und so weiter. Zu Beginn muss allerdings erstmal festgelegt werden, ob anonyme Statistiken an MyBB weitergeleitet werden soll oder nicht. Im Anschluss m\xfcssen dann ebenfalls noch den Lizenz Bestimmungen noch zugestimmt werden. "),(0,a.kt)("p",null,"Anschlie\xdfend sollte eine \xdcbersicht aller notwendigen Voraussetzungen angezeigt werden. Standardm\xe4\xdfig sollten das Webspace bereits so konfiguriert sein, dass diese alle erf\xfcllt werden."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61953937/168512646-73f919f8-3aef-4dbf-b460-8f167590a88d.png",alt:"install2"})),(0,a.kt)("p",null,"Sollten irgendwelche Voraussetzungen nicht erf\xfcllt werden, dann melde dich diesbez\xfcglich bitte im Support. Ansonsten kannst du einfach auf ",(0,a.kt)("strong",{parentName:"p"},"Weiter")," klicken und die Einrichtung fortsetzen. Nun steht die Konfiguration der Datenbank an, welche bereits im Voraus erstellt wurde. Die Datenbank Informationen von der erstellten Datenbank m\xfcssen nun dort eingetragen werden: "),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159177023-e839a466-f66e-4bdf-a11a-d505734eecfc.png",alt:"image"})),(0,a.kt)("p",null,"Die Datenbank wird im Anschluss konfiguriert. Das kann einen Augenblick dauern. Im Anschluss erfolgt dann die Implementierung der Standard Daten und Designs. Hier musst du ebenfalls nur auf ",(0,a.kt)("strong",{parentName:"p"},"Weiter")," klicken."),(0,a.kt)("p",null,"Darauffolgend kommen wir dann schon zur allgemeinen Konfiguration. Hier kann nun der Name der, Website, Forum, URL und mehr definiert werden:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61953937/168512663-c4d96d31-92a3-47c7-835e-a78c748d1dee.png",alt:"install3"})),(0,a.kt)("p",null,"Zu guter Letzt wird nun noch ein allgemeiner Administrator Account angelegt, bevor die Einrichtung dann endg\xfcltig abgeschlossen werden kann. "),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61953937/168512681-4f7474c4-9c08-4fd1-90a0-e3707dcf09eb.png",alt:"Install4"})),(0,a.kt)("p",null,"Wenn du das erledigt hast und auch ansonsten alles erfolgreich konfiguriert wurde, dann solltest du im Anschluss folgende Meldung sehen und dein Forum ebenfalls aufrufen k\xf6nnen:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159177053-541b8e05-9fb5-4dfa-a536-ab1958a0f598.png",alt:"image"})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159177056-647941dd-31f1-4c75-a656-da73c3edf2cc.png",alt:"image"})))}p.isMDXComponent=!0}}]);