---
id: palworld-upload-existing-save
title: "Palworld：上传已有存档"
description: "了解如何上传已有的 Palworld 存档，正确上传文件数据，并配置服务器以加载正确的世界文件夹。-> 立即了解更多"
sidebar_label: "上传已有存档"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Palworld 将专用服务器的世界数据存储在特定的存档文件夹中，并需要匹配的配置项才能正确加载。在本指南中，你将学习如何将已有存档上传到你的 ZAP-Hosting Palworld 服务器，并配置服务器以使用正确的世界数据启动。

:::danger 不支持的存档来源
你无法直接将 Xbox 主机或 PS5 云存档转移到专用 Palworld 服务器。此方法仅支持来自 PC 安装或已有专用服务器的存档迁移。
:::



## 准备工作

开始之前，请确保你具备以下条件：

| 需求 | 详情 |
| --- | --- |
| 已有 Palworld 存档 | 来自 PC 安装或其他专用服务器的存档文件夹 |
| 访问你的 ZAP-Hosting 游戏服务器 | 需要访问网页面板，包括文件管理器和 `Configs` 配置部分 |
| 服务器已停止 | 替换存档数据前，Palworld 服务器应处于停止状态 |
| 存档文件夹名称 | 你需要上传存档的准确文件夹名称，例如 `[your_savefolder_id]` |

:::info 配置文件访问
在 ZAP-Hosting，相关的 Palworld 配置文件可通过游戏服务器管理界面中的 `Configs` 访问。除非你想手动核实路径，否则无需通过文件管理器直接编辑文件。
:::

## 了解所需的存档结构

上传之前，了解 Palworld 实际加载的是哪个文件夹非常重要。

服务器存档位置为：

```text
Pal/Saved/SaveGames/0/[your_savefolder_id]/
```

该文件夹内通常包含如下文件和文件夹：

```text
Level.sav
LevelMeta.sav
Players/
```

在某些较旧或迁移的存档中，你可能还会看到：

```text
WorldOption.sav
```

:::caution 删除已废弃的 WorldOption.sav
如果上传的存档文件夹中存在 `WorldOption.sav`，请在启动服务器前删除它。该文件已知会导致新版 Palworld 服务器出现问题，除非确认当前配置特别需要，否则不应保留迁移的存档中。
:::

## 找到正确的配置文件

要让服务器加载你上传的世界，需要编辑 `GameUserSettings.ini`。

在 ZAP-Hosting 游戏服务器管理界面：

1. 打开你的 Palworld 服务器。
2. 进入 `Configs`。
3. 打开 `GameUserSettings.ini`。

根据服务器环境不同，文件路径通常为以下之一：

| 可能路径 | 说明 |
| --- | --- |
| `Pal/Saved/Config/LinuxServer/GameUserSettings.ini` | Linux 平台的 Palworld 服务器常见路径 |
| `Pal/Saved/Config/WindowsServer/GameUserSettings.ini` | Windows 平台部署时可能出现的路径 |

:::note 路径差异说明
Palworld 服务器安装可能根据提供商使用的平台不同，配置路径包含 `LinuxServer` 或 `WindowsServer`。如果你通过 `Configs` 编辑，正确的文件已经显示，无需担心路径细节，只需确保修改的是 `GameUserSettings.ini`。
:::

## 从其他专用服务器上传存档

如果你的存档来自其他主机商，可以直接迁移。

### 备份现有存档

在之前的主机商处，找到并下载存档文件夹，路径为：

```text
Pal/Saved/SaveGames/0/
```

复制完整的随机字母数字命名文件夹，例如：

```text
[your_savefolder_id]
```

### 停止 ZAP-Hosting 服务器

上传新存档前，请在 ZAP-Hosting 网页面板中停止你的 Palworld 服务器。

:::caution 避免存档冲突
切勿在服务器运行时替换存档文件，这可能导致上传不完整、数据被覆盖或存档损坏。
:::

### 替换默认存档文件夹

打开游戏服务器的文件管理器，导航至：

```text
Pal/Saved/SaveGames/0/
```

删除服务器自动创建的默认存档文件夹，然后将你的已有存档文件夹上传到同一位置。

上传完成后，结构应为：

```text
Pal/Saved/SaveGames/0/[your_savefolder_id]/
```

### 在 GameUserSettings.ini 中设置正确的存档文件夹

通过 `Configs` 打开 `GameUserSettings.ini`，找到 `DedicatedServerName` 条目。

将其设置为你上传的存档文件夹的准确名称：

```ini
DedicatedServerName=[your_savefolder_id]
```

| 配置项 | 必填值 |
| --- | --- |
| `DedicatedServerName` | `Pal/Saved/SaveGames/0/` 内的准确文件夹名称 |

:::tip 必须完全匹配
`DedicatedServerName` 必须与上传的文件夹名称完全一致，包括所有字母和数字。若不匹配，服务器可能启动其他世界或看似加载但无地图进度。
:::

### 启动服务器

保存配置后，重新启动你的 Palworld 服务器。

上传后通常无需额外控制台命令，完整重启服务器即可加载新存档。

## 从 Steam 联机世界上传存档

如果你之前通过 Steam 联机本地托管世界，也可以将该存档上传到专用服务器。

### 定位本地 Steam 存档

在 Windows 电脑上，按 `Windows` + `R`，打开：

```text
%LOCALAPPDATA%\Pal\Saved\SaveGames
```

进入以你的 SteamID64 命名的文件夹，找到你想上传的世界文件夹：

```text
%LOCALAPPDATA%\Pal\Saved\SaveGames\[your_steamid64]\[your_savefolder_id]
```

### 上传存档到服务器

确认正确的存档文件夹后：

1. 停止你的 Palworld 服务器。
2. 打开文件管理器。
3. 进入 `Pal/Saved/SaveGames/0/`。
4. 删除默认存档文件夹。
5. 上传你的已有存档文件夹。
6. 在 `Configs` 中打开 `GameUserSettings.ini`。
7. 设置：

```ini
DedicatedServerName=[your_savefolder_id]
```

8. 保存文件并重新启动服务器。

:::caution 主机角色限制
迁移本地 Steam 联机世界时，主机角色不会像连接玩家数据那样自动转移。实际上，如果需要保持角色连续性，原主机可能需要额外的第三方存档转换或角色转移步骤。
:::

## 从 PC Game Pass 上传存档

PC Game Pass 存档格式不同，不能直接用于专用 Palworld 服务器。

### 定位 Game Pass 存档

本地 Game Pass 存档通常存储在：

```text
%LOCALAPPDATA%\Packages\PocketpairInc.Palworld_ad4psfrxyesvt\SystemAppData\wgs\
```

### 先转换存档格式

要在专用服务器上使用 PC Game Pass 存档，需要使用第三方转换工具将其转换为 Steam 兼容格式。

常用工具之一是 [Palworld Save Tools](https://github.com/cheahjs/palworld-save-tools)。

:::danger 第三方工具免责声明
第三方存档转换工具非 ZAP-Hosting 开发或维护，其功能可能随时间变化，兼容性无法保证。使用前请务必备份原始存档。
:::

转换后，导出的存档通常放在类似以下的文件夹中：

```text
XGP_converted_saves
```

### 上传转换后的存档

转换完成后：

1. 停止服务器。
2. 打开文件管理器。
3. 进入 `Pal/Saved/SaveGames/0/`。
4. 删除默认存档文件夹。
5. 上传转换后的存档文件夹。
6. 在 `Configs` 中打开 `GameUserSettings.ini`。
7. 设置正确的文件夹名称：

```ini
DedicatedServerName=[your_savefolder_id]
```

8. 保存文件并启动服务器。

## 必要的配置更改

本流程中最重要的手动步骤是正确编辑 `GameUserSettings.ini`。

### 配置项概览

| 文件 | ZAP 面板位置 | 需修改条目 | 示例值 |
| --- | --- | --- | --- |
| `GameUserSettings.ini` | `Configs` | `DedicatedServerName` | `DedicatedServerName=84B5E2264EC387DEDB43179D666031A1` |

### 示例配置

如果你上传的存档文件夹名为 `84B5E2264EC387DEDB43179D666031A1`，配置应为：

```ini
DedicatedServerName=84B5E2264EC387DEDB43179D666031A1
```

除非当前配置模板语法已有引号，否则不要额外添加引号。

## 验证上传

服务器启动后，加入服务器并检查世界数据是否正确加载。

请确认以下内容：

| 检查项 | 预期结果 |
| --- | --- |
| 世界加载 | 现有地图和建筑物完整显示 |
| 玩家数据 | 已转移的玩家数据在适用时可用 |
| 存档文件夹匹配 | `DedicatedServerName` 与上传文件夹完全一致 |
| 已删除废弃文件 | 若曾导致问题，`WorldOption.sav` 不再存在 |

## 故障排除

如果上传未按预期工作，请检查以下常见原因。

### 服务器启动了新世界

若服务器创建了新世界而非加载上传存档，最常见原因是 `DedicatedServerName` 配置错误。

请确保：

- 上传的文件夹位于 `Pal/Saved/SaveGames/0/`
- 文件夹名称完全复制无误
- `DedicatedServerName=[your_savefolder_id]` 与文件夹名完全匹配

### 地图数据缺失

服务器启动但世界进度或地图数据缺失时，再次核对文件夹名称匹配。

此问题通常由以下不匹配引起：

- 上传的存档文件夹名
- `GameUserSettings.ini` 中的 `DedicatedServerName` 值

### 存档上传看似正确但仍失败

如果文件夹结构正确但存档仍无法加载：

- 确认存档来源受支持
- 删除存在的 `WorldOption.sav`
- 确保替换文件前服务器已完全停止
- 保存配置更改后重启服务器

:::tip 文件上传最佳实践
上传大型存档时，请等待传输完全结束后再启动服务器。过早启动可能导致存档不完整，世界无法正常加载。
:::

## 结论

恭喜，你已成功将已有 Palworld 存档上传到你的 ZAP-Hosting 服务器。如有更多问题或需要帮助，请随时联系我们的支持团队，我们每天都在线为你服务！🙂