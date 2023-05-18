"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5858],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),o=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=o(e.components);return r.createElement(l.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=o(t),m=i,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return t?r.createElement(f,s(s({ref:n},p),{},{components:t})):r.createElement(f,s({ref:n},p))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=m;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u[c]="string"==typeof e?e:i,s[1]=u;for(var o=2;o<a;o++)s[o]=t[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8720:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>o});var r=t(7462),i=(t(7294),t(3905));const a={id:"vserver_linux_ftp_install",title:"FTP Server installieren und einrichten",description:"Informationen, wie du einen FTP Server auf deinen vServer von ZAP-Hosting installieren und einrichten kannst - ZAP-Hosting.com Dokumentationen",sidebar_label:"FTP Einrichtung"},s=void 0,u={unversionedId:"vserver_linux_ftp_install",id:"vserver_linux_ftp_install",title:"FTP Server installieren und einrichten",description:"Informationen, wie du einen FTP Server auf deinen vServer von ZAP-Hosting installieren und einrichten kannst - ZAP-Hosting.com Dokumentationen",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/vserver_linux_ftp_install.md",sourceDirName:".",slug:"/vserver_linux_ftp_install",permalink:"/guides/de/docs/vserver_linux_ftp_install",draft:!1,editUrl:"https://github.com/zaphosting/docs/tree/master/docs/vserver_linux_ftp_install.md",tags:[],version:"current",frontMatter:{id:"vserver_linux_ftp_install",title:"FTP Server installieren und einrichten",description:"Informationen, wie du einen FTP Server auf deinen vServer von ZAP-Hosting installieren und einrichten kannst - ZAP-Hosting.com Dokumentationen",sidebar_label:"FTP Einrichtung"}},l={},o=[{value:"Wie installiere ich den FTP Server, und f\xfcge einen Nutzer hinzu?",id:"wie-installiere-ich-den-ftp-server-und-f\xfcge-einen-nutzer-hinzu",level:2},{value:"Wie f\xfcge ich einen FTP Nutzer hinzu?",id:"wie-f\xfcge-ich-einen-ftp-nutzer-hinzu",level:2}],p={toc:o},c="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(c,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"wie-installiere-ich-den-ftp-server-und-f\xfcge-einen-nutzer-hinzu"},"Wie installiere ich den FTP Server, und f\xfcge einen Nutzer hinzu?"),(0,i.kt)("p",null,"Als Erstes muss ein FTP Server installiert werden. Daf\xfcr verbindest du dich ein mal via SSH(Putty) mit dem Server."),(0,i.kt)("p",null,"Um den FTP Server nun zu installieren, gibst du folgendes ein ",(0,i.kt)("strong",{parentName:"p"},"apt-get install proftpd"),". Die Abfrage musst du dann noch mit einem ",(0,i.kt)("strong",{parentName:"p"},"Y")," und enter best\xe4tigen:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159172036-62bec6bb-d879-4c38-9f42-6289fecb6737.png",alt:"image"})),(0,i.kt)("p",null,"Nun m\xfcssen wir noch die Konfig anpassen. Daf\xfcr geben wir ein mal folgendes ein ",(0,i.kt)("strong",{parentName:"p"},"nano /etc/proftpd/proftpd.conf")," und best\xe4tigen. Anschlie\xdfend wird die Konfigdatei im Nanoeditor ge\xf6ffnet:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159172041-7d137e59-47a3-4b24-b16d-196174cec581.png",alt:"image"})),(0,i.kt)("p",null,"Folgende Eintr\xe4ge m\xfcssen hinzugef\xfcgt werden: "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159172045-0ec6cbb8-fd4b-4f55-9850-541ccfae1173.png",alt:"image"})),(0,i.kt)("p",null,"Jetzt muss der FTP-Server neugestartet werden, sodass die \xc4nderungen \xfcbernommen werden. Dies kann man mit folgendem Befehl mache: ",(0,i.kt)("strong",{parentName:"p"},"service proftpd restart")),(0,i.kt)("h2",{id:"wie-f\xfcge-ich-einen-ftp-nutzer-hinzu"},"Wie f\xfcge ich einen FTP Nutzer hinzu?"),(0,i.kt)("p",null,"Um nun den neuen FTP Nutzer anzulegen, m\xfcssen wir erst eine FTP Gruppe erstellen. Dies machen wir mit dem Befehl ",(0,i.kt)("strong",{parentName:"p"},"addgroup ftpuser"),". Dies sieht dann so aus: "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159172048-c6200925-9547-43fe-8dc8-9cc8c7a689d1.png",alt:"image"})),(0,i.kt)("p",null,"Jetzt k\xf6nnen wir unseren ersten FTP Benutzer hinzuf\xfcgen mit den Befehlen: ",(0,i.kt)("strong",{parentName:"p"},"adduser benutzerftp -shell /bin/false -home /var/www")," und anschlie\xdfend ",(0,i.kt)("strong",{parentName:"p"},"adduser benutzerftp ftpuser"),"."),(0,i.kt)("p",null,"Nun werden wir aufgefordert ein Passwort zu setzen: "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159172053-ed22f2b9-3b39-41a7-9fb2-b8c55be9043b.png",alt:"image"})),(0,i.kt)("p",null,"Anschlie\xdfend m\xfcssen wir noch best\xe4tigen, dass die Eingaben auch korrekt sind: "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159172057-bd4b60d8-5952-4fb3-9ffb-df4b53c61313.png",alt:"image"})),(0,i.kt)("p",null,"Als letzten Schritt m\xfcssen wir den neuen User nun noch der Gruppe zuweisen per ",(0,i.kt)("strong",{parentName:"p"},"adduser benutzerftp ftpuser")," :"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159172060-9826c04e-6543-44f8-af7a-eb422b4c8891.png",alt:"image"})),(0,i.kt)("p",null,"Nun k\xf6nnen wir mit unseren angegebenen Informationen verbinden:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159172064-b2302eaa-dd1c-4c2e-b075-376f8a85f791.png",alt:"image"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159172082-8cb4721f-01ef-4dd2-b21d-1e0933199140.png",alt:"image"})))}d.isMDXComponent=!0}}]);