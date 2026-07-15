---
id: palworld-change-hp-regeneration
title: "Palworld: HP回復速度の変更"
description: "PalworldでプレイヤーとPalの回復設定をサーバー上で編集し、回復速度を速くしたり遅くしたり無効化する方法を学びましょう -> 今すぐ詳しく"
sidebar_label: "HP回復速度の変更"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Palworldでは、プレイヤーとPalの回復設定をメインのサーバー設定から変更できます。このガイドでは、ZAP-Hostingのウェブインターフェースで正しい設定ファイルを編集し、HP回復値を調整して変更を適用する方法を解説します。



## 準備

開始する前に、Palworldサーバーがオンラインであり、ZAP-Hostingのパネルからウェブ管理にアクセスできることを確認してください。

:::info 設定編集のためのアクセス権
ゲームサーバーの管理と`Configs`エリアへのアクセス権が必要です。これによりPalworldの設定ファイルを手動で編集できます。
:::

## Palworld設定ファイルを開く

HP回復速度を変更するには、`PalWorldSettings.ini`ファイルを編集します。

ZAP-Hostingのゲームサーバー管理画面で：

1. Palworldサーバーを開く。
2. `Configs`に移動する。
3. `PalWorldSettings.ini`ファイルを開く。

このファイルには、プレイヤーとPalのHP回復倍率など、サーバーの主要なゲームプレイ設定が含まれています。

:::note 手動設定変更について
現在の設定によっては、`OptionSettings`セクション内に長いパラメータ行として設定が記載されている場合があります。既存の値を慎重に編集し、フォーマットを崩さないようにしてください。
:::

## HP回復値の変更

HP回復設定は数値の倍率として保存されています。`1.0`はデフォルトの回復速度を意味します。

### 対応している回復設定

`PalWorldSettings.ini`で使用する設定キーは以下の通りです：

| 設定キー | 説明 | デフォルト値 |
| --- | --- | --- |
| `PlayerAutoHPRegeneRate` | プレイヤーの自然回復速度 | `1.0` |
| `PlayerAutoHpRegeneRateInSleep` | プレイヤーの睡眠中の回復速度 | `1.0` |
| `PalAutoHPRegeneRate` | Palの自然回復速度 | `1.0` |
| `PalAutoHpRegeneRateInSleep` | Palbox内でのPalの睡眠中回復速度 | `1.0` |

### 値の挙動

回復速度の変更には以下の値の意味を参考にしてください：

| 値 | 効果 |
| --- | --- |
| `1.0` | デフォルトの回復速度 |
| `1.0`より大きい | 回復が速くなる |
| `1.0`より小さい | 回復が遅くなる |
| `0.0` | 回復を無効化 |

:::tip 回復速度のおすすめ設定
少し楽にプレイしたい場合は`1.5`や`2.0`を試してください。より難しくしたい場合は`1.0`未満の値や`0.0`で回復を完全に無効化するのも効果的です。
:::

## 設定項目の編集

多くのPalworldサーバー設定では、これらの値は`PalWorldSettings.ini`の`OptionSettings=(...)`行内にあります。

### 設定例

項目がなければ追加し、既にあれば値を変更してください：

```ini
OptionSettings=(PlayerAutoHPRegeneRate=1.0,PlayerAutoHpRegeneRateInSleep=1.0,PalAutoHPRegeneRate=1.0,PalAutoHpRegeneRateInSleep=1.0)
```

例えば、プレイヤーとPalの自然回復を速くしたい場合は：

```ini
OptionSettings=(PlayerAutoHPRegeneRate=2.0,PlayerAutoHpRegeneRateInSleep=2.0,PalAutoHPRegeneRate=2.0,PalAutoHpRegeneRateInSleep=2.0)
```

特定の値だけ変更したい場合は、その項目だけ編集し、他の`OptionSettings`の値はそのままにしてください。

:::caution 既存のOptionSettings値を保持する重要性
`OptionSettings`行から関係ない項目を削除しないでください。このセクションには多くのゲームプレイ設定が含まれており、削除するとサーバー設定の他の部分が意図せずリセットされる可能性があります。
:::

## 変更の保存と適用

編集後はZAP-Hostingの`Configs`エリアで変更を保存してください。

新しい回復設定を反映させるには、Palworldサーバーを再起動する必要があります。

### サーバーの再起動

1. 編集した`PalWorldSettings.ini`を保存する。
2. サーバー管理画面に戻る。
3. サーバーを再起動する。

Palworldはサーバー起動時にこれらのゲームプレイ設定を読み込むため、再起動が必須です。

:::info 再起動が必要な理由
サーバー稼働中はHP回復設定の変更が即時反映されません。設定保存後に必ずサーバーを再起動してください。
:::

## 新しい回復設定の確認

サーバー再起動後、ゲーム内に参加して新しい回復挙動をテストしてください。

以下の点を確認しましょう：

- プレイヤーの自然HP回復
- プレイヤーの睡眠中の回復
- Palの自然HP回復
- Palbox内でのPalの睡眠中回復

回復が期待通りでない場合は、`PalWorldSettings.ini`を再度開き、以下を確認してください：

- 設定キーが正確に綴られているか
- 値が`1.0`や`2.0`など有効な小数であるか
- 設定が`OptionSettings`セクション内にあるか
- 保存後にサーバーを再起動したか

## まとめ

PalworldのHP回復速度を無事に変更できました。ご不明点やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にお問い合わせください！ 🙂