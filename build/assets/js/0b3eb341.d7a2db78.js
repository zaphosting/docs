"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7872],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=l(n),p=r,g=d["".concat(c,".").concat(p)]||d[p]||u[p]||a;return n?o.createElement(g,i(i({ref:t},m),{},{components:n})):o.createElement(g,i({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1019:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const a={id:"scp_becomeadmin",title:"Become an admin on your own server",description:"Information on how to become an admin on your SCP server from ZAP-Hosting.com - ZAP-Hosting.com documentation",sidebar_label:"Become Admin"},i=void 0,s={unversionedId:"scp_becomeadmin",id:"scp_becomeadmin",title:"Become an admin on your own server",description:"Information on how to become an admin on your SCP server from ZAP-Hosting.com - ZAP-Hosting.com documentation",source:"@site/docs/scp_becomeadmin.md",sourceDirName:".",slug:"/scp_becomeadmin",permalink:"/guides/docs/scp_becomeadmin",draft:!1,editUrl:"https://github.com/zaphosting/docs/tree/master/docs/scp_becomeadmin.md",tags:[],version:"current",frontMatter:{id:"scp_becomeadmin",title:"Become an admin on your own server",description:"Information on how to become an admin on your SCP server from ZAP-Hosting.com - ZAP-Hosting.com documentation",sidebar_label:"Become Admin"},sidebar:"gameserverSidebar",previous:{title:"Connect to the server",permalink:"/guides/docs/scp_firststeps_connect"},next:{title:"Add new roles",permalink:"/guides/docs/scp_newroles"}},c={},l=[{value:"Configuration for the Remote Admin Config",id:"configuration-for-the-remote-admin-config",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Add Admins",id:"add-admins",level:2},{value:"Add More Roles to Override the Password",id:"add-more-roles-to-override-the-password",level:2}],m={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NOTICE: Since recent SCP Updates, the password login is no longer functional. Please use the following guide to add your roles directly by the steamid. ")),(0,r.kt)("h2",{id:"configuration-for-the-remote-admin-config"},"Configuration for the Remote Admin Config"),(0,r.kt)("h3",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"Firstly, you would need to locate your Steam64ID.\nYou can use the following tool: ",(0,r.kt)("a",{parentName:"p",href:"https://steamid.io/lookup"},"SteamID Lookup"),".\nThe ID will later be entered in the configuration file."),(0,r.kt)("p",null,"Here you can find an example of how you can get your steamid by inputting your profile link there:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/26007280/189888449-eda43870-464c-416e-b3ae-b373b71cc6a0.png",alt:"image"})),(0,r.kt)("h2",{id:"add-admins"},"Add Admins"),(0,r.kt)("p",null,'Now the configuration file has to be opened and edited.\nThis is located in "',(0,r.kt)("strong",{parentName:"p"},"Configs"),'" under "',(0,r.kt)("strong",{parentName:"p"},"Settings"),'".'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/17176877/220733319-e8b81ed6-e9be-449a-a587-0f8ea8064333.png",alt:"image"})),(0,r.kt)("p",null,'There the "',(0,r.kt)("strong",{parentName:"p"},"config_remoteadmin.txt"),'" can be opened in which the necessary lines are rewritten.'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/17176877/220733567-ae418389-f538-4d54-83eb-f52e5d09ac87.png",alt:"image"})),(0,r.kt)("p",null,'The roles are now created and assigned there.\nIn this, "',(0,r.kt)("strong",{parentName:"p"},"SomeSteamId64"),'" which stands in front of "',(0,r.kt)("strong",{parentName:"p"},"@steam: owner"),'" must be replaced with your SteamID64, which you have previously viewed under "',(0,r.kt)("strong",{parentName:"p"},"steamid lookup"),'"'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159181591-fe0fb375-db67-45a6-8790-1a497e81c69b.png",alt:"image"})),(0,r.kt)("p",null,'This can now be done for every additional user who should receive rights.\nIn our example we set rights for three users, one of them gets "',(0,r.kt)("strong",{parentName:"p"},"owner"),'" the other two get "',(0,r.kt)("strong",{parentName:"p"},"admin"),'".'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159181666-fd68aac0-2c42-470c-b0c2-b1448d67a2cd.png",alt:"image"})),(0,r.kt)("h2",{id:"add-more-roles-to-override-the-password"},"Add More Roles to Override the Password"),(0,r.kt)("p",null,'If you have multiple roles you want to override the remote admin password, you can simply adjust the following line in the following file:\n"',(0,r.kt)("strong",{parentName:"p"},"config_remoteadmin.txt")),(0,r.kt)("p",null,"Find exactly the following section: "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/26007280/189888482-6a066272-bf6d-4741-a73b-447d020015e8.png",alt:"image"})),(0,r.kt)("p",null,"To add more roles, you simply write your desired roles with a comma.\nFor example, to add admin and moderator to override the password:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/26007280/189888498-75842a1c-848b-4169-a468-270a32edccf9.png",alt:"image"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'Hint: To open the remote admin console ingame, once you are logged into the server, you would use the "',(0,r.kt)("strong",{parentName:"p"},"M"),'" key. ')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If the server is running, you will have to restart the server for it to take affect. Or if the server is offline, simply turn the server on and then check the Remote Admin Console ingame.")))}u.isMDXComponent=!0}}]);