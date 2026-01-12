---
id: redm-deletecache
title: "RedM：清空缓存"
description: "了解如何清理你的 RedM 服务器缓存，提升性能并解决错误，让游戏体验更顺畅 → 立即了解"
sidebar_label: 删除缓存
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## 介绍

清理 RedM 服务器缓存可以确保临时存储的文件被删除。这样服务器在下次启动时会重新下载或生成所有必需的文件。这有助于清除过时或损坏的数据，从而解决性能问题、脚本错误、崩溃或游戏世界加载问题。

<InlineVoucher />

## 简单方法

在你的 RedM 游戏服务器上删除缓存非常简单。首先，登录你的游戏服务器的网页控制面板。找到并打开游戏服务器网页控制面板中的 **设置** 部分。

![img](https://screensaver01.zap-hosting.com/index.php/s/qAiDSjC7jjmAq5B/download)



接着，滚动到页面底部，在 **操作** 小节下找到多个按钮。点击 **删除缓存文件** 按钮，即可清理你的游戏服务器缓存。

![img](https://screensaver01.zap-hosting.com/index.php/s/CW8HcxLbNyrw3Qy/download)

:::warning 
此操作会立即重启你的服务器以清理缓存文件，请确保你已准备好接受服务器重启。
:::


## 备用方法

首先，你需要通过 FTP 连接到你的服务器。如果你不熟悉 FTP 使用，建议先查看我们的 [FTP 访问](gameserver-ftpaccess.md) 指南。接下来，找到缓存文件夹并删除它。路径是 `/gXXXXXX/redm-txadmin/server-data/cache`，进入该目录即可访问缓存文件夹。

![img](https://screensaver01.zap-hosting.com/index.php/s/BkcqxjZ2dDeeMK2/download)

现在你只需清空缓存。点击 **Cache** 文件夹，然后进入 **Files**。选中 **Cache** 文件夹内所有的子文件夹并删除它们。

![img](https://screensaver01.zap-hosting.com/index.php/s/sb9Ttc2gEWwAzRP/download)

最后，重启你的 RedM 服务器以使更改生效。服务器重启后会重新生成缓存。



## 总结

只要你按照以上步骤操作，就成功清理了服务器缓存。如有任何疑问或需要帮助，欢迎随时联系我们的客服团队，我们每天都在线为你服务！🙂

<InlineVoucher />