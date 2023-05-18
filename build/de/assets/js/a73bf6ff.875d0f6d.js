"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8333],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(t),g=i,f=d["".concat(u,".").concat(g)]||d[g]||p[g]||a;return t?r.createElement(f,o(o({ref:n},l),{},{components:t})):r.createElement(f,o({ref:n},l))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=g;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},5807:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(7462),i=(t(7294),t(3905));const a={id:"assettocorsa_configure",title:"Server Konfigurieren",description:"Informationen zu den Konfigurationsoptionen deines Assetto Corsa-Server von ZAP-Hosting - ZAP-Hosting.com Dokumentationen",sidebar_label:"Server Konfigurieren"},o=void 0,s={unversionedId:"assettocorsa_configure",id:"assettocorsa_configure",title:"Server Konfigurieren",description:"Informationen zu den Konfigurationsoptionen deines Assetto Corsa-Server von ZAP-Hosting - ZAP-Hosting.com Dokumentationen",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/assettocorsa_configure.md",sourceDirName:".",slug:"/assettocorsa_configure",permalink:"/guides/de/docs/assettocorsa_configure",draft:!1,editUrl:"https://github.com/zaphosting/docs/tree/master/docs/assettocorsa_configure.md",tags:[],version:"current",frontMatter:{id:"assettocorsa_configure",title:"Server Konfigurieren",description:"Informationen zu den Konfigurationsoptionen deines Assetto Corsa-Server von ZAP-Hosting - ZAP-Hosting.com Dokumentationen",sidebar_label:"Server Konfigurieren"},sidebar:"gameserverSidebar",previous:{title:"Server Konfiguration",permalink:"/guides/de/docs/ark_configuration"},next:{title:"Server Konfigurieren mit Content Manager",permalink:"/guides/de/docs/assettocorsa_contentmanager"}},u={},c=[{value:"Mit FTP verbinden",id:"mit-ftp-verbinden",level:2},{value:"Vorbereitung",id:"vorbereitung",level:2},{value:"Map Einstellen",id:"map-einstellen",level:2},{value:"Autos Einstellen",id:"autos-einstellen",level:2},{value:"Config Hochladen",id:"config-hochladen",level:2}],l={toc:c},d="wrapper";function p(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"mit-ftp-verbinden"},"Mit FTP verbinden"),(0,i.kt)("p",null,"Bevor wir den Server Konfigurieren k\xf6nnen, muss der ",(0,i.kt)("a",{parentName:"p",href:"/guides/de/docs/gameserver_ftpaccess"},"FTP-Zugang")," eingerichtet werden:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159135972-112ad9ef-5f6b-4bc6-ba9f-7471b4f8c22b.png",alt:"image"})),(0,i.kt)("p",null,"Nachdem dieser eingerichtet wurde, kann sich nun verbunden werden und der Server Ordner ge\xf6ffnet werden:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159135981-9119c0c9-1b37-4fcc-ad76-1c88bc4b116b.png",alt:"image"})),(0,i.kt)("h2",{id:"vorbereitung"},"Vorbereitung"),(0,i.kt)("p",null,'Zun\xe4chst \xd6ffnen wir den Assetto Corsa Ordner, diesen k\xf6nnen wir \xf6ffnen, indem wir Steam \xd6ffnen und "Assetto Corsa" in der Spieleliste Rechtsklicken,'),(0,i.kt)("p",null,'Nun \xf6ffnen wir "Lokale Dateien" und \xd6ffnen die Lokalen Spieldateien:'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159136021-cd23c04f-0db5-4051-8993-7fddfd0edfaa.png",alt:"image"})),(0,i.kt)("p",null,'Dort \xf6ffnen wir den "server" Ordner und \xf6ffnen den ACServerManager.exe.'),(0,i.kt)("h2",{id:"map-einstellen"},"Map Einstellen"),(0,i.kt)("p",null,'Wir sind nun im "AC Server Manager" Interface, damit k\xf6nnen wir Serverconfigs erstellen und verwalten, zun\xe4chst erstellen wir eine neue Config'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159136101-06de0307-c485-4673-bbc7-4eed1c32ef7b.png",alt:"image"})),(0,i.kt)("p",null,'Nun k\xf6nnen wir unseren Server konfigurieren, in unseren Fall wollen wir nur die Strecken&Autos editieren, dazu \xf6ffnen wir das "Tracks" Tab'),(0,i.kt)("p",null,"Hier k\xf6nnen wir nun auf unsere bevorzugte Map klicken, oben k\xf6nnen dann noch die Menge der Autos auf der Strecke eingestellt werden."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159136194-814b2206-bfc8-44bc-a363-7a275dc73dfc.png",alt:"image"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Gehe sicher das du nicht mehr Autos, als Slots auf deinem Server angibst, ansonsten wird der Server nicht starten")),(0,i.kt)("h2",{id:"autos-einstellen"},"Autos Einstellen"),(0,i.kt)("p",null,'Nun wechseln wir in das Tab "Cars / Entry List", hier k\xf6nnen wir nun neue Autos hinzuf\xfcgen:'),(0,i.kt)("p",null,"Um Autos zu aktivieren, muss links das H\xe4kchen gesetzt werden"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159136202-40a079e2-8558-4c13-825a-f4a73c90b833.png",alt:"image"})),(0,i.kt)("p",null,"In der Mitte erscheinen nun Autos, welche auf dem Grid platziert werden k\xf6nnen, hier k\xf6nnen wir nun Autos in den Farben w\xe4hlen, welche im Grid sein sollten:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159136214-b58c2720-6a04-4882-a661-12cbde86cf31.png",alt:"image"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Um mehrere Autos zu w\xe4hlen, k\xf6nnen mehrere haken gesetzt werden, um die verschiedenen Autos in der Mitte hinzugef\xfcgt werden.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Beachte das alle Autoslots bef\xfcllt werden und nicht mehr, als die Menge der verf\xfcgbaren Slots gesetzt wird\n",(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159136228-57a877cd-e75b-4df0-ad57-30c6b05af255.png",alt:"image"}))),(0,i.kt)("h2",{id:"config-hochladen"},"Config Hochladen"),(0,i.kt)("p",null,'Nun k\xf6nnen wir die Config \xfcber den "Save" Button Abspeichern und \xfcber den "Export" Button exportieren:'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159136248-2aa62490-c2a7-49ae-b97e-0c731cebd7a1.png",alt:"image"})),(0,i.kt)("p",null,"Hier w\xe4hlen wir nun einen freien Ordner, dort werden die Config-Daten gespeichert."),(0,i.kt)("p",null,"Nun kann der AC Server Manager geschlossen werden, wir \xf6ffnen nun den Ordner, in welche die Configs exportiert wurden."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159136258-33c0896a-2ec7-4c80-9fa1-1bf65ebdd083.png",alt:"image"})),(0,i.kt)("p",null,'Diese Configs k\xf6nnen nun \xfcber Drag&Drop in den "cfg" Ordner des Servers hochgeladen werden.'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159136263-cb78e326-bdf5-40c5-9581-804b4f786ce9.png",alt:"image"})),(0,i.kt)("p",null,"Der Server kann nun mit der neuen Config gestartet werden."))}p.isMDXComponent=!0}}]);