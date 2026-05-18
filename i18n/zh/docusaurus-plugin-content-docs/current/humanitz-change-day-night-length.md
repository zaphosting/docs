---
id: humanitz-change-day-night-length
title: "HumanitZ：调整昼夜时长"
description: "了解如何调整你的 HumanitZ 服务器上的昼夜时长 → 立即了解更多"
sidebar_label: "调整昼夜时长"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## 介绍

HumanitZ 中的昼夜循环直接影响游戏玩法、能见度、生存难度和整体节奏。较短的白天会带来更紧张的生存体验，而较长的白昼则让玩家有更多时间探索、建造和收集资源。

<InlineVoucher />

## 配置

昼夜时长由 `GameServerSettings.ini` 文件控制。你可以在服务器管理面板的 **配置** 中找到这个文件。在配置文件中，找到以下参数：

```
;白天时长（分钟）
DayDur=40
;夜晚时长（分钟）
NightDur=20
```

数值单位为分钟：

- `DayDur` – 控制白天持续时间  
- `NightDur` – 控制夜晚持续时间  

要更改昼夜周期长度，只需将数字调整为你想要的时长。比如想要更长的白天和更短的夜晚：

```
DayDur=60
NightDur=15
```

编辑完文件后，保存更改并重启服务器，新的设置才会生效。

## 总结

恭喜你！通过修改 `GameServerSettings.ini` 中的 `DayDur` 和 `NightDur`，你已经成功调整了 HumanitZ 服务器的昼夜周期。如果有任何疑问或需要帮助，随时联系我们的客服团队，我们每天都在线为你服务！🙂

<InlineVoucher />