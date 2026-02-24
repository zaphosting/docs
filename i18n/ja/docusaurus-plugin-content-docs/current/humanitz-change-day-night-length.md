---
id: humanitz-change-day-night-length
title: "HumanitZ：昼夜の長さを変更する方法"
description: "HumanitZサーバーで昼夜の長さを調整する方法をチェック → 今すぐ詳しく見る"
sidebar_label: "昼夜の長さを変更"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## はじめに

HumanitZの昼夜サイクルは、ゲームプレイ、視認性、生存難易度、全体のテンポに直接影響します。昼が短いとより緊張感のあるサバイバル体験になり、昼が長いと探索や建築、資源集めにゆったり時間を使えます。

<InlineVoucher />

## 設定方法

昼夜の長さは `GameServerSettings.ini` ファイルで管理されています。サーバーのコントロールパネルの **Configs** からアクセス可能です。ファイル内で以下のパラメータを探してください：

```
;昼の長さ（分）
DayDur=40
;夜の長さ（分）
NightDur=20
```

値は分単位で設定します：

- `DayDur` – 昼の長さを設定  
- `NightDur` – 夜の長さを設定  

サイクルの長さを変えたい場合は、数字を希望の時間に調整してください。昼を長く、夜を短くする例：

```
DayDur=60
NightDur=15
```

編集後はファイルを保存し、サーバーを再起動して設定を反映させましょう。

## まとめ

おめでとうございます！`GameServerSettings.ini` の `DayDur` と `NightDur` を変更することで、HumanitZサーバーの昼夜サイクルを自由に調整できました。質問やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にご連絡くださいね！🙂

<InlineVoucher />