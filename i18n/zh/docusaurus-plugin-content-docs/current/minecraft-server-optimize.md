---
id: minecraft-server-optimize
title: "Minecraft：服务器性能优化"
description: "了解如何通过有效的设置调整优化 Minecraft 服务器，实现更佳性能和更流畅的游戏体验 → 立即了解更多"
sidebar_label: Minecraft 服务器优化
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

### 优化过程中到底发生了什么？

优化是 Minecraft 服务器运行流畅的关键，尤其是公共服务器，绝对要花足够的时间来调试。只有经过大量时间和测试，才能达到最佳效果。因此，这份文档并非必须严格遵循，而是作为一个指引，帮你朝着正确方向前进。

大多数情况下，优化会修改服务器上的大量设置，有时会显著改变服务器本身的行为。其中一些设置会被调低，从而减轻服务器负担，提升性能。但为了不影响整体游戏体验，建议始终找到一个平衡点。

## 原版（Vanilla）

原版服务器的优化选项非常有限，因为可调节的设置不多。我们尝试通过以下措施给原版服务器“加点马力”：

### 可视范围

最常见的优化措施是缩小视距。默认视距是 10 区块，但很多玩家会设置更低，比如 6-8 区块。有些玩家设置过高，比如 32 区块，这意味着服务器必须加载并处理所有这些区块，性能消耗非常大。

在原版服务器中，可视范围可以在 "server.properties" 配置文件中调整，修改 "view-distance" 的值。为了不影响游戏体验，建议设置为 5-6，这样可以减轻服务器负担高达 50%。我们已有相关文档，详见[这里](minecraft-default-config.md)。

### 数据压缩

服务器和连接的玩家之间会持续交换数据。玩家的移动会传给服务器，服务器再广播给其他玩家。玩家动作或世界事件（比如爆炸）也会反复传输。

为了让数据交换更高效，可以加大数据压缩阈值，这样服务器处理相同数据的工作量只需之前的 50%。在 "server.properties" 中调整 "network-compression-threshold" 值为 512 即可。相关文档也在[这里](minecraft-default-config.md)。

## Forge

和原版类似，服务器本身可调节的选项有限，配置文件很小。但可以安装额外的 Mod，借此减轻服务器负担。

### 预加载区块

减轻服务器负担的一个方法是预加载区块。服务器后续运行时只需加载已保存的区块数据，而不必重新生成。这个过程最好在晚上启动，留整晚运行。

需要安装一个额外的 Mod，推荐这个：[Chunk Pregenerator](https://www.curseforge.com/minecraft/mc-mods/chunkpregenerator)。安装方式请参考我们的教程。

重启服务器前，确保 "server.properties" 中的 "max-tick-time" 设置为 "-1"，否则服务器可能崩溃。建议至少有 8-10 GB RAM，因为这个过程非常吃内存。可以临时升级内存，完成后再降回去。

:::info
注意，上述 Mod 可能不兼容你使用的 Forge 版本，且如果使用其他 Mod，流程可能有所不同。
:::

启动带有该 Mod 的服务器后，打开控制台。建议为世界设置一个半径 16000 区块的边界，命令如下：

- worldborder center 0 0
- worldborder set 16000

:::info
如果需要，请用你世界的中心坐标替换上面的 0 0，避免“切断”已建造的区域。
:::

设置边界后，开始预加载：

- pregen gen startWorldBorder

服务器会依次预加载边界内的所有区块。根据安装的 Mod 数量，这个过程可能长达 8 小时。进度会定期在控制台显示，完成时也会提示！

:::info
预加载完成后，Mod 仍可保留在服务器上，运行时会继续优化区块，即使没有玩家在线也会生效。
:::

### 可视范围

同原版，建议将 "server.properties" 中的 "view-distance" 设置为 5-6，减轻服务器负担约 50%。相关文档见[这里](minecraft-default-config.md)。

### 数据压缩

同原版，调整 "network-compression-threshold" 为 512，详见[这里](minecraft-default-config.md)。

## Bukkit

### 可视范围

同上，调整 "server.properties" 中的 "view-distance" 为 5-6，减轻服务器负担约 50%。详见[这里](minecraft-default-config.md)。

### 数据压缩

同上，调整 "network-compression-threshold" 为 512，详见[这里](minecraft-default-config.md)。

### 生成限制（Spawn-Limits）

这一步会稍微降低服务器上怪物的生成率，几乎不会影响游戏体验。但在某些地方，比如怪物农场，可能会影响其正常运作。

编辑 "bukkit.yml" 配置文件，调整 "spawn-limits" 下的值：
- monsters: 50 #默认: 70
- animals: 10 #默认: 15
- water-animals: 3 #默认: 5
- ambient: 4 #默认: 15

:::info
你当然可以根据需要自行调整这些数值，上述是一个很好的平均值。
:::

为了进一步优化生成，建议调整 "bukkit.yml" 中 "ticks-per" 下的 "monster-spawns"：
- monster-spawns: 2 #默认: 1

如果怪物生成存在普遍问题（可通过 timing 报告判断），该值可调至 5。建议每调一个值都观察服务器表现，找到最适合自己服务器的设置。

### 区块处理（Chunk-Processing）

Minecraft 使用区块（chunk）机制，一个区块由 16x16 个方块组成，客户端通过区块来渲染世界。服务器只处理区块，并加载所需区块到内存。加载和持续处理的区块越多，服务器负担越重，可能导致性能瓶颈。

默认设置下，服务器不会卸载已加载的区块，导致内存占用过高，性能下降。

为确保服务器只加载当前需要的区块，调整 "bukkit.yml" 中 "chunk-gc" 的设置：
- period-in-ticks: 300 #默认: 600
- load-threshold: 300 #默认: 0

"period-in-ticks" 决定区块卸载的时间间隔（单位为刻）。可适当缩短，但要注意避免出现“循环加载”问题：

区块被卸载后不久又被需要，服务器不得不重新加载，反复循环会比区块多留一分钟更耗性能。

## Spigot

### 可视范围

同上，调整 "spigot.yml" 中的 "view-distance" 为 5-6，减轻服务器负担约 50%。

:::info
根据需求，也可以设置为 4，特别是运行 1.13+ 版本的农场世界服务器时，能有效减少卡顿。
:::

### 数据压缩

同上，调整 "server.properties" 中的 "network-compression-threshold" 为 512，详见[这里](minecraft-default-config.md)。

### 生成限制（Spawn-Limits）

同 Bukkit，调整 "bukkit.yml" 中的生成限制，建议值：
- monsters: 50
- animals: 10
- water-animals: 3
- ambient: 4

调整 "monster-spawns" 为 2，必要时可调至 5，观察服务器表现。

### 区块处理（Chunk-Processing）

同 Bukkit，调整 "bukkit.yml" 中 "chunk-gc"：
- period-in-ticks: 300
- load-threshold: 300

避免循环加载。

### 生成范围（Spawn-Range）

怪物生成距离玩家的范围，适当调低避免生成过多怪物，减少服务器压力。

在 "spigot.yml" 的 "world-settings" 中调整：
- mob-spawn-range: 3 #默认: 4

### 实体激活范围（Entity-Ranges）

设置实体（动物和怪物）激活的距离，激活后实体可以移动或识别玩家。激活范围越大，服务器负担越重。

在 "spigot.yml" 中 "entity-activation-range" 调整为：
- animals: 6 #默认: 32
- monsters: 16 #默认: 32
- misc: 2 #默认: 16
- water: 6 #默认: 6
- tick-inactive-villagers: true #默认: true

### 漏斗优化（Funnel-Optimizations）

漏斗（Hopper）是 Minecraft 中重要的物品传输装置，但对服务器压力很大。服务器每秒要检查 20 次漏斗是否有物品可拾取，物品在漏斗或箱子间移动也消耗性能。

通过延长检查间隔至 3 秒，可以显著减轻服务器负担，但可能导致红石时钟失效。

在 "spigot.yml" 中调整：
- hopper-transfer: 24 #默认: 8
- hopper-check: 24 #默认: 8
- hopper-amount: 3 #默认: 1

### 碰撞（Collisions）

1.9 版本后引入实体碰撞，防止玩家重叠。这里调整实体碰撞次数，尤其是怪物农场中大量实体聚集时，能减轻服务器压力。

在 "spigot.yml" 中设置：
- max-entity-collisions: 1 #默认: 8

碰撞设置不影响玩家，仅针对怪物。

### 合并半径（Merge-Radius）

合并半径决定物品和经验球的合并范围，合并后服务器处理的实体数量减少，提升性能。

在 "spigot.yml" 中 "merge-radius" 调整为：
- item: 4.0 #默认: 2.5
- exp: 6.0 #默认: 3.0

:::info
数值不建议超过 8，避免出现新的卡顿。
:::

## Paper Spigot

### 可视范围

同 Spigot，调整 "spigot.yml" 中 "view-distance" 为 5-6，减轻服务器负担约 50%。

:::info
根据需求，也可设置为 4，特别适合 1.13+ 版本的农场世界服务器，能有效减少卡顿。
:::

### 数据压缩

同上，调整 "server.properties" 中 "network-compression-threshold" 为 512，详见[这里](minecraft-default-config.md)。

### 生成限制（Spawn-Limits）

同 Bukkit，调整 "bukkit.yml" 中生成限制：
- monsters: 50
- animals: 10
- water-animals: 3
- ambient: 4

调整 "monster-spawns" 为 2，必要时可调至 5。

### 区块处理（Chunk-Processing）

同 Bukkit，调整 "bukkit.yml" 中 "chunk-gc"：
- period-in-ticks: 300
- load-threshold: 300

避免循环加载。

### 生成范围（Spawn-Range）

调整 "spigot.yml" 中 "world-settings"：
- mob-spawn-range: 3

### 怪物刷怪笼（Mob-Spawner）

城市建造服务器常用大量刷怪笼，可能导致服务器压力大。

调整 "paper.yml" 中刷怪笼激活频率：
- mob-spawner-tick-rate: 3 #默认: 1

:::info
此设置不会显著改变游戏体验。
:::

### 实体激活范围（Entity-Ranges）

同 Spigot，调整 "spigot.yml" 中：
- animals: 6
- monsters: 16
- misc: 2
- water: 6
- tick-inactive-villagers: true

### 漏斗优化（Funnel-Optimization）

同 Spigot，调整 "spigot.yml" 中：
- hopper-transfer: 24
- hopper-check: 24
- hopper-amount: 3

:::info
确保 "paper.yml" 中 "use-hopper-check" 设置为 "true"！
:::

### 碰撞（Collisions）

同 Spigot，调整 "spigot.yml"：
- max-entity-collisions: 1

### 合并半径（Merge-Radius）

同 Spigot，调整 "spigot.yml" 中：
- item: 4.0
- exp: 6.0

:::info
数值不建议超过 8，避免卡顿。
:::

### 爆炸优化（Explosions）

Paper Spigot 重写了爆炸处理，减少服务器卡顿。

调整 "paper.yml"：
- optimize-explosions: true #默认: false

### 箱子优化（Chests）

猫坐在箱子上会阻止打开，服务器每次打开箱子都要检测附近是否有猫，消耗性能。

关闭此检测：
- disable-chest-cat-detection: true #默认: false

### 背包更新（Inventories）

背包（包括箱子、工作台等）更新频率影响性能。

调整 "paper.yml"：
- container-update-tick-rate: 3 #默认: 1

:::info
不建议超过 5，避免背包出现问题。比如生存游戏模式中，建议保持为 1。
:::

### 光照更新（Light-Updates）

Paper Spigot 支持异步光照更新，避免卡顿。

调整 "paper.yml"：
- queue-light-updates: true #默认: false

### 区块数据保存（Saving Chunk Data）

区块数据改动先存入内存，定期写入硬盘。写入过多会导致卡顿。

限制每次保存的区块数，减少卡顿，但会增加内存占用。

调整 "paper.yml"：
- max-auto-save-chunks-per-tick: 10 #默认: 24

### 红石优化（Redstone）

红石电路复杂时会导致严重卡顿。Paper Spigot 提供更高效的红石处理，功能与原版一致。

调整 "paper.yml"：
- use-faster-eigencraft-redstone: true #默认: false

:::info
**注意！某些情况下可能会显著改变红石行为！**
:::

<InlineVoucher />