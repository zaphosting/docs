---
id: source-metamod-addadmins
title: 成为服务器管理员
description: "了解如何通过获取你的 Steam ID 并设置服务器管理权限来成为管理员 → 立即了解更多"
sidebar_label: 成为管理员
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 成为管理员

想要注册为管理员，必须先安装 Source- / Metamod。

此外，你还需要你的 Steam 账号的 Steam ID。获取方式有很多，可以使用提供此服务的外部网站，也可以通过游戏控制台获取。

<InlineVoucher />

### 通过网站获取 SteamID

首先，在 Steam 中打开你的个人资料，然后在个人资料页面任意位置右键点击，复制该个人资料的 Steam URL。

![](https://screensaver01.zap-hosting.com/index.php/s/5xbii7Kzmpa33KE/preview)

接着，将该 URL 粘贴到以下任一网站：

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

![](https://screensaver01.zap-hosting.com/index.php/s/wiMssSGFEXWSF9R/preview)

之后你会看到 Steam ID 以及其他账号信息。这里需要的是 **Steam ID 32**：

```
steamID32: STEAM_0:1:XXXXXX
```

### 通过游戏控制台获取 SteamID

启动游戏并连接到你的服务器。打开游戏控制台，输入 `status` 命令，会显示如下信息：

```
] status
Connected to XXX.XXX.XXX.XX:XXXXX
hostname: Server Hosted by ZAP-Hosting.com
version : 1.37.1.1 secure
os : Linux
type : community dedicated
map : en_dust2
players : 1 humans, 0 bots (16/0 max) (not hibernating)

# userid name uniqueid connected ping loss state rate
# 2 1 "Player name" STEAM_1:1:XXXXXXXXX 44:39 30 0 active 196608
#end
```

### 配置

接下来，通过 FTP 重新连接服务器，打开 admins.cfg 配置文件。该文件位于：addons/sourcemod/configs 目录下。

文件中已经有一个管理员条目的示例。你可以复制它，然后按如下格式填写：

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

**Player name** 不需要和 Steam 账号名一致，仅用于配置文件中的识别。`auth` 表示认证方式，这里固定为 Steam，无需修改。`identity` 填写你的 SteamID32。`flags` 表示权限标志，不同权限对应不同的标志位。

| 权限          | 标志 | 用途               |
| ------------ |:----:|:------------------:|
| 预留          | a    | 预留服务器位       |
| 基础权限      | b    | 基础权限（必需）   |
| 踢人          | c    | 踢出玩家           |
| 封禁          | d    | 封禁玩家           |
| 解封          | e    | 解除封禁           |
| 击杀          | f    | 击杀玩家           |
| 切换地图      | g    | 切换地图           |
| 修改服务器变量 | h    | 修改服务器参数     |
| 运行配置      | i    | 执行服务器配置     |
| 聊天管理      | j    | 高级聊天权限       |
| 投票          | k    | 管理投票           |
| 设置密码      | l    | 设置服务器密码     |
| RCON命令      | m    | 执行 RCON 命令     |
| 启用作弊      | n    | 激活游戏内 sv_cheats |
| 超级权限      | z    | 完全访问权限       |

根据需要分配的权限，将对应的标志依次写入。例如，只想赋予踢人权限，则写 `b` 和 `c`。如果想赋予全部权限，只需写 `z`。

### 使用管理员菜单

在聊天框输入 `admin` 命令，或在控制台输入 `sm_admin`，即可打开管理员菜单。

![](https://screensaver01.zap-hosting.com/index.php/s/jwLWXJ99XeJJGSK/preview)

<InlineVoucher />