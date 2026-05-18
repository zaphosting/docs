---
id: rust-becomeadmin
title: "Rust：如何成为自己服务器的管理员"
description: "了解如何赋予管理员权限，实现对服务器的全面控制，轻松管理你的游戏 → 立即了解更多"
sidebar_label: 成为管理员
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
赋予管理员权限让你可以轻松且全面地管理服务器，拥有完全控制权。作为管理员，你可以直接在游戏内使用游戏提供的所有功能和选项。下面将详细介绍如何为你的服务器分配管理员权限的所有步骤。  
<InlineVoucher />

## 使用 RCON 成为管理员

通过 RCON，你可以直接运行命令让自己成为管理员。  
首先，你需要[通过 RCON 连接](rust-connectrcon.md)。

连接成功后，进入可以执行控制台命令的界面。我们这里以 RustAdmin 为例。

![](https://screensaver01.zap-hosting.com/index.php/s/zpJH32AHCySP8qT/preview)

在这里运行对应命令：  
`ownerid Steam64ID`

:::info
请将 **Steam64ID** 替换为你真实的 Steam 64位ID。你可以用这个[工具](https://steamid.io/)查询你的 Steam64 ID。
:::

执行后，你就会直接被赋予管理员权限。

:::info
如果你当时正在游戏中，执行命令后只需重新登录服务器即可生效。
:::

现在你就是管理员啦！:)

## 使用 FTP 成为管理员

另外，你也可以通过 FTP 直接给自己分配管理员权限。  
首先，连接服务器，参考[通过 FTP 访问](gameserver-ftpaccess.md)。

连接成功后，进入以下目录：

`/g#####/rust/server/<your_server_save>/cfg`

在这个文件夹里，你需要**新建一个文件**，命名为 **users.cfg**

在文件中添加你的条目，格式如下：

`<role> <Steam64ID> <reason/user>`

:::info
请将 **Steam64ID** 替换为你真实的 Steam 64位ID。你可以用这个[工具](https://steamid.io/)查询你的 Steam64 ID。
:::

示例条目如下：

```
ownerid 76561198114248380 "这里可以写任何备注"
moderatorid 76561198114248380 "测试用户"
```
:::info
修改后需要重启服务器才能生效。
:::

## 总结

恭喜你，管理员权限配置成功！如果有任何疑问或需要帮助，欢迎随时联系我们的客服团队，我们每天都在线为你服务！🙂

<InlineVoucher />