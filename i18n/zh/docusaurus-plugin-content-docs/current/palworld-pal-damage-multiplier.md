---
id: palworld-pal-damage-multiplier
title: "Palworld：Pal伤害倍率"
description: "了解如何通过编辑服务器上的Pal伤害设置来更改Palworld中Pal的伤害倍率。-> 立即了解更多"
sidebar_label: "Pal伤害倍率"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Palworld允许你通过更改服务器的伤害倍率设置来调整你的Pals造成和承受的伤害。在本指南中，你将学习在ZAP-Hosting界面中编辑哪个配置文件，修改哪些数值，以及如何正确应用新的设置。



## 准备工作

开始之前，请确保你可以通过ZAP-Hosting游戏服务器管理面板访问你的Palworld游戏服务器。

:::info 需要手动配置
此设置需通过手动编辑Palworld配置文件完成。此更改不需要任何额外的游戏内命令。
:::

## 打开正确的配置文件

要更改Pal伤害倍率，你需要编辑`PalWorldSettings.ini`文件。

在ZAP-Hosting游戏服务器管理中，打开`Configs`部分，找到`PalWorldSettings.ini`文件。该文件包含你的Palworld服务器的主要世界和游戏玩法配置数值。

:::note 配置文件位置
本指南相关的文件是`PalWorldSettings.ini`，可通过游戏服务器管理中的`Configs`访问。
:::

## 编辑Pal伤害倍率数值

在`PalWorldSettings.ini`中，找到`OptionSettings`部分。Pal伤害倍率设置作为配置键存储在该部分内。

你需要调整以下条目：

| 配置键 | 默认值 | 作用 |
| --- | --- | --- |
| `PalDamageRateAttack` | `1.000000` | 控制你的Pals造成的伤害量 |
| `PalDamageRateDefense` | `1.000000` | 控制你的Pals承受的伤害量 |

### 示例配置

如果这些键已存在，修改它们的值为你想要的倍率。如果缺失，则在`OptionSettings`条目内添加它们。

```ini
PalDamageRateAttack=1.500000
PalDamageRateDefense=0.800000
```

### 数值含义

选择倍率数值时，请参考以下行为：

| 数值变化 | 效果 |
| --- | --- |
| 提高`PalDamageRateAttack` | 你的Pals造成更多伤害 |
| 降低`PalDamageRateAttack` | 你的Pals造成更少伤害 |
| 提高`PalDamageRateDefense` | 你的Pals防御效果降低，实际上根据倍率增加承受伤害 |
| 降低`PalDamageRateDefense` | 你的Pals承受更多伤害 |

:::caution 请仔细检查倍率数值
Palworld服务器设置使用数字倍率值。请输入有效的小数，如`0.500000`、`1.000000`或`2.000000`。格式错误可能导致服务器无法正确加载配置。
:::

## 保存更改

编辑完`PalWorldSettings.ini`中的数值后，在ZAP-Hosting配置编辑器中保存文件。

如果你是在调整PvE或合作玩法的平衡，建议先一次只修改一个倍率，这样更容易测试伤害输出或承受的变化。

:::tip 从小幅调整开始
将`PalDamageRateAttack`设置为`1.200000`这样的小幅提升，通常比直接跳到`3.000000`更容易平衡。
:::

## 重启服务器

保存更新后的配置后，重启你的Palworld服务器，使新的伤害倍率设置生效。

编辑文件后无需额外的控制台命令，完全重启服务器即可应用更改。

| 操作 | 是否需要 |
| --- | --- |
| 保存`PalWorldSettings.ini` | 是 |
| 运行额外命令 | 否 |
| 重启服务器 | 是 |

## 验证新的伤害设置

服务器重启后，加入你的Palworld服务器并测试Pals的战斗表现。检查：

- 你的Pals造成的伤害是否符合预期
- 你的Pals承受的伤害是否符合预期
- 游戏平衡是否仍适合你的服务器设置

如果效果过强或过弱，返回`PalWorldSettings.ini`，再次调整倍率数值，保存文件，然后再次重启服务器。

## 结论

恭喜你，已成功更改Palworld服务器上的Pal伤害倍率。如有更多问题或需要帮助，请随时联系我们的支持团队，我们每天都为你提供帮助！ 🙂