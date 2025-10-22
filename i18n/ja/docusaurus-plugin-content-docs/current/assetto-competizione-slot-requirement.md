---
id: assetto-competizione-slot-requirement
title: "Assetto Corsa Competizione：車両スロットの前提条件"
description: "Assetto Corsaで10スロット以上をアンロックする方法をチェックして、より充実したプレイ体験を → 今すぐ詳しく見る"
sidebar_label: 車両スロットの前提条件
services:
  - gameserver-assetto-competizione
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Assetto Corsaでは、10スロットまでは特に設定を変えずに使えます。でも、10スロット以上を使いたいなら、いくつかの前提条件をクリアする必要があります。この条件は「**Configs**」の中にあり、そこで「**settings.json**」を編集しなければなりません。

![](https://screensaver01.zap-hosting.com/index.php/s/QbA5ZaeFywt974J/preview)

<InlineVoucher />

## 準備とスロット制限

10スロット以上を使うには、**"trackMedalsRequirement": X,** と **"safetyRatingRequirement": X,** の値を調整する必要があります。  
これらの値をどれくらいに設定すればいいかは、以下の計算式で求められます。  
同じ計算式を使って、希望のtrackMedalRequirementとsafetyRatingRequirementの値も算出可能です。

```
Slots = safetyRating / 4 + trackMedals + 10 
```

### 可能な組み合わせリスト

以下に、希望のスロット数を使うために設定できる組み合わせの例をリストアップしています。  
必要なスロット前提条件を満たす方法は複数あるので、いくつかのパターンを紹介しています。

:::info
safetyRatingRequirementとtrackMedalRequirementには**最小限の**前提条件を記載しています。もちろん、これらの値を大きくして少ないスロット数でホストすることも可能です。
:::

スロット数 | safetyRatingRequirement | trackMedalRequirement
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