---
id: humanitz-change-death-penalty
title: "HumanitZ：更改死亡惩罚"
description: "了解如何调整你的 HumanitZ 服务器上的死亡惩罚设置 → 立即了解更多"
sidebar_label: 更改死亡惩罚
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';



## 介绍

HumanitZ 中的死亡惩罚决定了玩家死亡后会失去什么。根据你的服务器玩法风格，你可能更喜欢宽容一点的生存体验，或者更严苛的系统来增加紧张感和风险。

<InlineVoucher />



## 配置

死亡惩罚通过 `GameServerSettings.ini` 文件控制。你可以在服务器管理面板的 **配置** 中找到这个文件。在配置文件中，找到以下参数：

```
;0=不失去任何物品, 1=失去背包和手持武器, 2=前者 + 口袋和背包, 3=以上全部 + 装备
OnDeath=2
```

`OnDeath=` 后面的数值决定玩家死亡时会失去多少物品：

- `0` – 玩家不失去任何物品  
- `1` – 玩家失去背包和当前手持武器  
- `2` – 包含前面失去的 + 口袋和背包内物品  
- `3` – 包含以上全部 + 装备物品  

要调整惩罚，只需将数字改成你想要的设置。编辑完文件后，保存更改并重启服务器，新设置即可生效。



## 结语

恭喜你！通过修改 `GameServerSettings.ini` 中的 `OnDeath` 数值，你已经成功配置了 HumanitZ 服务器的死亡惩罚。若有任何疑问或需要帮助，随时联系我们的客服团队，我们每天都在线为你服务！🙂



<InlineVoucher />