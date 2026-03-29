---
id: over-the-top-wwi-configure-performance-settings
title: "Over the Top WWI：优化服务器性能"
description: "了解如何优化你的 Over the Top WWI 服务器的性能和运行表现 → 立即了解更多"
sidebar_label: 性能设置
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

**Over the Top WWI** 的性能设置会影响你的服务器运行的流畅度，尤其是在高玩家数量或大量 AI 运行时。合理配置可以提升稳定性，减少延迟，确保所有玩家都有更好的游戏体验。

通过调整这些参数，你可以在视觉模拟、AI 计算和服务器负载之间找到最佳平衡。

<InlineVoucher />

## 配置

性能设置在服务器配置文件中进行配置。你可以在 **游戏服务器管理面板** 的 **配置** 里找到并编辑这个文件。定位并打开 `ServerConfiguration.ini` 配置文件。在文件中找到以下参数：

```
TargetFPS = 0
NavCalcsPerFrame = 2000
NavMeshFrames = 1
NavMeshAutoSeed = 5
ResetIfNoPlayers = 1
```

- `TargetFPS` 定义服务器性能模式

  - `0` → 默认
  - `1` → 优化高玩家数量
  - `2` → 优化超高玩家数量

- `NavCalcsPerFrame` 控制每帧处理的导航计算次数
- `NavMeshFrames` 定义导航网格更新频率
- `NavMeshAutoSeed` 影响 AI 导航路径的生成方式
- `ResetIfNoPlayers` 当无玩家连接时自动重置服务器

  - `0` → 关闭
  - `1` → 开启

调整这些设置可以帮助提升服务器性能，尤其是在运行大量机器人或举办大型战斗时。

修改完 `ServerConfiguration.ini` 后，保存文件并重启服务器。新的性能设置将自动生效。

## 总结

恭喜你！你已经成功优化了你的 **Over the Top WWI 服务器** 的性能设置。合理调节这些参数有助于保持服务器稳定，即使在高负载情况下也能保证流畅的游戏体验。

如果有任何问题或需要帮助，随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />