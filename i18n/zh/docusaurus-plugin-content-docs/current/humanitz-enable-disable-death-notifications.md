---
id: humanitz-enable-disable-death-notifications
title: "HumanitZ：开启/关闭死亡通知"
description: "了解如何在你的 HumanitZ 服务器上开启或关闭玩家死亡通知 → 立即了解更多"
sidebar_label: "开启/关闭死亡通知"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## 介绍

死亡通知会在服务器上有人死亡时提醒玩家。虽然这有助于追踪游戏动态，但有些服务器更喜欢沉浸式或竞技体验，不希望出现公开的死亡消息。

HumanitZ 允许你通过服务器配置文件直接开启或关闭玩家死亡通知。

<InlineVoucher />

## 配置

死亡通知设置在 `GameServerSettings.ini` 文件中控制。你可以在服务器管理面板的 **配置** 里找到这个文件。  
在配置文件中，找到以下参数：

```
;If set to true notification about dead players will be disabled. Admins will still be able to see them.
NoDeathFeedback=true
```

- `NoDeathFeedback=true` – 关闭普通玩家的死亡通知，管理员仍然能看到。  
- `NoDeathFeedback=false` – 所有玩家都能收到死亡通知。

如果你想让所有人都能看到死亡通知，把值改成：

```
NoDeathFeedback=false
```

编辑完文件后，保存更改并重启服务器，设置才会生效。

## 总结

恭喜你！通过修改 `GameServerSettings.ini` 中的 `NoDeathFeedback` 参数，你已经成功配置了 HumanitZ 服务器的死亡通知设置。如有任何疑问或需要帮助，随时联系我们的客服团队，我们每天都在线为你服务！🙂

<InlineVoucher />