"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3799],{3905:(e,n,r)=>{r.d(n,{Zo:()=>o,kt:()=>m});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=t.createContext({}),d=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},o=function(e){var n=d(e.components);return t.createElement(u.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),c=d(r),p=i,m=c["".concat(u,".").concat(p)]||c[p]||g[p]||a;return r?t.createElement(m,s(s({ref:n},o),{},{components:r})):t.createElement(m,s({ref:n},o))}));function m(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=p;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[c]="string"==typeof e?e:i,s[1]=l;for(var d=2;d<a;d++)s[d]=r[d];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4849:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var t=r(7462),i=(r(7294),r(3905));const a={id:"voiceserver_configuration",title:"Konfiguration",description:"Informationen, wie du deinen Teamspeak-Server von ZAP-Hosting konfigurieren kannst - ZAP-Hosting.com Dokumentationen",sidebar_label:"Server Konfiguration"},s=void 0,l={unversionedId:"voiceserver_configuration",id:"voiceserver_configuration",title:"Konfiguration",description:"Informationen, wie du deinen Teamspeak-Server von ZAP-Hosting konfigurieren kannst - ZAP-Hosting.com Dokumentationen",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/voiceserver_configuration.md",sourceDirName:".",slug:"/voiceserver_configuration",permalink:"/guides/de/docs/voiceserver_configuration",draft:!1,editUrl:"https://github.com/zaphosting/docs/tree/master/docs/voiceserver_configuration.md",tags:[],version:"current",frontMatter:{id:"voiceserver_configuration",title:"Konfiguration",description:"Informationen, wie du deinen Teamspeak-Server von ZAP-Hosting konfigurieren kannst - ZAP-Hosting.com Dokumentationen",sidebar_label:"Server Konfiguration"},sidebar:"voiceserverbotSidebar",previous:{title:"Admin werden",permalink:"/guides/de/docs/voiceserver_becomeadmin"},next:{title:"Ts3 Backup",permalink:"/guides/de/docs/voiceserver_ts3backup"}},u={},d=[{value:"Server Konfiguration",id:"server-konfiguration",level:2},{value:"Allgemeines",id:"allgemeines",level:2},{value:"Name",id:"name",level:3},{value:"Banner",id:"banner",level:3},{value:"Slots (Reservierte Slots)",id:"slots-reservierte-slots",level:3},{value:"Willkommensnachricht",id:"willkommensnachricht",level:3},{value:"Sicherheitsstufe",id:"sicherheitsstufe",level:3},{value:"Benutzer verwalten (Kicken, Bannen, Banliste, Beschwerdeliste)",id:"benutzer-verwalten-kicken-bannen-banliste-beschwerdeliste",level:3},{value:"Personalisieren",id:"personalisieren",level:2},{value:"Channel",id:"channel",level:3},{value:"Server-Gruppen",id:"server-gruppen",level:3},{value:"Berechtigungen",id:"berechtigungen",level:2},{value:"Berechtigungen: Benutzer",id:"berechtigungen-benutzer",level:3},{value:"Berechtigungen: Channel",id:"berechtigungen-channel",level:3},{value:"Berechtigungen: Server-Gruppen",id:"berechtigungen-server-gruppen",level:3}],o={toc:d},c="wrapper";function g(e){let{components:n,...r}=e;return(0,i.kt)(c,(0,t.Z)({},o,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"server-konfiguration"},"Server Konfiguration"),(0,i.kt)("p",null,"Du kannst deinen Teamspeak Server individuell konfigurieren. Im Folgenden wird erkl\xe4rt, wie du deinen Server konfigurieren kannst. Dabei erkl\xe4ren wir dir, wie du allgemeine Einstellungen wie zum Beispiel den Servername, Icon, Banner bis hin zu den Berechtigungen von Benutzer, Channel und Server-Gruppen anpassen kannst. "),(0,i.kt)("h2",{id:"allgemeines"},"Allgemeines"),(0,i.kt)("p",null,"Die Konfiguration des Servers kann prinzipiell \xfcber das Webinterface und direkt im Teamspeak Client selbst gemacht werden, sofern bereits Administrator-Berechtigungen zugewiesen wurden. Falls du dies noch nicht getan hast und auch nicht wei\xdft, wie das geht, dann schaue dir folgende Anleitung dazu an: ",(0,i.kt)("a",{parentName:"p",href:"https://zap-hosting.com/guides/docs/de/teamspeak_becomeadmin/"},"Teamspeak Admin werden")," "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Webinterface")),(0,i.kt)("p",null,"Wenn du die allgemeine Konfiguration deines Servers \xfcber das Webinterface vornehmen m\xf6chtest, dann findest du die Optionen in der Teamspeak Server Verwaltung unter Einstellungen. Die Einstellungsseite sieht dann wie folgt aus: "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61839701/170319600-b95395ba-0bf1-4b7a-b58b-f4feb63fbf1d.png",alt:"img"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Teamspeak Client")),(0,i.kt)("p",null,"Wenn du die allgemeine Konfiguration deines Servers \xfcber den Teamspeak Client direkt vornehmen m\xf6chtest, dann findest du die Optionen, in dem du auf den obersten Channel ",(0,i.kt)("strong",{parentName:"p"},"TeamSpeak ]I[ Server")," einen Rechtsklick machst und dann auf ",(0,i.kt)("strong",{parentName:"p"},"Virtuellen Server editieren")," klickst."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61839701/170319758-09745a1c-457d-45f6-8f17-402aa52b3134.png",alt:"img"})),(0,i.kt)("p",null,"Da die Einstellungsm\xf6glichkeiten im Webinterface soweit so verst\xe4ndlich wie m\xf6glich sein sollten und dort nicht ebenfalls nicht alles angepasst werden kann fokussiert sich diese Anleitung auf die Konfiguration des Teamspeak Servers \xfcber den Teamspeak Client. "),(0,i.kt)("h3",{id:"name"},"Name"),(0,i.kt)("p",null,"Im Feld ",(0,i.kt)("strong",{parentName:"p"},"Server Name")," kannst du den Namen deines Teamspeak Servername definieren. Dieser wird dann in der Serverliste, auf der Webseite und anderweitig angezeigt werden. "),(0,i.kt)("h3",{id:"banner"},"Banner"),(0,i.kt)("p",null,"Sofern du die Option eigenen Banner gebucht hast, kannst du im Feld ",(0,i.kt)("strong",{parentName:"p"},"Banner Gfx URL")," einen eigenen Banner hinzuf\xfcgen. Dabei ist es wichtig, dass du den Direktlink zum Bild angibst, da das Bild ansonsten nicht erkannt wird. Im Feld ",(0,i.kt)("strong",{parentName:"p"},"URL")," kannst du dann noch einstellen, worauf der Banner weiterleiten soll, wenn jemand auf den Banner klickt. "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Wenn kein eigener Banner gebucht wurde, dann wird der Banner automatisch durch den standardm\xe4\xdfigen ZAP-Banner ersetzt. ")),(0,i.kt)("h3",{id:"slots-reservierte-slots"},"Slots (Reservierte Slots)"),(0,i.kt)("p",null,"Die Slots werden von uns gesetzt und k\xf6nnen nicht ver\xe4ndert werden. Allerdings gibt es hier die M\xf6glichkeit reservierte Slots einzustellen. Das bedeutet, dass diese reserviert sind, falls der Teamspeak Server mal voll sein sollte. Dann k\xf6nnen Benutzer mit den entsprechenden Berechtigungen sich trotzdem noch mit dem Teamspeak Server verbinden."),(0,i.kt)("h3",{id:"willkommensnachricht"},"Willkommensnachricht"),(0,i.kt)("p",null,"Hierbei kannst du eine beliebige Willkommensnachricht hinzuf\xfcgen. Diese wird dann beim Verbinden angezeigt. Das kann dann zum Beispiel so aussehen:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61839701/170319971-d89d3240-9bc9-4a99-bef4-c6e37d4d1c92.png",alt:"img"})),(0,i.kt)("h3",{id:"sicherheitsstufe"},"Sicherheitsstufe"),(0,i.kt)("p",null,"Die ben\xf6tigte Sicherheitsstufe legt fest, wie lange Benutzer ben\xf6tigen, um die Sicherheitsstufe ihrer Identit\xe4t zu erh\xf6hen, bis diese Identit\xe4t als ausreichend sicher eingestuft wurde. Grunds\xe4tzlich reduziert dies das potenzial f\xfcr Spam und Missbrauch. Je h\xf6her die Sicherheitsstufe eingestellt wird, desto l\xe4nger dauert es. Hier eine \xdcbersicht \xfcber die Dauer:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Level 0-23 -  Wird generiert innerhalb von Sekunden"),(0,i.kt)("li",{parentName:"ul"},"Level 23-29 - Wird generiert innerhalb von Minuten"),(0,i.kt)("li",{parentName:"ul"},"Level 29-34 - Wird generiert innerhalb von Stunden"),(0,i.kt)("li",{parentName:"ul"},"Level 35-39 - Wird generiert innerhalb von Tagen"),(0,i.kt)("li",{parentName:"ul"},"Level 40-43 - Wird generiert innerhalb von Monaten"),(0,i.kt)("li",{parentName:"ul"},"Level 44+ - Wird generiert innerhalb von Jahren")),(0,i.kt)("h3",{id:"benutzer-verwalten-kicken-bannen-banliste-beschwerdeliste"},"Benutzer verwalten (Kicken, Bannen, Banliste, Beschwerdeliste)"),(0,i.kt)("p",null,"Mit einem Rechtsklick auf den Benutzer kann ein Kick oder Ban ausgef\xfchrt werden. Im Falle eines Bans wird die Identit\xe4t und IP-Adresse in der Bannliste hinterlegt. Diese findest du unter ",(0,i.kt)("strong",{parentName:"p"},"Navigationszeile -> Extras"),". Dort kannst du dann bestehende Bans auch wieder entfernen."),(0,i.kt)("p",null,"Ebenfalls findest du dort die Beschwerdeliste. Das ist ein Feature seitens Teamspeak, womit Benutzer eine Beschwerde \xfcber andere Benutzer, den Server selbst, etc. einreichen k\xf6nnen, falls mal kein Admin auf dem Teamspeak Server sein sollte. "),(0,i.kt)("h2",{id:"personalisieren"},"Personalisieren"),(0,i.kt)("p",null,"Du kannst bei deinem Teamspeak Server noch weitere Channel und Server-Gruppen anlegen um deinen Teamspeak Server noch weiter zu personalisieren. Im Folgenden zeigen wir wie du dies genau machen kannst."),(0,i.kt)("h3",{id:"channel"},"Channel"),(0,i.kt)("p",null,"Um weitere Channel anzulegen, musst du unter den vorhandenen Channels einen ",(0,i.kt)("strong",{parentName:"p"},"Rechtsklick")," machen und dann auf ",(0,i.kt)("strong",{parentName:"p"},"Channel erstellen")," klicken. Im Anschluss \xf6ffnet sich ein Popup-Fenster. Dort kannst du den Channel dann nach den folgenden Optionen konfigurieren: Channel-Name, Passwort, Icon, Beschreibung, Channel Typ und noch mehr. "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61839701/170320598-34fb3683-9f0e-4f4a-ba32-ff4219e99358.png",alt:"img"})),(0,i.kt)("h3",{id:"server-gruppen"},"Server-Gruppen"),(0,i.kt)("p",null,"Um weitere Server-Gruppen anzulegen, musst du in der ",(0,i.kt)("strong",{parentName:"p"},"Navigationszeile")," auf ",(0,i.kt)("strong",{parentName:"p"},"Rechte")," klicken und dann auf ",(0,i.kt)("strong",{parentName:"p"},"Server-Gruppen gehen"),". Dort findest du dann eine \xdcbersicht der vorhandenen Server-Gruppen, deren Berechtigungen und den zugewiesenen Benutzer. In der Liste der Server-Gruppen kannst du unten auf das ",(0,i.kt)("strong",{parentName:"p"},"Plus Symbol")," klicken und dann eine neue Gruppe anlegen. "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61839701/170320643-7d37277e-9162-493f-907c-7e52836acbd3.png",alt:"img"})),(0,i.kt)("h2",{id:"berechtigungen"},"Berechtigungen"),(0,i.kt)("p",null,"Bis hierhin sollte klar sein, wie du allgemeine Einstellungen vom Teamspeak Server anpasst und wie du deinen Teamspeak Server personalisierst, in dem du weitere Channels und Server-Gruppen anlegst. Im Folgenden geht es nun darum wie die Berechtigungen diesbez\xfcglich noch angepasst werden k\xf6nnen. "),(0,i.kt)("h3",{id:"berechtigungen-benutzer"},"Berechtigungen: Benutzer"),(0,i.kt)("p",null,"Die Berechtigungen der Benutzer h\xe4ngen von den zugewiesenen Server-Gruppen ab. Standardm\xe4\xdfig erh\xe4lt ein Benutzer die ",(0,i.kt)("strong",{parentName:"p"},"Normal")," Gruppe. Wenn dem Benutzer weitere Berechtigungen hinzugef\xfcgt werden sollen, dann kann das gemacht werden, in dem ein Rechtsklick auf den Benutzer macht, dann auf Server-Gruppen klickt und im Anschluss die gew\xfcnschte Gruppe zugewiesen wird. "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61839701/170320690-72fbd954-fe6e-45d8-a657-9ed3851cb427.png",alt:"img"})),(0,i.kt)("h3",{id:"berechtigungen-channel"},"Berechtigungen: Channel"),(0,i.kt)("p",null,"F\xfcr die einzelnen Channels k\xf6nnen jeweils Berechtigungen definiert werden. So kann zum Beispiel definiert werden, welche Benutzer den Channel ",(0,i.kt)("strong",{parentName:"p"},"Betreten, Abonnieren, Beschreibung, sehen, \xc4ndern, L\xf6schen kann")," und ",(0,i.kt)("strong",{parentName:"p"},"Zugriff auf den Channel Datei-Browser haben d\xfcrfen"),". "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61839701/170320718-2bd14e50-861c-42f4-8224-3f792610dc63.png",alt:"img"})),(0,i.kt)("p",null,"Der Wert der einzelnen Felder wird von den Server-Gruppen abh\xe4ngig gemacht. Wenn du zum Beispiel eine zus\xe4tzliche Server-Gruppe mit dem Namen ",(0,i.kt)("strong",{parentName:"p"},"Mitglied")," erstellst und nur die Zugriff auf den Channel haben sollen, dann muss der Wert mit der von der Server Gruppe \xfcbereinstimmen. Nehmen wir an die Server-Gruppe hat den Berechtigungswert von 50, dann muss in den einzelnen Felder die ",(0,i.kt)("strong",{parentName:"p"},"50")," eingetragen werden."),(0,i.kt)("h3",{id:"berechtigungen-server-gruppen"},"Berechtigungen: Server-Gruppen"),(0,i.kt)("p",null,"Bei den Berechtigungen der Server-Gruppen gibt es verschiedene Kategorien die angepasst werden k\xf6nnen. Diese beinhalten folgende:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Allgemeine Optionen"),(0,i.kt)("li",{parentName:"ul"},"Gruppen verwalten"),(0,i.kt)("li",{parentName:"ul"},"Benutzer hinzuf\xfcgen, entfernen, Berechtigungsschl\xfcssel verwalten"),(0,i.kt)("li",{parentName:"ul"},"Benutzer verwalten (verschieben, kicken, bannen)"),(0,i.kt)("li",{parentName:"ul"},"Channel verwalten"),(0,i.kt)("li",{parentName:"ul"},"Grundlagen")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61839701/170320740-6f928032-79f6-426a-b4ba-78ca0a7e8064.png",alt:"img"})),(0,i.kt)("p",null,"Diese k\xf6nnen nach deinen W\xfcnschen beliebig angepasst werden. Falls du noch mehr umfassende \xc4nderungen an den Berechtigungen vornehmen m\xf6chtest, dann kannst du das machen, in dem du die Optionen deines Teamspeak Clients aufrufst, dort dann auf Anwendung gehst und dann das ",(0,i.kt)("strong",{parentName:"p"},"Fortgeschrittene Rechtesystem")," aktivierst."))}g.isMDXComponent=!0}}]);