"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5190],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>g});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=t.createContext({}),d=function(e){var n=t.useContext(o),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},u=function(e){var n=d(e.components);return t.createElement(o.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},v=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(r),v=i,g=p["".concat(o,".").concat(v)]||p[v]||c[v]||a;return r?t.createElement(g,s(s({ref:n},u),{},{components:r})):t.createElement(g,s({ref:n},u))}));function g(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=v;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[p]="string"==typeof e?e:i,s[1]=l;for(var d=2;d<a;d++)s[d]=r[d];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}v.displayName="MDXCreateElement"},5847:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var t=r(7462),i=(r(7294),r(3905));const a={id:"vserver_linux_webserver",title:"Nginx und Apache Webserver installieren",description:"Informationen wie du Nginx und Apache Webserver auf deinen Linx vServer von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentationen",sidebar_label:"Webserver installieren"},s=void 0,l={unversionedId:"vserver_linux_webserver",id:"vserver_linux_webserver",title:"Nginx und Apache Webserver installieren",description:"Informationen wie du Nginx und Apache Webserver auf deinen Linx vServer von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentationen",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/vserver_linux_webserver.md",sourceDirName:".",slug:"/vserver_linux_webserver",permalink:"/guides/de/docs/vserver_linux_webserver",draft:!1,editUrl:"https://github.com/zaphosting/docs/tree/master/docs/vserver_linux_webserver.md",tags:[],version:"current",frontMatter:{id:"vserver_linux_webserver",title:"Nginx und Apache Webserver installieren",description:"Informationen wie du Nginx und Apache Webserver auf deinen Linx vServer von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentationen",sidebar_label:"Webserver installieren"}},o={},d=[{value:"Webserver Installation",id:"webserver-installation",level:2},{value:"Vorbereitung",id:"vorbereitung",level:2},{value:"Installation",id:"installation",level:2},{value:"Apache",id:"apache",level:3},{value:"Nginx",id:"nginx",level:3},{value:"Version-Check",id:"version-check",level:2},{value:"Apache",id:"apache-1",level:3},{value:"Nginx",id:"nginx-1",level:3}],u={toc:d},p="wrapper";function c(e){let{components:n,...r}=e;return(0,i.kt)(p,(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"webserver-installation"},"Webserver Installation"),(0,i.kt)("p",null,"Nginx und Apache sind beliebte Webserver, die verwendet werden, um Webseiten an den Browser eines Benutzers zu \xfcbermitteln. Im folgenden zeigen wir dir wie du einen der Dienste auf deinem System installieren kannst. "),(0,i.kt)("h2",{id:"vorbereitung"},"Vorbereitung"),(0,i.kt)("p",null,"Bevor die eigentliche Installation eines Webservers begonnen werden kann, muss sichergestellt werden, dass das System auf dem neusten Stand ist. Daf\xfcr verbinden wir uns per SSH mit dem Server. Falls du nicht wei\xdft, was SSH ist und wie du es verwendest, dann schaue dir folgende Anleitung an: ",(0,i.kt)("a",{parentName:"p",href:"https://zap-hosting.com/guides/docs/de/vserver_linux_ssh/"},"Erstzugriff (SSH)")),(0,i.kt)("p",null,"Dort angekommen kann das System je nach Betriebssystem mit dem folgenden Befehl aktualisiert werden:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"// Debian\nsudo apt-get update\n\n// Ubuntu\nsudo apt update\n\n// CentOS\nsudo yum update\n\n// OpenSUSE\nsudo zypper update\n\n// Fedora\nsudo dnf upgrade --refresh\n")),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Nachdem die Vorbereitung abgeschlossen wurde, kann nun mit der Installation des Webservers begonnen werden. Je nach Betriebssystem und Webserver m\xfcssen daf\xfcr folgende Befehle ausgef\xfchrt werden:"),(0,i.kt)("h3",{id:"apache"},"Apache"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"// Debian\nsudo apt install apache2\n\n// Ubuntu\nsudo apt install apache2\n\n// CentOS\nsudo yum install httpd\n\n// OpenSUSE\nsudo zypper install httpd\n\n// Fedora\nsudo dnf install httpd\n")),(0,i.kt)("p",null,"Nach dem installieren des Webservers k\xf6nnen die Dateien deiner Website hochgeladen werden. Verbinde dich dazu per FTP/SFTP mit deinem Server,  navigiere in das folgende Verzeichnis und lade die Dateien hoch."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/var/www/html/\n")),(0,i.kt)("h3",{id:"nginx"},"Nginx"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"// Debian\nsudo apt install nginx\n\n// Ubuntu\nsudo apt install nginx\n\n// CentOS\nsudo yum install nginx\n\n// OpenSUSE\nsudo zypper install nginx\n\n// Fedora\nsudo dnf install nginx\n")),(0,i.kt)("p",null,"Nach dem installieren des Webservers k\xf6nnen die Dateien deiner Website hochgeladen werden. Verbinde dich dazu per FTP/SFTP mit deinem Server,  navigiere in das folgende Verzeichnis und lade die Dateien hoch."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/usr/share/nginx/html\n")),(0,i.kt)("h2",{id:"version-check"},"Version-Check"),(0,i.kt)("p",null,"Nachdem die Installation abgeschlossen wurde kannst du mit den Befehlen  ",(0,i.kt)("inlineCode",{parentName:"p"},"apache2 -v")," (Apache) und ",(0,i.kt)("inlineCode",{parentName:"p"},"nginx -v")," (Nginx)  pr\xfcfen, ob die Installation erfolgreich gewesen ist. Die Ausgabe sollte im etwa wie im folgenden aussehen:"),(0,i.kt)("h3",{id:"apache-1"},"Apache"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"apache2 -v\nServer version: Apache/2.4.41 (Ubuntu)\nServer built:   XXXX-XX-XXTXX:XX:XX\n")),(0,i.kt)("h3",{id:"nginx-1"},"Nginx"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"nginx -V\nnginx version: nginx/1.2.3\n...\n")),(0,i.kt)("p",null,"Wenn eines der beiden F\xe4lle eintrifft, dann wurde erfolgreich der Webserver installiert."))}c.isMDXComponent=!0}}]);