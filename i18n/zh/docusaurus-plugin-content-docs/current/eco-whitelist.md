---
id: eco-whitelist
title: "ECO：白名单"
description: "关于如何将你的 ECO 服务器加入 ZAP-Hosting 白名单→ 立即了解更多"
sidebar_label: 白名单
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

白名单是一种访问列表，用来限制谁可以连接到你的服务器。在 ECO 中，白名单存储在 `Users.eco` 配置文件里，一旦至少有一个 SteamID64 被添加，白名单就会自动生效。

## 激活白名单

通过 FTP 连接到你的服务器，找到 `Users.eco` 文件。打开它，找到 `WhiteList` 部分，在 `$values` 里添加 SteamID64。

```json
"WhiteList": {
  "System.String": {
"$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
"$values": [
  "76561198000000000"
]
  }
}
```

保存文件并重启服务器，确保新的访问列表生效。

## 管理白名单玩家

如果你有游戏内权限，也可以通过 ZAP-Hosting 游戏服务器管理的实时控制台添加玩家。用白名单命令加上玩家名。

```text
/whitelist PlayerName
```

移除玩家需要编辑 `Users.eco` 文件，从 `$values` 中删除对应的 SteamID64，保存后重启服务器，因为没有服务器命令可以直接删除白名单条目。

## 验证白名单功能

重启后，尝试用不在 `$values` 里的账号连接，访问应该被阻止。然后用白名单账号连接。

如果访问依然开放，确认至少有一个 SteamID64 存在，并且你编辑的 `Users.eco` 文件是当前服务器实例正在使用的。

## 总结

只要以上步骤都正确执行，你的白名单就激活了，可以精准控制谁能加入服务器。如果访问还是不正常，重启服务器再检查文件或命令输出，确认改动已生效。

<InlineVoucher />