---
id: rimworldtogether-configuration
title: "RimWorld Together：服务器配置"
description: "探索 RimWorld Together 服务器设置，自定义游戏玩法并管理访问权限，打造专属多人游戏体验 → 立即了解更多"
sidebar_label: 服务器配置
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

RimWorld Together 服务器提供了丰富的配置参数，供你根据喜好自由调整。在本指南中，我们将详细介绍当前所有可用的配置参数，并逐一说明它们的作用。

<InlineVoucher />

## 访问你的配置文件

首先，你需要访问配置文件才能编辑任何参数。目前，唯一能编辑这些文件的方式是通过 FTP 连接到你的服务器。如果你不熟悉 FTP 的使用，建议先查看我们的[FTP访问指南](gameserver-ftpaccess.md)。

:::note
编辑配置前必须先停止服务器，编辑配置后重启服务器，否则所有更改都会被重置。
:::

准备好 FTP 客户端后，导航到以下目录：
```
../rimworld-together/Core
```

该文件夹内包含了各种 `.json` 配置文件，用于管理你的 RimWorld Together 服务器。

![](https://screensaver01.zap-hosting.com/index.php/s/76g3TcY9TCLyFsH/preview)

## 服务器配置选项

下面的章节将介绍如何调整一些常用且热门的 RimWorld Together 服务器配置选项。你也可以通过阅读[官方 RimWorld Together 指南](https://rimworldtogether.github.io/Guide/selfhosting/getting-started.html#core)了解更多关于配置文件的详细信息。

:::tip
不建议修改 **ServerConfig.json** 文件中的端口（Port）或 IP 设置，因为这些参数由游戏服务器自动配置。擅自更改可能导致服务器无法正常运行！
:::

#### 服务器白名单

开启服务器白名单非常简单。打开 **Whitelist.json** 配置文件，将 `UseWhitelist` 参数设置为 true。

然后调整 `WhitelistedUsers` 参数，添加你想允许连接的玩家游戏用户名。未在名单上的玩家将无法连接服务器。

#### 游戏玩法设置

你可以通过 **DifficultyValues.json** 文件调整 RimWorld Together 服务器的各种难度参数。

存档相关设置则可以通过 **WorldConfig.json** 文件进行调整。建议不要在游戏进行到较深阶段时修改此文件，以免破坏游戏体验。

<InlineVoucher />