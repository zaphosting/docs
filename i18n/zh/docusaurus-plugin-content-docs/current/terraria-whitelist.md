---
id: terraria-whitelist
title: "Terraria：白名单"
description: "关于如何为你的 Terraria 服务器开启白名单的详细信息 → 立即了解"
sidebar_label: 白名单
services:
  - gameserver-terraria
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

白名单是一种访问列表，用来限制谁能加入你的服务器。对于 Terraria 主机来说，常见的白名单方式是运行 TShock 服务器并启用其白名单功能，这通过白名单文件和命令来管理。

<InlineVoucher />

## 启用白名单

通过 FTP 连接到你的服务器，确认服务器正在运行 TShock。然后找到 TShock 配置文件 `tshock/config.json`，启用白名单设置：

```
"EnableWhitelist": true
```

保存文件并重启服务器。现在 TShock 会要求所有连接都必须通过白名单审批。

## 管理白名单玩家

要添加白名单条目，在 ZAP-Hosting 游戏服务器管理后台打开实时控制台，使用白名单命令加上玩家的 IP 地址。

```text
whitelist 203.0.113.25
```

TShock 会把白名单存储在 `tshock/whitelist.txt` 文件中。要移除条目，使用 FTP 连接，打开该文件，删除对应的 IP 行，保存后重启服务器。

```txt
203.0.113.25
198.51.100.10
```

## 验证白名单功能

重启后，尝试用未列入白名单的 IP 地址连接，访问应该被阻止。然后用已列入白名单的 IP 地址连接。

如果玩家仍能在未被列入白名单的情况下加入，重新确认 `config.json` 中的 `EnableWhitelist` 是否为 true，并且服务器确实是以 TShock 模式启动。

## 总结

只要以上步骤都正确执行，你的白名单就已经激活，可以精准控制谁能加入服务器。如果访问仍不正常，重启服务器一次，再次检查文件或命令输出，确认更改已生效。

如有任何疑问或需要帮助，随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />