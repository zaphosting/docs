"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7481],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(o),h=r,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||i;return o?n.createElement(m,a(a({ref:t},c),{},{components:o})):n.createElement(m,a({ref:t},c))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=o[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},4677:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=o(7462),r=(o(7294),o(3905));const i={id:"dedicated_iso",title:"Own ISO",description:"Information on how to install your own ISO file on your dedicated server from ZAP-Hosting - ZAP-Hosting.com Documentation",sidebar_label:"Own ISO"},a=void 0,l={unversionedId:"dedicated_iso",id:"dedicated_iso",title:"Own ISO",description:"Information on how to install your own ISO file on your dedicated server from ZAP-Hosting - ZAP-Hosting.com Documentation",source:"@site/docs/dedicated_iso.md",sourceDirName:".",slug:"/dedicated_iso",permalink:"/guides/docs/dedicated_iso",draft:!1,editUrl:"https://github.com/zaphosting/docs/tree/master/docs/dedicated_iso.md",tags:[],version:"current",frontMatter:{id:"dedicated_iso",title:"Own ISO",description:"Information on how to install your own ISO file on your dedicated server from ZAP-Hosting - ZAP-Hosting.com Documentation",sidebar_label:"Own ISO"},sidebar:"dedicatedserverSidebar",previous:{title:"iLO",permalink:"/guides/docs/dedicated_ilo"},next:{title:"RAID Configuration",permalink:"/guides/docs/dedicated_raid"}},s={},u=[{value:"Which options are there?",id:"which-options-are-there",level:2},{value:"Mounting through the iLO",id:"mounting-through-the-ilo",level:3},{value:"Mounting through a remote console",id:"mounting-through-a-remote-console",level:3}],c={toc:u},d="wrapper";function p(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f Mounting your own ISO-file is on your own risk.")),(0,r.kt)("h2",{id:"which-options-are-there"},"Which options are there?"),(0,r.kt)("p",null,"There are two ways to mount your own iso file. Its always necessary to restart the server, to load the file.\nThere are in general no restrictions on mounting a file, its important that the iso is bootable."),(0,r.kt)("h3",{id:"mounting-through-the-ilo"},"Mounting through the iLO"),(0,r.kt)("p",null,'Open your iLO Management Interface and open "Virtual" Media\n',(0,r.kt)("img",{parentName:"p",src:"https://screensaver01.zap-hosting.com/index.php/s/myWMSi3GgyLBHXR/preview",alt:null})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fill in your url which points to the iso file, you'd like to use. Be sure that the link ends with .iso"),(0,r.kt)("li",{parentName:"ul"},'Press now "Insert Media"'),(0,r.kt)("li",{parentName:"ul"},'Click on "Server Reset" which will cause that your system performs a reboot.')),(0,r.kt)("p",null,"Your iso-file will now be loaded."),(0,r.kt)("h3",{id:"mounting-through-a-remote-console"},"Mounting through a remote console"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"HTML5 Console"),"\nYou can easily mount the file itself, in the remote console itself:\n",(0,r.kt)("img",{parentName:"p",src:"https://screensaver01.zap-hosting.com/index.php/s/x4EDgLZ3e3B6MMC/preview",alt:null})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Press on the disc symbol"),(0,r.kt)("li",{parentName:"ul"},'Choose "CD/DVD"'),(0,r.kt)("li",{parentName:"ul"},'Choose bwetween "Scripted media URL" or "Local .iso file"')),(0,r.kt)("p",null,'The difference between "Scripted media URL" and "Local .iso file" is that you can mount a iso file which is uploaded to a server/webspace or directly choose with "Local *.iso file" a file from your computer, without uploading it somewhere.'),(0,r.kt)("p",null,"When you choosed your iso file, its required to reboot the server."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Java Console"),"\nAs on the HTML5 console, the iso file is also directly mounted in the application itself.\n",(0,r.kt)("img",{parentName:"p",src:"https://screensaver01.zap-hosting.com/index.php/s/2CdR5d5AcsG7YdH/preview",alt:null})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Open "Virtual Drives"')),(0,r.kt)("p",null,'The difference between "Image File CD/DVD-ROM" and "URL CD/DVD-ROM" is that you can mount a iso file which is uploaded to a server/webspace or directly choose with "Image File CD/DVD-ROM" a file from your computer, without uploading it somewhere.'),(0,r.kt)("p",null,"When you have injected your desired iso file a server reboot is required."))}p.isMDXComponent=!0}}]);