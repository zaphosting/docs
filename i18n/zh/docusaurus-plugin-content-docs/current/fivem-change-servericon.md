---
id: fivem-change-servericon
title: "FiveM：更换服务器列表图标"
description: "了解如何用独特的96x96 PNG图标自定义你的FiveM服务器，提升服务器辨识度 → 立即了解"
sidebar_label: 更换服务器图标
services:
  - gameserver-fivem
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
想给你的服务器换个专属图标，打造独一无二的风格吗？这其实超简单！本指南教你如何准备图片，并设置成你的新服务器图标。

<InlineVoucher />

## 准备工作
要给FiveM服务器设置自定义图标，首先你得准备一张尺寸为96x96像素、格式为PNG（`.png`后缀）的图片。推荐用GIMP这类图像处理软件，或者直接用在线工具调整大小并转换格式。图片准备好后，就可以上传并在服务器配置里设置它啦。

## 安装步骤

### 上传文件

下一步是通过FTP把准备好的图标上传到你的FiveM游戏服务器。如果你不熟悉FTP，建议先看看我们的[FTP访问指南](gameserver-ftpaccess.md)。

登录FTP后，进入路径 `gXXXXXX/fivem/YOUR_FRAMEWORK/`，把你的服务器图标文件上传到这里。示例中用的是CFX默认模板，记得上传到你自己的框架文件夹里，并且记住文件名哦。

![img](https://screensaver01.zap-hosting.com/index.php/s/BffobqB7CmdK2Wb/download)

### 激活图标

为了让图标在服务器启动时加载，你需要在服务器的 `server.cfg` 文件里，找到 `load_server_icon` 参数并设置它。比如你的图标文件名叫 `zaphosting96x96`，配置命令就是：

```
# 加载服务器图标（96x96 PNG文件）
load_server_icon zaphosting96x96.png
```

:::info
请确保命令中图标文件名和你上传的完全一致，大小写也要匹配哦。
:::

## 总结

只要按步骤操作，下一次重启服务器时，你的新图标就会显示出来啦！如果有任何问题或需要帮助，随时联系我们的支持团队，我们每天都在线，随时为你服务！🙂

<InlineVoucher />