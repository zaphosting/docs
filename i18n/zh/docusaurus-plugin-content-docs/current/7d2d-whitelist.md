---
id: 7d2d-whitelist
title: "7 Days To Die：白名单"
description: "关于如何为你的 7 Days To Die 服务器设置白名单的详细信息 → 立即了解更多"
sidebar_label: 白名单
services:
  - gameserver-7d2d
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

白名单是一种访问列表，用来限制谁能加入你的服务器。在 7 Days To Die 中，这通常通过 `serveradmin.xml` 文件管理，该文件存储了被允许访问的 Steam 账号。一旦启用，只有列表中的玩家才能连接。

<InlineVoucher />


## 启用白名单

通过 FTP 连接到你的服务器，找到 `serveradmin.xml` 文件。在大多数托管环境中，它位于存档目录，路径通常类似于 `7-days-to-die/Saves/<WorldName>/<SaveName>/serveradmin.xml`，或者根据提供商的不同，可能直接在 `7-days-to-die/Saves/serveradmin.xml`。打开文件，找到 `<adminTools>` 内的 `<whitelist>` 部分。

至少添加一个 SteamID64 到白名单。下面的格式是游戏默认使用的结构。

```xml
<whitelist>
  <user steamID="76561198021925107" name="PlayerName" permission_level="1000" />
</whitelist>
```

保存文件并重启服务器，让新的白名单生效。如果你的文件里只有注释示例，确保你的 `<user ... />` 行没有被 XML 注释包裹。

## 管理白名单玩家

要添加新玩家，重复在 `serveradmin.xml` 中的操作，在 `<whitelist>` 内添加新的 `<user ... />` 条目。`steamID` 使用玩家的 SteamID64。

要移除玩家，删除对应的 `<user ... />` 行，保存并重启服务器。

如果你喜欢用命令操作，可以打开 ZAP-Hosting 游戏服务器管理的实时控制台，使用内置的白名单命令添加或移除玩家。通过命令做的修改会在服务器重启时同步到同一个白名单数据文件。

## 验证白名单功能

重启后，尝试用未在白名单上的账号连接，连接请求应该会被拒绝。然后用白名单账号测试，确认能正常访问。

如果服务器仍允许非白名单玩家进入，重新检查白名单条目是否被注释掉，确认你编辑的是当前存档对应的 `serveradmin.xml` 文件。

## 总结

只要按照以上步骤操作，你的白名单就已经激活，可以精准控制谁能加入服务器。如果访问权限仍有问题，重启服务器一次，再次确认文件或命令输出，确保修改已生效。

有任何疑问或需要帮助，随时联系在线客服，我们每天都在线为你服务！🙂

<InlineVoucher />