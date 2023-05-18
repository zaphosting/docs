"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6654],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>p});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),u=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=u(e.components);return i.createElement(l.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(t),g=r,p=c["".concat(l,".").concat(g)]||c[g]||m[g]||s;return t?i.createElement(p,a(a({ref:n},d),{},{components:t})):i.createElement(p,a({ref:n},d))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,a=new Array(s);a[0]=g;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[c]="string"==typeof e?e:r,a[1]=o;for(var u=2;u<s;u++)a[u]=t[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},6497:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var i=t(7462),r=(t(7294),t(3905));const s={id:"source_metamod_plugins",title:"Source Spiele mit Sourcemod/Metamod Plugins installieren",description:"Informationen, wie du Plugins auf deinen Source Gameserver von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentationen",sidebar_label:"Plugins"},a=void 0,o={unversionedId:"source_metamod_plugins",id:"source_metamod_plugins",title:"Source Spiele mit Sourcemod/Metamod Plugins installieren",description:"Informationen, wie du Plugins auf deinen Source Gameserver von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentationen",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/source_metamod_plugins.md",sourceDirName:".",slug:"/source_metamod_plugins",permalink:"/guides/de/docs/source_metamod_plugins",draft:!1,editUrl:"https://github.com/zaphosting/docs/tree/master/docs/source_metamod_plugins.md",tags:[],version:"current",frontMatter:{id:"source_metamod_plugins",title:"Source Spiele mit Sourcemod/Metamod Plugins installieren",description:"Informationen, wie du Plugins auf deinen Source Gameserver von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentationen",sidebar_label:"Plugins"},sidebar:"gameserverSidebar",previous:{title:"Admin werden",permalink:"/guides/de/docs/source_metamod_addadmins"},next:{title:"Server Konfiguration",permalink:"/guides/de/docs/csgo_configuration"}},l={},u=[{value:"Plugin Installation",id:"plugin-installation",level:2},{value:"Plugins deaktivieren / deinstallieren",id:"plugins-deaktivieren--deinstallieren",level:2},{value:"H\xe4ufige Probleme",id:"h\xe4ufige-probleme",level:2}],d={toc:u},c="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"plugin-installation"},"Plugin Installation"),(0,r.kt)("p",null,"Im Folgenden wird erkl\xe4rt wie man Plugins installieren kann. F\xfcr das Nutzen von Plugins wird Sourcemod / Metamod vorausgesetzt. Eine Anleitung zur Installation findest du hier: ",(0,r.kt)("a",{parentName:"p",href:"/guides/de/docs/source_metamod_installation"},"SM / MM installation")),(0,r.kt)("p",null,"Um Plugins zu installieren, m\xfcssen diese dementsprechend per FTP hochgeladen werden. Dabei m\xfcssen die Dateien des Plugins in das ",(0,r.kt)("strong",{parentName:"p"},"Plugins")," Verzeichnis unter ",(0,r.kt)("strong",{parentName:"p"},"../addons/sourcemod/")," hochgeladen werden. Je nach Komplexit\xe4t des Plugins kann es sein, dass bereits Configs und \xdcbersetzungsdateien vorhanden sind. Ist dies der Fall, dann m\xfcssen diese in den ",(0,r.kt)("strong",{parentName:"p"},"configs")," und ",(0,r.kt)("strong",{parentName:"p"},"translations")," Ordner hochgeladen werden."),(0,r.kt)("h2",{id:"plugins-deaktivieren--deinstallieren"},"Plugins deaktivieren / deinstallieren"),(0,r.kt)("p",null,"Im ",(0,r.kt)("strong",{parentName:"p"},"Plugins")," Verzeichnis gibt es einen Unterordner mit dem Namen ",(0,r.kt)("strong",{parentName:"p"},"disabled"),". Dort k\xf6nnen die Plugins hineingeschoben werden, welche tempor\xe4r nicht geladen werden sollen. Hierbei ist es ausreichend die entsprechende ",(0,r.kt)("strong",{parentName:"p"},".smx")," Datei zu verschieben. "),(0,r.kt)("p",null,"Um ein Plugins permanent zu deaktivieren ist es notwendig die entsprechende Plugin Dateien wieder zu l\xf6schen. Nach einem Mapwechsel oder Neustart des Servers ist das Plugin dann deaktiviert."),(0,r.kt)("h2",{id:"h\xe4ufige-probleme"},"H\xe4ufige Probleme"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Wieso l\xe4sst sich mein installiertes Plugin nicht starten?")),(0,r.kt)("p",null,"L\xf6sungsvorschl\xe4ge:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\xdcberpr\xfcfe ob bei der Plugin Installation alle Voraussetzungen erf\xfcllt wurden. Manche Plugins ben\xf6tigen eine Zusammenarbeit mit einer Datenbank, damit sie funktional sind. In dem Fall m\xfcssen im Configsverzeichnis in der ",(0,r.kt)("strong",{parentName:"li"},"database.cfg")," weitere Einstellungen vorgenommen werden"),(0,r.kt)("li",{parentName:"ul"},"Es gibt regelm\xe4\xdfig \xc4nderungen in der Source-Engine. Daher kann es sein, dass ein Plugin, welches bereits vor einer l\xe4ngeren Zeit ver\xf6ffentlicht, aber nicht gewartet wurde nicht mehr kompatibel ist. In dem Fall gibt es nur noch die M\xf6glichkeit im Alliedmodders Forum eine inoffizielle behobene Version zu finden oder generell ein alternatives Plugin zu benutzen."),(0,r.kt)("li",{parentName:"ul"},"Treffen bei der oben genannten Optionen nicht zu, dann empfiehlt es sich einen Blick in die Live Konsole oder in den Log-Dateien zu schauen. Dort steht in der Regel die Ursache f\xfcr die Problematik.")))}m.isMDXComponent=!0}}]);