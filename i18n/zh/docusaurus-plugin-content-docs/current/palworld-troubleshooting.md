---
id: palworld-troubleshooting
title: "Palworld：故障排除"
description: "解决常见的 Palworld 服务器问题、Palworld Steam 更新故障和 Steam 连接错误。-> 立即了解更多"
sidebar_label: Palworld：故障排除
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Palworld 专用服务器可能因多种原因失败，包括 Steam 更新失败、版本不匹配、模组冲突和临时 Steam 连接问题。通过本指南，您将学习如何识别 ZAP-Hosting 上常见的 Palworld 服务器问题，并应用正确的解决方案，包括何时需要编辑配置文件、验证文件或重启服务器。

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## 准备工作

在开始故障排除之前，请确保您可以访问 ZAP-Hosting 网页界面中的 Palworld 游戏服务器管理和控制台。

您还应准备以下内容：

| 需求 | 需要原因 |
| --- | --- |
| 访问您的 ZAP-Hosting 游戏服务器面板 | 用于停止、启动、重装和编辑配置文件 |
| 访问服务器控制台 | 用于检查服务器是否响应 |
| 最近的备份 | 在更改文件或移除模组前推荐备份 |
| 服务器的直接 IP 和端口 | 因为游戏内的“最近服务器”列表可能不稳定 |

:::caution 先创建备份
如果您计划移除模组、重装文件或重置 Palworld 服务器设置的部分内容，建议先创建备份以避免意外数据丢失。
:::

## 访问 Palworld 配置文件

某些故障排除步骤需要手动修改 Palworld 配置文件。在 ZAP-Hosting，您可以通过游戏服务器管理中的 `Configs` 访问这些文件。

对于 Palworld 专用服务器，主要服务器设置通常存储在以下文件中：

```text
Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
```

如果您的服务器运行在不同的平台模板上，具体文件夹名称可能有所不同，但在基于 Linux 的 Palworld 托管服务器上，`LinuxServer` 路径是标准位置。

### 在 ZAP 界面打开配置文件

访问文件的步骤：

1. 在 ZAP-Hosting 网页界面打开您的 Palworld 服务器。
2. 进入 `Configs` 部分。
3. 打开 `PalWorldSettings.ini`。
4. 查看包含大部分游戏玩法和连接相关设置的 `OptionSettings=(...)` 行。

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

:::info 主要配置文件
大多数 Palworld 服务器选项存储在 `PalWorldSettings.ini` 中，通常位于 `OptionSettings=(...)` 部分。如果您需要调整游戏设置、密码、玩家限制或网络相关值，通常就是编辑这个文件。
:::

### 编辑后保存并重启

修改配置值后：

1. 在 `Configs` 部分保存文件。
2. 从 ZAP-Hosting 界面重启 Palworld 服务器。

Palworld 不会实时应用配置更改，因此编辑 `PalWorldSettings.ini` 后必须重启服务器。

## 解决 Steam 更新失败问题

已知的更新问题会显示如下信息：

```text
Error! app '2394010' state is 0x6 after update job
```

这通常表示 Palworld Steam 服务器文件未正确更新。

### 推荐解决方案

解决步骤：

1. 停止您的 Palworld 服务器。
2. 打开 ZAP-Hosting 界面中的服务器管理区域。
3. 使用重装或文件验证功能。
4. 选择验证完整性选项，服务器文件将被检查并在需要时重新下载。
5. 重新启动服务器。

:::tip 验证完整性修复损坏文件
文件验证通常是最安全的第一步，因为它可以修复缺失或损坏的 Palworld 游戏服务器文件，无需您手动上传任何内容。
:::

### 需要编辑配置文件吗？

通常不需要针对该错误手动修改配置文件。问题通常是游戏文件损坏或不完整，而非 `PalWorldSettings.ini` 中的错误设置。

## 解决“连接超时”问题

如果您在加入 Palworld 服务器时遇到 `Connection timed out` 错误，可能有多种原因。

## 检查服务器是否正常运行

首先确认服务器是否正确启动。

### 使用控制台

在 ZAP-Hosting 界面打开服务器控制台，检查启动日志。如果控制台可用，尝试输入简单命令：

```text
info
```

如果服务器正常响应，说明服务器正在运行。如果没有响应或进程反复停止，服务器可能在启动时崩溃。

### 检查资源使用情况

如果启动时 CPU 使用率异常低且控制台无响应，可能表示 Palworld 服务器进程崩溃或未能正确初始化。

| 现象 | 可能原因 | 推荐操作 |
| --- | --- | --- |
| 控制台无响应 | 启动崩溃或进程挂起 | 重启服务器并检查最近更改 |
| 启动时 CPU 使用率极低 | 服务器未正确初始化 | 检查模组、最近更新和日志 |
| 服务器启动但玩家连接超时 | 连接方式或版本问题 | 使用直接 IP 并核对版本 |

## 使用直接 IP 连接而非“最近服务器”

Palworld 常见问题是通过游戏内“最近服务器”标签加入失败，即使服务器在线。

请改用直接连接：

1. 从 ZAP-Hosting 界面复制服务器 IP 和端口。
2. 在 Palworld 中直接使用该地址连接。
3. 测试时避免依赖“最近服务器”列表。

:::note 直接连接更可靠
如果 Palworld Steam 服务器浏览器或最近服务器列表表现不稳定，直接 IP 连接是确认服务器是否可达的最佳方式。
:::

## 检查模组或 UE4SS 问题

如果 Palworld 最近更新且您的服务器使用了模组或 `UE4SS`，服务器可能会停止工作，直到这些修改被更新。

### 需要检查的内容

确认您是否最近安装了：

- 游戏模组
- 自定义服务器修改
- `UE4SS`
- 其他第三方文件，钩入了 Palworld 服务器

如果问题在 Palworld Steam 更新后立即出现，这些文件很可能是原因。

### 推荐解决方案

1. 停止服务器。
2. 创建备份。
3. 移除或禁用最近添加的模组或 `UE4SS`。
4. 重新启动服务器。
5. 使用直接 IP 测试连接。

:::caution 更新后模组兼容性
Palworld 更新可能会无预警破坏模组。如果您的服务器在更新前正常，更新后异常，务必先移除模组测试，再做其他设置更改。
:::

### 需要修改配置吗？

通常不需要。模组相关的连接超时一般是由不兼容文件引起，而非 `PalWorldSettings.ini` 中的值。

## 解决 Steam 连接错误

启动时可能看到如下信息：

```text
Connecting anonymously to Steam Public...Retrying
```

这通常是临时 Steam 连接问题，而非 Palworld 配置错误。

### 这意味着什么

Palworld 专用服务器依赖 Steam 服务完成启动和更新过程。如果 Steam 出现故障、高负载或计划维护，服务器可能暂时无法连接。

这种情况在高峰期或 Steam 例行维护时尤为常见，Steam 维护通常安排在周二。

### 推荐解决方案

尝试以下操作：

1. 等待 `5` 到 `10` 分钟。
2. 重启服务器。
3. 之后再次测试。

如果问题发生在 Steam 整体故障期间，您可能需要等待 Steam 服务恢复。

### 自动更新注意事项

如果服务器在 Steam 故障期间反复遇到更新启动问题，可以考虑在服务器设置中禁用自动更新，直到 Steam 稳定。

:::tip 避免在 Steam 维护期间更新
如果可能，避免在已知 Steam 维护期间强制 Palworld Steam 更新，这样可以减少启动失败和不必要的故障排除。
:::

### 需要修改配置吗？

不需要。此问题通常无法通过修改 `PalWorldSettings.ini` 或其他配置文件解决。

## 解决“游戏版本不兼容”问题

如果 Palworld 显示比赛运行的游戏版本不兼容，说明您的客户端版本和服务器版本不匹配。

## 更新服务器版本

首先从 ZAP-Hosting 界面重启服务器。很多情况下，这会应用最新的 Palworld 服务器更新。

如果版本仍不匹配，请使用您常规的服务器更新流程。如果需要专门的更新指南，请参考 ZAP-Docs 中的 Palworld 更新文档（如果有）。

### 确认客户端版本

确保您的本地 Palworld 游戏安装也通过 Steam 完全更新。

| 组件 | 需要检查的内容 |
| --- | --- |
| Palworld 服务器 | 在 ZAP-Hosting 上已重启并更新 |
| 本地 Palworld 游戏 | 在 Steam 中已更新 |
| 模组 | 已更新或不兼容时已移除 |

:::info 版本不匹配影响双方
此错误不一定意味着服务器版本过旧。您的本地 Palworld 客户端也可能是旧版本，因此务必同时确认双方版本。
:::

### 需要修改配置吗？

通常不需要编辑配置文件来解决版本不匹配。

## 理解 `steamclient.so` 启动消息

启动时可能看到类似：

```text
steamclient.so: cannot open shared object file: No such file or directory
```

在许多 Palworld 托管环境中，即使服务器正常启动，也会出现这些 Steam 相关消息。

### 您应该怎么做

如果服务器继续启动并可连接，通常可以忽略此消息。

### 何时成为问题

只有当服务器完全无法启动且该消息伴随其他致命错误时，才需要进一步调查。

:::note 并非所有 Steam 错误都是严重的
启动日志中常包含非致命警告。重点关注服务器是否完成启动并接受连接，而非控制台中是否出现单条警告。
:::

## 解决世界和公会相关连接问题

有时玩家可能遇到与世界或公会状态相关的连接问题，而非服务器进程本身。

一个已报告的例子是公会成员离开时，其他公会相关玩家数据仍绑定离线玩家，可能导致加入问题。

### 可能的解决方案

按顺序尝试：

1. 让受影响玩家尽可能重新加入公会。
2. 重启 Palworld 服务器。
3. 如果问题持续，恢复备份或仔细检查受影响的存档数据。

:::danger 存档数据更改风险
如果怀疑世界或存档损坏，除非有最新备份，否则避免随意手动修改文件。错误编辑可能永久损坏您的 Palworld 世界数据。
:::

## 值得检查的配置项

虽然本指南中的大多数问题不是由错误设置直接引起，但如果玩家无法正常加入，您可以检查 `PalWorldSettings.ini` 中几个关键值。

这些值通常位于 `OptionSettings=(...)` 部分。

| 配置键 | 作用 | 需要检查的内容 |
| --- | --- | --- |
| `ServerName` | 公开服务器名称 | 确认设置符合预期 |
| `ServerDescription` | 服务器描述 | 可选，但有助于识别 |
| `AdminPassword` | 管理员登录密码 | 如果使用管理员命令，确保正确设置 |
| `ServerPassword` | 加入密码 | 如果玩家无法认证，移除或修正 |
| `PublicPort` | 游戏连接端口 | 确认与分配的端口匹配 |
| `PublicIP` | 公告的公网 IP | 通常保持默认，除非特殊需求 |
| `bIsMultiplay` | 多人游戏模式 | 正常专用服务器应启用 |
| `bIsDedicated` | 专用服务器模式 | 托管专用服务器应启用 |

### 示例结构

您的文件内容可能不同，但相关设置通常存储在类似如下的行中：

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(ServerName="zaphosting",ServerDescription="Palworld Server",AdminPassword="[your_admin_password]",ServerPassword="[your_server_password]",PublicPort=8211,PublicIP="",bIsMultiplay=True,bIsDedicated=True)
```

请将 `[your_admin_password]` 和 `[your_server_password]` 替换为您自己的值。

:::caution 不要随意更改未知值
Palworld 将许多设置存储在单行 `OptionSettings` 中。如果误删逗号、引号或括号，服务器可能无法正确读取配置。
:::

## 安全应用配置更改

如果需要编辑 `PalWorldSettings.ini`，请按以下步骤操作：

1. 如果想避免冲突，先停止服务器。
2. 在 ZAP-Hosting 界面打开 `Configs`。
3. 编辑 `Pal/Saved/Config/LinuxServer/PalWorldSettings.ini`。
4. 保存更改。
5. 启动或重启服务器。
6. 使用直接 IP 测试服务器。

### 不需要额外命令

对于标准 Palworld 配置更改，保存文件后通常不需要在控制台执行额外命令。重启是关键步骤。

## 快速参考

| 问题 | 需要编辑配置文件 | 需要重启 | 额外操作 |
| --- | --- | --- | --- |
| `app '2394010' state is 0x6 after update job` | 否 | 是 | 验证完整性或重装文件 |
| `Connection timed out` | 通常否 | 通常是 | 使用直接 IP，检查模组，测试控制台 |
| `Connecting anonymously to Steam Public...Retrying` | 否 | 是 | 等待 Steam 恢复 |
| `Incompatible version of the game` | 否 | 是 | 更新服务器和客户端 |
| `steamclient.so` 警告 | 否 | 否（服务器正常启动时） | 通常可忽略 |
| 公会变动后加入问题 | 否 | 是 | 重新加入公会或必要时恢复备份 |

## 结论

恭喜，您已成功排查常见的 Palworld 服务器问题。如有更多疑问或需要帮助，请随时联系我们的支持团队，我们每天都在这里为您服务！🙂