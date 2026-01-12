---
id: css-becomeadmin
title: "Counter-Strike: Source：成为管理员"
description: "了解如何分配管理员权限，实现对服务器的全面控制并高效管理游戏功能 → 立即了解更多"
sidebar_label: 成为管理员
services:
  - gameserver-css
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## 介绍

分配管理员权限让你可以轻松全面地管理服务器。作为管理员，你可以直接在游戏内使用游戏提供的所有可用选项和功能。下面将详细介绍为你的服务器分配管理员权限所需的所有步骤。

<InlineVoucher />



## 配置

要注册为管理员，必须安装 SourceMod 或 MetaMod。此外，你还需要你的 Steam 账号的 Steam ID。获取 Steam ID 有多种方式：你可以使用提供此服务的外部网站，或者通过游戏内控制台直接获取。


通过网站获取 SteamID，首先打开你的 Steam 个人资料，右键点击页面任意位置复制个人资料链接。然后，将该链接粘贴到以下任一网站：

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

页面会显示你的 SteamID 及其他账号信息。注册管理员时，需要使用 **SteamID32**：

```
steamID32: STEAM_0:1:XXXXXX
```

或者，你也可以通过游戏内控制台获取 SteamID。启动游戏，连接你的服务器，打开控制台，输入命令：

```
status
```

这会显示你的连接详情，包括 SteamID。接着，通过 FTP 连接服务器，打开位于：

```
.../addons/sourcemod/configs/
```

目录下的 `admins.cfg` 文件。

文件中包含一个示例条目，你可以复制并修改：

```
Admins
{
	"Player name"
	{
		"auth" "steam"
		"identity" "STEAM_0:1:XXXXX"
		"flags" "abcdef"
	}
}
```

**玩家名称** 不必与你的 Steam 账号名一致，仅供内部参考。`auth` 字段定义认证方式，保持为 `steam`。在 `identity` 中填写 SteamID32。`flags` 定义赋予管理员的权限：

| 权限         | 标志 | 说明           |
|-------------|:----:|----------------|
| 预留槽位     | a    | 预留服务器槽位 |
| 基础权限     | b    | 基本权限（必需）|
| 踢出玩家     | c    | 踢出玩家       |
| 封禁玩家     | d    | 封禁玩家       |
| 解封玩家     | e    | 解封玩家       |
| 击杀玩家     | f    | 拍打或击杀玩家 |
| 更换地图     | g    | 更换地图       |
| 修改服务器变量 | h    | 修改服务器变量 |
| 执行服务器配置 | i    | 执行服务器配置文件 |
| 聊天管理     | j    | 高级聊天权限   |
| 发起投票     | k    | 发起管理员投票 |
| 设置密码     | l    | 设置服务器密码 |
| RCON命令     | m    | 执行 RCON 命令 |
| 启用作弊     | n    | 启用 `sv_cheats` |
| 完全权限     | z    | 完全访问权限   |

多个标志可以组合使用（例如 `bc` 表示拥有踢出权限）。若要完全权限，仅使用 `z`。你可以通过在聊天中输入 `admin` 或在控制台输入 `sm_admin` 来打开管理员菜单。



## 管理员命令

下面是你作为服务器管理员可以使用的一些常用命令列表。

| 命令                             | 说明                           |
| -------------------------------- | ------------------------------ |
| `sm_kick <player>`                | 踢出玩家                       |
| `sm_ban <player> <time> [reason]` | 封禁玩家指定分钟（0 = 永久封禁）|
| `sm_unban <SteamID/IP>`           | 解封玩家                       |
| `sm_slay <player>`                | 立即击杀玩家                   |
| `sm_slap <player> [damage]`       | 拍打玩家（可选伤害值）         |
| `sm_map <mapname>`                | 切换到指定地图                 |
| `sm_cvar <cvar> <value>`          | 运行时设置服务器配置变量       |
| `sm_vote <topic>`                 | 发起基础投票                   |
| `sm_restartgame <seconds>`        | 倒计时后重启游戏               |
| `sm_say <message>`                | 发送消息到全局聊天             |



## 总结

恭喜你！只要按照步骤操作，你应该已经成功配置了服务器的管理员权限。如有任何疑问或需要帮助，欢迎随时联系我们的客服团队，我们每天都在线为你服务！🙂

<InlineVoucher />