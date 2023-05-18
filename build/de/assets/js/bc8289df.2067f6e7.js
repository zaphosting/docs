"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3977],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(t),m=i,k=p["".concat(s,".").concat(m)]||p[m]||c[m]||a;return t?r.createElement(k,l(l({ref:n},u),{},{components:t})):r.createElement(k,l({ref:n},u))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var d=2;d<a;d++)l[d]=t[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8528:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var r=t(7462),i=(t(7294),t(3905));const a={id:"dedicated_centos",title:"CentOS installieren",description:"Informationen zu der Installation des CentOS Betriebssystem auf deinem Dedicated Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation",sidebar_label:"CentOS installieren"},l=void 0,o={unversionedId:"dedicated_centos",id:"dedicated_centos",title:"CentOS installieren",description:"Informationen zu der Installation des CentOS Betriebssystem auf deinem Dedicated Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/dedicated_centos.md",sourceDirName:".",slug:"/dedicated_centos",permalink:"/guides/de/docs/dedicated_centos",draft:!1,editUrl:"https://github.com/zaphosting/docs/tree/master/docs/dedicated_centos.md",tags:[],version:"current",frontMatter:{id:"dedicated_centos",title:"CentOS installieren",description:"Informationen zu der Installation des CentOS Betriebssystem auf deinem Dedicated Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation",sidebar_label:"CentOS installieren"},sidebar:"dedicatedserverSidebar",previous:{title:"FreeBSD installieren",permalink:"/guides/de/docs/dedicated_freebsd"}},s={},d=[{value:"Vorbereitungen",id:"vorbereitungen",level:2},{value:"Das Setup",id:"das-setup",level:2},{value:"Netzwerk",id:"netzwerk",level:2}],u={toc:d},p="wrapper";function c(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"In diesem Beispiel wird die Installation von CentOS 8.3 durchgef\xfchrt")),(0,i.kt)("h2",{id:"vorbereitungen"},"Vorbereitungen"),(0,i.kt)("p",null,"W\xe4hle in deinem ZAP-Interface die gew\xfcnschte ISO von CentOS aus und lasse den Server mit der ISO booten, bis dieser im Setup ist."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Die Navigation im Setup-Prozess erfolgt ganz bequem mit deiner Maus")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"das-setup"},"Das Setup"),(0,i.kt)("p",null,"Wenn die ISO erfolgreich geladen wurde, ist der Server erfolgreich im Setup."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://screensaver01.zap-hosting.com/index.php/s/YFQt6Jmw5wi4QZZ/preview",alt:null})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Keyboard\nW\xe4hle hier dein gew\xfcnschtes Tastaturlayout")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Time & Date\nW\xe4hle deine gew\xfcnschte Zeitzone")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Root Password\nW\xe4hle das gew\xfcnschte Passwort, f\xfcr den Root-Account")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Installation Destination\nW\xe4hle die SSD auf welche CentOS installiert werden soll")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Network & Hostname\nAufgrund einer inkompatibilit\xe4t im Kernel muss zuerst ein Update eingespielt werden damit dein Dedicated Server eine Netzwerkverbindung aufbauen kann.\nDie genauen Schritte werden unter Netzwerk erkl\xe4rt."))),(0,i.kt)("p",null,'Wenn du alles gew\xfcnschte konfiguriert hast, klicke auf "Begin Installation"'),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://screensaver01.zap-hosting.com/index.php/s/iqF8KzziQix3jyd/preview",alt:null})),(0,i.kt)("p",null,'Wenn die Installation abgeschlossen ist, entferne die ISO-Datei von deinem Server und klicke "Reboot System"'),(0,i.kt)("h2",{id:"netzwerk"},"Netzwerk"),(0,i.kt)("p",null,"In diesem Schritt muss noch die Netzwerkschnittstelle konfiguriert werden, hierzu ist ein Update notwendig.\nLade unsere ISO-Datei in deinen Server, entweder \xfcber deine Remote Console oder die iLO selbst."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://screensaver01.zap-hosting.com/index.php/s/skiKLacFGZnMwr9/preview",alt:null})),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"http://185.223.30.65/dedicatedisos/centos-network-554flb.iso")),(0,i.kt)("p",null,"Nachdem die ISO-Datei erfolgreich eingebunden ist, m\xfcssen wir diese noch mounten um darauf zugreifen zu k\xf6nnen."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"mount /dev/sr0 /mnt")),(0,i.kt)("p",null,"Die ISO-Datei ist nun nach /mnt gemountet."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"rpm -i /mnt/be2net.rpm")),(0,i.kt)("p",null,"Wir m\xfcssen nun das Update Paket laden."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"modprobe be2net")),(0,i.kt)("p",null,"Nun das Paket ausf\xfchren und installieren. Das kann einen kurzen Augenblick dauern.\nDanach kann mit ",(0,i.kt)("inlineCode",{parentName:"p"},"ip a s")," gepr\xfcft werden ob unser Netzwerkadapter ",(0,i.kt)("inlineCode",{parentName:"p"},"eno1")," nun angezeigt wird, falls ja, m\xfcssen wir nun das System neustarten."),(0,i.kt)("p",null,"Nach einem Neustart, m\xfcssen wir nun noch den Netzwerkadapter selbst konfigurieren."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"nano /etc/sysconfig/network-scripts/ifcfg-eno1")),(0,i.kt)("p",null,"in dieser Datei m\xfcssen wir folgenden Inhalt eintragen:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"DEVICE=eno1\nBOOTPROTO=dhcp\nONBOOT=yes\n")),(0,i.kt)("p",null,"Mit ",(0,i.kt)("inlineCode",{parentName:"p"},"STRG+X")," und ",(0,i.kt)("inlineCode",{parentName:"p"},"Y")," velassen wir nano wieder und speichern die \xc4nderungen."),(0,i.kt)("p",null,"Als letztes m\xfcssen wir noch den Netzwerkadapter starten, dies kann mit ",(0,i.kt)("inlineCode",{parentName:"p"},"ifup eno1")," erledigt werden."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Dein Dedicated Server hat nun eine Internetverbindung")))}c.isMDXComponent=!0}}]);