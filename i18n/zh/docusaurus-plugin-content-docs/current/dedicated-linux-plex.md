---
id: dedicated-linux-plex
title: "独服教程：Linux 上安装 Plex"
description: "了解如何用 Plex 无缝管理和流式传输你的个人媒体库，实现多设备轻松访问 → 立即了解"
sidebar_label: 安装 Plex
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Plex 是一个集中管理和流式传输媒体内容的平台，比如电影、电视剧、音乐和照片。通过 Plex 媒体服务器，你可以整理媒体库，自动添加元数据，并将内容推送到本地网络或互联网的各种设备上。这让 Plex 成为一个灵活又方便的方案，轻松访问你的个人媒体收藏。

![img](https://screensaver01.zap-hosting.com/index.php/s/68xdESEHimoY9Jp/preview)

想自己托管这个服务？我们会一步步带你完成安装和配置，告诉你所有需要注意的细节。

## 前置条件

安装 **Plex** 之前，确保你的主机环境满足以下要求，保证安装顺利且性能最佳。

| 硬件       | 最低配置     | ZAP-Hosting 推荐配置       |
| ---------- | ------------ | -------------------------- |
| CPU        | 4 核 vCPU    | 8 核 vCPU                  |
| 内存       | 4 GB         | 8 GB                       |
| 硬盘空间   | 25 GB        | 25 GB                      |

软件要求所有必要依赖已安装，并运行在支持的操作系统上。安装前请确认服务器满足以下条件：

**依赖项：** 无

**操作系统：** Ubuntu (16.04+) / Debian (8+) - Intel/AMD 64 位

确保依赖齐全且操作系统版本正确，避免安装 Plex 时出现兼容性问题。

## 安装

Plex 官方网站提供了最新的 Linux 版本 Plex 媒体服务器下载。请使用 64 位版本，确保兼容所有现代 Linux 发行版。运行以下命令下载 `.deb` 安装包：

```
wget https://downloads.plex.tv/plex-media-server-new/1.42.1.10060-4e8b05daf/debian/plexmediaserver_1.42.1.10060-4e8b05daf_amd64.deb
```

下载完成后，执行安装程序来搭建 Plex 媒体服务器。安装完成后，通过浏览器的网页界面进行配置，创建媒体库并管理你的内容。运行以下命令开始安装：

```
sudo dpkg -i plexmediaserver_1.42.1.10060-4e8b05daf_amd64.deb
```

安装好 Plex 媒体服务器后，在同一台机器上打开浏览器，访问 `http://127.0.0.1:32400/web`。这时你需要用已有的 Plex 账号登录，或者如果没有账号则创建一个。

登录步骤是必须的，用来将服务器绑定到你的个人账号，开启远程访问、用户管理和多设备同步等功能。认证成功后，你就进入了自己的 Plex 媒体实例。接下来可以创建电影、电视剧、音乐或照片库，自动抓取元数据，并与局域网或互联网的其他用户分享内容。

配置完成后，你也可以通过浏览器访问 `http://<ip-address>:32400` 来远程访问 Plex 媒体服务器。将 `<ip-address>` 替换成你的服务器公网 IP。

端口 32400 是 Plex 默认的网页访问端口，如果想通过互联网连接，可能需要在防火墙或路由器中放行该端口。

访问该地址后，会跳转到 Plex 登录页，登录后即可管理你的媒体库和设置。为了安全的外部访问，建议在 Plex 设置中启用远程访问，这样可以保证连接加密，并通过 Plex 服务中转流量。

![img](https://screensaver01.zap-hosting.com/index.php/s/jfQxZ6e4BGMfen5/preview)

## 总结及更多资源

恭喜你！现在已经成功在独服上安装并配置了 Plex。我们还推荐你看看以下资源，能帮你更好地配置和使用服务器：

- [Plex.com](https://Plex.com/) - 官方网站
- [support.plex.tv/articles/](https://support.plex.tv/articles/) - Plex 帮助中心（文档）

有啥具体问题这里没提到？随时联系在线客服，我们每天都在线，随时帮你解决！🙂