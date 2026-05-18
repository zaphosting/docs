---
id: over-the-top-wwi-configure-map-settings
title: "Over the Top WWI：ランダムマップ設定のカスタマイズ"
description: "Over the Top WWIサーバーでランダムマップ生成設定をカスタマイズする方法 → 今すぐチェック"
sidebar_label: ランダムマップ
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

**Over the Top WWI** のランダムマップ設定では、地形や植生、環境要素が異なるマップを動的に生成できます。これによりリプレイ性が大幅にアップし、毎回ユニークな戦場を楽しめます。

これらの値を調整することで、マップのサイズや地形の複雑さ、森林や岩、建物などのオブジェクトの量をコントロール可能です。

<InlineVoucher />

## 設定方法

ランダムマップ設定はサーバーの設定ファイル内で行います。**ゲームサーバー管理パネル**の**Configs**からアクセスして編集できます。`ServerConfiguration.ini` ファイルを開き、以下のパラメータを探してください：

```
RandomMapSizee = 450
RandomFields = 8.25
RandomCivBuildings = 0
RandomMilBuildings = 0
RandomForests = 8.5
RandomSingleTrees = 1.1
RandomBush = 5
RandomRocks = 1.1
RandomNoiseSetting = 0
RandomWaterHeight = 12.25
RandomMaxTerrainHeight = 26
RandomFrequency = 5
RandomLacunarity = 3
RandomPersistence = 32
RandomDesert = 0
```

- `RandomMapSizee` は生成されるマップの全体サイズを定義
- `RandomFields`、`RandomForests`、`RandomBush`、`RandomRocks` はマップ上の自然要素の量を調整
- `RandomCivBuildings` と `RandomMilBuildings` は民間および軍事建造物の数を設定
- `RandomSingleTrees` は単独の木の配置をコントロール
- `RandomNoiseSetting`、`RandomFrequency`、`RandomLacunarity`、`RandomPersistence` は地形生成と変化に影響
- `RandomWaterHeight` は水位を定義
- `RandomMaxTerrainHeight` は標高や地形の高さを調整
- `RandomDesert` は砂漠環境の出現を決定

- `0` → 無効
- `1` → 有効
- `2` → ランダム

これらの値を調整して、密集した森林や開けた戦場、多様な地形のマップなど、様々なタイプのマップを作成できます。

`ServerConfiguration.ini` を編集後は保存してサーバーを再起動してください。次回ランダムマップ生成時に新しい設定が反映されます。

## まとめ

おめでとうございます！**Over the Top WWIサーバー**でランダムマップ設定のカスタマイズが完了しました。これでユニークでダイナミックな戦場を作り出し、リプレイ性とプレイヤー体験を向上させられます。

ご不明点やサポートが必要な場合は、いつでもお気軽にサポートチームまでお問い合わせくださいね！🙂

<InlineVoucher />