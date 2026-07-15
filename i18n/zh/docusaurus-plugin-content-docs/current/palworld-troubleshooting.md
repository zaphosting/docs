---
id: palworld-troubleshooting
title: "Palworld：故障排除"
description: "修复常见的 Palworld 服务器问题，如 Palworld Steam 更新故障、连接超时和游戏服务器上的 Steam 错误。-> 立即了解更多"
sidebar_label: Palworld：故障排除
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Palworld 专用服务器有时会遇到更新、启动和连接问题，尤其是在 Palworld Steam 更新后或安装第三方修改时。通过本指南，您将学会如何识别常见问题，检查 ZAP-Hosting 游戏服务器管理中的相关文件或设置，以及采取哪些措施恢复正常运行。



## 准备工作

开始故障排除之前，请确保您可以访问 Palworld 游戏服务器管理界面，并能打开服务器控制台及 `Configs` 区域。

:::info 必要访问权限
您需要访问 ZAP-Hosting 的 Palworld 服务器网页管理界面，以便在需要时停止、启动、重装服务器及编辑配置文件。
:::

:::note 关于配置文件
本指南中的大多数问题无法仅通过更改游戏设置解决。但如果您需要查看或手动调整 Palworld 服务器设置，相关文件通常位于游戏服务器管理的 `Configs` 部分。
:::

## 找到相关配置文件

对于 Palworld 专用服务器，主要服务器设置通常存储在以下文件中：

```ini
Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
```

在 ZAP-Hosting 游戏服务器管理中，您通常可以通过 `Configs` 部分访问此文件。

### 该文件的用途

`PalWorldSettings.ini` 包含主要的 `OptionSettings` 行，设置服务器的各种参数，例如：

- 服务器名称
- 密码
- 管理员密码
- 玩家数量限制
- 游戏倍率
- PvP 和突袭设置

典型结构示例如下：

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(ServerName="[your_server_name]",ServerDescription="[your_server_description]",AdminPassword="[your_admin_password]",ServerPassword="[your_server_password]",PublicPort=8211,PublicIP="[your_server_ip]")
```

:::caution 小心编辑语法
Palworld 使用单一的 `OptionSettings=(...)` 结构包含多个设置。如果误删逗号、引号或括号，服务器可能无法正常启动。
:::

### 何时需要编辑此文件

您应仅在以下情况下编辑 `PalWorldSettings.ini`：

- 需要更正错误的服务器密码或管理员密码
- 想要移除手动修改失败后产生的无效值
- 测试启动问题是否由配置错误引起

保存更改后，请重启服务器以应用新设置。

## 解决更新错误

Palworld 游戏服务器最常见的问题之一是 Steam 更新失败。

### 错误：`app '2394010' state is 0x6 after update job`

此错误通常表示游戏文件未通过 Steam 正确更新。

### 解决方法

1. 完全停止您的 Palworld 服务器。
2. 打开 ZAP-Hosting 网页管理中的游戏服务器管理界面。
3. 进入可执行重装或修复操作的区域。
4. 启动服务器文件的重装或完整性验证。
5. 等待过程完全结束。
6. 重新启动服务器。

:::info 解决原理
文件验证或重装会强制服务器重新下载缺失或损坏的 Palworld Steam 文件。这是修复 `0x6` 更新状态错误最可靠的方法。
:::

### 是否需要编辑配置文件？

此错误通常不需要更改配置文件。

| 问题 | 是否需配置文件 | 额外操作 |
| --- | --- | --- |
| `app '2394010' state is 0x6 after update job` | 否 | 停止服务器，验证或重装文件，然后重新启动服务器 |

## 解决连接超时问题

如果玩家看到 `Connection timed out`，通常是启动失败、mod 配置错误或连接方式问题导致。

### 检查服务器是否正常运行

首先确认服务器是否成功启动。

您可以通过以下方式检查：

- 在 ZAP-Hosting 网页管理界面查看服务器状态
- 打开控制台查看正常启动输出
- 检查服务器是否响应控制台命令（如果支持）

如果服务器活动极低且无正常响应，可能启动时崩溃。

### 回顾最近的配置更改

如果问题发生前您编辑过 `PalWorldSettings.ini`，请再次打开 `Configs` 中的文件，检查是否存在：

- 缺失逗号
- 破损的引号
- 重复的值
- 无效的 IP 或密码值

示例条目：

```ini
ServerName="[your_server_name]"
ServerPassword="[your_server_password]"
AdminPassword="[your_admin_password]"
PublicPort=8211
PublicIP="[your_server_ip]"
```

如果不确定配置是否导致问题，请还原最近更改并重启服务器。

### 检查 Mod 或 UE4SS 问题

如果 Palworld 刚更新且您使用了 mod 或 `UE4SS`，服务器可能不再兼容。

此时应：

1. 停止服务器。
2. 如果产品管理中有备份，请先备份。
3. 移除或更新已安装的 mod。
4. 重新启动服务器并测试连接。

:::caution 更新后 Mod 兼容性
Palworld Steam 更新可能破坏服务器端修改。如果问题紧跟更新出现，mod 是首要排查对象。
:::

### 使用直接 IP 连接而非“最近服务器”

Palworld 客户端通过游戏内“最近服务器”列表连接可能失败。

请改用服务器 IP 和端口直接连接。

格式如下：

```text
[your_server_ip]:8211
```

将 `[your_server_ip]` 替换为您的游戏服务器实际 IP。

### 公会相关的世界问题

某些世界状态下也可能发生超时，例如当一名公会成员离开且其他成员离线时。

可能的解决方案包括：

- 让受影响玩家重新加入公会
- 重启世界
- 如果世界无法使用，恢复备份

:::danger 世界数据风险
如果怀疑世界或存档损坏，避免无备份的反复手动修改。请先创建或恢复备份，再进行破坏性操作。
:::

## 解决 Steam 连接错误

Steam 相关连接问题可能导致 Palworld 服务器无法更新或无法访问。

### 错误：`Connecting anonymously to Steam Public...Retrying`

此消息通常与 Steam 服务临时问题有关，而非 Palworld 配置错误。

### 应采取的措施

- 等待 `5` 到 `10` 分钟后重试
- 检查 Steam 是否正在维护或出现故障
- 避免在 Steam 临时故障期间反复重启服务器

Steam 维护通常在周二进行，短暂中断属正常。

### Steam 故障期间的自动更新

如果服务器在 Steam 故障期间反复尝试更新，可能一直无法使用。

如果您的产品管理界面支持自动更新设置，可以暂时禁用，直到故障结束。

:::tip 临时 Steam 故障处理建议
如果服务器之前正常，突然出现 Steam 连接重试，通常建议先短暂等待，而非立即修改配置文件。
:::

### 是否需要编辑配置文件？

此问题通常不需要更改配置文件。

| 问题 | 是否需配置文件 | 额外操作 |
| --- | --- | --- |
| `Connecting anonymously to Steam Public...Retrying` | 否 | 等待，检查 Steam 状态，必要时暂时禁用自动更新 |

## 解决版本不匹配错误

如果出现匹配运行不兼容游戏版本的提示，说明服务器版本与客户端版本不一致。

### 解决方法

1. 重启 Palworld 服务器。
2. 等待服务器完成启动。
3. 如有需要，通过 Steam 更新本地 Palworld 客户端。
4. 再次尝试连接。

如果服务器仍提示版本不兼容，说明更新未正确应用。请重复之前描述的文件验证或重装流程。

### 更新后检查服务器设置

版本不匹配通常不是由 `PalWorldSettings.ini` 引起，但如果更新后服务器启动失败，仍建议确认配置文件有效且未被意外修改。

## 了解正常的 Steam 启动消息

某些启动消息看似严重，实际上是预期行为。

### 消息：`steamclient.so: cannot open shared object file: No such file or directory`

此消息常在启动时出现，对 Palworld 专用服务器来说通常无害。

单独看到此消息时，通常无需编辑任何文件或执行额外命令。

:::note 大多数情况下可忽略
如果服务器正常启动且玩家能连接，此 Steam 库消息一般可忽略。
:::

## 配置参考

下表总结了 Palworld 最相关的故障排查检查点。

| 问题 | 检查文件 | 服务器文件路径 | 是否需手动修改 | 是否需重启 |
| --- | --- | --- | --- | --- |
| 更新错误 `0x6` | 通常无 | 不需要 | 否 | 是 |
| 配置编辑后连接超时 | `PalWorldSettings.ini` | `Pal/Saved/Config/LinuxServer/PalWorldSettings.ini` | 是，检查 `OptionSettings` 值 | 是 |
| Mod 更新后连接超时 | Mod 文件，非标准配置 | 不固定 | 移除或更新不兼容的 mod | 是 |
| Steam 重试循环 | 通常无 | 不需要 | 否 | 有时需要，但建议先等待 |
| 游戏版本不兼容 | 通常无 | 不需要 | 否 | 是 |
| `steamclient.so` 警告 | 无 | 不需要 | 否 | 服务器正常时无需重启 |

## 推荐故障排查顺序

如果不确定从哪里开始，请按以下顺序操作：

1. 确认服务器在线。
2. 使用直接 IP 连接，避免“最近服务器”。
3. 检查 Palworld 或 Steam 是否近期更新。
4. 移除或更新所用的 mod。
5. 在 `Configs` 中检查 `PalWorldSettings.ini` 是否有语法错误。
6. 重启服务器。
7. 如果更新错误持续，验证或重装游戏文件。

此流程帮助您优先排除最常见原因，避免不必要的更改。

## 结论

恭喜，您已成功排查并解决常见的 Palworld 服务器问题。如有更多疑问或需要帮助，请随时联系我们的支持团队，我们每天都在这里为您服务！🙂