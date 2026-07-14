---
id: palworld-spectate-mode
title: "Palworld：观战模式"
description: "了解如何在 Palworld 中使用观战模式，设置所需的管理员密码，并在您的服务器上进入观战模式。-> 立即了解更多"
sidebar_label: Palworld：观战模式
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Palworld 的观战模式允许您在服务器上观察玩家，而无需主动参与。通过本指南，您将学习如何准备管理员权限，在哪里查看 ZAP-Hosting 界面中的必要配置，以及如何在游戏中进入和退出观战模式。

## 准备工作

在使用观战模式之前，您需要在 Palworld 服务器上拥有管理员权限。这需要在服务器配置中设置有效的 `AdminPassword`。

如果您尚未配置，请先查看您的 Palworld 服务器设置和管理员配置。

:::info 需要管理员权限
观战模式仅对管理员开放。如果您未先以管理员身份登录，观战命令将无法使用。
:::

## 检查所需的服务器配置

虽然观战模式本身不需要专门启用的设置，但您的服务器必须配置管理员密码，以便您能够以管理员身份进行身份验证。

### 在 ZAP 界面中打开配置文件

在您的 ZAP-Hosting 游戏服务器网页界面中，打开 **Configs** 部分。相关的 Palworld 配置存储在文件：

`PalWorldSettings.ini`

根据服务器模板和游戏版本，此文件包含主要服务器选项，包括管理员密码条目。

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

### 验证管理员密码条目

在 `PalWorldSettings.ini` 中，查找 `OptionSettings` 部分，确认 `AdminPassword` 的值已设置。

典型示例如下：

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(AdminPassword="[your_admin_password]")
```

如果您的文件中 `OptionSettings=(...)` 行包含多个选项，只需确保存在 `AdminPassword` 条目且包含您选择的密码即可。

:::caution 保留现有语法
请勿删除 `OptionSettings` 行中的其他现有值。Palworld 通常将多个设置存储在同一条目中，因此您应谨慎添加或编辑 `AdminPassword` 值。
:::

### 配置参考

| 文件 | ZAP 界面位置 | 必需键 | 作用 |
| --- | --- | --- | --- |
| `PalWorldSettings.ini` | `Configs` | `AdminPassword` | 允许您以管理员身份验证并使用观战模式 |

## 保存更改并重启服务器

如果您更改了 `PalWorldSettings.ini` 中的 `AdminPassword`，请保存文件并通过 ZAP-Hosting 网页界面重启您的 Palworld 服务器。

重启是必须的，以便服务器加载更新后的配置。

:::note 重启要求
如果您未对配置文件进行任何更改，且管理员密码已正确设置，则观战模式本身无需额外重启。
:::

## 以管理员身份登录

服务器上线后，像往常一样连接到您的 Palworld 服务器。要使用观战模式，必须使用之前配置的管理员密码进行身份验证。

具体的管理员登录命令可能因当前 Palworld 版本和界面行为而异。如果您的服务器在加入后需要手动管理员身份验证，请在游戏内使用适合您服务器版本的管理员命令或登录提示输入配置的管理员密码。

:::info 关于管理员身份验证
当前第三方资料一致确认观战模式需要管理员权限，且必须配置 `AdminPassword`。不过，如果您当前服务器版本使用特定的管理员登录命令，请遵循您安装的 Palworld 版本支持的命令格式。
:::

## 进入观战模式

以管理员身份连接后，您可以通过以下方式之一启用观战模式。

### 使用快捷键

按下 `\` 键进入观战模式。

### 使用命令

或者，使用以下游戏内命令：

```text
/togglespectate
```

此命令可切换当前角色会话的观战模式开关，前提是您已通过管理员身份验证。

### 观战模式命令参考

| 操作 | 方法 | 要求 |
| --- | --- | --- |
| 进入观战模式 | 按 `\` | 管理员权限 |
| 切换观战模式 | `/togglespectate` | 管理员权限 |
| 退出观战模式 | 按 `Esc` | 处于观战模式 |

:::tip 何时使用观战模式
观战模式适合您想监控玩家、调查举报或观察服务器活动而不干扰游戏时使用。
:::

## 退出观战模式

要退出观战模式并返回正常游戏，按下 `Esc`。

如果需要，您也可以再次使用 `/togglespectate` 命令切换关闭观战模式，具体取决于您当前服务器的行为。

## 故障排除

如果观战模式无法正常工作，请检查以下几点。

### 确认管理员密码已设置

再次通过 **Configs** 打开 `PalWorldSettings.ini`，确保存在且不为空的 `AdminPassword`。

### 修改配置后重启

如果您最近编辑了配置文件，请先重启服务器再进行测试。

### 确保已通过管理员身份验证

仅配置 `AdminPassword` 并不总是足够。您还需要在会话中被服务器识别为活跃管理员。

### 验证按键输入

某些键盘布局中，`\` 键位置可能不同。如果快捷键无响应，请改用 `/togglespectate` 命令。

:::caution 版本差异
Palworld 仍在不断更新游戏玩法和服务器功能。如果您的服务器中观战模式或管理员行为有所不同，请确认服务器已更新，并检查当前游戏版本是否更改了相关命令或权限。
:::

## 结论

恭喜，您已成功在 Palworld 服务器上使用观战模式。如有更多问题或需要帮助，请随时联系我们的支持团队，我们每天都为您服务！🙂