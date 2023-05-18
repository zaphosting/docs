"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8534],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},v=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(t),v=a,m=p["".concat(l,".").concat(v)]||p[v]||c[v]||i;return t?r.createElement(m,s(s({ref:n},d),{},{components:t})):r.createElement(m,s({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=v;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[p]="string"==typeof e?e:a,s[1]=o;for(var u=2;u<i;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}v.displayName="MDXCreateElement"},9961:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const i={id:"vserver_linux_java",title:"Java auf Server installieren",description:"Informationen, wie du Java auf deinen vServer von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentationen",sidebar_label:"Java installieren"},s=void 0,o={unversionedId:"vserver_linux_java",id:"vserver_linux_java",title:"Java auf Server installieren",description:"Informationen, wie du Java auf deinen vServer von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentationen",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/vserver_linux_java.md",sourceDirName:".",slug:"/vserver_linux_java",permalink:"/guides/de/docs/vserver_linux_java",draft:!1,editUrl:"https://github.com/zaphosting/docs/tree/master/docs/vserver_linux_java.md",tags:[],version:"current",frontMatter:{id:"vserver_linux_java",title:"Java auf Server installieren",description:"Informationen, wie du Java auf deinen vServer von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentationen",sidebar_label:"Java installieren"}},l={},u=[{value:"Was ist Java und wof\xfcr wird es ben\xf6tigt?",id:"was-ist-java-und-wof\xfcr-wird-es-ben\xf6tigt",level:2},{value:"Vorbereitung",id:"vorbereitung",level:2},{value:"Installation",id:"installation",level:2},{value:"Version-Check",id:"version-check",level:2}],d={toc:u},p="wrapper";function c(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"was-ist-java-und-wof\xfcr-wird-es-ben\xf6tigt"},"Was ist Java und wof\xfcr wird es ben\xf6tigt?"),(0,a.kt)("p",null,"Java ist weltweit eine sehr stark verwendete Programmiersprache die f\xfcr zahlreiche Programme und Dienste eingesetzt wird. Damit diese Programme funktionieren ist es zwingend notwendig das Java auf dem System installiert ist. Im Folgenden erf\xe4hrst du, wie du f\xfcr die angebotenen Linux Betriebssysteme Java auf deinem System installieren kannst. "),(0,a.kt)("h2",{id:"vorbereitung"},"Vorbereitung"),(0,a.kt)("p",null,"Bevor die eigentliche Java Installation begonnen werden kann, muss sichergestellt werden, dass das System auf dem neusten Stand ist. Daf\xfcr verbinden wir uns per SSH mit dem Server. Falls du nicht wei\xdft, was SSH ist und wie du es verwendest, dann schaue dir folgende Anleitung an: ",(0,a.kt)("a",{parentName:"p",href:"https://zap-hosting.com/guides/docs/de/vserver_linux_ssh/"},"Erstzugriff (SSH)")),(0,a.kt)("p",null,"Dort angekommen kann das System je nach Betriebssystem mit dem folgenden Befehl aktualisiert werden:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// Debian\nsudo apt-get update\n\n// Ubuntu\nsudo apt update\n\n// CentOS\nsudo yum update\n\n// OpenSUSE\nsudo zypper up\n\n// Fedora\nsudo dnf upgrade --refresh\n")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Nachdem die Vorbereitung abgeschlossen wurde, kann nun die Java Installation begonnen werden. Je nach Betriebssystem m\xfcssen daf\xfcr folgende Befehle ausgef\xfchrt werden:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Debian")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo apt-get install default-jdk\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Ubuntu")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo apt install default-jdk\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"CentOS")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo yum install java-11-openjdk\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Fedora")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo dnf install java-11-openjdk\n")),(0,a.kt)("h2",{id:"version-check"},"Version-Check"),(0,a.kt)("p",null,"Nachdem die Installation abgeschlossen wurde kannst du mit dem ",(0,a.kt)("strong",{parentName:"p"},"java --version")," Befehl pr\xfcfen, ob die Installation erfolgreich gewesen ist. Die Ausgabe sollte im etwa wie im folgenden aussehen:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"openjdk 11.0.9.1 2020-11-04\nOpenJDK Runtime Environment (build 11.0.9.1+1-Ubuntu-0ubuntu1.20.04)\nOpenJDK 64-Bit Server VM (build 11.0.9.1+1-Ubuntu-0ubuntu1.20.04, mixed mode)\n")),(0,a.kt)("p",null,"In dem Fall wurde Java 11 erfolgreich auf dem System eingerichtet. Nun kannst du problemlos Java-Applikationen auf deinem System laufen lassen."))}c.isMDXComponent=!0}}]);