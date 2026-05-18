---
id: unturned-whitelist
title: "Unturned：在服务器上激活并编辑白名单"
description: "了解如何通过激活和管理白名单来保护你的 Unturned 服务器，实现受控玩家访问 → 立即了解更多"
sidebar_label: 白名单
services:
  - gameserver-unturned
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## 激活白名单

Unturned 的白名单功能可以保护你的服务器，只允许名单上的指定玩家连接服务器。激活白名单需要在游戏内通过命令完成，这需要你拥有**所有者权限**。如果你不知道这是什么以及如何赋予权限，可以查看以下指南：[成为管理员](unturned-becomeadmin.md)

如果你已经按照指南成功成为管理员，那么现在就可以在服务器上激活白名单了。打开游戏内的聊天/控制台，执行以下命令：

```
/Whitelisted
```

白名单现在应该已经激活，只有在名单上的玩家才能加入服务器。你可以通过以下命令添加或移除玩家。

## 管理白名单

**添加玩家到白名单：**

```
Permit [SteamID]/[Tag]
```

**从白名单移除玩家：**

```
Unpermit [SteamID]
```

**显示所有允许的玩家：**

```
Permits
```


<InlineVoucher />