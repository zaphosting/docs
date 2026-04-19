---
id: windrose-world-modifiers
title: "Windrose：世界修改器"
description: "配置 Windrose 世界修改器，提供浮点值、战斗设置和合作模式缩放参数的完整参数参考示例 -> 立即了解更多"
sidebar_label: 世界修改器
services:
 - gameserver-windrose
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Windrose 自定义世界修改器让你可以详细调整战斗、海战、探索、任务和合作模式缩放参数。通过本指南，你将学习如何编辑 `WorldDescription.json` 文件，理解每个参数，并将自定义设置应用到你的 Windrose 游戏服务器。

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## 准备工作

开始之前，请确保你具备以下条件：

- 一个在 ZAP-Hosting 上运行的 Windrose 游戏服务器
- 访问游戏服务器管理面板的权限
- 在编辑文件前服务器已停止
- 能够访问游戏服务器管理中的 **配置文件** 或 **文件管理器** 区域

:::info 配置文件位置说明
自定义世界修改器存储在 `WorldDescription.json` 文件的 `WorldSettings` 区块内。
:::

:::caution 请先停止服务器
编辑 `WorldDescription.json` 前务必先停止服务器，以防止启动或自动保存时文件损坏或修改被覆盖。
:::

## 理解世界修改器

每个自定义设置都单独定义在 `WorldDescription.json` 的 `WorldSettings` 内。游戏根据类型区分数值：

- `float` 表示数值乘数，如生命值或伤害
- `bool` 表示布尔值，真或假选项
- `tag` 表示命名的难度标签，如战斗难度

这个结构很重要，因为每个参数必须放在正确的区块。如果你把 `float` 值放到 `bool`，或者使用无效标签，设置可能无法生效。

:::note 参数类型说明
如果你不熟悉“参数”一词，它就是游戏中可配置的数值。在本指南中，每个参数控制世界难度或游戏行为的某一部分。
:::

## 打开世界配置文件

要应用自定义世界修改器，你需要编辑正确的世界文件。

1. 在游戏服务器管理面板中停止你的 Windrose 服务器。
2. 打开 **文件管理器**。
3. 导航到以下路径：

```text
R5/Saved/SaveProfiles/Default/RocksDB/<game_version>/Worlds/<world_id>/WorldDescription.json
```

请按以下说明替换占位符：

| 占位符 | 含义 |
| --- | --- |
| `[your_game_version]` | 你当前的 Windrose 游戏版本文件夹 |
| `[your_world_id]` | 你想修改的世界 ID |

:::tip 如何找到正确的世界
如果你有多个世界，请确保编辑的是正确 `[your_world_id]` 文件夹内的 `WorldDescription.json`，否则修改会影响其他存档。
:::

## 编辑 WorldSettings 区块

在 `WorldDescription.json` 中找到 `WorldSettings` 区块，在这里添加或调整你的自定义数值。

示例结构如下：

```json
"WorldSettings": {
  "bool": {
    "CoopQuests": true,
    "EasyExplore": false
  },
  "float": {
    "MobHealthMultiplier": 1.5,
    "MobDamageMultiplier": 1.2,
    "ShipHealthMultiplier": 1.0,
    "ShipDamageMultiplier": 1.0,
    "BoardingDifficultyMultiplier": 1.0,
    "Coop_StatsCorrectionModifier": 1.0,
    "Coop_ShipStatsCorrectionModifier": 0.5
  },
  "tag": {
    "CombatDifficulty": {
      "TagName": "WDS.Parameter.CombatDifficulty.Hard"
    }
  }
}
```

保存文件后，重新启动服务器。

:::info 预设行为说明
如果你手动设置了任何自定义数值，服务器下一次启动时 `WorldPresetType` 会自动切换为 `Custom`。如果你想使用纯预设配置，请避免混用自定义数值。
:::

## 完整参数参考

以下表格提供所有可用自定义世界修改器的完整参考。

### 战斗参数

| 参数 | 区块 | 默认值 | 范围 | 作用 |
| --- | --- | --- | --- | --- |
| `MobHealthMultiplier` | `float` | `1.0` | `0.2 - 5.0` | 敌人生命值乘数 |
| `MobDamageMultiplier` | `float` | `1.0` | `0.2 - 5.0` | 敌人伤害乘数 |
| `CombatDifficulty` | `tag` | `Normal` | `Easy`, `Normal`, `Hard` | Boss 攻击性和遭遇难度 |

`CombatDifficulty` 必须写成标签格式，例如：

```json
"tag": {
  "CombatDifficulty": {
    "TagName": "WDS.Parameter.CombatDifficulty.Hard"
  }
}
```

可用值：

| 难度 | TagName 值 |
| --- | --- |
| Easy | `WDS.Parameter.CombatDifficulty.Easy` |
| Normal | `WDS.Parameter.CombatDifficulty.Normal` |
| Hard | `WDS.Parameter.CombatDifficulty.Hard` |

### 海战参数

| 参数 | 区块 | 默认值 | 范围 | 作用 |
| --- | --- | --- | --- | --- |
| `ShipHealthMultiplier` | `float` | `1.0` | `0.4 - 5.0` | 敌方船只生命值乘数 |
| `ShipDamageMultiplier` | `float` | `1.0` | `0.2 - 2.5` | 敌方船只伤害乘数 |
| `BoardingDifficultyMultiplier` | `float` | `1.0` | `0.2 - 5.0` | 登船战中需击败的敌方水手数量乘数 |

这些设置适合想让海战对小船员更简单或对资深团队更具挑战的情况。

### 合作模式缩放参数

| 参数 | 区块 | 默认值 | 范围 | 作用 |
| --- | --- | --- | --- | --- |
| `Coop_StatsCorrectionModifier` | `float` | `1.0` | `0.0 - 2.0` | 根据玩家数量调整敌人生命值和姿态损失 |
| `Coop_ShipStatsCorrectionModifier` | `float` | `0.0` | `0.0 - 2.0` | 根据玩家数量调整敌方船只生命值 |

这些数值对大团队尤其有用，能保持随着玩家增多战斗平衡。

### 探索参数

| 参数 | 区块 | 默认值 | 作用 |
| --- | --- | --- | --- |
| `EasyExplore` | `bool` | `false` | 禁用兴趣点地图标记 |

:::note EasyExplore 命名说明
尽管名字是“EasyExplore”，将其设为 `true` 实际上会让探索更难，因为它禁用了兴趣点的地图标记，提供更沉浸式的探索体验。
:::

### 任务参数

| 参数 | 区块 | 默认值 | 作用 |
| --- | --- | --- | --- |
| `CoopQuests` | `bool` | `true` | 当一名玩家完成合作任务时，自动为所有激活该任务的玩家完成 |

此设置适合想简化团队进度或要求每个玩家单独完成目标的情况。

## 乘数比例参考

如果你不确定某个 `float` 数值如何影响游戏，参考下表快速了解。

| 数值 | 作用 |
| --- | --- |
| `0.5` | `50%` - 明显更简单 |
| `1.0` | `100%` - 默认或正常 |
| `2.0` | `200%` - 明显更难 |
| `5.0` | `500%` - 极其困难 |

此表是平衡世界参数的实用示例。数值越低难度越低，数值越高难度显著增加。

:::tip 从小幅调整开始
测试平衡时，建议一次只调整一个参数，这样更容易判断哪个设置导致了游戏体验的变化。
:::

## 示例配置

以下示例可帮助你构建自己的自定义设置。

### 休闲船员

此配置降低战斗压力，保持任务共享开启，并使登船战更简单。

```json
"float": {
  "MobHealthMultiplier": 0.6,
  "MobDamageMultiplier": 0.6,
  "BoardingDifficultyMultiplier": 0.5
}
```

### 硬核海战

此配置提升陆地和海战难度，关闭任务共享，开启沉浸式探索。

```json
"bool": {
  "CoopQuests": false,
  "EasyExplore": true
},
"float": {
  "MobHealthMultiplier": 2.0,
  "MobDamageMultiplier": 1.5,
  "ShipHealthMultiplier": 2.0,
  "ShipDamageMultiplier": 1.5
}
```

### 大团队缩放

适合 8 人以上大团队，默认缩放可能过于简单。

```json
"float": {
  "MobHealthMultiplier": 1.0,
  "MobDamageMultiplier": 1.0,
  "Coop_StatsCorrectionModifier": 2.0,
  "Coop_ShipStatsCorrectionModifier": 2.0
}
```

## 编辑数值的最佳实践

### 使用有效范围

每个 `float` 参数仅支持特定范围，保持在文档范围内可避免意外行为。

| 参数 | 最小值 | 最大值 |
| --- | --- | --- |
| `MobHealthMultiplier` | `0.2` | `5.0` |
| `MobDamageMultiplier` | `0.2` | `5.0` |
| `ShipHealthMultiplier` | `0.4` | `5.0` |
| `ShipDamageMultiplier` | `0.2` | `2.5` |
| `BoardingDifficultyMultiplier` | `0.2` | `5.0` |
| `Coop_StatsCorrectionModifier` | `0.0` | `2.0` |
| `Coop_ShipStatsCorrectionModifier` | `0.0` | `2.0` |

:::caution 无效数值警告
使用不支持的数值、格式错误或将参数放错区块，游戏可能忽略设置或无法正确应用。
:::

### 保持 JSON 格式正确

编辑 `WorldDescription.json` 时，请确保：

- 所有键名使用双引号
- 逗号位置正确
- 大括号 `{}` 和中括号 `[]` 正确闭合
- 布尔值 `true` 和 `false` 使用小写
- 小数点使用英文句点，如 `1.5`

格式错误的 JSON 文件可能导致世界配置加载失败。

### 保存后重启

编辑完成后：

1. 保存 `WorldDescription.json`
2. 重新启动服务器
3. 进入服务器测试游戏内效果

部分数值在战斗、登船或合作模式中更容易验证，而非登录时立即可见。

## 在游戏服务器管理中管理配置

你可以直接在 ZAP-Hosting 游戏服务器管理面板中通过配置和文件选项管理 Windrose 配置文件。如果不想使用外部工具，推荐使用此方法编辑 `WorldDescription.json`。

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

如果没有直接列出对应配置项，请使用 **文件管理器** 手动导航到本指南前面提到的世界文件路径。

:::info 配置管理说明
根据当前游戏服务器界面和你的世界设置，文件列表可能有所不同。如果找不到特定配置项，请直接使用文件路径，不要误以为功能缺失。
:::

## 故障排除

### 修改未生效

如果重启后修改未生效，请检查：

- 是否编辑了正确的 `WorldDescription.json`
- 编辑前服务器是否已停止
- JSON 语法是否有效
- 每个参数是否放在正确区块：`float`、`bool` 或 `tag`
- 保存后服务器是否完全重启

### 难度感觉无变化

部分修改器效果比其他更明显，例如：

- `MobHealthMultiplier` 在普通战斗中最容易察觉
- `ShipHealthMultiplier` 仅在海战时明显
- `Coop_StatsCorrectionModifier` 多人时最明显
- `EasyExplore` 只影响探索行为和地图标记

### 预设切换为自定义

手动设置自定义数值后，游戏会在下一次启动时自动将世界预设类型切换为 `Custom`，这是正常行为。

## 结论

恭喜你，已成功配置 Windrose 世界修改器。如有更多问题或需要帮助，欢迎随时联系我们的支持团队，我们每天都在线为你服务！🙂