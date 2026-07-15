---
id: palworld-change-death-penalty
title: "Palworld: 死亡ペナルティの変更"
description: "サーバー設定のDeathPenalty値を編集してPalworldの死亡ペナルティを変更する方法と再起動手順を解説します。 -> 今すぐ詳しく学ぶ"
sidebar_label: Palworld: 死亡ペナルティの変更
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Palworldでは、`DeathPenalty`サーバー設定を変更することで、プレイヤーが死亡時に失うものを制御できます。このガイドでは、ZAP-Hostingのウェブインターフェースで正しい設定ファイルを編集し、変更を適切に適用する方法を説明します。



## 準備

開始する前に、以下を確認してください：

- ZAP-HostingのウェブインターフェースでPalworldゲームサーバーにアクセスできること
- サーバーがオフラインであるか、変更後に再起動する準備ができていること
- プレイヤーに適用したい死亡時の挙動を理解していること

:::info 設定ファイルへのアクセス
ZAP-HostingのPalworldサーバーでは、関連設定はゲームサーバー管理の**Configs**から編集可能です。
:::

## Palworld設定ファイルを開く

死亡ペナルティを変更するには、`PalWorldSettings.ini`ファイルを編集する必要があります。

### ZAP-Hostingインターフェースでファイルを探す

まず、ZAP-Hostingのウェブインターフェースにログインし、Palworldゲームサーバーを開きます。次にゲームサーバー管理の**Configs**セクションに移動し、`PalWorldSettings.ini`という名前のファイルを開いてください。

このファイルには、死亡ペナルティの挙動を含むPalworldサーバーの主要なゲームプレイ設定が含まれています。

:::note 手動での設定変更について
死亡ペナルティ設定は設定ファイル内に保存されています。現在のインターフェースで明示的に用意されていない限り、別の簡易設定に頼らず手動で値を編集する必要があります。
:::

## DeathPenalty値の変更

`PalWorldSettings.ini`内の`OptionSettings`セクションでゲームプレイ設定が定義されています。ここで`DeathPenalty`の項目を見つけ、希望の値に変更してください。

### 対応しているDeathPenaltyの値

Palworldで現在使用されている`DeathPenalty`設定の値は以下の通りです：

| 値 | 効果 |
| --- | --- |
| `None` | プレイヤーは死亡時に何もドロップしません |
| `Item` | プレイヤーはアイテムをドロップしますが装備は保持します |
| `ItemAndEquipment` | プレイヤーはアイテムと装備をドロップします |
| `All` | プレイヤーはアイテム、装備、チーム内のすべてのPalsをドロップします |

:::tip 適切な設定の選び方
カジュアルなサーバー体験を望む場合は、通常`None`か`Item`が最適です。デフォルトのサバイバル体験を求めるなら`All`を使いましょう。
:::

### 設定例

多くのPalworldサーバー設定では、`OptionSettings`の長い行の一部として設定が記述されています。例：

```ini
OptionSettings=(DeathPenalty=All)
```

死亡ペナルティを完全に無効にするには、以下のように変更します：

```ini
OptionSettings=(DeathPenalty=None)
```

もしファイル内に同じ`OptionSettings=(...)`ブロックで多くの設定がある場合は、`DeathPenalty`の値だけを変更し、他の設定はそのままにしてください。例：

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,DeathPenalty=ItemAndEquipment,bEnablePlayerToPlayerDamage=False)
```

この場合は`ItemAndEquipment`の部分だけを希望の値に置き換えます。

:::caution 既存の構文を保持すること
`OptionSettings=(...)`ブロック内のカンマや括弧、その他の設定を削除しないでください。構文が正しくないとサーバーが設定を正しく読み込めなくなります。
:::

## 変更の保存と適用

`DeathPenalty`の値を編集したら、`PalWorldSettings.ini`を保存してください。

### サーバーの再起動

ファイルを保存したら、ZAP-HostingのウェブインターフェースからPalworldサーバーを再起動します。設定を反映させるために再起動が必要です。

| 操作 | 必須か |
| --- | --- |
| `PalWorldSettings.ini`の保存 | はい |
| サーバーの再起動 | はい |
| 追加のコンソールコマンド実行 | いいえ |

:::info 再起動が必要です
Palworldはこの設定をサーバー設定から読み込みます。新しい死亡挙動は完全なサーバー再起動後にのみ有効になります。
:::

## 新しい死亡設定の確認

サーバーが再起動したら、サーバーに参加してゲーム内で挙動をテストし、変更が反映されているか確認してください。

### 確認すべきポイント

選択した値に応じて、プレイヤーが以下のどれに該当するかを確認します：

- 死亡後にすべてのアイテムを保持するか
- インベントリのアイテムのみ失うか
- インベントリのアイテムと装備を失うか
- インベントリのアイテム、装備、チームのPalsすべてを失うか

設定が反映されていない場合は、`PalWorldSettings.ini`を再度開き、以下を確認してください：

- `DeathPenalty`の値が正確に綴られているか
- 変更が正しく保存されているか
- 編集後にサーバーが再起動されているか

:::danger 正確な値名を使用してください
`DeathPenalty`設定は実際には大文字小文字を区別します。必ず正確な値名`None`、`Item`、`ItemAndEquipment`、`All`を使用してください。
:::

## 結論

おめでとうございます、Palworldの死亡ペナルティを無事に変更できました。ご質問やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にお問い合わせください！🙂