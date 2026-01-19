---
id: fivem-esx-changejobgarages
title: "FiveM：工作车库 - 添加车辆"
description: "了解如何自定义并扩展工作车库，添加更多车辆，提升你的游戏体验 → 立即了解"
sidebar_label: 添加工作车库车辆
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

想要更换或扩展你工作车库里的车辆吗？下面我们会告诉你具体怎么操作，以及需要遵循哪些步骤！

<InlineVoucher />

## 配置

额外车辆是通过 FTP 添加到工作车库的。首先，通过 FTP 连接到你的游戏服务器。如果你还不熟悉 FTP 的使用，可以参考我们的[FTP 访问指南](gameserver-ftpaccess.md)。

连接成功后，进入 ESX 资源文件夹，打开 esx_addons 文件夹。文件夹结构大致是这样的：`/gXXXXXX/fivem/ESXLegacy_XXXXXX.base/resources/[esx_addons]`

接着选择你想修改的工作，比如 Ambulance（救护车）或 Police（警察），打开对应资源里的 `config.lua` 配置文件。

![img](https://screensaver01.zap-hosting.com/index.php/s/xQYbzYs2xAkb5fp/preview)

在配置文件中，找到 `Config.AuthorizedVehicles` 这一部分。你可以用搜索功能快速定位，然后根据需求调整或添加车辆：

![img](https://screensaver01.zap-hosting.com/index.php/s/eyK7q78aewrpJtx/preview)

:::warning 
添加新车辆时，别忘了前一行末尾加逗号，否则可能会出问题哦。
:::

## 总结

只要你按照以上步骤操作，就能成功自定义或扩展你的工作车库啦！如果还有疑问或需要帮助，随时联系我们的客服团队，我们每天都在线为你服务！🙂

<InlineVoucher />