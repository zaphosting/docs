---
id: rimworldtogether-server-savegames
title: "Rimworld Together：管理 Rimworld Together 存档"
description: "了解如何管理和备份你的 Rimworld Together 存档，实现无缝多人游戏体验 → 立即了解更多"
sidebar_label: 管理存档
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

本指南将带你了解如何在游戏服务器上管理你的 Rimworld Together 存档，包括备份本地和服务器存档，以及如何上传存档到服务器。

:::info
请注意，将已有的原版游戏存档迁移到带有模组的 Rimworld Together 服务器上，极有可能导致游戏体验异常。尤其是在不同模组的服务器之间迁移世界时更是如此。
:::

<InlineVoucher />

## 准备工作

要访问你的服务器文件，你需要使用 FTP 客户端，比如 [WinSCP](https://winscp.net/eng/index.php) 或 [FileZilla](https://filezilla-project.org/)，这两个都是开源且免费下载的工具。

你需要通过 FTP 客户端使用游戏服务器网页界面中 **工具->FTP浏览器** 下的凭据连接到你的服务器。更多连接帮助，请参考我们的 [通过 FTP 访问](gameserver-ftpaccess.md) 指南。

## 备份存档

### 本地存档

本地存档是指你在本地设备上托管多人游戏时创建的存档。它们位于 Windows 的 LocalLow AppData 文件夹中，具体路径如下：
```
../AppData/LocalLow/Ludeon Studios/RimWorld by Ludeon Studios/Saves
```

:::tip
你可以同时按下 `CTRL` + `R` 快捷键，打开运行对话框，输入以下路径快速访问：`%userprofile%/appdata/locallow/Ludeon Studios/RimWorld by Ludeon Studios/Saves`，然后点击 **确定**，即可直接跳转到该文件夹。

![](https://screensaver01.zap-hosting.com/index.php/s/LZ6Ljo2DfBoH45s/preview)
:::

在这里，你可以看到所有本地存档。

### 通过 FTP 访问存档

从服务器备份存档非常简单。连接到游戏服务器的 FTP 客户端后，进入以下路径：
```
../rimworld-together/Saves
```

在这里，你会看到每个文件夹对应一个存档。右键点击文件夹，选择 **下载**，即可将存档保存到本地设备。

![](https://screensaver01.zap-hosting.com/index.php/s/yjYXnDSHs7g5eCH/preview)

### 自动备份

我们还提供通过网页界面自动备份存档（及配置文件）的功能。只需进入游戏服务器网页界面，打开 **工具->备份** 页面。在这里你可以设置多种选项，安排自动备份任务。我们为你提供 10GB 免费备份存储空间，用于保存你的备份文件。更多备份相关信息，请查看我们的专门指南 [备份](gameserver-backups.md)。

## 上传存档

上传存档同样简单。首先确保你已通过 FTP 客户端连接到游戏服务器。然后进入以下路径：
```
../rimworld-together/Saves
```

![](https://screensaver01.zap-hosting.com/index.php/s/s4zakSdKniMdGmT/preview)

直接将你的存档文件夹拖拽到该目录，FTP 客户端会自动上传到服务器。

:::info
如本指南开头所述，在不同模组的服务器之间迁移世界，极有可能导致游戏体验异常。
:::

<InlineVoucher />