---
id: palworld-upload-existing-save
title: "Palworld：上传已有存档"
description: "了解如何上传已有的 Palworld 存档，迁移服务器世界，并正确更新 ZAP-Hosting 游戏服务器上的配置文件。-> 立即了解更多"
sidebar_label: Palworld：上传已有存档
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Palworld 将专用服务器的世界数据存储在特定的存档文件夹中，并通过服务器配置链接该文件夹。本指南将教你如何将已有存档上传到你的 ZAP-Hosting Palworld 服务器，并更新必要的设置，使服务器加载正确的世界。

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## 准备工作

开始之前，请确保你本地设备上已有 Palworld 存档文件夹。

:::danger 不支持的存档来源
Xbox 主机和 PS5 云存档无法直接转移到 Palworld 专用服务器。你只能迁移来自 PC 安装或其他已有专用服务器的存档。
:::

:::info 必要访问权限
你需要访问 ZAP-Hosting 游戏服务器的网页管理界面，包括文件管理器和 `Configs` 配置部分。
:::

如果你需要帮助访问服务器文件，请参考 ZAP-Hosting 文档中对应产品的文件管理指南。

## 了解所需的存档结构

上传之前，请确认你的存档结构正确。

在 Palworld 专用服务器上，活动世界存档存放路径为：

```text
Pal/Saved/SaveGames/0/[your_save_folder_id]/
```

文件夹名 `[your_save_folder_id]` 通常是一串较长的字母和数字，例如：

```text
84B5E2264EC387DEDB43179D666031A1
```

有效的存档文件夹通常包含如下文件和文件夹：

| 项目 | 作用 |
| --- | --- |
| `Level.sav` | 主要世界存档数据 |
| `LevelMeta.sav` | 世界元数据 |
| `Players/` | 玩家存档数据 |
| `WorldOption.sav` | 旧版世界选项文件，可能需要删除 |

:::caution 删除已废弃的 WorldOption.sav
如果上传的存档文件夹中包含 `WorldOption.sav`，请在启动服务器前删除它。该文件已知会导致当前专用服务器环境出现问题，除非官方 Palworld 新版本特别要求，否则迁移存档时不应使用。
:::

## 在 ZAP 面板中找到配置文件

上传存档文件夹后，你必须通过编辑 Palworld 配置文件来指向该文件夹。

在 ZAP-Hosting 游戏服务器管理界面，打开 `Configs` 配置部分，找到：

```text
GameUserSettings.ini
```

根据服务器环境不同，该文件通常位于以下路径之一：

| 可能路径 | 说明 |
| --- | --- |
| `Pal/Saved/Config/LinuxServer/GameUserSettings.ini` | Linux 版 Palworld 服务器常用路径 |
| `Pal/Saved/Config/WindowsServer/GameUserSettings.ini` | Windows 版旧版或备用路径 |

:::note LinuxServer 与 WindowsServer 路径区别
Palworld 专用服务器通常使用 `LinuxServer` 配置路径。如果看不到 `WindowsServer`，请检查 `LinuxServer`。在 ZAP 面板中，最简单的方法是直接打开 `Configs` 并选择 `GameUserSettings.ini`。
:::

## 上传已有存档

上传流程取决于你当前存档的来源，但目标路径在 ZAP 服务器上是相同的。

### 先停止服务器

在替换默认世界之前，请先在 ZAP-Hosting 网页面板中停止你的 Palworld 服务器。

:::caution 防止存档损坏
切勿在服务器运行时上传或替换世界文件。先停止服务器可以避免写入不完整和存档损坏。
:::

### 删除默认存档文件夹

打开文件管理器，导航至：

```text
Pal/Saved/SaveGames/0/
```

该目录下通常会有一个默认生成的存档文件夹。请先删除该默认文件夹，再上传你的存档。

### 上传你的已有存档文件夹

将你的已有存档文件夹上传到：

```text
Pal/Saved/SaveGames/0/
```

上传完成后，目录结构应类似于：

```text
Pal/
└── Saved/
    └── SaveGames/
        └── 0/
            └── [your_save_folder_id]/
                ├── Level.sav
                ├── LevelMeta.sav
                ├── Players/
                └── WorldOption.sav
```

如果存在 `WorldOption.sav`，请上传后删除它。

:::tip 精确复制文件夹名称
下一步需要用到上传的文件夹名称。请在文件管理器中准确复制 `[your_save_folder_id]`，包括所有字母和数字。
:::

## 编辑 GameUserSettings.ini

上传存档完成后，必须更新服务器配置，让 Palworld 加载正确的世界。

打开 `Configs` 中的 `GameUserSettings.ini`，找到 `DedicatedServerName` 条目。

将其设置为上传存档文件夹的精确名称：

```ini
DedicatedServerName=[your_save_folder_id]
```

示例：

```ini
DedicatedServerName=84B5E2264EC387DEDB43179D666031A1
```

### 必填配置项

编辑时请参考下表：

| 配置文件 | 键名 | 必填值 |
| --- | --- | --- |
| `GameUserSettings.ini` | `DedicatedServerName` | 上传存档文件夹的精确名称 |

### 该设置的作用

`DedicatedServerName` 告诉 Palworld 专用服务器应加载 `Pal/Saved/SaveGames/0/` 下哪个文件夹作为活动世界。

如果该值与上传的文件夹名称不完全匹配，服务器可能会创建新世界或加载错误。

:::danger 必须完全匹配
如果启动后发现地图进度丢失、世界为空或生成了新存档，最常见原因是 `DedicatedServerName` 与上传文件夹名称不完全一致。
:::

## 不同来源的存档位置

如果不确定原始存档位置，请参考以下正确路径。

### 来自其他专用服务器提供商

在之前的服务器提供商处，备份存档文件夹路径为：

```text
Pal/Saved/SaveGames/0/
```

复制整个世界文件夹及其原始名称，然后按上述方法上传到你的 ZAP-Hosting 服务器。

### 来自 Steam 联机存档

Windows 本地 Steam 存档路径为：

```text
%LOCALAPPDATA%\Pal\Saved\SaveGames\[your_steamid64]\[your_save_folder_id]
```

其中 `[your_steamid64]` 是你的 Steam 64 位 ID，`[your_save_folder_id]` 是你想迁移的世界文件夹。

:::caution 主机角色限制
将本地 Steam 联机世界迁移到专用服务器时，原主机角色不会像连接的玩家数据那样自动转移。如果需要保留主机角色，可能需要额外的第三方存档转换或角色转移工具。
:::

### 来自 PC Game Pass

PC Game Pass 安装的本地存档通常存放于：

```text
%LOCALAPPDATA%\Packages\PocketpairInc.Palworld_ad4psfrxyesvt\SystemAppData\wgs\
```

Game Pass 存档格式与 Steam 或专用服务器存档不同。通常需要第三方转换工具将存档转换为 Steam 兼容或专用服务器兼容格式后再上传。

:::info Game Pass 转换需求
直接上传原始 PC Game Pass 存档通常不够。你需要先转换存档，再上传转换后的世界文件夹到 `Pal/Saved/SaveGames/0/`，并相应设置 `DedicatedServerName`。
:::

## 启动服务器

存档上传并更新 `GameUserSettings.ini` 后，重新从 ZAP-Hosting 网页面板启动服务器。

通常此迁移过程不需要额外的控制台命令。

启动后，加入服务器并确认：

- 正确的世界已加载
- 建筑和地图进度存在
- 玩家数据正常可用

## 故障排除

如果上传的存档未正确加载，请检查以下内容。

### 服务器创建了新世界

确认 `GameUserSettings.ini` 中的值与上传文件夹名称完全匹配：

```ini
DedicatedServerName=[your_save_folder_id]
```

并确认上传的存档位于：

```text
Pal/Saved/SaveGames/0/[your_save_folder_id]/
```

### 地图或世界进度丢失

通常原因包括：

| 可能原因 | 解决方案 |
| --- | --- |
| `DedicatedServerName` 值错误 | 重新输入上传文件夹的精确名称 |
| 存档文件夹上传到错误目录 | 移动到 `Pal/Saved/SaveGames/0/` |
| 上传不完整 | 重新上传完整文件夹并确认所有文件存在 |

### WorldOption.sav 导致问题

如果存档包含 `WorldOption.sav`，请删除它并重新启动服务器。

该文件与旧版存档处理相关，可能干扰迁移的专用服务器世界。

## 结论

恭喜，你已成功将已有 Palworld 存档上传到你的 ZAP-Hosting 服务器。如有更多问题或需要帮助，请随时联系我们的支持团队，我们每天都在线为你服务！🙂