"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[893],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),o=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=o(e.components);return r.createElement(d.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=o(n),g=a,p=m["".concat(d,".").concat(g)]||m[g]||c[g]||i;return n?r.createElement(p,s(s({ref:t},u),{},{components:n})):r.createElement(p,s({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=g;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[m]="string"==typeof e?e:a,s[1]=l;for(var o=2;o<i;o++)s[o]=n[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8149:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=n(7462),a=(n(7294),n(3905));const i={id:"vserver_network_analysis_winmtr",title:"Netzwerkanalyse mit MTR/WinMTR",description:"Informationen, wie du eine Netzwerkanalyse mit MTR/WinMTR durchf\xfchren kannst, um Netzwerkprobleme zu identifizieren - ZAP-Hosting.com Dokumentationen",sidebar_label:"Netzwerkanalyse MTR/WinMTR"},s=void 0,l={unversionedId:"vserver_network_analysis_winmtr",id:"vserver_network_analysis_winmtr",title:"Netzwerkanalyse mit MTR/WinMTR",description:"Informationen, wie du eine Netzwerkanalyse mit MTR/WinMTR durchf\xfchren kannst, um Netzwerkprobleme zu identifizieren - ZAP-Hosting.com Dokumentationen",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/vserver_network_analysis_winmtr.md",sourceDirName:".",slug:"/vserver_network_analysis_winmtr",permalink:"/guides/de/docs/vserver_network_analysis_winmtr",draft:!1,editUrl:"https://github.com/zaphosting/docs/tree/master/docs/vserver_network_analysis_winmtr.md",tags:[],version:"current",frontMatter:{id:"vserver_network_analysis_winmtr",title:"Netzwerkanalyse mit MTR/WinMTR",description:"Informationen, wie du eine Netzwerkanalyse mit MTR/WinMTR durchf\xfchren kannst, um Netzwerkprobleme zu identifizieren - ZAP-Hosting.com Dokumentationen",sidebar_label:"Netzwerkanalyse MTR/WinMTR"}},d={},o=[{value:"Was ist MTR/WinMTR?",id:"was-ist-mtrwinmtr",level:2},{value:"Wann sollte die Diagnose durchgef\xfchrt werden?",id:"wann-sollte-die-diagnose-durchgef\xfchrt-werden",level:2},{value:"Einrichtung von MTR / WinMTR",id:"einrichtung-von-mtr--winmtr",level:2},{value:"Windows",id:"windows",level:3},{value:"Linux",id:"linux",level:3},{value:"Auswertung auslesen",id:"auswertung-auslesen",level:2}],u={toc:o},m="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"was-ist-mtrwinmtr"},"Was ist MTR/WinMTR?"),(0,a.kt)("p",null,"WinMTR ist ein Netzwerk-Diagnose-Programm, welches die Funktion von Ping und Traceroute vereint. Entwickelt wurde das Programm von Matt Kimball auf der Grundlage des bekannten MTR-Programm f\xfcr Linux. Es bietet die M\xf6glichkeit detaillierte Informationen \xfcber m\xf6gliche Netzwerkprobleme zu erhalten. Au\xdferdem misst das Programm die Zeitspanne zwischen dem Aussenden eines Signals und dem Empfangen des entsprechenden Antwortpaketes. In dem folgenden Screenshot wird die Hinroute zu ZAP-Hosting.com als Beispiel gezeigt:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159171609-82df7202-a2a2-4d8a-8e16-168f5b90366f.png",alt:"image"})),(0,a.kt)("p",null,"Hierbei werden alles Nodes aufgelistet, welche benutzt werden, um ans Ziel zu kommen. Bei m\xf6glichen Problemen kann man so erkennen, ob es Probleme seitens des Servers oder diese bereits bei einem selbst auftreten. Der Startpunkt f\xe4ngt mit dem ersten Eintrag an und das Ende (ZAP - 104.xx.xx) als letzter Eintrag."),(0,a.kt)("h2",{id:"wann-sollte-die-diagnose-durchgef\xfchrt-werden"},"Wann sollte die Diagnose durchgef\xfchrt werden?"),(0,a.kt)("p",null,"Der Netzwerk-Diagnose Test sollte durchgef\xfchrt werden, wenn die Problematik gerade aktiv besteht. Dabei ist es wichtig, dass die Person die davon betroffen ist den Test durchf\xfchrt. Um die Netzwerk-Diagnose so gut wie m\xf6glich analysieren zu k\xf6nnen sollte eine Auswertung von der Hinroute und R\xfcckroute gemacht werden, falls m\xf6glich. Je nach Betriebssystem wird entweder WinMTR (Windows) oder MTR (Linux) benutzt. "),(0,a.kt)("h2",{id:"einrichtung-von-mtr--winmtr"},"Einrichtung von MTR / WinMTR"),(0,a.kt)("h3",{id:"windows"},"Windows"),(0,a.kt)("p",null,"Die Windows Version f\xfcr WinMTR kann \xfcber die ",(0,a.kt)("a",{parentName:"p",href:"https://zap-hosting.com/winmtr.zip"},"ZAP-Hosting")," Seite heruntergeladen werden. Nach der Installation muss das Programm gestartet werden und der Hostname oder die IP-Adresse des betroffenen Falls eingetragen werden:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159171614-5ffff921-5d69-4786-8c8f-1a1f63413a97.png",alt:"image"})),(0,a.kt)("h3",{id:"linux"},"Linux"),(0,a.kt)("p",null,"Um MTR auf Linux zu Installieren muss eine Verbindung per SSH zum Server aufgebaut werden. Falls du nicht genau wei\xdft wie das funktioniert, dann kannst du dir dazu folgende Anleitung anschauen: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.zap-hosting.com/docs/de/vserver_linux_ssh/"},"Erstzugriff (SSH)")),(0,a.kt)("p",null,"Nun kann das Paket mit dem folgenden Befehl installiert werden:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"apt-get install mtr\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159171623-715da5a6-bc37-4449-ad26-d2bdf9b4288e.png",alt:"image"})),(0,a.kt)("p",null,"Im Anschluss l\xe4sst sich die Auswertung mit dem Befehl ",(0,a.kt)("strong",{parentName:"p"},"mtr IP-Adresse")," starten. Mit STRG+C kann der Test je nach Wunsch jederzeit gestoppt werden."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159171625-4c77447f-a9df-466c-9117-8af6252eeba3.png",alt:"image"})),(0,a.kt)("h2",{id:"auswertung-auslesen"},"Auswertung auslesen"),(0,a.kt)("p",null,"Das Programm liefert mehrere Informationen. Diese muss man genau \xfcberpr\xfcfen um das Problem auch richtig zuordnen zu k\xf6nnen."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159171629-26be5afd-7493-4a48-bdb6-2fa5facbfa72.png",alt:"image"})),(0,a.kt)("p",null,"W\xe4hrend der Auswertung einer Route kann hin und wieder mal die Meldung ",(0,a.kt)("strong",{parentName:"p"},"Keine Antwort vom Host")," erscheinen, wo 100% Paketverlust gemeldet werden. Das ist oftmals aber nicht direkt die Ursache. In solch einem Fall kann es sein, dass lediglich die Pakete durch die Firewall gefiltert werden und daher keine R\xfcckmeldung kommt oder generell nicht erreichbar ist. Es wird dann die n\xe4chst m\xf6gliche Option f\xfcr die Route gew\xe4hlt. Erst wenn der Paketverlust an einer Stelle beginnt und sich auch \xfcber weitere zieht ist die Rede von einem aktiven Paketverlust. "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Wert"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Bedeutung"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Host"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Name des Netzwerk Nodes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Loss %"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Prozentualer Anteil an verlorenen Paketen")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Sent"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Die Anzahl an Paketen die zum Node geschickt wurden")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Recv"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Die Anzahl an Paketen die der Node erhalten hat")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Best"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Bester Ping des Nodes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Avrg"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Durchschnittlicher Ping des Nodes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Wrst"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Der schlechteste Ping des Nodes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Last"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Letzter Ping Wert")))))}c.isMDXComponent=!0}}]);