---
id: foundry-server-savegames
title: "Foundry：管理 Foundry 存档"
description: "了解如何安全备份并管理你的 Foundry 本地和服务器存档，实现无缝游戏体验 → 立即了解更多"
sidebar_label: 管理存档
services:
  - gameserver-foundry
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

本指南将带你了解如何在游戏服务器上管理 Foundry 存档，包括备份本地和服务器存档，以及如何上传存档到服务器。

<InlineVoucher />

## 准备工作

要访问你的服务器文件，你需要一个 FTP 客户端，比如 [WinSCP](https://winscp.net/eng/index.php) 或 [FileZilla](https://filezilla-project.org/)，它们都是开源且免费下载的。

你需要使用游戏服务器网页面板中 **工具->FTP浏览器** 下的凭据，通过 FTP 客户端连接到你的服务器。连接时可参考我们的[通过 FTP 访问](gameserver-ftpaccess.md)指南，帮助你顺利连接服务器。

## 备份存档

### 本地存档

本地存档是指你在本地设备上托管多人游戏时创建的存档。它们位于 Windows 的 LocalLow AppData 文件夹，具体路径如下：
```
../AppData/LocalLow/Channel 3 Entertainment/Foundry/save
```

:::tip
你可以同时按下 `CTRL` + `R` 快捷键，打开运行窗口，输入以下路径快速访问：`%userprofile%/appdata/locallow/Channel 3 Entertainment/foundry/save`，然后点击 **确定**，即可直达该文件夹。

![](https://screensaver01.zap-hosting.com/index.php/s/E6rniERFyc5AdS9/preview)
:::

在这里，你可以看到所有本地存档。

![](https://screensaver01.zap-hosting.com/index.php/s/LGPj2xZNGeCJpjt/preview)

### 通过 FTP 访问存档

从服务器备份存档非常简单。连接到游戏服务器的 FTP 客户端后，进入以下路径：
```
../foundry/saves/save
```

这里会显示每个存档对应的文件夹。右键点击文件夹，选择 **下载**，即可将存档保存到本地设备。

![](https://screensaver01.zap-hosting.com/index.php/s/X2f3Fo27GCyFe3m/preview)

### 自动备份

我们还提供通过网页面板自动备份存档（及配置文件）的功能。只需进入游戏服务器网页面板的 **工具->备份** 页面，你就能设置多种自动备份选项。我们为你提供 10GB 免费备份存储空间，备份文件将保存在这里。更多备份相关信息，请查看我们的专门指南：[备份](gameserver-backups.md)。

## 上传存档

上传存档同样简单。首先确保你已通过 FTP 客户端连接到游戏服务器。然后进入以下路径：
```
../foundry/saves/save
```

![](https://screensaver01.zap-hosting.com/index.php/s/CobaowD4JLPWte7/preview)

直接将你想上传的存档文件夹拖拽到该目录，FTP 客户端会自动上传到服务器。

:::tip
建议复制你上传的存档文件夹名称，后续激活存档时会用到。
:::

## 激活存档

要使用特定存档，需要编辑配置文件。这里介绍通过网页面板操作的方法，最简单易用。如果你想了解其他编辑方式，请参考我们的[服务器配置](foundry-configuration.md)指南。

进入游戏服务器网页面板的 **设置** 页面，找到 **Savename** 选项。

将其改为你刚上传的存档文件夹名称。修改完成后，点击页面底部的绿色 **保存** 按钮，然后重启服务器。

<InlineVoucher />