---
id: vrising-server-savegames
title: "V Rising：管理你的 V Rising 存档"
description: "了解如何管理和备份你的 V Rising 游戏存档，保障多人游戏体验安全 → 立即了解更多"
sidebar_label: 管理存档
services:
  - gameserver-vrising
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

本指南将带你了解如何在游戏服务器上管理你的 V Rising 存档，包括备份本地和服务器存档，以及如何上传存档到服务器。

<InlineVoucher />

## 准备工作

要访问你的服务器文件，你需要一个 FTP 客户端，比如 [WinSCP](https://winscp.net/eng/index.php) 或 [FileZilla](https://filezilla-project.org/)，这两个都是开源且免费下载的。

你需要使用游戏服务器网页面板中 **工具->FTP浏览器** 下的凭据，通过 FTP 客户端连接到你的服务器。更多连接帮助，请参考我们的 [通过 FTP 访问](gameserver-ftpaccess.md) 指南。

## 备份存档

### 本地存档

本地存档是指你在本地设备上托管多人游戏时创建的存档。它们位于 Windows 的 LocalLow AppData 文件夹，具体路径如下：
```
../AppData/LocalLow/Stunlock Studios/VRising
```

:::tip
你可以同时按下 `CTRL` + `R` 快捷键，打开运行对话框，输入以下路径快速访问：`%userprofile%/appdata/locallow/Stunlock Studios/VRising`，然后点击 **确定** 即可直达该文件夹。

![](https://screensaver01.zap-hosting.com/index.php/s/dz4ytiTai5jD2ep/preview)
:::

在这里，你会看到 `Saves` 和/或 `CloudSaves` 文件夹，具体取决于你是否启用了 Steam 云存档功能以及服务器类型。进入这些文件夹即可找到你的本地存档。

:::note
根据游戏版本，你的存档会放在 v1 或 v3 文件夹中。
:::

### 通过 FTP 访问存档

从服务器备份存档非常简单。连接到游戏服务器的 FTP 客户端后，进入以下路径：
```
../vrising/save-data/Saves
```

这里你会看到 v1 和 v3 文件夹，具体取决于游戏版本。进入对应文件夹即可找到你的存档。右键点击文件夹，选择 **下载**，即可将存档保存到本地设备。

![](https://screensaver01.zap-hosting.com/index.php/s/tZ4HngqLeHTkizz/preview)

### 自动备份

我们还提供通过网页面板自动备份存档（及配置文件）的功能。只需进入游戏服务器网页面板的 **工具->备份** 页面，即可配置多种自动备份选项。我们为你提供 10GB 免费备份存储空间，用于保存备份文件。想了解更多备份相关内容，请查看我们的专门指南 [备份](gameserver-backups.md)。

## 上传存档

上传存档同样简单。首先确保通过 FTP 客户端连接到你的游戏服务器。然后进入以下路径：
```
../vrising/save-data/Saves
```

![](https://screensaver01.zap-hosting.com/index.php/s/RXd4aoxrA6QnP46/preview)

根据存档版本，将你的存档文件夹直接拖拽到对应的 v1 或 v3 文件夹中，FTP 客户端会自动上传到服务器。

:::tip
建议复制你上传的存档文件夹名称，后续激活存档时会用到。
:::

## 激活存档

要使用特定存档，你需要编辑一个配置文件。这里介绍通过网页面板操作的方法，最简单易用。如果想了解其他编辑方式，请参考我们的 [服务器配置](vrising-configuration.md) 指南。

进入游戏服务器网页面板的 **设置** 页面，找到 **Savename** 选项。

将其改为你刚上传的存档文件夹名称。修改完成后，点击页面底部的绿色 **保存** 按钮，然后重启服务器即可生效。

<InlineVoucher />