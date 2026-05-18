---
id: gmod-fastdl
title: "Garry's Mod：FastDL 设置指南"
description: "了解如何使用 ZAP-Hosting Webspace 优化游戏内容传输，通过 FastDL 实现更快下载和减轻服务器负载 → 立即了解"
sidebar_label: FastDL
services:
  - gameserver-gmod
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## 介绍

FastDL（快速下载）是一种通过外部网页服务器传输自定义内容（如地图、音效或模型）的方法，而不是直接通过游戏服务器。这样可以提升玩家的下载速度，同时减轻服务器负载。

要使用 FastDL，你需要一个公开的 HTTP 网页服务器。一个超棒的选择是 **ZAP-Hosting 的 Webspace 套餐**，非常适合用来传输游戏内容。本指南将教你如何用 ZAP Webspace 搭建 FastDL。

<InlineVoucher />

## 需求

你需要一个由 ZAP-Hosting 托管的活跃 Garry's Mod 服务器，以及一个额外的 Webspace 套餐。游戏服务器和 Webspace 都必须能通过 FTP 或文件管理器访问。

在游戏服务器端，你想分发的文件（比如 `.bsp` 地图、音效文件或模型）必须已经整理好。Webspace 上的文件夹结构也必须完全对应，才能保证 FastDL 正常工作。

## 准备 Webspace

我们推荐使用 ZAP Webspace 面板内置的 **文件管理器** 来管理和上传 FastDL 文件。你可以在面板中通过 **Webspace > 文件管理器** 直接访问。

![img](https://screensaver01.zap-hosting.com/index.php/s/dptRwGTgL6bHXrE/preview)

在你的 Webspace 根目录下，创建一个名为 `fastdl` 的文件夹。然后根据你要提供的内容，分别在里面创建 `maps`、`sound` 或 `models` 等子文件夹。文件夹结构必须和你的 Garry's Mod 服务器上的完全一致。

![img](https://screensaver01.zap-hosting.com/index.php/s/beCCJPFT5si3wRZ/preview)

上传文件前，确保它们已经**用 `.bz2` 格式压缩**（bzip2）。大多数基于 Source 引擎的游戏都要求文件必须这样传输。举例来说，地图文件 `custom_map.bsp` 应该上传为 `custom_map.bsp.bz2`。

:::info 用 7-Zip 压缩
你可以用 **7-Zip** 等工具把文件压缩成 `.bz2` 格式。只需右键文件，选择 **7-Zip > 添加到压缩文件...**，然后把压缩格式选成 `bzip2`，确认即可。
:::

上传压缩文件到对应文件夹后，确保**所有目录和文件的读取权限正确**，这样外部才能访问。文件管理器支持你调整文件夹和文件权限。

文件上传并确认权限后，FastDL 内容就能通过下面的公开链接访问：

```
https://[你的域名].zap.cloud/fastdl/
```

你可以用浏览器打开这个链接，测试文件是否能正常访问。

## 配置游戏服务器

在 ZAP 面板的游戏服务器管理里，打开 **Configs** 页面里的 `server.cfg` 文件，添加以下内容：

```cfg
sv_downloadurl "https://[你的域名].zap.cloud/fastdl/"
sv_allowdownload 1
sv_allowupload 0
```

确保 FastDL 的 URL 路径和你 Webspace 上的文件结构完全一致。保存后，重启游戏服务器以应用配置。

## 总结

利用你自己的 ZAP Webspace，FastDL 可以快速且稳定地搭建完成。这让自定义内容的传输更快更高效，极大提升所有玩家在你的 Garry's Mod 服务器上的体验。

如果有任何问题或需要帮助，随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />