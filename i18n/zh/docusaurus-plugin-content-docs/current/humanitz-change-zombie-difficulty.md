---
id: humanitz-change-zombie-difficulty
title: "HumanitZ：调整僵尸难度"
description: "了解如何在你的 HumanitZ 服务器上调整僵尸和 AI 难度设置 → 立即了解更多"
sidebar_label: "调整僵尸难度"
services:
  - gameserver-humanitz

---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## 介绍

僵尸难度在塑造 HumanitZ 的生存体验中起着关键作用。从僵尸的生命值和速度，到刷新倍率和 AI 突袭事件，这些设置决定了世界的危险程度。

所有与僵尸和 AI 相关的难度选项都在 `GameServerSettings.ini` 文件中配置，允许你完全掌控服务器上 PvE 遭遇的强度。

<InlineVoucher />

## 配置

僵尸难度设置在 `GameServerSettings.ini` 文件中控制。你可以在服务器管理面板的 **配置** 里找到这个文件。打开配置文件，找到以下参数：

```
;生命值难度，0=非常简单，1=简单，2=默认，3=困难，4=非常困难，5=噩梦
ZombieDiffHealth=1

;速度难度，0=非常简单，1=简单，2=默认，3=困难，4=非常困难，5=噩梦
ZombieDiffSpeed=2

;伤害难度，0=非常简单，1=简单，2=默认，3=困难，4=非常困难，5=噩梦
ZombieDiffDamage=3

;僵尸数量倍率，例如2表示僵尸数量翻倍，0.5表示数量减半。
ZombieAmountMulti=1

;人类强盗数量倍率，例如2表示数量翻倍，0.5表示数量减半。
HumanAmountMulti=1

;僵尸犬主要在夜间出现，2表示数量翻倍，0.5表示数量减半。
ZombieDogMulti=1

;僵尸重生时间（分钟），设置为0则禁用僵尸重生。
ZombieRespawnTimer=90

;游戏会不定时生成 AI 突袭事件，如僵尸或人类袭击。0=禁用，1=低，2=默认，3=高，4=疯狂
AIEvent=2
```

下面是各项设置的详细说明：

- `ZombieDiffHealth` – 控制僵尸生命值难度  
- `ZombieDiffSpeed` – 控制僵尸移动速度  
- `ZombieDiffDamage` – 控制僵尸伤害输出  
- `ZombieAmountMulti` – 僵尸刷新总数倍率  
- `HumanAmountMulti` – 人类强盗刷新数量倍率  
- `ZombieDogMulti` – 僵尸犬刷新数量倍率  
- `ZombieRespawnTimer` – 僵尸重生所需时间（0为禁用重生）  
- `AIEvent` – 控制 AI 突袭事件的频率  

修改完成后，保存文件并重启服务器，设置才会生效。

## 难度预设示例

### 简单僵尸配置

这个配置让 PvE 体验更宽松，敌人更少，威胁降低。

```
ZombieDiffHealth=1
ZombieDiffSpeed=1
ZombieDiffDamage=1
ZombieAmountMulti=0.75
HumanAmountMulti=0.75
ZombieDogMulti=0.5
ZombieRespawnTimer=180
AIEvent=1
```

### 困难僵尸配置

这个配置提升敌人强度、刷新率和事件频率，打造更具挑战性的世界。

```
ZombieDiffHealth=4
ZombieDiffSpeed=4
ZombieDiffDamage=4
ZombieAmountMulti=1.5
HumanAmountMulti=1.5
ZombieDogMulti=2
ZombieRespawnTimer=60
AIEvent=3
```

## 总结

恭喜你！通过调整 `GameServerSettings.ini` 中的僵尸相关数值，你已经成功定制了 HumanitZ 服务器上的僵尸难度设置。如有任何疑问或需要帮助，欢迎随时联系在线客服，我们每天都在线为你服务！🙂

<InlineVoucher />