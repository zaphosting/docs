---
id: dedicated-windows-bitwarden
title: "独立服务器：Windows 上安装 Bitwarden"
description: "了解如何使用端到端加密和自托管选项安全管理密码 → 立即了解更多"
sidebar_label: 安装 Bitwarden
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Bitwarden 是一款开源密码管理器，支持密码和密钥，采用零知识、端到端加密保护数据。你可以选择云服务或自托管，功能包括生成、存储和自动填充强密码。

![img](https://screensaver01.zap-hosting.com/index.php/s/RwKmstAct5kNQwB/preview)

想自己托管这项服务？我们会带你一步步完成安装和配置，同时告诉你所有需要注意的事项。

## 前提条件

在安装 **Bitwarden** 之前，请确保你的主机环境满足以下要求，以保证安装顺利且性能最佳。

| 硬件       | 最低要求    | ZAP-Hosting 推荐配置       |
| ---------- | ----------- | -------------------------- |
| CPU        | 1 核心      | 4 核心                     |
| 内存       | 2 GB        | 4 GB                       |
| 硬盘空间   | 12 GB       | 25 GB                      |

软件要求所有必要依赖已安装，并运行在支持的操作系统上。请确保服务器满足以下条件后再继续安装：

**依赖项：** `Docker（引擎 26+ 和 Compose）`

**操作系统：** 支持 Docker 26+ 的最新 Windows Server 版本

确保所有依赖已安装且操作系统版本正确，以避免安装 Bitwarden 时出现兼容性问题。

## 准备工作

在搭建 **Bitwarden** 之前，需要先准备系统，包括更新操作系统到最新版本并安装所有必需依赖。这些准备工作能保证环境稳定，避免安装过程中或之后出现问题。

### 更新系统
为了确保系统运行最新的软件和安全补丁，建议先执行系统更新。这能保证系统拥有最新的安全修复和软件版本。

### 安装依赖
更新完成后，就可以安装依赖了。Bitwarden 会通过一系列 Docker 容器部署和运行，因此需要先安装 Docker。请在服务器上安装 [Docker Desktop](https://docs.docker.com/desktop/setup/install/windows-install/)。

我们在 [Docker 指南](dedicated-linux-docker.md) 中提供了完整的安装流程和使用教程。

### 创建用户和目录

建议为 Bitwarden 配置一个专用的 Windows 服务账户，用于安装和运行 Bitwarden。这样可以确保 Bitwarden 实例与服务器上其他应用隔离。

以管理员身份打开 PowerShell，运行以下命令创建 Bitwarden 本地用户。执行第一个命令后会弹出密码输入框，输入并确认密码后，执行第二个命令完成创建。

```
PS C:\> $Password = Read-Host -AsSecureString
New-LocalUser "Bitwarden" -Password $Password -Description "Bitwarden Local Admin"
```

接着在 `C:\` 下为新用户创建 Bitwarden 文件夹：

```
PS C:\> mkdir Bitwarden
```

打开 Docker Desktop，进入 **设置 → 资源 → 文件共享**，将目录 `C:\Bitwarden` 添加到共享路径。点击应用并重启以生效。

### 配置域名

默认情况下，Bitwarden 通过主机的 80（HTTP）和 443（HTTPS）端口运行。请设置一个域名并将 DNS 记录指向主机，例如 server.example.com，尤其是在公网访问时。避免在主机名中包含 Bitwarden，减少服务器角色或软件信息泄露。

## 安装

满足所有要求并完成准备后，即可开始安装 Bitwarden。

下载 Bitwarden 安装脚本到服务器，然后执行安装脚本：

```
cd C:\Bitwarden
Invoke-RestMethod -OutFile bitwarden.ps1 -Uri "https://func.bitwarden.com/api/dl/?app=self-host&platform=windows"
.\bitwarden.ps1 -install
```

安装过程中，首先输入 Bitwarden 实例的域名，通常是你配置的 DNS 记录。接着选择是否让 Let’s Encrypt 生成免费可信的 SSL 证书。如果选择是，需要提供邮箱用于证书到期通知；如果选择否，则会进入证书相关问题。

输入你的安装 ID 和安装密钥，这两个信息可在 [Bitwarden 官网](https://bitwarden.com/host) 获取。然后选择 US 或 EU 区域，这只在将自托管实例连接到付费订阅时有影响。

如果不使用 Let’s Encrypt，可以通过将证书文件放在 `C:\Bitwarden\bwdata\ssl\<your_domain>` 并声明是否受信任来使用已有证书。也可以生成自签名证书，推荐仅用于测试。如果选择不使用证书，必须在安装前放置 HTTPS 代理，否则 Bitwarden 应用无法正常工作。

## 配置

安装完成后，通过两个文件完成基础配置。首先编辑 `\bwdata\env\global.override.env` 环境文件，填写 SMTP 服务器信息，包括主机、端口、SSL、用户名和密码，以便 Bitwarden 发送验证邮件和组织邀请邮件。如果需要访问系统管理员门户，请在 `adminSettings__admins` 中添加管理员邮箱。

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

验证 SMTP 设置。正确配置会显示成功，否则会提示缺少 OpenSSL 或配置错误。修改后用 `.\bitwarden.ps1 -start` 应用。

正确配置后用 `.\bitwarden.ps1 -restart` 重启应用。

接着检查 `.\bwdata\config.yml` 中的安装参数。该文件控制生成的资源，特殊环境（如代理或非默认端口）需调整。修改后用 `.\bitwarden.ps1 -rebuild` 应用。

最后用 `.\bitwarden.ps1 -start` 启动实例。首次启动可能较慢，因为 Docker 需要拉取镜像。用 `docker ps` 确认所有容器状态正常。然后访问配置的域名打开 Web Vault，按需注册账号。邮箱验证需要正确配置 SMTP。

## 总结与更多资源

恭喜！你已成功在独立服务器上安装并配置了 Bitwarden。我们还推荐你查看以下资源，能为你的服务器配置提供更多帮助和指导：

- [bitwarden.com](https://bitwarden.com/) - 官方网站
- https://bitwarden.com/help/ - Bitwarden 帮助中心（文档）

有没覆盖到的问题？如果需要更多帮助，随时联系在线客服，我们每天都在线为你服务！🙂