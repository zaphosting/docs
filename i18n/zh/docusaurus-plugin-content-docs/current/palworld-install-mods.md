---
id: palworld-install-mods
title: "Palworld：安装 Mod"
description: "了解如何在您的专用服务器上安装 Palworld Mod，包括 UE4SS Palworld、Lua Mod 和 .pak Mod。-> 立即了解更多"
sidebar_label: Palworld：安装 Mod
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Palworld 支持多种服务器 Mod 类型，最常见的是 `UE4SS`、`.lua` 和 `.pak` Mod。通过本指南，您将学习如何准备服务器、识别正确的 Mod 类型、上传所需文件，并重启服务器以确保 Mod 正确加载。



## 准备工作

在安装任何 Mod 之前，您需要确保服务器与所选 Mod 兼容。

:::danger 先备份您的世界存档
安装 Mod 前，务必先备份您的 Palworld 存档数据。如果 Mod 不兼容或导致启动问题，您可能需要恢复之前的世界状态。
:::

请先确认以下内容：

| 要求 | 详情 |
| --- | --- |
| 服务器版本 | 专用 Palworld 服务器使用 **Steam** 版本。仅适用于 **Game Pass** 版本的 Mod 不应使用。 |
| Mod 兼容性 | 确认 Mod 作者明确说明该 Mod 支持专用服务器。 |
| Mod 类型 | 检查 Mod 是 `UE4SS`、`.lua` 还是 `.pak` 类型。 |
| 客户端需求 | 部分 Mod 需要同时安装在 **服务器** 和所有 **玩家客户端** 上。 |
| 服务器版本 | 安装 Mod 前，请检查当前服务器版本。 |

### 检查服务器版本

要确认当前 Palworld 服务器版本，请在 ZAP-Hosting 游戏服务器管理后台打开服务器控制台并运行：

```text
info
```

这会显示版本信息，您可以将其与 Mod 要求进行对比。

:::tip 一次只安装一个 Mod
建议一次只安装一个 Mod 并进行测试，再安装下一个。这样如果服务器启动失败或 Mod 无法正常工作，排查问题会更简单。
:::

## 了解您要安装的 Mod 类型

Palworld 的 Mod 安装方式不尽相同。您需要先确认 Mod 类型，再上传对应文件。

| Mod 类型 | 典型内容 | 常见安装路径 | 备注 |
| --- | --- | --- | --- |
| `UE4SS` / `.lua` Mod | 包含如 `main.lua` 的脚本文件夹 | `Pal/Binaries/Win64/ue4ss/Mods/` | 通常需要 `UE4SS` 框架支持 |
| `.pak` Mod | 一个或多个 `.pak` 文件，有时附带额外文件 | `Pal/Content/Paks/~mods/` | 部分 Mod 可能使用 `Pal/Content/Paks/LogicMods/` |
| 客户端 Mod | 内容多样 | 不一定可安装在服务器 | 仅当 Mod 作者确认支持服务器时使用 |

:::caution 遵循 Mod 作者指定路径
本指南中的路径是目前 Palworld Mod 最常用的位置，但部分 Mod 可能需要不同的文件夹结构。请始终遵循 Mod 作者提供的安装说明。
:::

## 在 ZAP 面板中访问服务器文件

您需要使用 ZAP-Hosting 游戏服务器管理后台的文件管理功能。

### 打开配置文件区域

相关配置文件可在游戏服务器管理后台的 **Configs** 区域访问。这里方便您查看和编辑 Palworld 服务器的配置文件。

:::note 配置文件与 Mod 文件区别
Palworld Mod 安装通常不仅仅是修改单个配置文件中的游戏设置。大多数情况下，您需要将 Mod 文件上传到正确的服务器目录，有些 Mod 还可能需要在 **Configs** 中修改配置文件。
:::

### 打开文件管理器

要上传 `.pak` 文件或 `UE4SS` 脚本文件夹等 Mod 文件，您还需要通过 ZAP 面板的文件管理器访问服务器文件。

如果 Mod 自带配置文件，请按 Mod 作者提供的原样上传，只有在作者文档中明确支持的情况下才修改配置。

## 如需，安装 UE4SS 框架

`UE4SS` 是许多 Palworld Lua 和脚本 Mod 使用的框架。只有当您选择的 Mod 依赖它时才需要安装。

### 确认服务器使用 Windows 系统

Palworld 的 `UE4SS` 通常用于 Windows 服务器版本。如果您的服务器不是 Windows 环境，基于 `UE4SS` 的 Mod 可能无法正常工作。

:::info UE4SS 框架需求
如果您选择的 Mod 是 `UE4SS` 或 `.lua` 类型，上传 Mod 前应确认框架已安装。
:::

### 检查 UE4SS 安装路径

如果已安装 `UE4SS`，相关目录通常是：

```text
Pal/Binaries/Win64/ue4ss/
```

大多数 `UE4SS` 和 Lua Mod 使用的 Mod 文件夹是：

```text
Pal/Binaries/Win64/ue4ss/Mods/
```

如果您的 ZAP-Hosting 产品在服务器管理后台提供内置 Mod 或 `UE4SS` 选项，可以使用该功能。若界面中未显示此选项，请勿假设您的产品或服务器类型支持。

## 上传并安装 Lua 或 UE4SS Mod

Lua 和其他基于 `UE4SS` 的 Palworld Mod 通常以文件夹形式分发，而非单个 `.pak` 文件。

### 在本地设备解压 Mod

从 Mod 作者的官方发布页下载 Mod 压缩包，先在电脑上解压。除非作者明确说明，否则不要直接上传 `.zip` 或 `.rar` 文件。

### 上传 Mod 文件夹到正确路径

大多数 Lua 或 `UE4SS` Mod 需将解压后的 Mod 文件夹上传至：

```text
Pal/Binaries/Win64/ue4ss/Mods/
```

典型的 Lua Mod 结构示例：

```text
Pal/Binaries/Win64/ue4ss/Mods/UploadedMod/scripts/main.lua
```

将 `UploadedMod` 替换为 Mod 作者提供的实际文件夹名。

### 示例结构

| 项目 | 示例路径 |
| --- | --- |
| Mod 文件夹 | `Pal/Binaries/Win64/ue4ss/Mods/UploadedMod/` |
| 脚本文件 | `Pal/Binaries/Win64/ue4ss/Mods/UploadedMod/scripts/main.lua` |

:::caution 不要随意重命名文件
除非 Mod 作者明确要求，否则不要更改 Mod 文件夹名、脚本文件名或内部目录结构。许多 `UE4SS` Mod 依赖原始结构才能正确加载。
:::

## 上传并安装 .pak Mod

`.pak` Mod 的安装方式与 Lua 或 `UE4SS` 脚本 Mod 不同。

### 上传 `.pak` 文件

大多数 Palworld `.pak` Mod 需上传至：

```text
Pal/Content/Paks/~mods/
```

示例：

```text
Pal/Content/Paks/~mods/UploadedMod.pak
```

部分 Mod 可能要求上传至：

```text
Pal/Content/Paks/LogicMods/
```

### 如果包含额外文件，请一并上传

部分 `.pak` Mod 包含多个文件，如元数据或辅助文件。若 Mod 压缩包中有多个必需文件，请按 Mod 作者说明全部上传。

| 常见 `.pak` 路径 | 使用场景 |
| --- | --- |
| `Pal/Content/Paks/~mods/` | 大多数通用 `.pak` Mod 的常用位置 |
| `Pal/Content/Paks/LogicMods/` | 部分 Mod 根据作者指示使用 |

## 如 Mod 需要，编辑配置文件

部分 Palworld Mod 自带配置文件，上传后需编辑。配置文件名称和内容因 Mod 而异。

### 配置文件可能位置

上传后，配置文件可能位于：

| Mod 类型 | 可能的配置文件位置 |
| --- | --- |
| `UE4SS` / `.lua` Mod | 在 Mod 文件夹内，路径如 `Pal/Binaries/Win64/ue4ss/Mods/[your_mod_name]/` |
| `.pak` Mod | 有时不包含可编辑配置，需查看 Mod 文档 |
| 服务器配置集成 | 某些情况下，可通过 ZAP 服务器管理后台的 **Configs** 额外设置 |

### 需要修改的内容

仅修改 Mod 作者明确说明的配置项。常见示例包括：

- 启用或禁用 Mod 功能
- 设置倍率或限制
- 定义仅管理员可用的行为
- 修改 Mod 使用的键名或内部选项

由于 Palworld Mod 没有统一的配置格式，没有通用的配置项适用于所有 Mod。

:::info 没有通用的 Palworld Mod 配置项
目前没有单一的 Palworld 服务器配置文件或内置配置区能全局启用所有 Mod。实际安装通常是将正确文件放入正确目录，必要时编辑 Mod 自带的配置文件。
:::

## 重启服务器并测试 Mod

上传 Mod 文件并完成必要配置后，您需要重启 Palworld 服务器。

### 重启服务器

在 ZAP-Hosting 游戏服务器管理后台使用重启功能，完全重启服务器。

此步骤必需，因为 Palworld 通常只有在服务器重启时才加载新上传的服务器 Mod。

### 测试功能

重启后：

1. 加入服务器。
2. 在游戏内测试 Mod 功能。
3. 如果 Mod 无效，查看服务器控制台是否有错误。
4. 如果服务器启动失败或表现异常，删除新添加的 Mod 文件。

:::tip 失败 Mod 的排查方法
如果 Mod 出现问题，先删除最近安装的 Mod 文件，再重启服务器。这是最快确认问题 Mod 的方法。
:::

## 快速参考

| 任务 | 操作 |
| --- | --- |
| 检查服务器版本 | 在服务器控制台运行 `info` |
| UE4SS 基础路径 | `Pal/Binaries/Win64/ue4ss/` |
| UE4SS/Lua Mod 路径 | `Pal/Binaries/Win64/ue4ss/Mods/` |
| 常见 Lua 脚本文件 | `scripts/main.lua` |
| 常见 `.pak` Mod 路径 | `Pal/Content/Paks/~mods/` |
| 备用 `.pak` 路径 | `Pal/Content/Paks/LogicMods/` |
| 配置文件访问 | 在 ZAP 游戏服务器管理后台打开 **Configs** |
| 最后步骤 | 重启服务器 |

## 结论

恭喜，您已成功在 Palworld 服务器上安装 Mod。如有更多问题或需要帮助，请随时联系我们的支持团队，我们每天都在线为您服务！🙂