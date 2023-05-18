"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8548],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(t),m=o,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return t?r.createElement(h,i(i({ref:n},c),{},{components:t})):r.createElement(h,i({ref:n},c))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},662:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=t(7462),o=(t(7294),t(3905));const a={id:"unturned_becomeadmin",title:"Become a server admin",description:"Information on how to become an admin on your Unturned server from ZAP-Hosting - ZAP-Hosting.com documentation",sidebar_label:"Become Admin"},i=void 0,s={unversionedId:"unturned_becomeadmin",id:"unturned_becomeadmin",title:"Become a server admin",description:"Information on how to become an admin on your Unturned server from ZAP-Hosting - ZAP-Hosting.com documentation",source:"@site/docs/unturned_becomeadmin.md",sourceDirName:".",slug:"/unturned_becomeadmin",permalink:"/guides/docs/unturned_becomeadmin",draft:!1,editUrl:"https://github.com/zaphosting/docs/tree/master/docs/unturned_becomeadmin.md",tags:[],version:"current",frontMatter:{id:"unturned_becomeadmin",title:"Become a server admin",description:"Information on how to become an admin on your Unturned server from ZAP-Hosting - ZAP-Hosting.com documentation",sidebar_label:"Become Admin"},sidebar:"gameserverSidebar",previous:{title:"Install Mods",permalink:"/guides/docs/spaceengineers_addmods"},next:{title:"Workshop Content",permalink:"/guides/docs/unturned_workshop"}},l={},d=[{value:"Preparations",id:"preparations",level:2},{value:"Open Config Files",id:"open-config-files",level:2},{value:"Add Admins",id:"add-admins",level:2}],c={toc:d},p="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"preparations"},"Preparations"),(0,o.kt)("p",null,"In order to be able to add admins on a server, a config file must be edited. So that there are no problems applying the changes, please make sure that your server is stopped beforehand!"),(0,o.kt)("p",null,"In addition, the respective Steam ID (64) is required so that the server can also identify the player. This ",(0,o.kt)("a",{parentName:"p",href:"https://steamidfinder.com/"},"Tool")," can be used as an example.\nOnce on the side of the tool, the required information can usually be determined by entering the name."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://screensaver01.zap-hosting.com/index.php/s/72YkRLBXE77NJQ5/preview",alt:null})),(0,o.kt)("h2",{id:"open-config-files"},"Open Config Files"),(0,o.kt)("p",null,"There are two ways to edit the files on a server.\nOne would way would be possible using ",(0,o.kt)("a",{parentName:"p",href:"https://zap-hosting.com/guides/docs/en/gameserver_ftpaccess/"},"FTP"),"."),(0,o.kt)("p",null,'The other way would be using the Config Editor in the web interface itself.\nIn this case we use the built-in editor of the web interface. To do this, the menu item "Configs" must be opened in the left sidebar of the server under the "Settings" tab.\n',(0,o.kt)("img",{parentName:"p",src:"https://screensaver01.zap-hosting.com/index.php/s/x872MGFpMLbTBj2/preview",alt:null})),(0,o.kt)("p",null,'The system now loads all available configs and then lists them. A little patience is required here, this process usually takes a few seconds. As soon as all config files have been loaded, the "commands.dat" file must be edited. All you have to do is click on the blue button "Open file", whereupon the file is opened in the web editor.'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://screensaver01.zap-hosting.com/index.php/s/9mZyJKX6xCTeDeA/preview",alt:null})),(0,o.kt)("h2",{id:"add-admins"},"Add Admins"),(0,o.kt)("p",null,"Admin or owner can now be appointed in the config. Please note that the owner rank can only be assigned once!"),(0,o.kt)("p",null,"For this purpose, the following must be entered in a new line in the case for the assignment of the owner rank:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"owner Steam64IDReplacedHere //<-- Must be replaced with your own Steam64-ID")),(0,o.kt)("p",null,'For adding an Administrator, the "owner" is simply replaced by "admin".'),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"admin Steam64IDReplacedHere //<-- Must be replaced with your own Steam64-ID")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://screensaver01.zap-hosting.com/index.php/s/i6PpdsfK6spBECj/preview",alt:null})),(0,o.kt)("p",null,'After all ranks have been assigned in the config, the config can be saved with a click on "Save". The server can now be restarted and all players entered in the config receive their rank automatically.'))}u.isMDXComponent=!0}}]);