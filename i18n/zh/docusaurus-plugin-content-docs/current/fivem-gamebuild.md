---
id: fivem-gamebuild
title: "FiveM：启用DLC内容"
description: "了解如何在你的FiveM服务器上强制使用特定DLC版本，畅玩最新地图、载具和内容 → 立即了解更多"
sidebar_label: 启用DLC游戏版本
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

强制游戏版本让你可以为服务器指定特定的DLC版本，畅玩最新的地图、服装、载具等内容！

<InlineVoucher />

## 可用游戏版本

以下是所有可用DLC及其Build ID一览：

| Build ID |        版本名称          |
| :------: | :---------------------: |
|   2060   | 洛圣都夏日特辑          |
|   2189   | 佩里科岛               |
|   2372   | 调校DLC                |
|   2545   | 合同                   |
|   2699   | 犯罪企业               |
|   2802   | 洛圣都毒品战争         |
|   2944   | 圣安地列斯雇佣兵       |
|   3095   | 改装车间               |
|   3258   | 底层赏金               |
|   3407   | 破坏特工               |
|   3570   | 金钱前线               |



## 启用游戏版本

如果你想使用佩里科岛、调校DLC或洛圣都夏日特辑等额外DLC内容，必须在服务器配置中设置对应版本。打开你的txAdmin面板，进入FXServer设置。

![](https://screensaver01.zap-hosting.com/index.php/s/HxmnfPEdcDJgZLX/preview)

然后在**附加参数**（Additional Arguments）栏里，使用set命令添加你想要的游戏版本，替换 `BUILD_ID_CHOICE` 为上表中的对应ID：

```
+set sv_enforceGameBuild BUILD_ID_CHOICE
```



## 总结

选好版本后，重启你的FiveM服务器。服务器将以指定的DLC版本启动。你已经成功为FiveM游戏服务器设置了游戏版本。如有任何疑问或需要帮助，欢迎随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />