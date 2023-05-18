"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6614],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4884:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={id:"fivem_installels",title:"Installing ELS on your server",description:"Information on how to install ELS on your FiveM server from ZAP-Hosting - ZAP-Hosting.com documentation",sidebar_label:"Install ELS"},i=void 0,l={unversionedId:"fivem_installels",id:"fivem_installels",title:"Installing ELS on your server",description:"Information on how to install ELS on your FiveM server from ZAP-Hosting - ZAP-Hosting.com documentation",source:"@site/docs/fivem_installels.md",sourceDirName:".",slug:"/fivem_installels",permalink:"/guides/docs/fivem_installels",draft:!1,editUrl:"https://github.com/zaphosting/docs/tree/master/docs/fivem_installels.md",tags:[],version:"current",frontMatter:{id:"fivem_installels",title:"Installing ELS on your server",description:"Information on how to install ELS on your FiveM server from ZAP-Hosting - ZAP-Hosting.com documentation",sidebar_label:"Install ELS"},sidebar:"gameserverSidebar",previous:{title:"Loadingscreen installation",permalink:"/guides/docs/fivem_changeloadingscreen"},next:{title:"Install EUP",permalink:"/guides/docs/fivem_installeup"}},s={},u=[{value:"Connect to FTP",id:"connect-to-ftp",level:2},{value:"Preparation",id:"preparation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Upload Resource",id:"upload-resource",level:2},{value:"Carmods Configuration",id:"carmods-configuration",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"connect-to-ftp"},"Connect to FTP"),(0,o.kt)("p",null,"In order to be able to install the resource, the ",(0,o.kt)("a",{parentName:"p",href:"/guides/docs/gameserver_ftpaccess"},"FTP access")," needs to be configured."),(0,o.kt)("h2",{id:"preparation"},"Preparation"),(0,o.kt)("p",null,"First of all we download the latest ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/MrDaGree/ELS-FiveM/releases/latest"},"ELS-FiveM Version"),', which can be found under "Assets"'),(0,o.kt)("p",null,'Once we have downloaded ELS, unzip the file and open the "ELS-FiveM" folder.'),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"Now we configure ELS-FiveM by making a copy of the ",(0,o.kt)("inlineCode",{parentName:"p"},"vcf.default.lua"),", and rename it to ",(0,o.kt)("inlineCode",{parentName:"p"},"vcf.lua"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: The old ",(0,o.kt)("inlineCode",{parentName:"p"},"vcf.default.lua")," should not be deleted.")),(0,o.kt)("p",null,'Further settings can also be adjusted in the "config.lua", but we will leave them as default.'),(0,o.kt)("h2",{id:"upload-resource"},"Upload Resource"),(0,o.kt)("p",null,'You can install ELS-FiveM by uploading the files via drag & drop into the "resources" folder.'),(0,o.kt)("p",null,"Once uploaded, you need to open the server.cfg in the server-data folder:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159167045-d0e3d23b-9fd9-4bf8-a7ef-eb018b71b11d.png",alt:"image"})),(0,o.kt)("p",null,"Among the remaining start entries for resources the entry for ELS-FiveM can now be added."),(0,o.kt)("p",null,"Afterwards the server can be restarted and ELS-FiveM is available in game!"),(0,o.kt)("h2",{id:"carmods-configuration"},"Carmods Configuration"),(0,o.kt)("p",null,"To add new carmods to ELS-FiveM we first need the ELS-Config which you can often find in the folder of the downloaded carmod. Usually it is called ",(0,o.kt)("inlineCode",{parentName:"p"},"autoname.xml"),", in our case it is ",(0,o.kt)("inlineCode",{parentName:"p"},"scpdvic.xml"),"."),(0,o.kt)("p",null,'Upload them into the "vcf" folder of our ELS-FiveM folder via FTP.'),(0,o.kt)("p",null,"Now that the file has been uploaded, we open the 'vcf.lua' file in the ELS-FiveM folder."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Make sure that the previous line always ends with a comma.")),(0,o.kt)("p",null,"Done! Our Carmod should be ELS enabled and functional after a restart of the server."))}p.isMDXComponent=!0}}]);