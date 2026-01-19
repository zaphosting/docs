---
id: hytale-disable-world-fall-damage
title: "Hytale：关闭世界跌落伤害"
description: "了解如何在你的 Hytale 服务器上关闭跌落伤害 → 立即了解更多"
sidebar_label: 关闭世界跌落伤害
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## 介绍

在 Hytale 服务器中，重力和跌落伤害是世界玩法机制的一部分。当开启跌落伤害时，玩家从高处掉落会受到伤害；关闭后，玩家可以自由跌落而不会受伤。关闭跌落伤害非常适合创意服务器、建筑项目、测试环境，或者任何不希望跌落伤害影响玩家体验的场景。

<InlineVoucher />



## 配置

跌落伤害是通过每个世界的配置文件来控制的。服务器宇宙中的每个世界都有自己的 `config.json` 文件，里面有一个设置决定是否启用跌落伤害。

要关闭跌落伤害，打开对应世界文件夹下的 `universe/worlds/<world_name>/config.json`，找到控制跌落伤害的设置，通常是一个布尔值标志，比如 `IsFallDamageEnabled`，将其设置为 `false`：

```
{
  "IsFallDamageEnabled": false
}
```

当该值为 `false` 时，玩家将不会因跌落而受到伤害。如果你想保持开启跌落伤害，则应设置为 `true`：

```
{
  "IsFallDamageEnabled": true
}
```

修改完成后，保存文件并**重启服务器**。配置更改只有在服务器重新加载世界时才会生效，因此必须重启服务器才能应用新设置。



## 总结

通过配置世界的跌落伤害标志，你可以完全掌控玩家是否会因跌落受到伤害。如有任何疑问或需要帮助，欢迎随时联系在线客服，我们每天都在这里为你服务！🙂

<InlineVoucher />