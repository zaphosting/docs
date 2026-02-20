---
id: dedicated-windows-plex
title: "在 Windows 服务器上安装 Plex - 流式播放你的个人媒体库"
description: "了解如何使用 Plex 轻松管理和流式传输你的个人媒体，实现多设备无缝访问 → 立即了解更多"
sidebar_label: 安装 Plex
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Plex 是一个用于管理和流式传输电影、电视剧、音乐和照片等媒体内容的平台，集中管理你的媒体库。通过 Plex 媒体服务器，你可以组织媒体库，自动添加元数据，并将内容流式传输到本地网络或互联网中的各种设备。这让 Plex 成为一个灵活的解决方案，让你轻松便捷地访问个人媒体收藏。

![img](https://screensaver01.zap-hosting.com/index.php/s/68xdESEHimoY9Jp/preview)

想自己托管这个服务？我们会一步步带你完成安装和配置，并告诉你所有需要注意的事项。

## 前提条件

在安装 **Plex** 之前，请确保你的主机环境满足以下要求，以保证安装顺利并获得最佳性能。

| 硬件       | 最低要求    | ZAP-Hosting 推荐配置       |
| ---------- | ---------- | -------------------------- |
| CPU        | 4 核 vCPU  | 8 核 vCPU                  |
| 内存       | 4 GB       | 8 GB                       |
| 硬盘空间   | 25 GB      | 25 GB                      |

软件要求所有必要的依赖已安装，并且运行在支持的操作系统上。请确保你的服务器满足以下条件后再继续安装：

**依赖项：** 无

**操作系统：** Windows 10/11，Windows Server 20XX

确保所有依赖项已安装且操作系统版本正确，以避免安装 Plex 时出现兼容性问题。

## 安装

Plex 官方媒体网站提供了 Plex 媒体服务器的最新 Windows 版本下载。请使用 64 位版本，以确保兼容所有现代 Windows 版本。下载地址：https://www.plex.tv/media-server-downloads/

![img](https://screensaver01.zap-hosting.com/index.php/s/d3b4mZsiQ4iqXrL/preview)

下载完成后，运行安装程序即可安装 Plex 媒体服务器。安装完成后，通过浏览器中的网页界面进行配置，创建媒体库并管理你的媒体收藏。

![img](https://screensaver01.zap-hosting.com/index.php/s/5TnmMeRkdLAt2RJ/download)

安装完成后，Plex 媒体服务器的网页界面会自动在默认浏览器中打开。此时，你需要使用已有的 Plex 账号登录，或者如果还没有账号，可以创建一个新账号。

登录步骤是必须的，用于将服务器与你的个人账号绑定，从而启用远程访问、用户管理和多设备同步等功能。认证成功后，你就进入了自己的 Plex 媒体实例。接下来，你可以创建电影、电视剧、音乐或照片库，自动获取元数据，并与本地网络或互联网中的其他用户共享内容。

![img](https://screensaver01.zap-hosting.com/index.php/s/HmQPZGsBqxqPHmy/download)

安装完成后，你也可以通过浏览器访问 `http://<ip-address>:32400` 来远程访问 Plex 媒体服务器。将 `<ip-address>` 替换为你的服务器公网 IP。

端口 32400 是 Plex 网页访问的默认端口，如果你想通过互联网连接，可能需要在防火墙或路由器中开放此端口。

访问该地址后，你会被重定向到 Plex 登录页面，登录后即可管理你的媒体库和设置。为了安全的外部访问，建议在 Plex 设置中启用远程访问，这样可以保证连接加密，并通过 Plex 服务中转流量。

![img](https://screensaver01.zap-hosting.com/index.php/s/jfQxZ6e4BGMfen5/preview)

## 总结与更多资源

恭喜你！你已经成功在 VPS/独立服务器上安装并配置了 Plex。我们还推荐你查看以下资源，它们能在服务器配置过程中为你提供更多帮助和指导：

- [Plex.com](https://Plex.com/) - 官方网站
- [support.plex.tv/articles/](https://support.plex.tv/articles/) - Plex 帮助中心（文档）

有具体问题这里没提到？如果你有更多疑问或需要帮助，随时联系在线客服，我们每天都在线为你服务！🙂