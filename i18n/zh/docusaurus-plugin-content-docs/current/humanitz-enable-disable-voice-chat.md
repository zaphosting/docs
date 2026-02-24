---
id: humanitz-enable-disable-voice-chat
title: "HumanitZ：开启或关闭语音聊天"
description: "了解如何在你的 HumanitZ 服务器上开启或关闭语音聊天 → 立即了解更多"
sidebar_label: "开启/关闭语音聊天"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## 介绍

语音交流能极大地改变 HumanitZ 服务器的氛围。开启语音聊天让玩家可以在近距离内直接沟通，增强沉浸感和协作体验。关闭语音聊天则可能促使玩家使用外部通讯平台，或者营造一个更安静、更孤立的生存体验。

在 HumanitZ 中，语音聊天的设置直接在服务器配置文件里进行。

<InlineVoucher />

## 配置

语音聊天的设置在 `GameServerSettings.ini` 文件中控制。你可以在服务器管理面板的 **配置** 里找到这个文件。打开配置文件，找到以下参数：

```
;When set to 1 or true voice chat will be enabled, set 0 or false to disable
Voip=true
```

配置说明如下：

- `Voip=true` 或 `Voip=1` – 开启语音聊天  
- `Voip=false` 或 `Voip=0` – 关闭语音聊天  

要更改语音聊天设置，只需根据你的需求修改这个值。编辑完成后，保存文件并重启服务器，新的设置就会生效。

## 总结

恭喜你！通过修改 `GameServerSettings.ini` 文件中的 `Voip` 参数，你已经成功开启或关闭了 HumanitZ 服务器的语音聊天功能。如有任何疑问或需要帮助，欢迎随时联系在线客服，我们每天都在这里为你服务！🙂

<InlineVoucher />