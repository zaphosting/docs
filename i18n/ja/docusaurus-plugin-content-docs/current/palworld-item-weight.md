---
id: palworld-item-weight
title: "Palworld: アイテム重量"
description: "Palworldのアイテム重量の倍率をサーバー設定で変更して、持ち運び重量のバランスを調整する方法を学びましょう。 -> 今すぐ詳しく学ぶ"
sidebar_label: "アイテム重量"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworldでは、メインのサーバー設定ファイルの値を変更することで、サーバー上のアイテム重量を調整できます。このガイドでは、ZAP-Hostingのウェブインターフェースで正しいファイルの場所、編集すべき`item weight`設定、そして変更の適用方法を説明します。



## Preparation

始める前に、Palworldゲームサーバーがオンラインであり、ウェブ管理画面にアクセスできることを確認してください。

:::info 必要なアクセス権
ZAP-HostingのウェブインターフェースでPalworldサーバーの管理パネルにアクセスし、**Configs**から設定ファイルを編集できる必要があります。
:::

## Palworld設定ファイルを開く

アイテム重量の倍率を変更するには、`PalWorldSettings.ini`ファイルを編集します。

ZAP-Hostingのゲームサーバー管理画面で：

1. Palworldサーバーを開きます。
2. **Configs**に移動します。
3. `PalWorldSettings.ini`ファイルを開きます。

このファイルには、Palworldサーバーで使用される主要なゲームプレイ設定値が含まれています。

:::note 設定ファイルの役割
`PalWorldSettings.ini`には、ダメージ、スタミナ、ドロップ率、そして`item weight`など複数のゲームプレイ修正値が保存されています。
:::

## アイテム重量設定を編集する

`PalWorldSettings.ini`内の`OptionSettings`セクションを探し、`ItemWeightRate`の項目を見つけてください。

既に存在する場合は値を変更し、なければ`OptionSettings`のパラメータリスト内に追加します。

### 設定キー

以下の設定を使用してください：

```ini
ItemWeightRate=1.000000
```

### 値の意味

`ItemWeightRate`はサーバー上のアイテムの重量倍率を制御します。

| 設定キー | デフォルト値 | 効果 |
|---|---:|---|
| `ItemWeightRate` | `1.000000` | 標準のアイテム重量 |
| `ItemWeightRate`が`1.0`未満 | 例：`0.500000` | アイテムの重量が軽くなり、より多く持てる |
| `ItemWeightRate`が`1.0`より大きい | 例：`2.000000` | アイテムの重量が重くなり、持てる量が減る |

### 例の値

ゲームプレイのバランスに応じて、以下の例のいずれかを使用できます：

| 望む結果 | 値 |
|---|---:|
| デフォルトのアイテム重量 | `1.000000` |
| 半分のアイテム重量 | `0.500000` |
| とても軽いアイテム | `0.250000` |
| 2倍のアイテム重量 | `2.000000` |

:::tip 良い倍率の選び方
よりゆったりしたサバイバル体験を望む場合、`0.5`のような低めの`item weight`値が実用的な出発点です。重量管理のプレッシャーを減らしつつ、完全に無くすわけではありません。
:::

## 設定例

Palworldでは、これらのゲームプレイ値は通常`PalWorldSettings.ini`の`OptionSettings=(...)`行内に保存されています。ファイルには他の多くの設定が既に含まれている場合があります。

簡略化した例は以下の通りです：

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(ItemWeightRate=0.500000)
```

多くのサーバーでは、`OptionSettings`に複数の値がカンマ区切りで含まれています。その場合は、他の項目を削除せずに`ItemWeightRate`の部分だけを追加または編集してください。

例：

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,ItemDropRate=1.000000,ItemWeightRate=0.500000)
```

:::caution 既存設定を保持する重要性
意図的にリセットしない限り、`OptionSettings`行の他の値を削除しないでください。カンマや括弧、既存のエントリを削除すると設定エラーの原因になります。
:::

## 変更を保存して適用する

ファイルを編集したら：

1. `PalWorldSettings.ini`の変更を保存します。
2. Palworldサーバーを再起動します。

サーバーは起動時にこのゲームプレイ設定を読み込むため、再起動が必要です。新しい`item weight`値は再起動後に完全に適用されます。

## 新しいアイテム重量を確認する

再起動後、サーバーに参加してゲーム内でアイテムの持ち運び挙動をテストしてください。

以下のことが確認できるはずです：

- 値が低いほどアイテムの実質重量が軽くなる
- 値が高いほどアイテムの実質重量が重くなる
- 選択した倍率によってインベントリ容量の感覚が変わる

変更が反映されていない場合は、再度`PalWorldSettings.ini`を開き、以下を確認してください：

| チェック項目 | 確認内容 |
|---|---|
| 正しいファイル | `PalWorldSettings.ini`を編集したか |
| 正しい場所 | サーバー管理の**Configs**から開いたか |
| 正しいキー | `ItemWeightRate`が存在するか |
| 正しい構文 | ファイルがその形式の場合、値が`OptionSettings=(...)`行内にあるか |
| 再起動完了 | 保存後にサーバーを再起動したか |

## Conclusion

おめでとうございます。Palworldサーバーのアイテム重量設定を無事に変更できました。ご質問やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にお問い合わせください！ 🙂