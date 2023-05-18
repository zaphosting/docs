"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5831],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>k});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=r.createContext({}),l=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=l(e.components);return r.createElement(d.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=l(t),g=i,k=u["".concat(d,".").concat(g)]||u[g]||p[g]||a;return t?r.createElement(k,s(s({ref:n},m),{},{components:t})):r.createElement(k,s({ref:n},m))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=g;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o[u]="string"==typeof e?e:i,s[1]=o;for(var l=2;l<a;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},5041:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=t(7462),i=(t(7294),t(3905));const a={id:"domain_teamspeak_redirect",title:"Domain TeamSpeak 3 Weiterleitung einrichten",description:"Informationen wie du eine Weiterleitung von einer Domain auf einen TS-Server bei ZAP-Hosting einrichtest - ZAP-Hosting.com Dokumentationen",sidebar_label:"Domain TeamSpeak 3 Weiterleitung"},s=void 0,o={unversionedId:"domain_teamspeak_redirect",id:"domain_teamspeak_redirect",title:"Domain TeamSpeak 3 Weiterleitung einrichten",description:"Informationen wie du eine Weiterleitung von einer Domain auf einen TS-Server bei ZAP-Hosting einrichtest - ZAP-Hosting.com Dokumentationen",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/domain_teamspeak_redirect.md",sourceDirName:".",slug:"/domain_teamspeak_redirect",permalink:"/guides/de/docs/domain_teamspeak_redirect",draft:!1,editUrl:"https://github.com/zaphosting/docs/tree/master/docs/domain_teamspeak_redirect.md",tags:[],version:"current",frontMatter:{id:"domain_teamspeak_redirect",title:"Domain TeamSpeak 3 Weiterleitung einrichten",description:"Informationen wie du eine Weiterleitung von einer Domain auf einen TS-Server bei ZAP-Hosting einrichtest - ZAP-Hosting.com Dokumentationen",sidebar_label:"Domain TeamSpeak 3 Weiterleitung"},sidebar:"domainwebspaceSidebar",previous:{title:"Domain Gameserver Weiterleitung",permalink:"/guides/de/docs/domain_gameserver_srv_link"},next:{title:"Domain Hinzuf\xfcgen",permalink:"/guides/de/docs/webspace_adddomain"}},d={},l=[{value:"Domain auf TeamSpeak 3 Server weiterleiten",id:"domain-auf-teamspeak-3-server-weiterleiten",level:2},{value:"Wie funktioniert das?",id:"wie-funktioniert-das",level:2},{value:"Bevor wir mit der Erstellung von Eintr\xe4gen in den DNS Einstellungen der Domain beginnen, hier ein paar Informationen vorab:",id:"bevor-wir-mit-der-erstellung-von-eintr\xe4gen-in-den-dns-einstellungen-der-domain-beginnen-hier-ein-paar-informationen-vorab",level:3},{value:"SRV Service",id:"srv-service",level:3},{value:"SRV Protokoll",id:"srv-protokoll",level:3},{value:"Weiterleitung der Domain ohne Subdomain",id:"weiterleitung-der-domain-ohne-subdomain",level:2},{value:"Weiterleitung der Domain mit Subdomain",id:"weiterleitung-der-domain-mit-subdomain",level:2},{value:"Weiterleitung der Domain mit Port (SRV)",id:"weiterleitung-der-domain-mit-port-srv",level:2},{value:"Weiterleitung ohne Subdomain",id:"weiterleitung-ohne-subdomain",level:3},{value:"Weiterleitung mit Subdomain",id:"weiterleitung-mit-subdomain",level:3}],m={toc:l},u="wrapper";function p(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Bitte beachte dass es immer bis zu 24 Stunden dauern kann bis \xc4nderungen an DNS Eintr\xe4gen aktiv werden!")),(0,i.kt)("h2",{id:"domain-auf-teamspeak-3-server-weiterleiten"},"Domain auf TeamSpeak 3 Server weiterleiten"),(0,i.kt)("p",null,"Du kannst entweder deine Domain vollst\xe4ndig, oder lediglich eine Subdomain auf deinen TeamSpeak 3 Server weiterleiten.\nSo muss sich niemand die komplizierte IP Adresse welche aus Zahlen besteht merken sondern kann sich einfach mithilfe der Domain auf deinen TeamSpeak 3 Server verbinden."),(0,i.kt)("h2",{id:"wie-funktioniert-das"},"Wie funktioniert das?"),(0,i.kt)("h3",{id:"bevor-wir-mit-der-erstellung-von-eintr\xe4gen-in-den-dns-einstellungen-der-domain-beginnen-hier-ein-paar-informationen-vorab"},"Bevor wir mit der Erstellung von Eintr\xe4gen in den DNS Einstellungen der Domain beginnen, hier ein paar Informationen vorab:"),(0,i.kt)("p",null,"F\xfcr die Weiterleitung der IP Adresse wird entweder eine Subdomain erstellt welche auf die IP Adresse des TeamSpeak 3 Servers leitet, oder du leitest die komplette Domain ohne Subdomain weiter.\nDies w\xfcrde bereits ausreichen wenn der TeamSpeak 3 Server den Standartport ",(0,i.kt)("strong",{parentName:"p"},"9987")," verwendet.\nVerwendet der TeamSpeak 3 Server jedoch einen anderen Port als den Standartport, wird zus\xe4tzlich noch ein sogenannter ",(0,i.kt)("strong",{parentName:"p"},"SRV Eintrag"),"\nben\xf6tigt um die Domain oder Subdomain auf den richtigen Port weiterleiten zu k\xf6nnen."),(0,i.kt)("h3",{id:"srv-service"},"SRV Service"),(0,i.kt)("p",null,"Der Servicename beginnt immer mit einem ",(0,i.kt)("strong",{parentName:"p"},"Unterstrich"),".\nF\xfcr einen TeamSpeak 3 Server lautet der Servicename immer ",(0,i.kt)("strong",{parentName:"p"},"_ts3"),", ohne Ausnahme."),(0,i.kt)("h3",{id:"srv-protokoll"},"SRV Protokoll"),(0,i.kt)("p",null,"Als Protokoll geben wir das f\xfcr die Verbindung verwendete Internetprotokoll an. Hier stehen ",(0,i.kt)("strong",{parentName:"p"},"UDP")," und ",(0,i.kt)("strong",{parentName:"p"},"TCP")," zur Verf\xfcgung.\nDie Angabe des Protokolls beginnt ebenfalls immer mit einem ",(0,i.kt)("strong",{parentName:"p"},"Unterstrich")," und lautet entweder ",(0,i.kt)("strong",{parentName:"p"},"_udp")," oder ",(0,i.kt)("strong",{parentName:"p"},"_tcp"),".\nF\xfcr einen TeamSpeak 3 Server wird immer ",(0,i.kt)("strong",{parentName:"p"},"_udp")," verwendet, ohne Ausnahme. "),(0,i.kt)("h2",{id:"weiterleitung-der-domain-ohne-subdomain"},"Weiterleitung der Domain ohne Subdomain"),(0,i.kt)("p",null,"Um deine Domain ohne die Erstellung einer Subdomain auf einen Gameserver weiterzuleiten, \xf6ffnest du zuerst deine Domain indem du\nim Dashboard auf diese klickst, anschlie\xdfend \xf6ffnest du die DNS-Verwaltung \xfcber das Men\xfc auf der linken Seite."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://puu.sh/Fuzfa/0927cbb177.png",alt:null})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://puu.sh/FuzhO/6f4694ab62.png",alt:null})),(0,i.kt)("p",null,"Dort siehst du nun alle bereits vorhandenen DNS Eintr\xe4ge f\xfcr deine Domain.\nSofern du dort noch keine eigenen Eintr\xe4ge erstellt hast kannst du alle bisher vorhandenen EIntr\xe4ge durch einen Klick\nauf den roten M\xfclleimer auf der rechten Seite l\xf6schen."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://puu.sh/Fuzm8/39f3c72fa6.png",alt:null})),(0,i.kt)("p",null,"Anschlie\xdfend klickst du auf ",(0,i.kt)("strong",{parentName:"p"},"Neuer Eintrag")," und landest dann in der Erstellung f\xfcr einen neuen DNS Eintrag.\nAls ",(0,i.kt)("strong",{parentName:"p"},"Name")," w\xe4hlen wir hier den Namen der Domain, als Beispiel ",(0,i.kt)("strong",{parentName:"p"},"teamspeak-server.de"),", der ",(0,i.kt)("strong",{parentName:"p"},"Typ ist A")," und der ",(0,i.kt)("strong",{parentName:"p"},"Wert")," entspricht der\nzahlen IP deines TeamSpeak 3 Servers, in diesem Fall ",(0,i.kt)("strong",{parentName:"p"},"88.214.57.116"),".\nDas Feld ",(0,i.kt)("strong",{parentName:"p"},"TTL")," kannst du unber\xfchrt lassen."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159176289-1ebd0495-bc04-402e-a4e8-eb9c59ea110a.png",alt:"image"})),(0,i.kt)("p",null,"Wenn du alles eingetragen hast klickst du auf ",(0,i.kt)("strong",{parentName:"p"},"Speichern"),", der Eintrag wird dann in den DNS Einstellungen hinterlegt und wird innerhalb\nvon 24 Stunden erreichbar."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Es kann immer bis zu 24 Stunden dauern bis neue DNS Eintr\xe4ge aktiv werden. Darauf hat leider niemand Einfluss.")),(0,i.kt)("h2",{id:"weiterleitung-der-domain-mit-subdomain"},"Weiterleitung der Domain mit Subdomain"),(0,i.kt)("p",null,"Willst du eine Subdomain, also zum Beispiel ts.teamspeak-server.de erstellen, erledigst du das wie im vorheringen Beispiel,\ngibst jedoch bei ",(0,i.kt)("strong",{parentName:"p"},"Name")," nicht den Namen der Domain, sondern der Subdomain an.\nDas sieht so aus:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159176292-8340ab9a-f9d3-43fe-83c4-597fa9da319b.png",alt:"image"})),(0,i.kt)("h2",{id:"weiterleitung-der-domain-mit-port-srv"},"Weiterleitung der Domain mit Port (SRV)"),(0,i.kt)("p",null,"Wird nicht der Standartport ",(0,i.kt)("strong",{parentName:"p"},"9987")," genutzt so muss zus\xe4tzlich ein sogenannter ",(0,i.kt)("strong",{parentName:"p"},"SRV Eintrag")," angelegt werden um nicht nur die Domain\nauf die IP des Gameservers sondern auch auf den korrekten Port weiterzuleiten."),(0,i.kt)("p",null,"Zuerst erstellt du wie oben beschrieben entweder eine ",(0,i.kt)("strong",{parentName:"p"},"Subdomain")," oder du leitest die Domain wie oben beschrieben\ndirekt auf den TeamSpeak 3 Server weiter, beides ist m\xf6glich. "),(0,i.kt)("h3",{id:"weiterleitung-ohne-subdomain"},"Weiterleitung ohne Subdomain"),(0,i.kt)("p",null,"Nachdem du wie oben beschrieben deine Domain auf die IP Adresse deines TeamSpeak 3 Servers weitergeleitet hast klickst du auf ",(0,i.kt)("strong",{parentName:"p"},"Neuer Eintrag"),"\nund erstellst einen Eintrag der wie folgt aussieht:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159176297-5db7fc10-048b-4df8-a1a2-384e1012a61c.png",alt:"image"})),(0,i.kt)("p",null,"Das Feld ",(0,i.kt)("strong",{parentName:"p"},"Name")," beinhaltet den Namen des Service's, was in diesem Fall unser TeamSpeak 3 Server ist, also ",(0,i.kt)("strong",{parentName:"p"},"_ts3"),". Ebenso ist dort der Protokolltyp, in diesem Fall ",(0,i.kt)("strong",{parentName:"p"},"_udp")," so wie der ",(0,i.kt)("strong",{parentName:"p"},"Domainname")," angegeben.\nDas Feld ",(0,i.kt)("strong",{parentName:"p"},"Typ")," gibt an um welche Art von Eintrag es sich handelt, in diesem Fall ist es ein ",(0,i.kt)("strong",{parentName:"p"},"SRV")," Eintrag.\nDas Feld ",(0,i.kt)("strong",{parentName:"p"},"Wert")," enth\xe4lt den Spielport und die Domain, also in diesem Fall ",(0,i.kt)("strong",{parentName:"p"},"0 1234 teamspeak-server.de"),", wobei ",(0,i.kt)("strong",{parentName:"p"},"1234")," der ",(0,i.kt)("strong",{parentName:"p"},"Port des Spiels")," ist und ",(0,i.kt)("strong",{parentName:"p"},"teamspeak-server.de")," die Domain zu welcher die Weiterleitung erfolgt.\nDer Wert ",(0,i.kt)("strong",{parentName:"p"},"0")," ist nicht weiter relevant und bleibt immer gleich. Das Feld ",(0,i.kt)("strong",{parentName:"p"},"TTL")," und ",(0,i.kt)("strong",{parentName:"p"},"Prio")," l\xe4sst du ebenfalls unber\xfchrt."),(0,i.kt)("p",null,"Danach kannst du auf ",(0,i.kt)("strong",{parentName:"p"},"Speichern")," klicken."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Wichtig ist, dass im Feld ",(0,i.kt)("strong",{parentName:"p"},"Wert")," am Ende der Domain ein ",(0,i.kt)("strong",{parentName:"p"},"Punkt")," gesetzt wird!")),(0,i.kt)("h3",{id:"weiterleitung-mit-subdomain"},"Weiterleitung mit Subdomain"),(0,i.kt)("p",null,"Mit einer Subdomain verh\xe4lt es sich fast genau so. Du erstellst zuerst wie oben beschrieben eine Subdomain und leitest diese auf die IP Adresse deines TeamSpeak 3 Servers weiter. Im Anschluss klickst du auf ",(0,i.kt)("strong",{parentName:"p"},"Neuer Eintrag")," und erstellst dort einen Eintrag mit folgendem Inhalt:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159176301-c59eda6b-be94-4ad4-837a-6dd50de6929a.png",alt:"image"})),(0,i.kt)("p",null,"Das Feld ",(0,i.kt)("strong",{parentName:"p"},"Name")," beinhaltet den Namen des Service's, was in diesem Fall unser TeamSpeak 3 Server ist, also ",(0,i.kt)("strong",{parentName:"p"},"_ts3"),". Ebenso ist dort der Protokolltyp, in diesem Fall ",(0,i.kt)("strong",{parentName:"p"},"_udp")," so wie der ",(0,i.kt)("strong",{parentName:"p"},"Domainname")," zusammen mit der ",(0,i.kt)("strong",{parentName:"p"},"Subdomain"),", also ",(0,i.kt)("strong",{parentName:"p"},"ts.teamspeak-server.de")," angegeben.\nDas Feld ",(0,i.kt)("strong",{parentName:"p"},"Typ")," gibt an um welche Art von Eintrag es sich handelt, in diesem Fall ist es ein ",(0,i.kt)("strong",{parentName:"p"},"SRV")," Eintrag.\nDas Feld ",(0,i.kt)("strong",{parentName:"p"},"Wert")," enth\xe4lt den Port und die Domain mit Subdomain, also in diesem Fall ",(0,i.kt)("strong",{parentName:"p"},"0 1234 ts.teamspeak-server.de"),", wobei ",(0,i.kt)("strong",{parentName:"p"},"1234")," der ",(0,i.kt)("strong",{parentName:"p"},"Port des TeamSpeak 3 Servers")," ist und ",(0,i.kt)("strong",{parentName:"p"},"ts.teamspeak-server.de")," die Domain mit Subdomain zu welcher die Weiterleitung erfolgt.\nDer Wert ",(0,i.kt)("strong",{parentName:"p"},"0")," ist nicht weiter relevant und bleibt immer gleich. Das Feld ",(0,i.kt)("strong",{parentName:"p"},"TTL")," und ",(0,i.kt)("strong",{parentName:"p"},"Prio")," l\xe4sst du ebenfalls unber\xfchrt."))}p.isMDXComponent=!0}}]);