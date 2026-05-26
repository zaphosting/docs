---
id: subnautica-2-mods
title: "Subnautica 2：安装 Mods"
description: "了解如何通过将 Lua 或 C++ Mods 添加到正确的文件夹，在你的游戏服务器上安装 Subnautica 2 Mods，使你的 Subnautica 服务器在启动时自动加载它们。-> 立即了解更多"
sidebar_label: Subnautica 2：安装 Mods
services:
 - gameserver-subnautica-2
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Mods 让你可以通过添加新的游戏功能、改进机制或引入新内容，来自定义和增强你的 Subnautica 2 服务器体验。使用 Mods，你可以为自己和玩家创造一个更丰富、更有趣的环境。本指南将向你展示如何在 ZAP-Hosting 游戏服务器上安装 Subnautica 2 Mods，通过上传支持的 Lua 或 C++ Mods 到正确的文件夹，使它们在服务器启动时自动加载。

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## 准备工作

开始之前，你需要通过 ZAP-Hosting 网页界面或其他可用的文件管理方式访问你的 Subnautica 2 游戏服务器文件。

:::info 必须的 Mod 类型
只能使用专为 Subnautica 2 设计的 Lua 或 C++ Mods。如果 Mod 是为其他游戏制作的，比如 Subnautica 1 或 Subnautica Below Zero，则不能保证兼容性。
:::

:::note Mod 下载来源
Subnautica 2 Mods 可以从社区平台获取，例如 [Nexus Mods](https://www.nexusmods.com/games/subnautica2)。由于第三方 Mod 页面可能随时变动，上传文件前请务必查看 Mod 描述和安装说明。
:::

## 下载兼容的 Mods

首先，下载你想在服务器上使用的 Mods。确保 Mod 明确针对 **Subnautica 2**，并检查作者是否提供了额外的要求。

### 检查 Mod 内容

下载 Mod 压缩包后，在本地电脑解压并查看包含的文件。

常见需要注意的内容：

- Lua 脚本文件
- C++ Mod 文件
- 作者提供的文件夹结构
- `README`、安装说明或依赖列表

:::caution 验证兼容性
并非所有游戏 Mods 都支持服务器端。有些 Mod 仅为客户端设计，可能无法在专用的 Subnautica 2 游戏服务器上运行。如果作者未提及服务器支持，使用前请务必仔细测试。
:::

## 访问你的游戏服务器文件

接下来，打开你的 Subnautica 2 游戏服务器文件系统，找到主服务器目录。

如果你使用 ZAP-Hosting 网页界面，打开游戏服务器的文件管理器，导航到服务器安装的根目录。

### 找到 Mods 文件夹

在主游戏服务器目录内，找到 `mods` 文件夹。

安装目标路径是：

```text
[main_gameserver_directory]/mods
```

将 `[main_gameserver_directory]` 替换为你的 Subnautica 2 服务器文件的基础目录。

:::info 自动加载 Mods
服务器启动时会检查 `mods` 文件夹。如果正确放置了支持的 Lua 或 C++ Mod，服务器将在下一次启动时自动加载它们。
:::

## 上传并安装 Mods

确认拥有正确的 Mod 文件并打开 `mods` 文件夹后，你可以上传 Mod 内容。

### 复制 Mod 文件

将解压后的 Lua 或 C++ Mod 文件上传或移动到主游戏服务器目录下的 `mods` 文件夹。

根据 Mod 不同，可能需要：

- 直接上传单个文件到 `mods`
- 上传完整的 Mod 文件夹到 `mods`
- 完整保留作者提供的文件夹结构

### 保持原始结构

如果下载的压缩包已经包含 Mod 文件夹，除非作者明确说明，否则不要更改内部文件结构。

| 项目 | 操作说明 |
| --- | --- |
| 单个 Lua Mod 文件 | 上传到 `mods` 文件夹 |
| 单个 C++ Mod 文件 | 上传到 `mods` 文件夹 |
| 文件夹形式的 Mod | 上传整个文件夹到 `mods` 文件夹 |
| 压缩包文件（如 `.zip`） | 先解压，再上传内容（如需要） |

:::caution 除非明确支持，否则不要上传压缩包
如果只上传 `.zip` 或其他压缩文件，服务器可能无法识别 Mod。除非作者另有说明，请上传解压后的文件或文件夹。
:::

## 重启服务器

上传 Mods 后，重启你的 Subnautica 2 游戏服务器。

这是必须的，因为服务器只在启动时加载 Mods。服务器运行时新上传的文件通常不会立即生效，需等待下一次启动。

### 确认 Mod 加载

重启后，检查 Mod 是否在游戏内生效，或通过服务器日志和输出确认。

确认方式可能包括：

- 游戏玩法变化
- 新命令或功能出现
- Mod 相关的日志条目
- 服务器成功启动且无错误

:::tip 一次安装一个 Mod
如果你想使用多个游戏 Mod，建议逐个安装并测试。这样如果服务器启动失败，更容易定位问题 Mod。
:::

## 故障排除

如果你的 Subnautica 2 Mods 无法正常工作，可以检查以下常见问题。

### 常见问题

| 问题 | 可能原因 | 解决方案 |
| --- | --- | --- |
| Mod 无法加载 | 文件上传到错误目录 | 确认文件在主游戏服务器目录的 `mods` 文件夹内 |
| 服务器启动但 Mod 无效 | Mod 仅客户端支持或不兼容 | 查看 Mod 页面，确认支持专用服务器 |
| 服务器启动失败 | Mod 文件损坏或版本不匹配 | 删除最近安装的 Mod，重启服务器 |
| Mod 文件存在但被忽略 | 上传了压缩包而非解压文件 | 解压下载包，上传实际 Mod 文件 |
| 多个 Mod 冲突 | 两个 Mod 修改了相同行为 | 分别测试每个 Mod，只保留兼容组合 |

### 删除有问题的 Mod

如果新安装的 Mod 导致问题，删除对应的文件或文件夹，然后重启服务器。

```text
[main_gameserver_directory]/mods
```

:::danger 使用可信的 Mod 来源
只从你信任的来源下载 Mods。第三方文件可能包含损坏、过时或恶意内容。请仔细查看 Mod 页面，避免下载没有明确安装或兼容信息的未知文件。
:::

## 最佳实践

为了保持服务器稳定，建议谨慎管理 Mods，避免一次安装过多。

### 推荐流程

1. 下载一个兼容的 Subnautica 2 Mod。
2. 在本地解压文件。
3. 上传文件或文件夹到服务器的 `mods` 目录。
4. 重启服务器。
5. 测试功能。
6. 对下一个 Mod 重复以上步骤。

### 保留本地备份

在更改活跃 Mod 配置前，备份以下内容：

- 当前的 Mod 文件
- 相关配置文件
- 已安装 Mod 及其版本列表

这样如果新 Mod 出现问题，可以快速恢复正常配置。

## 结论

恭喜，你已成功在 Subnautica 2 游戏服务器上安装了 Mods。如有更多问题或需要帮助，请随时联系我们的支持团队，我们每天都在线为你服务！🙂