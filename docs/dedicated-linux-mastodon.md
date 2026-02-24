---
id: dedicated-linux-mastodon
title: "Setup Mastodon on a Linux Server - Launch Your Own Social Networking Platform"
description: "Discover how to set up a secure, self-hosted Mastodon social network on Debian-based servers for independent microblogging → Learn more now"
sidebar_label: Install Mastodon
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Mastodon is free and open-source software for running self-hosted social networking services.

![](https://screensaver01.zap-hosting.com/index.php/s/oNCpfBwLNB5f79P/preview)

It has microblogging features similar to the X (formerly Twitter) service, which are offered by a large number of independently run nodes, known as instances,
each with its own code of conduct, terms of service, privacy policy, privacy options, and moderation policies.
:::info
This guide focuses the installation on a Debian based Distro. Examples are Debian and Ubuntu. This guide differs depending on what OS you are using.
:::



## System prerequisites
If you want to setup a Mastodon Instance on your Server, you have to meet some prerequisites
- Domain
- Linux based Server
- Email Server

## Preparing your System
Its recommended, that you beforehand disable Password Login on SSH, as it is a security risk to use Password Login on Servers which are reachable from the Internet.
You can do this in your Servers Webinterface under Information -> Access & Security -> Deactivate Password Login
![](https://screensaver01.zap-hosting.com/index.php/s/k6bBoxt7HJ4jqnL/preview)
After that, update your packages by using the following command:
```
apt update && apt upgrade -y
```

Next up you have to install mastodons dependencies:
```bash
# System Repositories
apt install -y curl wget gnupg apt-transport-https lsb-release ca-certificates
# Node.JS
curl -sL https://deb.nodesource.com/setup_16.x | bash -
# PostgreSQL
wget -O /usr/share/keyrings/postgresql.asc https://www.postgresql.org/media/keys/ACCC4CF8.asc
echo "deb [signed-by=/usr/share/keyrings/postgresql.asc] http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/postgresql.list
```

After we have installed the dependencies for Mastodon, we can install the necessary system Packages. We do that by simply using the following two commands:
```bash
apt update
apt install -y \
  imagemagick ffmpeg libpq-dev libxml2-dev libxslt1-dev file git-core \
  g++ libprotobuf-dev protobuf-compiler pkg-config nodejs gcc autoconf \
  bison build-essential libssl-dev libyaml-dev libreadline6-dev \
  zlib1g-dev libncurses5-dev libffi-dev libgdbm-dev \
  nginx redis-server redis-tools postgresql postgresql-contrib \
  certbot python3-certbot-nginx libidn11-dev libicu-dev libjemalloc-dev
```
Let the packages install, which may take some time. After that we have to configure yarn, which is a packagemanager for previously installed Node.JS
```bash
corepack enable
yarn set version stable
```

## Installing Ruby
We will create a different user, as it makes managing the Ruby versions much easier. First you have to create a User called mastodon, whose Login is disabled. Next you switch into the mastodon user. You can do this by running the following commands:
```bash
# You can just leave the fields empty
adduser --disabled-login mastodon
su - mastodon
```

Now we install the Ruby Manager `rbenv`, as it makes managing ruby versions much easier. You can install it by using the following commands:
```bash
git clone https://github.com/rbenv/rbenv.git ~/.rbenv
cd ~/.rbenv && src/configure && make -C src
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
exec bash
git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
```
After you're done running through this series of commands, you can install Ruby by using the following command. We also will install bundler in this step. 
```bash
RUBY_CONFIGURE_OPTS=--with-jemalloc rbenv install 3.0.3
rbenv global 3.0.3
gem install bundler --no-document
```
This may take some time, so be patient and get a tea or a coffee int the time you wait. After that we are done setting up, we can switch back to the root user by just using the command `exit`

## Configuring PostgreSQL
Mastodon uses PostegrSQL as its database system. Configuration is done easily by using the following:
```bash
sudo -u postgres psql
```

Inside the PostgreSQL Prompt, enter the following:
```sql
CREATE USER mastodon CREATEDB;
\q
```

## Setting up Mastodon
Now we have to switch into the mastodon user once again:
```bash
su - mastodon
```
Now we use git to download the most recent version of mastodon, using the following two commands:
```bash
git clone https://github.com/tootsuite/mastodon.git live && cd live
git checkout $(git tag -l | grep -v 'rc[0-9]*$' | sort -V | tail -n 1)
```
Next, we have to install some more and the last Dependencies for Ruby and Javascript. Do this by using this commands:
```bash
bundle config deployment 'true'
bundle config without 'development test'
bundle install -j$(getconf _NPROCESSORS_ONLN)
yarn install --pure-lockfile
```
Next create your mastodon configuration file by using the following command:
```bash
RAILS_ENV=production bundle exec rake mastodon:setup
```
:::info
If your Database Setup fails, please login to your postgres with `sudo -u postgres psql` and follow this documentation: 

https://gist.github.com/amolkhanorkar/8706915
:::

After that, switch back to the root user, using the command `exit`

## Configuring the Webserver
Now comes the tricky part. You have to configure your Webserver. First, create an A-Record and/or AAAA-Record in your DNS and let it point directly to your server. Alternativly you can point the Root-Record to your Server.

Next you have to use the following two commands to copy and enable the mastodon webserver configuration.
```bash
cp /home/mastodon/live/dist/nginx.conf /etc/nginx/sites-available/mastodon
ln -s /etc/nginx/sites-available/mastodon /etc/nginx/sites-enabled/mastodon
```

After that, edit the `/etc/nginx/sites-available/mastodon` file with a text editor like vim or nano and change example.com to your wanted domain. 
Next, you have to aquire a SSL-Certificate for your domain. You can easily do this with this command: 
```bash
certbot --nginx -d <your domain>
```
Enter your domain. You'll be asked about several credentials. At the end it will ask you, if you automatically want to redirect http requests to https, we recommend you, to enable it.

## Creating a mastodon service
Lastly, we are creating a mastodon system service. It is pretty straigt forward. 
Use this command to copy default service configuration to the service directory of your distribution. 
```sh
cp /home/mastodon/live/dist/mastodon-*.service /etc/systemd/system/
```

Now enable and start your new services with the following to commands:
```sh
systemctl daemon-reload
systemctl enable --now mastodon-web mastodon-sidekiq mastodon-streaming
```

After a reboot you should be finished with your setup. Have fun with your instance!


