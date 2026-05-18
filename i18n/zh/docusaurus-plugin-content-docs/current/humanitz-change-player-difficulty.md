---
id: humanitz-change-player-difficulty
title: "HumanitZ：更改玩家难度"
description: "了解如何调整你的 HumanitZ 服务器上的玩家难度和生存设置 → 立即了解更多"
sidebar_label: "更改玩家难度"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## 介绍

HumanitZ 中的玩家难度决定了生存体验的惩罚程度。从永久死亡到生命值消耗速度和强盗强度，这些设置直接影响你的服务器挑战感。

<InlineVoucher />

## 配置

玩家难度设置在 `GameServerSettings.ini` 文件中控制。你可以在服务器管理面板的 **配置** 中找到这个文件。打开配置文件，找到以下参数：

````
;当设置为 true 时，死亡的玩家将失去角色，必须重新创建新角色
PermaDeath=false

;0=不丢失，1=丢失背包和手持武器，2=前者+口袋和背包，3=以上全部+装备
OnDeath=2

;睡眠剥夺效果 false=禁用 true=启用
Sleep=true

;生命值消耗速度 0=慢，1=正常，2=快
VitalDrain=1

;狗狗伙伴生命值 0=低 1=默认 2=高
CompanionHealth=1

;狗狗伙伴伤害 0=低 1=默认 2=高
CompanionDmg=1

;人类强盗重生时间（分钟），设为 0 禁用重生
HumanRespawnTimer=90

;人类强盗生命难度 0=非常简单，1=简单，2=默认，3=困难，4=非常困难，5=噩梦
HumanHealth=2

;人类强盗速度难度 0=非常简单，1=简单，2=默认，3=困难，4=非常困难，5=噩梦
HumanSpeed=2

;人类强盗伤害难度 0=非常简单，1=简单，2=默认，3=困难，4=非常困难，5=噩梦
HumanDamage=2
````

下面是每个设置的详细说明：

- `PermaDeath` – 设置为 `true` 时，玩家死亡后永久失去角色，必须重新创建  
- `OnDeath` – 定义玩家死亡时丢失多少物品  
- `Sleep` – 启用或禁用睡眠剥夺效果  
- `VitalDrain` – 控制饥饿、口渴等生命值消耗速度  
- `CompanionHealth` – 设置狗狗伙伴的生命值等级  
- `CompanionDmg` – 设置狗狗伙伴的伤害等级  
- `HumanRespawnTimer` – 决定人类强盗重生所需时间（0 禁用重生）  
- `HumanHealth` – 调整强盗生命难度  
- `HumanSpeed` – 调整强盗移动速度难度  
- `HumanDamage` – 调整强盗伤害难度  

根据你想要的难度调整数值。编辑完成后，保存文件并重启服务器，设置才会生效。



## 难度预设示例

### 简单生存设置

这个配置让游戏体验更轻松，生命值消耗慢，敌人较弱，没有永久死亡。

```
PermaDeath=false
OnDeath=1
Sleep=false
VitalDrain=0
CompanionHealth=2
CompanionDmg=2
HumanRespawnTimer=180
HumanHealth=1
HumanSpeed=1
HumanDamage=1
```



### 困难生存设置

这个配置增加生存压力，开启永久死亡，生命值消耗快，强盗更强。

```
PermaDeath=true
OnDeath=3
Sleep=true
VitalDrain=2
CompanionHealth=0
CompanionDmg=0
HumanRespawnTimer=60
HumanHealth=4
HumanSpeed=4
HumanDamage=4
```



## 结语

恭喜你！通过调整 `GameServerSettings.ini` 中的难度相关数值，你已经成功自定义了 HumanitZ 服务器的玩家难度设置。如有任何疑问或需要帮助，随时联系我们的客服团队，我们每天都在线为你服务！🙂

<InlineVoucher />