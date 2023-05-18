"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3855],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=l(t),g=i,m=c["".concat(u,".").concat(g)]||c[g]||p[g]||a;return t?r.createElement(m,s(s({ref:n},d),{},{components:t})):r.createElement(m,s({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=g;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[c]="string"==typeof e?e:i,s[1]=o;for(var l=2;l<a;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},8372:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=t(7462),i=(t(7294),t(3905));const a={id:"vserver_windows_nointernet",title:"Kein Internetzugang auf Windows Server. Was nun?",description:"Informationen zu Probleml\xf6sungen, wenn der Windows vServer von ZAP-Hosting keinen Internetzugang anzeigt - ZAP-Hosting.com Dokumentationen",sidebar_label:"Kein Internet was nun?"},s=void 0,o={unversionedId:"vserver_windows_nointernet",id:"vserver_windows_nointernet",title:"Kein Internetzugang auf Windows Server. Was nun?",description:"Informationen zu Probleml\xf6sungen, wenn der Windows vServer von ZAP-Hosting keinen Internetzugang anzeigt - ZAP-Hosting.com Dokumentationen",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/vserver_windows_nointernet.md",sourceDirName:".",slug:"/vserver_windows_nointernet",permalink:"/guides/de/docs/vserver_windows_nointernet",draft:!1,editUrl:"https://github.com/zaphosting/docs/tree/master/docs/vserver_windows_nointernet.md",tags:[],version:"current",frontMatter:{id:"vserver_windows_nointernet",title:"Kein Internetzugang auf Windows Server. Was nun?",description:"Informationen zu Probleml\xf6sungen, wenn der Windows vServer von ZAP-Hosting keinen Internetzugang anzeigt - ZAP-Hosting.com Dokumentationen",sidebar_label:"Kein Internet was nun?"},sidebar:"vpsrootSidebar",previous:{title:"Zus\xe4tzliche IPs hinzuf\xfcgen",permalink:"/guides/de/docs/vserver_windows_addip"},next:{title:"Sprache hinzuf\xfcgen/\xe4ndern",permalink:"/guides/de/docs/vserver_windows_change_language"}},u={},l=[{value:"Kein Internet was nun?",id:"kein-internet-was-nun",level:2},{value:"Anmelden \xfcber die VNC-Konsole",id:"anmelden-\xfcber-die-vnc-konsole",level:2},{value:"Wie stelle ich die Verbindung wieder her?",id:"wie-stelle-ich-die-verbindung-wieder-her",level:2}],d={toc:l},c="wrapper";function p(e){let{components:n,...t}=e;return(0,i.kt)(c,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"kein-internet-was-nun"},"Kein Internet was nun?"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159165541-d23bfcaf-d745-4b98-96bb-5960a113723c.png",alt:"image"})),(0,i.kt)("p",null,'In der Regel steht dein Windows Server auf "Gestartet", sollte er \xfcber keine Internetverbindung verf\xfcgen.'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159165538-4c9c7858-ce7a-44eb-982e-fe614f731dfa.png",alt:"image"})),(0,i.kt)("p",null,"Sollte dein Server regul\xe4r Online sein, dennoch aber keine Verbindung haben, muss die Netzwerkkonfiguration \xfcber die VNC-Konsole gepr\xfcft werden."),(0,i.kt)("h2",{id:"anmelden-\xfcber-die-vnc-konsole"},"Anmelden \xfcber die VNC-Konsole"),(0,i.kt)("p",null,"Wir verbinden uns \xfcber die VNC-Konsole und melden uns auf dem Server an."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159165545-bb459a8b-f900-4d7c-95b6-c73b10d494ef.png",alt:"image"})),(0,i.kt)("h2",{id:"wie-stelle-ich-die-verbindung-wieder-her"},"Wie stelle ich die Verbindung wieder her?"),(0,i.kt)("p",null,"Im Anschluss \xf6ffnen wir die Adaptereinstellungen. Daf\xfcr machen wir einen Rechtsklick auf die Internetverbindung."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159165546-ce7eedcc-2761-4109-a72b-a41ef19f4b5e.png",alt:"image"})),(0,i.kt)("p",null,"Anschlie\xdfend klicken wir auf ",(0,i.kt)("strong",{parentName:"p"},"Adapteroptionen \xe4ndern"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159165551-c3d6190f-f9cf-4b0c-8e09-14d6c55b02b8.png",alt:"image"})),(0,i.kt)("p",null,"Nun \xf6ffnen wir per ",(0,i.kt)("strong",{parentName:"p"},"Rechtsklick")," die ",(0,i.kt)("strong",{parentName:"p"},"Eigenschaften")," des Adapters. "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159165554-6c7e2ff3-c4ab-42bc-ba9a-b34d1974e3b4.png",alt:"image"})),(0,i.kt)("p",null,"Im Anschluss machen dort einen ",(0,i.kt)("strong",{parentName:"p"},"Doppelklick")," auf die ",(0,i.kt)("strong",{parentName:"p"},"Ipv4")," Verbindung."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159165558-e73e6c72-5c7f-4218-8fbd-7879ea9858b3.png",alt:"image"})),(0,i.kt)("p",null,"Daraufhin pr\xfcfen wir, ob dort ",(0,i.kt)("strong",{parentName:"p"},"unsere")," IP aus dem ZAP Webinterface eingetragen ist. Im folgenden zeige ich ein Beispiel wie es bei der IP 185.249.196.108 korrekt w\xe4re:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159165560-ca15c764-dc9e-460d-a5ac-2cd4eee8bf5f.png",alt:"image"})),(0,i.kt)("p",null,"Gehe sicher das du ",(0,i.kt)("strong",{parentName:"p"},"deine"),' Server IP unter "IP Addresse" eingibst. Wichtig hierbei ist, dass die Subnetzmaske immer ein Typ C Netz ist und somit immer 255.255.255.0 lautet. Das Standardgateway ist immer die Ip selber mit der 1 am Ende. Als DNS-Server nimmt man in der Regel den Google DNS wie im obigen Screenshot.'),(0,i.kt)("p",null,"Im Anschluss \xfcbernimmt man die Einstellungen und startet den Server ggf. neu."))}p.isMDXComponent=!0}}]);