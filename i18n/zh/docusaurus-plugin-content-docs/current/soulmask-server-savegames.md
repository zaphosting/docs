---
id: soulmask-server-savegames
title: "Soulmask：管理 Soulmask 存档"
description: "了解如何在本地和服务器上管理及备份你的 Soulmask 存档，保障游戏安全 → 立即了解"
sidebar_label: 管理存档
services:
  - gameserver-soulmask
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

本指南将带你了解如何在游戏服务器上管理 Soulmask 存档，包括备份本地和服务器存档，以及如何上传存档到服务器。

<InlineVoucher />

## 准备工作

要访问你的服务器文件，你需要一个 FTP 客户端，比如 [WinSCP](https://winscp.net/eng/index.php) 或 [FileZilla](https://filezilla-project.org/)，这两个都是开源且免费下载的。

你需要使用游戏服务器网页面板中 **工具->FTP浏览器** 下的凭据，通过 FTP 客户端连接到你的服务器。更多连接帮助，请参考我们的[通过 FTP 访问](gameserver-ftpaccess.md)指南。

## 备份存档

### 本地存档

本地存档是指你在本地设备上托管多人游戏时创建的存档。它们位于 Windows 本地 AppData 文件夹，具体路径如下：
```
../AppData/Local/WS/[你的_steamid]/AutoGames
```

:::tip
你可以同时按下 `CTRL` + `R`，在运行对话框中输入 `%userprofile%/appdata/local/WS/`，然后点击 **确定**，打开带有你 SteamID 的文件夹，即可快速访问 AutoGames 文件夹。

![](https://screensaver01.zap-hosting.com/index.php/s/FT4J9Jdi8d8LDxq/preview)
:::

在这里，你可以看到所有本地存档。每个文件夹都以服务器的邀请代码命名，方便你识别对应的世界。

### 通过 FTP 访问存档

从服务器备份存档非常简单。连接到游戏服务器的 FTP 客户端后，进入以下路径：
```
../soulmask/WS/Saved/Worlds/Dedicated
```

这里你会看到主存档文件夹 `Level01_Main`，这就是专用服务器的存档。右键点击该文件夹，选择 **下载**，即可将存档保存到本地设备。

:::note
目前，Soulmask 专用服务器一次只支持一个存档，存档都在主文件夹 `Level01_Main` 中。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/Ywna6zc3BkCK6ES/preview)

### 自动备份

我们还提供通过网页面板自动备份存档（及配置文件）的功能。只需进入游戏服务器网页面板的 **工具->备份**，即可配置多种自动备份选项。我们为你提供 10GB 免费备份存储空间，备份文件将存放于此。更多备份相关信息，请查看我们的专门[备份](gameserver-backups.md)指南。

## 上传存档

上传存档同样简单。首先确保通过 FTP 客户端连接到服务器，并关闭服务器。

:::note
目前，Soulmask 专用服务器一次只支持一个存档，存档都在主文件夹 `Level01_Main` 中。
:::

准备好后，进入以下路径：
```
../soulmask/WS/Saved/Worlds/Dedicated/Level01_Main
```

![](https://screensaver01.zap-hosting.com/index.php/s/iWKPKw5Grg4JgPi/preview)

将你想上传的存档中的 **world.db** 文件拖拽到这里，替换掉已有文件。如果你想保留服务器上的原文件，记得先下载备份，否则替换后原文件将丢失。

你也可以上传游戏设置文件，路径如下：
```
../soulmask/WS/Saved/GameplaySettings
```

![](https://screensaver01.zap-hosting.com/index.php/s/yqXF9EaDCin5rzT/preview)

将你想上传的存档中的 **GameXishu.json** 文件拖拽到这里，替换已有文件。替换前同样建议先下载备份。

:::tip
如果你上传的存档中 **GameXishu.json** 文件名稍有不同，比如 `GameXishu_2.json`，请改回 `GameXishu.json`，这样专用服务器才能识别。
:::

完成后，重新启动服务器，你的存档就会成功加载啦。

<InlineVoucher />