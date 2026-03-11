---
id: server-linux-coolify
title: "在 Linux 服务器上安装 Coolify - 自托管云应用"
description: "了解如何安装和设置 Coolify，轻松自托管你的应用、数据库和服务 → 立即了解"
sidebar_label: 安装 Coolify
services:
  - vserver-service-coolify
  - dedicated-service-coolify
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## 介绍

[Coolify](https://coolify.io/) 是一个开源的自托管 Heroku 和 Vercel 替代方案，让你轻松管理服务器、应用和数据库。

![img](https://screensaver01.zap-hosting.com/index.php/s/nrXeZsgjXn43sfw/preview)

Coolify 直观的控制面板让自托管变得简单。它让你完全掌控基础设施，支持自动化 GitHub 部署，同时帮你降低云端成本。

本指南将带你一步步完成安装，预配置管理员账号，并配置所有你需要知道的内容。

<InlineVoucher />

## Coolify 的使用场景

Coolify 适用于各种日常场景，适合任何想自动化应用部署、托管数据库或运行后台任务的人。无论是新手还是专家，Coolify 都非常合适。

Coolify 内置支持部署静态站点、Node.js、Python、PHP、Rust 和 Docker 容器。它还提供流行的一键模板，如 WordPress、Ghost、Grafana、Appwrite、Nextcloud 和 PostgreSQL 数据库。自动处理 Let's Encrypt SSL 证书和通过 Traefik 的反向代理路由。

## 准备工作

虽然 Coolify 核心轻量，但根据部署的应用数量、Docker 构建和同时运行的数据库，资源使用会大幅增加。我们推荐以下硬件配置来在你的 VPS/独服上托管 Coolify。

| 硬件       | 最低要求    | 推荐配置                  |
| ---------- | ---------- | ------------------------ |
| CPU        | 2 vCPU 核心 | 4 vCPU 核心              |
| 内存       | 2 GB       | 4 GB 以上                |
| 磁盘空间   | 30 GB      | 50 GB 以上               |

<InlineServiceLink />

安装 Coolify 前，你需要连接服务器并确保操作系统已更新。必须使用带 root 权限的 SSH 连接服务器。如果你需要帮助，可以参考我们的 [SSH 初始访问](vserver-linux-ssh.md) 指南。

:::tip[SSH 密钥认证]
我们**强烈建议**使用 SSH 密钥替代密码作为认证方式。你可以通过我们的 [SSH 密钥设置](vserver-linux-sshkey.md) 教程了解如何操作。
:::

## 安装

连接服务器后，更新系统包并安装 `curl`，它是获取 Coolify 安装脚本所必需的：

```bash
sudo apt update && sudo apt upgrade -y && sudo apt install curl -y
```



### 准备管理员账号信息

Coolify 对管理员账号有严格的安全策略。运行安装命令前，请根据以下要求准备好你的 Coolify root 用户信息：

* **用户名**
  * 最短 3 个字符
  * 最长 255 个字符
  * 仅允许字母、数字、空格、下划线和连字符
* **邮箱**
  * 必须是有效邮箱地址
  * 必须有有效的 DNS 记录
  * 最长 255 个字符
* **密码**
  * 最短 8 个字符
  * 必须包含大小写字母
  * 必须包含至少一个数字
  * 必须包含至少一个特殊符号
  * 不能是常用或泄露的密码



### 运行安装脚本

Coolify 提供了快速自动化安装脚本。为了安全起见，我们会用环境变量预设 root 管理员账号，防止安装过程中被未授权访问。

运行以下命令，记得替换用户名、邮箱和密码为你自己的安全信息：

```bash
env ROOT_USERNAME=zaphosting ROOT_USER_EMAIL=info@zap-hosting.com ROOT_USER_PASSWORD=zaphosting bash -c 'curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash'
```
:::note[开源]
安装脚本的源码可以在 [官方 Coolify 仓库](https://github.com/coollabsio/coolify/blob/v4.x/scripts/install.sh) 找到
:::

脚本会自动安装 Docker，设置所需网络，并配置 Coolify 容器。根据服务器硬件，过程可能需要几分钟。

![img](https://screensaver01.zap-hosting.com/index.php/s/Zx5DXzEH2MmrkrX/preview)



### 访问 Coolify

安装完成后，下一步用浏览器访问控制面板。输入服务器 IP 地址加端口 8000：`http://[your_server_ip]:8000`

因为你已通过安装命令提供了账号信息，登录界面会直接出现，而不是初始设置向导。

输入你命令行中使用的邮箱和密码登录控制面板。



### 设置 DNS 记录

登录 Coolify 控制面板后，第一件事是设置自定义域名。通过 IP 地址访问 Coolify (`http://[your_server_ip]:8000`) 不安全。

绑定域名后，Coolify 会自动为你的控制面板和未来所有应用生成免费 SSL 证书。

进入你的域名服务商的 DNS 管理页面，添加两个指向服务器的 `A` 记录。如果你的域名在 ZAP-Hosting 注册，可以参考我们的 [域名记录](domain-records.md) 指南，轻松添加这些记录：

| 名称 / 主机 | 类型 | 值                 | TTL           |
| ----------- | ---- | ------------------ | ------------- |
| `@`         | A    | `[your_server_ip]` | 自动 / 最低    |
| `*`         | A    | `[your_server_ip]` | 自动 / 最低    |

:::info[DNS 路由]
*   `@` 记录允许 Coolify 使用你的根域名
*   `*`（通配符）记录让 Coolify 自动路由任何新子域（如 `api.[your_domain]`），无需为每个项目添加 DNS 记录
:::



### 配置实例域名

为了给 Coolify 实例启用 SSL 证书，你需要给它绑定一个域名。进入左侧边栏的 **设置**，找到 **实例域名** 字段。输入你的域名，带上 `https://` 前缀（例如 `https://coolify.[your_domain]`）。点击 **保存** 完成设置。

![img](https://screensaver01.zap-hosting.com/index.php/s/jYW63sF9k5sZez3/preview)



## 部署你的第一个应用

完成以上后，访问 **项目** 标签页，开始部署你的第一个应用吧！

点击 **+ 添加资源**，可以添加公共仓库或 Docker Compose 文件，或者从丰富的一键模板库中选择预配置服务。你的 Coolify 安装已经准备就绪！

![img](https://screensaver01.zap-hosting.com/index.php/s/nEf9XBDrfypijE7/preview)



## 总结与更多资源

干得漂亮！你已经成功在服务器上安装了 Coolify，可以马上开始部署项目。我们还推荐你看看以下资源，能在服务器配置过程中提供更多帮助和指导。

- [coolify.io](https://coolify.io/) - 官方网站
- [coolify.io/docs](https://coolify.io/docs/) - Coolify 文档

有没覆盖到的问题？如果需要更多帮助，随时联系在线支持，我们每天都在线为你服务！🙂

<InlineVoucher />