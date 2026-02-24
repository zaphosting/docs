---
id: humanitz-change-weather
title: "HumanitZ：更改天气"
description: "了解如何编辑和自定义你的人类Z服务器上的天气频率和类型 → 立即了解更多"
sidebar_label: "更改天气"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## 介绍

天气模式会影响HumanitZ的生存玩法、能见度和世界氛围。无论你想要一个以晴朗天空为主的平静环境，还是一个频繁出现暴风雪和风暴的严酷世界，调整天气设置都能让你掌控不同天气类型出现的频率。

<InlineVoucher />

## 配置

天气设置在 `GameServerSettings.ini` 文件中控制。你可以在服务器管理面板的 **配置** 里找到这个文件。在配置文件中，找到以下参数：

```
;下面你可以调整每种天气类型的出现概率。当前季节仍会决定哪些天气类型可以生成。
Weather_ClearSky=1
Weather_Cloudy=1
Weather_Foggy=1
Weather_LightRain=1
Weather_Rain=1
Weather_Thunderstorm=1
Weather_LightSnow=1
Weather_Snow=1
Weather_Blizzard=1
```

每个设置代表对应天气类型出现的**相对概率**。数值越高，该天气类型在生成时被选中的可能性越大，数值越低则概率越小。

举个例子：

- 设置 `Weather_ClearSky=3` 会增加晴朗天空出现的几率  
- 将 `Weather_Blizzard=0` 几乎禁用暴风雪生成（除非季节逻辑强制触发）



### 平静天气

这个示例优先保证平静天气，减少恶劣天气：

```
Weather_ClearSky=3
Weather_Cloudy=2
Weather_Foggy=1
Weather_LightRain=1
Weather_Rain=0
Weather_Thunderstorm=0
Weather_LightSnow=1
Weather_Snow=0
Weather_Blizzard=0
```



### 恶劣天气

这个示例增加了恶劣且多变天气的出现概率：

```
Weather_ClearSky=1
Weather_Cloudy=1
Weather_Foggy=2
Weather_LightRain=2
Weather_Rain=3
Weather_Thunderstorm=2
Weather_LightSnow=1
Weather_Snow=2
Weather_Blizzard=2
```

编辑完文件后，保存更改并重启服务器，新天气设置才会生效。



## 结语

恭喜你！通过调整 `GameServerSettings.ini` 中的天气频率数值，你已经成功自定义了HumanitZ服务器上的天气表现。如有更多问题或需要帮助，随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />