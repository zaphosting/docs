---
id: satisfactory-savegame
title: "Satisfactory：管理存档"
description: "了解如何在本地和服务器上管理及备份你的 Satisfactory 游戏存档，保障游戏安全 → 立即了解更多"
sidebar_label: 存档管理
services:
  - gameserver-satisfactory
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

本指南将带你了解如何在游戏服务器上管理你的 Satisfactory 存档，包括备份本地和服务器存档，以及如何上传存档到服务器。

<InlineVoucher />

## 准备工作

要访问你的服务器文件，你需要一个 FTP 客户端，比如 [WinSCP](https://winscp.net/eng/index.php) 或 [FileZilla](https://filezilla-project.org/)，这两个都是开源且免费下载的。

你需要使用游戏服务器网页面板中 **工具->FTP浏览器** 下的凭据，通过 FTP 客户端连接到你的服务器。更多连接帮助请参考我们的 [通过 FTP 访问](gameserver-ftpaccess.md) 指南。

## 备份存档

### 本地存档

本地存档是指你在单机游戏或本地托管多人游戏时创建的存档。它们存放在 Windows 的 AppData 目录下，具体路径为：
```
../AppData/Local/FactoryGame/Saved/SaveGames
```

:::tip
你可以同时按下 `CTRL` + `R` 快捷键，打开运行窗口，输入以下路径快速访问：`%localappdata%/FactoryGame/Saved/SaveGames`，然后点击 **确定** 即可直达该文件夹。

![](https://screensaver01.zap-hosting.com/index.php/s/pbXDwJWfEPtbAY3/preview)
:::

在这里，你会看到包含所有本地存档的文件夹。

![](https://screensaver01.zap-hosting.com/index.php/s/knB2RkXYGNR7J5M/preview)

### 通过 FTP 访问存档

备份服务器上的存档很简单。连接到游戏服务器的 FTP 后，进入以下路径：
```
../satisfactory/save-backups
```

这里会有一个由随机字符组成的文件夹，就是你的存档。右键点击该文件夹，选择 **下载**，即可保存到本地设备。

![](https://screensaver01.zap-hosting.com/index.php/s/feHc74QHrzPwo24/preview)

### 自动备份

我们还提供通过网页面板自动备份存档（及配置文件）的功能。只需进入游戏服务器的网页面板，打开 **工具->备份**，即可设置自动备份计划。我们为你提供 10GB 免费备份空间，用于存储备份文件。更多备份相关信息，请查看我们的专门指南 [备份](gameserver-backups.md)。

## 上传存档

上传存档同样简单。先通过 FTP 客户端连接到你的游戏服务器，进入以下路径：
```
../satisfactory/save-backups
```

![](https://screensaver01.zap-hosting.com/index.php/s/8WsKYjYzNk54A65/preview)

将你想上传的存档文件夹直接拖拽到此目录，FTP 客户端会自动上传到服务器。

:::tip
建议记下你上传的存档文件夹名称，后续激活存档时会用到。
:::

## 激活存档

使用存档非常简单。你可以通过游戏内的 Satisfactory 服务器管理器，或者直接在服务器面板的 **存档管理器** 中进行管理和激活。



## 总结

你已经成功将存档添加到游戏服务器。如果有任何问题或需要帮助，欢迎随时联系我们的支持团队，我们每天都在线为你服务！🙂


<InlineVoucher />