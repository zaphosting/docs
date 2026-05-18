---
title: "Over the Top WWI：切换游戏模式"
description: "了解如何在你的 Over the Top WWI 服务器上切换游戏模式 → 立即了解更多"
sidebar_label: 切换游戏模式
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

**Over the Top WWI** 服务器上的游戏模式决定了比赛的玩法和玩家需要完成的目标。不同的游戏模式会显著影响游戏节奏、策略和整体体验。

通过调整游戏模式，你可以根据社区的喜好，打造专注于大规模战斗、防守玩法或目标驱动场景的服务器。

<InlineVoucher />

## 配置

游戏模式在服务器配置文件中设置。你可以在 **游戏服务器管理面板** 的 **配置** 里找到并编辑该文件。定位并打开 `ServerConfiguration.ini` 配置文件，找到以下参数：

```
CurrentGameMode = 2
```

该数值决定了服务器当前启用的游戏模式。可用数值：

- `2` → 征服模式
- `3` → 攻城模式

所选数值定义了每场比赛的核心玩法规则。

- **征服模式 (2)** 侧重于占领并守住地图上的目标点，鼓励持续移动和团队协作。
- **攻城模式 (3)** 通常更偏防守，一方进攻，另一方防守关键据点。

选择合适的模式取决于你喜欢的玩法风格和玩家人数。

修改 `ServerConfiguration.ini` 中的数值后，保存文件并重启服务器。新游戏模式将在下一场比赛或地图轮换时生效。

## 总结

恭喜你！你已成功切换了 **Over the Top WWI 服务器** 的游戏模式。通过选择合适的模式，你可以塑造更符合社区喜好的游戏体验。

如有任何疑问或需要帮助，欢迎随时联系在线客服，我们每天都在这里为你服务！🙂

<InlineVoucher />