---
title: "Over the Top WWI：配置服务器消息"
description: "了解如何在你的 Over the Top WWI 服务器上设置自动服务器消息 → 立即了解更多"
sidebar_label: 服务器消息
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

自动服务器消息是游戏过程中向玩家传达重要信息的超实用方式。这些消息可以用来分享规则、推广你的 Discord 服务器，或者提供实用小贴士。

在 **Over the Top WWI** 服务器上，消息会定时显示，确保所有玩家都能收到重要信息，无需人工干预。

<InlineVoucher />

## 配置

服务器消息是在服务器配置文件中设置的。你可以在 **游戏服务器管理面板** 的 **配置** 里找到并编辑这个文件。找到并打开 `ServerConfiguration.ini` 配置文件，里面有以下参数：

```
ShowServerTimedMessages = 1
AddServerMessage = 加入官方 Discord！discord.gg/example
AddServerMessage = 请在我们的 Discord 上反馈任何 BUG。
ServerMessagesTimer = 120
```

- `ShowServerTimedMessages` 用来开启或关闭自动消息。设置为 `1` 开启，`0` 关闭。
- `AddServerMessage` 定义要显示的消息内容。你可以添加多行消息，游戏中会轮流显示。
- `ServerMessagesTimer` 定义消息间隔时间，单位是秒。比如 `120` 表示每 2 分钟显示一条消息。

你可以自由定制并添加更多消息，比如：

```
AddServerMessage = 欢迎来到服务器！
AddServerMessage = 遵守规则，尊重其他玩家。
AddServerMessage = 加入我们的 Discord 获取最新资讯。
```

修改完 `ServerConfiguration.ini` 后，保存文件并重启服务器。消息会按照设置的间隔自动在游戏内显示。

## 总结

恭喜你！你已经成功配置了 **Over the Top WWI 服务器** 的自动消息功能。这能帮你更好地通知玩家，提升服务器的整体沟通体验。

如果有任何问题或需要帮助，随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />