---
id: windrose-password-protection
title: "Windrose：密码保护"
description: "为您的 Windrose 游戏服务器设置密码以保护访问权限，并在服务器配置中安全管理密码更改设置 -> 立即了解更多"
sidebar_label: 密码保护
services:
 - gameserver-windrose
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Windrose 支持密码保护，允许您通过加入密码限制对专用服务器的访问。在本指南中，您将学习如何使用 ZAP-Hosting 游戏服务器管理启用、更改或移除 Windrose 服务器的密码。

## 准备工作

开始之前，请确保您可以访问 ZAP-Hosting 网站界面中的 Windrose 服务器，并且有权限编辑服务器文件。

:::info 必要访问权限
您需要访问服务器控制面板和文件管理区域，以便编辑 `ServerDescription.json` 文件。
:::

## 了解 Windrose 密码保护

设置密码可以防止未经授权的玩家加入您的 Windrose 游戏服务器。玩家仍然可以通过邀请代码访问服务器，但必须输入正确的密码才能连接。

这在以下情况下非常有用：
- 限制访问仅限朋友、工作人员或私人群组
- 保护测试服务器不被公开访问
- 控制谁可以加入，而无需依赖单独的密码管理器或账户密码系统

:::note 密码行为说明
Windrose 使用配置在服务器文件中的密码。这与您的 ZAP-Hosting 账户密码无关，也不涉及密码管理器、Google 密码管理集成或任何密码列表。
:::

## 启用密码保护

要应用密码，您需要先停止服务器，编辑配置文件，然后重新启动服务器。

### 停止服务器

在 ZAP-Hosting 网站界面打开服务器控制面板，完全停止服务器后再进行更改。

:::caution 编辑前请停止服务器
编辑 `ServerDescription.json` 前应先停止服务器，以避免配置冲突或文件在服务器运行时被覆盖。
:::

### 打开配置文件

在面板侧边栏中，打开 `Files`。

然后在服务器文件列表的根目录找到并打开 `ServerDescription.json` 文件。

### 编辑密码设置

在 `ServerDescription.json` 中，将 `IsPasswordProtected` 设置为 `true`，并在 `Password` 字段中定义您想要的密码。

```json
"IsPasswordProtected": true,
"Password": "YourPasswordHere"
```

将 `YourPasswordHere` 替换为您自己的安全密码。

:::tip 选择强密码
使用独一无二的密码，不要重复使用您的账户密码或其他服务密码。这有助于保护您的 Windrose 服务器免受未经授权的访问。
:::

### 保存并重启服务器

编辑完成后，点击 `Save Content`。

文件保存后，从控制面板重新启动服务器。玩家尝试加入时将需要输入您设置的密码。

## 配置参考

下表说明了 `ServerDescription.json` 中相关设置的含义：

| 键名 | 类型 | 示例 | 说明 |
| --- | --- | --- | --- |
| `IsPasswordProtected` | 布尔值 | `true` | 启用或禁用密码保护 |
| `Password` | 字符串 | `"YourPasswordHere"` | 启用密码保护时使用的加入密码 |

## 更改已有密码

如果您想之后更改密码，操作与初次设置相同。

### 更新密码值

停止服务器，打开 `ServerDescription.json`，将 `Password` 字段的值更改为新密码。

示例：

```json
"IsPasswordProtected": true,
"Password": "[your_new_password]"
```

占位符 `[your_new_password]` 表示您希望玩家加入服务器时使用的新密码。

### 保存并再次重启

保存文件并重启服务器，使密码更改生效。

:::note 密码校验提示
如果玩家更改密码后无法加入，请让他们仔细检查密码输入，包括大小写是否正确。
:::

## 移除密码保护

如果您不再希望用密码保护 Windrose 服务器，可以在同一配置文件中禁用此功能。

### 禁用设置

停止服务器，再次打开 `ServerDescription.json`。

将 `IsPasswordProtected` 设置为 `false`。禁用时，`Password` 字段的值将被忽略。

```json
"IsPasswordProtected": false,
"Password": ""
```

### 保存并重启服务器

点击 `Save Content` 并重新启动服务器。此时玩家无需输入密码即可加入。

## 故障排除

如果密码保护未按预期工作，请检查以下问题。

| 问题 | 可能原因 | 解决方案 |
| --- | --- | --- |
| 服务器未提示输入密码 | `IsPasswordProtected` 仍设置为 `false` | 设置为 `true`，保存文件并重启服务器 |
| 玩家无法用正确密码加入 | 密码输入错误 | 核实配置的密码值，提醒玩家仔细输入密码 |
| 更改未生效 | 编辑后未重启服务器 | 保存 `ServerDescription.json` 后重启服务器 |
| 文件更改丢失 | 服务器运行时编辑了文件 | 先停止服务器，重新应用更改，保存并重启 |

:::danger 请勿公开存储敏感密码
请勿在社区帖子、截图或文件导出中公开分享服务器密码。也避免使用旧密码列表中的密码或重复使用其他服务的凭据。
:::

## 结论

恭喜，您已成功为 Windrose 服务器设置密码保护。如有更多问题或需要帮助，请随时联系我们的支持团队，我们每天都在线为您服务！🙂