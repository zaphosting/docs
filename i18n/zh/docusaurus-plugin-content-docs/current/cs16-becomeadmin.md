---
id: cs16-becomeadmin
title: "CS 1.6：如何成为自己服务器的管理员"
description: "了解如何分配管理员权限，实现对服务器的全面控制和更强大的游戏内管理 → 立即了解"
sidebar_label: 成为管理员
services:
  - gameserver-cs16

---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
分配管理员权限让你可以轻松且全面地管理服务器，拥有对服务器的完全控制权。作为管理员，你可以直接在游戏内使用游戏提供的所有可用选项和功能。下面将详细介绍如何为你的服务器分配管理员权限的所有步骤。  
<InlineVoucher />

## 配置
添加管理员是通过 **users.ini** 配置文件完成的。要成为管理员并找到这些文件，你必须先安装 **AMXmodX** 和 **Metamod**。如果你还没安装，可以参考这篇指南：[安装插件](cs16-plugins.md)

要编辑 **users.ini** 配置文件，你需要通过 FTP 连接到服务器。然后进入目录 ``/gXXXX/cs16/cstrike/addons/amxmodx/configs``。接下来用文本编辑器打开配置文件并进行修改。

<InlineVoucher />

```
...
; 管理员账号示例：
; "STEAM_0:0:123456" "" "abcdefghijklmnopqrstu" "ce"
; "123.45.67.89" "" "abcdefghijklmnopqrstu" "de"
; "My Name" "my_password" "abcdefghijklmnopqrstu" "a"

"loopback" "" "abcdefghijklmnopqrstu" "de"
```

配置中 ``"loopback" "" "abcdefghijklmnopqrstu" "en"`` 这一项需要调整。以前认证只通过用户名和密码完成，现在只通过 SteamID64 认证。你可以打开你的 Steam 个人资料，右键点击任意位置，选择 **复制 Steam URL**。

然后把复制的 URL 粘贴到以下任意网站：

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

![](https://screensaver01.zap-hosting.com/index.php/s/agXYcjRaDn8nSim/preview)

这样你就能获得账户的基本信息和 Steam ID。这里我们只需要 SteamID64。然后把 Steam ID 填写到客户端条目的 **SteamID** 位置。示例如下：

```
"STEAM_0:0:XXXXXX" "" "abcdefghijklmnopqrstu" "ce"
```

这一行包含以下信息：

1. 名称/SteamID - 玩家唯一 ID。
2. 密码 - 如果是 Steam 认证则无密码。
3. 权限等级
4. 连接标志 - 控制 AMX Mod X 如何尝试授权连接的管理员。

因为是通过 Steam 认证，所以不需要密码，权限标志设置为 ``ce`` 而不是 ``en``。下面是所有权限等级和连接标志的说明：


**权限等级**

| 权限等级 | 说明                                                         |
| -------- | ------------------------------------------------------------ |
| a        | 免疫（不能被踢出/封禁/击杀/拍打，也不受其他命令影响）       |
| b        | 预留（可以加入预留位）                                       |
| c        | amx_kick 命令权限                                            |
| d        | amx_ban 和 amx_unban 命令权限                                |
| e        | amx_slay 和 amx_slap 命令权限                                |
| f        | amx_map 命令权限                                             |
| g        | amx_cvar 命令权限（不是所有 cvar 都可用）                    |
| h        | amx_cfg 命令权限                                             |
| i        | amx_chat 和其他聊天命令权限                                  |
| j        | amx_vote 和其他投票命令权限                                  |
| k        | 访问 sv_password cvar（通过 amx_cvar 命令）                  |
| l        | 访问 amx_rcon 命令和 rcon_password cvar（通过 amx_cvar 命令）|
| m        | 自定义等级 A（用于额外插件）                                 |
| n        | 自定义等级 B（用于额外插件）                                 |
| o        | 自定义等级 C（用于额外插件）                                 |
| p        | 自定义等级 D（用于额外插件）                                 |
| q        | 自定义等级 E（用于额外插件）                                 |
| r        | 自定义等级 F（用于额外插件）                                 |
| s        | 自定义等级 G（用于额外插件）                                 |
| t        | 自定义等级 H（用于额外插件）                                 |
| u        | 菜单访问权限                                                 |
| z        | 普通用户（无管理员权限）                                     |


**连接标志**

| 标志 | 说明                                                   |
| ---- | ------------------------------------------------------ |
| a    | 密码错误时断开连接                                     |
| b    | 战队标签                                               |
| c    | 这是 steamid/wonid                                     |
| d    | 这是 IP 地址                                          |
| e    | 不检查密码（只需名称/IP/SteamID）                     |


## 总结

恭喜你，管理员权限配置成功！如果有任何问题或需要帮助，随时联系我们的客服团队，我们每天都在线为你服务！🙂

<InlineVoucher />