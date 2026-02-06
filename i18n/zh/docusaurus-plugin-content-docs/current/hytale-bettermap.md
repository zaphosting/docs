---
id: hytale-bettermap
title: "Hytale：用 BetterMap 提升世界探索体验"
description: "了解如何通过 BetterMap 模组利用保存的地图数据、路标、缩放和优化渲染来提升 Hytale 世界探索 → 立即了解更多"
sidebar_label: BetterMap
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

探索庞大且复杂的世界是 Hytale 的核心玩法之一。随着世界规模的扩大，玩家离出生点越来越远，想要追踪已探索区域、兴趣点和路线很快就会变得棘手。

![img](https://screensaver01.zap-hosting.com/index.php/s/WGaiERKfa3EFy48/preview)

**BetterMap** 模组通过提供一个高级的游戏内地图，支持持久化数据、自定义缩放级别、路标和性能优化渲染，极大地增强了世界探索体验。玩家无需依赖记忆或外部工具，就能用 BetterMap 更高效地导航世界，并与其他玩家共享地图信息。

<InlineVoucher />



## BetterMap 为 Hytale 带来了什么

BetterMap 扩展了默认的探索体验，带来了一个功能齐全的地图系统。已探索的区域会自动保存，并在游戏会话间持续存在，帮助玩家随着时间积累起对世界的可靠认知。

地图支持可调节的缩放级别，方便玩家在细节丰富的局部视图和更广阔的周边概览间切换。这在规划长途旅行或寻找特定生物群落和建筑时特别有用。

路标功能允许玩家标记重要地点，比如基地、村庄、地牢或资源丰富区。这些标记有助于定位，减少不必要的奔波。

BetterMap 还支持共享地图功能。在多人服务器上，地图数据可以在玩家间共享，帮助团队更有效地协作，建立对已探索世界的共同认知。



## 安装 BetterMap

BetterMap 通过 CurseForge 发布，作为模组安装。你可以通过我们的 Mods Installer 或 FTP 安装模组。更多信息请查看我们的[安装模组](hytale-mods.md)指南。

安装完成后，重启 Hytale 服务器。加载后，游戏内即可使用地图界面，自动开始记录已探索区域。


## 使用 BetterMap

进入游戏后，BetterMap 提供了可视化地图界面和命令，方便玩家直接控制地图行为和路标。

通过配置的快捷键打开地图界面，实时显示已探索地形。玩家可以缩放地图，在详细的局部视图和更宽广的概览间切换，方便导航和规划。

BetterMap 还支持通过游戏内聊天执行命令，方便快速管理地图和路标，无需打开完整界面。




## 路标管理

路标是 BetterMap 最强大的功能之一，可以通过地图界面或命令进行管理。要在当前位置创建路标，使用：

```
/bettermap waypoint add <name>
```
这会用你当前的坐标和指定名称创建一个新路标。

![img](https://screensaver01.zap-hosting.com/index.php/s/99KXn7XmSbQSmNy/preview)


要删除已有路标：
```
/bettermap waypoint remove <name>
```

查看所有路标列表：
```
/bettermap waypoint list
```

路标可以编辑以更好地组织地图。许多服务器允许自定义颜色或图标，具体操作可通过地图界面或命令参数完成，视模组版本而定。

```
/bettermap waypoint edit <name> color red
```

路标管理器让你轻松启用或禁用单个路标，重命名它们，或随着世界变化移除过时地点。

在多人服务器上，共享路标帮助团队协调探索。一个玩家发现的位置可以共享给其他人，打造一个重要地点的集体地图。

## 总结

BetterMap 通过结合保存的地图数据、可缩放视图、路标、共享地图和高效渲染，极大提升了 Hytale 的世界探索体验。使用 BetterMap，玩家能更好地定位、提升规划能力，享受更棒的单人和多人探索乐趣。

如有任何问题或需要帮助，欢迎随时联系我们的客服团队，我们每天都在线为你服务！🙂

<InlineVoucher />