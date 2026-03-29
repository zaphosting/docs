---
id: over-the-top-wwi-configure-damage-settings
title: "Over the Top WWI：配置伤害设置"
description: "了解如何调整你的 Over the Top WWI 服务器上的伤害和战斗行为 → 立即了解更多"
sidebar_label: 伤害设置
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

**Over the Top WWI** 中的伤害设置决定了战斗的致命程度以及武器在游戏中的表现。调整这些数值可以让你打造更真实的体验，或者更轻松宽容的游戏环境。

通过修改伤害倍数和战斗机制，你可以显著影响玩家被淘汰的速度以及战斗的节奏。

<InlineVoucher />

## 配置

伤害设置在服务器配置文件中进行配置。你可以在 **游戏服务器管理面板** 的 **配置** 里找到并编辑这个文件。定位并打开 `ServerConfiguration.ini` 配置文件。在文件中找到以下参数：

```
ShootingDamageMulti = 100
MeleeDamageMulti = 300
ShootingVelocityMulti = 100
DragEffector = 30
WindEffector = 15
RandomEffectorr = 10
```

- `ShootingDamageMulti` 控制远程武器造成的伤害

- `MeleeDamageMulti` 定义近战攻击的伤害

- `ShootingVelocityMulti` 影响弹道速度，进而影响命中率和判定

- `DragEffector` 影响子弹随距离衰减速度

- `WindEffector` 决定风力对子弹轨迹的影响强度

- `RandomEffectorr` 为子弹行为增加随机性，影响精准度

调整这些数值可以根据你的服务器风格，打造更真实的弹道表现或简化战斗机制。

修改完 `ServerConfiguration.ini` 后，保存文件并重启服务器。新的伤害和战斗设置将自动生效。

## 结语

恭喜你！你已经成功配置了你的 **Over the Top WWI 服务器** 的伤害设置。通过调整这些参数，你可以微调战斗表现，打造符合你社区风格的游戏体验。

如果有任何问题或需要帮助，随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />