---
id: vserver-windows-fivem-txAdmin-cloudflare-tunnel
title: "VPS：为 txAdmin 设置 Cloudflare 隧道"
description: "了解如何为 txAdmin 设置 Cloudflare 隧道，提升安全性 → 立即了解更多"
sidebar_label: txAdmin 的 Cloudflare 隧道
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## 介绍

如果你想在现有的 ZAP-Hosting DDoS 保护基础上增加额外的安全措施，可以通过使用 Cloudflare 隧道来进一步保护你的 txAdmin 实例。这样设置后，txAdmin 的网页界面将不再通过服务器的公网 IP 暴露，而是通过你自己的域名安全访问。任何针对 txAdmin 端口的攻击都会被 Cloudflare 过滤，同时你可以完全锁定本地端口而不影响访问。



## 前提条件

要在 Windows 上使用 Cloudflare 隧道，你需要一台 Windows VPS、一个正常运行的 txAdmin 安装、你的 txAdmin 端口以及一个已经连接到你 Cloudflare 账户的域名。如果你的域名还未连接到 Cloudflare，请先参考我们的[Cloudflare 设置](domain-cloudflare-setup.md)指南。

Cloudflare 隧道通过在你的服务器和 Cloudflare 之间创建一个出站加密连接来工作，因此不需要为 txAdmin 保持任何公网端口开放。


## Cloudflare 设置

在你的 Windows vServer 上安装 cloudflared 之前，先在 Cloudflare 控制面板内创建并配置隧道。

登录你的 Cloudflare 账户，进入 Zero Trust 部分。在这里你可以创建一个新的隧道，后续会将流量转发到你的 txAdmin 界面。

![img](https://screensaver01.zap-hosting.com/index.php/s/KeEEZaecdbNjzPG/download)




## Cloudflare 隧道安装

Cloudflare 提供了一个名为 cloudflared 的小工具。在 Windows 上安装 cloudflared 非常简单。首先，下载 [Windows 安装程序](https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-windows-amd64.msi)。

![img](https://screensaver01.zap-hosting.com/index.php/s/JFsdnjkcR6LrJAr/preview)

下载完成后，运行安装程序并完成安装。安装结束后，以管理员身份打开命令提示符。在该窗口执行以下命令：

```
cloudflared.exe service install eyJhIjoiMj...
```

执行命令后，你的服务器将通过隧道连接到 Cloudflare。如果设置成功，Connectors 部分的状态会变为 **Connected**，确认隧道已激活并正常工作。

![img](https://screensaver01.zap-hosting.com/index.php/s/YWdHzTgx8B2dQJm/preview)



## 配置 Cloudflare 隧道

接下来，配置路由流量设置。创建一个你喜欢的新子域名条目。这里示例使用子域名 `txAdmin`，后续将通过它访问 txAdmin 界面。

选择你想使用的域名，服务类型选择 **HTTP**，URL 填写 **localhost:端口号**，端口号替换为你 txAdmin 实例定义的端口。此示例中使用端口 40500。

![img](https://screensaver01.zap-hosting.com/index.php/s/JEJGLrd8rrPZpq2/download)

:::warning 安全建议
建议不要使用默认的 txAdmin 端口 **40120**，改用其他端口以提升安全性。
:::



## 配置 Windows 防火墙

为了防止端口在隧道外被访问，配置 Windows 防火墙，使对应端口只接受来自本机的连接。将规则的远程地址限制为 127.0.0.1。这样强制所有流量必须来自本地系统，阻止任何外部访问，确保 cloudflared 后面的服务不会被隧道外的网络访问。

```
netsh advfirewall firewall add rule name="Cloudflared Local Only" dir=in action=allow protocol=TCP localport=40500 remoteip=127.0.0.1
```

配置完成后，任何来自机器外部的访问尝试都会被阻止，确保 cloudflared 后的服务只能通过隧道访问。



## 总结

一旦 Cloudflare 隧道激活，你的 txAdmin 界面将只能通过你自己的域名访问，所有请求都会经过 Cloudflare 过滤和保护。

![img](https://screensaver01.zap-hosting.com/index.php/s/qFwKn6gfeyDzPKX/preview)

通过服务器 IP 直接访问 txAdmin 端口被阻断，彻底消除了原有的攻击面。这让 txAdmin 更加稳定、安全，即使有人试图过载或攻击界面，也能可靠访问。

如果你有任何问题或需要帮助，欢迎随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />