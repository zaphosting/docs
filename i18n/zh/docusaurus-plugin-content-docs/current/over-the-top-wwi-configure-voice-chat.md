---
id: over-the-top-wwi-configure-voice-chat
title: "Over the Top WWI：配置语音聊天"
description: "了解如何在你的 Over the Top WWI 服务器上启用并配置语音聊天 → 立即了解更多"
sidebar_label: 语音聊天
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

语音聊天让你的 **Over the Top WWI** 服务器上的玩家能在游戏中直接沟通。这能提升协调性、团队合作和整体沉浸感，尤其是在战术场景中。

通过配置语音聊天设置，你可以控制是否允许语音通信，调整音质，并定义语音聊天在比赛中的表现方式。

<InlineVoucher />

## 配置

语音聊天设置在服务器配置文件中进行配置。你可以在 **游戏服务器管理面板** 的 **配置** 里找到并编辑这个文件。定位并打开 `ServerConfiguration.ini` 配置文件。在文件中找到以下参数：

```
VoipAllowed = 1
VoipQuality = 0
VoipDelay = 0
```

- `VoipAllowed` 用于启用或禁用服务器上的语音聊天
- `VoipQuality` 控制语音质量等级
- `VoipDelay` 设置玩家出生后多长时间（秒）才能使用语音聊天的延迟

根据你的服务器偏好和性能需求调整这些数值。对于玩家众多或带宽有限的服务器，降低音质设置可能更合适。

修改完 `ServerConfiguration.ini` 后，保存文件并重启服务器。语音聊天设置将自动生效。

## 总结

恭喜你！你已成功在 **Over the Top WWI 服务器** 上配置了语音聊天。这让玩家能更有效地沟通，提升比赛中的团队协作。

如果有任何问题或需要帮助，随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />