---
id: humanitz-whitelist
title: "HumanitZ：白名单管理"
description: "了解如何管理白名单并控制你的 HumanitZ 服务器访问权限 → 立即了解更多"
sidebar_label: "白名单"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## 介绍

白名单功能让你可以精准控制谁能加入你的 HumanitZ 服务器。开启后，只有 Steam ID 被列入允许玩家名单的用户才能连接。

<InlineVoucher />

## 配置

白名单功能通过 `GameServerSettings.ini` 文件进行控制。你可以在服务器管理面板的 **配置** 里找到这个文件。要启用白名单模式，找到并设置以下参数：

```
OnlyAllowedPlayers=1
```

- `OnlyAllowedPlayers=1` – 启用白名单模式。只有名单上的玩家可以加入。
- `OnlyAllowedPlayers=0` – 关闭白名单模式。所有玩家都可以加入。

启用白名单模式后，你需要手动创建白名单文件。

使用你喜欢的 FTP 客户端通过 [FTP](gameserver-ftpaccess.md) 连接到你的服务器。连接后，进入服务器主目录，创建一个名为 `F_MVPAccess.txt` 的新文件。在文件中，每行输入一个**唯一的 Steam ID**，对应你想允许加入的玩家。

```
76561198000000001
76561198000000002
```

添加完 Steam ID 后保存文件。

## 监控玩家活动

HumanitZ 还提供了额外的文件用于追踪玩家连接情况。`F_ConnectedPlayers.txt` 显示当前在线玩家，`PlayerConnectedLog.txt` 记录所有玩家的连接和断开信息，包括 Steam 名称、唯一 Steam ID 以及时间戳。

这些文件非常适合用来确认 Steam ID 和监控服务器活动。每次修改白名单或封禁文件后，记得保存并重启服务器，确保更改生效。

## 总结

恭喜你！通过启用白名单模式并管理 `F_MVPAccess.txt` 和 `F_BannedPlayers.txt` 文件，你已经成功配置了 HumanitZ 服务器的访问控制。

如果有任何问题或需要帮助，随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />