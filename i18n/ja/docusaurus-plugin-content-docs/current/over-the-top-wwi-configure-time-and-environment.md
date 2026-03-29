---
id: over-the-top-wwi-configure-time-and-environment
title: "Over the Top WWI：時間と環境の設定"
description: "Over the Top WWIゲームサーバーで時間帯や環境設定を調整する方法 → 今すぐチェック"
sidebar_label: 時間と環境
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

**Over the Top WWI** の時間と環境設定は、視認性や雰囲気、ゲームプレイ全体のコンディションに影響します。これらの値を調整することで、明るい昼間の戦闘や暗いシナリオ、季節ごとに変化する環境を作り出せます。

この設定により、サーバーの見た目や雰囲気をカスタマイズし、プレイヤーの没入感を高めることが可能です。

<InlineVoucher />

## 設定方法

時間と環境の設定はサーバーの設定ファイル内で行います。**ゲームサーバー管理パネル**の**Configs**からアクセスして編集できます。`ServerConfiguration.ini`という設定ファイルを見つけて開いてください。その中に以下のパラメータがあります：

```
TimeOfDay = 8
Season = 0
TemperatureinCelcius = 0
```

- `TimeOfDay` はゲーム内の時間（時刻）を定義します
- `Season` は現在の季節を設定します

- `0` → デフォルト
- `1` → 春
- `2` → 夏
- `3` → 秋
- `4` → 冬

- `TemperatureinCelcius` は環境の温度を調整します
- これにより雰囲気や環境効果に影響を与えます

これらの設定で、早朝の戦闘や夜間戦闘、季節ごとの環境など、さまざまなシナリオを作り出せます。

`ServerConfiguration.ini`を編集後は、ファイルを保存してサーバーを再起動してください。新しい環境設定が自動的に反映されます。

## まとめ

おめでとうございます！これで**Over the Top WWIゲームサーバー**の時間と環境設定が完了しました。雰囲気を自由にカスタマイズして、プレイヤーにユニークなゲーム体験を提供できます。

ご不明点やサポートが必要な場合は、いつでもお気軽にサポートチームまでお問い合わせください。毎日対応していますよ！🙂

<InlineVoucher />