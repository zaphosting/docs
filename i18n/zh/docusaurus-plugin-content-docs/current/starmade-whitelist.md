---
id: starmade-whitelist
title: "StarMade：白名单"
description: "关于如何为你的 StarMade 服务器设置白名单的详细信息，来自 ZAP-Hosting → 立即了解更多"
sidebar_label: 白名单
services:
  - gameserver-starmade
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

白名单是一种访问列表，用来限制谁可以加入你的服务器。StarMade 支持内置白名单，配置在 `server.cfg` 中，并通过 `whitelist.txt` 进行管理。

<InlineVoucher />

## 启用白名单

通过 FTP 连接到你的服务器，打开 `server.cfg`。启用身份验证和白名单功能。

```cfg
USE_STARMADE_AUTHENTICATION=true
REQUIRE_STARMADE_AUTHENTICATION=true
USE_WHITELIST=true
```

保存文件。然后在同一服务器目录下打开或创建 `whitelist.txt`。按照 StarMade 的格式添加玩家，每行一个。

```txt
act:-1:PlayerName
act:-1:AnotherPlayer
```

重启服务器以加载更新后的白名单。

## 管理白名单玩家

要添加玩家，向 `whitelist.txt` 追加一行，使用相同格式，保存并重启。要移除玩家，删除对应行，保存并重启。

如果名字包含特殊字符，请确保使用登录时显示的准确游戏名，避免匹配错误。

## 验证白名单功能

重启后，尝试用未在 `whitelist.txt` 中的账号连接，应该会被拒绝。然后用白名单中的玩家名连接。

如果白名单玩家无法加入，请确认 StarMade 身份验证已启用且必需，否则名字匹配可能不准确。

## 总结

只要以上步骤都正确执行，你的白名单就已激活，可以精准控制谁能加入服务器。如果访问仍有问题，重启服务器一次，再检查文件或命令输出确认更改已生效。

如有更多问题或需要帮助，随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />