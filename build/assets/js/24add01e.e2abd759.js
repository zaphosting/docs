"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8265],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return n?o.createElement(g,s(s({ref:t},c),{},{components:n})):o.createElement(g,s({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<r;u++)s[u]=n[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9050:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var o=n(7462),a=(n(7294),n(3905));const r={id:"vserver_linux_mastodon",title:"VPS Install Mastodon on server",description:"Information on how to set up Mastodon server on your VPS from ZAP-Hosting - ZAP-Hosting.com documentation",sidebar_label:"Mastodon"},s=void 0,i={unversionedId:"vserver_linux_mastodon",id:"vserver_linux_mastodon",title:"VPS Install Mastodon on server",description:"Information on how to set up Mastodon server on your VPS from ZAP-Hosting - ZAP-Hosting.com documentation",source:"@site/docs/vserver_linux_mastodon.md",sourceDirName:".",slug:"/vserver_linux_mastodon",permalink:"/guides/docs/vserver_linux_mastodon",draft:!1,editUrl:"https://github.com/zaphosting/docs/tree/master/docs/vserver_linux_mastodon.md",tags:[],version:"current",frontMatter:{id:"vserver_linux_mastodon",title:"VPS Install Mastodon on server",description:"Information on how to set up Mastodon server on your VPS from ZAP-Hosting - ZAP-Hosting.com documentation",sidebar_label:"Mastodon"}},l={},u=[{value:"What is Mastodon",id:"what-is-mastodon",level:2},{value:"System requirements",id:"system-requirements",level:2},{value:"Preparing your System",id:"preparing-your-system",level:2},{value:"Installing Ruby",id:"installing-ruby",level:2},{value:"Configuring PostgreSQL",id:"configuring-postgresql",level:2},{value:"Setting up Mastodon",id:"setting-up-mastodon",level:2},{value:"Configuring the Webserver",id:"configuring-the-webserver",level:2},{value:"Creating a mastodon service",id:"creating-a-mastodon-service",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-mastodon"},"What is Mastodon"),(0,a.kt)("p",null,"Mastodon is free and open-source software for running self-hosted social networking services."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32127408/207198152-fa6ca1e6-b845-4fd8-83d9-cc4a8fb91f9f.png",alt:"image"})),(0,a.kt)("p",null,"It has microblogging features similar to the Twitter service, which are offered by a large number of independently run nodes, known as instances,\neach with its own code of conduct, terms of service, privacy policy, privacy options, and moderation policies."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This guide focuses the installation on a Debian based Distro. Examples are Debian and Ubuntu. This guide differs depending on what OS you are using.")),(0,a.kt)("h2",{id:"system-requirements"},"System requirements"),(0,a.kt)("p",null,"If you want to setup a Mastodon Instance on your Server, you have to meet some requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Domain"),(0,a.kt)("li",{parentName:"ul"},"Linux based Server"),(0,a.kt)("li",{parentName:"ul"},"Email Server")),(0,a.kt)("h2",{id:"preparing-your-system"},"Preparing your System"),(0,a.kt)("p",null,"Its recommended, that you beforehand disable Password Login on SSH, as it is a security risk to use Password Login on Servers which are reachable from the Internet.\nYou can do this in your Servers Webinterface under Information -> Access & Security -> Deactivate Password Login\n",(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32127408/207198356-d36eeb4d-647c-4102-9d09-dcaebd8a29b5.png",alt:"image"}),"\nAfter that, update your packages by using the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"apt update && apt upgrade -y\n")),(0,a.kt)("p",null,"Next up you have to install mastodons dependencies:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# System Repositories\napt install -y curl wget gnupg apt-transport-https lsb-release ca-certificates\n# Node.JS\ncurl -sL https://deb.nodesource.com/setup_16.x | bash -\n# PostgreSQL\nwget -O /usr/share/keyrings/postgresql.asc https://www.postgresql.org/media/keys/ACCC4CF8.asc\necho "deb [signed-by=/usr/share/keyrings/postgresql.asc] http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/postgresql.list\n')),(0,a.kt)("p",null,"After we have installed the dependencies for Mastodon, we can install the necessary system Packages. We do that by simply using the following two commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"apt update\napt install -y \\\n  imagemagick ffmpeg libpq-dev libxml2-dev libxslt1-dev file git-core \\\n  g++ libprotobuf-dev protobuf-compiler pkg-config nodejs gcc autoconf \\\n  bison build-essential libssl-dev libyaml-dev libreadline6-dev \\\n  zlib1g-dev libncurses5-dev libffi-dev libgdbm-dev \\\n  nginx redis-server redis-tools postgresql postgresql-contrib \\\n  certbot python3-certbot-nginx libidn11-dev libicu-dev libjemalloc-dev\n")),(0,a.kt)("p",null,"Let the packages install, which may take some time. After that we have to configure yarn, which is a packagemanager for previously installed Node.JS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"corepack enable\nyarn set version stable\n")),(0,a.kt)("h2",{id:"installing-ruby"},"Installing Ruby"),(0,a.kt)("p",null,"We will create a different user, as it makes managing the Ruby versions much easier. First you have to create a User called mastodon, whose Login is disabled. Next you switch into the mastodon user. You can do this by running the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# You can just leave the fields empty\nadduser --disabled-login mastodon\nsu - mastodon\n")),(0,a.kt)("p",null,"Now we install the Ruby Manager ",(0,a.kt)("inlineCode",{parentName:"p"},"rbenv"),", as it makes managing ruby versions much easier. You can install it by using the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/rbenv/rbenv.git ~/.rbenv\ncd ~/.rbenv && src/configure && make -C src\necho 'export PATH=\"$HOME/.rbenv/bin:$PATH\"' >> ~/.bashrc\necho 'eval \"$(rbenv init -)\"' >> ~/.bashrc\nexec bash\ngit clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build\n")),(0,a.kt)("p",null,"After you're done running through this series of commands, you can install Ruby by using the following command. We also will install bundler in this step. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"RUBY_CONFIGURE_OPTS=--with-jemalloc rbenv install 3.0.3\nrbenv global 3.0.3\ngem install bundler --no-document\n")),(0,a.kt)("p",null,"This may take some time, so be patient and get a tea or a coffee int the time you wait. After that we are done setting up, we can switch back to the root user by just using the command ",(0,a.kt)("inlineCode",{parentName:"p"},"exit")),(0,a.kt)("h2",{id:"configuring-postgresql"},"Configuring PostgreSQL"),(0,a.kt)("p",null,"Mastodon uses PostegrSQL as its database system. Configuration is done easily by using the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u postgres psql\n")),(0,a.kt)("p",null,"Inside the PostgreSQL Prompt, enter the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER mastodon CREATEDB;\n\\q\n")),(0,a.kt)("h2",{id:"setting-up-mastodon"},"Setting up Mastodon"),(0,a.kt)("p",null,"Now we have to switch into the mastodon user once again:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"su - mastodon\n")),(0,a.kt)("p",null,"Now we use git to download the most recent version of mastodon, using the following two commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/tootsuite/mastodon.git live && cd live\ngit checkout $(git tag -l | grep -v 'rc[0-9]*$' | sort -V | tail -n 1)\n")),(0,a.kt)("p",null,"Next, we have to install some more and the last Dependencies for Ruby and Javascript. Do this by using this commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"bundle config deployment 'true'\nbundle config without 'development test'\nbundle install -j$(getconf _NPROCESSORS_ONLN)\nyarn install --pure-lockfile\n")),(0,a.kt)("p",null,"Next create your mastodon configuration file by using the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"RAILS_ENV=production bundle exec rake mastodon:setup\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If your Database Setup fails, please login to your postgres with ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo -u postgres psql")," and follow this documentation:\n",(0,a.kt)("a",{parentName:"p",href:"https://gist.github.com/amolkhanorkar/8706915"},"https://gist.github.com/amolkhanorkar/8706915"))),(0,a.kt)("p",null,"After that, switch back to the root user, using the command ",(0,a.kt)("inlineCode",{parentName:"p"},"exit")),(0,a.kt)("h2",{id:"configuring-the-webserver"},"Configuring the Webserver"),(0,a.kt)("p",null,"Now comes the tricky part. You have to configure your Webserver. First, create an A-Record and/or AAAA-Record in your DNS and let it point directly to your server. Alternativly you can point the Root-Record to your Server."),(0,a.kt)("p",null,"Next you have to use the following two commands to copy and enable the mastodon webserver configuration."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cp /home/mastodon/live/dist/nginx.conf /etc/nginx/sites-available/mastodon\nln -s /etc/nginx/sites-available/mastodon /etc/nginx/sites-enabled/mastodon\n")),(0,a.kt)("p",null,"After that, edit the ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/nginx/sites-available/mastodon")," file with a text editor like vim or nano and change example.com to your wanted domain.\nNext, you have to aquire a SSL-Certificate for your domain. You can easily do this with this command: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"certbot --nginx -d <your domain>\n")),(0,a.kt)("p",null,"Enter your domain. You'll be asked about several credentials. At the end it will ask you, if you automatically want to redirect http requests to https, we recommend you, to enable it."),(0,a.kt)("h2",{id:"creating-a-mastodon-service"},"Creating a mastodon service"),(0,a.kt)("p",null,"Lastly, we are creating a mastodon system service. It is pretty straigt forward.\nUse this command to copy default service configuration to the service directory of your distribution. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cp /home/mastodon/live/dist/mastodon-*.service /etc/systemd/system/\n")),(0,a.kt)("p",null,"Now enable and start your new services with the following to commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"systemctl daemon-reload\nsystemctl enable --now mastodon-web mastodon-sidekiq mastodon-streaming\n")),(0,a.kt)("p",null,"After a reboot you should be finished with your setup. Have fun with your instance!"))}p.isMDXComponent=!0}}]);