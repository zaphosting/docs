---
id: palworld-increase-xp
title: "Palworld: XPを増やす方法"
description: "PalworldゲームでXPを増やす方法を、Palworldサーバーの設定を編集しXP倍率を正しく調整する手順で解説します。 -> 今すぐ詳しく学ぶ"
sidebar_label: "XPを増やす方法"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Palworldでは、サーバー設定を通じてゲームプレイの倍率を調整でき、その中にはプレイヤーが獲得するXPの量も含まれます。このガイドでは、ZAP-HostingのPalworldゲームサーバーでXP倍率を増やすために、正しい設定ファイルを編集し変更を適用する方法を学びます。



## 準備

始める前に、ZAP-HostingのウェブインターフェースからPalworldゲームサーバーにアクセスでき、設定ファイルを編集する権限があることを確認してください。

:::info 設定アクセスの必要条件
`Configs`セクションで設定ファイルを編集するには、サーバーのウェブ管理画面へのアクセスが必要です。サーバー管理にアクセスできない場合は、まずZAP-Hostingパネルで製品のアクセス権を確認してください。
:::

## 設定ファイルの場所を特定する

PalworldサーバーでXPを増やすには、`PalWorldSettings.ini`ファイルを編集する必要があります。

ZAP-Hostingのゲームサーバー管理画面で：

1. Palworldサーバーを開きます。
2. `Configs`セクションに移動します。
3. `PalWorldSettings.ini`ファイルを開きます。

このファイルには、XP倍率を含むPalworld専用サーバーの主要なゲームプレイ設定が含まれています。

## XP倍率を編集する

XP獲得量に関わる設定は`ExpRate`です。

### 正しい設定を見つける

`PalWorldSettings.ini`を開き、`OptionSettings`の行またはゲームプレイ倍率が定義されているセクションを探します。

該当する設定は以下の通りです：

```ini
ExpRate=1.000000
```

### 値を変更する

`ExpRate`の値を希望する倍率に調整します。

| 設定キー | デフォルト値 | 例の値 | 効果 |
| --- | --- | --- | --- |
| `ExpRate` | `1.000000` | `2.000000` | XP獲得量が2倍になる |
| `ExpRate` | `1.000000` | `3.000000` | XP獲得量が3倍になる |

例えば、XPを2倍にするには：

```ini
ExpRate=2.000000
```

XPを3倍にするには：

```ini
ExpRate=3.000000
```

:::tip 推奨される値の形式
Palworldサーバー設定では、`1.000000`や`2.000000`のような小数形式が一般的です。同じ形式を使うことで設定が一貫し、読みやすくなります。
:::

## 設定例

現在のファイル内容によりますが、通常は`OptionSettings`ブロック内に設定が存在します。例：

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=2.000000,PalCaptureRate=1.000000)
```

`ExpRate`が既にある場合は値だけ変更してください。もし無ければ、既存の`OptionSettings=(...)`ブロック内に`ExpRate=[your_value]`を追加します。

:::caution 既存のOptionSettingsブロックを慎重に編集すること
複数の`OptionSettings`エントリを作成しないでください。ほとんどの場合、既存の`OptionSettings=(...)`行を編集し、`ExpRate`の値を変更するだけで十分です。
:::

## 保存してサーバーを再起動する

XP倍率を変更したら：

1. `PalWorldSettings.ini`の変更を保存します。
2. ZAP-Hostingのサーバー管理画面からPalworldサーバーを再起動します。

Palworldはサーバーが稼働中にこのゲームプレイ設定の変更を即時反映しないため、再起動が必要です。

| 操作 | 必要か |
| --- | --- |
| `PalWorldSettings.ini`の保存 | はい |
| サーバーの再起動 | はい |
| 追加のコンソールコマンド実行 | いいえ |

:::note 追加コマンドは不要
この設定に関しては、ゲーム内コマンドやコンソールコマンドの追加実行は通常不要です。サーバー再起動後に新しいXP倍率が適用されます。
:::

## 新しいXP倍率を確認する

サーバーがオンラインに戻ったら、サーバーに参加して敵を倒す、パルを捕まえる、通常のゲームプレイを行うなどXPが得られる行動をしてください。

XP獲得量が変わらない場合は：

- `PalWorldSettings.ini`を再度開く
- `OptionSettings`ブロック内に`ExpRate`があるか確認する
- 値が正しく`2.000000`などで書かれているか確認する
- 保存後にサーバーが完全に再起動されたか確認する

:::danger 無効な設定構文を避ける
`OptionSettings=(...)`行からカンマや括弧、その他の値を誤って削除すると、サーバーが設定を無視したり正しく読み込めなくなります。保存前に必ず行全体を確認してください。
:::

## 結論

おめでとうございます。PalworldサーバーでXP獲得倍率を無事に増やせました。ご質問やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にお問い合わせください！ 🙂