---
id: redm-rcon
title: "RedM：RCON"
description: "了解如何安全高效地远程管理 RedM 游戏服务器，无需进入游戏 → 立即了解更多"
sidebar_label: RCON
services:
  - gameserver-redm
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

RCON（远程控制台）是一种用于远程控制游戏服务器的网络协议。它允许访问服务器控制台，而无需直接操作服务器环境。这样就可以执行管理命令、调整配置参数或获取服务器状态信息。

在 RedM 中，RCON 用于执行服务器端命令，比如管理玩家、修改游戏设置或访问诊断输出。连接通过密码保护，并通过指定端口进行，支持兼容的 RCON 客户端访问。

RCON 的一个关键优势是它允许服务器管理**无需以玩家身份连接游戏**。服务器管理员可以通过外部工具、命令行界面或网页面板监控和控制 RedM，极大提升了远程操作的灵活性和便利性。

![img](https://screensaver01.zap-hosting.com/index.php/s/iEAHnZ6FnQdWn7e/preview)

<InlineVoucher />

## 配置

在使用 RCON 之前，必须先启用并配置它。这在游戏服务器管理的 **txAdmin** 中的 **CFG 编辑器** 部分完成。请确保配置文件中添加或调整以下内容：

```cfg
ensure rconlog
set rcon_password "your-secure-password"
```



## 通过 RCON 连接

连接到 GameXY 服务器的 RCON，推荐使用 Windows 工具 **IceCon**。你可以在其 [GitHub 仓库](https://github.com/icedream/icecon) 下载。安装完成后，在工具中新建连接，填写以下信息：

- **服务器 IP 地址**  
- **游戏端口**
- **RCON 密码**

连接成功后，IceCon 会提供图形界面，方便你向 RedM 服务器发送 RCON 命令。你可以执行标准的 RCON 命令，并在工具中实时查看命令反馈。

IceCon 还包含以下实用功能：

- 命令历史和自动补全  
- 服务器日志查看器  
- 自定义命令按钮  
- 多服务器连接配置管理



## RCON 命令

连接成功后，可以在 RedM 服务器上执行各种管理和诊断命令。可用命令取决于游戏引擎，但通常包括玩家管理、状态查询和服务器控制等操作。

| 命令                      | 说明                                               |
| ------------------------- | -------------------------------------------------- |
| `say <message>`           | 向所有玩家聊天频道发送消息                         |
| `start <resource-name>`   | 启动指定的服务器资源                               |
| `stop <resource-name>`    | 停止指定的服务器资源                               |
| `restart <resource-name>` | 重启指定的服务器资源                               |
| `ensure <resource-name>`  | 仅当资源未运行时启动它                             |
| `refresh`                 | 从资源目录重新加载所有资源                         |
| `clear`                   | 清空服务器控制台输出                               |
| `crash`                   | 强制服务器崩溃（用于调试）                         |
| `quit`                    | 干净地关闭服务器                                   |



## 总结

RCON 是远程管理 RedM 游戏服务器的核心工具。它提供快速、直接的管理访问，同时通过密码认证保障访问安全。正确且安全的配置对于保证服务器稳定运行和防止未授权访问至关重要。

如果你有任何问题或需要帮助，欢迎随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />