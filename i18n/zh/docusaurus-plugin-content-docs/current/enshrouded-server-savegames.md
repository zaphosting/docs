---
id: enshrouded-server-savegames
title: "Enshrouded：管理 Enshrouded 存档"
description: "了解如何管理和备份你的 Enshrouded 游戏存档，保障多人游戏安全 → 立即了解更多"
sidebar_label: 管理存档
services:
  - gameserver-enshrouded
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

本指南将带你了解如何在你的游戏服务器上管理 Enshrouded 存档，包括备份本地和服务器存档，以及如何上传到服务器。

<InlineVoucher />

## 准备工作

要访问你的服务器文件，你需要一个 FTP 客户端，比如 [WinSCP](https://winscp.net/eng/index.php) 或 [FileZilla](https://filezilla-project.org/)，这两个都是开源且免费下载的。

你需要使用游戏服务器网页面板中 **工具->FTP浏览器** 下的凭据，通过 FTP 客户端连接到你的服务器。更多连接帮助，请参考我们的 [通过 FTP 访问](gameserver-ftpaccess.md) 指南。

## 备份存档

### 本地存档

本地存档是指你在本地设备上托管多人游戏时创建的存档。默认情况下，Enshrouded 会使用 Steam 云自动备份你的存档。要访问这些存档，你需要进入 Steam 用户数据文件夹，路径如下：
```
../Steam/userdata/[你的_steamid]/1203620/remote
```

:::tip
通常情况下，Steam 文件夹位于你的系统盘，路径为：`C://Program Files x86/Steam`。如果你把 Steam 安装到了其他位置，路径可能会有所不同。
:::

进入该文件夹后，你会看到一个角色文件和所有本地存档集中在一起。

![](https://screensaver01.zap-hosting.com/index.php/s/dyydLNzQt7ZWRPx/preview)

:::note
如果你明确**没有**使用 Steam 云保存，你的存档文件夹会在以下目录：`C://Users/[你的用户名]/Saved Games/Enshrouded`。
:::

### 通过 FTP 访问存档

从服务器备份存档非常简单。连接到你的游戏服务器 FTP 后，进入以下路径：
```
../enshrouded/savegame/
```

在这里你会看到一个由随机字符组成的文件，这就是你的存档。右键点击该文件，选择 **下载**，即可保存到本地设备。

![](https://screensaver01.zap-hosting.com/index.php/s/wTcodeKXYq3RBfY/preview)

### 自动备份

我们还提供通过网页面板直接自动备份存档（及配置文件）的功能。只需进入游戏服务器网页面板的 **工具->备份** 页面，在这里你可以设置各种自动备份选项。我们为你提供 10GB 免费备份空间，用于存储备份文件。更多备份相关信息，请查看我们的专门 [备份](gameserver-backups.md) 指南。

## 上传存档

上传存档同样简单。先确保你已通过 FTP 客户端连接到游戏服务器，然后进入以下路径：
```
../enshrouded/savegame/
```

![](https://screensaver01.zap-hosting.com/index.php/s/gJW8wSapi4Bo2gw/preview)

通过 FTP 客户端将你的存档文件拖拽到该文件夹，即可上传到服务器。

## 激活存档

使用存档非常简单。连接到你的服务器后，在游戏设置界面，你可以选择想要使用的具体存档。每个存档下方都会显示存档名称、等级和最后游玩日期，方便你辨认和选择。

恭喜你，已成功将存档添加到你的游戏服务器。

<InlineVoucher />