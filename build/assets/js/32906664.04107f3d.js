"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8181],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),d=r,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||s;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7760:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const s={id:"vserver_linux_gs_interface",title:"Gameserver/TS3 Interface",description:"Information on how to install TS and game server via the game server/TS3 interface with just a few clicks - ZAP-Hosting.com documentation",sidebar_label:"GS/TS3 Interface"},o=void 0,i={unversionedId:"vserver_linux_gs_interface",id:"vserver_linux_gs_interface",title:"Gameserver/TS3 Interface",description:"Information on how to install TS and game server via the game server/TS3 interface with just a few clicks - ZAP-Hosting.com documentation",source:"@site/docs/vserver_linux_gs_interface.md",sourceDirName:".",slug:"/vserver_linux_gs_interface",permalink:"/guides/docs/vserver_linux_gs_interface",draft:!1,editUrl:"https://github.com/zaphosting/docs/tree/master/docs/vserver_linux_gs_interface.md",tags:[],version:"current",frontMatter:{id:"vserver_linux_gs_interface",title:"Gameserver/TS3 Interface",description:"Information on how to install TS and game server via the game server/TS3 interface with just a few clicks - ZAP-Hosting.com documentation",sidebar_label:"GS/TS3 Interface"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Use of the GS/TS3 interface",id:"use-of-the-gsts3-interface",level:2},{value:"Available services / games",id:"available-services--games",level:2},{value:"Installation and configuration of the GS/TS3 interface",id:"installation-and-configuration-of-the-gsts3-interface",level:2},{value:"Installation of a game server",id:"installation-of-a-game-server",level:2},{value:"Installation of a voice server",id:"installation-of-a-voice-server",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null," If game server products don't meet your taste or expectations, or if you need your service in other ways, using a VPS, root server, or dedicated server is often a better option. However, you often face the challenge that not all services are automated or pre-installed. Setting up services such as game servers, Teamspeak 3 servers, and music bots must be done independently."),(0,r.kt)("p",null,"To solve this problem, we have developed a practical solution for our Linux-based VPS, root server, or dedicated server. The so-called Gameserver/Teamspeak 3 Server interface (GS/TS3 Interface)!"),(0,r.kt)("h2",{id:"use-of-the-gsts3-interface"},"Use of the GS/TS3 interface"),(0,r.kt)("p",null,"With the user-friendly GS/TS3 interface, you can install Teamspeak 3 or other selected game server services on your Linux-based VPS, root server, or dedicated server with just a few clicks. No prior knowledge is required for this installation. The setup of all required packages, server files, and the actual installation are fully automated, saving you time and effort."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,r.kt)("strong",{parentName:"p"},"Note:")," To successfully install the GS/TS3 interface, it is important to ensure that your server has one of the following supported operating systems installed:"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Debian 10"),(0,r.kt)("li",{parentName:"ul"},"Debian 11"))),(0,r.kt)("h2",{id:"available-services--games"},"Available services / games"),(0,r.kt)("p",null,"The GS/TS3 interface supports the setup of game servers, voice servers, and music bots. Most of the games we offer for our game server products are also available in the GS/TS3 interface option. This applies to all games that we actively operate under Linux. All games that run on Windows operating systems can unfortunately not be installed. There, only a manual installation is possible, provided that the game supports a Linux server version."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Services"),(0,r.kt)("th",{parentName:"tr",align:null},"Description / Content"),(0,r.kt)("th",{parentName:"tr",align:null},"VPS"),(0,r.kt)("th",{parentName:"tr",align:null},"Rootserver"),(0,r.kt)("th",{parentName:"tr",align:null},"Dedicated Server"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Gameserver"),(0,r.kt)("td",{parentName:"tr",align:null},"Linux based gameserver applications are supported"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Voiceserver"),(0,r.kt)("td",{parentName:"tr",align:null},"Teamspeak 3 servers are supported"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Musikbot"),(0,r.kt)("td",{parentName:"tr",align:null},"Sinusbot is supported"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")))),(0,r.kt)("p",{style:{textAlign:"center"}},"List updated last on 01.05.2023"),(0,r.kt)("h2",{id:"installation-and-configuration-of-the-gsts3-interface"},"Installation and configuration of the GS/TS3 interface"),(0,r.kt)("p",null,"To install the GS/TS3 interface, you need to navigate to the navigation panel ",(0,r.kt)("strong",{parentName:"p"},"Settings")," in the server administration of your product and click on the sub-item ",(0,r.kt)("strong",{parentName:"p"},"Gameserver / TS3"),". "),(0,r.kt)("p",null,"The first time you call up the GS/TS3 interface, you will be taken to the user-friendly setup assistant. To set up the interface and link it to your server, it is first necessary to create an SSH key. This key is necessary for the website to establish a secure connection to the server. This makes it possible to set up, manage and control services such as game servers and Teamspeak 3 servers directly via the interface."),(0,r.kt)("p",null,"Once there, the SSH key must be created. To do this, click on the ",(0,r.kt)("strong",{parentName:"p"},"Generate SSH key")," button and then add the key by clicking on the ",(0,r.kt)("strong",{parentName:"p"},"Add key")," button. Optionally, you can also define a name for the key for overview purposes."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61839701/165696291-b5c31c89-3b4e-4099-b29c-bfda756b19a6.png",alt:"img"})),(0,r.kt)("p",null,"Once you have clicked on ",(0,r.kt)("strong",{parentName:"p"},"Add Key"),", the SSH key is stored on your server. The GS/TS3 interface can then be added to your server."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61839701/165696735-8428cebb-8563-431b-837c-2fdbe47cb67f.png",alt:"img"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,r.kt)("strong",{parentName:"p"},"Note:")," If the SSH key is not recognised right away, restarting the server and refreshing the page is a possible solution.")),(0,r.kt)("p",null,"During the installation you can check the current progress. Please note that the installation and configuration of the interface and its packages may take some time. This can usually take from 5 to 15 minutes."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61839701/165697094-ddf800a2-2618-441d-912b-994afe8099bf.png",alt:"img"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,r.kt)("strong",{parentName:"p"},"Caution"),': Please do not continue the process until the interface is completely installed. You can recognize the successful installation by the fact that the progress bar has disappeared and "Installed" is displayed instead of "Missing" for each required package.')),(0,r.kt)("h2",{id:"installation-of-a-game-server"},"Installation of a game server"),(0,r.kt)("p",null,"Provided that the creation and installation of the GS/TS3 interface has been completed successfully, you can now start setting up the services. The installation of a game server is done via the ",(0,r.kt)("strong",{parentName:"p"},"Install game server")," button in the ",(0,r.kt)("strong",{parentName:"p"},"Game server")," category."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61839701/165700146-8ee11ace-99f6-477b-9958-3a7c29599204.png",alt:"img"})),(0,r.kt)("p",null,"In the next step, you have the option of selecting the IP address of the desired game server (provided your server has more than one IP). You can also specify the desired port, the number of slots and the RAM boost individually."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61839701/165700364-b4b07d72-f7a5-47f6-bdf8-d9f8993a8cbf.png",alt:"img"})),(0,r.kt)("p",null,'Make sure that all the details are correct and meet your requirements. As soon as you have made all the settings, click on "Install game server now" to start the installation process. The game server will then be set up according to your specifications and you will soon be able to get started. You can now view and call up your newly created game server in the list.'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61839701/165700566-ce663969-7d54-4f82-81be-87b470064e2d.png",alt:null})),(0,r.kt)("p",null,"You are now in the administration of your game server. There you can select and install the desired game for your game server in the ",(0,r.kt)("strong",{parentName:"p"},"Settings")," navigation panel under ",(0,r.kt)("strong",{parentName:"p"},"Games"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61839701/165700781-450a1116-65ad-43bf-bcc8-f17dbf30d53f.png",alt:"img"})),(0,r.kt)("p",null,"Here you will find a list of all the games you can install on your server. In this example, a server with the game (package) Minecraft: Paperspigot will be installed. Select your desired game and click on the green button to start the installation."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61839701/165700899-ddaf5731-0a4e-4daf-a691-339cd7942a32.png",alt:null})),(0,r.kt)("p",null,"An overview with all the necessary conditions will be displayed. If all conditions are met, you can confirm the process with the ",(0,r.kt)("strong",{parentName:"p"},"Accept and Install")," button."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61839701/165701029-1d566a87-d4e7-4a6a-a0f2-03503466553b.png",alt:"img"})),(0,r.kt)("p",null,"Setting up the game may take some time depending on the game. The progress is shown in the status display. Afterwards, you can start your game server and connect to it in the game!"),(0,r.kt)("h2",{id:"installation-of-a-voice-server"},"Installation of a voice server"),(0,r.kt)("p",null,"The installation of a ",(0,r.kt)("strong",{parentName:"p"},"Voiceserver (Teamspeak 3 Server)"),' is similar to the installation of a gameserver. You must first click on "Gameserver / TS3" again. In this section you will find the option ',(0,r.kt)("strong",{parentName:"p"},"Install voice server"),", which you can click to start the installation process for the Teamspeak 3 server."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61839701/165701625-b6443738-3b39-432e-a486-baedd6266bf6.png",alt:"img"})),(0,r.kt)("p",null,"In the next step, you have the option of specifying the desired settings for your Teamspeak 3 server, such as the IP address, the port and the number of available slots. Once you have entered all the necessary information, you can complete the installation by clicking on ",(0,r.kt)("strong",{parentName:"p"},"Install voice server now"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61839701/165702011-e54549cc-4d83-4e86-b732-da3751c7c5a4.png",alt:"img"})),(0,r.kt)("p",null,"Make sure that all the information is correct and meets your requirements. Once you have made all the settings, click on ",(0,r.kt)("strong",{parentName:"p"},"Install Teamspeak 3/5 Server now")," to start the installation process. You can now view and click on the installed Teamspeak 3 server in the ",(0,r.kt)("strong",{parentName:"p"},"Voiceserver Overview"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61839701/165702380-5169d23a-21d0-4d58-a538-ab7b65f76615.png",alt:null})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,r.kt)("strong",{parentName:"p"},"Caution"),": This is the instance on which the Teamspeak 3 server will be installed afterwards.")),(0,r.kt)("p",null,"You are now in the interface of the instance of your installed Teamspeak 3 server. You can now start the instance by clicking on the ",(0,r.kt)("strong",{parentName:"p"},"Start")," button."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61839701/165703148-bfc3c0ee-43aa-456d-86ed-89194a368bc8.png",alt:null})),(0,r.kt)("p",null,"You can now click on the menu item ",(0,r.kt)("strong",{parentName:"p"},"Virtual Servers"),'. All installed Teamspeak 3 servers on your instance are clearly listed in this area. To call up the interface of the respective Teamspeak 3 server, simply click on the "eye" symbol.'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61839701/165704968-0db2248f-9012-48c8-9005-320ea03d0b8b.png",alt:"img"})),(0,r.kt)("p",null,'In the Teamspeak 3 server interface, you will find all the necessary information and setting options to individually design and manage your server. For example, under the tab "Authorization key" you can create a token that grants you admin rights on your server. This gives you complete control over user administration and access to the server.'),(0,r.kt)("p",null,'Under the menu item "Settings" you have further options to customize your server. Here you can, for example, change the name of your server, set a password to restrict access, or store a personal welcome message that users receive when they enter the server.'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,r.kt)("strong",{parentName:"p"},"Note"),": There is no licence installed on the Teamspeak 3 server by default. This means that you can only use a Teamspeak 3 server with a capacity of 32 slots. However, if you would like to activate more capacity or additional functions for your Teamspeak 3 server, you can purchase a corresponding licence from Teamspeak.")))}m.isMDXComponent=!0}}]);