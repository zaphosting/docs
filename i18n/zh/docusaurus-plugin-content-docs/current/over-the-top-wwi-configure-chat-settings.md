---
id: over-the-top-wwi-configure-chat-settings
title: "Over the Top WWI：配置聊天设置"
description: "了解如何配置你的 Over the Top WWI 服务器的聊天和通讯设置 → 立即了解更多"
sidebar_label: 聊天设置
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

**Over the Top WWI** 中的聊天设置控制玩家在游戏中通过文字交流的方式。调整这些设置可以让你开启全局聊天、限制聊天使用，或者在必要时完全禁言玩家。

合理配置聊天功能有助于维护服务器秩序，提升整体玩家体验。

<InlineVoucher />

## 配置

聊天设置在服务器配置文件中进行配置。你可以在 **游戏服务器管理面板** 的 **配置** 选项中访问并编辑该文件。找到并打开 `ServerConfiguration.ini` 配置文件。在文件中找到以下参数：

```
AllowAllChat = 1
ServerMuteAll = 0
BannedWordsPathString = BannedWords.txt
```

- `AllowAllChat` 用于开启或关闭全局聊天功能

- `0` → 关闭
- `1` → 开启

- `ServerMuteAll` 启用后将禁用所有玩家聊天

- `0` → 关闭
- `1` → 开启

- `BannedWordsPathString` 指定用于过滤禁用词的文件路径。该文件包含一系列禁止在聊天中出现的词汇

根据需要调整这些设置，来控制玩家的聊天方式并执行聊天管理规则。

修改完 `ServerConfiguration.ini` 后，保存文件并重启服务器。更新后的聊天设置将自动生效。

## 总结

恭喜你！你已成功配置了 **Over the Top WWI 服务器** 的聊天设置。现在你可以更好地管理玩家交流，营造一个受控且愉快的游戏环境。

如果有任何疑问或需要帮助，随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />