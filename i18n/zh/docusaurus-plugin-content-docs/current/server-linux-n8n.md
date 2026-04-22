---
id: server-linux-n8n
title: "在 Linux 服务器上安装 n8n - 构建强大的工作流自动化"
description: "了解如何安装和配置自托管的 n8n，打造让工作更轻松的 AI 工作流自动化 → 立即了解更多"
sidebar_label: 安装 n8n
services:
  - vserver-service-n8n
  - dedicated-service-n8n
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';


## 介绍

[n8n](https://n8n.io/) 是领先的可视化编辑器，支持快速迭代，你可以构建自动化工作流并即时看到结果。无论是日常自动化还是复杂的 AI 代理工作流，都非常适合。

![img](https://screensaver01.zap-hosting.com/index.php/s/skzPCRajMZPbfw3/preview)

自托管支持和低代码编辑器让 n8n 成为每个开发者的最爱。如果你想要最大化控制、定制化，并且长期降低成本，自托管选项绝对是你的不二之选。

打算自己托管 n8n？我们会带你一步步完成安装和配置，同时告诉你所有需要注意的事项。

## 通过一键应用安装器安装 n8n

你可以直接通过我们的 **一键应用安装器** 在 VPS 网页界面安装 **n8n**。完成初始应用设置后，打开应用目录，搜索 **n8n**，并根据你的项目、环境和域名偏好开始部署。这为你提供了一个快速且用户友好的方式来部署和管理 **n8n**，无需手动命令行配置，同时还能享受集成的网页管理、自定义域名支持和可用的 SSL 证书配置。

<InlineVoucher />



## n8n 的使用场景

n8n 可应用于各种日常场景，适合任何想要自动化任务、使用低代码编辑器、构建 AI 代理、领导自动化、强化 CRM、IT 运维、安全运维、后端原型开发等的用户！无论是新手还是专家，n8n 都非常合适。

n8n 提供超过 1367 种集成，如 Google Sheets、Telegram、MySQL、Slack、Discord、Postgres，以及热门自动化组合如 HubSpot 和 Salesforce、Twilio 和 WhatsApp、GitHub 和 Jira、Asana 和 Slack、Asana 和 Salesforce、Jira 和 Slack，还有大量社区模板。

## 先决条件

虽然 n8n 核心轻量，但随着工作流使用量、API 调用和数据密集型节点的增加，资源消耗会逐渐上升。我们推荐以下硬件配置来在你的 VPS 上托管 n8n。

| 硬件       | 最低配置    | 推荐配置                  |
| ---------- | ---------- | ------------------------- |
| CPU        | 1 vCPU 核心 | 2 vCPU 核心               |
| 内存       | 2 GB       | 4 GB                      |
| 磁盘空间   | 20 GB      | 50 GB                     |
<InlineServiceLink />

## 准备工作

开始之前，我们需要安装 Docker 并更新系统包。我们已有一篇关于[安装 Docker](dedicated-linux-docker.md)的指南。请先完成这一步，再开始安装。

## 安装
在服务器上安装 Docker 后，运行以下命令验证安装：

```
docker --version
docker compose version
```

### 创建 `.env` 文件

创建一个项目目录用于存放 n8n 本地文件和环境配置，并进入该目录：

```
mkdir n8n-compose
cd n8n-compose
```

在 `n8n-compose` 目录下，使用 `nano .env` 创建 `.env` 文件，写入以下 n8n 环境配置代码。

```
# DOMAIN_NAME 和 SUBDOMAIN 共同决定 n8n 的访问地址
# 顶级域名
DOMAIN_NAME=zap.cloud

# 子域名
SUBDOMAIN=silver-octopus-xxxxx

# 上述示例中，n8n 访问地址为：https://silver-octopus-xxxxx.zap.cloud

# 可选时区设置，Cron 和其他调度节点会使用
GENERIC_TIMEZONE=Europe/Berlin

# 用于 TLS/SSL 证书创建的邮箱地址
SSL_EMAIL=hello@zap-hosting.com
```

:::info
要找到 DOMAIN_NAME 和 SUBDOMAIN，请前往你的 ZAP-Hosting 产品页面，进入你的 VPS，找到你的 `Hostname`。

![img](https://screensaver01.zap-hosting.com/index.php/s/7DoXD5F9m2oYTXX/preview)

:::

将 `zap.cloud` 填入 DOMAIN_NAME，前半部分填入 SUBDOMAIN（例如 silver-octopus-xxxxx）。

![img](https://screensaver01.zap-hosting.com/index.php/s/EaQn97J25TpwDSa/preview)

:::warning HTTPS 要求
不要在 .env 文件中使用裸 IP 地址。n8n 需要 HTTPS 连接访问网站，且 SSL 证书只会为域名颁发，不支持裸 IP。
:::

如果你想用自己的域名托管 n8n，请在你的域名 DNS 管理器中为 n8n 创建一个子域名的 A 记录，指向你使用的 VPS IP。

| 名称             | 类型 | 值             | TTL  | 优先级 |
| ---------------- | ---- | -------------- | ---- | ------ |
| n8n（子域名）    | A    | IPv4 地址      | 1440 | 0      |

### 创建本地文件目录

在项目目录内，创建一个名为 `local-files` 的目录，用于在 n8n 实例和宿主系统之间共享文件：

```
mkdir local-files
```

### 创建 Docker Compose 文件

使用 `nano compose.yaml` 创建 Docker Compose 文件 `compose.yaml`，并粘贴以下内容：

```yaml
services:
  traefik:
    image: "traefik"
    restart: always
    command:
      - "--api.insecure=true"
      - "--providers.docker=true"
      - "--providers.docker.exposedbydefault=false"
      - "--entrypoints.web.address=:80"
      - "--entrypoints.web.http.redirections.entryPoint.to=websecure"
      - "--entrypoints.web.http.redirections.entrypoint.scheme=https"
      - "--entrypoints.websecure.address=:443"
      - "--certificatesresolvers.mytlschallenge.acme.tlschallenge=true"
      - "--certificatesresolvers.mytlschallenge.acme.email=${SSL_EMAIL}"
      - "--certificatesresolvers.mytlschallenge.acme.storage=/letsencrypt/acme.json"
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - traefik_data:/letsencrypt
      - /var/run/docker.sock:/var/run/docker.sock:ro

  n8n:
    image: docker.n8n.io/n8nio/n8n
    restart: always
    ports:
      - "127.0.0.1:5678:5678"
    labels:
      - traefik.enable=true
      - traefik.http.routers.n8n.rule=Host(`${SUBDOMAIN}.${DOMAIN_NAME}`)
      - traefik.http.routers.n8n.tls=true
      - traefik.http.routers.n8n.entrypoints=web,websecure
      - traefik.http.routers.n8n.tls.certresolver=mytlschallenge
      - traefik.http.middlewares.n8n.headers.SSLRedirect=true
      - traefik.http.middlewares.n8n.headers.STSSeconds=315360000
      - traefik.http.middlewares.n8n.headers.browserXSSFilter=true
      - traefik.http.middlewares.n8n.headers.contentTypeNosniff=true
      - traefik.http.middlewares.n8n.headers.forceSTSHeader=true
      - traefik.http.middlewares.n8n.headers.SSLHost=${DOMAIN_NAME}
      - traefik.http.middlewares.n8n.headers.STSIncludeSubdomains=true
      - traefik.http.middlewares.n8n.headers.STSPreload=true
      - traefik.http.routers.n8n.middlewares=n8n@docker
    environment:
      - N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS=true
      - N8N_HOST=${SUBDOMAIN}.${DOMAIN_NAME}
      - N8N_PORT=5678
      - N8N_PROTOCOL=https
      - N8N_RUNNERS_ENABLED=true
      - NODE_ENV=production
      - WEBHOOK_URL=https://${SUBDOMAIN}.${DOMAIN_NAME}/
      - GENERIC_TIMEZONE=${GENERIC_TIMEZONE}
      - TZ=${GENERIC_TIMEZONE}
    volumes:
      - n8n_data:/home/node/.n8n
      - ./local-files:/files

volumes:
  n8n_data:
  traefik_data:
```

这会安装 n8n，颁发 SSL 证书，配置并让 n8n 在你的域名上运行。

### 启动 n8n

运行以下命令启动 n8n：

```
sudo docker compose up -d
```

停止 n8n，运行：

```
sudo docker compose stop
```

### 访问 n8n

启动 n8n 后，下一步是用浏览器访问它。输入你的 URL（或如果你用了 Hostname 就输入它）进入设置页面。这里你需要先创建一个管理员账号。

![img](https://screensaver01.zap-hosting.com/index.php/s/3SNBcAtXco8RTQr/preview)

:::info 密码提示
一定要记住你的密码，方便以后登录！
:::

接着会弹出一个小调查，提示你填写一些基本信息。

![img](https://screensaver01.zap-hosting.com/index.php/s/bY8sDwenKtSEBg4/preview)

你还可以免费使用一些付费功能，只需输入邮箱并接收带有许可证密钥的邮件。如果感兴趣，输入邮箱申请许可证密钥。

![img](https://screensaver01.zap-hosting.com/index.php/s/7jEtswn3s3gZ3Es/preview)

许可证密钥会立即发送到你的邮箱。复制该密钥，粘贴到 设置 > 使用和计划 > 输入激活密钥。

### 创建第一个工作流

之后，你就可以访问仪表盘，马上开始使用 n8n！

![img](https://screensaver01.zap-hosting.com/index.php/s/RbFAoJ9ZRD9m8Px/preview)

你可以从空白画布开始，也可以使用预制模板。你的 n8n 安装已经准备就绪！

![img](https://screensaver01.zap-hosting.com/index.php/s/y93sTPG9Qwt5PKo/preview)



## 总结与更多资源

干得漂亮！你已经成功在服务器上安装了 n8n，可以立即开始使用。我们还推荐你看看以下资源，它们能在服务器配置过程中为你提供更多帮助和指导：

- [n8n.io](https://n8n.io/) - 官方网站
- [docs.n8n.io](https://docs.n8n.io/) - n8n 文档

有具体问题这里没提到？需要更多帮助？随时联系在线客服，我们每天都在线为你服务！🙂

