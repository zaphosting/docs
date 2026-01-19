---
id: dayz-whitelist
title: "DayZ：白名单"
description: "关于如何为你的 DayZ 服务器开启白名单的详细信息 → 立即了解更多"
sidebar_label: 白名单
services:
  - gameserver-dayz
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

白名单是一种访问列表，用来限制谁可以加入你的服务器。DayZ 内置了白名单模式，你可以启用它并针对每个玩家进行切换。

<InlineVoucher />


## 启用白名单

通过 FTP 连接到你的服务器，打开主配置文件 `serverDZ.cfg`。找到白名单设置并启用它。

```cfg
enableWhitelist = 1;
```

接着，找到或创建你的主机提供的白名单文件，通常命名为 `whitelist.txt`，并放置在服务器配置文件所在目录。每行添加一个 SteamID64。

```txt
XXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXX
```

保存所有文件并重启服务器，使白名单生效。

## 管理白名单玩家

要添加玩家，将他们的 SteamID64 添加到 `whitelist.txt` 中，保存后重启服务器。要移除玩家，删除对应行，保存并重启服务器。

保持文件整洁，每行只写一个 ID。注释并非所有服务器都支持，所以除非确认服务器能识别，否则不要在同一行添加额外文字。

## 验证白名单功能

重启后，尝试用未列入 `whitelist.txt` 的账号连接，应该会被拒绝。然后用已列入的账号连接，确认能成功加入。

如果白名单玩家无法加入，确认你使用的是 SteamID64，并且服务器加载的是你编辑的同一个 `whitelist.txt` 文件。

## 总结

只要以上步骤都正确执行，你的白名单就已激活，可以精准控制谁能加入服务器。如果访问权限仍有问题，重启服务器一次，再检查文件或命令输出确认更改已生效。

如有更多问题或需要帮助，随时联系在线客服，我们每天都在这里为你服务！🙂

<InlineVoucher />