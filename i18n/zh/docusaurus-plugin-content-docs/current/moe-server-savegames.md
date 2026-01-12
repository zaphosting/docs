---
id: moe-server-savegames
title: "Myth of Empires：存档管理指南"
description: "了解如何安全管理和备份你的 Myth of Empires 游戏存档，实现无缝游戏体验 → 立即了解更多"
sidebar_label: 存档管理
services:
  - gameserver-moe
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

本指南将带你了解如何在你的游戏服务器上管理 Myth of Empires 存档，包括备份本地和服务器存档，以及如何上传存档到服务器。

<InlineVoucher />

## 准备工作

要访问你的服务器文件，你需要一个 FTP 客户端，比如 [WinSCP](https://winscp.net/eng/index.php) 或 [FileZilla](https://filezilla-project.org/)，它们都是开源且免费下载的。

你需要使用游戏服务器网页面板中 **工具->FTP浏览器** 下的凭据，通过 FTP 客户端连接到你的服务器。更多连接帮助请参考我们的[FTP访问指南](gameserver-ftpaccess.md)。

## 备份存档

### 本地存档

本地存档是指你在本地设备上托管多人游戏时创建的存档。MOE 会将这些存档保存在游戏安装目录下的一个文件夹中。

打开你电脑上的 Steam，右键点击 **Myth of Empires** 游戏，选择 **管理** 下的 **浏览本地文件**。

![](https://screensaver01.zap-hosting.com/index.php/s/Cmj325wLSWgNGif/preview)

进入以下路径：
```
../WindowsPrivateServer/MOE/Saved/SaveGames/
```

在这个文件夹里，你可以看到所有当前存在的本地存档。

### 通过 FTP 访问存档

从服务器备份存档非常简单。连接到你的游戏服务器 FTP 后，进入以下路径：
```
../moe-dedicated/MOE/Saved/SaveGames/
```

这里你会看到存档文件夹。右键点击文件夹，选择 **下载**，即可将存档保存到本地设备。

![](https://screensaver01.zap-hosting.com/index.php/s/3yN723tY8eiBb2w/preview)

### 自动备份

我们还提供通过网页面板自动备份存档（及配置文件）的功能。只需进入游戏服务器网页面板的 **工具->备份**，即可配置自动备份计划。我们为你提供 10GB 免费备份存储空间，用于保存你的备份。更多备份相关信息，请查看我们的专门[备份指南](gameserver-backups.md)。

## 上传存档

上传存档同样简单。确保你已通过 FTP 客户端连接到游戏服务器，进入以下路径：
```
../moe-dedicated/MOE/Saved/SaveGames/
```

![](https://screensaver01.zap-hosting.com/index.php/s/KLD26KTYZYpfoqP/preview)

直接拖拽你的存档文件夹到该目录，FTP 客户端会自动上传到服务器。

## 激活存档

使用存档需要在服务器配置中选择它。最简单的方式是在游戏服务器网页面板的 **设置** 页面操作。更多详情请参考我们的[服务器配置指南](moe-configuration.md)。

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)

在基础设置中找到 **地图名称** 参数，你上传的世界存档应该会显示在这里。如果没看到，确认上传后重启服务器。

恭喜你，存档已成功添加到你的游戏服务器！

<InlineVoucher />