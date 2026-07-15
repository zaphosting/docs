---
id: palworld-collection-drop-rate
title: "Palworld: コレクションドロップ率"
description: "Palworldのコレクション設定を調整し、収集資源を増やし、Palworldゲームサーバー上でのリスポーン速度を速める方法を学びましょう。 -> 今すぐ詳細を確認"
sidebar_label: Palworld: コレクションドロップ率
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworldでは、プレイヤーが収集する資源の量や収集可能なオブジェクトの復活速度を制御できます。このガイドでは、ZAP-Hostingのゲームサーバーで正しい設定ファイルを手動で編集し、コレクションドロップ率や関連する資源設定を変更する方法を説明します。



## Preparation

始める前に、ZAP-HostingのウェブインターフェースでPalworldゲームサーバーにアクセスできること、そしてサーバーが現在オフラインであるか、変更後に再起動可能であることを確認してください。

:::info 設定ファイルへのアクセス
Palworldの関連ゲームプレイ設定は`PalWorldSettings.ini`ファイルに保存されています。ZAP-Hostingのゲームサーバー管理画面の`Configs`セクションからこのファイルにアクセスできます。
:::

## Palworld設定ファイルを開く

コレクション設定を変更するには、Palworldサーバーのメイン設定ファイルを編集する必要があります。

### ZAP-Hostingインターフェースでのファイルの場所

1. [ZAP-Hostingウェブインターフェース](https://zap-hosting.com)にログインします。
2. Palworldゲームサーバーを開きます。
3. サーバー管理の`Configs`セクションに移動します。
4. `PalWorldSettings.ini`という名前のファイルを開きます。

:::note 正しいファイル
このガイドで説明するコレクション関連の設定は`PalWorldSettings.ini`に保存されています。期待するエントリがすぐに見つからない場合は、通常`OptionSettings`の設定行内にあります。
:::

## コレクション設定を編集する

Palworldは多くのゲームプレイオプションを`PalWorldSettings.ini`の`OptionSettings`セクション内のキーと値のペアとして保存しています。収集資源を増やしたり、資源ノードの復活速度を変更したい場合は、該当する値を調整してください。

### 関連する設定キー

コレクション関連の動作に使う設定は以下の通りです：

| 設定キー | デフォルト値 | 説明 |
| --- | --- | --- |
| `CollectionDropRate` | `1.000000` | プレイヤーが収集可能な資源から得るアイテムの量を制御します。値が大きいほど収集量が増えます。 |
| `CollectionObjectRespawnSpeedRate` | `1.000000` | 収集可能なオブジェクトのリスポーン速度を制御します。値が大きいほど資源の復活が速くなります。 |
| `CollectionObjectHpRate` | `1.000000` | 岩や木などの収集可能オブジェクトのHPを制御します。値が大きいほど壊すのに時間がかかります。 |

### 設定例

収集資源を2倍にし、資源ノードのリスポーン速度も2倍にしたい場合は、両方の値を`2.000000`に設定します。

```ini
CollectionDropRate=2.000000
CollectionObjectRespawnSpeedRate=2.000000
```

さらに収集可能オブジェクトを壊しやすくしたい場合は、HP倍率を下げることもできます：

```ini
CollectionObjectHpRate=0.500000
```

:::tip 推奨の開始値
`CollectionDropRate`と`CollectionObjectRespawnSpeedRate`の両方に`2.000000`を設定するのが一般的なスタートポイントです。Palworldのゲームバランスを大きく崩さずに進行を速められます。
:::

## `PalWorldSettings.ini`での変更適用

`PalWorldSettings.ini`を開いたら、既存の`OptionSettings`エントリを見つけて、該当するキーの値を直接編集してください。

### `OptionSettings`の例

現在のサーバー設定によっては、多くの設定がすでに含まれている場合があります。コレクション関連のキーが存在する場合は値を変更し、なければ追加してください。

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=2.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=2.000000,EnemyDropItemRate=1.000000)
```

:::caution 既存の構文を保持すること
`OptionSettings`行の既存のフォーマットを必ず維持してください。カンマや括弧、他の設定を誤って削除すると、サーバーが設定を正しく読み込めなくなる可能性があります。
:::

## 保存してサーバーを再起動する

編集が完了したら、`Configs`セクションで変更を保存してください。

### 再起動の必要性

Palworldはサーバー稼働中にこれらのゲームプレイ設定変更を即時反映しません。ファイル保存後にサーバーを再起動して新しい値を読み込む必要があります。

| 操作 | 必要か |
| --- | --- |
| `PalWorldSettings.ini`の保存 | はい |
| サーバーの再起動 | はい |
| 追加のコンソールコマンド | いいえ（確認済みのコマンドなし） |

:::info 再起動が必須
`CollectionDropRate`、`CollectionObjectRespawnSpeedRate`、`CollectionObjectHpRate`を変更した場合は必ずサーバーを完全に再起動してください。これらの設定に対して追加のゲーム内やコンソールコマンドは不要です。
:::

## 新しいコレクション動作の確認

再起動が完了したら、サーバーに参加して木や石、鉱石ノードなどの収集可能オブジェクトをいくつか試してください。

### チェックポイント

- プレイヤーが1回の収集で得る資材が増えているか
- 壊した資源ノードが以前より速く復活するか
- `CollectionObjectHpRate`を変更した場合、収集可能オブジェクトが壊しやすくなったか、または壊しにくくなったか

効果が強すぎる、または弱すぎる場合は、再度`PalWorldSettings.ini`に戻って倍率を調整してください。

:::tip サーバーの微調整
よりバランスの良いPalworldのコレクション設定にしたい場合は、`1.000000`から`1.500000`など徐々に値を上げていくことをおすすめします。
:::

## 設定リファレンス

以下の表は、Palworldのコレクション設定で重要な値をまとめたものです。

| 設定 | 例 | 効果 |
| --- | --- | --- |
| `CollectionDropRate=1.000000` | デフォルト | 標準の収集資源量 |
| `CollectionDropRate=2.000000` | 増加 | 収集資源が2倍になる |
| `CollectionObjectRespawnSpeedRate=1.000000` | デフォルト | 標準のリスポーン速度 |
| `CollectionObjectRespawnSpeedRate=2.000000` | 増加 | 資源のリスポーンが速くなる |
| `CollectionObjectHpRate=1.000000` | デフォルト | 標準の収集可能オブジェクトHP |
| `CollectionObjectHpRate=0.500000` | 減少 | 収集可能オブジェクトが壊れやすくなる |

## Conclusion

おめでとうございます。Palworldサーバーでコレクションドロップ率を変更することに成功しました。ご質問やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にお問い合わせください！🙂