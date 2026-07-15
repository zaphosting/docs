---
id: palworld-performance-guide
title: "Palworld：性能指南"
description: "通过手动配置更改提升 Palworld 服务器性能，减少性能下降，降低服务器负载。-> 立即了解更多"
sidebar_label: "性能指南"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Palworld 服务器性能可能会随着时间下降，尤其是在拥有大量基地、工人、掉落物品和野生 Pal 的活跃服务器上。本指南将教你如何在 ZAP-Hosting 网页界面中优化 `PalWorldSettings.ini` 文件，以降低服务器负载并提升整体性能。

## 准备工作

开始之前，你需要能够访问你的 Palworld 游戏服务器管理权限，并且有权限编辑配置文件。

:::info 必要权限
你需要在 ZAP-Hosting 游戏服务器管理面板中访问你的 Palworld 服务器。所需的配置文件位于 `Configs` 目录下。
:::

:::caution 请先备份
性能调优可能会显著改变游戏行为。编辑配置前，建议先备份，以便必要时恢复之前的设置。
:::

## 打开 Palworld 配置文件

要优化服务器，你需要编辑 Palworld 服务器的主配置文件。

1. 登录你的 ZAP-Hosting 网页界面。
2. 打开你的 **Palworld** 游戏服务器管理。
3. 进入 **Configs**。
4. 打开文件 `PalWorldSettings.ini`。



:::note 修改位置说明
性能相关设置存储在 `PalWorldSettings.ini` 中。你需要手动编辑此文件中的现有选项值。
:::

## 了解相关设置

有几个 Palworld 设置会直接影响服务器性能。有些数值可以减少 CPU、内存和世界模拟负载，另一些则有助于限制因非活跃玩家或过多世界实体造成的积累。

### 主要性能设置

以下设置是减少繁忙服务器性能下降最关键的。

| 设置项 | 默认值 | 推荐修改 | 作用 |
|---|---:|---|---|
| `BuildObjectDeteriorationDamageRate` | `1.0` | 保持在 `0.1` 或更高 | 更高的损坏率有助于更快移除废弃建筑 |
| `bAutoResetGuildNoOnlinePlayers` | `False` | 适当时设为 `True` | 在宽限期后移除非活跃公会基地 |
| `AutoResetGuildTimeNoOnlinePlayers` | `72.0` | 根据需要调整 | 定义公会重置前的非活跃时间（小时） |
| `PalSpawnNumRate` | `1.0` | 降低 | 减少野生 Pal 生成，降低模拟负载 |
| `DropItemMaxNum` | `3000` | 降低 | 限制世界中的掉落物品数量 |
| `DropItemAliveMaxHours` | `1.0` | 降低 | 更快移除掉落物品 |
| `BaseCampMaxNumInGuild` | `4` | 降低 | 减少公会基地数量 |
| `ServerReplicatePawnCullDistance` | `15000.0` | 降低 | 降低 Pal 同步距离，减少网络和服务器负载 |
| `BaseCampWorkerMaxNum` | `15` | 降低 | 限制每个基地的工人 Pal 数量 |
| `MaxBuildingLimitNum` | `0` | 设定具体数值 | 限制每个玩家的建筑总数 |
| `bEnableInvaderEnemy` | `True` | 设为 `False` | 禁用突袭类入侵敌人，减少负载 |
| `bEnableFastTravel` | `True` | 需要时设为 `False` | 可减少快速旅行事件导致的卡顿 |
| `bIsPvP` | `False` | 除非必要保持 `False` | PvP 会增加活跃环境下的服务器负载 |

### 次要性能设置

这些设置在大型公共服务器上也有帮助。

| 设置项 | 默认值 | 推荐修改 | 作用 |
|---|---:|---|---|
| `BaseCampMaxNum` | `128` | 降低 | 降低服务器允许的基地总数 |
| `AutoSaveSpan` | `240` | 增加 | 减少服务器自动保存频率 |

:::tip 建议先保守调整
最好一次只修改少数几个数值，然后测试服务器表现。这样更容易判断哪个设置提升了性能，哪个设置对游戏体验影响过大。
:::

## 编辑配置

Palworld 将服务器选项存储在 `PalWorldSettings.ini` 的 `OptionSettings` 部分。你需要手动调整相关条目。

### 优化配置示例

