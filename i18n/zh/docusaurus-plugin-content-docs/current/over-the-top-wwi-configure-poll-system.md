---
id: over-the-top-wwi-configure-poll-system
title: "Over the Top WWI：配置投票系统"
description: "了解如何在你的 Over the Top WWI 服务器上配置投票和投票设置 → 立即了解更多"
sidebar_label: 投票系统
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

**Over the Top WWI** 的投票系统允许玩家对踢人、切换地图或修改游戏设置等各种操作进行投票。这个功能能提升社区互动，减少管理员频繁干预的需求。

通过配置投票设置，你可以控制允许哪些投票以及它们在游戏中的表现方式。

<InlineVoucher />

## 配置

投票系统的配置在服务器配置文件中完成。你可以在 **游戏服务器管理面板** 的 **配置** 里找到并编辑该文件。定位并打开 `ServerConfiguration.ini` 配置文件，找到以下参数：

```
PollPercentThresh = 51
EnableBanPlayerPoll = 0
EnableKickPlayerPoll = 0
EnableChangeMapsPoll = 0
EnableMutePlayerPoll = 0
EnableCustomPoll = 1
ChangeMapImmediately = 1
```

- `PollPercentThresh` 定义投票通过所需的百分比
- `EnableBanPlayerPoll` 允许玩家投票封禁其他玩家
- `EnableKickPlayerPoll` 允许玩家投票踢出其他玩家
- `EnableChangeMapsPoll` 允许玩家投票切换地图
- `EnableMutePlayerPoll` 允许玩家投票禁言其他玩家
- `EnableCustomPoll` 启用自定义投票选项
- `ChangeMapImmediately` 决定地图投票成功后是否立即生效

允许投票的游戏模式：

```
PollBattle = 1
PollTDM = 1
PollConquest = 1
PollSiege = 1
PollKingoftheHill = 1
PollConvoyAmbush = 1
PollCaptureTheFlag = 1
PollCommanderBattle = 1
```

这些设置定义了哪些游戏模式可以在投票中被选择。

- `1` → 启用
- `0` → 禁用

你可以禁用特定模式来限制投票选项，保持游戏体验的一致性。

修改完 `ServerConfiguration.ini` 后，保存文件并重启服务器。更新后的投票设置将自动生效。

## 结语

恭喜你！你已经成功配置了 **Over the Top WWI 服务器** 的投票系统。这样玩家就能参与决策，帮助实现服务器管理自动化。

如果有任何问题或需要帮助，随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />