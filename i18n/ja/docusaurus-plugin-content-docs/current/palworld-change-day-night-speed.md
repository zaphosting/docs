---
id: palworld-change-day-night-speed
title: "Palworld: 昼夜の速度変更"
description: "Palworldでサーバーの昼夜サイクル設定を編集して昼夜の速度を変更する方法を学びましょう。 -> 今すぐ詳しく見る"
sidebar_label: Palworld: 昼夜の速度変更
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworldでは、サーバー上の昼夜サイクルの進行速度を調整できます。このガイドでは、ZAP-Hostingのゲームサーバー管理画面で正しい設定ファイルを編集し、昼夜の速度を変更する方法を説明します。

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

開始する前に、ZAP-HostingのウェブインターフェースからPalworldゲームサーバーにアクセスでき、サーバー設定ファイルを編集する権限があることを確認してください。

:::info 手動設定が必要です
この設定はサーバーの設定ファイルを手動で編集して行います。ゲーム内の自動コマンドではなく、直接Palworldの設定を編集する必要があります。
:::

## 設定ファイルの場所を特定する

昼夜の速度を変更するには、`PalWorldSettings.ini`ファイルを編集します。

ZAP-Hostingのゲームサーバー管理画面では、**Configs**セクションからこのファイルにアクセスできます。ウェブインターフェースでPalworldサーバーを開き、設定ファイル管理エリアに移動してください。

対象ファイルは以下です：

```ini
PalWorldSettings.ini
```

:::note 設定ファイルの場所について
ゲームサーバーテンプレートやパネルのレイアウトによって異なりますが、ZAP-Hosting管理画面の**Configs**エリアで提供されています。インターフェースに完全な内部パスが表示される場合、それは通常ゲームプレイ設定用のPalworldサーバー設定ファイルです。
:::

## 昼夜の速度設定を編集する

`PalWorldSettings.ini`内で、昼夜の速度に関するゲームプレイ設定項目を探します。

以下の値を調整してください：

| 設定キー | デフォルト値 | 説明 |
| --- | --- | --- |
| `DayTimeSpeedRate` | `1.000000` | 昼の進行速度を制御 |
| `NightTimeSpeedRate` | `1.000000` | 夜の進行速度を制御 |

値が大きいほど時間が速く進み、小さいほど遅くなります。

### 設定例

昼夜ともに速く進めたい場合は、以下のように高い値を設定します：

```ini
DayTimeSpeedRate=2.000000
NightTimeSpeedRate=2.000000
```

昼を長く、夜を速くしたい場合は、異なる値を使えます：

```ini
DayTimeSpeedRate=0.500000
NightTimeSpeedRate=2.000000
```

### 設定値の配置場所

Palworldは多くのゲームプレイ設定を`PalWorldSettings.ini`の`OptionSettings`セクション内に保存しています。`DayTimeSpeedRate`と`NightTimeSpeedRate`の既存のエントリを編集し、重複して別の場所に追加しないでください。

典型的なセクションは以下のようになります：

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000)
```

編集後は例えばこうなります：

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(DayTimeSpeedRate=2.000000,NightTimeSpeedRate=1.500000,ExpRate=1.000000,PalCaptureRate=1.000000)
```

:::caution 既存エントリの編集は慎重に
`DayTimeSpeedRate=`と`NightTimeSpeedRate=`の値のみを変更してください。カンマや括弧、その他の設定を削除しないでください。不正なフォーマットはサーバーが設定を正しく読み込めなくなる原因になります。
:::

## 変更を保存して適用する

`PalWorldSettings.ini`の値を更新したら、ZAP-Hostingの設定エディターでファイルを保存してください。

保存後、Palworldサーバーを再起動して新しい昼夜サイクル設定を反映させます。

| 操作 | 必要か |
| --- | --- |
| `PalWorldSettings.ini`の保存 | はい |
| サーバーの再起動 | はい |
| 追加のコンソールコマンド実行 | いいえ |

:::tip 再起動が必要です
Palworldのワールド設定の変更は、サーバーを再起動しないと確実に適用されません。昼夜の速度を変更したら必ずサーバーを再起動してください。
:::

## 新しい昼夜サイクルの確認

再起動が完了したらサーバーに接続し、ゲーム内の時間の進み方を確認してください。

以下のことが確認できるはずです：

- **昼**の進行速度が`DayTimeSpeedRate`に応じて速くまたは遅くなっている
- **夜**の進行速度が`NightTimeSpeedRate`に応じて速くまたは遅くなっている

速度が変わらない場合は、`PalWorldSettings.ini`を再度開いて以下を確認してください：

- 値が正しく保存されているか
- `OptionSettings`行のフォーマットが正しいか
- 変更後にサーバーを再起動したか

## 設定リファレンス

後で昼夜の設定を変更したい場合の参考に、以下の表を活用してください。

| 設定 | 例 | 結果 |
| --- | --- | --- |
| `DayTimeSpeedRate=0.500000` | 昼が遅い | 昼の時間が長くなる |
| `DayTimeSpeedRate=2.000000` | 昼が速い | 昼の時間が速く進む |
| `NightTimeSpeedRate=0.500000` | 夜が遅い | 夜の時間が長くなる |
| `NightTimeSpeedRate=2.000000` | 夜が速い | 夜の時間が速く進む |

:::note バランスの良い設定を
より自然なゲームプレイ体験を望む場合は、極端に高い値は避けてください。昼夜の変化が速すぎると、採取や探索、拠点管理の計画が難しくなります。
:::

## Conclusion

おめでとうございます。Palworldサーバーの昼夜の速度を無事に変更できました。ご不明点やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にお問い合わせください！ 🙂