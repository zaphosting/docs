"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8235],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>g});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=i.createContext({}),d=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},o=function(e){var t=d(e.components);return i.createElement(u.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,g=c["".concat(u,".").concat(m)]||c[m]||p[m]||a;return n?i.createElement(g,s(s({ref:t},o),{},{components:n})):i.createElement(g,s({ref:t},o))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:r,s[1]=l;for(var d=2;d<a;d++)s[d]=n[d];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9005:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=n(7462),r=(n(7294),n(3905));const a={id:"dedicated_linux_debian",title:"Debian installieren",description:"Informationen zu der Installation des Debian Betriebssystem auf deinem Dedicated Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation",sidebar_label:"Debian installieren"},s=void 0,l={unversionedId:"dedicated_linux_debian",id:"dedicated_linux_debian",title:"Debian installieren",description:"Informationen zu der Installation des Debian Betriebssystem auf deinem Dedicated Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/dedicated_linux_debian.md",sourceDirName:".",slug:"/dedicated_linux_debian",permalink:"/guides/de/docs/dedicated_linux_debian",draft:!1,editUrl:"https://github.com/zaphosting/docs/tree/master/docs/dedicated_linux_debian.md",tags:[],version:"current",frontMatter:{id:"dedicated_linux_debian",title:"Debian installieren",description:"Informationen zu der Installation des Debian Betriebssystem auf deinem Dedicated Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation",sidebar_label:"Debian installieren"},sidebar:"dedicatedserverSidebar",previous:{title:"Windows installieren",permalink:"/guides/de/docs/dedicated_windows"},next:{title:"Ubuntu installieren",permalink:"/guides/de/docs/dedicated_linux_ubuntu"}},u={},d=[{value:"Vorbereitungen",id:"vorbereitungen",level:2},{value:"Das Setup",id:"das-setup",level:2},{value:"Konfigurationen",id:"konfigurationen",level:3},{value:"Partitionierung",id:"partitionierung",level:3},{value:"Installation des Systems",id:"installation-des-systems",level:3},{value:"SSH Login aktivieren",id:"ssh-login-aktivieren",level:3}],o={toc:d},c="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,i.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"vorbereitungen"},"Vorbereitungen"),(0,r.kt)("p",null,"W\xe4hle in deinem ZAP-Interface die gew\xfcnschte ISO von Debian aus und lasse den Server mit der ISO booten, bis dieser im Setup ist. Die Navigation im Setup Prozess erfolgt mit TAB, Leertaste und Enter."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"TAB = Zwischen Men\xfcpunkten wechseln, Leertaste = markieren, Enter = Best\xe4tigen")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"das-setup"},"Das Setup"),(0,r.kt)("p",null,"Wenn die ISO erfolgreich geladen wurde, ist der Server erfolgreich im Setup."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173874-c0b29b7a-2581-466e-8829-9fd400ab43ed.png",alt:"image"})),(0,r.kt)("p",null,'In diesem Beispiel durchlaufen wir den Installations-Prozess mit dem "klassischen" Install.'),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173878-41be0dca-ab9a-4b0f-97d0-7e9d2dadf46f.png",alt:"image"})),(0,r.kt)("p",null,"W\xe4hle deine gew\xfcnschte Sprache aus, in welchem der Installations-Assitent angezeigt werden soll.\nBedenke jedoch, das diese Sprache sich sp\xe4ter auch auf das installierte System auswirkt."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173881-27f6cfa0-3ad0-4a15-b4ad-9cd5eab0cc9c.png",alt:"image"})),(0,r.kt)("p",null,'Unser gew\xfcnschter Ort befindet sich nicht in der direkten Auswahl, weshalb wir mit "Other" zur n\xe4chsten Seite wechseln.'),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173886-6836fe51-e9d7-4fad-a9b7-86fcd6541747.png",alt:"image"})),(0,r.kt)("p",null,"Wir w\xe4hlen die Europ\xe4ische Zone."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173890-5c171366-8228-4374-8f38-fa4b01f6f933.png",alt:"image"})),(0,r.kt)("p",null,"Abh\xe4ngig von der gew\xfcnschten Zeitzone, w\xe4hlen wir in diesem Beispiel die deutsche Zeitzone."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173897-a32f2217-fc89-4951-96d6-ffd28ad3625d.png",alt:"image"})),(0,r.kt)("p",null,"Wir w\xe4hlen United States als locale."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173903-7785630e-7fd6-4eb6-b505-3aa73158af42.png",alt:"image"})),(0,r.kt)("p",null,"In unserem Fall w\xe4hlen wir das deutsche Tastaturlayout welches dem QWERTZ Layout entspricht."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Dein Server bereitet nun einige f\xfcr die Installation notwendige Komponenten vor, dies kann einen Augenblick in Anspruch nehmen.")),(0,r.kt)("h3",{id:"konfigurationen"},"Konfigurationen"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173907-17d2a4f8-35ce-42fc-a22e-2b0d60079e81.png",alt:"image"})),(0,r.kt)("p",null,"Dein Server konfiguiert seine Netzwerkschnittstelle automatisiert durch DHCP.\nW\xe4hle ",(0,r.kt)("inlineCode",{parentName:"p"},"eno1")," dies ist der Netzwerkadapter deines ZAP Dedicated Servers."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173909-e0d2de0e-f333-4972-9809-6832de905ca9.png",alt:"image"})),(0,r.kt)("p",null,"Der Hostname kann von dir beliebig ver\xe4ndert werden, muss jedoch nicht angepasst werden."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173917-f581618c-c92c-4f56-837f-8156dc7e0ba7.png",alt:"image"})),(0,r.kt)("p",null,"Der Domain Name muss ebenfalls nicht ver\xe4ndert werden."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173920-28980d2d-3570-4ea5-a59e-0f3d483049a8.png",alt:"image"})),(0,r.kt)("p",null,'Hier muss das Passwort f\xfcr deinen "Root" Account gesetzt werden, notiere dir das gew\xe4hlte Passwort ',(0,r.kt)("strong",{parentName:"p"},"unbedingt"),"."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173927-8bda11e6-2a99-4299-96b6-a3796cda206b.png",alt:"image"})),(0,r.kt)("p",null,"Zur Best\xe4tigung muss das Passwort erneut eingegeben werden."),(0,r.kt)("hr",null),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Der Installations-Assistent verlangt die Erstellung eines zweiten Nutzerkontos")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173939-526bddc4-ef8c-4747-a852-e673dff89a16.png",alt:"image"})),(0,r.kt)("p",null,"Gib nun den Namen des Besitzers f\xfcr ein normales Nutzerkonto ein, du kannst hier nat\xfcrlich frei w\xe4hlen was du eintr\xe4gst."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'Du kannst nat\xfcrlich weiterhin das "Root"-Konto benutzen')),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173944-ef487bd3-9a35-40ef-a727-a178fd521483.png",alt:"image"})),(0,r.kt)("p",null,"Gib nun den Nutzernamen des Kontos ein.\nW\xe4hle au\xdferdem ein Passwort deiner Wahl und best\xe4tige dies nochmals."),(0,r.kt)("p",null,"Dein Server bereitet nun den n\xe4chsten Installationsabschnitt vor."),(0,r.kt)("h3",{id:"partitionierung"},"Partitionierung"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173949-e58c9c27-9dc5-4018-8334-085f52cdc9ae.png",alt:"image"})),(0,r.kt)("p",null,'Du hast nun die M\xf6glichkeit nach Wunsch Partitionen anzulegen oder alternativ die ganze SSD als 1 Partition zu nutzen.\nSolltest du nichts an der Partition ver\xe4ndern wollen w\xe4hle einfach "Guided - Use entire disk"'),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173953-8db5f379-76c1-4e3f-9aac-6f80e2907763.png",alt:"image"})),(0,r.kt)("p",null,"W\xe4hle die in deinem Server verbaute SSD aus."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173955-e77b0c0c-9453-4482-8ad8-9350b9229aca.png",alt:"image"})),(0,r.kt)("p",null,"Grunds\xe4tzlich ist es ausreichend wenn die komplette Struktur auf einer Partition abgespeichert wird."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173956-62d59a31-3d9a-4343-8839-9356f5d39e9f.png",alt:"image"})),(0,r.kt)("p",null,'Wir best\xe4tigen die Konfiguration mit "Finish partitioning and write changes to disk"'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'Sollten alte Partitionen auf deiner SSD vorhanden sein best\xe4tigen wir das \xfcberschreiben einfach mit "Yes"')),(0,r.kt)("p",null,"Dein Server f\xfchrt nun die Partitionierung durch und bereitet die Installation des Systems vor."),(0,r.kt)("h3",{id:"installation-des-systems"},"Installation des Systems"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173960-6290e5b5-2205-4d48-a5fc-54ce108d53e7.png",alt:"image"})),(0,r.kt)("p",null,"Solltest du noch andere Installationsmedien beispielsweise f\xfcr bestimmte Pakete einbinden wollen, k\xf6nnte das nun geschehen.\nIm Regelfall kannst du jedoch alle Pakete bequem nachher \xfcber die Paketverwaltung (apt) herunterladen."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173968-fb24e35e-96c5-49a2-b856-799c5ce482fb.png",alt:"image"})),(0,r.kt)("p",null,"Unser dedizierter Server steht in Deutschland, somit w\xe4hlen wir auch den Deutschen Mirror-Standort um die bestm\xf6gliche Download-Rate zu erreichen."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173970-8905935e-9fd0-4c9e-98b9-c32da48ac228.png",alt:"image"})),(0,r.kt)("p",null,"Grunds\xe4tzlich empfehlen wir das normale Debian Repository zu benutzen."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173979-5d4169d3-f516-4bfe-8f9f-dab51eabf18b.png",alt:"image"})),(0,r.kt)("p",null,"Solltest du einen HTTP-Proxy nutzen wollen, k\xf6nntest du die Daten eintragen. (nicht erforderlich)"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173982-e24e6f85-fb01-4823-9b39-3bfa364b97f3.png",alt:"image"})),(0,r.kt)("p",null,"Das System m\xf6chte anonymisierte Statistiken sammeln, dies kann abgelehnt oder best\xe4tigt werden."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173987-38512558-c08f-4437-8468-e033d0af83f9.png",alt:"image"})),(0,r.kt)("p",null,"W\xe4hle nun die Pakete aus welche installiert werden sollen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Debian desktop enviroment\nW\xfcrde eine grafische Oberfl\xe4che auf deinem Server erzeugen, wir nutzen jedoch in diesem Beispiel lediglich die Shell Ebene des Servers.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"SSH server\nWird ben\xf6tigt um beispielsweise mit PuTTY verbinden zu k\xf6nnen.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"standard system utilities\nWird ben\xf6tigt um eine Anzahl gewisser Grundpakete bereitstellen zu k\xf6nnen."))),(0,r.kt)("p",null,"Die Auswahl der verschiedenen Pakete erfolgt hier per TAB, Pfeiltasten. Markiert oder Abgew\xe4hlt werden Pakete mit der Leertaste.\nWenn du mit deiner Auswahl zufrieden bist dr\xfccke so lange TAB bis du bei ","[Continue]"," landest und best\xe4tige mit Enter."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173990-605c4f25-3480-43d1-89e3-dad3dedd01a5.png",alt:"image"})),(0,r.kt)("p",null,"Dadurch das dieses Betriebssystem, das einzige auf dem aktuellen Server ist, mit ",(0,r.kt)("inlineCode",{parentName:"p"},"Yes")," best\xe4tigen."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173991-197f8295-2441-49b0-b411-1247a6071112.png",alt:"image"})),(0,r.kt)("p",null,"Als Speicherort w\xe4hlen wir den vorgegebenen Ort auf unserer SSD."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83c\udf89 Die Installation deines Debian-Systems ist nun fertig.")),(0,r.kt)("p",null,'\xd6ffne in deiner iLO "Virtual Media" und dr\xfccke "Eject Media" um die ISO aus dem System zu entfernen.'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173993-37b4c6a4-45f7-486a-b1e8-06adbff7c072.png",alt:"image"})),(0,r.kt)("p",null,"Wenn dies erfolgreich erledigt ist, w\xe4hlen wir Continue, der Server wird nun einen neustart durchf\xfchren."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173996-5278b311-c648-4bfc-a7b6-cbc4f3e7c5bb.png",alt:"image"})),(0,r.kt)("h3",{id:"ssh-login-aktivieren"},"SSH Login aktivieren"),(0,r.kt)("p",null,"Wenn der Neustart deines Servers durchgef\xfchrt wurde und die Installation erfolgreich verlaufen ist, wirst du nun zur Anmeldung aufgefordert."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173998-1c28db47-6839-4b39-8532-718c503708fe.png",alt:"image"})),(0,r.kt)("p",null,"Nat\xfcrlich m\xf6chte man auch seinen Server \xfcber SSH also beispielsweise PuTTY verwalten k\xf6nnen, weshalb wir den Login daf\xfcr noch aktivieren m\xfcssen:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173999-9251e54d-a858-4f4e-95c6-0a5c988dc36a.png",alt:"image"})),(0,r.kt)("p",null,"\xd6ffne mit nano die Konfigurations-Datei deines SSH-Dienstes ",(0,r.kt)("inlineCode",{parentName:"p"},"nano /etc/ssh/sshd_config")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159174006-2fdac4ee-ffee-41e4-b9ea-d485601b9217.png",alt:"image"})),(0,r.kt)("p",null,"Suche die Stelle ",(0,r.kt)("inlineCode",{parentName:"p"},"#PermitRootLogin no")," und \xe4ndere es zu ",(0,r.kt)("inlineCode",{parentName:"p"},"PermitRootLogin yes")),(0,r.kt)("p",null,"Dr\xfccke nun ",(0,r.kt)("inlineCode",{parentName:"p"},"STRG + X")," und best\xe4tige deine \xc4nderungen mit ",(0,r.kt)("inlineCode",{parentName:"p"},"Y")),(0,r.kt)("p",null,"Als n\xe4chstes muss der SSH-Dienst noch neugestartet werden, gib hierzu ",(0,r.kt)("inlineCode",{parentName:"p"},"service ssh restart")," ein."),(0,r.kt)("p",null,"Dein SSH-Login ist nun aktiv und du kannst beispielsweise per PuTTY verbinden.\nGib hierzu die IP-Adresse deines Servers, welche du in deinem Dashboard siehst ein und nutze die vorher definierten Anmeldedaten."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159174010-4cf4901a-9481-45f9-b51a-6f07f53f050e.png",alt:"image"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Bei weiteren Fragen und Problemen steht dir unser Support jederzeit gerne zur Verf\xfcgung")))}p.isMDXComponent=!0}}]);