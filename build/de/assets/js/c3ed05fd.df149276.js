"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1391],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>h});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function d(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=t.createContext({}),s=function(e){var n=t.useContext(o),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},u=function(e){var n=s(e.components);return t.createElement(o.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),c=s(r),p=i,h=c["".concat(o,".").concat(p)]||c[p]||m[p]||a;return r?t.createElement(h,l(l({ref:n},u),{},{components:r})):t.createElement(h,l({ref:n},u))}));function h(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=p;var d={};for(var o in n)hasOwnProperty.call(n,o)&&(d[o]=n[o]);d.originalType=e,d[c]="string"==typeof e?e:i,l[1]=d;for(var s=2;s<a;s++)l[s]=r[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7118:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>d,toc:()=>s});var t=r(7462),i=(r(7294),r(3905));const a={id:"minecraft_worlds",title:"Server Welten verwalten",description:"Informationen, wie du mehrere Welten auf deinem Minecraft-Server von ZAP-Hosting verwalten kannst - ZAP-Hosting.com Dokumentationen",sidebar_label:"Welten Verwalten"},l=void 0,d={unversionedId:"minecraft_worlds",id:"minecraft_worlds",title:"Server Welten verwalten",description:"Informationen, wie du mehrere Welten auf deinem Minecraft-Server von ZAP-Hosting verwalten kannst - ZAP-Hosting.com Dokumentationen",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/minecraft_worlds.md",sourceDirName:".",slug:"/minecraft_worlds",permalink:"/guides/de/docs/minecraft_worlds",draft:!1,editUrl:"https://github.com/zaphosting/docs/tree/master/docs/minecraft_worlds.md",tags:[],version:"current",frontMatter:{id:"minecraft_worlds",title:"Server Welten verwalten",description:"Informationen, wie du mehrere Welten auf deinem Minecraft-Server von ZAP-Hosting verwalten kannst - ZAP-Hosting.com Dokumentationen",sidebar_label:"Welten Verwalten"},sidebar:"gameserverSidebar",previous:{title:"Eigene Welt hinzuf\xfcgen",permalink:"/guides/de/docs/minecraft_add_own_world"},next:{title:"Behavior/Resource Packs installieren",permalink:"/guides/de/docs/minecraftbedrock_behaviorresourcepacks"}},o={},s=[{value:"Verbindung aufbauen",id:"verbindung-aufbauen",level:2},{value:"Spigot/PaperMC/Bukkit Besonderheiten",id:"spigotpapermcbukkit-besonderheiten",level:2},{value:"Welt neu erstellen",id:"welt-neu-erstellen",level:2},{value:"Welt ersetzen",id:"welt-ersetzen",level:2},{value:"Welt sichern",id:"welt-sichern",level:2}],u={toc:s},c="wrapper";function m(e){let{components:n,...r}=e;return(0,i.kt)(c,(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Hier gelangst du zu unseren Minecraft Servern: ",(0,i.kt)("a",{parentName:"p",href:"https://zap-hosting.com/de/minecraft-server-mieten/"},"Minecraft Server mieten")),(0,i.kt)("h2",{id:"verbindung-aufbauen"},"Verbindung aufbauen"),(0,i.kt)("p",null,'Deine Welt kannst du \xfcber ein Programm wie FileZilla Client oder WinSCP verwalten. In unserem Beispiel benutzen wir FileZilla.\nStelle mit dem Programm deiner Wahl einfach eine Verbindung her, die Daten daf\xfcr findest du links im Dashboard unter "FTP-browser".\nSobald du angemeldet bist sollte es so aussehen:'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/26007280/189978884-df871f60-74f5-4413-9b12-b65c2135941e.png",alt:"image"})),(0,i.kt)("p",null,'Der Ordner "world" ist der Standart Ordner. Der Name von diesem wird in der server.properties Datei festgelegt.\nDiese Datei liegt da wo auch der "world" Ordner liegt. Der Wert kann durch das bearbeiten von der Zeile "level-name" ge\xe4ndert werden.\nWird ein Name eingetragen der so nicht als Ordner existiert wird eine neue Welt generiert.'),(0,i.kt)("h2",{id:"spigotpapermcbukkit-besonderheiten"},"Spigot/PaperMC/Bukkit Besonderheiten"),(0,i.kt)("p",null,'Bei Spigot, PaperMC & Bukkit gibt es eine Besonderheit. Anders als bei Vanilla Minecraft haben die beiden Dimensionen "Nether" und "The End" ihren eigenen Ordner.\nWenn du also deine Welt Komplett neu Erstellen m\xf6chtest, musst du die beiden Dimensions Ordner auch noch mit entfernen. Im weiteren kannst du "WeltName" immer mit dem Namen deiner Welt austauschen. Diese lauten:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"WeltName_nether\n")),(0,i.kt)("p",null,"und"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"WeltName_the_end\n")),(0,i.kt)("p",null,"Sollten beim Importieren von einer eigenen Welt Fehler im Nether oder End auftauchen, kannst du diese Manuell in ihre Richtigen Ordner schieben.\nL\xf6sche davor den Inhalt von WeltName_nether\\ und WeltName_the_end\\"),(0,i.kt)("p",null,"Verschiebe nun alle Dateien aus diesen Ordnern in die neuen Ordner."),(0,i.kt)("p",null,"Nether:"),(0,i.kt)("p",null,"WeltName\\Dim-1\\ -> WeltName_nether\\Dim-1\\"),(0,i.kt)("p",null,"The End:"),(0,i.kt)("p",null,"WeltName\\Dim1\\  -> WeltName_the_end\\Dim1\\"),(0,i.kt)("p",null,"Danach sollten diese dann auch korrekt geladen werden."),(0,i.kt)("h2",{id:"welt-neu-erstellen"},"Welt neu erstellen"),(0,i.kt)("p",null,'Fahre deinen Server runter, und verbinde dich per FTP.\nL\xf6sche nun einfach den Welt Ordner oder bennene ihn um.\nM\xf6chtest du gleichzeitig noch Einstellungen wie den Seed einstellen, kannst du diese in der "server.properties" durchf\xfchren. Diese werden nach dem Starten angewendet.\nStarte nun deinen Server. Du solltest nun eine Frische Welt haben.'),(0,i.kt)("h2",{id:"welt-ersetzen"},"Welt ersetzen"),(0,i.kt)("p",null,"Fahre deinen Server runter, und verbinde dich per FTP.\nL\xf6sche nun einfach den Alten Welt Ordner oder bennene ihn um.\nLade jetzt einfach deine vorhandene Welt hoch, \xf6ffne die server.properties und gebe dort den Namen der Welt ein.\nStarte nun deinen Server. Du solltest nun deine Welt sehen."),(0,i.kt)("h2",{id:"welt-sichern"},"Welt sichern"),(0,i.kt)("p",null,"Fahre deinen Server runter, und verbinde dich per FTP.\nDas Sichern ist ganz einfach, lade einfach deinen Welten Ordner herunter.\nIn deinem Welt Ordner ist dein ganzes Inventar gespeichert, plus nat\xfcrlich alles was du gebaut hast."))}m.isMDXComponent=!0}}]);