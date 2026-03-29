---
id: over-the-top-wwi-configure-weather
title: "Over the Top WWI：配置天气"
description: "了解如何在你的 Over the Top WWI 服务器上配置天气设置 → 立即了解更多"
sidebar_label: 天气
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

**Over the Top WWI** 中的天气设置会直接影响游戏玩法、能见度和氛围。通过调整这些数值，你可以营造清晰的战斗环境，实现平衡对抗，或者引入雾、雨、暴风雨等挑战性天气。

自定义天气配置让你能够塑造整体体验，使比赛更加动态和沉浸。

<InlineVoucher />

## 配置

天气设置在服务器配置文件中进行配置。你可以在 **游戏服务器管理面板** 的 **配置** 里找到并编辑该文件。定位并打开 `ServerConfiguration.ini` 配置文件，在文件中找到以下参数：

```
EnableRandomWeather = 1
CurrentWeather = 0
CloudCoverage = 20
TimeToChangeWeather = 180
TimeToChangeClouds = 180
```

- `EnableRandomWeather` 用于开启或关闭动态天气变化

- `0` → 关闭
- `1` → 开启

- `CurrentWeather` 定义当前天气类型

- `0` → 晴朗
- `1` → 雨天
- `2` → 雾天
- `3` → 下雪
- 加 `+3` 表示更强烈的版本

- `CloudCoverage` 控制天空中云层覆盖的多少

- 数值越低，天空越晴朗
- 数值越高，云层越密集

- `TimeToChangeWeather` 定义天气变化的时间间隔（秒）

- `TimeToChangeClouds` 控制云层状态更新的频率

其他环境设置：

```
WindStrength = 2
WindDirection = 0
ChanceOfLightningOccuring = 100
LightningTimer = 6
CanLightningKill = 1
```

- `WindStrength` 控制风力对游戏的影响强度
- `WindDirection` 定义风向
- `ChanceOfLightningOccuring` 设置闪电发生的概率
- `LightningTimer` 控制闪电出现的频率
- `CanLightningKill` 决定闪电是否会对玩家造成伤害

修改完 `ServerConfiguration.ini` 后，保存文件并重启服务器。新的天气设置将自动生效。

## 结语

恭喜你！你已经成功配置了 **Over the Top WWI 服务器** 的天气设置。调整这些参数可以让你打造动态的环境，提升玩家的游戏体验。

如果有任何问题或需要帮助，随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />