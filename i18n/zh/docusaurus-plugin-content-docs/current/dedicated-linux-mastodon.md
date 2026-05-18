---
id: dedicated-linux-mastodon
title: "在 Linux 服务器上安装 Mastodon - 启动你自己的社交平台"
description: "了解如何在基于 Debian 的服务器上搭建安全的自托管 Mastodon 社交网络，实现独立的微博服务 → 立即了解"
sidebar_label: 安装 Mastodon
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Mastodon 是一款免费开源的软件，用于运行自托管的社交网络服务。

![](https://screensaver01.zap-hosting.com/index.php/s/oNCpfBwLNB5f79P/preview)

它拥有类似于 X（前身为 Twitter）的微博功能，由大量独立运营的节点（称为实例）提供服务，
每个实例都有自己的行为准则、服务条款、隐私政策、隐私选项和管理策略。
:::info
本指南重点介绍基于 Debian 的发行版安装示例，适用于 Debian 和 Ubuntu。不同操作系统的安装步骤会有所不同。
:::

## 系统要求
如果你想在服务器上搭建 Mastodon 实例，需要满足以下条件：
- 域名
- 基于 Linux 的服务器
- 邮件服务器

## 系统准备
建议提前禁用 SSH 密码登录，因为在可从互联网访问的服务器上使用密码登录存在安全风险。
你可以在服务器的 Web 界面中，进入 信息 -> 访问与安全 -> 禁用密码登录 来操作。
![](https://screensaver01.zap-hosting.com/index.php/s/k6bBoxt7HJ4jqnL/preview)
然后，使用以下命令更新软件包：
```
apt update && apt upgrade -y
```

接下来安装 Mastodon 依赖：
```bash
# 系统仓库工具
apt install -y curl wget gnupg apt-transport-https lsb-release ca-certificates
# Node.JS
curl -sL https://deb.nodesource.com/setup_16.x | bash -
# PostgreSQL
wget -O /usr/share/keyrings/postgresql.asc https://www.postgresql.org/media/keys/ACCC4CF8.asc
echo "deb [signed-by=/usr/share/keyrings/postgresql.asc] http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/postgresql.list
```

安装完依赖后，安装 Mastodon 所需的系统包，执行以下两条命令：
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
安装过程可能需要一些时间。接着配置 yarn（Node.JS 的包管理器）：
```bash
corepack enable
yarn set version stable
```

## 安装 Ruby
我们将创建一个独立用户来管理 Ruby 版本，这样更方便。首先创建一个名为 mastodon 的用户，禁用其登录权限。然后切换到 mastodon 用户，执行：
```bash
# 用户信息字段可以留空
adduser --disabled-login mastodon
su - mastodon
```

接下来安装 Ruby 管理工具 `rbenv`，方便管理 Ruby 版本：
```bash
git clone https://github.com/rbenv/rbenv.git ~/.rbenv
cd ~/.rbenv && src/configure && make -C src
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
exec bash
git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
```
完成后，安装 Ruby 和 bundler：
```bash
RUBY_CONFIGURE_OPTS=--with-jemalloc rbenv install 3.0.3
rbenv global 3.0.3
gem install bundler --no-document
```
这一步可能需要点时间，耐心等一会儿，顺便泡杯茶或咖啡。完成后，使用 `exit` 命令切回 root 用户。

## 配置 PostgreSQL
Mastodon 使用 PostgreSQL 作为数据库。配置方法如下：
```bash
sudo -u postgres psql
```

进入 PostgreSQL 命令行后，执行：
```sql
CREATE USER mastodon CREATEDB;
\q
```

## 搭建 Mastodon
再次切换到 mastodon 用户：
```bash
su - mastodon
```
用 git 下载最新版本的 Mastodon：
```bash
git clone https://github.com/tootsuite/mastodon.git live && cd live
git checkout $(git tag -l | grep -v 'rc[0-9]*$' | sort -V | tail -n 1)
```
安装 Ruby 和 Javascript 的最后依赖：
```bash
bundle config deployment 'true'
bundle config without 'development test'
bundle install -j$(getconf _NPROCESSORS_ONLN)
yarn install --pure-lockfile
```
创建 Mastodon 配置文件：
```bash
RAILS_ENV=production bundle exec rake mastodon:setup
```
:::info
如果数据库配置失败，请用 `sudo -u postgres psql` 登录 PostgreSQL，参考这篇文档解决：

https://gist.github.com/amolkhanorkar/8706915
:::

完成后，使用 `exit` 切回 root 用户。

## 配置 Web 服务器
关键步骤来了。先在 DNS 中创建 A 记录和/或 AAAA 记录，指向你的服务器 IP。也可以将根域名记录指向服务器。

然后复制并启用 Mastodon 的 nginx 配置：
```bash
cp /home/mastodon/live/dist/nginx.conf /etc/nginx/sites-available/mastodon
ln -s /etc/nginx/sites-available/mastodon /etc/nginx/sites-enabled/mastodon
```

用 vim 或 nano 编辑 `/etc/nginx/sites-available/mastodon` 文件，将 example.com 替换成你的域名。

接着为你的域名申请 SSL 证书，命令如下：
```bash
certbot --nginx -d <你的域名>
```
输入你的域名，按提示填写信息。最后会询问是否自动将 http 请求重定向到 https，建议开启。

## 创建 Mastodon 服务
最后，创建 Mastodon 系统服务，操作很简单。
复制默认服务配置到系统服务目录：
```sh
cp /home/mastodon/live/dist/mastodon-*.service /etc/systemd/system/
```

启用并启动服务：
```sh
systemctl daemon-reload
systemctl enable --now mastodon-web mastodon-sidekiq mastodon-streaming
```

重启服务器后，Mastodon 就搭建完成啦！祝你玩得开心！