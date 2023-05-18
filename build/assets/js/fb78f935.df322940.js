"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8595],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=l(n),h=a,m=c["".concat(u,".").concat(h)]||c[h]||d[h]||o;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1107:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={id:"vserver_linux_sshkey",title:"VPS Generating and using SSH keys for Linux servers",description:"Information on how to generate an SSH key for your Linux VPS from ZAP-Hosting and how to use the key - ZAP-Hosting.com documentation",sidebar_label:"SSH Key"},s=void 0,i={unversionedId:"vserver_linux_sshkey",id:"vserver_linux_sshkey",title:"VPS Generating and using SSH keys for Linux servers",description:"Information on how to generate an SSH key for your Linux VPS from ZAP-Hosting and how to use the key - ZAP-Hosting.com documentation",source:"@site/docs/vserver_linux_sshkey.md",sourceDirName:".",slug:"/vserver_linux_sshkey",permalink:"/guides/docs/vserver_linux_sshkey",draft:!1,editUrl:"https://github.com/zaphosting/docs/tree/master/docs/vserver_linux_sshkey.md",tags:[],version:"current",frontMatter:{id:"vserver_linux_sshkey",title:"VPS Generating and using SSH keys for Linux servers",description:"Information on how to generate an SSH key for your Linux VPS from ZAP-Hosting and how to use the key - ZAP-Hosting.com documentation",sidebar_label:"SSH Key"},sidebar:"vpsrootSidebar",previous:{title:"SFTP Connection",permalink:"/guides/docs/vserver_linux_sftp"},next:{title:"Two factor authentication",permalink:"/guides/docs/vserver_linux_ssh2fa"}},u={},l=[{value:"Generate SSH Key",id:"generate-ssh-key",level:2},{value:"OpenSSH to PuTTY Private Key with PuTTYGen",id:"openssh-to-putty-private-key-with-puttygen",level:2},{value:"SSH Key Connection",id:"ssh-key-connection",level:2},{value:"Deactivate Login with Password",id:"deactivate-login-with-password",level:2},{value:"Linux vServer",id:"linux-vserver",level:3},{value:"Linux Rootserver",id:"linux-rootserver",level:3}],p={toc:l},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"generate-ssh-key"},"Generate SSH Key"),(0,a.kt)("p",null,'For a connection that is much more secure, such as a conventional connection with the SSH password, the use of SSH keys is recommended. To do this, open the "',(0,a.kt)("strong",{parentName:"p"},"Access & Security"),"\" tab in the Linux server's dashboard. "),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61839701/166181261-4a367f8f-20a7-4752-b4ab-cd0fb0ddf7b1.png",alt:null})),(0,a.kt)("p",null,'In "',(0,a.kt)("strong",{parentName:"p"},"Access & Security"),'" you can now generate a key with the "',(0,a.kt)("strong",{parentName:"p"},"Generate SSH Key"),'" button.\nAs soon as this is pressed, a popup opens and a randomly generated key is downloaded directly to the PC.\nIn order for the key to be added to the server, the "',(0,a.kt)("strong",{parentName:"p"},"Add Key"),'" button must be clicked. '),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f In the case of Linux vServers, the key is added directly. In the case of Linux Root Servers, the server must be restarted in order for these changes to take effect.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61839701/166181285-f3784fb1-a98f-419c-ac96-6bb12769c36d.png",alt:null})),(0,a.kt)("p",null,'If further keys are required, the "',(0,a.kt)("strong",{parentName:"p"},"Generate Key"),'" button can be pressed in the same window.\nWith "',(0,a.kt)("strong",{parentName:"p"},"Key name"),'"  you can set a name for the key, which should be displayed in the ZAP hosting panel. This is recommended for a much better overview.'),(0,a.kt)("p",null,'If all the desired keys have been generated and added, they will now be displayed under "',(0,a.kt)("strong",{parentName:"p"},"Access & Security"),'".'),(0,a.kt)("p",null,"(",(0,a.kt)("a",{parentName:"p",href:"https://user-images.githubusercontent.com/61839701/166181301-02cce96d-d35b-4b97-9f43-7763215c14c4.png"},"https://user-images.githubusercontent.com/61839701/166181301-02cce96d-d35b-4b97-9f43-7763215c14c4.png"),")"),(0,a.kt)("p",null,'If you have your own public key, which you generated externally and not via our panel, you can integrate it by clicking on the "',(0,a.kt)("strong",{parentName:"p"},"+"),'" Icon. '),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61839701/166181311-f14553d3-c529-41a9-82da-e11eb0d9a422.png",alt:null})),(0,a.kt)("p",null,'An empty panel opens in which you can insert your own public key. The key is then added to the server by pushing the "',(0,a.kt)("strong",{parentName:"p"},"Add Key"),'" function and then displayed in our panel.'),(0,a.kt)("h2",{id:"openssh-to-putty-private-key-with-puttygen"},"OpenSSH to PuTTY Private Key with PuTTYGen"),(0,a.kt)("p",null,'The SSH keys created by our panel are in OpenSSH format. In order to be able to use these with PuTTY, these keys must first be converted to the PuTTY private key format. You can use the "',(0,a.kt)("strong",{parentName:"p"},"PuTTYGen"),'" Software that is automatically installed by PuTTY.'),(0,a.kt)("p",null,'The PuTTYGen application is located in the PuTTY root directory. By default, the PuTTY folder would be shown in the example picture at " ',(0,a.kt)("strong",{parentName:"p"},"C:>Program Files>PuTTY"),'"'),(0,a.kt)("p",null,'Start the PuTTYGen application and then click on "',(0,a.kt)("strong",{parentName:"p"},"File"),'" -> "',(0,a.kt)("strong",{parentName:"p"},"Load private key"),'"'),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61839701/166181325-506410ea-435d-492b-9e80-fe2fa933d511.png",alt:null})),(0,a.kt)("p",null,"Now the file generated by ZAP hosting must be opened. To do this, you have to go to the standard directory where all your downloads are stored."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,a.kt)("strong",{parentName:"p"},"Important:"),' Make sure that you have the filter set to "',(0,a.kt)("strong",{parentName:"p"},"ALL Files"),'" as shown in the picture , as the .pri file created by the system cannot be seen.')),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61839701/166181336-49fbc944-a26d-42d7-9ffa-799390c077f7.png",alt:null})),(0,a.kt)("p",null,'As soon as this has been loaded, you can now use the various fields to specify both comments and a password for the keys. In order to set the password, this desired password must be entered in both "',(0,a.kt)("strong",{parentName:"p"},"Key passphrase"),'" and "',(0,a.kt)("strong",{parentName:"p"},"Confirm passphrase"),'".\n',(0,a.kt)("em",{parentName:"p"},"Note:"),' You can also leave these fields blank and create the key without a password, but this would be a bit less secure and therefore not recommended. As soon as all desired entries have been set, a key compatible with PuTTY can be saved with the button "',(0,a.kt)("strong",{parentName:"p"},"Save private key"),'".'),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61839701/166181342-5fd9a614-402c-41ae-a617-bd35f16322a2.png",alt:null})),(0,a.kt)("p",null,"Name this .ppk file and save it so that it can be found again later."),(0,a.kt)("h2",{id:"ssh-key-connection"},"SSH Key Connection"),(0,a.kt)("p",null,'In order for the key to be used for the connections, it must first be linked with Putty. To do this, click "',(0,a.kt)("strong",{parentName:"p"},"SSH"),'" - "',(0,a.kt)("strong",{parentName:"p"},"Auth"),'" - "',(0,a.kt)("strong",{parentName:"p"},"Browse..."),'".'),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61839701/166181355-145ed0de-d6ff-4600-84bf-08982fde1456.png",alt:null})),(0,a.kt)("p",null,'Find the key you just created using PuTTYGen and push "',(0,a.kt)("strong",{parentName:"p"},"Open"),'".'),(0,a.kt)("p",null,"So that you don't have to repeat these steps for every connection, it would be recommended to save this in the session. To do this, click \"",(0,a.kt)("strong",{parentName:"p"},"Session"),'" - "',(0,a.kt)("strong",{parentName:"p"},"Default Settings"),'" - "',(0,a.kt)("strong",{parentName:"p"},"Save"),'", as can be seen in the screenshot.'),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61839701/166181372-b3ce1001-d5c0-4941-8c40-f0d9bffd9ad3.png",alt:null})),(0,a.kt)("p",null,'You can now log into the server with Putty. The "',(0,a.kt)("strong",{parentName:"p"},"Key comment"),'" entered in PuTTYGen can then be seen there.'),(0,a.kt)("h2",{id:"deactivate-login-with-password"},"Deactivate Login with Password"),(0,a.kt)("p",null,"The SSH keys were created to increase security. If the login with the SSH password is still possible, the security of the server has not yet changed. For this reason, the SSH login must now be deactivated via a password. There is a difference between Linux vServers and Linux root servers in how this login has to be deactivated. If the login for your server has been correctly deactivated, the connection is only possible for users with the SSH key you have created."),(0,a.kt)("h3",{id:"linux-vserver"},"Linux vServer"),(0,a.kt)("p",null,"You can disable the password login in the Access & Secuirty tab easily.\nPush the ",(0,a.kt)("strong",{parentName:"p"},"Deactive Password Login")," button next to the Generate SSH Key Button.\nOnce its deceactivated, its no longer possible to reach the server via password login. "),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61839701/166181386-9b50aa05-b299-4ec7-b611-adae68184b98.png",alt:null})),(0,a.kt)("p",null,'The display for "',(0,a.kt)("strong",{parentName:"p"},"SSH login via password"),'" would then also be set to "',(0,a.kt)("strong",{parentName:"p"},"Inactive"),'".'),(0,a.kt)("h3",{id:"linux-rootserver"},"Linux Rootserver"),(0,a.kt)("p",null,'Unfortunately, this function does not exist with Linux root servers; there it would have to be done manually via SSH. To do this, connect to the server via PuTTY and change the following file with a text editor of your choice. In our example we use "',(0,a.kt)("strong",{parentName:"p"},"nano"),'".'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nano /etc/ssh/sshd_config\n")),(0,a.kt)("p",null,'In this file, "',(0,a.kt)("strong",{parentName:"p"},"PasswordAuthentification"),'" must now be changed from "',(0,a.kt)("strong",{parentName:"p"},"yes"),'" to "',(0,a.kt)("strong",{parentName:"p"},"no"),'".\nIn addition, the hash (#) in front of "',(0,a.kt)("strong",{parentName:"p"},"PasswordAuthentification"),'" must be removed.'),(0,a.kt)("p",null,'If "',(0,a.kt)("strong",{parentName:"p"},"#PasswordAuthentification yes"),'" has been changed to "',(0,a.kt)("strong",{parentName:"p"},"PasswordAuthentification no"),'" you can close the file on Nano with "',(0,a.kt)("strong",{parentName:"p"},"CTRL"),'" + "',(0,a.kt)("strong",{parentName:"p"},"X"),'" and save the changes with "',(0,a.kt)("strong",{parentName:"p"},"Y"),'".'),(0,a.kt)("p",null,"The SSH service must then be restarted so that the changes are immediately active. Alternatively, these would only be active after a server restart."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"service sshd restart\n")))}d.isMDXComponent=!0}}]);