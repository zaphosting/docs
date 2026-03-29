---
id: over-the-top-wwi-configure-bots
title: "Over the Top WWI：ボットの設定方法"
description: "Over the Top WWIサーバーでのボット設定方法を学ぼう → 今すぐチェック"
sidebar_label: ボット
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

**Over the Top WWI** のゲームサーバーでは、空きスロットを埋めたり、大規模な戦闘をシミュレートしたり、プレイヤー数が少なくてもアクティブな状態を維持するためにボットを使えます。ボットの設定を調整することで、難易度や挙動、試合の激しさをコントロール可能です。

これにより、小規模な制御された小競り合いから、多数のAIユニットが入り乱れる大混戦まで、自由に作り出せます。

<InlineVoucher />

## 設定方法

ボットの設定はサーバーの設定ファイル内で行います。**ゲームサーバー管理パネル**の**Configs**からアクセスして編集可能です。`ServerConfiguration.ini`という設定ファイルを見つけて開いてください。ファイル内に以下のパラメータがあります：

```
AttackerBots = 45
DefenderBots = 45
AutoAssignBots = 0
BotCallinMulti = 250
SubBotForPlayer = 1
```

- `AttackerBots` は攻撃チームのボット数を指定
- `DefenderBots` は防御チームのボット数を指定
- `AutoAssignBots` はボットを自動的にチームに割り振るかどうか
  - `0` → 無効
  - `1` → 有効

- `BotCallinMulti` はボットの出現や増援の頻度を調整
- `SubBotForPlayer` はプレイヤーが参加したときにボットをリアルプレイヤーに置き換えるかどうか
  - `1` → 有効
  - `0` → 無効

### 高度なボット設定

さらに細かくボットの挙動をカスタマイズしたい場合は、以下のパラメータを調整できます：

```
BotWeightOff = 8
BotWeightRankers = 40
BotWeightHeavys = 20
BotWeightSnipers = 10
BotWeightStormTroops = 20
BotWeightSappers = 20
BotWeightSpecialists = 10
BotWeightMech = 10
BotWeightZombies = 0
```

これらの値は、ボットがスポーンする際に特定のユニットタイプが選ばれる頻度を制御します。値を上げると、そのタイプのボットが試合により多く登場します。

### ウェーブとスケーリング設定

```
WaveLegnth = 300
WaveBuildUpTime = 90
AutoAssignBotsScaleMulti = 100
```

- `WaveLegnth` はボットのウェーブが続く時間を制御
- `WaveBuildUpTime` はウェーブが完全に形成されるまでの時間
- `AutoAssignBotsScaleMulti` はプレイヤー数に応じてボット数をスケールさせる倍率

`ServerConfiguration.ini`を編集したら、ファイルを保存してサーバーを再起動してください。新しいボット設定がゲームプレイに反映されます。

## まとめ

おめでとうございます！これで**Over the Top WWIゲームサーバー**のボット設定が完了しました。これらの設定を調整することで、試合の激しさをコントロールし、プレイヤー体験を向上させ、常にサーバーをアクティブに保てます。

もし質問やサポートが必要な場合は、いつでもお気軽にサポートチームまでご連絡ください。毎日対応していますよ！🙂

<InlineVoucher />