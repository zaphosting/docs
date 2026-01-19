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

白名单是一种访问控制机制，用来限制谁可以加入你的服务器。Rust 专用服务器本身不带内置白名单功能，所以主机商通常的做法是安装 uMod Oxide 和一个白名单插件，除非玩家被明确允许，否则插件会阻止连接。

<InlineVoucher />


## 启用白名单

通过 FTP 连接到你的服务器，如果还没安装 uMod Oxide，先安装它。安装好 uMod 后，将白名单插件文件 `Whitelist.cs` 上传到插件文件夹，通常路径是 `oxide/plugins/Whitelist.cs`。

插件放好后，重启服务器或重载插件让它生效。白名单插件通常通过要求玩家拥有特定权限才能连接来工作。

## 管理白名单玩家

打开 ZAP-Hosting 游戏服务器管理的实时控制台，使用玩家的 SteamID64 给他们授予白名单权限。

```text
oxide.grant user 76561198000000000 whitelist.allow
```

要撤销访问权限，移除该权限。

```text
oxide.revoke user 76561198000000000 whitelist.allow
```

要查看某个用户拥有哪些权限，可以查询他们的权限。

```text
oxide.show user 76561198000000000
```

## 验证白名单功能

尝试用没有白名单权限的账号连接，插件应该会拒绝连接。然后用你授予了 `whitelist.allow` 权限的账号连接，确认能正常访问。

如果所有人都还能加入，确认插件是否已加载且 uMod 正在运行。上传插件后重启服务器是确保插件激活的最靠谱方法。

## 总结

只要以上步骤都正确执行，你的白名单就激活了，可以精准控制谁能加入服务器。如果访问权限还是不正常，重启服务器一次，再检查文件或命令输出确认更改已生效。

有任何问题或需要帮助，随时联系在线客服，我们每天都在这里帮你！🙂

<InlineVoucher />