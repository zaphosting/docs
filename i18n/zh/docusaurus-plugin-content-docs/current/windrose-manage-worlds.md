---
id: windrose-manage-worlds
title: "Windrose：管理世界"
description: "了解如何管理多个 Windrose 世界，切换世界存档，并在专用服务器上使用正确的世界结构配置您的世界设置。-> 立即了解更多"
sidebar_label: 管理世界
services:
 - gameserver-windrose
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Windrose 支持在单个专用服务器上运行多个世界，每个世界使用自己的存档数据和 `WorldDescription.json` 配置。在本指南中，您将学习如何创建新世界、切换现有世界、备份以及安全地清除世界数据。

## 准备工作

开始之前，请确保您可以通过 ZAP-Hosting 网页界面访问您的 Windrose 游戏服务器，并且在进行存档或配置更改时服务器处于关闭状态。

:::info 必要访问权限
您需要访问 ZAP-Hosting 游戏服务器管理，包括 **文件管理器**、**配置** 和 **备份** 区域，以安全管理您的 Windrose 世界。
:::

:::caution 请先停止服务器
在编辑 `ServerDescription.json`、修改 `WorldDescription.json`、创建世界文件夹或删除存档数据之前，务必先停止服务器。这有助于防止存档损坏和世界写入不完整。
:::

## 了解 Windrose 世界结构

Windrose 将所有世界数据存储在存档配置文件目录中。第一个世界会在您首次启动服务器时自动创建。

相关结构如下：

```text
R5/Saved/SaveProfiles/Default
ServerDescription.json
RocksDB
<game_version>
Worlds
World_1_ID
WorldDescription.json
World_2_ID
```

实际中，世界文件夹位于：

```text
R5/Saved/SaveProfiles/Default/RocksDB/[your_game_version]/Worlds/
```

每个世界文件夹以其唯一的 `IslandId` 命名。服务器内部使用此 ID 来识别应加载哪个世界。

| 文件或文件夹 | 作用 |
| --- | --- |
| `ServerDescription.json` | 定义当前激活的服务器配置，包括当前加载的世界 |
| `RocksDB/[your_game_version]/Worlds/` | 存储所有可用的世界存档文件夹 |
| `[your_world_id]/WorldDescription.json` | 存储特定世界的配置 |
| `WorldIslandId` | `ServerDescription.json` 中的值，告诉服务器加载哪个世界 |

:::danger 请勿重命名世界文件夹
切勿手动重命名世界文件夹。Windrose 使用文件夹名称作为 RocksDB 数据库中的内部 `IslandId`。重命名文件夹可能导致世界损坏或变成孤立且无法使用。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## 查找当前激活的世界

在切换或创建世界之前，了解当前激活的是哪个世界非常有帮助。

### 检查服务器配置

打开游戏服务器管理中的 **配置** 部分，找到 `ServerDescription.json`。如果该配置未列出，请使用 **文件管理器** 从文件列表根目录打开 `ServerDescription.json`。

查找以下字段：

```json
"WorldIslandId": "[your_world_id]"
```

该值定义服务器启动时将加载的世界。

### 检查世界 ID

要识别特定存档世界，请打开该世界文件夹内的 `WorldDescription.json` 文件，查找 `IslandId` 值。

示例：

```json
{
  "Version": 1,
  "WorldDescription": {
    "IslandId": "World_Example_ID",
    "WorldName": "My World",
    "WorldPresetType": "Medium",
    "WorldSettings": {}
  }
}
```

此文件中的 `IslandId` 必须与文件夹名称完全匹配。

## 切换世界

如果服务器上已有多个世界存档，您可以通过更改激活的 `WorldIslandId` 来切换它们。

### 更新目标世界

首先，从 ZAP-Hosting 网页界面停止服务器。

然后，在 **配置** 区域或通过 **文件管理器** 打开服务器文件根目录下的 `ServerDescription.json`。

找到此字段：

```json
"WorldIslandId": "PASTE_TARGET_WORLD_ID_HERE"
```

将其值替换为您想加载的世界的 `IslandId`。您可以通过打开目标世界的 `WorldDescription.json` 找到该 ID。

### 保存并重启服务器

保存文件后重新启动服务器。Windrose 现在将加载所选世界。

:::tip 仔细核对世界 ID
如果 `WorldIslandId` 与现有世界文件夹及其 `IslandId` 不完全匹配，服务器可能无法加载预期世界，或者会生成一个新世界。
:::

## 创建新世界

如果您想在一台服务器上托管多个世界游戏会话，可以手动创建一个新世界。

### 创建世界文件夹

先停止服务器。

打开 **文件管理器**，导航到：

```text
R5/Saved/SaveProfiles/Default/RocksDB/[your_game_version]/Worlds/
```

创建一个唯一名称的新文件夹。该文件夹名称将成为新世界的 `IslandId`。

例如：

```text
R5/Saved/SaveProfiles/Default/RocksDB/[your_game_version]/Worlds/MySecondWorld
```

### 创建世界描述文件

在新文件夹内创建名为 `WorldDescription.json` 的文件，并粘贴以下模板：

```json
{
  "Version": 1,
  "WorldDescription": {
    "IslandId": "YOUR_NEW_WORLD_ID",
    "WorldName": "My Second World",
    "WorldPresetType": "Medium",
    "WorldSettings": {}
  }
}
```

将 `YOUR_NEW_WORLD_ID` 替换为您选择的世界 ID。

:::caution ID 必须匹配
`WorldDescription.json` 中的 `IslandId` 必须与文件夹名称完全一致。即使是大小写差异或多余空格也会导致世界无法正确加载。
:::

### 设置新世界为激活状态

现在打开 `ServerDescription.json`，更新 `WorldIslandId` 值，使其指向您的新世界 ID。

示例：

```json
"WorldIslandId": "MySecondWorld"
```

保存文件并启动服务器。Windrose 会在启动时生成一个全新的世界。

## 备份世界

在切换世界、清除数据或测试新设置之前，建议先备份您的世界存档。

### 使用 ZAP-Hosting 备份功能

先停止服务器。

在面板侧边栏打开 **备份**，创建一个新备份。如果您想以后恢复完整服务器状态，这是最安全的选项。

### 手动下载世界文件

如果您只想直接复制存档数据，打开 **文件管理器**，使用压缩或下载选项下载整个 `RocksDB/` 文件夹。

相关路径：

```text
R5/Saved/SaveProfiles/Default/RocksDB/
```

| 备份方式 | 推荐用途 |
| --- | --- |
| 面板备份 | 适合完整服务器恢复 |
| 手动下载 `RocksDB/` | 适合直接存档归档 |
| 两者结合 | 适合重要世界或清除前备份 |

:::note 备份建议
如果您管理多个世界，保留面板备份和手动下载的 `RocksDB/` 副本，可以在以后恢复特定世界时提供最大灵活性。
:::

## 清除世界

如果您想完全重置一个世界，可以删除其存档文件夹，让服务器重新生成一个新世界。

### 删除世界存档

停止服务器。

打开 **文件管理器**，导航到：

```text
R5/Saved/SaveProfiles/Default/RocksDB/[your_game_version]/Worlds/
```

删除您想清除的世界文件夹。

### 重新生成世界

确保 `ServerDescription.json` 中的 `WorldIslandId` 仍指向已删除的世界 ID。

再次启动服务器时，Windrose 会检测到目标世界文件夹不存在，并为该 ID 生成一个全新世界。

:::danger 删除前请确认文件夹正确
删除错误的世界文件夹会永久丢失该世界的存档数据，除非您有备份。请务必仔细核对文件夹名称和 `IslandId` 后再操作。
:::

## 管理世界设置

每个世界都有自己的 `WorldDescription.json`，这意味着您可以在同一服务器上为不同世界维护独立的设置。

### 世界配置示例

```json
{
  "Version": 1,
  "WorldDescription": {
    "IslandId": "MySecondWorld",
    "WorldName": "My Second World",
    "WorldPresetType": "Medium",
    "WorldSettings": {}
  }
}
```

### 重要字段说明

| 键 | 说明 |
| --- | --- |
| `Version` | 文件使用的配置版本 |
| `IslandId` | 内部世界 ID，必须与文件夹名称匹配 |
| `WorldName` | 世界显示名称 |
| `WorldPresetType` | 世界生成预设类型 |
| `WorldSettings` | 额外的世界特定设置（如果支持） |

:::info 面板中的配置管理
Windrose 配置文件可在游戏服务器管理的 **配置** 中管理。如果文件未显示在此处，请使用 **文件管理器** 直接编辑。
:::

## 多世界管理最佳实践

在一台服务器上管理多个世界适合测试、活动或不同玩家组。为保持有序，建议遵循以下做法：

- 使用清晰且唯一的世界 ID，如 `[your_pvp_world]` 或 `[your_build_world]`
- 保持文件夹名称与 `IslandId` 完全一致
- 切换或清除世界前先备份
- 避免服务器运行时更改文件
- 记录每个 `WorldIslandId` 对应的世界名称

这样可以避免混淆，尤其是长期维护多个世界时。

## 结论

恭喜，您已成功管理了服务器上的 Windrose 世界。如有更多问题或需要帮助，请随时联系我们的支持团队，我们每天都为您服务！🙂