---
id: over-the-top-wwi-configure-class-limits
title: "Over the Top WWI：配置职业限制"
description: "了解如何在你的 Over the Top WWI 服务器上配置职业限制 → 立即了解更多"
sidebar_label: 职业限制
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

在 **Over the Top WWI** 中，职业限制控制了多少玩家可以使用特定的单位类型，比如狙击手、工兵或重装单位。调整这些限制有助于平衡游戏玩法，防止某些职业被过度使用。

通过配置职业限制，你可以确保队伍组成的公平性，打造更有结构性和策略性的游戏体验。

<InlineVoucher />

## 配置

职业限制是在服务器配置文件中设置的。你可以在 **游戏服务器管理面板** 的 **配置** 里找到并编辑这个文件。定位并打开 `ServerConfiguration.ini` 配置文件。在文件中找到以下参数：

```
EnableClassLimits = 1
PercentofCavPerTeam = 20
NumberOfSappers = 90
NumberOfSpecialists = 12
NumberofInfOfficers = 9
NumberOfSnipers = 10
NumberOfHeavys = 12
NumberofStormTroops = 25
MinimumNumOfPlayerForClassLimits = 15
```

- `EnableClassLimits` 用来启用或禁用职业限制  
- `0` → 禁用  
- `1` → 启用  

- `PercentofCavPerTeam` 定义每队允许的骑兵单位百分比  

- `NumberOfSappers`、`NumberOfSpecialists`、`NumberOfSnipers`、`NumberOfHeavys`、`NumberofStormTroops` 定义每个职业允许的玩家数量  

- `NumberofInfOfficers` 控制可用的军官角色数量  

- `MinimumNumOfPlayerForClassLimits` 定义服务器上必须达到多少玩家数后才启用职业限制  

调整这些数值可以控制每个职业的玩家数量，帮你根据喜欢的玩法风格平衡服务器。

修改完 `ServerConfiguration.ini` 后，保存文件并重启服务器。新的职业限制会自动生效。

## 总结

恭喜你！你已经成功配置了 **Over the Top WWI 服务器** 的职业限制。这能帮你平衡队伍组成，提升整体游戏体验。

如果有任何问题或需要帮助，随时联系我们的客服团队，我们每天都在线为你服务！🙂

<InlineVoucher />