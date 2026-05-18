---
id: dedicated-linux-odoo
title: "在 Linux 服务器上安装 Odoo - 运行你自己的开源 ERP 和 CRM"
description: "了解如何使用 Odoo 集成的 ERP 和 CRM 平台管理和自动化业务流程，实现公司运营的高效化 → 立即了解更多"
sidebar_label: 安装 Odoo
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Odoo 是一个模块化的开源平台，集成了企业资源计划（ERP）和客户关系管理（CRM）功能。它允许企业通过一个系统管理和自动化会计、库存、项目管理和销售等流程。

借助灵活的扩展，Odoo 可以根据具体需求定制，提供一个集成的解决方案来管理公司的各个领域。

![img](https://screensaver01.zap-hosting.com/index.php/s/3nwfLeK2c9kTiCp/preview)

想自己托管这个服务？我们将带你一步步完成安装和配置，并告诉你所有需要注意的事项。

## 通过一键应用安装器安装 Odoo

你可以直接通过我们的 **一键应用安装器** 在 VPS 的网页界面中安装 **Odoo**。完成初始应用设置后，打开应用目录，搜索 **Odoo**，并根据你的项目、环境和域名偏好开始部署。这为你提供了一个快速且用户友好的方式来部署和管理 **Odoo**，无需手动命令行操作，同时还能享受集成的网页管理、自定义域名支持和可用时的 SSL 证书配置。

## 安装前准备

在安装 **Odoo** 之前，请确保你的托管环境满足以下要求，以保证安装顺利并获得最佳性能。

| 硬件       | 最低要求    | 推荐配置    |
| ---------- | ----------- | ----------- |
| CPU        | 1 个 vCPU   | 4 个 vCPU   |
| 内存       | 1 GB        | 4 GB        |
| 磁盘空间   | 15 GB       | 25 GB       |

软件要求所有必要依赖已安装，并运行在支持的操作系统上。请确保你的服务器满足以下条件后再继续安装：

**依赖项：** `Docker`

**操作系统：** 支持 Docker 26+ 的最新 Ubuntu/Debian 版本

确保所有依赖已安装且操作系统版本正确，以避免安装 Odoo 时出现兼容性问题。

## 准备工作

在搭建 **Odoo** 之前，你需要先准备系统，包括将操作系统更新到最新版本并安装所有必需依赖。这些准备工作能确保环境稳定，避免安装过程中或之后出现问题。

### 更新系统
为了确保系统运行最新的软件和安全补丁，建议先执行系统更新。运行以下命令：

```
sudo apt update && sudo apt upgrade -y
```

这会确保系统拥有最新的安全修复和软件版本。

### 安装依赖
更新完成后，就可以安装依赖了。Odoo 将通过多个 Docker 容器部署和运行，因此需要先安装 Docker。运行以下命令：

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

关于 Docker 的完整安装流程和使用方法，请参考我们的 [Docker](dedicated-linux-docker.md) 指南。

### 配置你的域名

默认情况下，Odoo 通过主机的 80（HTTP）和 443（HTTPS）端口运行。请设置一个域名，并将 DNS 记录指向你的主机。如果域名由我们管理，可以通过 [EasyDNS](domain-easydns.md) 轻松完成设置。

## 安装步骤

满足所有要求并完成准备后，就可以开始安装 Odoo 应用。

在多 Docker 环境下，建议创建清晰的目录结构，保持项目相互隔离。常见做法是在用户主目录下创建一个 *docker* 文件夹，每个域名一个子文件夹。这样可以在同一服务器上托管多个项目，避免配置冲突。

例如，为域名 `example.com` 创建目录结构：

```
mkdir -p /docker/example.com
cd /docker/example.com
```

在项目目录内，建议创建子文件夹供容器挂载为卷。卷用于服务间共享数据或持久化存储。一个关键例子是共享的 webroot，nginx 和 certbot 都需要访问它来生成和续期 SSL 证书。可以创建如下结构：

```
mkdir -p nginx/{conf,ssl,inc} config addons
```

这样就有了专门的目录用于 nginx 配置、SSL 证书、包含文件，以及 Odoo 特定内容如配置和插件。

### 创建 Docker Compose 文件

在你的 docker 项目目录下，用 `nano compose.yml` 创建 compose.yml 文件，插入以下内容：

```
services:
  db:
    image: postgres:16
    ports:
      - "5432:5432"
    environment:
      - POSTGRES_USER=odoo
      - POSTGRES_PASSWORD=odoo
      - PGDATA=/var/lib/postgresql/data/pgdata
    volumes:
      - odoo-db-data:/var/lib/postgresql/data

  odoo:
    image: odoo:18.0
    depends_on:
      - db
    ports:
      - "8069:8069"
    volumes:
      - odoo-web-data:/var/lib/odoo
      - ./config:/etc/odoo
      - ./addons:/mnt/extra-addons
    command: odoo -d odoo_db -i base --db_user=odoo --db_password=odoo --db_host=db

  nginx:
    image: nginx:latest
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/conf:/etc/nginx/conf.d
      - ./nginx/inc:/etc/nginx/inc
      - ./nginx/ssl:/etc/nginx/ssl
      - ./nginx/certbot/www:/var/www/certbot
      - ./nginx/certbot/conf:/etc/letsencrypt
    depends_on:
      - odoo

  certbot:
    image: certbot/certbot
    volumes:
      - ./nginx/certbot/www:/var/www/certbot
      - ./nginx/certbot/conf:/etc/letsencrypt

volumes:
  odoo-db-data:
  odoo-web-data:
```

### 防火墙设置

为了让 nginx 和 certbot 正常工作，需要允许 TCP 端口 80（HTTP）和 443（HTTPS）通过防火墙。这两个端口必不可少，因为 certbot 依赖 80 端口进行 HTTP 验证，443 端口用于 HTTPS 加密流量。如果启用了 UFW（简单防火墙），可以用以下命令添加规则：

```
sudo ufw allow http
sudo ufw allow https
```

然后用 `sudo ufw status` 检查端口是否开放。确保没有其他防火墙配置阻止访问这些端口，否则证书生成或 HTTPS 流量可能失败。

### Nginx 配置

首先为你的域名创建 nginx 配置文件。在 `nginx/conf` 目录下新建一个以域名命名的文件。执行 `nano nginx/conf/example.com.conf`，并添加以下基础配置，替换为你的实际域名：

```
server {
    listen 80;
    server_name example.com;

    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        return 301 https://$host$request_uri;
    }
}
```

此配置允许 certbot 完成 ACME 验证并颁发有效的 SSL 证书，同时将所有 HTTP 请求重定向到 HTTPS。

保存后，启动数据库、Odoo 和 nginx 容器：

```
sudo docker compose up -d db odoo nginx
```

容器将在后台运行，nginx 会使用新配置，certbot 也能开始生成证书。

### 生成 SSL 证书

运行以下命令使用 certbot 生成 SSL 证书。请将 `-d` 后的域名替换为你的实际域名，`user@mail.com` 替换为你的有效邮箱：

```
sudo docker compose run --rm certbot certonly --webroot --webroot-path=/var/www/certbot -d example.com --email user@mail.com --agree-tos --no-eff-email
```

随后生成专用的 DH 参数文件，增强密钥交换安全性：

```
openssl dhparam -out nginx/ssl/dhparam.pem 2048
```

接着用 `nano nginx/ssl/ssl.conf` 创建 `ssl.conf` 文件，添加以下内容，记得替换 example.com 为你的域名：

```
ssl_protocols TLSv1.2 TLSv1.3;
ssl_ecdh_curve X25519:prime256v1:secp384r1;
ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384:DHE-RSA-CHACHA20-POLY1305;
ssl_prefer_server_ciphers off;
ssl_session_timeout 1d;
ssl_session_cache shared:MozSSL:10m;
ssl_dhparam "/etc/nginx/ssl/dhparam.pem";
ssl_trusted_certificate /etc/letsencrypt/live/example.com/chain.pem;
resolver 1.1.1.1 1.0.0.1 valid=300s;
```

## 配置

### Nginx 配置

编辑之前创建的 nginx 配置文件，替换为以下内容，确保网站仅通过 HTTPS 提供服务。

记得将 `server_name` 指令中的域名替换为你的实际域名，并在 `ssl_certificate` 和 `ssl_certificate_key` 指令中指定正确的证书路径。

```bash
server {
    listen 443 ssl;
    http2 on;
    server_name example.com;

    # 引入 Mozilla 的 SSL 设置
    include /etc/nginx/ssl/ssl.conf;

    # 证书路径（确保与挂载卷匹配）
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;

    # 安全头部
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always;

    access_log /var/log/nginx/odoo_access.log;
    error_log  /var/log/nginx/odoo_error.log;

    # Gzip 压缩
    include /etc/nginx/inc/gzip.conf;

    # Odoo 代理设置
    location / {
        proxy_pass http://odoo:8069;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-NginX-Proxy true;
        proxy_set_header X-Forwarded-Proto https;
        proxy_set_header X-Forwarded-Host $host;
        proxy_redirect off;
        proxy_request_buffering off;
        # 标准请求推荐超时
        proxy_connect_timeout 30s;
        proxy_send_timeout    60s;
        proxy_read_timeout    60s;
        send_timeout          60s;
    }

    # 缓存静态文件
    location ~* /web/static/ {
        proxy_cache_valid 200 60m;
        proxy_buffering on;
        expires 864000;
        proxy_pass http://odoo:8069;
    }

    # 长轮询增加超时
    location /longpolling {
        proxy_pass http://odoo:8069;
        proxy_connect_timeout 60s;
        proxy_send_timeout    300s;
        proxy_read_timeout    300s;
        send_timeout          300s;
    }

    location /websocket {
        proxy_pass http://odoo:8069;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

server {
    listen 80;
    server_name example.com;

    # 允许 Certbot 访问验证 URL
    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        return 301 https://$host$request_uri;
    }
}
```

保存后，重启 nginx 容器以应用新配置：

```
sudo docker compose restart nginx
```

重启后，nginx 会加载更新的配置并立即开始使用新参数提供服务。若出现错误，可用 `sudo docker compose logs nginx` 查看日志排查。确认容器正常运行后，访问你的网站，检查 HTTPS 是否生效且网站正常加载。

### Odoo 配置选项

你可以为 Odoo 创建专门的配置文件来自定义设置。新建文件 `config/odoo.conf`，添加所需参数。

在该文件中可以定义多个有用参数：`list_db = False` 隐藏登录页的数据库选择，`proxy_mode = True` 告诉 Odoo 它运行在反向代理后面，如果你想使用自定义插件，可以取消注释 `addons_path` 行并指向之前创建的插件目录。示例配置：

```
[options]
list_db = False
proxy_mode = True
#addons_path = /mnt/extra-addons
```

### 移除 -i base 参数

`compose.yml` 文件中的 `-i base` 参数必须移除，否则每次重建 Odoo 容器时都会重新创建数据库。打开 compose 文件，使用 `nano compose.yml`，将命令修改为：

```
command: odoo -d odoo_db --db_user=odoo --db_password=odoo --db_host=db
```

## 访问网站

安装和配置完成，所有服务运行正常后，在浏览器地址栏输入你的域名即可安全访问网站。

![img](https://screensaver01.zap-hosting.com/index.php/s/QTEzbrqG66tTQEA/download)

这会加载你的新安装的起始页面。初始登录账号为用户名 `admin`，密码 `admin`。强烈建议你尽快修改这些默认凭据。

## 总结与更多资源

恭喜你！你已经成功在 VPS/独立服务器上安装并配置了 Odoo。我们还推荐你查看以下资源，能为你的服务器配置提供更多帮助和指导：

- [Odoo.com](https://odoo.com) - 官方网站
- [odoo.com/documentation/18.0/](https://www.odoo.com/documentation/18.0/) - Odoo 官方文档

有任何这里没覆盖的问题？欢迎随时联系我们的支持团队，我们每天都在线为你服务！🙂