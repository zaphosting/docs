---
id: palworld-enable-hardcore-mode
title: "Palworld: ハードコアモードの有効化"
description: "Palworldでハードコアモードを有効にする方法を解説します。正しいサーバー設定ファイルの編集、TrueまたはFalseの値設定、パーマデスオプションの安全な適用方法を学べます。 -> 今すぐ詳しく学ぶ"
sidebar_label: Palworld: ハードコアモードの有効化
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworldの*ハードコアモード*は、プレイヤーとオプションでパルに対してパーマデス（永久死亡）ルールを有効にします。このガイドでは、ZAP-HostingのPalworldゲームサーバーで正しい設定ファイルを編集し、サーバーを再起動してハードコアモードを手動で有効にする方法を説明します。

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

始める前に、ZAP-HostingのPalworldゲームサーバーのウェブインターフェースにアクセスできることを確認してください。また、ゲームサーバー管理の**Configs**セクションからサーバー設定ファイルを編集する権限が必要です。

:::danger 永続的なデータ損失の警告
ハードコア設定を有効にすると、死亡時にキャラクターが永久に失われる可能性があります。パルの損失も有効にすると、パルも永久に失われます。
:::

:::tip まずはバックアップを作成
ハードコアモードなどのゲームプレイ設定を変更する前に、サービスにバックアップ機能がある場合はサーバーやセーブデータのバックアップを作成することをおすすめします。
:::

## Palworld設定ファイルを開く

ハードコアモードを有効にするには、`PalWorldSettings.ini`ファイルを編集する必要があります。

ZAP-Hostingのゲームサーバー管理画面で：

1. Palworldサーバーを開く。
2. **Configs**に移動。
3. `PalWorldSettings.ini`ファイルを開く。

:::info 正しい設定ファイル
ハードコア設定は`PalWorldSettings.ini`に保存されています。別のファイルを編集してもPalworldサーバーには反映されません。
:::

## ハードコア設定を編集する

Palworldは多くのゲームプレイ設定を`PalWorldSettings.ini`の`OptionSettings`設定項目内に保存しています。該当するハードコアの値を手動で設定する必要があります。

### 必須の設定キー

以下の設定キーがハードコアの挙動を制御します：

| 設定キー | 値 | 効果 |
| --- | --- | --- |
| `bHardcore` | `True` または `False` | プレイヤーの永久死亡を有効または無効にする |
| `bPalLost` | `True` または `False` | 死亡時のパルの永久損失を有効または無効にする |
| `bCharacterRecreateInHardcore` | `True` または `False` | ハードコア死亡後に新しいキャラクターを作成可能にする |

### 推奨値の概要

| シナリオ | `bHardcore` | `bPalLost` | `bCharacterRecreateInHardcore` |
| --- | --- | --- | --- |
| プレイヤーのみパーマデス | `True` | `False` | `False` または `True` |
| パル損失も含む完全ハードコア | `True` | `True` | `False` または `True` |
| ハードコアモード無効 | `False` | `False` | `False` |

:::note TrueとFalseの値について
これらの設定はブール値を使用しているため、設定フォーマットでサポートされている通りに正確に`True`または`False`を入力してください。
:::

### 設定例

`OptionSettings`にキーが既にある場合は必要に応じて値を変更してください。存在しない場合は同じ`OptionSettings`行内に追加します。

例：

```ini
OptionSettings=(bHardcore=True,bPalLost=True,bCharacterRecreateInHardcore=True)
```

`OptionSettings`行に他の多くの設定が既に含まれている場合は、それらを削除せず、ハードコア関連のエントリのみを追加または調整してください。

:::caution 既存設定の保持
`PalWorldSettings.ini`の`OptionSettings`には多くの有効なサーバー設定が含まれていることが多いです。誤って他の値を削除すると、サーバーの他のゲームプレイオプションがリセットされる可能性があります。
:::

## 変更を保存して適用する

ファイルを編集したら：

1. `PalWorldSettings.ini`の変更を保存する。
2. ZAP-Hostingのゲームサーバー管理画面からPalworldサーバーを再起動する。

サーバーを再起動することで、更新されたハードコア設定が読み込まれます。

## ハードコアモードが有効か確認する

再起動後、サーバーに接続してハードコアルールが有効になっていることを確認してください。

### 確認すべき内容

| 設定 | 期待される挙動 |
| --- | --- |
| `bHardcore=True` | 死亡後に通常の継続ができない |
| `bPalLost=True` | パルが死亡時に永久に失われる |
| `bCharacterRecreateInHardcore=True` | ハードコア死亡後に新しいキャラクターを作成できる |

:::info 重要な挙動の注意点
ゲーム内の正確な挙動は有効にした3つのハードコア設定の組み合わせによります。プレイヤーの永久死亡は有効にしつつ、新しいキャラクターで再スタートさせたい場合は`bCharacterRecreateInHardcore=True`を有効にしてください。
:::

## トラブルシューティング

ハードコアモードが期待通りに動作しない場合は、以下を確認してください。

### ファイルが正しく編集されているか確認

ZAP-HostingのPalworldサーバーの**Configs**エリアで`PalWorldSettings.ini`を編集し、別のファイルではないことを確認してください。

### 構文をチェック

ハードコアキーは`OptionSettings=(...)`の中に正しく配置する必要があります。句読点の誤り、カンマの欠落、正しいセクション外への記述はサーバーが読み込めない原因になります。

有効な構文例：

```ini
OptionSettings=(bHardcore=True,bPalLost=False,bCharacterRecreateInHardcore=True)
```

### サーバーを再度再起動する

ファイル保存後にサーバーを再起動していない場合、新設定は反映されません。必ず完全な再起動を行い、再度テストしてください。

## Conclusion

おめでとうございます。Palworldサーバーでハードコアモードを無事に有効化できました。ご質問やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にお問い合わせください！ 🙂