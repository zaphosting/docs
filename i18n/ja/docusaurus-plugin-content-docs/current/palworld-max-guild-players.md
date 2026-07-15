---
id: palworld-max-guild-players
title: "Palworld: 最大ギルドプレイヤー数"
description: "Palworldのギルドプレイヤー数制限をサーバーのmax guild players設定を編集して変更する方法を学びましょう。 -> 今すぐ詳しく見る"
sidebar_label: "最大ギルドプレイヤー数"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Palworldでは、サーバー上の1つのギルドに参加できるプレイヤー数を制御できます。このガイドでは、ZAP-Hostingのゲームサーバー管理画面で正しい設定ファイルを編集して、最大ギルドプレイヤー数の制限を手動で変更する方法を説明します。



## 準備

始める前に、ZAP-HostingのウェブインターフェースでPalworldゲームサーバーの管理画面にアクセスできることを確認してください。

:::info 設定アクセスの必要条件
Palworldサーバーの管理画面と「Configs」セクションへのアクセスが必要です。この設定はサーバーの設定ファイルを手動で変更する必要があります。
:::

## 正しい設定ファイルを見つける

ギルドプレイヤー数の制限を変更するには、`PalWorldSettings.ini`ファイルを編集します。

ZAP-Hostingのゲームサーバー管理画面で：

1. **Palworld**サーバーを開く
2. **Configs**に移動
3. `PalWorldSettings.ini`という名前のファイルを開く

このファイルには、ギルド関連の設定を含むPalworldサーバーの主要なゲームプレイ設定値が含まれています。

## 最大ギルドプレイヤー数の設定を編集する

`PalWorldSettings.ini`内で、`OptionSettings`の設定行を探します。ギルドプレイヤー数の制限は`GuildPlayerMaxNum`キーで制御されています。

### 設定値

1つのギルドに許可する最大プレイヤー数を次の設定で定義します：

```ini
GuildPlayerMaxNum=[your_value]
```

`[your_value]`は、ギルドごとに許可したいプレイヤー数に置き換えてください。

### デフォルトと例の値

| 設定キー | 説明 | デフォルト値 |
| --- | --- | --- |
| `GuildPlayerMaxNum` | 1つのギルドに許可される最大プレイヤー数 | `20` |

例えば、ギルドごとに最大`30`人を許可したい場合は、次のように設定します：

```ini
GuildPlayerMaxNum=30
```

:::note 既存のOptionSettings行を編集する
Palworldのサーバー設定は通常、1つの`OptionSettings=(...)`エントリ内にまとめられています。新たに重複したエントリを追加するのではなく、既存の`GuildPlayerMaxNum`の値を変更してください。
:::

### 例のスニペット

設定は次のようになっているかもしれません：

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(GuildPlayerMaxNum=30)
```

ファイル内に`OptionSettings=(...)`で多くの設定がある場合は、`GuildPlayerMaxNum`の部分だけを変更し、他の値はそのままにしてください。

:::caution 重複キーを避ける
同じ設定ブロック内に`GuildPlayerMaxNum`を複数回追加しないでください。重複したキーは予期しない動作を引き起こしたり、どの値がサーバーで使用されるか不明瞭になる可能性があります。
:::

## 変更を保存して適用する

値を編集したら：

1. `PalWorldSettings.ini`の変更を保存
2. Palworldサーバーを再起動

新しいギルドプレイヤー数の制限は、サーバーの再起動後に読み込まれます。

| 操作 | 必要か |
| --- | --- |
| `PalWorldSettings.ini`の保存 | はい |
| サーバーの再起動 | はい |
| 追加のコンソールコマンド | 必要なし（確認済みなし） |

:::tip 再起動が必要
サーバー稼働中は更新した最大ギルドプレイヤー数の値は即時反映されません。設定保存後に必ずサーバーを完全に再起動してください。
:::

## 新しいギルド制限を確認する

サーバー再起動後、新しいギルドサイズ制限がPalworldサーバーでギルドに参加・管理するプレイヤーに適用されているはずです。

変更が反映されない場合は、以下を確認してください：

- 正しいファイル`PalWorldSettings.ini`を編集したか
- `GuildPlayerMaxNum`が正しく記述されているか
- 値が有効な`OptionSettings=(...)`設定内にあるか
- サーバーの再起動が正常に完了したか

:::caution 設定ファイルのフォーマットに注意
Palworldの設定ファイルはフォーマットに敏感です。`OptionSettings=(...)`内のカンマや括弧、既存の値を誤って削除すると、サーバーが設定を無視したり正しく読み込めなくなる可能性があります。
:::

## 結論

おめでとうございます。Palworldサーバーの最大ギルドプレイヤー数の制限を無事に変更できました。ご不明点やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にお問い合わせください！ 🙂