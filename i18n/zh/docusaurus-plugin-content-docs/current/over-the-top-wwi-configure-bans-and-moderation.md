---
id: over-the-top-wwi-configure-bans-and-moderation
title: "Over the Top WWI：配置封禁与管理"
description: "了解如何在你的 Over the Top WWI 服务器上配置封禁列表和管理设置 → 立即了解更多"
sidebar_label: 封禁与管理
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

**Over the Top WWI** 的管理工具让你能够掌控玩家行为，维护服务器的公平和愉快氛围。通过配置封禁列表和管理设置，你可以限制访问、管理惩罚，并为玩家提供明确的指引。

这些设置对需要积极管理的社区服务器尤其有用。

<InlineVoucher />

## 配置

封禁和管理设置在服务器配置文件中进行配置。你可以在 **游戏服务器管理面板** 的 **配置** 里找到并编辑这个文件。找到并打开 `ServerConfiguration.ini` 配置文件。在文件中找到以下参数：

```
BanPathstring = Banlist.txt
TempBanPathstring = TempBanlist.txt
CustomUnBanString =
```

- `BanPathstring` 定义了存放永久封禁玩家的文件
- `TempBanPathstring` 定义了存放临时封禁玩家的文件

- `CustomUnBanString` 允许你自定义一条消息，告诉玩家如何申请解封。例如：Discord 链接或网站地址

### 封禁文件使用说明

封禁文件位于你的服务器目录中，里面包含玩家的唯一标识符。

每个被封禁的玩家应单独占一行，格式如下：

```
SteamID1
SteamID2
SteamID3
```

服务器会自动读取这些文件，阻止列表中的玩家访问。调整这些设置可以让你定义封禁的处理方式以及玩家如何申诉。

修改完 `ServerConfiguration.ini` 后，保存文件并重启服务器。更新后的管理设置将自动生效。

## 总结

恭喜你！你已经成功配置了 **Over the Top WWI 服务器** 的封禁和管理设置。这样你就能有效管理玩家行为，保持服务器环境的良好秩序。

如果有任何问题或需要帮助，随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />