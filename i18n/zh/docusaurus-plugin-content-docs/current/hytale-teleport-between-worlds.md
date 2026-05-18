---
id: hytale-teleport-between-worlds
title: "Hytale：在世界间传送"
description: "了解如何在 Hytale 服务器上实现世界间传送 → 立即了解更多"
sidebar_label: 世界间传送
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

在 Hytale 服务器上进行世界间传送，让玩家可以无缝切换不同的世界环境。这项功能通常用于拥有多个世界的服务器，比如中枢、冒险地图、创意区或独立的游戏区域。

:::info 早期体验提醒

Hytale 于 2026 年 1 月 13 日发布，目前处于早期体验阶段。由于游戏仍在积极开发中，服务器软件、配置文件、模组支持和安装流程可能会持续更新变化。

:::

<InlineVoucher />


## 传送操作

世界传送命令可以通过服务器控制台执行，或者由拥有管理员权限的玩家在游戏内聊天框输入。当从控制台执行时，命令会立即作用于指定玩家；在游戏内执行时，执行命令的玩家必须拥有管理员或同等级权限。

要将玩家从当前世界传送到另一个世界，请使用以下命令：

```
/world teleport <playername> <worldname>
```

`<playername>` 参数指定要传送的玩家名称，`<worldname>` 参数指定目标世界的名称。

世界间传送要求目标世界必须已在服务器上加载。如果目标世界未加载，传送命令将无法成功。要让某个世界可供传送，请使用以下命令加载它：

```
/world load <worldname>
```


:::tip 世界名称一览

如果你不确定某个世界的准确名称，可以使用 `/world list` 命令查看所有可用世界的列表。
:::


## 总结

世界间传送是管理多世界 Hytale 服务器的强大工具。通过在控制台或游戏内聊天中使用相应的世界命令，并确保目标世界已加载，管理员可以为玩家提供流畅且灵活的不同服务器环境间导航体验。

如果你有任何疑问或需要帮助，随时联系我们的支持团队，我们每天都在线为你服务！🙂


<InlineVoucher />