以下示例展示了一个保守的性能优化配置。请仅替换你想应用到服务器的数值。

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=0.800000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=False,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=2000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=64,BaseCampWorkerMaxNum=10,DropItemAliveMaxHours=0.500000,bAutoResetGuildNoOnlinePlayers=True,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=True,bIsPvP=False,bCanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=False,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,bInvisibleOtherGuildBaseCampAreaFX=False,bBuildAreaLimit=False,ItemWeightRate=1.000000,ServerReplicatePawnCullDistance=10000.000000,bEnableGuildPlayerSelect=False,BanListURL="https://api.palworldgame.com/api/banlist.txt",bAutoResetGuildNoOnlinePlayers=True,BaseCampMaxNumInGuild=3)
```

:::caution 请确认已有条目
Palworld 配置格式可能随更新变化。保存前，请确保你是在编辑文件中已有的 `OptionSettings` 行，避免创建重复或冲突条目。
:::

### 推荐数值调整

如果不想替换整行，可以只修改现有配置中的相关数值。

| 条目 | 示例值 | 修改原因 |
|---|---:|---|
| `PalSpawnNumRate` | `0.8` | 减少野生 Pal 生成 |
| `DropItemMaxNum` | `2000` | 减少物品杂乱 |
| `DropItemAliveMaxHours` | `0.5` | 更快移除掉落物品 |
| `BaseCampMaxNum` | `64` | 减少基地总数 |
| `BaseCampMaxNumInGuild` | `3` | 限制公会基地扩张 |
| `BaseCampWorkerMaxNum` | `10` | 减少 AI 工人负载 |
| `ServerReplicatePawnCullDistance` | `10000.0` | 缩短同步距离 |
| `bEnableInvaderEnemy` | `False` | 禁用突袭相关负载 |
| `bEnableFastTravel` | `False` | 避免快速旅行相关卡顿 |
| `bAutoResetGuildNoOnlinePlayers` | `True` | 清理非活跃公会基地 |
| `AutoResetGuildTimeNoOnlinePlayers` | `72.0` | 设置非活跃宽限期 |
| `MaxBuildingLimitNum` | `[your_limit]` | 限制过度建筑 |
| `bIsPvP` | `False` | 避免额外 PvP 负载 |
| `AutoSaveSpan` | `[your_value]` | 减少保存频率（需当前配置格式支持） |

:::danger 非活跃公会重置会删除基地
启用 `bAutoResetGuildNoOnlinePlayers=True` 后，非活跃公会会在 `AutoResetGuildTimeNoOnlinePlayers` 设置的时间后自动解散，可能永久删除非活跃玩家的基地和建筑。
:::

## 保存并应用更改

编辑完成后，你需要保存配置并重启服务器，使新设置生效。

1. 保存 `PalWorldSettings.ini` 中的更改。
2. 返回游戏服务器管理界面。
3. 重启 Palworld 服务器。



:::info 需要重启
修改 `PalWorldSettings.ini` 后必须重启。否则服务器将继续使用之前的设置。
:::

## 长期性能最佳实践

手动配置调整有帮助，但只是整体服务器优化的一部分。

### 使用自动每日重启

每日重启是 Palworld 服务器的常见最佳实践，因为资源使用会随时间积累。

- 在 ZAP-Hosting 服务器管理中创建自动重启计划
- 选择玩家活跃度较低的时间
- 如果社区活跃，提前通知玩家

### 限制世界增长

长期运行的 Palworld 服务器性能下降的最大原因通常是世界复杂度。

为减少此问题：

- 降低基地数量限制
- 降低工人数量
- 减少掉落物品积累
- 减少野生 Pal 生成
- 小心清理非活跃公会
- 考虑使用 `MaxBuildingLimitNum` 设置建筑限制

### 逐步测试调整

除非服务器已经不稳定，否则不要一次性大幅降低数值。

推荐流程：

1. 先降低生成和物品数值
2. 接着减少基地和工人限制
3. 需要时禁用高负载可选功能
4. 每轮调整后重启并监控性能

:::tip 平衡性能与游戏体验
最佳设置取决于你的服务器类型。小型私服通常可以保持较高数值，而大型公共社区服则常需更严格限制以防性能下降。
:::

## 结论

恭喜你，已成功优化你的 Palworld 服务器性能。如有更多问题或需要帮助，请随时联系我们的支持团队，我们每天都在线为你服务！🙂