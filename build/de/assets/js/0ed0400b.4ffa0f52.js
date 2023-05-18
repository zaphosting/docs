"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[599],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=a,g=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return t?r.createElement(g,o(o({ref:n},c),{},{components:t})):r.createElement(g,o({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2826:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const i={id:"rust_decay",title:"Decay ver\xe4ndern",description:"Information, zur Anpassung des Decay bei deinem Rust Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation",sidebar_label:"Decay"},o=void 0,s={unversionedId:"rust_decay",id:"rust_decay",title:"Decay ver\xe4ndern",description:"Information, zur Anpassung des Decay bei deinem Rust Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/rust_decay.md",sourceDirName:".",slug:"/rust_decay",permalink:"/guides/de/docs/rust_decay",draft:!1,editUrl:"https://github.com/zaphosting/docs/tree/master/docs/rust_decay.md",tags:[],version:"current",frontMatter:{id:"rust_decay",title:"Decay ver\xe4ndern",description:"Information, zur Anpassung des Decay bei deinem Rust Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation",sidebar_label:"Decay"},sidebar:"gameserverSidebar",previous:{title:"Plugins installieren",permalink:"/guides/de/docs/rust_plugins"},next:{title:"Verbindung zum Server",permalink:"/guides/de/docs/amongus_connection"}},u={},l=[],c={toc:l},d="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Mithilfe eines RCON Tools kannst du auf deinem Server beliebige Befehle ausf\xfchren, auch Adminrechte k\xf6nnen so vergeben werden.\nZuerst musst du ",(0,a.kt)("a",{parentName:"p",href:"/guides/de/docs/rust_connectrcon"},"via RCON verbinden"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Dein Server muss vollst\xe4ndig gestartet sein um via RCON erreichbar zu sein. ")),(0,a.kt)("p",null,"Sobald du verbunden bist, navigiere in das Feld in welchem du Consolenbefehle ausf\xfchren kannst. In unserem Beispiel nutzen wir ",(0,a.kt)("strong",{parentName:"p"},"RustAdmin"),"."),(0,a.kt)("p",null,"Du kannst mit der Zahl die Decay-Rate anpassen, zum Beispiel:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"decay.scale 1.0")," Unver\xe4nderte Decay Rate",(0,a.kt)("br",null),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"decay.scale 0.5")," Decay Rate auf 50% reduziert",(0,a.kt)("br",null),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"decay.scale 0")," Decay ist komplett deaktiviert",(0,a.kt)("br",null)),(0,a.kt)("p",null,"Angenommen du m\xf6chtest den Decay komplett deaktivieren dann muss der Befehl"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"decay.scale 0")," ausgef\xfchrt werden. Die Eingabe muss mit Enter best\xe4tigt werden."),(0,a.kt)("p",null,"Du kannst nun im Consolen-Tab sehen ob der Befehl erfolgreich \xfcbermittelt wurde."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/26007280/189934246-35f2930a-02d4-4ab3-a203-23ca6345d6ed.png",alt:"image"})),(0,a.kt)("p",null,"Um unsere \xc4nderungen nun zu speichern, muss noch einmalig"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"server.writecfg")," eingegeben und ebenfalls mit Enter best\xe4tigt werden."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/26007280/189934350-a5b8f858-3e6d-4258-b896-d59e30673884.png",alt:"image"})),(0,a.kt)("p",null,"Sofern nun in deiner Console ",(0,a.kt)("inlineCode",{parentName:"p"},"Config Saved")," steht, wurde die \xc4nderung erfolgreich \xfcbernommen."))}p.isMDXComponent=!0}}]);