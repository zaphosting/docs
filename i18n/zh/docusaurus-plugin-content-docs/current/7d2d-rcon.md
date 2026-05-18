---
id: 7d2d-rcon
title: "7 Days to Die：RCON"
description: "了解如何无需游戏内访问即可安全远程管理和控制7 Days to Die服务器，实现高效服务器管理 → 立即了解"
sidebar_label: RCON
services:
  - gameserver-7d2d
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

RCON（远程控制台）是一种用于远程控制游戏服务器的网络协议。它允许访问服务器控制台，而无需直接操作服务器环境。这样就可以执行管理命令、调整配置参数或获取服务器状态信息。

在7 Days to Die中，RCON用于执行服务器端命令，比如管理玩家、修改游戏设置或访问诊断输出。连接通过密码保护，并在指定端口上运行，可通过兼容的RCON客户端访问。

RCON的一个关键优势是，它允许服务器管理**无需以玩家身份连接游戏**。服务器管理员可以通过外部工具、命令行界面或网页面板监控和控制7 Days to Die，提供了远程操作的灵活性和便利性。

<InlineVoucher />

## 配置

在使用RCON之前，必须先启用并配置它。这可以直接在游戏服务器管理面板中完成。在**设置**部分，有一个名为**RCON**的选项，需要激活。请设置一个安全密码，并定义一个有效端口。

分配的RCON端口可以在设置页面底部的**端口概览**中找到。

启用RCON还需要编辑位于游戏服务器管理面板中**配置**下的配置文件。在名为 `serverconfig.xml` 的文件中，必须添加或修改以下条目：

```cfg
<property name="TelnetPassword" value="define-your-password-here"/>
```
分配的RCON端口同样可以在设置页面底部的端口概览中找到，必须在此处指定。

## 通过RCON连接

要通过RCON连接7 Days to Die服务器，可以使用命令行工具 **rcon-cli**。该工具可从官方[GitHub仓库](https://github.com/gorcon/rcon-cli)下载。下载并安装后，使用服务器IP地址、RCON端口和RCON密码即可建立连接。

分配的端口可在游戏服务器管理面板设置页面底部的**端口概览**中找到。密码和端口必须与面板或配置文件中配置的值一致。使用以下命令连接并直接执行命令：

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> -t telnet command
```

## RCON命令

通过RCON连接后，可以在7 Days to Die服务器上执行各种管理和诊断命令。可用命令取决于游戏引擎，但通常包括玩家管理、状态查询和服务器控制等操作。

| 命令                      | 说明                                   |
|---------------------------|----------------------------------------|
| `dm` 或 `debugmenu on`    | 启用开发者模式                         |
| `giveme <ItemName> <count>` | 给自己物品                            |
| `buffplayer <ID> <buff>`  | 给玩家添加增益效果                     |
| `tele <x> <y> <z>`        | 传送到指定坐标                         |
| `settime <seconds>`       | 设置当前游戏内时间                     |
| `setgameday <day>`        | 设置当前游戏天数                       |
| `spawnentity <ID>`        | 生成指定ID的实体                       |
| `kick <player>`           | 踢出玩家                              |
| `ban <address>`           | 封禁IP或玩家                          |
| `saveworld`               | 手动保存世界状态                       |

## 总结

RCON是远程管理7 Days to Die游戏服务器的核心工具。它提供快速、直接的管理功能访问，同时通过密码认证实现访问控制。正确且安全的配置对于保证服务器稳定和防止未授权访问至关重要。

如有任何疑问或需要帮助，欢迎随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />