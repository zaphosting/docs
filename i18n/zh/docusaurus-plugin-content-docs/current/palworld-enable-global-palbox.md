---
id: palworld-enable-global-palbox
title: "Palworld：启用全球 Palbox"
description: "了解如何在您的专用服务器上启用 Palworld 全球 Palbox 服务器设置，实现全球 Palbox 的导入和导出。-> 立即了解更多"
sidebar_label: Palworld：启用全球 Palbox
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

*全球 Palbox* 是 Palworld 中允许玩家通过 Palworld 的全球云端 Pal 存储系统在服务器间传输 Pals 的功能。本文将指导您如何通过手动编辑正确的配置文件，在您的 ZAP-Hosting Palworld 服务器上启用全球 Palbox 的导入和导出。



## 准备工作

开始之前，请确保：

- 您可以访问 ZAP-Hosting 网站中的 Palworld 游戏服务器
- 您的服务器当前处于停止状态，或可以在修改后重启
- 您能进入游戏服务器管理中的 `Configs` 配置部分

:::info 配置文件访问说明
对于 ZAP-Hosting 的 Palworld 服务器，相关设置可通过游戏服务器管理中的 `Configs` 直接编辑。如果配置编辑器可用，您无需外部文件访问权限。
:::

## 打开 Palworld 配置文件

要启用全球 Palbox 功能，您需要编辑 `PalWorldSettings.ini` 文件。

### 在 ZAP 面板中找到配置文件

1. 登录 [ZAP-Hosting 网站](https://zap-hosting.com)。
2. 打开您的 Palworld 游戏服务器管理界面。
3. 进入 `Configs` 配置部分。
4. 打开名为 `PalWorldSettings.ini` 的文件。

该文件包含 Palworld 使用的主要服务器设置，包括全球 Palbox 选项。

:::note 需手动配置
全球 Palbox 设置需通过服务器配置文件手动配置。如果界面中没有单独的开关，直接编辑 `PalWorldSettings.ini` 是正确的操作方式。
:::

## 启用全球 Palbox 导入和导出

打开 `PalWorldSettings.ini` 后，找到服务器选项列表，调整全球 Palbox 相关条目。

### 必需的配置键

以下设置控制全球 Palbox 的行为：

| 配置键 | 值 | 功能 |
| --- | --- | --- |
| `bAllowGlobalPalboxImport` | `True` 或 `False` | 允许玩家从全球 Palbox 导入 Pals |
| `bAllowGlobalPalboxExport` | `True` 或 `False` | 允许玩家向全球 Palbox 导出 Pals |

根据现有第三方参考资料，`bAllowGlobalPalboxImport` 默认关闭（`False`），`bAllowGlobalPalboxExport` 默认开启（`True`）。如果文件中已有这些值，只需根据需要调整即可。

### 设置值

要完全启用服务器间的全球 Palbox 传输，请将两个值都设置为 `True`。

```ini
bAllowGlobalPalboxImport=True
bAllowGlobalPalboxExport=True
```

如果文件中已有这些选项，请替换现有值；如果没有，请将它们添加到 `PalWorldSettings.ini` 的服务器设置部分。

:::caution 保持现有语法完整
Palworld 配置文件对格式敏感。仅修改必要的值，避免删除逗号、括号或其他现有条目，尤其当这些选项属于更大设置行时。
:::

## 保存更改

编辑完成后：

1. 在 `PalWorldSettings.ini` 编辑器中保存更改。
2. 确认两个全球 Palbox 选项均存在且设置正确。

如果服务器面板只有保存按钮，请先保存，再进行下一步重启服务器。

## 重启服务器

修改全球 Palbox 设置后，需重启 Palworld 服务器以加载新配置。

### 应用新设置

保存文件后，从游戏服务器管理界面重启服务器。

| 操作 | 是否必需 |
| --- | --- |
| 保存 `PalWorldSettings.ini` | 是 |
| 重启服务器 | 是 |
| 运行额外控制台命令 | 否 |

编辑配置文件后无需额外命令，正常重启服务器即可应用新的全球 Palbox 服务器设置。

:::tip 游戏内验证功能
重启后，加入服务器测试玩家是否能通过全球 Palbox 导入和导出 Pals。这是确认设置成功应用的最简单方法。
:::

## 故障排除

如果重启后全球 Palbox 功能仍不可用，请检查以下内容。

### 确认值是否正确保存

再次打开 `PalWorldSettings.ini`，确认以下值仍存在：

```ini
bAllowGlobalPalboxImport=True
bAllowGlobalPalboxExport=True
```

如果值被还原，说明文件未正确保存。

### 检查格式问题

如果您将值插入现有设置块，确保周围语法仍然有效。`PalWorldSettings.ini` 格式错误可能导致 Palworld 忽略设置或加载失败。

### 再次重启服务器

如果您在服务器运行时保存了文件，请再次完全重启服务器，确保新配置生效。

:::danger 功能可用性依赖游戏版本
全球 Palbox 是 Palworld 自身提供的游戏功能。如果配置正确但功能无效，可能与当前 Palworld 服务器版本或游戏端临时限制有关。请确认服务器已更新至最新版本。
:::

## 结论

恭喜，您已成功在 Palworld 服务器上启用全球 Palbox 的导入和导出功能。如有更多问题或需要帮助，请随时联系我们的支持团队，我们每天都在线为您服务！🙂