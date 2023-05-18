"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9397],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(r),m=a,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2709:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const i={id:"vserver_windows_fs_19",title:"Install FarmingSimulator 2019 on Windows",description:"Information on how to install and set up a FarmingSimulator Dedicated Server 2019 on your Windows vServer and Dedicated Server from ZAP-Hosting - ZAP-Hosting.com Documentations",sidebar_label:"Farming-Simulator 2019"},o="Installing a dedicated server for Farming Simulator 2019",s={unversionedId:"vserver_windows_fs_19",id:"vserver_windows_fs_19",title:"Install FarmingSimulator 2019 on Windows",description:"Information on how to install and set up a FarmingSimulator Dedicated Server 2019 on your Windows vServer and Dedicated Server from ZAP-Hosting - ZAP-Hosting.com Documentations",source:"@site/docs/vserver_windows_fs_19.md",sourceDirName:".",slug:"/vserver_windows_fs_19",permalink:"/guides/docs/vserver_windows_fs_19",draft:!1,editUrl:"https://github.com/zaphosting/docs/tree/master/docs/vserver_windows_fs_19.md",tags:[],version:"current",frontMatter:{id:"vserver_windows_fs_19",title:"Install FarmingSimulator 2019 on Windows",description:"Information on how to install and set up a FarmingSimulator Dedicated Server 2019 on your Windows vServer and Dedicated Server from ZAP-Hosting - ZAP-Hosting.com Documentations",sidebar_label:"Farming-Simulator 2019"},sidebar:"vpsrootSidebar",previous:{title:"Satisfactory Dedicated Server Setup",permalink:"/guides/docs/vserver_windows_satisfactory"},next:{title:"Farming-Simulator 2022",permalink:"/guides/docs/vserver_windows_fs_22"}},l={},d=[{value:"Basic Information:",id:"basic-information",level:2},{value:"Step 1 Purchase digital license",id:"step-1-purchase-digital-license",level:2},{value:"Step 2 Download Farming Simulator directly to your Windows server",id:"step-2-download-farming-simulator-directly-to-your-windows-server",level:2},{value:"Step 3 Activation of the game and configuration of the dedicated server",id:"step-3-activation-of-the-game-and-configuration-of-the-dedicated-server",level:2},{value:"Step 4 Start Farming Simulator 2019 Dedicated Server",id:"step-4-start-farming-simulator-2019-dedicated-server",level:2},{value:"Step 5 Unlock ports in the firewall",id:"step-5-unlock-ports-in-the-firewall",level:2}],p={toc:d},c="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installing-a-dedicated-server-for-farming-simulator-2019"},"Installing a dedicated server for Farming Simulator 2019"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"These instructions are also valid for a Dedicated Server from ZAP-Hosting with Windows Server 2016/2019. How to install Windows on a Dedicated Server we explain ",(0,a.kt)("a",{parentName:"p",href:"https://zap-hosting.com/guides/docs/en/dedicated_windows/"},"here"),".")),(0,a.kt)("h2",{id:"basic-information"},"Basic Information:"),(0,a.kt)("p",null,"A server based on Windows Server 2016/2019 with at least 4x 2.4 GHz CPU (AMD/Intel) and at least 2GB RAM (DDR3/4) and 6GB free Disk (SSD or better, preferred) is required. The server must run on 64 bit architecture.\nFurthermore, an own GameLicense is required (no Steam version), as well as a public IPv4 address. A GPU or a sound card are not required for the Dedicated Server.\nDepending on how much the dedicated server is modded, extended with mods or DLCs, more resources may be required. "),(0,a.kt)("h2",{id:"step-1-purchase-digital-license"},"Step 1 Purchase digital license"),(0,a.kt)("p",null,"A digital version of FarmingSimulator 2019 is required, it can not be the Steam version.\nThe digital version can be purchased on the ",(0,a.kt)("a",{parentName:"p",href:"https://www.farming-simulator.com/buy-now.php?lang=de&country=de&platform=pcdigital"},"FarmingSimulator Webseite"),".\nAfter purchasing the digital version, FarmingSimulator can be downloaded online by following the link below ",(0,a.kt)("a",{parentName:"p",href:"https://eshop.giants-software.com/downloads.php"},"Link")," from the mail which you received from Giants."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Important: In the mail you will find the GameKey which is needed for the download as well as for the later activation of the installation. ")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://screensaver01.zap-hosting.com/index.php/s/bR9YqJ5xXFwaWky/preview",alt:null})),(0,a.kt)("h2",{id:"step-2-download-farming-simulator-directly-to-your-windows-server"},"Step 2 Download Farming Simulator directly to your Windows server"),(0,a.kt)("p",null,"Connect via ",(0,a.kt)("a",{parentName:"p",href:"https://zap-hosting.com/guides/docs/en/vserver_windows_userdp/"},"RDP")," to your Windows server. After you are connected, open the browser and go to the ",(0,a.kt)("a",{parentName:"p",href:"https://eshop.giants-software.com/downloads.php"},"link")," from the mail again. Then enter your GameKey and select the download for Windows8/10. "),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://screensaver01.zap-hosting.com/index.php/s/YaSo85pefHf5r5n/preview",alt:null})),(0,a.kt)("p",null,"The file will then be downloaded and should be located in the download directory. (The download directory can be different)"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://screensaver01.zap-hosting.com/index.php/s/2nPDeWB97FXoFer/preview",alt:null})),(0,a.kt)("p",null,"With a double click the file is opened and the Setup.exe can be executed.\nAfterwards one reads the TOS and confirms it. After that, the installation can be done as Standard or Custom, usually Standard is sufficient.\nFinally, click on install and FarmingSimulator 2019 will now be installed, this can take a few minutes. "),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://screensaver01.zap-hosting.com/index.php/s/agaffABodEkxrse/preview",alt:null})),(0,a.kt)("p",null,'As soon as the installation process is finished, the following message appears, which can be confirmed with "Finish". '),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://screensaver01.zap-hosting.com/index.php/s/48n27oNSxe2srRN/preview",alt:null})),(0,a.kt)("p",null,"The basic installation is now complete. "),(0,a.kt)("h2",{id:"step-3-activation-of-the-game-and-configuration-of-the-dedicated-server"},"Step 3 Activation of the game and configuration of the dedicated server"),(0,a.kt)("p",null,"Now the Farming Simulator must be started. There should be a shortcut on the desktop, if not, it can also be started via the Windows menu.\nErrors regarding a missing GPU or similar can be ignored or closed with No/Cancel. Farming Simulator only needs to be started to be able to enter the key. "),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://screensaver01.zap-hosting.com/index.php/s/CK6izaPpk7JLi67/preview",alt:null})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://screensaver01.zap-hosting.com/index.php/s/9Jc4oE3t43em4nf/preview",alt:null})),(0,a.kt)("p",null,"Once the key has been recognized, a confirmation will appear. "),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://screensaver01.zap-hosting.com/index.php/s/jPqAggmfjQjxgei/preview",alt:null})),(0,a.kt)("p",null,"Now a login name and password must be set or changed/read out in the Config of the Dedicated Server, so that a login to the web interface of the Dedicated Server is possible.\nThe Config is in the standard installation under\n",(0,a.kt)("inlineCode",{parentName:"p"},"C:\\Program Files (x86)\\Farming Simulator 2019")," to be found under the name ",(0,a.kt)("inlineCode",{parentName:"p"},'"dedicatedServer.xml"'),".\nThe login data can be freely customized. "),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://screensaver01.zap-hosting.com/index.php/s/wDcfAgymENcJ3Aa/preview",alt:null})),(0,a.kt)("h2",{id:"step-4-start-farming-simulator-2019-dedicated-server"},"Step 4 Start Farming Simulator 2019 Dedicated Server"),(0,a.kt)("p",null,"To start the dedicated server, ",(0,a.kt)("inlineCode",{parentName:"p"},'"dedicatedServer.exe"')," must be executed in the same directory where ",(0,a.kt)("inlineCode",{parentName:"p"},'"dedicatedServer.xml"')," is located."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://screensaver01.zap-hosting.com/index.php/s/5YGepFzoR9bHAcF/preview",alt:null})),(0,a.kt)("p",null,"Afterwards the web interface can be opened via ",(0,a.kt)("inlineCode",{parentName:"p"},"https://SERVER-IP:8080"),". "),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://screensaver01.zap-hosting.com/index.php/s/Dfz7c35dpzPS9NK/preview",alt:null})),(0,a.kt)("p",null,"The login is possible with the previously set/read login data from the ",(0,a.kt)("inlineCode",{parentName:"p"},'"dedicatedServer.xml"'),".\nThe further configuration is self-explanatory in the web interface and can be done with a few clicks, according to your personal wishes. "),(0,a.kt)("h2",{id:"step-5-unlock-ports-in-the-firewall"},"Step 5 Unlock ports in the firewall"),(0,a.kt)("p",null,"The server should of course be publicly accessible to play with friends. For this purpose, the ports of the server must be enabled in the Windows firewall. The ports 10823 and 8080 must be released for the protocol TCP. 10823 is the game server port and 8080 is the webport for the webinterface, the webport has to be released only if needed, an administration can still be done only locally on the Windows server via RDP.\nHow to enable ports on Windows, ",(0,a.kt)("a",{parentName:"p",href:"https://zap-hosting.com/guides/docs/en/vserver_windows_port/"},"we explain in this guide"),". "),(0,a.kt)("p",null,"After the port release the server is publicly accessible, if it was started."))}u.isMDXComponent=!0}}]);