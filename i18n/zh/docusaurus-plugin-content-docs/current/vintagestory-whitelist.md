---
id: vintagestory-whitelist
title: "Vintage Story：白名单"
description: "关于如何为你的 Vintage Story 服务器设置白名单的详细信息 → 立即了解更多"
sidebar_label: 白名单
services:
  - gameserver-vintagestory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

白名单是一种访问列表，用来限制谁可以加入你的服务器。Vintage Story 内置了白名单模式，你可以启用它，并针对每个玩家进行开关控制。

<InlineVoucher />


## 启用白名单

打开游戏内控制台，通过服务器配置命令设置白名单模式。使用白名单模式值 1，只允许白名单上的玩家加入。

```text
/serverconfig whitelistmode 1
```

启用该模式后，请重启服务器一次，确保设置生效且在启动时正确应用。

## 管理白名单玩家

要允许某个玩家加入，使用玩家命令将其添加到白名单。

```text
/player PlayerName whitelist on
```

要移除访问权限，关闭该玩家的白名单开关。

```text
/player PlayerName whitelist off
```

如果需要再次确认当前服务器设置，可以打印当前服务器配置，或者运行 whitelistmode 命令而不更改其他值，确认它仍然设置为 1。

## 验证白名单功能

尝试用未被加入白名单的玩家连接，连接应被拒绝。然后用已设置 `whitelist on` 的玩家连接。

如果所有人仍然能加入，请确认 `whitelistmode` 是否设置为 1，并且你是在正确的服务器上执行了命令。

## 总结

如果以上步骤都正确执行，你的白名单现在已经激活，可以精准控制谁能加入服务器。如果访问权限仍有问题，重启服务器一次，再次检查文件或命令输出，确认更改已生效。

如有更多问题或需要帮助，随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />