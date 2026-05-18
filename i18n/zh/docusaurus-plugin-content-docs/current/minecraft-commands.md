---
id: minecraft-commands
title: "Minecraft：通用服务器指令"
description: "了解如何使用 Minecraft 指令来提升游戏体验和高效管理功能 → 立即了解更多"
sidebar_label: 通用指令
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

### 什么是指令？

在 Minecraft 中，指令可以用来执行额外或特殊的功能。Minecraft 本身就包含了超过 **100 条指令**，无需任何修改，就能用来激活、管理或执行各种功能。

本文档将介绍最重要且经常使用的指令。如果这里没有列出你需要的指令，官方的 [Minecraft-Wiki](https://minecraft-de.gamepedia.com/) 非常有帮助，每个部分（包括所有指令）都有详细说明。

<InlineVoucher />

### 使用方法

每条指令都以“/”开头。所以如果你想使用指令，必须先在游戏中打开聊天框，输入“/”，然后再输入指令本身。按下 TAB 键会显示所有可用指令的预览，就像网络搜索时自动补全一样，能快速方便地完成指令输入。

:::info
如果你是在控制台执行指令，前面的“/”是不需要的，必须去掉！

这个符号仅用于区分游戏中的普通聊天消息和指令。
:::

### 权限

使用指令需要相应的权限。在 Minecraft 原版或 Forge 中，没有像 Spigot 那样的插件权限系统，只能使用 OP 权限等级系统。这里有个关于 OP 权限系统的教程：[OP 权限](minecraft-addop.md)

如果你安装了权限系统，并且想给某些 Minecraft 指令分配权限，可以按照下面的方式设置。

:::info
每条指令的权限语法都是统一的，可以按需调整。

比如想给 Locate 指令分配权限，权限名称是：``minecraft.command.locate``
:::

## 指令

### /tp

使用 **/tp** 指令，管理员可以传送到其他玩家，或者把玩家传送到指定目标玩家。
该指令也可以用来传送生物，或者通过输入坐标传送自己。详细用法见下方。

**示例：**

``/tp PlayerA``

将执行指令者传送到 PlayerA。

``/tp PlayerA PlayerB``

将 *PlayerA* 传送到 *PlayerB*。无论谁执行指令，指定的玩家都会被传送。
如果执行者是 *PlayerB*，那么 *PlayerA* 会被传送到 *PlayerB* 自己的位置。

``/tp -100 75 985``

将执行者传送到指定坐标。
如果在坐标前指定玩家（``/tp PlayerA -100 75 985``），则会传送该玩家，而不是执行者。

``/tp @s @e[type=minecraft:cow,distance=..10,limit=1]``

将你传送到半径 10 格内最近的一头*牛*。
``@s`` 也可以替换成玩家名，比如 *PlayerA*，这样会传送该玩家。

### /locate

使用 **/locate** 指令可以获取你想找的建筑物的坐标，比如村庄。

**示例：**

``/locate fortress``

在下界时，查找并显示最近的下界要塞位置。

``/locate village``

查找并显示最近的村庄位置，和下界要塞类似。

### /worldborder

用这个指令可以在当前世界设置世界边界，限制玩家探索范围。

**示例：**

``/worldborder center 0 0``

设置世界边界中心点为坐标 0;0，半径从这里计算。

``/worldborder set 16000``

设置边界大小为 16000x16000 方块，即半径 8000 方块。

### /effect

给玩家或实体添加普通药水效果。
有些效果只能通过指令获得，比如幸运效果，目前还没实际功能。

:::info
该指令随着版本更新有所变化和扩展。

下面示例基于最新版本，旧版本可能有所不同！
:::

**示例：**

``/effect give PlayerA minecraft:speed``

给玩家 *PlayerA* 施加速度效果，等级为 1。

### /gamerule

用来修改世界的特殊设置或开启/关闭特殊功能。
比如下面示例，开启死亡时保留物品栏。

**示例：**

``/gamerule keepInventory true``

设置世界规则，玩家死亡时保留物品栏和经验。

``/gamerule mobGriefing false``

设置怪物（如苦力怕）是否能破坏世界。

### /save-all

服务器每 5 分钟自动保存世界数据。
执行此指令会立即保存世界，并重置自动保存倒计时为 5 分钟。

### /tps

用于查看 Spigot 和 Paper Spigot 服务器的 TPS（每秒刻数）。
TPS 反映服务器性能，最高为 20。
显示最近 60 秒的 TPS，以及 5 分钟和 15 分钟的平均值。

### /ban

用来封禁玩家，禁止其进入服务器。封禁基于玩家的 UUID。

:::info
在关闭在线模式的服务器上，玩家可以改名绕过封禁，IP 封禁插件是更好的解决方案。
:::

**示例：**

``/ban PlayerA``

封禁玩家 *PlayerA*。

``/ban @a``

封禁服务器上所有当前在线玩家。拥有 OP 权限的管理员不受影响。

### /pardon

用来解除封禁，让玩家重新进入服务器。

**示例：**

``/pardon PlayerA``

解除对 *PlayerA* 的封禁。

### /kick

断开指定玩家与服务器的连接，强制玩家离开，但玩家可以重新连接。

**示例：**

``/kick PlayerA``

将玩家 *PlayerA* 踢出服务器，显示消息“被管理员踢出”。

``/kick PlayerA Reason``

将玩家 *PlayerA* 踢出服务器，显示自定义消息“Reason”。

<InlineVoucher />