"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8040],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=o.createContext({}),d=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=d(e.components);return o.createElement(s.Provider,{value:r},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},m=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(t),m=n,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||a;return t?o.createElement(f,l(l({ref:r},c),{},{components:t})):o.createElement(f,l({ref:r},c))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,l=new Array(a);l[0]=m;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var d=2;d<a;d++)l[d]=t[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9867:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=t(7462),n=(t(7294),t(3905));const a={id:"minecraft_worlds",title:"Server Manage worlds",description:"Information on how to manage multiple worlds on your Minecraft server from ZAP-Hosting - ZAP-Hosting.com documentation",sidebar_label:"Manage Worlds"},l=void 0,i={unversionedId:"minecraft_worlds",id:"minecraft_worlds",title:"Server Manage worlds",description:"Information on how to manage multiple worlds on your Minecraft server from ZAP-Hosting - ZAP-Hosting.com documentation",source:"@site/docs/minecraft_worlds.md",sourceDirName:".",slug:"/minecraft_worlds",permalink:"/guides/docs/minecraft_worlds",draft:!1,editUrl:"https://github.com/zaphosting/docs/tree/master/docs/minecraft_worlds.md",tags:[],version:"current",frontMatter:{id:"minecraft_worlds",title:"Server Manage worlds",description:"Information on how to manage multiple worlds on your Minecraft server from ZAP-Hosting - ZAP-Hosting.com documentation",sidebar_label:"Manage Worlds"},sidebar:"gameserverSidebar",previous:{title:"Add your own world",permalink:"/guides/docs/minecraft_add_own_world"},next:{title:"Behavior/Resource Packs Installation",permalink:"/guides/docs/minecraftbedrock_behaviorresourcepacks"}},s={},d=[{value:"Connecting to FTP",id:"connecting-to-ftp",level:2},{value:"Spigot/PaperMC/Bukkit Special Features",id:"spigotpapermcbukkit-special-features",level:2},{value:"Recreate the World",id:"recreate-the-world",level:2},{value:"Replace the World",id:"replace-the-world",level:2},{value:"Secure the World",id:"secure-the-world",level:2}],c={toc:d},u="wrapper";function p(e){let{components:r,...t}=e;return(0,n.kt)(u,(0,o.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Click here to get to our Minecraft servers: ",(0,n.kt)("a",{parentName:"p",href:"https://zap-hosting.com/en/minecraft-server-hosting/"},"Minecraft server hosting")),(0,n.kt)("h2",{id:"connecting-to-ftp"},"Connecting to FTP"),(0,n.kt)("p",null,"You can manage your world with a program like FileZilla Client or WinSCP. In our example we use FileZilla.\nPlease reference the guide ",(0,n.kt)("a",{parentName:"p",href:"/guides/docs/gameserver_ftpaccess"},"FTP-Access")," for connecting via FTP. "),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/26007280/189978953-f3937aeb-0d8d-4d49-8299-af11392556be.png",alt:"image"})),(0,n.kt)("p",null,'The folder "world" is the standard folder. The name of this is set in the server.properties file. This file is where the "world" folder is located. The value can be changed by editing the line "level-name". If a name is entered that does not exist as a folder, a new world is generated.'),(0,n.kt)("h2",{id:"spigotpapermcbukkit-special-features"},"Spigot/PaperMC/Bukkit Special Features"),(0,n.kt)("p",null,'There is a special feature at Spigot, PaperMC & Bukkit. Unlike Vanilla Minecraft, the two dimensions "Nether" and "The End" have their own folder. So if you want to completely recreate your world, you have to remove the two dimension folders as well. In addition, you can always replace "WorldName" with the name of your world. These are:'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"WorldName_nether\n")),(0,n.kt)("p",null,"and"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"WorldName_the_end\n")),(0,n.kt)("p",null,"If errors occur in Nether or End when importing your own world, you can move them manually into their correct folder. First delete the content of WorldName_nether\\ and WorldName_the_end\\"),(0,n.kt)("p",null,"Now move all files from these folders to the new folders."),(0,n.kt)("p",null,"Nether:"),(0,n.kt)("p",null,"WorldName\\Dim-1\\ -> WorldName_nether\\Dim-1\\"),(0,n.kt)("p",null,"The End:"),(0,n.kt)("p",null,"WorldName\\Dim1\\  ->WorldName_the_end\\Dim1\\"),(0,n.kt)("p",null,"Afterwards these should be loaded correctly."),(0,n.kt)("h2",{id:"recreate-the-world"},"Recreate the World"),(0,n.kt)("p",null,'Shut down your server and connect via FTP. Now just delete the world folder or rename it. If you want to make settings like the seed at the same time, you can do this in the "server.properties". These are applied after starting. Now start your server. You should now have a fresh world.'),(0,n.kt)("h2",{id:"replace-the-world"},"Replace the World"),(0,n.kt)("p",null,"Shut down your server and connect via FTP. Now simply delete the old world folder or rename it. Now simply upload your existing world, open the server.properties and enter the name of the world there. Now start your server. You should see your world now."),(0,n.kt)("h2",{id:"secure-the-world"},"Secure the World"),(0,n.kt)("p",null,"Shut down your server and connect via FTP. Backing up is very easy, just download your worlds folder. Your entire inventory is stored in your world folder, plus of course everything you have built."))}p.isMDXComponent=!0}}]);