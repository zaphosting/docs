---
id: arma3-missionfile
title: "Arma 3：上传你自己的任务文件"
description: "了解如何在你的 Arma 3 服务器上上传并加载自定义任务文件，打造专属游戏体验 → 立即了解更多"
sidebar_label: 上传你自己的任务文件
services:
  - gameserver-arma3
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 上传任务文件

上传你自己的任务文件前，先通过 FTP 连接到你的服务器：[通过 FTP 访问](gameserver-ftpaccess.md)。  
然后把任务文件上传到你的 **mpmissions** 目录，路径一般是 **/gxxxxxx/arma3/**。  
本例中，我们将任务文件 **King_of_the_hill.Altis** 上传到服务器。

![](https://screensaver01.zap-hosting.com/index.php/s/jkfK9X48qj2e7Pn/preview)

<InlineVoucher />

## 在服务器上加载任务文件

要从服务器加载任务文件，进入你的 Arma 3 服务器面板，点击左侧菜单的 **Configs** 标签：

![](https://screensaver01.zap-hosting.com/index.php/s/PD98ATq8xHdjy8Q/preview)

在这里编辑 **server.cfg** 文件，输入你的任务文件名，如图所示：

![](https://screensaver01.zap-hosting.com/index.php/s/aG7QESxyTNpATsG/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/6TZ7mc578pcHpbF/preview)

完成后点击 **保存**，然后启动服务器。新任务文件就会被加载啦。

<InlineVoucher />