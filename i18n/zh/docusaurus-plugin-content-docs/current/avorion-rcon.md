---
id: avorion-rcon
title: "Avorion：RCON"
description: "了解如何使用 RCON 远程管理 Avorion 服务器，实现灵活且安全的控制，无需进入游戏 → 立即了解更多"
sidebar_label: RCON
services:
  - gameserver-avorion
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

RCON（远程控制台）是一种用于远程控制游戏服务器的网络协议。它允许你无需直接操作服务器环境，就能访问服务器控制台。这样你就可以执行管理命令、调整配置参数，或者获取服务器状态信息。

在 Avorion 中，RCON 用于执行服务器端命令，比如管理玩家、修改游戏设置，或者访问诊断输出。连接通过密码保护，并通过指定端口进行，支持兼容的 RCON 客户端访问。

RCON 的一个重要优势是，它让你**无需以玩家身份连接游戏**就能管理服务器。服务器管理员可以通过外部工具、命令行界面或网页面板监控和控制 Avorion，极大提升了远程操作的灵活性和便利性。

<InlineVoucher />

## 配置

在使用 RCON 之前，必须先启用并配置它。这可以直接在游戏服务器管理后台完成。在**设置**栏目下，有一个名为**RCON**的选项，必须开启并设置一个安全密码。

分配的 RCON 端口可以在设置页面底部的**端口概览**中找到。



## 通过 RCON 连接

要通过 RCON 连接 Avorion 服务器，可以使用命令行工具 **rcon-cli**。你可以从官方的 [GitHub 仓库](https://github.com/gorcon/rcon-cli) 下载。下载并安装好工具后，使用服务器的 IP 地址、RCON 端口和密码即可建立连接。

分配的端口同样在游戏服务器管理后台设置页面底部的**端口概览**中查看。密码和端口必须与面板或配置文件中设置的值一致。使用下面的命令连接并直接执行命令：

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```



## RCON 命令

连接成功后，你可以在 Avorion 服务器上执行各种管理和诊断命令。可用命令取决于游戏引擎，但通常包括玩家管理、状态查询和服务器控制等操作。

| 命令                                         | 说明                                                         |
|----------------------------------------------|--------------------------------------------------------------|
| `/save`                                      | 保存当前游戏世界                                             |
| `/status`                                    | 显示服务器和玩家状态                                         |
| `/kick <playername>`                         | 踢出指定玩家                                                 |
| `/ban <playername>`                          | 封禁指定玩家                                                 |
| `/unban <playername>`                        | 解除玩家封禁                                                 |
| `/teleport <x> <y>`                          | 传送玩家到指定的星区坐标                                     |
| `/tpto <playername>`                         | 传送到另一名玩家所在位置                                     |
| `/sethome`                                   | 设置当前星区为家园                                           |
| `/home`                                      | 传送回你的家园星区                                           |
| `/give <itemName> <amount>`                  | 给予你指定数量的物品或资源                                   |




## 总结

RCON 是远程管理 Avorion 游戏服务器的核心工具。它提供快速且直接的管理功能访问，同时通过密码认证保障访问安全。合理且安全的配置对于确保服务器稳定运行和防止未授权访问至关重要。

如果你有任何问题或需要帮助，欢迎随时联系我们的客服团队，我们每天都在线为你服务！🙂

<InlineVoucher />