---
id: humanitz-rcon
title: "HumanitZ：RCON"
description: "了解如何使用 RCON 和 rcon-cli 远程管理你的 HumanitZ 服务器 → 立即了解更多"
sidebar_label: RCON
services:
- gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

RCON（远程控制台）是一种用于远程控制游戏服务器的网络协议。它允许管理员在不直接连接游戏的情况下执行服务器命令。这样你就可以外部管理玩家、调整设置或监控服务器活动。

在 **HumanitZ** 中，RCON 可用于执行管理命令，比如踢出玩家、发送消息或控制服务器行为。访问通过密码和专用端口进行安全保护。

RCON 的一个关键优势是它允许服务器管理 **无需以游戏内玩家身份连接**，实现灵活高效的远程管理。

<InlineVoucher />

## 配置

在使用 RCON 之前，必须先在服务器配置中启用它。打开你的服务器设置页面，启用 rcon 选项。你也可以通过配置文件进行调整。登录你的游戏服务器管理面板，进入 Configs，找到 `GameServerSettings.ini` 文件。

添加或修改以下条目：

```
RCONEnabled=true
RCONPassword=your_secure_password
RCONPort=XXXXX
```

分配的 RCON 端口可以在服务器管理中的 **端口概览** 里找到。确保密码和端口与你的配置一致。

修改完成后，保存文件并 **重启服务器**，使设置生效。

## 通过 RCON 连接

要通过 RCON 连接你的 HumanitZ 服务器，可以使用命令行工具 **rcon-cli**。它可以从官方 GitHub 仓库获取：
https://github.com/gorcon/rcon-cli

安装完成后，使用以下命令连接服务器：

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```

将占位符替换为你的服务器 IP 地址、RCON 端口和密码。

该命令允许你直接从本地系统执行 RCON 命令，无需交互式会话。

## RCON 命令

连接 RCON 后，你可以在 HumanitZ 服务器上执行各种管理命令。可用命令取决于游戏实现，但通常包括玩家管理和服务器控制。

| 命令 | 说明 |
|----------------------------------|------------------------------------------|
| `broadcast <message>`| 向所有玩家发送消息 |
| `kick <playername>`| 踢出指定玩家 |
| `ban <playername>` | 封禁指定玩家 |
| `unban <playername>` | 解除封禁玩家 |
| `save` | 保存当前游戏状态 |
| `restart`| 重启服务器 |
| `shutdown` | 关闭服务器 |
| `whitelist add <steamid>`| 将玩家添加到白名单 |
| `whitelist remove <steamid>` | 从白名单移除玩家 |

## 总结

恭喜你！你已经成功设置并使用了 **HumanitZ 服务器的 RCON**。这让你可以远程管理服务器，执行管理命令，且无需进入游戏即可掌控全局。

如果有任何问题或需要帮助，随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />