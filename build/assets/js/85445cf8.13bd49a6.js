"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5624],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8765:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={id:"dedicated_linux_debian",title:"Install Debian",description:"Information about installing Debian operating system on your dedicated server from ZAP-Hosting - ZAP-Hosting.com Documentation",sidebar_label:"Install Debian"},i=void 0,s={unversionedId:"dedicated_linux_debian",id:"dedicated_linux_debian",title:"Install Debian",description:"Information about installing Debian operating system on your dedicated server from ZAP-Hosting - ZAP-Hosting.com Documentation",source:"@site/docs/dedicated_linux_debian.md",sourceDirName:".",slug:"/dedicated_linux_debian",permalink:"/guides/docs/dedicated_linux_debian",draft:!1,editUrl:"https://github.com/zaphosting/docs/tree/master/docs/dedicated_linux_debian.md",tags:[],version:"current",frontMatter:{id:"dedicated_linux_debian",title:"Install Debian",description:"Information about installing Debian operating system on your dedicated server from ZAP-Hosting - ZAP-Hosting.com Documentation",sidebar_label:"Install Debian"}},l={},u=[{value:"Preparations",id:"preparations",level:2},{value:"The setup",id:"the-setup",level:2},{value:"Configurations",id:"configurations",level:3},{value:"Partitioning",id:"partitioning",level:3},{value:"Installation of the operating system",id:"installation-of-the-operating-system",level:3},{value:"Enable SSH Login",id:"enable-ssh-login",level:3}],c={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"preparations"},"Preparations"),(0,r.kt)("p",null,"In your ZAP interface, select the desired ISO of Debian and let the server boot with the ISO until it is in the setup process. Navigation in the setup process is done with TAB, Space and Enter."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"TAB = switch between items, Space = highlight, Enter = confirm")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"the-setup"},"The setup"),(0,r.kt)("p",null,"When the ISO is successfully loaded, the server is in the setup process."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173874-c0b29b7a-2581-466e-8829-9fd400ab43ed.png",alt:"image"})),(0,r.kt)("p",null,'In this example, we will go through the installation process using the "classic" install.'),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173878-41be0dca-ab9a-4b0f-97d0-7e9d2dadf46f.png",alt:"image"})),(0,r.kt)("p",null,"Select your desired language in which the installation wizard will be displayed.\nKeep in mind that this language will later affect the installed system in the end."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173881-27f6cfa0-3ad0-4a15-b4ad-9cd5eab0cc9c.png",alt:"image"})),(0,r.kt)("p",null,'Our desired location is not in the first selection page, so we go to the next page with "Other".'),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173886-6836fe51-e9d7-4fad-a9b7-86fcd6541747.png",alt:"image"})),(0,r.kt)("p",null,'In our example we select the "Europe" option.'),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173890-5c171366-8228-4374-8f38-fa4b01f6f933.png",alt:"image"})),(0,r.kt)("p",null,"Depending on the desired time zone, we choose the german time zone in this example."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173897-a32f2217-fc89-4951-96d6-ffd28ad3625d.png",alt:"image"})),(0,r.kt)("p",null,"We choose United States as locale."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173903-7785630e-7fd6-4eb6-b505-3aa73158af42.png",alt:"image"})),(0,r.kt)("p",null,"In our case we choose the German keyboard layout which is the QWERTZ layout.\nIf you're from America the default layout would by QWERTY"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Your server is now preparing some components which are necessary for the installation, this can take a few minutes.")),(0,r.kt)("h3",{id:"configurations"},"Configurations"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173907-17d2a4f8-35ce-42fc-a22e-2b0d60079e81.png",alt:"image"})),(0,r.kt)("p",null,"Your server configures its network interface automatically by using dhcp.\nSelect ",(0,r.kt)("inlineCode",{parentName:"p"},"eno1")," this is the default network adapter of your ZAP Dedicated Server."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173909-e0d2de0e-f333-4972-9809-6832de905ca9.png",alt:"image"})),(0,r.kt)("p",null,"The hostname can be modified if you'd like to, but does not need to be changed."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173917-f581618c-c92c-4f56-837f-8156dc7e0ba7.png",alt:"image"})),(0,r.kt)("p",null,"The domain name does not have to be changed either."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173920-28980d2d-3570-4ea5-a59e-0f3d483049a8.png",alt:"image"})),(0,r.kt)("p",null,'Here you have to set the password for your "root" account, make a note of the chosen password.'),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173927-8bda11e6-2a99-4299-96b6-a3796cda206b.png",alt:"image"})),(0,r.kt)("p",null,"To confirm the password you have to enter it again."),(0,r.kt)("hr",null),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The installation wizard asks you to create a second user account")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173939-526bddc4-ef8c-4747-a852-e673dff89a16.png",alt:"image"})),(0,r.kt)("p",null,"Now enter the name of the owner for a normal user account, you can of course freely choose what you'd like to enter here."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'You can of course use the "root" account in the end')),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173944-ef487bd3-9a35-40ef-a727-a178fd521483.png",alt:"image"})),(0,r.kt)("p",null,"Now enter the username of the account.\nAlso choose a password of your choice and confirm it again."),(0,r.kt)("p",null,"Your server will now prepare the next installation steps."),(0,r.kt)("h3",{id:"partitioning"},"Partitioning"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173949-e58c9c27-9dc5-4018-8334-085f52cdc9ae.png",alt:"image"})),(0,r.kt)("p",null,'You have now the possibility to create partitions or alternatively to use the whole ssd as 1 partition.\nIf you don\'t want to change anything on the partition just choose "Guided - Use entire disk".'),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173953-8db5f379-76c1-4e3f-9aac-6f80e2907763.png",alt:"image"})),(0,r.kt)("p",null,"Select the ssd which is installed in your server."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173955-e77b0c0c-9453-4482-8ad8-9350b9229aca.png",alt:"image"})),(0,r.kt)("p",null,"Basically it is fine if the complete structure is stored on one partition."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173956-62d59a31-3d9a-4343-8839-9356f5d39e9f.png",alt:"image"})),(0,r.kt)("p",null,'We confirm the configuration with "Finish partitioning and write changes to disk".'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'If there are old partitions on your ssd we confirm the overwrite with "Yes".')),(0,r.kt)("p",null,"Your server now performs the partitioning and prepares the installation of the system."),(0,r.kt)("h3",{id:"installation-of-the-operating-system"},"Installation of the operating system"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173960-6290e5b5-2205-4d48-a5fc-54ce108d53e7.png",alt:"image"})),(0,r.kt)("p",null,"If you want to include other installation media, for example for certain packages, this could be done now.\nNormally, however, you can download all packages conveniently afterwards via the package manager (apt)."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173968-fb24e35e-96c5-49a2-b856-799c5ce482fb.png",alt:"image"})),(0,r.kt)("p",null,"Our dedicated server is located in Germany, so we also choose the german mirror location to achieve the best possible download rates."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173970-8905935e-9fd0-4c9e-98b9-c32da48ac228.png",alt:"image"})),(0,r.kt)("p",null,"Basically we recommend to use the default Debian repository."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173979-5d4169d3-f516-4bfe-8f9f-dab51eabf18b.png",alt:"image"})),(0,r.kt)("p",null,"If you'd like to use a HTTP proxy, you could enter the data. (this is not required)"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173982-e24e6f85-fb01-4823-9b39-3bfa364b97f3.png",alt:"image"})),(0,r.kt)("p",null,"The system wants to collect anonymized statistics, this can be refused or confirmed."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173987-38512558-c08f-4437-8468-e033d0af83f9.png",alt:"image"})),(0,r.kt)("p",null,"Now select the packages you want to install:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Debian desktop enviroment\nWould create a graphical user interface on your server, but in this example we only use the shell level of the server.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"SSH server\nIs needed to connect to PuTTY for example.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"standard system utilities\nIs needed to provide a number of basic packages."))),(0,r.kt)("p",null,"The selection of the different packages is done by TAB and arrow keys. Packages are selected or deselected with the space bar.\nWhen you are satisfied with your selection press TAB until you reach Continue and confirm with Enter."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173990-605c4f25-3480-43d1-89e3-dad3dedd01a5.png",alt:"image"})),(0,r.kt)("p",null,"Confirm that this operating system is the only one on the current server with ",(0,r.kt)("inlineCode",{parentName:"p"},"Yes"),"."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173991-197f8295-2441-49b0-b411-1247a6071112.png",alt:"image"})),(0,r.kt)("p",null,"As storage location we choose the default location on our ssd."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83c\udf89 The installation of your Debian system is now finished.")),(0,r.kt)("p",null,'Open "Virtual Media" in your iLO and press "Eject Media" to remove the ISO from the system.'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173993-37b4c6a4-45f7-486a-b1e8-06adbff7c072.png",alt:"image"})),(0,r.kt)("p",null,"When this is done successfully, we select Continue, the server will now perform a reboot."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173996-5278b311-c648-4bfc-a7b6-cbc4f3e7c5bb.png",alt:"image"})),(0,r.kt)("h3",{id:"enable-ssh-login"},"Enable SSH Login"),(0,r.kt)("p",null,"Once the reboot of your server is done and the installation was successful, you will now be prompted to login."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173998-1c28db47-6839-4b39-8532-718c503708fe.png",alt:"image"})),(0,r.kt)("p",null,"Of course you also want to be able to manage your server through SSH i.e. PuTTY for example, so we still need to enable the login for that:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159173999-9251e54d-a858-4f4e-95c6-0a5c988dc36a.png",alt:"image"})),(0,r.kt)("p",null,"Open with nano the configuration file of your SSH service ",(0,r.kt)("inlineCode",{parentName:"p"},"nano /etc/ssh/sshd_config"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159174006-2fdac4ee-ffee-41e4-b9ea-d485601b9217.png",alt:"image"})),(0,r.kt)("p",null,"Search for ",(0,r.kt)("inlineCode",{parentName:"p"},"#PermitRootLogin no")," and change it to ",(0,r.kt)("inlineCode",{parentName:"p"},"PermitRootLogin yes"),"."),(0,r.kt)("p",null,"Now press ",(0,r.kt)("inlineCode",{parentName:"p"},"STRG + X")," and confirm your changes with ",(0,r.kt)("inlineCode",{parentName:"p"},"Y"),"."),(0,r.kt)("p",null,"After that you have to restart the SSH service, by typing ",(0,r.kt)("inlineCode",{parentName:"p"},"service ssh restart"),"."),(0,r.kt)("p",null,"Your SSH login is now active and you can connect via PuTTY for example.\nEnter the IP address of your server, which you see in your zap dashboard and use the previously defined credentials."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13604413/159174010-4cf4901a-9481-45f9-b51a-6f07f53f050e.png",alt:"image"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f If you have any further questions or problems, our support is happy to assist you!")))}m.isMDXComponent=!0}}]);