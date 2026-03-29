---
id: over-the-top-wwi-whitelist
title: "Over the Top WWI：配置白名单"
description: "了解如何在你的 Over the Top WWI 服务器上启用和管理白名单 → 立即了解更多"
sidebar_label: 白名单
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

白名单功能让你可以限制对 **Over the Top WWI** 服务器的访问，只有被批准的玩家才能加入。这对于私人服务器、社区或测试环境特别有用，可以有效控制访问权限。

启用白名单后，只有白名单文件中列出的玩家才能连接到服务器。

<InlineVoucher />

## 配置

白名单配置在服务器配置文件中进行。你可以在 **游戏服务器管理面板** 的 **配置** 里找到并编辑这个文件。定位并打开 `ServerConfiguration.ini` 配置文件，在文件中找到以下参数：

```
WhiteListIsEnabled = True
WhiteListPathString = Whitelist.txt
```

- `WhiteListIsEnabled` 用于启用或禁用白名单系统

- `False` → 禁用
- `True` → 启用

- `WhiteListPathString` 定义存储允许玩家ID的文件名

启用白名单后，只有指定文件中列出的玩家才能加入服务器。

## 管理白名单

白名单文件通常位于你的服务器目录下，里面包含允许访问的玩家ID列表。

每个玩家ID需单独占一行：

```
SteamID1
SteamID2
SteamID3
```

确保使用正确的玩家标识符，否则访问会被拒绝。更新白名单文件或修改 `ServerConfiguration.ini` 后，保存更改并重启服务器，白名单设置才会生效。

## 总结

恭喜你！你已经成功配置了 **Over the Top WWI 服务器** 的白名单。这样你就能控制谁能访问你的服务器，保持一个私密或受控的环境。

如果有任何问题或需要帮助，随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />