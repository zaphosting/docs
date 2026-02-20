---
id: vserver-linux-bitwarden
title: "在 Linux 服务器上安装 Bitwarden - 保障你的密码管理安全"
description: "了解如何安全地自托管 Bitwarden，使用端到端加密和强大凭证功能管理密码 → 立即了解更多"
sidebar_label: 安装 Bitwarden
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Bitwarden 是一款开源密码管理器，支持密码和通行密钥，采用零知识、端到端加密来保护数据。你可以选择使用云服务，也可以自托管，功能包括生成、存储和自动填充强密码。

![img](https://screensaver01.zap-hosting.com/index.php/s/RwKmstAct5kNQwB/preview)

想自己托管这项服务？我们会带你一步步完成安装和配置，同时告诉你所有需要注意的事项。

<InlineVoucher />

## 前提条件

在安装 **Bitwarden** 之前，请确保你的主机环境满足以下要求，以保证安装顺利且性能最佳。

| 硬件       | 最低要求    | ZAP-Hosting 推荐配置       |
| ---------- | ---------- | -------------------------- |
| CPU        | 1 个 vCPU  | 4 个 vCPU                  |
| 内存       | 2 GB       | 4 GB                       |
| 磁盘空间   | 12 GB      | 25 GB                      |

软件要求所有必要依赖已安装，并运行在支持的操作系统上。请确保你的服务器满足以下条件后再继续安装：

**依赖项：** `Docker（引擎版本 26+ 和 Compose）`

**操作系统：** 支持 Docker 26+ 的最新 Ubuntu/Debian 版本

确保所有依赖已安装且操作系统版本正确，以避免安装 Bitwarden 时出现兼容性问题。

## 准备工作

在搭建 **Bitwarden** 之前，需要先准备好系统，包括将操作系统更新到最新版本并安装所有必需依赖。这些准备工作能保证环境稳定，避免安装过程中或之后出现问题。

### 更新系统
为了确保系统运行最新的软件和安全补丁，建议先执行系统更新。运行以下命令：

```
sudo apt update && sudo apt upgrade -y
```
这会确保系统拥有最新的安全补丁和软件版本，方便后续操作。

### 安装依赖
更新完成后，就可以安装依赖了。Bitwarden 会通过一系列 Docker 容器部署和运行，因此需要先安装 Docker。运行以下命令：

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

关于 Docker 的完整安装流程和使用指南，请参考我们的 [Docker](dedicated-linux-docker.md) 教程。

### 创建用户和目录

建议为 Bitwarden 创建一个专用的 `bitwarden` 服务账户，用于安装和运行 Bitwarden。这样可以确保 Bitwarden 实例与服务器上其他应用隔离。

创建 bitwarden 用户并设置一个强且唯一的密码：

```
sudo adduser bitwarden
sudo passwd bitwarden
```

如果 docker 组不存在，先创建它，然后将 bitwarden 用户加入 docker 组：

```
sudo groupadd docker
sudo usermod -aG docker bitwarden
```

创建工作目录，设置权限，并将所有权赋予 bitwarden 用户：

```
sudo mkdir /opt/bitwarden
sudo chmod -R 700 /opt/bitwarden
sudo chown -R bitwarden:bitwarden /opt/bitwarden
```

### 配置你的域名

默认情况下，Bitwarden 通过主机的 80（HTTP）和 443（HTTPS）端口运行。请设置一个域名并将 DNS 记录指向你的主机，比如 server.example.com，尤其是在公网访问时。建议不要在主机名中包含 Bitwarden 字样，以减少服务器角色或软件信息泄露。

## 安装

满足所有要求并完成准备后，就可以开始安装 Bitwarden 了。

先下载 Bitwarden 安装脚本到你的机器，然后执行安装脚本。`./bwdata` 目录会在 `bitwarden.sh` 所在位置相对创建。

```
curl -Lso bitwarden.sh "https://func.bitwarden.com/api/dl/?app=self-host&platform=linux" && chmod 700 bitwarden.sh
./bitwarden.sh install
```

安装过程中，首先输入你的 Bitwarden 实例域名，通常是你配置的 DNS 记录。接着选择是否让 Let’s Encrypt 生成免费的受信任 SSL 证书。如果选择是，需要提供一个邮箱用于证书到期通知；如果选择否，则会进入证书相关问题。

输入你的安装 ID 和安装密钥，这两个信息可在 [Bitwarden](https://bitwarden.com/host) 获取。然后选择区域 US 或 EU，这只在你将自托管实例连接到付费订阅时才有影响。

如果不使用 Let’s Encrypt，可以通过将证书文件放到 `./bwdata/ssl/your.domain` 并声明是否受信任来使用已有证书。也可以生成自签名证书，但仅推荐用于测试。如果选择不使用证书，必须在安装或 Bitwarden 应用前放置 HTTPS 代理，否则应用无法正常工作。

## 配置

安装完成后，使用两个文件完成基础配置。首先编辑环境文件 `./bwdata/env/global.override.env`，设置 SMTP 服务器信息，包括主机、端口、SSL、用户名和密码，以便 Bitwarden 发送验证邮件和组织邀请邮件。如果需要访问系统管理员门户，添加管理员邮箱到 `adminSettings__admins`。

```
...
globalSettings__mail__smtp__host=<placeholder>
globalSettings__mail__smtp__port=<placeholder>
globalSettings__mail__smtp__ssl=<placeholder>
globalSettings__mail__smtp__username=<placeholder>
globalSettings__mail__smtp__password=<placeholder>
...
adminSettings__admins=
...
```

用 `./bitwarden.sh checksmtp` 验证 SMTP 设置。正确配置会显示成功，否则会提示缺少 OpenSSL 或配置错误。修改后用 `./bitwarden.sh restart` 应用更改。

接着检查 `./bwdata/config.yml` 中的安装参数。该文件控制生成的资源，特殊环境下（如代理后面或使用非默认端口）需要调整。修改后用 `./bitwarden.sh rebuild` 应用。

最后用 `./bitwarden.sh start` 启动实例。首次启动可能较慢，因为 Docker 需要拉取镜像。用 `docker ps` 确认所有容器状态正常。然后打开你配置的域名访问 Web Vault，必要时注册账号。邮件验证需要正确配置 SMTP。

## 总结与更多资源

恭喜你！现在已经成功在你的 VPS/独服上安装并配置了 Bitwarden。我们还推荐你看看以下资源，能为你的服务器配置提供更多帮助和指导：

- [bitwarden.com](https://bitwarden.com/) - 官方网站
- https://bitwarden.com/help/ - Bitwarden 帮助中心（文档）

有具体问题这里没提到？欢迎随时联系我们的支持团队，我们每天都在线，随时为你服务！🙂