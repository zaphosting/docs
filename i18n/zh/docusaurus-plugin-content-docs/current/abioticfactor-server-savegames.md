---
id: abioticfactor-server-savegames
title: "Abiotic Factor：管理 Abiotic Factor 存档"
description: "了解如何在本地和服务器上管理及备份你的 Abiotic Factor 游戏存档，保障游戏安全 → 立即了解"
sidebar_label: 管理存档
services:
  - gameserver-abioticfactor
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

本指南将带你了解如何在游戏服务器上管理 Abiotic Factor 存档，包括备份本地和服务器存档，以及如何上传存档到服务器。

<InlineVoucher />

## 准备工作

要访问你的服务器文件，你需要一个 FTP 客户端，比如 [WinSCP](https://winscp.net/eng/index.php) 或 [FileZilla](https://filezilla-project.org/)，这两个都是开源且免费下载的。

你需要使用游戏服务器网页面板中 **工具->FTP浏览器** 下的凭据，通过 FTP 客户端连接到你的服务器。更多连接帮助请参考我们的 [FTP 访问指南](gameserver-ftpaccess.md)。

## 备份存档

### 本地存档

本地存档是指你在本地设备上托管多人游戏时创建的存档。它们位于 Windows 本地 AppData 文件夹，具体路径如下：
```
../AppData/Local/AbioticFactor/Saved/SaveGames/[你的SteamID]/Worlds
```

:::tip
你可以同时按下 `CTRL` + `R`，在运行对话框中输入 `%userprofile%/AppData/Local/AbioticFactor/Saved/SaveGames`，然后点击 **确定**，即可快速打开该文件夹。

![](https://screensaver01.zap-hosting.com/index.php/s/zd7Zy5C6EH7BMHa/preview)
:::

记得进入对应的 Steam ID 文件夹，再进入 `Worlds` 文件夹，在这里你能找到所有本地存档。

### 通过 FTP 访问存档

从服务器备份存档非常简单。连接到游戏服务器的 FTP 后，进入以下路径：
```
../abiotic-factor/AbioticFactor/Saved/SaveGames/Server/Worlds
```

这里就是你的服务器存档所在。右键点击文件夹，选择 **下载**，即可将存档保存到本地设备。

![](https://screensaver01.zap-hosting.com/index.php/s/RJSeBFpCdGamK7s/preview)

### 自动备份

我们还提供通过网页面板自动备份存档（及配置文件）的功能。只需进入游戏服务器网页面板的 **工具->备份**，即可设置自动备份计划。我们为你提供 10GB 免费备份空间，备份文件将存储于此。更多备份相关内容，请查看我们的专门指南 [备份](gameserver-backups.md)。

## 上传存档

上传存档同样简单。先确保通过 FTP 客户端连接到你的游戏服务器。然后进入以下路径：
```
../abiotic-factor/AbioticFactor/Saved/SaveGames/Server/Worlds/world
```

:::note
目前 Abiotic Factor 专用服务器不支持存档切换，因此你必须将存档文件夹内的内容上传到主 `world` 文件夹中。
:::

打开你想上传的存档文件夹，直接将里面的所有内容拖拽到服务器上的主 `world` 文件夹中，即可完成上传。

![](https://screensaver01.zap-hosting.com/index.php/s/wsT4MXpp2MFWLtQ/preview)

:::info
如果主存档 `world` 文件夹不存在，尝试先关闭再启动服务器。如果仍无效，可以在游戏服务器主面板点击 **验证 Steam 文件** 按钮，恢复默认文件。
:::

## 激活存档

与通常需要编辑配置文件来激活存档不同，Abiotic Factor 专用服务器目前不支持存档切换。

只需重启服务器，下一次启动时服务器会自动加载你上传到主 `world` 文件夹中的存档内容。

<InlineVoucher />