"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9025],{3905:(e,n,r)=>{r.d(n,{Zo:()=>o,kt:()=>h});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=t.createContext({}),d=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},o=function(e){var n=d(e.components);return t.createElement(l.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),c=d(r),g=i,h=c["".concat(l,".").concat(g)]||c[g]||m[g]||s;return r?t.createElement(h,a(a({ref:n},o),{},{components:r})):t.createElement(h,a({ref:n},o))}));function h(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=r.length,a=new Array(s);a[0]=g;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u[c]="string"==typeof e?e:i,a[1]=u;for(var d=2;d<s;d++)a[d]=r[d];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},9982:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var t=r(7462),i=(r(7294),r(3905));const s={id:"gameserver_resourcelimit",title:"Resourcenlimit - Gameserver freischalten",description:"Informationen, wie du deinen Gameserver freischalten kannst, wenn er durch \xdcberschreitung des Resourcenlimits gesperrt wurde - ZAP-Hosting.com Dokumentationen",sidebar_label:"Resourcenlimit"},a=void 0,u={unversionedId:"gameserver_resourcelimit",id:"gameserver_resourcelimit",title:"Resourcenlimit - Gameserver freischalten",description:"Informationen, wie du deinen Gameserver freischalten kannst, wenn er durch \xdcberschreitung des Resourcenlimits gesperrt wurde - ZAP-Hosting.com Dokumentationen",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/gameserver_resourcelimit.md",sourceDirName:".",slug:"/gameserver_resourcelimit",permalink:"/guides/de/docs/gameserver_resourcelimit",draft:!1,editUrl:"https://github.com/zaphosting/docs/tree/master/docs/gameserver_resourcelimit.md",tags:[],version:"current",frontMatter:{id:"gameserver_resourcelimit",title:"Resourcenlimit - Gameserver freischalten",description:"Informationen, wie du deinen Gameserver freischalten kannst, wenn er durch \xdcberschreitung des Resourcenlimits gesperrt wurde - ZAP-Hosting.com Dokumentationen",sidebar_label:"Resourcenlimit"},sidebar:"gameserverSidebar",previous:{title:"Cloud vs. Lifetime",permalink:"/guides/de/docs/gameserver_cloudvslifetime"},next:{title:"Spielwechsel",permalink:"/guides/de/docs/gameserver_gameswitch"}},l={},d=[{value:"Sperrung deines Gameservers",id:"sperrung-deines-gameservers",level:2},{value:"Freischaltung deines Gameservers",id:"freischaltung-deines-gameservers",level:2},{value:"Konsole",id:"konsole",level:3},{value:"Upgrade",id:"upgrade",level:3},{value:"Ticket",id:"ticket",level:3}],o={toc:d},c="wrapper";function m(e){let{components:n,...r}=e;return(0,i.kt)(c,(0,t.Z)({},o,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"sperrung-deines-gameservers"},"Sperrung deines Gameservers"),(0,i.kt)("p",null,"Oh nein, leider ist es passiert! Doch warum? Die Ursachen f\xfcr eine Sperrung k\xf6nnen vielf\xe4ltig sein. Dies gilt es zu \xfcberpr\xfcfen und schnellstm\xf6glich zu beheben. Wenn dein Gameserver gesperrt worden ist, dann sieht das ganze folgenderma\xdfen so aus: "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159170760-095b4170-6039-4e6b-9774-ab468c2d754b.png",alt:"image"})),(0,i.kt)("p",null,"Die Ursache f\xfcr die Sperrung ist eine \xdcberschreitung des Ressourcenlimits. Das bedeutet, dass der Server \xfcber einen l\xe4ngeren Zeitraum mehr Ressourcen verbraucht, als du f\xfcr deinen Dienst gebucht hast. Bei einer kurzen \xdcberschreitung ist das kein Problem. Dort stellen wir dennoch auch mehr zur Verf\xfcgung, um eine umgehende Sperrung und Probleme zu vermeiden. "),(0,i.kt)("p",null,"Sollte diese allerdings \xfcber einen l\xe4ngeren Zeitraum \xfcberschritten werden, dann wird der Server automatisch gesperrt. Durch einen Klick auf das rote Fragezeichen kann man sich den Grund mit weiteren detaillierten Informationen anschauen."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159170763-e2668971-6308-4cfe-b69e-43877252ca86.png",alt:"image"})),(0,i.kt)("p",null,"In der \xdcbersicht kannst du nachvollziehen, wie viel Ressourcen dir zur Verf\xfcgung stehen, wie viel du \xfcber einen l\xe4ngeren Zeitraum verbraucht hast und wie viel Ressourcen wir dir f\xfcr einen regul\xe4ren Gebrauch empfehlen w\xfcrden. Dies soll dir die M\xf6glichkeit geben zu erkennen, wo aktiv Handlungsbedarf besteht und um entsprechende Ma\xdfnahmen ergreifen zu k\xf6nnen. "),(0,i.kt)("h2",{id:"freischaltung-deines-gameservers"},"Freischaltung deines Gameservers"),(0,i.kt)("p",null,"F\xfcr die Behebung des Problems und dem Wiederinstandsetzen des Betriebs stehen dir zur Freischaltung deines Gameservers drei Optionen zur Auswahl.   Die Auswahloptionen ",(0,i.kt)("strong",{parentName:"p"},"Fehlerhafte Mods/Scripts per Konsole suchen & Server tempor\xe4r freischalten"),", ",(0,i.kt)("strong",{parentName:"p"},"Upgrade durchf\xfchren")," und ",(0,i.kt)("strong",{parentName:"p"},"Support-Ticket erstellen")," werden dir im folgenden genauer erkl\xe4rt. "),(0,i.kt)("h3",{id:"konsole"},"Konsole"),(0,i.kt)("p",null,"Eine pl\xf6tzliche Erh\xf6hung der Auslastung kann beispielsweise durch k\xfcrzlich vorgenommene \xc4nderungen entstehen. Das kann sowohl durch das Anpassen von bestehenden Inhalten als auch durch das Hinzuf\xfcgen von neuen Inhalten, wie zum Beispiel Plugins oder Mods passieren. Gerade durch zus\xe4tzliche Plugins/Mods entstehen oftmals Probleme. Dies kann beispielsweise durch fehlerhaften oder schlecht programmierten Code entstehen. "),(0,i.kt)("p",null,"In gewissen F\xe4llen kann so etwas zu einem Memory Leak f\xfchren. Das bedeutet, dass die Mods/Plugins Arbeitsspeicher reservieren, diesen dann aber nicht wieder ordnungsgem\xe4\xdf freigeben. Das hat die Folge, dass der Arbeitsspeicherverbrauch immer weiter steigt und zeitnah das Limit \xfcberschreitet. "),(0,i.kt)("p",null,"Wie zu Beginn erkl\xe4rt, k\xf6nnen die Ursachen hierf\xfcr vielf\xe4ltig sein. Zur Analyse des Problems sollte als Erstes ein Blick in die Server-Konsole geworfen werden. Diese sollte in der Regel hilfreiche Informationen liefern, um die m\xf6glichen Ursachen einzugrenzen. Klicke dazu auf den ",(0,i.kt)("strong",{parentName:"p"},"Konsole")," Button von ",(0,i.kt)("strong",{parentName:"p"},"Option 1"),". "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159170765-dc6a6c66-5624-4992-9fee-0e112ab20c67.png",alt:"image"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Bei diesem Vorgang wird dein Dienst wieder entsperrt, damit du dich dem Problem angehen kannst. Hierbei gilt es zu beachten, dass der Dienst bei einer erneuten langen \xdcberschreitung der Auslastung erneut gesperrt wird. Versuche das Problem daher unbedingt aktiv anzugehen und L\xf6sungen zu finden. ")),(0,i.kt)("h3",{id:"upgrade"},"Upgrade"),(0,i.kt)("p",null,"Ein Anstieg der Auslastung muss allerdings nicht immer durch Probleme verursacht werden. Je nach Spiel kann das auch durch das Wachsen des Projekts passieren. Wenn das Spielgeschehen gr\xf6\xdfer oder umfangreicher wird, dann bringt dies auch konstante Mehrauslastung mit sich. In dem Fall w\xe4re f\xfcr eine dauerhafte L\xf6sung ein kostenpflichtiges Upgrade notwendig. Anhand der Statistik kannst du nachschauen, wie sich die Auslastung in der letzten Zeit entwickelt hat. Zudem kannst du dich an unserer Empfehlung f\xfcr dein Upgrade orientieren. Klicke dazu auf den ",(0,i.kt)("strong",{parentName:"p"},"Ausf\xfchren")," Button von ",(0,i.kt)("strong",{parentName:"p"},"Option 2"),". "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159170769-d875eb76-bb07-4760-90f7-223ae7538df1.png",alt:"image"})),(0,i.kt)("h3",{id:"ticket"},"Ticket"),(0,i.kt)("p",null,"Option 1 und 2 haben dir nicht weitergeholfen oder sind nicht ganz nachvollziehbar? Keine Sorge! Melde dich alternativ gerne bei uns im Support, wenn du unsere Hilfe hierzu ben\xf6tigst. Gerne schauen wir uns das Problem mit dir genauer an, um die Ursache ausfindig zu machen und m\xf6gliche L\xf6sungen zu finden. Erstelle dazu ein Ticket, in dem du auf den ",(0,i.kt)("strong",{parentName:"p"},"Ausf\xfchren")," Button von ",(0,i.kt)("strong",{parentName:"p"},"Option 3")," klickst. "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159170772-07a1df66-7a11-4144-b179-4c54dc343022.png",alt:"image"})))}m.isMDXComponent=!0}}]);