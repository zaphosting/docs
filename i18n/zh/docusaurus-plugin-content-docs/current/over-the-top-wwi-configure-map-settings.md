---
id: over-the-top-wwi-configure-map-settings
title: "Over the Top WWI：配置随机地图设置"
description: "了解如何在你的 Over the Top WWI 服务器上配置随机地图生成设置 → 立即了解更多"
sidebar_label: 随机地图
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

**Over the Top WWI** 中的随机地图设置让你可以动态生成拥有不同地形、植被和环境特征的地图。这大大提升了游戏的重玩价值，并为每场战斗创造独一无二的战场。

通过调整这些数值，你可以控制地图大小、地形复杂度，以及森林、岩石或建筑物等物体的数量。

<InlineVoucher />

## 配置

随机地图设置在服务器配置文件中进行配置。你可以在你的 **游戏服务器管理面板** 的 **配置** 里找到并编辑该文件。定位并打开 `ServerConfiguration.ini` 配置文件。在文件中找到以下参数：

```
RandomMapSizee = 450
RandomFields = 8.25
RandomCivBuildings = 0
RandomMilBuildings = 0
RandomForests = 8.5
RandomSingleTrees = 1.1
RandomBush = 5
RandomRocks = 1.1
RandomNoiseSetting = 0
RandomWaterHeight = 12.25
RandomMaxTerrainHeight = 26
RandomFrequency = 5
RandomLacunarity = 3
RandomPersistence = 32
RandomDesert = 0
```

- `RandomMapSizee` 定义生成地图的整体大小  
- `RandomFields`、`RandomForests`、`RandomBush`、`RandomRocks` 控制地图上自然元素的数量  
- `RandomCivBuildings` 和 `RandomMilBuildings` 定义平民和军事建筑的数量  
- `RandomSingleTrees` 控制孤立树木的分布  
- `RandomNoiseSetting`、`RandomFrequency`、`RandomLacunarity` 和 `RandomPersistence` 影响地形生成和变化  
- `RandomWaterHeight` 定义水位高度  
- `RandomMaxTerrainHeight` 控制地形的海拔和高度  
- `RandomDesert` 决定是否出现沙漠环境  

- `0` → 关闭  
- `1` → 开启  
- `2` → 随机  

调整这些数值，打造从密林到开阔战场或多样地形的各种地图类型。

修改完 `ServerConfiguration.ini` 后，保存文件并重启服务器。新地图设置将在生成随机地图时生效。

## 总结

恭喜你！你已经成功配置了 **Over the Top WWI 服务器** 的随机地图设置。这样你就能创造独特且动态的战场，提升游戏的重玩性和玩家体验。

如果有任何问题或需要帮助，随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />