---
id: palworld-enable-pvp
title: "Palworld：启用 PvP"
description: "了解如何在 Palworld 中启用 PvP，配置基地战斗行为，并在您的服务器上应用推荐的 PvP 设置。-> 立即了解更多"
sidebar_label: Palworld：启用 PvP
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Palworld 包含一个 PvP 模式，允许玩家相互战斗，并改变服务器上的基地战斗和公会互动方式。在本指南中，您将学习如何通过编辑 ZAP-Hosting 游戏服务器管理中的正确配置文件手动启用 PvP，并应用所需设置。

:::caution 试验功能提示
Palworld 中的 PvP 被游戏开发者视为试验功能。配置选项和游戏玩法可能会在未来的游戏更新中发生变化。
:::

## 准备工作

开始之前，请确保：

- 您可以访问 ZAP-Hosting 网页界面中的 Palworld 游戏服务器
- 您的服务器当前处于停止状态，或可以在更改后重启
- 您理解 PvP 会显著改变游戏玩法，尤其是玩家战斗、基地防御和死亡时物品丢失方面

:::info 配置访问
对于 ZAP-Hosting Palworld 服务器，相关配置文件可通过游戏服务器管理中的 `Configs` 访问。
:::

## 打开 Palworld 配置文件

要启用 PvP，您需要编辑 `PalWorldSettings.ini` 文件。

### 在 ZAP-Hosting 界面中找到该文件

1. 登录 ZAP-Hosting 网页界面。
2. 打开您的 Palworld 游戏服务器。
3. 在游戏服务器管理中导航到 `Configs`。
4. 打开文件 `PalWorldSettings.ini`。



:::note 配置格式说明
Palworld 服务器设置通常存储在 `PalWorldSettings.ini` 的 `OptionSettings=(...)` 部分内。您需要在该设置块中添加或调整所需的键值。
:::

## 启用必需的 PvP 设置

要激活 PvP，必须确保 `PalWorldSettings.ini` 中以下三个设置均为 `True`。

### 必需的 PvP 键

| 设置 | 必需值 | 说明 |
|---|---|---|
| `bIsPvP` | `True` | 启用服务器上的 PvP 模式 |
| `bEnablePlayerToPlayerDamage` | `True` | 允许玩家间直接伤害 |
| `bEnableDefenseOtherGuildPlayer` | `True` | 允许涉及其他公会玩家的防御互动 |

### 配置示例

将以下值添加到您的 `OptionSettings=(...)` 行中，或如果已存在则修改为对应值：

```ini
bIsPvP=True,
bEnablePlayerToPlayerDamage=True,
bEnableDefenseOtherGuildPlayer=True
```

:::tip 避免重复键
如果 `PalWorldSettings.ini` 中已存在某个设置，请编辑现有值，而不是重复添加相同键。重复条目可能导致意外行为或增加排查难度。
:::

## 推荐的 PvP 设置

启用 PvP 后，您还可以调整其他设置，以获得更平衡的 PvP 游戏体验。以下值是 PvP 服务器常用的推荐配置。

### 建议值

| 设置 | 推荐值 | 说明 |
|---|---|---|
| `bAllowEnhanceStat_Health` | `False` | 禁止分配生命值属性 |
| `bAllowEnhanceStat_Attack` | `False` | 禁止分配攻击属性 |
| `bEnableFastTravel` | `True` | 保持快速旅行开启 |
| `bEnableFastTravelOnlyBaseCamp` | `True` | 限制快速旅行仅限基地营地 |
| `bExistPlayerAfterLogout` | `True` | 玩家登出后仍保留在世界中 |
| `bEnableAimAssistPad` | `False` | 禁用手柄瞄准辅助 |
| `DeathPenalty` | `All` | 死亡时掉落所有物品和伙伴 |
| `bCanPickupOtherGuildDeathPenaltyDrop` | `True` | 允许拾取其他玩家掉落物品 |
| `bInvisibleOtherGuildBaseCampAreaFX` | `False` | 显示其他公会基地区域 |
| `bBuildAreaLimit` | `True` | 防止在限制区域建造 |
| `GuildPlayerMaxNum` | `4` | 限制公会人数 |
| `BaseCampMaxNumInGuild` | `2` | 限制每个公会的基地数量 |
| `MaxBuildingLimitNum` | `1000` | 限制每个玩家的建筑数量 |
| `GuildRejoinCooldownMinutes` | `60` | 公会重新加入冷却时间（分钟） |
| `BlockRespawnTime` | `5.0` | 基地重生延迟时间（秒） |
| `RespawnPenaltyDurationThreshold` | `1800.0` | 重生惩罚重置前的时间（秒） |
| `RespawnPenaltyTimeScale` | `2.0` | 连续死亡后重生惩罚倍数 |

### PvP 设置示例块

如果您想使用推荐的 PvP 值，请在 `OptionSettings=(...)` 部分包含以下条目：

```ini
bAllowEnhanceStat_Health=False,
bAllowEnhanceStat_Attack=False,
bEnableFastTravel=True,
bEnableFastTravelOnlyBaseCamp=True,
bExistPlayerAfterLogout=True,
bEnableAimAssistPad=False,
DeathPenalty=All,
bCanPickupOtherGuildDeathPenaltyDrop=True,
bInvisibleOtherGuildBaseCampAreaFX=False,
bBuildAreaLimit=True,
GuildPlayerMaxNum=4,
BaseCampMaxNumInGuild=2,
MaxBuildingLimitNum=1000,
GuildRejoinCooldownMinutes=60,
BlockRespawnTime=5.0,
RespawnPenaltyDurationThreshold=1800.0,
RespawnPenaltyTimeScale=2.0
```

