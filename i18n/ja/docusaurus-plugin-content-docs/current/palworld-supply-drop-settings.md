---
id: palworld-supply-drop-settings
title: "Palworld: Supply Drop 設定"
description: "PalworldゲームサーバーでSupplyDropSpan設定を手動で編集して、Palworldのサプライドロップの頻度を変更する方法を学びましょう。 -> 詳しくはこちら"
sidebar_label: Palworld: Supply Drop 設定
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworldには、一定時間ごとに出現するサプライドロップがあり、ゲームプレイ中に役立つリソースを提供します。このガイドでは、ZAP-HostingのPalworldゲームサーバーで正しい設定ファイルを編集して、サプライドロップの頻度を手動で変更する方法を説明します。

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

開始する前に、ZAP-HostingのウェブインターフェースでPalworldゲームサーバーにアクセスでき、サーバー設定ファイルを編集する権限があることを確認してください。

:::info 手動設定が必要です
この設定はサーバー管理の**Configs**から手動で行います。設定を変更した後は、Palworldが更新された設定を読み込むためにサーバーを再起動する必要があります。
:::

## 正しい設定ファイルを見つける

サプライドロップの間隔を変更するには、`PalWorldSettings.ini`ファイルを編集します。

ZAP-Hostingのウェブインターフェースで：

1. Palworldゲームサーバーの管理画面を開きます。
2. **Configs**に移動します。
3. `PalWorldSettings.ini`ファイルを開きます。

このファイルには、サプライドロップのタイマー設定を含むPalworldサーバーの主要なゲームプレイ設定値が含まれています。

## サプライドロップ設定を編集する

`PalWorldSettings.ini`内で、`OptionSettings`セクションを探し、`SupplyDropSpan`エントリを見つけます。

関連する設定キーは以下の通りです：

| 設定 | 説明 | 例 |
| --- | --- | --- |
| `SupplyDropSpan` | サプライドロップの間隔（分単位）を定義 | `180` |

すでにエントリがある場合は、希望の間隔に値を変更してください。

### 例の値

以下の値を参考にできます：

| 値 | 結果 |
| --- | --- |
| `30` | 非常に頻繁なサプライドロップ |
| `60` | 1時間ごとのサプライドロップ |
| `180` | デフォルト設定、3時間ごと |
| `360` | 6時間ごとのサプライドロップ |

### 例の設定

現在のファイル内容によっては、設定は大きな`OptionSettings`行の一部として表示されます。例：

```ini
OptionSettings=(SupplyDropSpan=180)
```

ファイルにすでに多くの設定が同じ`OptionSettings=(...)`ブロックに含まれている場合は、`SupplyDropSpan`の値だけを変更し、他の既存のエントリはそのままにしてください。

例：

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,SupplyDropSpan=60)
```

:::caution 既存の設定を保持してください
`SupplyDropSpan`を編集する際に、`OptionSettings`ブロック内の他の値を削除しないでください。カンマや括弧、他のエントリを誤って削除すると、Palworldの設定が正しく読み込まれなくなる可能性があります。
:::

## 変更を保存して適用する

`SupplyDropSpan`の値を更新したら：

1. `PalWorldSettings.ini`の変更を保存します。
2. ZAP-Hostingのサーバー管理画面からPalworldサーバーを再起動します。

サーバーがすでに稼働中の場合、この設定はライブで適用されないため、再起動が必要です。

:::note 追加のコマンドは不要です
この変更に対して、通常はゲーム内やコンソールでの追加コマンドは不要です。設定を適用するにはサーバーの再起動が必要です。
:::

## 新しいサプライドロップ間隔を確認する

再起動後、サーバーは新しい`SupplyDropSpan`の値を使用します。ゲームプレイ中のサプライドロップイベント間の時間を監視して、変更が反映されているか確認できます。

変更が反映されていない場合は、以下を確認してください：

| チェック項目 | 確認内容 |
| --- | --- |
| 正しいファイル | `PalWorldSettings.ini`を編集したか |
| 正しい場所 | サーバー管理の**Configs**からファイルを開いたか |
| 正しい構文 | `SupplyDropSpan`が正しく記述され、`OptionSettings`ブロック内にあるか |
| サーバー再起動 | 保存後にサーバーを完全に再起動したか |

:::tip バランスの良い値を選ぶ
非常に低い値にすると、通常のPalworldプレイでサプライドロップが意図以上に頻繁に出現します。頻度を上げたいが過剰にはしたくない場合は、`60`が一般的に適切な開始値です。
:::

## Conclusion

Palworldサーバーのサプライドロップ頻度を無事に変更できました。ご質問やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にお問い合わせください！ 🙂