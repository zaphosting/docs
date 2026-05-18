---
id: ark-configuration
title: "ARK：服务器配置"
description: "了解如何优化你的ARK游戏服务器设置，提升游戏体验和自定义 → 立即了解更多"
sidebar_label: 服务器配置
services:
  - gameserver-ark
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 服务器配置

**ARK游戏服务器**的配置可能会让一些人感到困惑和无助，但这背后是有原因的。ARK提供了大量的游戏配置选项。此外，配置分布在不同的配置文件中，你还需要注意哪些命令属于哪个文件。在本指南中，我们将帮你理清ARK游戏服务器的配置流程。

![](https://screensaver01.zap-hosting.com/index.php/s/oQ5BbazkfD3PjgK/preview)

<InlineVoucher />

## 配置文件的区别

**ARK游戏服务器**的配置通过两个配置文件完成：**GameUserSettings.ini** 和 **Game.ini**。你可以通过我们的**网页面板**中的**Configs**，或者通过**FTP**来修改它们。

| 配置文件           | 网页面板路径                                               | FTP路径                                |
| ------------------ | ---------------------------------------------------------- | ------------------------------------- |
| GameUserSettings.ini | `游戏服务器管理 -> 配置 -> GameUserSettings.ini`           | `ShooterGame/Saved/Config/LinuxServer/` |
| Game.ini           | `游戏服务器管理 -> 配置 -> Game.ini`                        | `ShooterGame/Saved/Config/LinuxServer/` |

**GameUserSettings.ini** 文件包含客户端和服务器的配置选项。客户端选项服务器不会使用。服务器选项位于 **[ServerSettings]** 区块，通常在文件末尾。更高级的修改，比如调整学习点（engram points）、每级经验奖励、禁用某些内容或自定义玩家偏好，则通过 **Game.ini** 文件完成。

## 配置说明

下面我们将详细介绍这两个配置文件，讲解最常用的命令及其作用。

## 配置：地图

ARK提供了多张可在服务器上游玩的地图。你可以在网页面板的设置中选择想玩的地图。

| 地图           | 发布日期   | 命令名称          |
| -------------- | ---------- | ----------------- |
| The Island     | 2015-06-02 | `TheIsland`       |
| The Center     | 2016-05-17 | `TheCenter`       |
| Scorched Earth | 2016-09-01 | `ScorchedEarth_P` |
| Ragnarok       | 2017-06-12 | `Ragnarok`        |
| Aberration     | 2017-12-12 | `Aberration_P`    |
| Extinction     | 2018-11-06 | `Extinction`      |
| Valguero       | 2019-06-18 | `Valguero_P`      |
| Genesis        | 2020-02-25 | `Genesis`         |
| Crystal Isles  | 2020-06-11 | `CrystalIsles`    |

只需在**地图**字段输入地图的命令名称，服务器下次启动时就会加载该地图。

![](https://screensaver01.zap-hosting.com/index.php/s/93JNW5Hbpf35RTJ/preview)

## 配置：GameUserSettings.ini

### [ServerSettings]

**allowThirdPersonPlayer**

定义是否启用第三人称视角。

| 数据类型 | 默认值 | 取值范围 |
| :-------: | :-----: | :-------: |
|  布尔值   |   0     |   0/1    |

**AllowCaveBuildingPvE**

定义在PVE模式下是否允许在洞穴内建造建筑。

| 数据类型 | 默认值 | 取值范围 |
| :-------: | :-----: | :-------: |
|  布尔值   |   0     |   0/1    |

**alwaysNotifyPlayerJoined**

定义玩家进入服务器时是否通知所有玩家。

| 数据类型 | 默认值 | 取值范围 |
| :-------: | :-----: | :-------: |
|  布尔值   |   0     |   0/1    |

**alwaysNotifyPlayerLeft**

定义玩家离开服务器时是否通知所有玩家。

| 数据类型 | 默认值 | 取值范围 |
| :-------: | :-----: | :-------: |
|  布尔值   |   0     |   0/1    |

**bAllowFlyerCarryPvE**

定义玩家是否允许用飞行恐龙携带其他恐龙。

| 数据类型 | 默认值 | 取值范围 |
| :-------: | :-----: | :-------: |
|  布尔值   |   0     |   0/1    |

**bDisableStructureDecayPvE**

禁用玩家建筑的逐步腐烂。

| 数据类型 | 默认值 | 取值范围 |
| :-------: | :-----: | :-------: |
|  布尔值   |   0     |   0/1    |

**DayCycleSpeedScale**

定义ARK中时间流逝的缩放因子，控制白天和黑夜的转换速度。默认1与单人模式及官方服务器相同。小于1减慢周期，大于1加快。1分钟现实时间约等于28分钟游戏时间。若想实现约24小时的游戏昼夜周期，建议设置为0.035。

| 数据类型 | 默认值  | 取值范围 |
| :-------: | :------: | :-------: |
|   浮点数   | 1.00000 |    ∞     |

**DayTimeSpeedScale**

定义白天时间流逝的缩放因子。值越小，白天越长。

| 数据类型 | 默认值  | 取值范围 |
| :-------: | :------: | :-------: |
|   浮点数   | 1.00000 |    ∞     |

**NightTimeSpeedScale**

定义夜晚时间流逝的缩放因子。值越小，夜晚越长。

| 数据类型 | 默认值  | 取值范围 |
| :-------: | :------: | :-------: |
|   浮点数   | 1.00000 |    ∞     |

**DinoCharacterFoodDrainMultiplier**

定义恐龙的食物消耗速率。值越高，恐龙越快饿，也影响驯服时间。

| 数据类型 | 默认值  | 取值范围 |
| :-------: | :------: | :-------: |
|   浮点数   | 1.00000 |    ∞     |

**DinoCharacterHealthRecoveryMultiplier**

定义恐龙的生命恢复速度。值越高，恢复越快。

| 数据类型 | 默认值  | 取值范围 |
| :-------: | :------: | :-------: |
|   浮点数   | 1.00000 |    ∞     |

**DinoCharacterStaminaDrainMultiplier**

定义恐龙的耐力消耗速度。值越高，耐力消耗越快。

| 数据类型 | 默认值  | 取值范围 |
| :-------: | :------: | :-------: |
|   浮点数   | 1.00000 |    ∞     |

**DinoCountMultiplier**

定义地图上恐龙的生成数量。值越高，生成概率越大。

| 数据类型 | 默认值  | 取值范围 |
| :-------: | :------: | :-------: |
|   浮点数   | 1.00000 |    ∞     |

**DinoDamageMultiplier**

定义恐龙造成的伤害。值越高，伤害越大。

| 数据类型 | 默认值  | 取值范围 |
| :-------: | :------: | :-------: |
|   浮点数   | 1.00000 |    ∞     |

**DinoResistanceMultiplier**

定义恐龙的抗性。值越高，抗性越强。

| 数据类型 | 默认值  | 取值范围 |
| :-------: | :------: | :-------: |
|   浮点数   | 1.00000 |    ∞     |

**globalVoiceChat**

定义是否启用全局语音聊天。

| 数据类型 | 默认值 | 取值范围 |
| :-------: | :-----: | :-------: |
|  布尔值   |   0     |   0/1    |

**HarvestAmountMultiplier**

定义采集资源的数量。值越高，采集资源越多。

| 数据类型 | 默认值  | 取值范围 |
| :-------: | :------: | :-------: |
|   浮点数   | 1.00000 |    ∞     |

**HarvestHealthMultiplier**

定义可采集资源的耐久度。值越高，每次采集获得的材料越多。

| 数据类型 | 默认值  | 取值范围 |
| :-------: | :------: | :-------: |
|   浮点数   | 1.00000 |    ∞     |

**noTributeDownloads**

禁止从服务器下载游戏角色。

| 数据类型 | 默认值  | 取值范围 |
| :-------: | :------: | :-------: |
|   浮点数   | 1.00000 |    ∞     |

**PreventDownloadSurvivors**

禁止下载幸存者角色。

| 数据类型 | 默认值  | 取值范围 |
| :-------: | :------: | :-------: |
|   浮点数   | 1.00000 |    ∞     |

**PreventDownloadItems**

禁止下载物品。

| 数据类型 | 默认值  | 取值范围 |
| :-------: | :------: | :-------: |
|   浮点数   | 1.00000 |    ∞     |

**PreventDownloadDinos**

禁止下载恐龙。

| 数据类型 | 默认值  | 取值范围 |
| :-------: | :------: | :-------: |
|   浮点数   | 1.00000 |    ∞     |

**PlayerCharacterFoodDrainMultiplier**

定义玩家饥饿速度。值越高，饥饿越快。

| 数据类型 | 默认值  | 取值范围 |
| :-------: | :------: | :-------: |
|   浮点数   | 1.00000 |    ∞     |

**PlayerCharacterHealthRecoveryMultiplier**

定义玩家生命恢复速度。值越高，恢复越快。

| 数据类型 | 默认值  | 取值范围 |
| :-------: | :------: | :-------: |
|   浮点数   | 1.00000 |    ∞     |

**PlayerCharacterStaminaDrainMultiplier**

定义玩家耐力消耗速度。值越高，耐力消耗越快。

| 数据类型 | 默认值  | 取值范围 |
| :-------: | :------: | :-------: |
|   浮点数   | 1.00000 |    ∞     |

**PlayerCharacterWaterDrainMultiplier**

定义玩家口渴速度。值越高，口渴越快。

| 数据类型 | 默认值  | 取值范围 |
| :-------: | :------: | :-------: |
|   浮点数   | 1.00000 |    ∞     |

**PlayerDamageMultiplier**

定义玩家造成的伤害。值越高，伤害越大。

| 数据类型 | 默认值  | 取值范围 |
| :-------: | :------: | :-------: |
|   浮点数   | 1.00000 |    ∞     |

**PlayerResistanceMultiplier**

定义玩家的抗性。值越高，抗性越强。

| 数据类型 | 默认值  | 取值范围 |
| :-------: | :------: | :-------: |
|   浮点数   | 1.00000 |    ∞     |

**proximityChat**

定义是否启用本地语音聊天。

| 数据类型 | 默认值       | 取值范围 |
| :-------: | :-----------: | :-------: |
|  布尔值   | 0（关闭）    |   0/1    |

**ResourceNoReplenishRadiusPlayers**

定义玩家周围资源不再刷新（再生）的半径。值越大，半径越大。

| 数据类型 | 默认值  | 取值范围 |
| :-------: | :------: | :-------: |
|   浮点数   | 1.00000 |    ∞     |

**ResourceNoReplenishRadiusStructures**

定义建筑物周围资源不再刷新（再生）的半径。值越大，半径越大。

| 数据类型 | 默认值  | 取值范围 |
| :-------: | :------: | :-------: |
|   浮点数   | 1.00000 |    ∞     |

**ResourcesRespawnPeriodMultiplier**

定义资源刷新周期的倍数。值越大，刷新越慢。

| 数据类型 | 默认值  | 取值范围 |
| :-------: | :------: | :-------: |
|   浮点数   | 1.00000 |    ∞     |

**ServerAdminPassword**

定义管理员登录密码。更多信息请参考我们的指南：[成为管理员](ark-becomeadmin.md)

| 数据类型 | 默认值 | 取值范围 |
| :-------: | :-----: | :-------: |
|  字符串   |  无    |  任意    |

**ServerCrosshair**

定义是否显示准星。

| 数据类型 | 默认值       | 取值范围 |
| :-------: | :-----------: | :-------: |
|  布尔值   | 0（关闭）    |   0/1    |

**serverForceNoHud**

定义是否显示游戏内控制界面。

| 数据类型 | 默认值       | 取值范围 |
| :-------: | :-----------: | :-------: |
|  布尔值   | 0（关闭）    |   0/1    |

**serverHardcore**

定义是否启用硬核模式（玩家死亡后需重新开始）。

| 数据类型 | 默认值       | 取值范围 |
| :-------: | :-----------: | :-------: |
|  布尔值   | 0（关闭）    |   0/1    |

**ServerPassword**

设置服务器登录密码。默认关闭，设置密码后启用。

| 数据类型 | 默认值 | 取值范围 |
| :-------: | :-----: | :-------: |
|  字符串   |  无    |  任意    |

**serverPVE**

定义是否启用PVP。关闭则为纯PVE。

| 数据类型 | 默认值       | 取值范围 |
| :-------: | :-----------: | :-------: |
|  布尔值   | 0（关闭）    |   0/1    |

**ShowMapPlayerLocation**

定义是否在地图上显示玩家位置标记。 - [示例](https://screensaver01.zap-hosting.com/index.php/s/XgKByRZpzgqCZif/preview)

| 数据类型 | 默认值       | 取值范围 |
| :-------: | :-----------: | :-------: |
|  布尔值   | 0（关闭）    |   0/1    |

**StructureDamageMultiplier**

定义建筑物的耐久度。值越高，耐久越强。

| 数据类型 | 默认值  | 取值范围 |
| :-------: | :------: | :-------: |
|   浮点数   | 1.00000 |    ∞     |

**StructureResistanceMultiplier**

定义建筑物受到攻击时的伤害倍数。值越高，受到伤害越大。

| 数据类型 | 默认值  | 取值范围 |
| :-------: | :------: | :-------: |
|   浮点数   | 1.00000 |    ∞     |

**TamedDinoDamageMultiplier**

定义驯服恐龙攻击时的伤害倍数。值越高，伤害越大。

| 数据类型 | 默认值  | 取值范围 |
| :-------: | :------: | :-------: |
|   浮点数   | 1.00000 |    ∞     |

**TamedDinoResistanceMultiplier**

定义驯服恐龙的抗性。值越高，抗性越强。

| 数据类型 | 默认值  | 取值范围 |
| :-------: | :------: | :-------: |
|   浮点数   | 1.00000 |    ∞     |

**TamingSpeedMultiplier**

定义驯服速度。值越高，驯服越快。

| 数据类型 | 默认值  | 取值范围 |
| :-------: | :------: | :-------: |
|   浮点数   | 1.00000 |    ∞     |

**XPMultiplier**

定义玩家获得的经验值倍数。值越高，经验越多。

| 数据类型 | 默认值  | 取值范围 |
| :-------: | :------: | :-------: |
|   浮点数   | 1.00000 |    ∞     |

**EnablePVPGamma**

定义PVP服务器是否允许使用Gamma调整。

| 数据类型 | 默认值       | 取值范围 |
| :-------: | :-----------: | :-------: |
|  布尔值   | 0（关闭）    |   0/1    |

**EnablePVEGamma**

定义PVE服务器是否允许使用Gamma调整。

| 数据类型 | 默认值       | 取值范围 |
| :-------: | :-----------: | :-------: |
|  布尔值   | 0（关闭）    |   0/1    |

**SpectatorPassword**

定义非管理员进入观察模式所需密码。

| 数据类型 | 默认值 | 取值范围 |
| :-------: | :-----: | :-------: |
|  字符串   |  无    |  任意    |

**DifficultyOffset**

定义服务器难度。最大生物等级 = 难度值 × 30。计算难度偏移的公式：

```
DifficultyOffset = (最大生物等级 / 30 - 0.5) / (官方难度 - 0.5)
```

| 数据类型 | 默认值  | 取值范围 |
| :-------: | :------: | :-------: |
|  字符串   | 0.50000 |  任意    |

**PvEStructureDecayPeriodMultiplier**

定义建筑开始腐烂的时间周期。值越大，腐烂越慢。

| 数据类型 | 默认值  | 取值范围 |
| :-------: | :------: | :-------: |
|   浮点数   | 1.00000 |    ∞     |

**PvEStructureDecayDestructionPeriod**

定义PVE服务器上建筑可被其他玩家摧毁的等待时间。值越大，等待时间越长。

| 数据类型 | 默认值  | 取值范围 |
| :-------: | :------: | :-------: |
|   浮点数   | 1.00000 |    ∞     |

**PvPStructureDecay**

定义是否启用PVP服务器上的建筑自动腐烂。

| 数据类型 | 默认值 | 取值范围 |
| :-------: | :-----: | :-------: |
|  布尔值   |   0     |   0/1    |

**DisableDinoDecayPvE**

禁用（true）或启用（false）恐龙自动失主。

| 数据类型 | 默认值       | 取值范围 |
| :-------: | :-----------: | :-------: |
|  布尔值   | 0（关闭）    |   0/1    |

**PvEDinoDecayPeriodMultiplier**

定义恐龙失主速度的倍数。值越大，失主越快。

| 数据类型 | 默认值  | 取值范围 |
| :-------: | :------: | :-------: |
|   浮点数   | 1.00000 |    ∞     |

**AdminLogging**

启用管理员作弊命令在聊天中的输出。

| 数据类型 | 默认值       | 取值范围 |
| :-------: | :-----------: | :-------: |
|  布尔值   | 0（关闭）    |   0/1    |

**MaxTamedDinos**

定义岛上最大可驯服恐龙数量。

| 数据类型 | 默认值 | 取值范围 |
| :-------: | :-----: | :-------: |
|  整数    |  8300   |    ∞    |

**MaxNumbersofPlayersInTribe**

定义每个部落最大玩家数量。

| 数据类型 | 默认值 | 取值范围 |
| :-------: | :-----: | :-------: |
|  整数    |   2     |    ∞    |

**KickIdlePlayersPeriod**

定义踢出长时间不活跃玩家的时间（秒）。

| 数据类型 | 默认值       | 取值范围 |
| :-------: | :-----------: | :-------: |
|  整数    | 1800（秒）  |    ∞    |

**PerPlatformMaxStructuresMultiplier**

定义鞍座平台上的建筑倍数。请谨慎使用，过高可能严重影响性能。

| 数据类型 | 默认值  | 取值范围 |
| :-------: | :------: | :-------: |
|   浮点数   | 1.00000 |    ∞     |

**StructureDamageRepairCooldown**

定义受损建筑再次修复前的冷却时间（秒）。0表示无冷却。

| 数据类型 | 默认值 | 取值范围 |
| :-------: | :-----: | :-------: |
|  整数    |  180    |    ∞    |

**bForceAllStructureLocking**

定义是否所有容器类型都可上锁。

| 数据类型 | 默认值 | 取值范围 |
| :-------: | :-----: | :-------: |
|  布尔值   |   1     |   0/1    |

**bUseVSync**

定义是否启用垂直同步（可减少部分显卡问题）。

| 数据类型 | 默认值 | 取值范围 |
| :-------: | :-----: | :-------: |
|  布尔值   |   0     |   0/1    |

**MaxPlatformSaddleStructureLimit**

定义鞍座平台上最大建筑数量。

| 数据类型 | 默认值 | 取值范围 |
| :-------: | :-----: | :-------: |
|  整数    |  100    |    ∞    |

**RCONPort**

定义RCON远程控制端口。

| 数据类型 | 默认值 | 取值范围 |
| :-------: | :-----: | :-------: |
|  整数    |  100    |    ∞    |

**AutoSavePeriodMinutes**

定义服务器自动保存间隔（分钟）。

:::info
此值固定为30分钟，无法更改。
:::

| 数据类型 | 默认值 | 取值范围 |
| :-------: | :-----: | :-------: |
|  整数    |  30     |    ∞    |

**RCONServerGameLogBuffer**

定义RCON工具中显示的聊天行数。

| 数据类型 | 默认值 | 取值范围 |
| :-------: | :-----: | :-------: |
|  整数    |  600    |    ∞    |

**PreventOfflinePvPInterval**

定义玩家断线后被标记为真正离线的秒数。

| 数据类型 | 默认值       | 取值范围 |
| :-------: | :-----------: | :-------: |
|  整数    | 60（秒）   |    ∞    |

**bPvPDinoDecay**

定义离线防护时是否保护部落/玩家的恐龙。

| 数据类型 | 默认值 | 取值范围 |
| :-------: | :-----: | :-------: |
|  布尔值   |   1     |   0/1    |

**bPvPStructureDecay**

定义离线防护时是否保护部落/玩家的建筑。

| 数据类型 | 默认值 | 取值范围 |
| :-------: | :-----: | :-------: |
|  布尔值   |   1     |   0/1    |

**DisableImprintDinoBuff**

定义是否禁用玩家亲自抚养恐龙宝宝获得的额外加成。

| 数据类型 | 默认值 | 取值范围 |
| :-------: | :-----: | :-------: |
|  布尔值   |   1     |   0/1    |

**AllowAnyoneBabyImprintCuddle**

定义是否允许所有玩家抚摸恐龙宝宝。

| 数据类型 | 默认值 | 取值范围 |
| :-------: | :-----: | :-------: |
|  布尔值   |   1     |   0/1    |

**OverrideOfficialDifficulty**

覆盖官方难度等级。

| 数据类型 | 默认值 | 取值范围 |
| :-------: | :-----: | :-------: |
|  整数    |   1     |   0/1    |

**TheMaxStructuresInRange**

定义近距离内允许的最大建筑数量。

| 数据类型 | 默认值 | 取值范围 |
| :-------: | :-----: | :-------: |
|  整数    | 10500   |    ∞    |

**PvEAllowStructuresAtSupplyDrops**

定义是否允许在空投附近建造建筑。

| 数据类型 | 默认值       | 取值范围 |
| :-------: | :-----------: | :-------: |
|  布尔值   | 0（关闭）    |   0/1    |

**AutoDestroyDecayedDinos**

定义是否直接销毁腐烂的恐龙，而非变为可认领状态。

| 数据类型 | 默认值       | 取值范围 |
| :-------: | :-----------: | :-------: |
|  布尔值   | 0（关闭）    |   0/1    |

**ClampItemSpoilingTimes**

定义所有物品的过期时间将被设置为最大过期时间。

| 数据类型 | 默认值       | 取值范围 |
| :-------: | :-----------: | :-------: |
|  布尔值   | 0（关闭）    |   0/1    |

**AllowCrateSpawnsOnTopOfStructures**

定义空投箱是否可以降落在建筑物上。

| 数据类型 | 默认值       | 取值范围 |
| :-------: | :-----------: | :-------: |
|  布尔值   | 0（关闭）    |   0/1    |

**PreventOfflinePvP**

定义是否启用“离线突袭保护”。

| 数据类型 | 默认值 | 取值范围 |
| :-------: | :-----: | :-------: |
|  布尔值   | 1（开启） |   0/1    |

**AllowMultipleAttachedC4**

允许多次将C4炸弹附加到恐龙身上。

| 数据类型 | 默认值 | 取值范围 |
| :-------: | :-----: | :-------: |
|  布尔值   | 1（开启） |   0/1    |

**bPvEDisableFriendlyFire**

定义PVE模式下是否禁用队友伤害。

| 数据类型 | 默认值 | 取值范围 |
| :-------: | :-----: | :-------: |
|  布尔值   | 1（开启） |   0/1    |

**ServerAutoForceRespawnWildDinosInterval**

定义强制重生所有野生恐龙的时间间隔（秒）。例如86400表示一天后强制重生。

| 数据类型 | 默认值 | 取值范围 |
| :-------: | :-----: | :-------: |
|  整数    | 86400   |    ∞    |

**DisableWeatherFog**

定义是否启用地图上的雾效。

| 数据类型 | 默认值       | 取值范围 |
| :-------: | :-----------: | :-------: |
|  布尔值   | 0（开启）    |   0/1    |

### **[/script/engine.gamesession]**

**MaxPlayers**

定义服务器同时在线的最大玩家数。

| 数据类型 | 默认值（取决于购买的槽位） | 取值范围 |
| :-------: | :------------------------: | :-------: |
|   浮点数   |          固定槽位           |  10-130  |

### **[SessionSettings]**

**SessionName**

设置服务器名称，显示在服务器列表和游戏中。

| 数据类型 | 默认值      | 取值范围 |
| :-------: | :----------: | :-------: |
|   浮点数   | ARK #XXXXXX |    ∞     |

### **[MessageOfTheDay]**

**Duration**

定义连接后欢迎消息显示的时长。

| 数据类型 | 默认值  | 取值范围 |
| :-------: | :------: | :-------: |
|  整数    | 1.00000 |   X-X    |

**Message**

定义玩家连接时显示的欢迎消息。

| 数据类型 | 默认值 | 取值范围 |
| :-------: | :-----: | :-------: |
|   浮点数   |  "..."  |    /     |

## 配置：Game.ini

如前所述，更复杂的修改通过Game.ini完成，比如调整学习点或每级经验奖励。

### 等级上限

可以通过`LevelExperienceRampOverrides`函数提升玩家和恐龙的最高等级。该功能自v194版本起支持。详细信息和示例可见Steam论坛：[Extended Game Options: How to Configure your Custom ARK server](https://steamcommunity.com/app/346110/discussions/10/530646715633129364/)。

该命令需写两次，第一次针对玩家等级，第二次针对恐龙等级。语法示例如下：

```
[/script/shootergame.shootergamemode]
LevelExperienceRampOverrides=(
ExperiencePointsForLevel[<LEVELVALUE>]=<Points>,
ExperiencePointsForLevel[<LEVELVALUE>]=<Points>,
ExperiencePointsForLevel[<LEVELVALUE>]=<Points>)
```

方括号内为等级值（**LEVELVALUE**），等号后为达到该等级所需经验值（**Points**）。

例如，若想设置等级上限为500，示例如下：

```
[/script/shootergame.shootergamemode]
LevelExperienceRampOverrides=( 
ExperiencePointsForLevel[0]=100, 
ExperiencePointsForLevel[1]=200, 
ExperiencePointsForLevel[2]=300, 
ExperiencePointsForLevel[3]=400, 
ExperiencePointsForLevel[4]=500, 
ExperiencePointsForLevel[5]=600,
... // 为简洁起见省略部分
ExperiencePointsForLevel[499]=50000)
```

### 学习点（Engram points）

每次升级都会获得学习点。自v193版本起，可以调整每级获得的学习点数。语法如下：

```
OverridePlayerLevelEngramPoints=
```

每个等级需写一行命令。例如，定义10级，每级额外获得5点学习点，示例如下：

```
OverridePlayerLevelEngramPoints=5
OverridePlayerLevelEngramPoints=10
OverridePlayerLevelEngramPoints=15
OverridePlayerLevelEngramPoints=20
OverridePlayerLevelEngramPoints=25
OverridePlayerLevelEngramPoints=30
OverridePlayerLevelEngramPoints=35
OverridePlayerLevelEngramPoints=40
OverridePlayerLevelEngramPoints=45
OverridePlayerLevelEngramPoints=50
```

命令行数通常与之前定义的等级上限相匹配。

:::info
ARK是一个更新频繁的游戏，服务器配置也会随之变化。建议查看官方文档获取更详细和最新的信息：https://ark.fandom.com/wiki/Server_configuration
:::

<InlineVoucher />