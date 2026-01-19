---
id: palworld-server-savegames
title: "Palworld：管理 Palworld 存档"
description: "了解如何安全管理和备份你的 Palworld 游戏存档，实现无缝游戏体验 → 立即了解更多"
sidebar_label: 管理存档
services:
  - gameserver-palworld
---

import InlineVoucher from '@site/src/components/InlineVoucher';

本指南将带你了解如何在游戏服务器上管理 Palworld 存档，包括备份本地和服务器存档，以及如何上传存档到服务器。

## 准备工作

要访问你的服务器文件，你需要一个 FTP 客户端，比如 [WinSCP](https://winscp.net/eng/index.php) 或 [FileZilla](https://filezilla-project.org/)，这两个都是开源且免费下载的。

你需要使用游戏服务器网页面板中 **工具->FTP浏览器** 下的凭据，通过 FTP 客户端连接到你的服务器。更多连接帮助请参考我们的 [通过 FTP 访问](gameserver-ftpaccess.md) 指南。

## 备份存档

### 本地存档

本地存档是指你在本地设备上托管多人游戏时创建的存档。它们位于 Windows 的 AppData 文件夹中，具体路径如下：
```
../AppData/Local/Pal/Saved/SaveGames
```

:::tip
你可以同时按下 `CTRL` + `R`，在运行对话框中输入 `%localappdata%/Pal/Saved/SaveGames/`，然后点击 **确定**，即可快速打开该文件夹。

![](https://screensaver01.zap-hosting.com/index.php/s/gWL9gtAZ8JE2ENP/preview)
:::

在这里，你会看到一个以你的 SteamID 命名的文件夹，打开它就能看到所有本地存档。

![](https://screensaver01.zap-hosting.com/index.php/s/aaeRXfs5cFjA6fN/preview)

### 通过 FTP 访问存档

从服务器备份存档很简单。连接到游戏服务器的 FTP 客户端后，进入以下路径：
```
../palworld/Pal/Saved/SaveGames/0
```

这里你会看到一个由随机字符组成的文件夹，这就是你的存档。右键点击该文件夹，选择 **下载**，即可将存档保存到本地设备。

![](https://screensaver01.zap-hosting.com/index.php/s/pmrmNHS5NAfXpY3/preview)

### 自动备份

我们还提供通过网页面板自动备份存档（及配置文件）的功能。只需进入游戏服务器网页面板的 **工具->备份**，即可配置自动备份计划。我们为你提供 10GB 免费备份存储空间，备份文件将存放于此。更多备份相关信息，请查看我们的专门指南 [备份](gameserver-backups.md)。

## 上传存档

上传存档同样简单。先通过 FTP 客户端连接到你的游戏服务器，进入以下路径：
```
../Pal/Saved/SaveGames/0
```

![](https://screensaver01.zap-hosting.com/index.php/s/tadxngnRCJDbtTe/preview)

直接将你的存档文件夹拖拽到该目录，FTP 客户端会自动上传到服务器。

:::tip
建议记下你上传的存档文件夹名称，后续激活存档时会用到。
:::

## 激活存档

要使用特定存档，需要编辑一个配置文件。进入以下路径，找到名为 **GameUserSettings.ini** 的文件：
```
../Pal/Saved/Config/WindowsServer/ # Windows 服务器
../Pal/Saved/Config/LinuxServer/   # Linux 服务器
```

打开该文件，找到 `DedicatedServerName` 参数。

将该参数的值修改为你想激活的存档文件夹名称。

![](https://screensaver01.zap-hosting.com/index.php/s/qLG2jtzFkYM6WB7/preview)

保存文件后重启服务器，存档即被成功激活。

## 存档消失了？

极少情况下，服务器启动时可能会新建一个存档，而不是加载已有存档。

首先通过 FTP 客户端检查存档文件，路径如下：
```
../Pal/Saved/SaveGames/0
```

![](https://screensaver01.zap-hosting.com/index.php/s/wYQ42Aein5y6Z6j/preview)

这里你应该还能看到旧存档和新生成的存档。解决方法是按照上面“激活存档”章节，编辑配置文件，填写正确的存档文件夹名称。

保存并重启服务器后，存档应恢复正常。

:::info
强烈建议开启自动备份（见上文“自动备份”章节），因为 Palworld 仍处于抢先体验阶段，更新时存档丢失或损坏的风险较高。
:::

<InlineVoucher />