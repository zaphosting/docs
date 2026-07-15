---
id: palworld-building-limits
title: "Palworld: 建築制限"
description: "Palworldの建築制限、拠点建築ルール、エリア制限をサーバー設定を手動で編集して変更する方法を学びましょう。 -> 今すぐ詳しく見る"
sidebar_label: Palworld: 建築制限
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworldでは、サーバー設定を通じて複数の建築制限や制約を管理できます。このガイドでは、ZAP-Hostingのゲームサーバー管理画面で正しい設定ファイルを手動で編集し、関連する建築設定を変更して正しく適用する方法を解説します。



## Preparation

開始する前に、以下を確認してください：

- ZAP-Hostingのゲームサーバー管理画面でPalworldゲームサーバーにアクセスできること
- サーバーが現在オフラインであるか、変更後に再起動する準備ができていること
- 本ガイドは一般的な建築制限とエリア制限を扱っており、ギルド固有の拠点制限は対象外であること

:::info 手動設定が必要です
これらの設定は設定ファイル内で手動で変更する必要があります。該当ファイルはZAP-Hostingのゲームサーバー管理画面の`Configs`からアクセス可能です。
:::

:::note ギルド拠点制限について
ギルドごとの拠点数制限を変更したい場合は、本ガイドではなくZAP-Docsにあるギルド拠点制限専用のガイドを参照してください。
:::

## 設定ファイルを開く

建築制限を変更するには、`PalWorldSettings.ini`ファイルを編集します。

ZAP-Hostingのゲームサーバー管理画面で：

1. Palworldサーバーを開く
2. `Configs`に移動
3. `PalWorldSettings.ini`ファイルを開く

このファイルには、Palworldサーバーの主要なワールド設定やゲームプレイ設定が含まれており、建築関連の設定も複数あります。

## 建築制限設定を編集する

関連する値は`PalWorldSettings.ini`の`OptionSettings`セクション内にあります。

### 関連設定キー

以下の設定で建築制限やエリア制限を制御します：

| 設定キー | 説明 | 例の値 |
| --- | --- | --- |
| `MaxBuildingLimitNum` | プレイヤーごとの最大建築数を設定。`0`は制限なし。 | `0` |
| `BaseCampMaxNum` | サーバー全体で許可される拠点キャンプの最大数を設定。 | `128` |
| `bBuildAreaLimit` | 特定構造物周辺の建築制限を有効にするかどうかを制御。 | `False` |

### 設定例

現在のファイル内容によりますが、これらの値は通常`OptionSettings=(...)`の行に含まれています。

```ini
OptionSettings=(MaxBuildingLimitNum=0,BaseCampMaxNum=128,bBuildAreaLimit=False)
```

既に長い`OptionSettings`行がある場合は、他の値を削除せず、該当するエントリだけを変更または追加してください。

### 各値の意味

| 設定 | 効果 |
| --- | --- |
| `MaxBuildingLimitNum=0` | プレイヤーごとの建築制限を解除 |
| `MaxBuildingLimitNum=[your_number]` | 各プレイヤーの建築数を指定した数に制限 |
| `BaseCampMaxNum=[your_number]` | サーバー全体の拠点キャンプ数を設定 |
| `bBuildAreaLimit=True` | ファストトラベルポイントなどの制限された構造物周辺での建築を禁止 |
| `bBuildAreaLimit=False` | そのエリア制限を無効化 |

:::caution 既存の構文を保持してください
`PalWorldSettings.ini`は書式に敏感です。必要な値だけを変更し、カンマや括弧、`OptionSettings=(...)`の構造はそのまま維持してください。
:::

## 変更を保存する

値を編集したら：

1. `Configs`セクションでファイルを保存
2. 書式ミスがないかもう一度確認

書式が正しくないと、サーバーが設定を無視したり正しく適用されない可能性があります。

### カスタム設定例

プレイヤーごとの建築数を`5000`に制限し、サーバー全体で拠点キャンプを最大`20`に設定し、制限エリアを有効にした例：

```ini
OptionSettings=(MaxBuildingLimitNum=5000,BaseCampMaxNum=20,bBuildAreaLimit=True)
```

プレイヤーの建築制限を解除し、エリア制限を無効にした例：

```ini
OptionSettings=(MaxBuildingLimitNum=0,BaseCampMaxNum=20,bBuildAreaLimit=False)
```

## サーバーを再起動する

設定を保存したら、Palworldサーバーを再起動して新しい設定を反映させます。

ZAP-Hostingのゲームサーバー管理画面で：

1. サーバーが稼働中なら停止する
2. サーバーを再起動する

`PalWorldSettings.ini`の変更は完全な再起動が必要です。

:::tip 変更を確実に適用するために
複数の設定を同時に変更する場合は、すべての編集を保存してから一度だけ再起動するのがおすすめです。これにより不要なダウンタイムを避けられます。
:::

## 新しい制限を確認する

サーバーがオンラインに戻ったら、接続して新しい建築挙動をテストしてください。

確認すべきポイント：

- プレイヤーが以前より多くまたは少ない建築物を設置できるか
- 拠点キャンプの総数が設定値と一致しているか
- `bBuildAreaLimit`に応じて制限された構造物周辺での建築が許可または禁止されているか

変更が反映されていない場合は、`PalWorldSettings.ini`を再度開いて以下を確認してください：

- 値が正しく保存されているか
- キーが`OptionSettings`ブロック内にあるか
- 編集後にサーバーを完全に再起動したか

## 設定リファレンス

| ファイル | ZAP-Hosting内の場所 | 編集後の必要操作 |
| --- | --- | --- |
| `PalWorldSettings.ini` | ゲームサーバー管理画面の`Configs` | サーバーの再起動 |

| 設定 | 推奨用途 |
| --- | --- |
| `MaxBuildingLimitNum` | プレイヤーごとの建築制限を管理 |
| `BaseCampMaxNum` | サーバー全体の拠点キャンプ数を管理 |
| `bBuildAreaLimit` | 保護されたマップ構造物周辺の建築許可・制限 |

## Conclusion

おめでとうございます。Palworldサーバーの建築制限を無事に変更できました。ご不明点やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にお問い合わせください！🙂