---
id: over-the-top-wwi-configure-weather
title: "Over the Top WWI：天気の設定方法"
description: "Over the Top WWIゲームサーバーでの天気設定方法を学ぼう → 今すぐチェック"
sidebar_label: 天気
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

**Over the Top WWI**の天気設定は、ゲームプレイ、視界、そして雰囲気に直接影響します。これらの値を調整することで、バランスの取れた戦闘のためのクリアな天候を作り出したり、霧や雨、嵐などのチャレンジングな環境を演出したりできます。

カスタム天気設定を使えば、全体の体験を自分好みに形作り、試合をよりダイナミックかつ没入感のあるものにできます。

<InlineVoucher />

## 設定方法

天気設定はサーバーの設定ファイル内で行います。**ゲームサーバー管理パネル**の**Configs**からこのファイルにアクセスして編集可能です。`ServerConfiguration.ini`という設定ファイルを見つけて開いてください。その中に以下のパラメータがあります：

```
EnableRandomWeather = 1
CurrentWeather = 0
CloudCoverage = 20
TimeToChangeWeather = 180
TimeToChangeClouds = 180
```

- `EnableRandomWeather` は動的な天気変化の有効・無効を切り替えます

- `0` → 無効
- `1` → 有効

- `CurrentWeather` は現在の天気タイプを指定します

- `0` → 晴れ
- `1` → 雨
- `2` → 霧
- `3` → 雪
- より激しいバージョンは `+3` を加えて指定

- `CloudCoverage` は空のどれだけが雲で覆われているかを制御します

- 値が低いほど空はクリアに
- 値が高いほど雲が濃くなります

- `TimeToChangeWeather` は天気が変わる頻度（秒単位）

- `TimeToChangeClouds` は雲の状態が更新される頻度

追加の環境設定：

```
WindStrength = 2
WindDirection = 0
ChanceOfLightningOccuring = 100
LightningTimer = 6
CanLightningKill = 1
```

- `WindStrength` は風の強さがゲームプレイに与える影響を制御
- `WindDirection` は風の向きを指定
- `ChanceOfLightningOccuring` は雷が発生する確率
- `LightningTimer` は雷が発生する頻度
- `CanLightningKill` は雷がプレイヤーにダメージを与えるかどうか

`ServerConfiguration.ini`を編集後は、ファイルを保存してサーバーを再起動してください。新しい天気設定が自動的に反映されます。



## まとめ

おめでとうございます！これで**Over the Top WWIゲームサーバー**の天気設定が無事に完了しました。これらの値を調整することで、ダイナミックな環境を作り出し、プレイヤーのゲーム体験をさらに向上させることができます。

もし質問やサポートが必要な場合は、いつでもお気軽にサポートチームまでご連絡ください。毎日対応していますよ！🙂

<InlineVoucher />