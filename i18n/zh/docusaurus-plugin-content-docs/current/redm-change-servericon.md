---
id: redm-change-servericon
title: "RedM：更换服务器列表图标"
description: "了解如何用完美的96x96 PNG图片自定义你的RedM服务器图标，打造独一无二的风格 → 立即了解"
sidebar_label: 更换服务器图标
services:
  - gameserver-redm
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
想给你的服务器换个专属图标，打造个性化的服务器形象？这其实超简单！本指南教你如何准备图片并设置成你的新服务器图标。

<InlineVoucher />

## 准备工作
要给你的RedM服务器设置自定义图标，首先得准备一张尺寸为96x96像素、PNG格式（`.png`后缀）的图片。推荐用GIMP这类图像处理软件，或者直接用在线工具调整尺寸并转换格式。准备好符合要求的图片后，就可以上传并在服务器配置里设置它啦。

## 安装步骤

### 上传文件

下一步是通过FTP把准备好的图片上传到你的RedM游戏服务器。如果你还不熟悉FTP操作，建议先看看我们的[FTP访问指南](gameserver-ftpaccess.md)。

登录FTP后，进入路径 `gXXXXXX/redm-txadmin/YOUR_FRAMEWORK/`，把你的服务器图标文件上传到这里。这里以CFX默认模板为例，上传到你对应的框架文件夹。记得确认文件名哦。

![img](https://screensaver01.zap-hosting.com/index.php/s/XyxtsR2FbmjD6SM/download)

### 激活图标

为了让服务器启动时加载你的图标，需要在服务器的 `server.cfg` 文件中设置 `load_server_icon` 参数。比如你把图标命名为 `zaphosting96x96`，配置命令就是：

```
# 加载服务器图标（96x96 PNG文件）
load_server_icon zaphosting96x96.png
```

:::info
请确保命令中设置的图片文件名和你上传的文件名完全一致，大小写敏感哦。
:::

## 总结

只要按照步骤操作，下次重启服务器时，你的新服务器图标就会显示出来啦！如果有任何疑问或需要帮助，随时联系我们的支持团队，我们每天在线为你服务！🙂

<InlineVoucher />