## 可选的 PvP 限制与奖励

根据您希望服务器的 PvP 竞争程度，您还可以配置技术限制和 PvP 奖励。

### 限制快速移动技术

您可以通过设置 `DenyTechnologyList` 限制某些与移动相关的技术。

| 设置 | 示例值 |
|---|---|
| `DenyTechnologyList` | `SkillUnlock_JetDragon,SkillUnlock_IceHorse,SkillUnlock_IceHorse_Dark,SkillUnlock_SaintCentaur,SkillUnlock_BlackCentaur,SkillUnlock_DarkMechaDragon,SkillUnlock_PoseidonOrca,GrapplingGun,GrapplingGun2,GrapplingGun3,GrapplingGun4,GrapplingGun5` |

示例条目：

```ini
DenyTechnologyList="SkillUnlock_JetDragon,SkillUnlock_IceHorse,SkillUnlock_IceHorse_Dark,SkillUnlock_SaintCentaur,SkillUnlock_BlackCentaur,SkillUnlock_DarkMechaDragon,SkillUnlock_PoseidonOrca,GrapplingGun,GrapplingGun2,GrapplingGun3,GrapplingGun4,GrapplingGun5"
```

:::note 验证现有语法
Palworld 配置格式可能因当前服务器版本及现有 `OptionSettings=(...)` 行的结构而异。保存前请确保您的条目与文件中已有的语法风格一致。
:::

### 配置 PvP 奖励掉落

Palworld 还包含针对玩家击杀的 PvP 奖励选项。

| 设置 | 说明 |
|---|---|
| `bAdditionalDropItemWhenPlayerKillingInPvPMode` | 启用 PvP 击杀时额外物品掉落 |
| `AdditionalDropItemWhenPlayerKillingInPvPMode` | 定义掉落物品 ID |
| `AdditionalDropItemNumWhenPlayerKillingInPvPMode` | 设置掉落数量 |
| `bDisplayPvPItemNumOnWorldMap_BaseCamp` | 在世界地图基地显示 PvP 物品数量 |
| `bDisplayPvPItemNumOnWorldMap_Player` | 在世界地图玩家显示 PvP 物品数量 |

配置示例：

```ini
bAdditionalDropItemWhenPlayerKillingInPvPMode=True,
AdditionalDropItemWhenPlayerKillingInPvPMode=PlayerDropItem,
AdditionalDropItemNumWhenPlayerKillingInPvPMode=1,
bDisplayPvPItemNumOnWorldMap_BaseCamp=True,
bDisplayPvPItemNumOnWorldMap_Player=True
```

:::caution 物品 ID 兼容性
如果您使用自定义的 `AdditionalDropItemWhenPlayerKillingInPvPMode` 值，请确保物品 ID 适用于您当前的 Palworld 版本。无效的物品标识可能导致设置失败或被忽略。
:::

## 启用 PvP 后的变化

启用 PvP 后，服务器上的游戏玩法会发生多项重要变化。根据当前公开的 Palworld PvP 指南，您通常可以预期以下行为：

- 玩家可以互相造成伤害
- 进入其他玩家基地时，其基地伙伴可能变为敌对状态
- 飞行玩家和骑乘伙伴可能受到更多伤害
- 召唤伙伴和基地伙伴可能受到较少伤害
- 玩家可能能访问其他公会拥有的箱子
- 近战武器对其他玩家建筑的伤害可能降低
- 基地伙伴的防御范围可能扩大
- 邻近基地之间允许的距离可能增加
- 玩家在基地遭受攻击时可能收到通知
- 基地攻击期间可能限制建造和修理
- 某些武器在 PvP 模式下的射程或伤害值可能被修改

:::danger 游戏玩法影响警告
启用 PvP 会显著影响服务器上的进程、基地安全和玩家留存。如果您运营公共服务器，建议在应用这些更改前通知玩家。
:::

## 保存文件并重启服务器

编辑完成 `PalWorldSettings.ini` 后，请在 ZAP-Hosting 的 `Configs` 区域保存文件。

### 应用更改

要激活新的 PvP 设置：

1. 保存 `PalWorldSettings.ini` 中的更改。
2. 在 ZAP-Hosting 游戏服务器管理中重启您的 Palworld 服务器。

配置更改需要重启服务器后生效。

:::info 无需额外命令
编辑 `PalWorldSettings.ini` 后，通常不需要额外的游戏内或控制台命令。必须进行完整服务器重启以应用新的 PvP 配置。
:::

## 验证 PvP 是否激活

服务器重启后，加入服务器并在游戏中测试行为。

### 基本检查

您可以通过以下方式验证设置：

- 玩家是否能互相造成伤害
- PvP 相关的基地行为是否生效
- 死亡惩罚和掉落规则是否符合配置
- 可选限制如 `DenyTechnologyList` 是否正常工作

如果更改未生效，请重新打开 `PalWorldSettings.ini` 检查：

- 设置名称是否拼写错误
- 是否存在重复键
- `OptionSettings=(...)` 内的逗号或格式是否正确
- 重启前设置值是否正确保存

## 结论

恭喜，您已成功在 Palworld 服务器上启用 PvP。如有更多问题或需要帮助，请随时联系我们的支持团队，我们每天都在线为您服务！🙂