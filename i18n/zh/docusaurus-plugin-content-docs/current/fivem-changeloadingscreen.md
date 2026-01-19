---
id: fivem-changeloadingscreen
title: "FiveM：自定义加载界面安装教程"
description: "了解如何定制你的 FiveM 加载界面，打造独一无二的玩家体验，提升服务器视觉效果 → 立即了解"
sidebar_label: 安装自定义加载界面
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## 介绍

想用自己定制的加载界面替代默认的 FiveM 加载界面吗？下面我们会告诉你怎么做，以及需要遵循的步骤！

<InlineVoucher />



## 准备工作

要安装自定义加载界面，首先你需要找到合适的资源。你可以在官方的 [Cfx.re 网站](https://forum.cfx.re/c/releases/7) 上找到大量资源。接着，下载资源并在电脑上解压。

![img](https://screensaver01.zap-hosting.com/index.php/s/zZKWWMWCJPqKonj/preview)



## 安装步骤

加载界面的安装是通过 FTP 完成的。首先通过 FTP 连接到你的游戏服务器。如果你还不会用 FTP，可以参考我们的 [FTP 访问指南](gameserver-ftpaccess.md)。

连接成功后，进入资源文件夹。根据你安装的框架不同，资源文件夹路径一般是：`/gXXXXXX/fivem/YOUR_FRAMEWORK/resources`

将你之前下载并解压的资源文件夹上传到这个位置。

![img](https://screensaver01.zap-hosting.com/index.php/s/qkYBKoMox94EEWK/download)



资源上传成功后，还需要把加载界面资源添加到服务器配置文件 `server.cfg` 里。登录 txAdmin 面板，打开 CFG 编辑器。

然后用 `start resourcename` 命令把资源启动起来。比如本例中是 `start loadingscreen`。保存修改，重启服务器。

![img](https://screensaver01.zap-hosting.com/index.php/s/gxniiKj3HmLGeEE/preview)







## 总结

只要你按照步骤操作，服务器重启后就能看到你的新加载界面啦！如果有任何问题或需要帮助，随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />