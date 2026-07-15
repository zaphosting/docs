---
id: palworld-technology-ids
title: "Palworld: テクノロジーID"
description: "PalworldのテクノロジーIDの管理方法、特定のテクノロジーの無効化、正しいサーバー設定の安全な編集方法を学びましょう。 -> 今すぐ詳しく見る"
sidebar_label: "テクノロジーID"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Palworldでは、*テクノロジーID*を使ってアンロック可能なテクノロジーや特定のアイテム関連設定をサーバー設定内で識別します。このガイドでは、ZAP-HostingのPalworldゲームサーバー設定の`DenyTechnologyList`を編集して特定のテクノロジーを無効化する方法を学びます。



## 準備

始める前に、ZAP-HostingのPalworldゲームサーバーにアクセスでき、設定ファイルの編集権限があることを確認してください。

:::info 設定編集のアクセス要件
ゲームサーバー管理と`Configs`セクションへのアクセス権が必要です。これにより`PalWorldSettings.ini`を編集できます。
:::

:::note テクノロジーIDの情報源
PalworldのテクノロジーIDは文字列ベースで、例として`GrapplingGun`、`GrapplingGun2`、`SkillUnlock_JetDragon`などがあります。最新のサードパーティ参照リストはこちらで確認できます：[Game Host Bros - Palworld Technology IDs](https://www.gamehostbros.com/guides/games/palworld/technology-ids)。

Palworldはアップデートで利用可能なテクノロジーが変わるため、使用予定のIDが現在のゲームバージョンで有効か必ず確認してください。
:::

## テクノロジーIDの理解

テクノロジーIDはPalworld内部でアンロック可能なテクノロジーを識別するためのIDです。専用サーバーでは、これらのIDを特定の設定オプションで使い、ゲームプレイの挙動を制御できます。

このガイドで最も重要な設定は`DenyTechnologyList`で、サーバー上で特定のテクノロジーのアンロックや使用をブロックできます。

### 対応する設定の使い方

以下の表は、このガイドで扱う関連設定キーです：

| 設定キー | 目的 | 値の形式 |
| --- | --- | --- |
| `DenyTechnologyList` | サーバー上で特定のテクノロジーを無効化 | カンマ区切りのテクノロジーID文字列リスト |

### テクノロジーIDの例

よく参照されるIDの例は以下の通りです：

| テクノロジーID | 意味の例 |
| --- | --- |
| `GrapplingGun` | グラップリングガン |
| `GrapplingGun2` | 上位グラップリングガン |
| `SkillUnlock_JetDragon` | ジェットドラゴン関連のアンロック |
| `SkillUnlock_IceHorse` | フロストアリオン関連のアンロック |
| `PALBOX` | パルボックス関連テクノロジー |
| `RepairBench` | 修理ベンチ |
| `AIcore` | AIコア |

:::caution 正確なID値の使用が必須
テクノロジーIDは大文字小文字を区別する文字列です。誤ったIDを入力するとPalworldが無視し、意図した通りにテクノロジーが無効化されません。
:::

## Palworld設定ファイルを開く

ZAP-HostingサーバーでテクノロジーIDを設定するには、正しいPalworld設定ファイルを手動で編集する必要があります。

### ZAP-Hostingインターフェースでファイルを探す

1. ZAP-Hostingのウェブインターフェースにログインします。
2. ご自身の**Palworld**ゲームサーバーを開きます。
3. ゲームサーバー管理の**Configs**に移動します。
4. `PalWorldSettings.ini`ファイルを開きます。

このファイルに`DenyTechnologyList`設定が保存されており、ここで編集します。



### 関連設定を見つける

`PalWorldSettings.ini`内で、Palworld設定が含まれるサーバーオプションブロックを探します。

`DenyTechnologyList`エントリを見つけるか、なければ追加してください。

:::tip ファイル内検索のコツ
ブラウザの検索機能（`CTRL` + `F`）を使い、`DenyTechnologyList`で素早く設定箇所を探せます。
:::

## `DenyTechnologyList`の設定

これでサーバーでブロックしたいテクノロジーを定義できます。

### 値の形式

`DenyTechnologyList`はカンマ区切りのテクノロジーIDリストを使います。

例：

```ini
DenyTechnologyList=GrapplingGun,GrapplingGun2,SkillUnlock_JetDragon
```

各エントリは有効なPalworldテクノロジーIDでなければなりません。説明文やID内の余分なスペース、サポートされていない文字は入れないでください。

### 設定の追加または編集

既に設定がある場合は、現在の値を希望のリストに置き換えます。

設定がまだない場合は、`PalWorldSettings.ini`の適切なサーバー設定セクションに追加してください。

例：

```ini
DenyTechnologyList=GrapplingGun,GrapplingGun2,GrapplingGun3,SkillUnlock_JetDragon,PALBOX,RepairBench
```

この例では複数のテクノロジーIDを無効化しています。

### 設定例の参照

| 設定例 | 結果 |
| --- | --- |
| `DenyTechnologyList=GrapplingGun` | 基本のグラップリングガンのみ無効化 |
| `DenyTechnologyList=GrapplingGun,GrapplingGun2` | 複数のグラップリングガンの段階を無効化 |
| `DenyTechnologyList=SkillUnlock_JetDragon,SkillUnlock_IceHorse` | 特定の特殊アンロックテクノロジーを無効化 |

:::note 関連するアイテムIDの利用
Palworldの一部アイテム関連設定もIDベースの値を使います。例えば、サードパーティの情報によると`AdditionalDropItemWhenPlayerKillingInPvPMode`はPvPアイテムドロップにPalworldのID値を使えますが、このガイドは`DenyTechnologyList`に特化しています。
:::

## 変更を保存して適用する

設定を編集したら、ファイルを保存しサーバーを再起動してPalworldに更新設定を読み込ませます。

### ファイルの保存

`PalWorldSettings.ini`の編集が終わったら：

1. `Configs`エディターで変更を保存します。
2. IDのスペルが正しいかもう一度確認してください。

### サーバーの再起動

ファイル保存後、ZAP-Hostingのゲームサーバー管理からPalworldサーバーを再起動します。

`PalWorldSettings.ini`の設定変更は、サーバーが更新ファイルで再起動されるまで確実に反映されません。

:::info 再起動が必須
`DenyTechnologyList`を変更した後はサーバーの再起動が必要です。設定ファイル方式では通常、ゲーム内コマンドは不要です。
:::

## テクノロジーが無効化されているか確認する

再起動後、設定が期待通りに機能しているか確認しましょう。

### 確認すべきこと

選択したテクノロジーがゲーム内で利用できなくなっているかをチェックします。

チェックリスト：

| 確認項目 | 期待される結果 |
| --- | --- |
| サーバーが正常に再起動した | サーバーが通常通りオンラインに戻る |
| `PalWorldSettings.ini`が正しく保存されている | `DenyTechnologyList`エントリが残っている |
| 無効化したテクノロジーをゲーム内でテスト | 選択したテクノロジーが利用不可になっている |

### 設定が機能しない場合

テクノロジーがまだ使える場合は以下を確認してください：

| 問題の可能性 | 確認内容 |
| --- | --- |
| 無効なID | テクノロジーIDが現在のゲームバージョンと完全に一致しているか |
| 書式の問題 | リストがカンマ区切りで、純粋なID文字列で書かれているか |
| ファイル未保存 | `PalWorldSettings.ini`を再度開いて値が残っているか |
| サーバー未再起動 | 変更保存後にサーバーを再起動したか |

:::caution ゲームアップデートでIDが変わる可能性
Palworldは継続的にアップデートされ、テクノロジー情報が変わることがあります。以前有効だったIDが使えなくなった場合は、信頼できる最新の参照と照合してからトラブルシューティングしてください。
:::

## 結論

おめでとうございます。PalworldサーバーでテクノロジーIDを使い特定のテクノロジーを無効化することに成功しました。ご質問やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にお問い合わせください！ 🙂