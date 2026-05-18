---
id: assetto-competizione-slot-requirement
title: "Assetto Corsa Competizione：车辆槽位前置条件"
description: "了解如何通过满足关键前置条件，在 Assetto Corsa 中解锁超过 10 个槽位，提升游戏体验 → 立即了解更多"
sidebar_label: 车辆槽位前置条件
services:
  - gameserver-assetto-competizione
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

在 Assetto Corsa 中，默认可以正确使用 10 个槽位，无需额外修改。但如果想使用超过 10 个槽位，就必须满足一定的前置条件。这些前置条件设置在“**Configs**”中，需要编辑其中的“**settings.json**”。

![](https://screensaver01.zap-hosting.com/index.php/s/QbA5ZaeFywt974J/preview)

<InlineVoucher />

## 准备与槽位限制

要使用超过 10 个槽位，必须调整 **"trackMedalsRequirement": X,** 和 **"safetyRatingRequirement": X,** 这两个数值。
具体需要设置多高，可以用下面的公式计算。
同样，这个公式也能用来计算所需的 trackMedalRequirement 和 safetyRatingRequirement。

```
Slots = safetyRating / 4 + trackMedals + 10 
```

### 可能组合列表

下面列出了可用的组合，帮助你达到想要的槽位数。
实现必要槽位前置条件的方法不止一种，所以列表中也展示了不同的组合方案。

:::info
注意，表中 safetyRatingRequirement 和 trackMedalRequirement 是输入的**最低**前置条件。当然，也可以用更高的 safetyRatingRequirement 和 trackMedalRequirement 来托管更少的槽位。
:::

槽位数 | safetyRatingRequirement | trackMedalRequirement
-----|-------|---------
10-16 | 24 | 0
18 | 40 | 0
18 | 24 | 2
20 | 40 | 0
20 | 30 | 3
22 | 50 | 0
22 | 40 | 2
24 | 60 | 0
24 | 50 | 2
26 | 70 | 0
26 | 60 | 1
28 | 80 | 0
28 | 70 | 1
30 | 90 | 0
30 | 80 | 1

<InlineVoucher />