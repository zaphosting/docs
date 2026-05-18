---
id: over-the-top-wwi-configure-round-settings
title: "Over the Top WWI：ラウンド設定のカスタマイズ"
description: "Over the Top WWIサーバーでラウンドの時間や試合の流れを設定する方法 → 今すぐチェック"
sidebar_label: ラウンド設定
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

**Over the Top WWI** のラウンド設定は、試合の長さやゲームプレイの進行を決める重要な要素です。これらの値を調整することで、試合のテンポやラウンドの長さ、全体のセッションの流れをコントロールできます。

特に、サクッと終わる短い試合と、じっくり戦略を練る長い試合のバランスを取るのに役立ちます。

<InlineVoucher />

## 設定方法

ラウンド設定はサーバーの設定ファイル内で行います。**ゲームサーバー管理パネル**の**Configs**からアクセスして編集可能です。`ServerConfiguration.ini`という設定ファイルを開いて、以下のパラメータを探してください：

```
MaxAmountofRounds = 3
MaxMapTime = 30
FinalRecapTimer2 = 3
PersistentMatch = 0
```

- `MaxAmountofRounds` は1試合あたりのラウンド数を指定します
- `MaxMapTime` はマップの最大プレイ時間（分）を設定します
- `FinalRecapTimer2` はラウンド終了後のリキャップ表示時間を制御します

- `PersistentMatch` はラウンド間で時間とスコアを引き継ぐかどうかを決めます

  - `0` → 無効
  - `1` → 有効

これらの値を調整して、より短い試合でテンポよく回すか、長時間のじっくりプレイにするかを自由にカスタマイズしましょう。

`ServerConfiguration.ini`を編集したら、ファイルを保存してサーバーを再起動してください。設定が自動的に反映されます。

## まとめ

おめでとうございます！これで**Over the Top WWIサーバー**のラウンド設定が完了しました。試合時間をコントロールして、より快適なゲームプレイの流れを作れます。

もし質問やサポートが必要な場合は、いつでもお気軽にサポートチームにお問い合わせくださいね！🙂

<InlineVoucher />