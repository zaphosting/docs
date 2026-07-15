---
id: palworld-enable-fast-travel
title: "Palworld: ファストトラベルの有効化"
description: "Palworldサーバーでのファストトラベル設定方法を解説します。拠点限定のファストトラベル設定や手動でのコンフィグ変更も含みます。 -> 今すぐ詳しく学ぶ"
sidebar_label: Palworld: ファストトラベルの有効化
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Palworldでは、サーバーのメイン設定を通じてプレイヤーのファストトラベル利用方法を制御できます。このガイドでは、ZAP-Hostingのインターフェースで正しい設定ファイルを編集し、ファストトラベルの設定を調整して適切に反映させる方法を学びます。



## 準備

始める前に、ZAP-Hostingのゲームサーバー管理画面にアクセスでき、設定ファイルの編集権限があることを確認してください。

:::info 手動設定が必要です
この設定はPalworldサーバーの設定ファイルを手動で編集して行います。必要なファイルはゲームサーバー管理の「Configs」からアクセス可能です。
:::

## 設定ファイルの場所を確認する

ファストトラベルの挙動を変更するには、`PalWorldSettings.ini`ファイルを編集する必要があります。

ZAP-Hostingのゲームサーバー管理画面で：

1. Palworldサーバーを開く
2. 「Configs」に移動
3. `PalWorldSettings.ini`ファイルを開く

このファイルにはファストトラベルを含むゲームプレイ関連のサーバー設定が含まれています。

:::note 設定ファイルの場所について
現在のパネルレイアウトによっては、ファイルはサーバー管理の「Configs」エリアで管理されています。正確なパスが表示されない場合でも、`PalWorldSettings.ini`内の必要な値を直接編集して問題ありません。
:::

## ファストトラベル設定の理解

Palworldにはファストトラベルの挙動に関する2つの重要な設定キーがあります。

| 設定キー | 値の種類 | デフォルト値 | 機能 |
| --- | --- | --- | --- |
| `bEnableFastTravel` | `True` / `False` | `True` | ファストトラベルの全体的な有効/無効 |
| `bEnableFastTravelOnlyBaseCamp` | `True` / `False` | `False` | ファストトラベルを拠点間のみに制限 |

これらの値は`PalWorldSettings.ini`内のサーバーオプション文字列の一部です。

:::tip 適切な設定を選ぶ
より没入感のある移動体験や探索を重視するならファストトラベルを完全に無効にできます。移動は制限したいがファストトラベル自体は残したい場合は、拠点限定のファストトラベルが一般的におすすめです。
:::

## ファストトラベルの値を編集する

`PalWorldSettings.ini`を開き、`OptionSettings=`セクションを探します。Palworldでは多くのサーバー設定がこのカンマ区切りの値の中に格納されています。

### 通常のファストトラベルを有効にする

標準のファストトラベルを許可するには、以下の値が含まれていることを確認してください：

```ini
bEnableFastTravel=True
```

プレイヤーが通常のすべてのファストトラベルオプションを使えるようにするには、次の値も以下のように設定してください：

```ini
bEnableFastTravelOnlyBaseCamp=False
```

### ファストトラベルを完全に無効にする

ファストトラベルを完全に無効にするには、以下のように設定します：

```ini
bEnableFastTravel=False
```

この設定では、プレイヤーは世界を手動で移動する必要があります。

### ファストトラベルを拠点間のみに制限する

拠点間のファストトラベルのみを許可したい場合は、以下の組み合わせを使います：

```ini
bEnableFastTravel=True,bEnableFastTravelOnlyBaseCamp=True
```

この設定はPvP重視のサーバーでよく使われ、プレイヤーの移動を制限しつつ限定的な移動は許可します。

:::caution 既存の構文を壊さないでください
`OptionSettings=`行の他の既存の値を意図的に変更しない限り削除しないでください。Palworldは多くの設定を1つのカンマ区切りエントリに格納しているため、誤った書式は設定の読み込み失敗を招きます。
:::

## 設定例

以下は`PalWorldSettings.ini`内の該当部分の例です：

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,bEnableFastTravel=True,bEnableFastTravelOnlyBaseCamp=True)
```

既存の設定のファストトラベル値を、希望の設定に合わせて置き換えてください。

:::note 既存のサーバー設定について
`OptionSettings=`行には通常、例よりも多くの値が含まれています。`bEnableFastTravel`と`bEnableFastTravelOnlyBaseCamp`だけを調整し、他の値はそのまま残してください。
:::

## 推奨設定

運用したいサーバースタイルに応じて、以下の組み合わせを使えます：

| サーバースタイル | `bEnableFastTravel` | `bEnableFastTravelOnlyBaseCamp` | 結果 |
| --- | --- | --- | --- |
| デフォルトのゲームプレイ | `True` | `False` | ファストトラベル全開 |
| 探索重視 | `False` | `False` | ファストトラベル完全無効 |
| PvPや移動制限あり | `True` | `True` | 拠点間のみファストトラベル可能 |

## 変更を適用する

`PalWorldSettings.ini`の変更を保存したら、サーバーを再起動して新しい設定を反映させます。

### サーバーの再起動

ファイル保存後、ZAP-Hostingのゲームサーバー管理画面の再起動機能を使ってサーバーを再起動してください。

通常、この変更に対してゲーム内やコンソールでの追加コマンドは不要です。サーバー再起動時に新しいファストトラベル設定が適用されます。

:::info 再起動が必要です
`PalWorldSettings.ini`の変更は、Palworldサーバーを再起動するまで確実に反映されません。
:::

## 結果を確認する

サーバーがオンラインに戻ったら、ゲーム内に参加してファストトラベルの挙動をテストしてください。

以下を確認しましょう：

- ファストトラベルが有効なら正常に動作するか
- 無効ならファストトラベルオプションがないか
- 拠点限定なら拠点間のみ移動できるか

:::tip 挙動がおかしい場合の対処
設定が反映されない場合は、`PalWorldSettings.ini`の`OptionSettings=`行の書式ミス（カンマの抜け、キーの重複、`True`/`False`の誤記など）を再確認してください。
:::

## まとめ

おめでとうございます。Palworldサーバーでファストトラベルの有効化または設定変更に成功しました。ご不明点やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にお問い合わせください！ 🙂