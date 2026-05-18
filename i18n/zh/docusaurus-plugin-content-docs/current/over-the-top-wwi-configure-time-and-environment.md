---
id: over-the-top-wwi-configure-time-and-environment
title: "Over the Top WWI：配置时间和环境"
description: "了解如何调整你的 Over the Top WWI 服务器的时间和环境设置 → 立即了解更多"
sidebar_label: 时间与环境
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

**Over the Top WWI** 中的时间和环境设置会影响能见度、氛围以及整体游戏体验。通过调整这些参数，你可以打造明亮的白天战斗、昏暗的场景，或者多样的季节环境。

这些设置让你能够自定义服务器的视觉和感觉，提升玩家的沉浸感。

<InlineVoucher />

## 配置

时间和环境设置在服务器配置文件中进行配置。你可以在 **游戏服务器管理面板** 的 **配置** 里找到并编辑这个文件。定位并打开 `ServerConfiguration.ini` 配置文件，在文件中找到以下参数：

```
TimeOfDay = 8
Season = 0
TemperatureinCelcius = 0
```

- `TimeOfDay` 定义游戏内的小时
- `Season` 控制当前季节

- `0` → 默认
- `1` → 春季
- `2` → 夏季
- `3` → 秋季
- `4` → 冬季

- `TemperatureinCelcius` 调整环境温度
- 这会影响氛围和环境效果

这些设置让你可以创造不同的场景，比如清晨战斗、夜间作战或季节性环境。

修改完 `ServerConfiguration.ini` 后，保存文件并重启服务器。新的环境设置会自动生效。

## 结语

恭喜你！你已经成功配置了 **Over the Top WWI 服务器** 的时间和环境设置。这样你就能自定义氛围，为玩家打造独特的游戏体验。

如果有任何问题或需要帮助，随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />