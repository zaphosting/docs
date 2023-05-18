"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6697],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>p});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),l=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(o.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=l(t),f=i,p=u["".concat(o,".").concat(f)]||u[f]||m[f]||a;return t?r.createElement(p,s(s({ref:n},c),{},{components:t})):r.createElement(p,s({ref:n},c))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=f;var d={};for(var o in n)hasOwnProperty.call(n,o)&&(d[o]=n[o]);d.originalType=e,d[u]="string"==typeof e?e:i,s[1]=d;for(var l=2;l<a;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3189:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var r=t(7462),i=(t(7294),t(3905));const a={id:"vserver_windows_fs_22",title:"Landwirtschafts-Simulator 2022 auf Windows installieren",description:"Informationen wie du einen Landwirtschafts-Simulator Dedicated Server 2022 auf deinen Windows vServer und Dedicated Server von ZAP-Hosting installieren und einrichten kannst - ZAP-Hosting.com Dokumentationen",sidebar_label:"Landwirtschafts-Simulator 2022"},s=void 0,d={unversionedId:"vserver_windows_fs_22",id:"vserver_windows_fs_22",title:"Landwirtschafts-Simulator 2022 auf Windows installieren",description:"Informationen wie du einen Landwirtschafts-Simulator Dedicated Server 2022 auf deinen Windows vServer und Dedicated Server von ZAP-Hosting installieren und einrichten kannst - ZAP-Hosting.com Dokumentationen",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/vserver_windows_fs_22.md",sourceDirName:".",slug:"/vserver_windows_fs_22",permalink:"/guides/de/docs/vserver_windows_fs_22",draft:!1,editUrl:"https://github.com/zaphosting/docs/tree/master/docs/vserver_windows_fs_22.md",tags:[],version:"current",frontMatter:{id:"vserver_windows_fs_22",title:"Landwirtschafts-Simulator 2022 auf Windows installieren",description:"Informationen wie du einen Landwirtschafts-Simulator Dedicated Server 2022 auf deinen Windows vServer und Dedicated Server von ZAP-Hosting installieren und einrichten kannst - ZAP-Hosting.com Dokumentationen",sidebar_label:"Landwirtschafts-Simulator 2022"}},o={},l=[{value:"Basic Informationen:",id:"basic-informationen",level:2},{value:"Schritt 1 Digitale Lizenz erwerben",id:"schritt-1-digitale-lizenz-erwerben",level:2},{value:"Schritt 2 Download des Landwirtschafts-Simulator direkt auf deinen Windowserver",id:"schritt-2-download-des-landwirtschafts-simulator-direkt-auf-deinen-windowserver",level:2},{value:"Schritt 3 Aktivierung des Games und Konfiguration des Dedicated Servers",id:"schritt-3-aktivierung-des-games-und-konfiguration-des-dedicated-servers",level:2},{value:"Schritt 4 Landwirtschafts-Simulator 2022 Dedicated Server starten",id:"schritt-4-landwirtschafts-simulator-2022-dedicated-server-starten",level:2},{value:"Schritt 5 Ports freischalten in der Firewall",id:"schritt-5-ports-freischalten-in-der-firewall",level:2}],c={toc:l},u="wrapper";function m(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installation-eines-dedicated-servers-f\xfcr-den-landwirtschafts-simulator-2022"},"Installation eines Dedicated Servers f\xfcr den Landwirtschafts-Simulator 2022"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u2139\ufe0f Diese Anleitung gilt auch f\xfcr einen Dedicated Server von ZAP-Hosting mit Windowsserver 2016/2019. Wie Windows auf einem Dedicated Server installiert werden kann, erkl\xe4ren wir ",(0,i.kt)("a",{parentName:"p",href:"https://zap-hosting.com/guides/docs/de/dedicated_windows/"},"hier"),".")),(0,i.kt)("h2",{id:"basic-informationen"},"Basic Informationen:"),(0,i.kt)("p",null,"Es wird ein Server, basierend auf Windowsserver 2016/2019 mit mindestens 4x 2,4 GHz CPU (AMD/Intel) sowie mindestens 2GB RAM (DDR3/4) und 6GB freien Speicher (SSD oder besser, bevorzugt) ben\xf6tigt. Der Server muss auf der 64 Bit Architektur laufen.\nDes Weiteren wird eine eigene GameLizenz ben\xf6tigt (keine Steam Version), sowie eine \xf6ffentliche IPv4 Adresse. Eine GPU oder eine Soundkarte sind f\xfcr den Dedicated Server nicht notwendig.\nJe nachdem, wie stark der Dedicated Server gemodded wird, mit Mods oder mit DLCs erweitert wird, sind ggf. mehr Ressourcen n\xf6tig. "),(0,i.kt)("h2",{id:"schritt-1-digitale-lizenz-erwerben"},"Schritt 1 Digitale Lizenz erwerben"),(0,i.kt)("p",null,"Es wird eine digitale Version des Landwirtschafts-Simulator 2022 ben\xf6tigt, es darf keine Steam Version sein.\nDie digitale Version kann auf der ",(0,i.kt)("a",{parentName:"p",href:"https://www.farming-simulator.com/buy-now.php?lang=de&country=de&platform=pcdigital"},"Landwirtschafts-Simulator Webseite")," erworben werden.\nNachdem die digitale Version erworben wurde, kann der Landwirtschafts-Simulator online gedownloadet werden, folge dazu dem ",(0,i.kt)("a",{parentName:"p",href:"https://eshop.giants-software.com/downloads.php"},"Link")," aus der Mail, die du von Giants erhalten hast."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Wichtig: In der Mail befindet sich der GameKey der zum Download als auch zur sp\xe4teren Aktivierung der Installation ben\xf6tigt wird. ")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173431-deafbefa-f186-4acc-9605-1d980142c5c0.png",alt:"image"})),(0,i.kt)("h2",{id:"schritt-2-download-des-landwirtschafts-simulator-direkt-auf-deinen-windowserver"},"Schritt 2 Download des Landwirtschafts-Simulator direkt auf deinen Windowserver"),(0,i.kt)("p",null,"Verbinde dich via ",(0,i.kt)("a",{parentName:"p",href:"https://zap-hosting.com/guides/docs/de/vserver_windows_userdp/"},"RDP")," zu deinem Windowsserver. Nachdem du verbunden bist, \xf6ffne den Browser und rufe erneut den ",(0,i.kt)("a",{parentName:"p",href:"https://eshop.giants-software.com/downloads.php"},"Link")," aus der Mail auf. Gebe dort dann deinen GameKey ein und w\xe4hle dann den Download f\xfcr Windows8/10. "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173433-c3c90cb4-0c5c-4e60-a61c-ce150e5b99f2.png",alt:"image"})),(0,i.kt)("p",null,"Anschlie\xdfend wird die Datei heruntergeladen und sollte sich dann im Download Verzeichnis befinden. (Das Downloadverzeichnis kann abweichend sein)"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173436-409b2130-0165-424f-bbff-996f7b149730.png",alt:"image"})),(0,i.kt)("p",null,"Mit einem Doppelklick wird die Datei ge\xf6ffnet und es kann die Setup.exe ausgef\xfchrt werden.\nAnschlie\xdfend liest man die TOS und best\xe4tigt sie. Danach kann die Installation als Standard oder Benutzerdefiniert erfolgen, in der Regel reicht Standard aus.\nZum Abschluss klickt man auf installieren und der Landwirtschafts-Simulator 2022 wird nun installiert, dies kann einige Minuten dauern. "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173444-037c1c40-e2a1-4551-9aaf-bc2aa402c9d0.png",alt:"image"})),(0,i.kt)("p",null,'Sobald der Installationsvorgang beendet ist, erscheint folgende Meldung, welche mit "Fertigstellen" best\xe4tigt werden kann. '),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173446-faee231b-8635-48f3-9caa-7c78e617702a.png",alt:"image"})),(0,i.kt)("p",null,"Die Basis-Installation ist nun abgeschlossen. "),(0,i.kt)("h2",{id:"schritt-3-aktivierung-des-games-und-konfiguration-des-dedicated-servers"},"Schritt 3 Aktivierung des Games und Konfiguration des Dedicated Servers"),(0,i.kt)("p",null,"Nun muss der Landwirtschafts-Simulator  gestartet werden. Auf dem Desktop sollte eine Verkn\xfcpfung liegen, falls nicht, kann er auch \xfcber das Windows Men\xfc gestartet werden.\nFehler bez\xfcglich einer fehlenden GPU oder \xe4hnliches k\xf6nnen ignoriert bzw. mit Nein/Abbrechen geschlossen werden. Der Landwirtschafts-Simulator muss nur gestartet werden, um den Key eingeben zu k\xf6nnen. "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173458-691716a6-6329-45d2-a782-e191388a7041.png",alt:"image"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173461-3b03f54d-5b97-40e3-be2a-e0ca09da41bf.png",alt:"image"})),(0,i.kt)("p",null,"Nun muss in der Config des Dedicated Servers ein Login Name und Passwort gesetzt bzw. ge\xe4ndert/ausgelesen werden, damit ein Login in das Webinterface des Dedicated Servers m\xf6glich ist.\nDie Config ist in der Standardinstallation unter\n",(0,i.kt)("inlineCode",{parentName:"p"},"C:\\Program Files (x86)\\Landwirtschafts-Simulator 2022")," zu finden unter dem Namen ",(0,i.kt)("inlineCode",{parentName:"p"},'"dedicatedServer.xml"'),".\nDie Logindaten k\xf6nnen frei angepasst werden. "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173467-2341681d-a40d-44c1-bfdb-8523a716ff41.png",alt:"image"})),(0,i.kt)("h2",{id:"schritt-4-landwirtschafts-simulator-2022-dedicated-server-starten"},"Schritt 4 Landwirtschafts-Simulator 2022 Dedicated Server starten"),(0,i.kt)("p",null,"Um den Dedicated Server zu starten, muss im gleichen Verzeichnis, wo auch die ",(0,i.kt)("inlineCode",{parentName:"p"},'"dedicatedServer.xml"')," liegt, die ",(0,i.kt)("inlineCode",{parentName:"p"},'"dedicatedServer.exe"')," ausgef\xfchrt werden."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173468-5f9473f8-734d-4236-a079-2c4a83e87caf.png",alt:"image"})),(0,i.kt)("p",null,"Anschlie\xdfend kann das Webinterface via ",(0,i.kt)("inlineCode",{parentName:"p"},"https://SERVER-IP:8080")," ge\xf6ffnet werden. "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173472-525e9125-2011-4550-bc7c-a95fb20f6667.png",alt:"image"})),(0,i.kt)("p",null,"Der Login ist mit den zuvor gesetzten/ausgelesenen Login Daten aus der ",(0,i.kt)("inlineCode",{parentName:"p"},'"dedicatedServer.xml"')," m\xf6glich.\nDie weitere Konfiguration ist im Webinterface selbsterkl\xe4rend und kann mit wenigen Klicks vorgenommen werden, ganz nach den pers\xf6nlichen W\xfcnschen. "),(0,i.kt)("h2",{id:"schritt-5-ports-freischalten-in-der-firewall"},"Schritt 5 Ports freischalten in der Firewall"),(0,i.kt)("p",null,"Der Server soll nat\xfcrlich \xf6ffentlich erreichbar sein um mit Freunden spielen zu k\xf6nnen. Dazu m\xfcssen die Ports des Servers in der Windows Firewall freigeschaltet werden. Es m\xfcssen die Ports 10823 und 8080 freigegeben werden f\xfcr das Protokoll TCP. 10823 ist dabei der Gameserverport und 8080 ist der Webport f\xfcr das Webinterface, der Webport muss nur bei Bedarf freigegeben werden, eine Verwaltung kann auch weiterhin nur lokal auf dem Windows Server erfolgen via RDP.\nWie Ports bei Windows freigeschaltet werden k\xf6nnen, ",(0,i.kt)("a",{parentName:"p",href:"https://zap-hosting.com/guides/docs/de/vserver_windows_port/"},"erkl\xe4ren wir in diesem Guide"),". "),(0,i.kt)("p",null,"Nach der Port Freigabe ist der Server \xf6ffentlich erreichbar, sofern er gestartet wurde."))}m.isMDXComponent=!0}}]);