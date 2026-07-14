---
id: palworld-structure-damage-rate
title: "Palworld: 構造物ダメージ率"
description: "Palworldの構造物ダメージと劣化率を安全かつ正しくサーバー設定を編集して変更する方法を学びましょう。 -> 今すぐ詳しく見る"
sidebar_label: Palworld: 構造物ダメージ率
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Palworldでは、構造物が受けるダメージ量や時間経過による劣化速度をコントロールできます。このガイドでは、ZAP-Hostingのゲームサーバー管理画面で正しい設定ファイルを手動で編集し、新しい構造物ダメージ設定を適用する方法を解説します。

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## 準備

始める前に、Palworldサーバーがすでにインストールされており、ウェブ管理画面にアクセスできることを確認してください。

:::info 必要なアクセス権
ZAP-Hostingのゲームサーバー管理パネルと、Palworldサーバーの「Configs」エリアへのアクセスが必要です。
:::

:::note 手動設定について
この設定はPalworldの設定ファイルを手動で編集して行います。本ガイドではワンクリックの切り替え操作による変更はありません。
:::

## 正しい設定ファイルを開く

構造物のダメージと劣化を変更するには、`PalWorldSettings.ini`ファイルを編集します。

ZAP-Hostingのゲームサーバー管理画面で：

1. **Palworld**サーバーを開く。
2. **Configs**に移動する。
3. `PalWorldSettings.ini`ファイルを開く。

このファイルには、構造物関連の倍率を含むサーバーの主要なゲームプレイ設定値が含まれています。

## 構造物ダメージ設定を編集する

関連する値は`PalWorldSettings.ini`内のサーバー設定項目に保存されています。

### 関連設定キー

構造物のダメージ挙動を制御するために以下の設定を使用します：

| 設定キー | 説明 | デフォルト値 |
| --- | --- | --- |
| `BuildObjectDamageRate` | 構造物が受けるダメージ量を制御 | `1.0` |
| `BuildObjectDeteriorationDamageRate` | 構造物の時間経過による劣化速度を制御 | `1.0` |

`1.0`は通常のデフォルト倍率です。値を下げると効果が減り、上げると増加します。

### 設定例

現在のファイル内容によりますが、これらの値は通常`PalWorldSettings.ini`のサーバーオプションリストの一部です。

```ini
BuildObjectDamageRate=1.0
BuildObjectDeteriorationDamageRate=1.0
```

設定が結合されたオプション文字列の場合は、値のみを変更し、周囲の構文はそのままにしてください。

例：

```ini
OptionSettings=(BuildObjectDamageRate=1.0,BuildObjectDeteriorationDamageRate=1.0)
```

:::caution 既存の構文を保持すること
`PalWorldSettings.ini`には多くの設定が1行の`OptionSettings=(...)`内にまとめられている場合があります。その場合、編集時にカンマや括弧、既存のエントリを削除しないように注意してください。
:::

## 適切な値を選ぶ

プレイヤーが建てた構造物の耐久性に応じて倍率を調整できます。

### 構造物ダメージ倍率

`BuildObjectDamageRate`は構造物が受ける直接ダメージ量を変更します。

| 値 | 効果 |
| --- | --- |
| `0.5` | ダメージが半分になる |
| `1.0` | デフォルトの構造物ダメージ |
| `2.0` | ダメージが2倍になる |

### 構造物劣化倍率

`BuildObjectDeteriorationDamageRate`は構造物の時間経過による劣化速度を変更します。

| 値 | 効果 |
| --- | --- |
| `0.1` | 非常に遅い劣化 |
| `1.0` | デフォルトの劣化速度 |
| `2.0` | 劣化が速くなる |

:::tip 劣化の最低推奨値
`BuildObjectDeteriorationDamageRate`は`0.1`以上に設定することを推奨します。劣化を非常に低くしたり無効にすると、使われなくなった構造物が長期間残り、サーバーのクリーンアップやパフォーマンスに悪影響を及ぼす可能性があります。
:::

## ファイルを保存してサーバーを再起動する

`PalWorldSettings.ini`の値を編集したら、`Configs`セクションでファイルを保存してください。

その後、新しい構造物ダメージ設定を反映させるためにPalworldサーバーを再起動する必要があります。

### 編集後に必要な操作

| 操作 | 必須か |
| --- | --- |
| `PalWorldSettings.ini`の保存 | はい |
| サーバーの再起動 | はい |
| 追加のコンソールコマンド | 必要な確認済みコマンドなし |

:::info 再起動が必要
`BuildObjectDamageRate`と`BuildObjectDeteriorationDamageRate`の変更は、サーバーを再起動するまで確実に反映されません。
:::

## 変更を確認する

サーバーがオンラインに戻ったら、Palworldサーバーに参加して新しい挙動をテストしてください。

以下を確認して変更が適用されているか検証できます：

- 構造物が以前より多くまたは少ない直接ダメージを受けるか
- 放置された構造物や露出した構造物が期待通りの速度で劣化するか

変更が反映されていない場合は、`PalWorldSettings.ini`を再度開き、以下を確認してください：

- 設定名が正確に`BuildObjectDamageRate`と`BuildObjectDeteriorationDamageRate`であること
- 値が正しいセクションまたは`OptionSettings`行にあること
- 保存後にサーバーを再起動したこと

## 結論

Palworldサーバーの構造物ダメージと劣化率を無事に変更できました。ご不明点やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にお問い合わせください！ 🙂