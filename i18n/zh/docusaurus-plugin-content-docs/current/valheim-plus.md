---
id: valheim-plus
title: "Valheim：Valheim Plus 服务器"
description: "了解如何通过 Valheim Plus 增强 Valheim 游戏体验，提升功能和服务器性能 → 立即了解更多"
sidebar_label: Valheim Plus
services:
  - gameserver-valheim
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

:::info
Valheim Plus 是一个客户端模组。它允许你对基础游戏进行各种修改。
:::

<InlineVoucher />

## Valheim Plus 客户端安装

首先，你需要打开你电脑上的 Valheim 文件夹。  
方法是在 Steam 库中右键点击 Valheim，选择“***管理***”，然后点击“***浏览本地文件***”。

![](https://screensaver01.zap-hosting.com/index.php/s/oXaiLGR55Z9fH92/preview)

打开文件夹后，下载 "***WindowsClient.zip***"。  
你可以在 [这里](https://github.com/valheimPlus/ValheimPlus/releases) 下载 "***WindowsClient.zip***"（进入“Assets”部分）。

![](https://screensaver01.zap-hosting.com/index.php/s/ZDsabTk4eMfQcFM/preview)

接着，将 "***WindowsClient.zip***" 的内容解压到刚才打开的 Valheim 服务器文件夹中。

![](https://screensaver01.zap-hosting.com/index.php/s/wiTfFmLetr9TmJX/preview)

完成后启动 Valheim，客户端设置就完成啦。

## Valheim Plus 服务器安装

要修改游戏，先打开我们服务器的游戏标签页：

![](https://screensaver01.zap-hosting.com/index.php/s/YE2xKnqfrZfWE4J/preview)

在“可用游戏”中找到 Valheim Plus，点击下载按钮：

![](https://screensaver01.zap-hosting.com/index.php/s/GF6Na4EPGiNQSDZ/preview)

服务器会自动重新安装。安装完成后，你可以在“**配置**”中移除密码，并且可以升级更多槽位。

## 槽位升级

要升级槽位，先打开游戏服务器面板中的“**升级与降级**”功能。

![](https://screensaver01.zap-hosting.com/index.php/s/SpAxfojkxY5wmsE/preview)

在升级与降级页面选择你想要的槽位数量。

:::info
这里只需支付“**差价**”，费用按剩余运行时间计算
:::

![](https://screensaver01.zap-hosting.com/index.php/s/jyZGRaKAZ7n5GkR/preview)

完成升级前，在页面底部选择支付方式。  
选择后点击“***执行升级***”按钮，升级就会开始。

![](https://screensaver01.zap-hosting.com/index.php/s/3eB9FtgLzxBpPgB/preview)

## Valheim Plus 配置

打开游戏服务器界面中的“**配置**”页面，找到 "*ValheimPlus: valheim_plus.cfg*"。  
点击配置文件旁边的蓝色图标即可打开。

![](https://screensaver01.zap-hosting.com/index.php/s/grjGPr64RSs69xN/preview)

以下是配置文件中可用命令列表：

### [Player]

| 命令 | 取值 | 功能 |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | 启用或禁用玩家相关修改 |
| baseMegingjordBuff | 150 (float) | 增加负重 150 |
| baseMaximumWeight | 300 (float) | 设置最大负重为 300 |
| baseAutoPickUpRange | 2 (float) | 设置自动拾取物品范围为 2 |
| disableCameraShake | true / false | 启用或禁用镜头抖动 |
| experienceGainedNotifications | true / false | 启用或禁用左上角经验值提示 |

### [Food]

| 命令 | 取值 | 功能 |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | 启用或禁用食物相关修改 |
| foodDuration | 0-100% | 按百分比调整食物持续时间 |

### [Fermenter]

| 命令 | 取值 | 功能 |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | 启用或禁用发酵器相关修改 |
| fermenterDuration | 2400 (float) 等于游戏内 48 小时 | 设置发酵器生产时间，数值越低生产越快 |
| fermenterItemsProduced | 6 (integer) | 设置发酵器可生产的物品数量 |

### [Furnace]

| 命令 | 取值 | 功能 |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | 启用或禁用熔炉相关修改 |
| maximumOre | 10 (integer) | 设置熔炉最大矿石数量 |
| maximumCoal | 20 (integer) | 设置熔炉最大煤炭数量 |
| productionSpeed | 30 (float) | 设置熔炉生产时间，数值越低生产越快 |
| coalUsedPerProduct | 2 (integer) | 设置每个产品消耗的煤炭数量 |

### [Kiln]

| 命令 | 取值 | 功能 |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | 启用或禁用窑炉相关修改 |
| productionSpeed | 15 (float) | 设置窑炉生产时间，数值越低生产越快 |
| maximumWood | 25 (integer) | 设置窑炉最大木材数量 |

### [Items]

| 命令 | 取值 | 功能 |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | 启用或禁用物品相关修改 |
| noTeleportPrevention | true / false | 禁止使用传送 |
| baseItemWeight | 0 (float) | 设置物品重量，-50% = 减轻物品重量，+50% = 增加物品重量 |
| itemStackMultiplier | 0 (float) | 设置最大堆叠数量，只能为正数。50 = 最大堆叠数量增加 50%。*警告* 如果减少，超出部分物品会被删除 |

### [Building]

| 命令 | 取值 | 功能 |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | 启用或禁用建筑相关修改 |
| noInvalidPlacementRestriction | true / false | 移除“无效放置”限制 |
| noWeatherDamage | true / false | 移除建筑因天气（如雨水）造成的损坏 |
| maximumPlacementDistance | 5 (float) | 设置最大放置距离 |

### [Beehive]

| 命令 | 取值 | 功能 |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | 启用或禁用蜂巢相关修改 |
| maximumHoneyPerBeehive | 4 (integer) | 设置蜂巢最大蜂蜜量 |
| honeyProductionSpeed | 1200 (float) 等于游戏内 24 小时 | 设置蜂蜜生产时间，数值越低生产越快 |

### [Server]

| 命令 | 取值 | 功能 |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | 启用或禁用服务器相关修改 |
| maxPlayers | 10 (int) | 设置槽位数，会根据升级与降级时的选择自动调整 |
| disableServerPassword | true / false | 移除服务器密码 |
| enforceConfiguration | true / false | 启用后只有配置相同的玩家能加入服务器 |
| enforceMod | true / false | 启用后只有安装相同模组的玩家能加入服务器 |

### [Map]

| 命令 | 取值 | 功能 |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | 启用或禁用地图相关修改 |
| exploreRadius | 100 (float) | 设置玩家周围地图解锁半径 |
| shareMapProgression | true / false | 启用后地图解锁进度在所有玩家间共享，只有可见玩家贡献解锁进度 |

### [Hotkeys]

可用按键列表见 [这里](https://docs.unity3d.com/ScriptReference/KeyCode.html)。

| 命令 | 取值 | 功能 |
| :--------: | :--------------------------: | :---------------------------------:  |
| rollForwards | F9 | 向前翻滚 |
| rollBackwards | F10 | 向后翻滚 |
| enterAdvancedBuildingMode | F1 | 冻结物体并启用高级控制 |
| exitAdvancedBuildingMode | F3 | 退出高级控制模式并解冻物体 |
| enterAdvancedEditingMode | Keypad0 | 选中当前物体并进入高级编辑模式（AEM） |
| confirmPlacementOfAdvancedEditingMode | KeypadEnter | 确认所有选中物体的修改 |
| resetAdvancedEditingMode | F7 | 重置选中物体的位置和旋转（AEM） |
| abortAndExitAdvancedEditingMode | F8 | 重置选中物体的位置和旋转并退出 AEM 模式 |

### [AdvancedBuildingMode]

| 命令 | 取值 | 功能 |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | 启用或禁用高级建筑模式修改 |

### [AdvancedEditingMode]

| 命令 | 取值 | 功能 |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | 启用或禁用高级编辑模式修改 |

### [Stamina]

| 命令 | 取值 | 功能 |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | 启用或禁用耐力相关修改 |
| dodgeStaminaUsage | 10 (float) | 设置翻滚消耗的耐力值 |
| encumberedStaminaDrain | 10 (float) | 设置负重时耐力消耗 |
| sneakStaminaDrain | 5 (float) | 设置潜行时耐力消耗 |
| runStaminaDrain | 10 (float) | 设置奔跑时耐力消耗 |
| staminaRainDelay | 1 (float) | 设置耐力回复延迟时间 |
| staminaRain | 5 (float) | 设置耐力回复速度 |
| swimStaminaDrain | 5 (float) | 设置游泳时耐力消耗 |
| jumpStaminaUsage | 10 (float) | 设置跳跃时耐力消耗 |


<InlineVoucher />