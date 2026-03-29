---
id: over-the-top-wwi-configure-auto-balance
title: "Over the Top WWI：配置自动队伍平衡"
description: "了解如何在你的 Over the Top WWI 服务器上配置自动队伍平衡 → 立即了解更多"
sidebar_label: 自动队伍平衡
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

队伍平衡对于 **Over the Top WWI** 中公平且有趣的对战至关重要。没有合理的平衡，一方可能会获得显著优势，导致游戏体验不均衡，玩家体验变差。

自动平衡系统通过在满足特定条件时自动重新分配玩家到不同队伍，帮助维持公平。

<InlineVoucher />

## 配置

自动队伍平衡的设置在服务器配置文件中完成。你可以在 **游戏服务器管理面板** 的 **配置** 里找到并编辑该文件。定位并打开 `ServerConfiguration.ini` 配置文件，找到以下参数：

```
EnableAutobalance = 1
TeamPercentsAutoBalance = 50
AutoBalanceThreshold = 5
MinAutoBalanceCount = 15
LimitTeamSelection = 0
```

- `EnableAutobalance` 用于启用或禁用自动队伍平衡

- `0` → 关闭
- `1` → 开启

- `TeamPercentsAutoBalance` 定义期望的队伍比例。例如：`50` = 队伍人数均等
- `AutoBalanceThreshold` 定义触发平衡的允许最大人数差
- `MinAutoBalanceCount` 定义自动平衡生效所需的最小玩家数
- `LimitTeamSelection` 限制玩家手动选择队伍

- `0` → 不限制
- `1–3` → 根据数值限制队伍选择

修改完 `ServerConfiguration.ini` 后，保存文件并重启服务器。自动平衡系统将在比赛中自动管理队伍分配。

## 总结

恭喜你！你已成功配置了 **Over the Top WWI 服务器** 的自动队伍平衡。这将确保比赛公平，提升所有玩家的整体体验。

如有任何疑问或需要帮助，欢迎随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />