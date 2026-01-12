---
id: vserver-linux-plex
title: "VPS：在 Linux 上安装 Plex"
description: "轻松管理和流式传输你的个人媒体库，实现多设备无缝访问 → 立即了解更多"
sidebar_label: 安装 Plex
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Plex 是一个用于管理和流式传输电影、电视剧、音乐和照片等媒体内容的平台，集中管理你的媒体库。通过 Plex 媒体服务器，可以组织媒体库，自动添加元数据，并将内容流式传输到本地网络或互联网中的各种设备。这让 Plex 成为轻松便捷访问个人媒体收藏的灵活解决方案。

![img](https://screensaver01.zap-hosting.com/index.php/s/68xdESEHimoY9Jp/preview)

想自己托管这个服务？我们会一步步带你完成安装和配置，并告诉你所有需要注意的事项。

<InlineVoucher />

## 前提条件

在安装 **Plex** 之前，请确保你的主机环境满足以下要求，以保证安装顺利且性能最佳。

| 硬件       | 最低要求    | ZAP-Hosting 推荐配置       |
| ---------- | ----------- | -------------------------- |
| CPU        | 4 核 vCPU  | 8 核 vCPU                  |
| 内存       | 4 GB       | 8 GB                       |
| 硬盘空间   | 25 GB      | 25 GB                      |

软件要求所有必要依赖已安装，并运行在支持的操作系统上。请确保你的服务器满足以下条件后再继续安装：

**依赖项：** 无

**操作系统：** Ubuntu (16.04+) / Debian (8+) - Intel/AMD 64 位

确保所有依赖已安装且操作系统版本正确，以避免安装 Plex 时出现兼容性问题。

## 安装

Plex 官方网站提供了最新的 Linux 版本 Plex 媒体服务器下载。请使用 64 位版本以确保兼容所有现代 Linux 发行版。运行以下命令下载 `.deb` 安装包：

```
wget https://downloads.plex.tv/plex-media-server-new/1.42.1.10060-4e8b05daf/debian/plexmediaserver_1.42.1.10060-4e8b05daf_amd64.deb
```

下载完成后，运行安装程序来设置 Plex 媒体服务器。安装完成后，通过浏览器中的网页界面进行配置，创建媒体库并管理你的媒体收藏。运行以下命令开始安装：

```
sudo dpkg -i plexmediaserver_1.42.1.10060-4e8b05daf_amd64.deb
```

要设置 Plex 媒体服务器，在安装服务器的同一台机器上打开浏览器，访问 `http://127.0.0.1:32400/web`。此时，你需要使用已有的 Plex 账号登录，或者如果没有账号则创建一个新账号。

此登录步骤用于将服务器与你的个人账号绑定，启用远程访问、用户管理和设备同步等功能。认证成功后，你将进入自己的 Plex 媒体实例。接下来，你可以创建电影、电视剧、音乐或照片库，自动获取元数据，并与本地网络或互联网中的其他用户共享内容。

设置完成后，你还可以通过浏览器访问 `http://<ip-address>:32400` 来远程访问你的 Plex 媒体服务器。将 `<ip-address>` 替换为你的服务器公网 IP。

端口 32400 是 Plex 网页访问的默认端口，如果想通过互联网连接，可能需要在防火墙或路由器中开放此端口。

访问该地址后，你会被重定向到 Plex 登录页面，之后即可管理你的媒体库和设置。为了安全的外部访问，建议在 Plex 设置中启用远程访问，这样可以确保连接加密，并通过 Plex 服务中继流量。

![img](https://screensaver01.zap-hosting.com/index.php/s/jfQxZ6e4BGMfen5/preview)

## 结语及更多资源

恭喜你！现在已经成功在 VPS 上安装并配置了 Plex。我们还推荐你查看以下资源，能为你的服务器配置提供更多帮助和指导：

- [Plex.com](https://Plex.com/) - 官方网站
- [support.plex.tv/articles/](https://support.plex.tv/articles/) - Plex 帮助中心（文档）

有具体问题这里没提到？如果需要更多帮助，随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />