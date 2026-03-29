---
id: over-the-top-wwi-configure-map-rotation-rules
title: "Over the Top WWI：配置地图轮换规则"
description: "了解如何配置你的 Over the Top WWI 服务器上的地图轮换行为 → 立即了解更多"
sidebar_label: 地图轮换
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

**Over the Top WWI** 中的地图轮换规则决定了地图如何根据玩家数量被选择和游玩。这有助于确保地图保持平衡，适合当前活跃玩家数量。

通过配置这些设置，你可以避免大地图在玩家过少时被选中，或者小地图因玩家过多而变得拥挤。

<InlineVoucher />

## 配置

地图轮换规则在服务器配置文件中进行设置。你可以在 **游戏服务器管理面板** 的 **配置** 里找到并编辑该文件。定位并打开 `ServerConfiguration.ini` 配置文件。在文件中找到以下参数：

```ini
EnableMinMaxPlayersPerMapCheck = False
```

- `EnableMinMaxPlayersPerMapCheck` 用于启用或禁用基于玩家数量的自动地图选择

  - `False` → 关闭
  - `True` → 开启

开启后，服务器会检测当前玩家数量并相应调整地图选择。这确保地图在合适的范围内被选中，有助于维持游戏的平衡性。

系统会使用内部阈值来判断地图是否合适，避免出现大地图玩家不足或小地图过于拥挤的情况。

修改完 `ServerConfiguration.ini` 后，保存文件并重启服务器。更新后的地图轮换规则将自动生效。

## 总结

恭喜你！你已经成功配置了 **Over the Top WWI 服务器** 的地图轮换规则。这有助于通过匹配地图大小和玩家数量，确保游戏体验的平衡。

如果有任何问题或需要帮助，随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />