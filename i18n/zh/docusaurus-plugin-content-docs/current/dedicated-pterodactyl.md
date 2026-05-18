---
id: dedicated-pterodactyl
title: "独立服务器：Pterodactyl 面板安装指南"
description: "快速掌握如何高效搭建和管理你的 Pterodactyl 游戏服务器面板 → 立即了解"
sidebar_label: 安装 Pterodactyl
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Pterodactyl 面板是一款开源的控制面板，专为轻松管理和托管游戏服务器而设计。它提供了一个用户界面，让管理员能够集中配置和管理多个游戏服务器。

本指南将带你一步步完成在你的服务器上搭建 Pterodactyl 实例的全过程。

## 准备工作

你需要一台运行 Linux 的独立服务器来安装 Pterodactyl 面板。请使用下表中兼容的操作系统版本。

| 操作系统 | 兼容版本          |
| -------- | ----------------- |
| Ubuntu   | 20.04, 22.04      |
| CentOS   | 7, 8              |
| Debian   | 11, 12            |

## 依赖项

Pterodactyl 需要一系列依赖才能成功安装和运行，同时依赖 PHP 的流行依赖管理工具 Composer。

### 依赖清单

以下是本指南所需的依赖简要列表。后续章节将详细介绍如何安装这些依赖。

- PHP 8.1 及以下扩展：cli、openssl、gd、mysql、PDO、mbstring、tokenizer、bcmath、xml 或 dom、curl、zip、fpm。
- MariaDB
- Web 服务器 - 本指南使用 Nginx。
- curl
- tar
- unzip
- git
- composer v2

### 安装依赖

首先，运行以下命令，允许你添加非系统默认的软件包源。

```bash
apt -y install software-properties-common curl apt-transport-https ca-certificates gnupg
```

接着，安装 PHP、Redis 和 MariaDB（MySQL）的额外仓库。

```bash
LC_ALL=C.UTF-8 add-apt-repository -y ppa:ondrej/php
```

你还需要安装 Redis，用于临时数据存储。

```bash
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list
```

我们选择使用 Nginx 作为 Web 服务器，因为它稳定且开源。你也可以使用 Apache 或 Caddy，但这不在本指南范围内。

```bash
sudo apt install nginx # 下载并安装 Nginx
sudo ufw allow 'Nginx Full' # 调整防火墙规则
```

建议访问 `http://[your_serverip]/`（将 `[your_serverip]` 替换为你的服务器 IP）测试 Nginx 是否正常运行，你应该能看到默认欢迎页面。

接下来，安装 MariaDB 作为你的 MySQL 数据库。

```bash
curl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash
```

最后，更新软件源并安装剩余依赖。

```bash
apt update
apt -y install php8.1 php8.1-{common,cli,gd,mysql,mbstring,bcmath,xml,fpm,curl,zip} mariadb-server nginx tar unzip git redis-server
```

现在你已经安装了所有必要依赖，可以继续安装 Composer。

### 安装 Composer

主依赖安装完成后，接下来安装 PHP 的依赖管理工具 Composer，方便你下载和安装整个 Pterodactyl 服务。

运行以下命令：

```bash
curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer
```

## 下载面板

所有前置条件准备就绪后，开始安装 Pterodactyl 面板。

先创建一个文件夹用于存放面板文件：

```bash
mkdir /var/www/pterodactyl
cd /var/www/pterodactyl
```

然后克隆官方 Pterodactyl GitHub 仓库，下载所需文件：

```bash
curl -Lo panel.tar.gz https://github.com/pterodactyl/panel/releases/latest/download/panel.tar.gz
tar -xzvf panel.tar.gz
chmod -R 755 storage/* bootstrap/cache/
```

克隆完成后，面板文件已成功下载。接下来配置各种关键设置，确保面板正确安装并正常运行。

## 安装步骤

安装的第一步是设置 MySQL 数据库，用于存储 Pterodactyl 面板的所有数据。如果你已有合适的 MySQL 数据库和用户，可以跳过下一小节。

### 数据库设置

登录你的 MySQL 数据库。如果是全新实例，运行：

```
mysql -u root -p
```

如果已有 MySQL 实例，使用对应用户名（`-u`）和密码（`-p`）登录。

登录后，创建一个新用户供 Pterodactyl 使用，替换 `[your_password]` 为你的密码：

```sql
CREATE USER 'pterodactyl'@'127.0.0.1' IDENTIFIED BY '[your_password]';
```

接着创建数据库并授权新用户：

```sql
CREATE DATABASE panel;
GRANT ALL PRIVILEGES ON panel.* TO 'pterodactyl'@'127.0.0.1' WITH GRANT OPTION;
```

MySQL 用户和数据库已成功创建，输入 `exit` 退出 MySQL。

### 继续安装

复制默认环境配置文件，用于存储密钥等敏感信息：

```bash
cp .env.example .env
```

使用 Composer 自动安装所有必要依赖包：

```bash
composer install --no-dev --optimize-autoloader
```

生成应用加密密钥：

```bash
php artisan key:generate --force
```

### 环境配置

运行以下命令，进入交互式配置，设置会话、邮件、缓存等多项参数：

```bash
php artisan p:environment:setup # 第一步
php artisan p:environment:database # 第二步
```

### 数据库迁移

接下来初始化数据库，导入基础数据。运行以下命令：

:::info
此步骤可能需要几分钟，请耐心等待，切勿中断进程，否则可能导致安装失败。
:::

```bash
php artisan migrate --seed --force
```

### 创建管理员账号

数据库准备好后，创建第一个管理员账号以登录面板：

```bash
php artisan p:user:make
```

### 设置权限

为确保面板文件可被正确读写，设置文件权限：

```bash
chown -R www-data:www-data /var/www/pterodactyl/*
```

完成后，访问以下地址（替换 `your_ipaddress` 为你的服务器 IP）即可打开 Pterodactyl 面板：

```
http://[your_ipaddress]/
```

### 队列工作进程

安装最后一步是设置定时任务（cronjob）和队列工作进程，处理后台任务。

打开 crontab：

```bash
sudo crontab -e
```

添加以下任务，每分钟执行一次：

```bash
* * * * * php /var/www/pterodactyl/artisan schedule:run >> /dev/null 2>&1
```

接着创建 systemd 服务文件，保持队列工作进程常驻后台。

打开编辑器：

```
nano /etc/systemd/system/pteroq.service
```

粘贴以下内容：

```
# Pterodactyl 队列工作进程配置
# ----------------------------------

[Unit]
Description=Pterodactyl Queue Worker
After=redis-server.service

[Service]
# 不同系统用户组可能不同，部分系统使用 apache 或 nginx
User=www-data
Group=www-data
Restart=always
ExecStart=/usr/bin/php /var/www/pterodactyl/artisan queue:work --queue=high,standard,low --sleep=3 --tries=3
StartLimitInterval=180
StartLimitBurst=30
RestartSec=5s

[Install]
WantedBy=multi-user.target
```

:::note
如果你使用的是 CentOS，请将 `redis-server.service` 替换为 `redis.service`。
:::

保存并退出（`CTRL + X`，然后按 `Y` 确认）。

启用并启动 Redis 服务及队列工作进程：

```
sudo systemctl enable --now redis-server
sudo systemctl enable --now pteroq.service
```

至此，Pterodactyl 已成功安装。访问以下地址（替换 `[your_serverip]`）即可打开面板：

```
http://[your_serverip]
```

## 可选：配置 Web 服务器

你还可以进一步配置 Web 服务器。本指南使用 Nginx，以下内容将介绍如何调整配置。

通过配置，你可以将面板绑定到自己的域名，并为网站设置 SSL 证书。

### 域名 DNS 记录

要让你的服务器通过域名访问，需为该域名设置 `A` 记录，指向你的服务器 IP。具体操作依赖你的域名服务商，通常在域名管理的“DNS 面板”中设置。

![](https://screensaver01.zap-hosting.com/index.php/s/EsGB6DaTC65Fce8/preview)

### 删除默认配置

先删除默认的 Nginx 配置文件：

```bash
rm /etc/nginx/sites-enabled/default
```

接下来，根据是否使用 SSL，选择对应配置文件内容创建新配置。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Nginx With SSL" label="带 SSL 的 Nginx" default>

### 安装 Certbot

要为网站启用 SSL 证书，需要安装并配置自动管理证书的工具 Certbot。

安装 Certbot 及其 Nginx 插件：

```bash
sudo apt update
sudo apt install -y certbot
sudo apt install -y python3-certbot-nginx
```

使用 DNS 验证方式申请证书，更安全。

你需要为域名创建一个 `TXT` 记录，具体操作依赖你的 DNS 服务商。

运行以下命令，替换 `[your_domain]` 为你的域名，获取需要添加的 TXT 记录内容：

```bash
certbot -d [your_domain] --manual --preferred-challenges dns certonly
```

添加完 TXT 记录后，设置自动续期。打开 crontab：

```bash
sudo crontab -e
```

添加以下任务，每天 23:00 自动续期并重启 Nginx：

```bash
0 23 * * * certbot renew --quiet --deploy-hook "systemctl restart nginx"
```

#### 创建配置文件

创建 Nginx 配置文件：

```bash
nano /etc/nginx/sites-enabled/pterodactyl.conf
```

复制以下内容，替换 `[your_domain]` 为你的域名：

:::warning
确保已成功申请 SSL 证书，否则 Nginx 无法正常启动。
:::

```
server_tokens off;

server {
    listen 80;
    server_name [your_domain];
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name [your_domain];

    root /var/www/pterodactyl/public;
    index index.php;

    access_log /var/log/nginx/pterodactyl.app-access.log;
    error_log  /var/log/nginx/pterodactyl.app-error.log error;

    client_max_body_size 100m;
    client_body_timeout 120s;

    sendfile off;

    ssl_certificate /etc/letsencrypt/live/[your_domain]/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/[your_domain]/privkey.pem;
    ssl_session_cache shared:SSL:10m;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers "ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384";
    ssl_prefer_server_ciphers on;

    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";
    add_header X-Robots-Tag none;
    add_header Content-Security-Policy "frame-ancestors 'self'";
    add_header X-Frame-Options DENY;
    add_header Referrer-Policy same-origin;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_pass unix:/run/php/php8.1-fpm.sock;
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param PHP_VALUE "upload_max_filesize = 100M \n post_max_size=100M";
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_param HTTP_PROXY "";
        fastcgi_intercept_errors off;
        fastcgi_buffer_size 16k;
        fastcgi_buffers 4 16k;
        fastcgi_connect_timeout 300;
        fastcgi_send_timeout 300;
        fastcgi_read_timeout 300;
        include /etc/nginx/fastcgi_params;
    }

    location ~ /\.ht {
        deny all;
    }
}
```

</TabItem>
<TabItem value="Nginx Without SSL" label="不带 SSL 的 Nginx">

#### 创建配置文件

运行以下命令打开编辑器：

```bash
nano /etc/nginx/sites-enabled/pterodactyl.conf
```

复制以下内容，替换 `[your_domain]` 为你的域名：

:::warning
确保你已正确设置 DNS 记录指向服务器 IP。
:::

```
server {
    listen 80;
    server_name [your_domain];

    root /var/www/pterodactyl/public;
    index index.html index.htm index.php;
    charset utf-8;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    access_log off;
    error_log  /var/log/nginx/pterodactyl.app-error.log error;

    client_max_body_size 100m;
    client_body_timeout 120s;

    sendfile off;

    location ~ \.php$ {
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_pass unix:/run/php/php8.1-fpm.sock;
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param PHP_VALUE "upload_max_filesize = 100M \n post_max_size=100M";
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_param HTTP_PROXY "";
        fastcgi_intercept_errors off;
        fastcgi_buffer_size 16k;
        fastcgi_buffers 4 16k;
        fastcgi_connect_timeout 300;
        fastcgi_send_timeout 300;
        fastcgi_read_timeout 300;
    }

    location ~ /\.ht {
        deny all;
    }
}
```

</TabItem>
</Tabs>

### 应用配置

配置完成后，启用新配置：

```bash
sudo ln -s /etc/nginx/sites-available/pterodactyl.conf /etc/nginx/sites-enabled/pterodactyl.conf # CentOS 不需要此步骤

sudo systemctl restart nginx # 重启 Nginx
```

配置成功后，你就可以通过刚才设置的域名访问 Pterodactyl 面板啦。

恭喜你，已成功配置 Web 服务器，实现域名访问并启用 SSL 证书！