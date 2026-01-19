---
id: spaceengineers-whitelist
title: "Space Engineers：白名单"
description: 了解如何为你的 Space Engineers 服务器设置白名单 → 立即了解更多"
sidebar_label: 白名单
services:
  - gameserver-spaceengineers
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

白名单是一种访问列表，用来限制谁能加入你的服务器。Space Engineers 通常使用基于 Steam 群组的白名单，只有特定 Steam 群组的成员才能连接。

<InlineVoucher />

## 启用白名单

为你的服务器创建一个 Steam 群组，并添加你想允许的玩家。然后通过 FTP 连接到你的服务器，打开 `SpaceEngineers-Dedicated.cfg` 文件。

确保服务器配置为私有模式，并在配置文件末尾设置群组 ID。

```xml
<ServerType>PRIVATE</ServerType>
<GroupID>XXXXXXXXXXXXXXXXXX</GroupID>
```

将群组 ID 替换为你自己的 Steam 群组 ID。保存文件并重启服务器。

## 管理白名单玩家

要添加玩家到白名单，邀请他们加入 Steam 群组，并确保他们已经加入。成为群组成员后，他们就能连接服务器。

要移除玩家，只需将他们从 Steam 群组中移除。移除后，他们将无法再连接。如果你想切换白名单到另一个群组，只需更改 `<GroupID>` 的值并重启服务器。

## 验证白名单功能

重启后，尝试用一个不在 Steam 群组内的账号连接。服务器应该会拒绝连接。然后用群组成员账号尝试连接。

如果访问仍然开放，确认服务器是否运行在私有模式，并且活动的 `SpaceEngineers-Dedicated.cfg` 文件中包含 `<GroupID>` 条目。

## 总结

如果以上步骤都正确执行，你的白名单现在已经生效，你可以精准控制谁能加入服务器。如果访问权限仍有问题，重启服务器一次，再次检查文件或命令输出，确认更改已生效。

如有任何疑问或需要帮助，随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />