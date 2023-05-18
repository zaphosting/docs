"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6918],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),v=o,h=p["".concat(c,".").concat(v)]||p[v]||d[v]||i;return r?n.createElement(h,a(a({ref:t},u),{},{components:r})):n.createElement(h,a({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=v;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},9979:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const i={id:"vserver_linux_ftp",title:"FTP service does not work - Troubleshooting",description:"Information on how to fix FTP problems on your vServer from ZAP-Hosting - ZAP-Hosting.com documentation",sidebar_label:"FTP Service isn't working"},a=void 0,s={unversionedId:"vserver_linux_ftp",id:"vserver_linux_ftp",title:"FTP service does not work - Troubleshooting",description:"Information on how to fix FTP problems on your vServer from ZAP-Hosting - ZAP-Hosting.com documentation",source:"@site/docs/vserver_linux_ftp.md",sourceDirName:".",slug:"/vserver_linux_ftp",permalink:"/guides/docs/vserver_linux_ftp",draft:!1,editUrl:"https://github.com/zaphosting/docs/tree/master/docs/vserver_linux_ftp.md",tags:[],version:"current",frontMatter:{id:"vserver_linux_ftp",title:"FTP service does not work - Troubleshooting",description:"Information on how to fix FTP problems on your vServer from ZAP-Hosting - ZAP-Hosting.com documentation",sidebar_label:"FTP Service isn't working"},sidebar:"vpsrootSidebar",previous:{title:"GS/TS3 Interface",permalink:"/guides/docs/vserver_linux_gs_interface"},next:{title:"Add IPv4 Address",permalink:"/guides/docs/vserver_linux_add_ip"}},c={},l=[{value:"What can you do if the gameserver or teamspeak server is not accessible via FTP?",id:"what-can-you-do-if-the-gameserver-or-teamspeak-server-is-not-accessible-via-ftp",level:2},{value:"Check the FTP problem more closely:",id:"check-the-ftp-problem-more-closely",level:2},{value:"Check Availability",id:"check-availability",level:3},{value:"Check ProFTPD Status",id:"check-proftpd-status",level:3},{value:"Restart FTP Service",id:"restart-ftp-service",level:3},{value:"Check the connection again",id:"check-the-connection-again",level:3},{value:"Problem Solved",id:"problem-solved",level:3}],u={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-can-you-do-if-the-gameserver-or-teamspeak-server-is-not-accessible-via-ftp"},"What can you do if the gameserver or teamspeak server is not accessible via FTP?"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f Attention: The following steps only work on your own vServer/Root Server if the ZAP web interface has been installed!")),(0,o.kt)("p",null,"If the created server cannot be reached via FTP, the FTP service (ProFTPD) is not active in most cases. In rare cases this can also be due to an incorrect config or an occupied port, i.e. FTP port 21 is used / occupied by another program."),(0,o.kt)("h2",{id:"check-the-ftp-problem-more-closely"},"Check the FTP problem more closely:"),(0,o.kt)("h3",{id:"check-availability"},"Check Availability"),(0,o.kt)("p",null,'You can easily do this using the FTP browser in the web interface. Click on "FTP browser" in the menu under Tools of the respective server'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159172130-2649e590-639d-4b1b-a464-fb4956c52929.png",alt:"image"})),(0,o.kt)("p",null,'Then press the "Direct Connection" button once. '),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159172131-2a355b01-508f-4b8a-8e67-f011e48a1b30.png",alt:"image"})),(0,o.kt)("p",null,"Now you will probably see the following picture:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159172135-52ee9fe3-dc99-4f70-8331-253514e6a949.png",alt:"image"})),(0,o.kt)("p",null,"Since it is now clear that a connection via WebFTP or FTP tool is not possible, you have to take a closer look at the FTP service on the vServer or root server."),(0,o.kt)("h3",{id:"check-proftpd-status"},"Check ProFTPD Status"),(0,o.kt)("p",null,'To do this, you connect to your server via SSH / Console and then enter the command "service proftpd status". The status is now read out and displayed accordingly:'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159172148-c736c6ed-9cca-42f6-8766-8170011e9848.png",alt:"image"})),(0,o.kt)("p",null,'There you can see that the status reports "dead", in short the service is offline and therefore not accessible.'),(0,o.kt)("h3",{id:"restart-ftp-service"},"Restart FTP Service"),(0,o.kt)("p",null,"The FTP service can be restarted with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"service proftpd start\n")),(0,o.kt)("p",null,"If there is no response after the command has been executed, the service is usually online/available again."),(0,o.kt)("p",null,'The whole thing can then be verified again with the command "service proftpd status". It should look like this:'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159172153-f66bf3f5-6c56-45ed-b79e-04c645171c9d.png",alt:"image"})),(0,o.kt)("p",null,'Since the status is now "active" again and no longer "dead", the FTP connection can be tried again using the FTP tool and WebFTP.'),(0,o.kt)("h3",{id:"check-the-connection-again"},"Check the connection again"),(0,o.kt)("p",null,"You should now be able to establish a connection and view your data."),(0,o.kt)("h3",{id:"problem-solved"},"Problem Solved"),(0,o.kt)("p",null,"\u2705 The FTP service (ProFTPD) is now started/active again and nothing stands in the way of data exchange!"))}d.isMDXComponent=!0}}]);