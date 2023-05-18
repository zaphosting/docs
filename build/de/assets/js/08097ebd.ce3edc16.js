"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[913],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=r.createContext({}),l=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(d.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=l(t),m=i,g=u["".concat(d,".").concat(m)]||u[m]||p[m]||a;return t?r.createElement(g,s(s({ref:n},c),{},{components:t})):r.createElement(g,s({ref:n},c))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=m;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o[u]="string"==typeof e?e:i,s[1]=o;for(var l=2;l<a;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6034:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=t(7462),i=(t(7294),t(3905));const a={id:"webspace_adddomain",title:"Domain hinzuf\xfcgen",description:"Informationen, wie du eine Domain zu deinem Webspace von ZAP-Hosting hinzuf\xfcgen kannst - ZAP-Hosting.com Dokumentationen",sidebar_label:"Domain Hinzuf\xfcgen"},s=void 0,o={unversionedId:"webspace_adddomain",id:"webspace_adddomain",title:"Domain hinzuf\xfcgen",description:"Informationen, wie du eine Domain zu deinem Webspace von ZAP-Hosting hinzuf\xfcgen kannst - ZAP-Hosting.com Dokumentationen",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/webspace_adddomain.md",sourceDirName:".",slug:"/webspace_adddomain",permalink:"/guides/de/docs/webspace_adddomain",draft:!1,editUrl:"https://github.com/zaphosting/docs/tree/master/docs/webspace_adddomain.md",tags:[],version:"current",frontMatter:{id:"webspace_adddomain",title:"Domain hinzuf\xfcgen",description:"Informationen, wie du eine Domain zu deinem Webspace von ZAP-Hosting hinzuf\xfcgen kannst - ZAP-Hosting.com Dokumentationen",sidebar_label:"Domain Hinzuf\xfcgen"},sidebar:"domainwebspaceSidebar",previous:{title:"Domain TeamSpeak 3 Weiterleitung",permalink:"/guides/de/docs/domain_teamspeak_redirect"},next:{title:"FTP Verbindung Anlegen",permalink:"/guides/de/docs/webspace_plesk_ftp"}},d={},l=[{value:"Webspace",id:"webspace",level:2},{value:"Erste Schritte",id:"erste-schritte",level:2},{value:"Plesk \xf6ffnen",id:"plesk-\xf6ffnen",level:3},{value:"Domain verkn\xfcpfen",id:"domain-verkn\xfcpfen",level:3}],c={toc:l},u="wrapper";function p(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"webspace"},"Webspace"),(0,i.kt)("p",null,"Das Webspace Paket bietet die M\xf6glichkeit, \xfcber das externe Plesk Interface, sowohl Webseiten als auch E-Mail-Adressen zu erstellen und verwalten. Das Webspace fungiert als Webspeicher. Dateien und Ordner k\xf6nnen \xfcber eine FTP Verbindung hochgeladen werden."),(0,i.kt)("p",null,'Jedes \xfcber Zap-Hosting gebuchte Webspace kriegt eine automatisch generierte Subdomain zugewiesen.\nDiese Subdomain besteht aus der Kundennummer, dem Hostserver und der Domain "zap-webspace.com". In der Anleitung "Domain verkn\xfcpfen" wird gezeigt, wie eine eigene Domain zu dem Webspace verbunden werden kann.'),(0,i.kt)("h2",{id:"erste-schritte"},"Erste Schritte"),(0,i.kt)("p",null,"Im Anschluss an die abgeschlossene Bestellung wird das Webspace im Zap-Hosting Dashboard angezeigt."),(0,i.kt)("h3",{id:"plesk-\xf6ffnen"},"Plesk \xf6ffnen"),(0,i.kt)("p",null,'Auf der nun ge\xf6ffneten Seite sind die Login Daten einzusehen. Das Passwort wird nicht im Klartext gespeichert. Um sich dieses anzeigen zu lassen, muss man auf das "Augen" Symbol dr\xfccken.'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61953937/168204970-d1b1fef0-1ce9-46ca-8d4d-70007f1385b6.png",alt:"Bildschirmfoto vom 2022-05-13 05-16-19"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'Wenn dir das dort automatisch generierte Passwort nicht zusagt, kann dieses auf der selben Seite mit der Funktion "Passwort \xe4ndern" innerhalb von wenigen Sekunden ge\xe4ndert werden.')),(0,i.kt)("p",null,'Sobald Benutzername und Passwort eingesehen werden, kann das Plesk Interface durch Bet\xe4tigen der Schaltfl\xe4che "',(0,i.kt)("strong",{parentName:"p"},"Verwaltung \xf6ffnen"),'" ge\xf6ffnet werden. Nach  der Weiterleitung auf das Plesk Interface m\xfcssen jetzt die vorher ersichtlichen Login Daten eingegeben werden.'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61953937/168205026-9544e888-89d2-4846-afaa-e1a0d948bec3.png",alt:"Bildschirmfoto vom 2022-05-13 05-17-21"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'Bei "Sprache der Oberfl\xe4che" kann die Sprache von Deutsch auf Englisch umgestellt werden, als "Standard" definierter Wert ist Deutsch gesetzt.')),(0,i.kt)("h3",{id:"domain-verkn\xfcpfen"},"Domain verkn\xfcpfen"),(0,i.kt)("p",null,'Eine eigene Domain kann in dem Plesk Interface bei dem Men\xfc Punkt "',(0,i.kt)("strong",{parentName:"p"},"Hosting-Einstellungen"),'" eingetragen werden.'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61953937/168205062-797d10cd-5931-4561-9414-d060d8867dfa.png",alt:"Bildschirmfoto vom 2022-05-13 05-20-50"})),(0,i.kt)("p",null,'Bei "',(0,i.kt)("strong",{parentName:"p"},"Hosting Einstellungen"),'" kann nun bei "',(0,i.kt)("strong",{parentName:"p"},"Domainname"),'" die von Zap-Hosting generierte Subdomain gel\xf6scht werden, damit die eigene Domain in dieses eingetragen werden kann. '),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61953937/168205076-b0e4f340-cbc4-461e-beee-cbd8f89459e7.png",alt:"Bildschirmfoto vom 2022-05-13 05-21-11"})),(0,i.kt)("p",null,'Die \xc4nderungen werden durch das Dr\xfccken der Schaltfl\xe4che "',(0,i.kt)("strong",{parentName:"p"},"OK"),'" best\xe4tigt. '),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Die Best\xe4tigung kann etwas Zeit in Anspruch nehmen. Solltest du bei diesem Wechsel Fehler erhalten w\xe4re eine m\xf6gliche Fehlerquelle, dass deine Domain bereits als Alias in der Domain angelegt ist. ")),(0,i.kt)("p",null,"Sofern es keine Probleme bei der \xc4nderung gegeben hat, wird dies in dem Plesk Interface best\xe4tigt. Um diese Domain f\xfcr das Webspace nutzen zu k\xf6nnen, m\xfcssen bei der Domainverwaltung die DNS Einstellungen konfiguriert werden.\nWie dies bei \xfcber uns bestellten Domains geht, kann hier eingesehen werden. "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61953937/168205099-787c4cb4-5e03-408c-a588-43a4a622199f.png",alt:"Bildschirmfoto vom 2022-05-13 05-21-30"})))}p.isMDXComponent=!0}}]);