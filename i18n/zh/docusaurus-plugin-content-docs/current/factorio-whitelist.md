---
id: factorio-whitelist
title: "Factorio：白名单"
description: "关于如何为你的 Factorio 服务器开启白名单的详细信息 → 立即了解更多"
sidebar_label: 白名单
services:
  - gameserver-factorio
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

白名单是一种访问列表，只允许经过批准的 Factorio 账号访问服务器。在大多数托管服务器上，只要添加了至少一个玩家，白名单就会自动启用，并且会保存在 `server-whitelist.json` 文件中。

<InlineVoucher />

## 启用白名单

在 ZAP-Hosting 游戏服务器管理的实时控制台中，添加第一个玩家到白名单。添加第一个名字通常会立即激活白名单功能。

```text
/whitelist add PlayerName
```

如果你的主机提供了明确的启用命令，也可以在添加用户之前先执行它。

```text
/whitelist enable
```

通常不需要重启服务器来使更改生效，但初次设置后重启一次可以确保白名单文件被写入并在启动时加载。

## 管理白名单玩家

要添加更多玩家，再次运行添加命令，使用他们的 Factorio 用户名。

```text
/whitelist add AnotherPlayer
```

要移除玩家，使用移除命令。

```text
/whitelist remove PlayerName
```

要查看当前白名单，使用获取命令。

```text
/whitelist get
```

## 验证白名单功能

添加至少一个玩家后，尝试用未列入白名单的账号连接，连接应被拒绝。然后用白名单账号连接，确认功能正常。

如果服务器仍然允许所有人连接，请确认命令是在正确的服务器上执行的，并重启一次以确保白名单文件在启动时被加载。

## 总结

如果以上步骤都正确执行，你的白名单现在已激活，可以精准控制谁能加入服务器。如果访问权限仍有问题，重启服务器一次，并重新检查文件或命令输出，确认更改已生效。

如有更多问题或需要帮助，欢迎随时联系在线客服，我们每天都在这里为你服务！🙂

<InlineVoucher />