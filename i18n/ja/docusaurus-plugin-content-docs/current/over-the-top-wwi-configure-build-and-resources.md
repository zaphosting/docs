---
id: over-the-top-wwi-configure-build-and-resources
title: "Over the Top WWI：ビルドポイントとリソースの設定"
description: "Over the Top WWIサーバーでのビルドポイント、砲台、リソース制限の設定方法 → 今すぐ詳しく学ぼう"
sidebar_label: ビルドポイント＆リソース
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

**Over the Top WWI** のビルドポイントとリソース設定は、試合中にプレイヤーが設置できる建造物、防衛設備、装備の数を管理します。これらの値は特に建築や要塞化が重要なモードで、ゲームバランスに直接影響を与えます。

これらの設定を調整することで、広範囲な要塞化による防御的なプレイスタイルを作り出したり、リソースを制限してより速く攻撃的な試合展開にすることが可能です。

<InlineVoucher />

## 設定方法

ビルドポイントとリソースの設定はサーバーの設定ファイル内で行います。**ゲームサーバー管理パネル**の**Configs**からアクセスして編集可能です。`ServerConfiguration.ini`という設定ファイルを見つけて開いてください。ファイル内には以下のパラメータがあります：

```
AttackerBuildPoints = 5000
DefenderBuildPoints = 5000
AttackerCannonPoints = 250
DefenderCannonPoints = 250
SapperBPRegenAmount = 50
SapperCannonPRegenAmount = 5
SapperPropBPRegenTime = 15
CannonPropPRegenTime = 15
```

- `AttackerBuildPoints` と `DefenderBuildPoints` は、それぞれのチームが使えるビルドポイントの数を定義します

- `AttackerCannonPoints` と `DefenderCannonPoints` は、設置可能な砲台や砲兵ユニットの数を制御します

- `SapperBPRegenAmount` は時間経過で回復するビルドポイントの量を定義します

- `SapperCannonPRegenAmount` は砲台ポイントの回復速度を制御します

- `SapperPropBPRegenTime` と `CannonPropPRegenTime` は回復の間隔（秒単位）を設定します

これらの値を調整して、プレイヤーが作成できる建造物や防衛設備の数、リソースの回復速度をコントロールしましょう。

`ServerConfiguration.ini`を編集後は、ファイルを保存してサーバーを再起動してください。設定したリソース値が自動的に反映されます。

## まとめ

おめでとうございます！これで**Over the Top WWIサーバー**のビルドポイントとリソース設定が完了しました。要塞化のコントロールやゲームバランスの調整、戦闘体験のカスタマイズが可能になります。

もし質問やサポートが必要な場合は、いつでもお気軽にサポートチームまでご連絡ください。毎日対応していますよ！🙂

<InlineVoucher />