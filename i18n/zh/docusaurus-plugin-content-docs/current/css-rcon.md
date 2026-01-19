---
id: css-rcon
title: "Counter-Strike: Source: RCON"
description: "了解如何安全高效地远程管理和控制 Counter-Strike: Source 服务器 → 立即了解更多"
sidebar_label: RCON
services:
  - gameserver-css
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

RCON（远程控制台）是一种用于远程控制游戏服务器的网络协议。它允许无需直接操作服务器环境即可访问服务器控制台，从而执行管理命令、调整配置参数或获取服务器状态信息。

在 Counter-Strike: Source 中，RCON 用于执行服务器端命令，比如管理玩家、修改游戏设置或访问诊断输出。连接通过密码保护，并通过指定端口进行，支持兼容的 RCON 客户端访问。

RCON 的一个关键优势是它允许服务器管理 **无需以玩家身份连接游戏**。服务器管理员可以通过外部工具、命令行界面或网页面板监控和控制 Counter-Strike: Source，极大提升了远程操作的灵活性和便利性。

<InlineVoucher />

## 配置

在使用 RCON 之前，必须先启用并配置它。操作步骤是在游戏服务器管理面板的 **Configs** 中编辑配置文件。在名为 `server.cfg` 的文件中，需添加或修改以下条目：

```cfg
rcon_password "define-your-password"
```


## 通过 RCON 连接

要通过 RCON 连接 Counter-Strike: Source 服务器，可以使用命令行工具 **rcon-cli**。该工具可从官方 [GitHub 仓库](https://github.com/gorcon/rcon-cli) 下载。下载并安装后，使用服务器 IP 地址、RCON 端口和 RCON 密码即可建立连接。

分配的端口可在游戏服务器管理后台设置页面底部的 **端口概览** 中找到。密码和端口必须与面板或配置文件中设置的值一致。使用以下命令连接并直接执行命令：

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```


## RCON 命令

连接成功后，可以在 Counter-Strike: Source 服务器上执行各种管理和诊断命令。可用命令取决于游戏引擎，通常包括玩家管理、状态查询和服务器控制等操作。

| 命令                      | 说明                                             |
|---------------------------|--------------------------------------------------|
| `rcon_password <password>`   | 以 RCON 管理员身份认证                           |
| `status`               | 显示玩家和服务器信息                              |
| `changelevel <map>`   | 切换地图                                          |
| `mp_autoteambalance 0/1` | 启用/禁用自动队伍平衡                            |
| `mp_timelimit <minutes>` | 设置地图时间限制                                 |
| `mp_friendlyfire 0/1`    | 启用/禁用队友伤害                                |
| `mp_freezetime <seconds>` | 设置回合开始的冻结时间                           |
| `sv_cheats 0/1`         | 启用作弊（仅限管理员使用）                        |
| `exec <file.cfg>`       | 执行配置文件                                     |
| `kick <player>`         | 踢出玩家                                         |


## 总结

RCON 是远程管理 Counter-Strike: Source 游戏服务器的核心工具。它提供快速、直接的管理功能访问，并通过密码认证保障访问安全。合理且安全的配置对于确保服务器稳定运行和防止未授权访问至关重要。

如有任何疑问或需要帮助，欢迎随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />