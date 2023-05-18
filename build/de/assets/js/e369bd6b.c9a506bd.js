"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9127],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>f});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=i.createContext({}),u=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},o=function(e){var t=u(e.components);return i.createElement(d.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,d=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(d,".").concat(m)]||p[m]||c[m]||s;return n?i.createElement(f,a(a({ref:t},o),{},{components:n})):i.createElement(f,a({ref:t},o))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var u=2;u<s;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9441:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var i=n(7462),r=(n(7294),n(3905));const s={id:"vserver_linux_jitsi",title:"Jitsi Meet auf Server installieren",description:"Informationen, wie du die Videokonferenzsoftware Jitsi Meet auf deinen vServer von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentationen",sidebar_label:"Jitsi Meet"},a=void 0,l={unversionedId:"vserver_linux_jitsi",id:"vserver_linux_jitsi",title:"Jitsi Meet auf Server installieren",description:"Informationen, wie du die Videokonferenzsoftware Jitsi Meet auf deinen vServer von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentationen",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/vserver_linux_jitsi.md",sourceDirName:".",slug:"/vserver_linux_jitsi",permalink:"/guides/de/docs/vserver_linux_jitsi",draft:!1,editUrl:"https://github.com/zaphosting/docs/tree/master/docs/vserver_linux_jitsi.md",tags:[],version:"current",frontMatter:{id:"vserver_linux_jitsi",title:"Jitsi Meet auf Server installieren",description:"Informationen, wie du die Videokonferenzsoftware Jitsi Meet auf deinen vServer von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentationen",sidebar_label:"Jitsi Meet"}},d={},u=[{value:"Was ist Jitsi Meet?",id:"was-ist-jitsi-meet",level:2},{value:"Jitsi Meet auf einem Debian Server installieren",id:"jitsi-meet-auf-einem-debian-server-installieren",level:2},{value:"Vorbereitungen",id:"vorbereitungen",level:3},{value:"Installation von Jitsi Meet",id:"installation-von-jitsi-meet",level:3}],o={toc:u},p="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,i.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"was-ist-jitsi-meet"},"Was ist Jitsi Meet?"),(0,r.kt)("p",null,"Jitsi Meet ist eine Open Source Videokonferenzsoftware mit der ihr eigene Videokonferenzen auf eurem Server einrichten k\xf6nnt. Ein gro\xdfer Vorteil von Jitsi Meet ist die einfache Handhabung: Es wird nur ein Browser ben\xf6tigt (bei Verwendung von Handys die Jitsi App) und es ist keine Anmeldung bei fremden Diensten m\xf6glich. Jede Videokonferenz erh\xe4lt eine eigene URL, mit der der Videokonferenz beigetreten werden kann. Jitsi Meet eigent sich perfekt, um Videokonferenzen auch mit technisch wenig versierten Menschen durchzuf\xfchren.\nAchtung: Ohne weitere Einstellungen hat jeder, der den Jitsi-Meet-Server aufruft, die M\xf6glichkeit, eigene Videokonferenzen auf dem Server zu starten."),(0,r.kt)("h2",{id:"jitsi-meet-auf-einem-debian-server-installieren"},"Jitsi Meet auf einem Debian Server installieren"),(0,r.kt)("p",null,"Im Folgenden zeigen wir, wie ihr einen Jitsi Meet Server auf einem Debian Server installiert. Grunds\xe4tzlich funktioniert Jitsi Meet auch auf anderen Linux-Servern, z. B. mit Ubuntu, und die Installation ist sehr \xe4hnlich."),(0,r.kt)("h3",{id:"vorbereitungen"},"Vorbereitungen"),(0,r.kt)("p",null,'Um Jitsi Meet vern\xfcnftig nutzen zu k\xf6nnen, solltet ihr eine eigene Domain verwenden, \xfcber die ihr den Jitsi-Server aufrufen k\xf6nnt. Es ist sinnvoll eine eigene Subdomain f\xfcr den Jitsi Meet-Server zu erstellen. Als Beispiel verwenden wir die Domain meet.zap-testdomain.de.\nBei Domains von ZAP-Hosting erstellt ihr daf\xfcr unter DNS-Verwaltung einen neuen Eintrag, in dem ihr im Feld "Name" den Namen der Subdomain angebt, und im Feld Wert die IP-Adresse eures Server. In unserem Beispiel wird unter Name "meet" angegeben und unter Wert die IP-Adresse des ZAP-Testservers auf den wir Jitsi Meet installieren werden: 185.239.239.49 (trage die IP deines Server ein, nicht diese Beispiel-IP)'),(0,r.kt)("p",null,"Eine eigene Domain ist nicht zwingend notwendig, um Jitsi Meet zu verwenden. Ihr k\xf6nnt euch \xfcber die IP-Adresse auf einen Jitsi Meet-Server verbinden. F\xfcr das SSL-Zertifikat wird jedoch eine Domain ben\xf6tigt. Ohne Domain gibt der Browser dann eine Sicherheitswarnung aus."),(0,r.kt)("p",null,'Ist die Subdomain eingestellt (es kann bis zu 24h dauern, bis \xc4nderungen aktiv werden), k\xf6nnt ihr euren Server f\xfcr die Installation vorbereiten.\nVerbindet euch \xfcber Putty oder WinSCP mit eurem Server.\nBevor ihr fortfahrt stellt sicher, dass der Server geupdated ist. Ggf. muss jeder Befehl zus\xe4tzlich mit Superuser-Rechten gestartet werden. F\xfcgt vor dem Befehl dann "sudo" hinzu (z. B. "sudo apt-get update")'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$   apt-get update\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$   apt-get upgrade\n")),(0,r.kt)("p",null,"Wenn keine Firewall auf dem Server installiert ist, k\xf6nnt ihr eine Firewall, z. B. UFW installieren:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$   apt install ufw\n")),(0,r.kt)("p",null,"Nehmt folgende Einstellungen an der Firewall vor:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$   ufw allow OpenSSH\n$   ufw allow 80/tcp\n$   ufw allow 443/tcp\n$   ufw allow 4443/tcp\n$   ufw allow 10000/udp\n")),(0,r.kt)("p",null,"Aktiviert die Firewall:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$   ufw enable\n")),(0,r.kt)("p",null,"\xdcberpr\xfcft den Status:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$   ufw status\n")),(0,r.kt)("h3",{id:"installation-von-jitsi-meet"},"Installation von Jitsi Meet"),(0,r.kt)("p",null,"Um Jitsi Meet zu installieren, wird als erstes das gnupg-Paket ben\xf6tigt:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$   apt install gnupg\n")),(0,r.kt)("p",null,"Nach der Paketinstallation wird der Jitsi-GPG-Schl\xfcssel heruntergeladen sowie der GPG-Schl\xfcssel hinzugef\xfcgt:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$   wget https://download.jitsi.org/jitsi-key.gpg.key\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$   apt-key add jitsi-key.gpg.key\n")),(0,r.kt)("p",null,"Um Jitsi Meet installieren zu k\xf6nnen muss noch das Jitsi-Repository hinzugef\xfcgt werden:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$   nano /etc/apt/sources.list.d/jitsi-stable.list\n")),(0,r.kt)("p",null,"Im Editor wird folgende Zeile hinzugef\xfcgt. Danach kann die \xc4nderung gespeichert und der Editor wieder geschlossen werden:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$   deb https://download.jitsi.org stable/\n")),(0,r.kt)("p",null,"Jetzt kann Jitsi Meet installiert werden. Es wird empfohlen, s\xe4mtliche installierten Pakete noch einmal upzudaten:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$   apt update\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$   apt install jitsi-meet\n")),(0,r.kt)("p",null,"W\xe4hrend der Installation werdet ihr aufgefordert einen Hostnamen einzugeben. Gebt hier die Subdomain ein, die ihr f\xfcr euren Jitsi Meet-Server erstellt habt. Im Beispiel unseres Testservers, ist das: meet.zap-testdomain.de"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/172061367-4edb06c0-46ff-4c50-a913-77e9f72e5955.png",alt:"image"})),(0,r.kt)("p",null,'Best\xe4tigt die Eingabe mit "Ok". Es \xf6ffnet sich ein neues Fenster, in dem ihr gefragt werden, ob ein selbstsigniertes TLS-Zertifikat erstellt werden soll oder ein bestehendes verwendet werden soll. W\xe4hlt die Option "Generate a new self-signed certificate" aus:'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/172061376-1a4489b5-eb67-4d67-b8a8-143e704d9e39.png",alt:"image"})),(0,r.kt)("p",null,"Die Installation von Jitsi Meet ist damit abgeschlossen und jetzt muss nur noch TLS-Zertifikat abgerufen werden.\nInstalliere hierzu das Paket Certbot:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$   apt install certbot\n")),(0,r.kt)("p",null,"F\xfchre das Script f\xfcr das Installationsprogramm f\xfcr TLS-Zertifikate aus:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$   /usr/share/jitsi-meet/scripts/install-letsencrypt-cert.sh\n")),(0,r.kt)("p",null,"W\xe4hrend der Ausf\xfchrung wirst du aufgefordert, eine Email-Adresse, die an letsenrypt.org \xfcbermittelt wird, anzugeben. Gebe eine Email-Addresse an und best\xe4tige mit Eingabe."),(0,r.kt)("p",null,"Danach sollte Jitsi Meet auf deinem Server vollst\xe4ndig installiert und aktiv sein. Um zu Testen, ob Jitsi Meet richtig installiert wurde, gebe einfach die eingerichtete Subdomain in die URL-Bar deines Browser ein. Im diesem Tutorial ist das:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://meet.zap-testdomain.de\n")),(0,r.kt)("p",null,"L\xe4dt die Seite mit Jitsi Meet, kannst du direkt deine 1. Videokonferenz starten."))}c.isMDXComponent=!0}}]);