---
id: rust-whitelist
title: "Rust：白名单"
description: "关于如何为你的 Rust 服务器设置白名单的详细信息 → 立即了解更多"
sidebar_label: 白名单
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

白名单是一种访问控制机制，用来限制谁能加入你的服务器。Rust 专用服务器本身没有内置白名单功能，所以主机商通常会安装 uMod Oxide 和一个白名单插件，除非玩家被明确允许，否则插件会阻止连接。

<InlineVoucher />


## 启用白名单

通过 FTP 连接到你的服务器，如果还没安装 uMod Oxide，请先安装。安装完成后，将白名单插件文件 `Whitelist.cs` 上传到插件文件夹，通常路径是 `oxide/plugins/Whitelist.cs`。

插件放好后，重启服务器或重载插件以确保插件被加载。白名单插件通常通过要求玩家拥有特定权限才能连接来实现限制。

## 管理白名单玩家

打开 ZAP-Hosting 游戏服务器管理中的实时控制台，使用玩家的 SteamID64 给他们授予白名单权限。

```text
oxide.grant user 76561198000000000 whitelist.allow
```

如果要撤销访问权限，移除该权限即可。

```text
oxide.revoke user 76561198000000000 whitelist.allow
```

要查看某个用户拥有哪些权限，可以查询他们的权限列表。

```text
oxide.show user 76561198000000000
```

## 验证白名单功能

尝试用没有白名单权限的账号连接，插件应该会拒绝连接。然后用你授予了 `whitelist.allow` 权限的账号连接，确认能正常访问。

如果所有人仍然能加入，确认插件是否已加载且 uMod 正在运行。上传插件后重启服务器是确保插件生效的最靠谱方法。

## 总结

只要以上步骤都正确执行，你的白名单就已经激活，可以精准控制谁能加入服务器。如果访问权限仍有问题，重启服务器一次，再检查文件或命令输出确认更改已生效。

有任何疑问或需要帮助，随时联系在线客服，我们每天都在这里为你服务！🙂

<InlineVoucher />