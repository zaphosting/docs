"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8839],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},o="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),o=p(n),c=a,g=o["".concat(s,".").concat(c)]||o[c]||u[c]||i;return n?r.createElement(g,l(l({ref:t},m),{},{components:n})):r.createElement(g,l({ref:t},m))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[o]="string"==typeof e?e:a,l[1]=d;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2087:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={id:"vserver_linux_ssh",title:"Erstzugriff auf Linux Server mit SSH",description:"Informationen, wie der Erstzugriff mit SSH auf deinen Linux vServer von ZAP-Hosting funktioniert - ZAP-Hosting.com Dokumentationen",sidebar_label:"Erstzugriff (SSH)"},l=void 0,d={unversionedId:"vserver_linux_ssh",id:"vserver_linux_ssh",title:"Erstzugriff auf Linux Server mit SSH",description:"Informationen, wie der Erstzugriff mit SSH auf deinen Linux vServer von ZAP-Hosting funktioniert - ZAP-Hosting.com Dokumentationen",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/vserver_linux_ssh.md",sourceDirName:".",slug:"/vserver_linux_ssh",permalink:"/guides/de/docs/vserver_linux_ssh",draft:!1,editUrl:"https://github.com/zaphosting/docs/tree/master/docs/vserver_linux_ssh.md",tags:[],version:"current",frontMatter:{id:"vserver_linux_ssh",title:"Erstzugriff auf Linux Server mit SSH",description:"Informationen, wie der Erstzugriff mit SSH auf deinen Linux vServer von ZAP-Hosting funktioniert - ZAP-Hosting.com Dokumentationen",sidebar_label:"Erstzugriff (SSH)"},sidebar:"vpsrootSidebar",previous:{title:"Netzwerkanalyse MTR/WinMTR",permalink:"/guides/de/docs/vserver_network_analysis_winmtr"},next:{title:"SFTP Verbindung",permalink:"/guides/de/docs/vserver_linux_sftp"}},s={},p=[{value:"SSH-Verbindung",id:"ssh-verbindung",level:3},{value:"IP-Adresse &amp; Zugang",id:"ip-adresse--zugang",level:2},{value:"Verwaltung des Servers per SSH",id:"verwaltung-des-servers-per-ssh",level:2},{value:"Account Verwaltung",id:"account-verwaltung",level:3},{value:"System Verwaltung",id:"system-verwaltung",level:3},{value:"Datei Verwaltung",id:"datei-verwaltung",level:3},{value:"Netzwerk Verwaltung",id:"netzwerk-verwaltung",level:3}],m={toc:p},o="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(o,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"ssh-verbindung"},"SSH-Verbindung"),(0,a.kt)("p",null,"Die Linux Server Produkte beinhalten standardm\xe4\xdfig keine grafische Verwaltungsoberfl\xe4che, weshalb die Verbindung und Verwaltung \xfcber einen SSH-Client (Konsole) erfolgt. Hierbei gibt es eine gro\xdfe Auswahl an SSH-Clients. Im Folgenden gibt es eine \xdcbersicht der bekannten/oft genutzten SSH-Clients. "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"SSH-Client"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Unterst\xfctzte Betriebssysteme"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Open-Source"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Download"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Putty"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Windows, Linux"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Ja"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://www.putty.org/"},"Klick"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Kitty"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Windows, Linux"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Ja"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"http://www.9bis.net/kitty/"},"Klick"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"MobaXterm"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Windows, Linux"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Ja"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://mobaxterm.mobatek.net/"},"Klick"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"SecureCRT"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Windows, Linux, Mac"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Nein"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://www.vandyke.com/cgi-bin/releases.php?product=securecrt"},"Klick"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"mRemoteNG"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Windows"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Ja"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://mremoteng.org/download"},"Klick"))))),(0,a.kt)("h2",{id:"ip-adresse--zugang"},"IP-Adresse & Zugang"),(0,a.kt)("p",null,"Im Folgenden wird die Verbindung mittels des Putty SSH-Client erl\xe4utert. Im Konfigurationsfenster wird hierbei beim ",(0,a.kt)("strong",{parentName:"p"},"Hostname")," die IP-Adresse des Server und der SSH Port 22 eingetragen. Im Anschluss kann der Verbindungsaufbau \xfcber den ",(0,a.kt)("strong",{parentName:"p"},"Open")," Button gestartet werden."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159171679-e55411b6-17be-49f8-a80f-645f4652c9c4.png",alt:"image"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f Standardm\xe4\xdfig ist der SSH-Login via Passwort deaktiviert. Solltest du dich mit dem Passwort einloggen wollen, dann muss unter ",(0,a.kt)("strong",{parentName:"p"},"Zugang & Sicherheit")," die Option daf\xfcr erst aktiviert werden.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159171681-abfa1472-41cf-4219-92fe-9ad948c7e8d2.png",alt:"image"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Wenn die Verbindung zum Server ersten Mal erfolgt, dann erscheint eine Sicherheitsmeldung von Putty, in der mitgeteilt wird, dass noch kein Host-Schl\xfcssel in der Registrierung zwischengespeichert wurde. Dies kann mit ",(0,a.kt)("strong",{parentName:"p"},"Ja")," best\xe4tigt werden, wenn der Hinweis nicht weiterhin jedes mal erfolgen soll. ")),(0,a.kt)("p",null,"Daraufhin \xf6ffnet sich die SSH-Konsole in der nach einem ",(0,a.kt)("strong",{parentName:"p"},"Benutzernamen")," und ",(0,a.kt)("strong",{parentName:"p"},"Kennwort"),' gefragt wird. Der Benutzername lautet "',(0,a.kt)("strong",{parentName:"p"},"root"),'". Das Passwort ist im Webinterface unter "',(0,a.kt)("strong",{parentName:"p"},"Zugang & Sicherheit"),'" zu finden beziehungsweise kann dort gesetzt werden.'),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159171684-d50db714-df08-46ed-9453-1d186edda3de.png",alt:"image"})),(0,a.kt)("h2",{id:"verwaltung-des-servers-per-ssh"},"Verwaltung des Servers per SSH"),(0,a.kt)("p",null,"F\xfcr eine optimale Nutzung des SSH-Clients ist es unerl\xe4sslich, die Grundbefehle zu kennen. Im Folgenden findest du eine grobe \xdcbersicht mit allen relevanten Befehlen und deren Bedeutung:"),(0,a.kt)("h3",{id:"account-verwaltung"},"Account Verwaltung"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Befehl"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Beschreibung"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Syntax"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"useradd"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Neuen Benutzer erstellen"),(0,a.kt)("td",{parentName:"tr",align:"center"},"useradd ","[options][username]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"usermod"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Vorhandenen Benutzer bearbeiten"),(0,a.kt)("td",{parentName:"tr",align:"center"},"usermod ","[options][username]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"userdel"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Vorhandenen Benutzer l\xf6schen"),(0,a.kt)("td",{parentName:"tr",align:"center"},"userdel ","[options][username]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"passwd"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Passwort eines bestehenden Benutzer \xe4ndern"),(0,a.kt)("td",{parentName:"tr",align:"center"},"passwd ","[username]")))),(0,a.kt)("h3",{id:"system-verwaltung"},"System Verwaltung"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Befehl"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Beschreibung"),(0,a.kt)("th",{parentName:"tr",align:null},"Syntax"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"top"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\xdcbersicht von Auslastung, Prozessen und weiteren Informationen (\xe4hnlich wie der Task-Manager von Windows)"),(0,a.kt)("td",{parentName:"tr",align:null},"top")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"df"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Spreicherverbrauch anzeigen (Patition)"),(0,a.kt)("td",{parentName:"tr",align:null},"df -h")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"du"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Spreicherverbrauch anzeigen (Verzeichnis)"),(0,a.kt)("td",{parentName:"tr",align:null},"du -sh *")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"free"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Speicherauslastung des Systems. Geteilt in RAM und SWAP-Space."),(0,a.kt)("td",{parentName:"tr",align:null},"free")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"kill"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Beendet den Prozess mit der uebergebenen Prozess-ID (PID)"),(0,a.kt)("td",{parentName:"tr",align:null},"kill ","[ID]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"killall"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Beendet alle Prozesse mit dem uebergebenen Namen"),(0,a.kt)("td",{parentName:"tr",align:null},"killall ","[name]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"mv"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Verschiebt Dateien in ein anderes Verzeichnis"),(0,a.kt)("td",{parentName:"tr",align:null},"mv sourcepath newPath")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"mkdir"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Erstellt einen neuen Ordner"),(0,a.kt)("td",{parentName:"tr",align:null},"mkdir directoryname")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"service"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Dienst starten, stoppen, neustarten und Status pr\xfcfen"),(0,a.kt)("td",{parentName:"tr",align:null},"service DienstName start/stop/restart/status")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"reboot"),(0,a.kt)("td",{parentName:"tr",align:"center"},"System neustarten"),(0,a.kt)("td",{parentName:"tr",align:null},"reboot")))),(0,a.kt)("h3",{id:"datei-verwaltung"},"Datei Verwaltung"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Befehl"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Beschreibung"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Syntax"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ls"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Dateien und Ordner im Verzeichnis anzeigen"),(0,a.kt)("td",{parentName:"tr",align:"center"},"ls")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"cd"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Verzeichnis wechseln"),(0,a.kt)("td",{parentName:"tr",align:"center"},"cd ","[OPTION]"," VERZEICHNIS")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"cp"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Dateien oder Verzeichnisse kopieren"),(0,a.kt)("td",{parentName:"tr",align:"center"},"cp ","[OPTIONEN]"," QUELLE ZIEL")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"mv"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Datei oder Verzeichnis verschieben"),(0,a.kt)("td",{parentName:"tr",align:"center"},"mv ","[OPTION]"," QUELLE ZIEL")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"mkdir"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Neues Verzeichnis erstellen"),(0,a.kt)("td",{parentName:"tr",align:"center"},"mkdir ","[OPTION]"," VERZEICHNISNAME")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"rmdir"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Existierendes Verzeichnis entfernen"),(0,a.kt)("td",{parentName:"tr",align:"center"},"rmdir ","[OPTION]"," VERZEICHNIS")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"find"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Dateisystem durchsuchen"),(0,a.kt)("td",{parentName:"tr",align:"center"},"find ","[OPTIONEN][VERZEICHNIS]"," ","[AKTIONEN]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"grep"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Textdateien durchsuchen"),(0,a.kt)("td",{parentName:"tr",align:"center"},"grep ","[OPTIONEN]"," SUCHMUSTER ","[DATEI(EN)]")))),(0,a.kt)("h3",{id:"netzwerk-verwaltung"},"Netzwerk Verwaltung"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Befehl"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Beschreibung"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Syntax"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ip"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Netzwerkschnittstellen abfragen und konfigurieren"),(0,a.kt)("td",{parentName:"tr",align:"center"},"ip ","[OPTIONEN]"," OBJEKT [BEFEHL ","[ARGUMENTE]","]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"netstat"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Status der Netzwerkschnittstellen abfragen"),(0,a.kt)("td",{parentName:"tr",align:"center"},"netstat ","[OPTIONEN]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"nslookup"),(0,a.kt)("td",{parentName:"tr",align:"center"},"DNS-Informationen abfragen"),(0,a.kt)("td",{parentName:"tr",align:"center"},"nslookup")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ping"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Netzverbindung pr\xfcfen"),(0,a.kt)("td",{parentName:"tr",align:"center"},"ping ","[OPTIONEN]"," ZIEL")))))}u.isMDXComponent=!0}}]);