---
id: palworld-technology-ids
title: "Palworld: テクノロジーID"
description: "PalworldのテクノロジーIDの管理方法、特定のテクノロジーの無効化、サーバーで必要な設定値について学びましょう -> 今すぐ詳細を確認"
sidebar_label: Palworld: テクノロジーID
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Palworldでは、*テクノロジーID*を使ってアンロック可能なテクノロジーや関連するアイテム設定を識別します。このガイドでは、ZAP-HostingのPalworldゲームサーバーで特定のテクノロジーを手動で設定ファイルを編集して無効化する方法を解説します。

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## 準備

始める前に、ZAP-HostingのウェブインターフェースでPalworldゲームサーバーにアクセスでき、サーバーの設定ファイルを編集する権限があることを確認してください。

:::info 必要なアクセス権
この設定を完了するには、Palworldサーバーの管理権限とZAP-Hostingパネルの`Configs`セクションへのアクセスが必要です。
:::

:::note テクノロジーIDの情報源
PalworldのテクノロジーIDはゲーム内で定義された内部文字列で、例として`GrapplingGun`や`SkillUnlock_JetDragon`があります。ZAP-Hostingパネルには公式のゲーム内リストがないため、有効なIDは信頼できる外部リファレンスを利用してください。
:::

## テクノロジーIDの理解

テクノロジーIDはPalworldがアンロック可能なテクノロジーを識別するための内部識別子です。ゲーム内で表示される名前ではなく、サーバー設定では正確なID文字列を使用します。

テクノロジーを無効化するには、Palworldの`DenyTechnologyList`設定を使います。この値はカンマ区切りのテクノロジーIDリストを受け入れます。

### `DenyTechnologyList`の役割

有効なテクノロジーIDを`DenyTechnologyList`に追加すると、そのテクノロジーはサーバー上でブロックされます。進行制限や特定の移動ツールの削除、コミュニティ向けのゲームプレイルールのカスタマイズに役立ちます。

### 対応する値の形式

値は追加説明なしのカンマ区切りリストで入力してください。

| 設定キー | 目的 | 形式 | 例 |
|---|---|---|---|
| `DenyTechnologyList` | 選択したテクノロジーを無効化 | カンマ区切りのテクノロジーID文字列 | `GrapplingGun,GrapplingGun2,SkillUnlock_JetDragon` |

:::caution 正確なIDの一致が必要
テクノロジーIDはゲームの内部値と完全に一致する必要があります。IDのスペルミスや現在のPalworldバージョンで無効なIDは、設定が正しく機能しない原因になります。
:::

## 正しい設定ファイルを開く

ZAP-Hostingでは、この変更はPalworldの設定ファイルを手動で編集して行います。

### 編集するファイル

以下のファイルを編集してください：

```ini
PalWorldSettings.ini
```

### ZAP-Hostingインターフェースでの場所

Palworldゲームサーバーの管理画面を開き、次の場所に移動します：

```text
Configs
```

そこから`PalWorldSettings.ini`を開きます。

:::tip ZAP-Hostingでの設定ファイルの場所
サーバーによって複数の編集可能ファイルがある場合は、`DenyTechnologyList`などゲームプレイ関連の設定が含まれる`PalWorldSettings.ini`を選択してください。
:::

## テクノロジーID設定の編集

`PalWorldSettings.ini`を開いたら、サーバーオプションリストを探し、`DenyTechnologyList`のエントリを追加または修正します。

### `DenyTechnologyList`にテクノロジーIDを追加

無効化したいテクノロジーをカンマ区切りで指定します。

例：

```ini
DenyTechnologyList="GrapplingGun,GrapplingGun2,SkillUnlock_JetDragon"
```

この例では以下を無効化します：

| テクノロジーID | 意味 |
|---|---|
| `GrapplingGun` | グラップリングガン |
| `GrapplingGun2` | 上位版グラップリングガン |
| `SkillUnlock_JetDragon` | ジェットドラゴン関連のアンロック |

:::note 引用符の形式について
既存の`PalWorldSettings.ini`の記述スタイルによっては、値が大きなオプションブロック内にある場合があります。ファイル内の既存の構文スタイルを維持し、`DenyTechnologyList`の値だけを変更してください。
:::

### オプションブロック内の例

多くのPalworldサーバーでは設定が大きな`OptionSettings`行内に格納されています。その場合、エントリは次のようになります：

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,DenyTechnologyList="GrapplingGun,GrapplingGun2,SkillUnlock_JetDragon")
```

`DenyTechnologyList`がまだ存在しない場合は、同じ`OptionSettings=(...)`ブロック内に追加し、他の設定とカンマで区切ってください。

:::caution 既存の構文を維持すること
`OptionSettings`内の他の設定を削除しないでください。カンマや括弧、引用符の欠落は設定の読み込み失敗を引き起こします。
:::

## 有効なテクノロジーIDを選ぶ

ゲーム内表示名ではなく、有効な内部テクノロジーIDを使用する必要があります。

### テクノロジーIDの例

Palworldで使われる既知のテクノロジーID例は以下の通りです：

| テクノロジーID | 例の意味 |
|---|---|
| `AIcore` | AIコア |
| `GrapplingGun` | グラップリングガン |
| `GrapplingGun2` | グラップリングガンのバリエーション |
| `GrapplingGun3` | グラップリングガンのバリエーション |
| `GrapplingGun4` | グラップリングガンのバリエーション |
| `GrapplingGun5` | グラップリングガンのバリエーション |
| `SkillUnlock_JetDragon` | ジェットドラゴンのアンロック |
| `SkillUnlock_IceHorse` | アイスホースのアンロック |
| `PALBOX` | パルボックス関連テクノロジー |
| `RepairBench` | 修理台 |

Palworldはアップデートを受けるため、IDの完全なリストは変わる可能性があります。より広範なリファレンスが必要な場合は、最新かつ信頼できる情報源でIDを確認してから適用してください。

### 他の設定でのIDの関連利用

テクノロジースタイルの内部IDは他のPalworld設定でも使われることがあります。既知の例は以下です：

| 設定キー | 目的 |
|---|---|
| `AdditionalDropItemWhenPlayerKillingInPvPMode` | PvPキル時のカスタムアイテムドロップ設定 |

:::info PvP設定に関する注意
PvPアイテムドロップのカスタマイズにIDを使う場合、`AdditionalDropItemWhenPlayerKillingInPvPMode`が要求するIDタイプが使用したいアイテムと一致しているか確認してください。このガイドは`DenyTechnologyList`に特化しています。
:::

## 保存してサーバーを再起動

編集後はZAP-Hostingインターフェースで変更を保存してください。

新しい設定を反映させるためにPalworldサーバーを再起動します。

### 編集後に必要な操作

| 操作 | 必須か |
|---|---|
| `PalWorldSettings.ini`の保存 | はい |
| サーバーの再起動 | はい |
| 追加のコンソールコマンド実行 | 必須コマンドは確認されていません |

Palworldは起動時にこれらのサーバー設定を読み込むため、再起動しないと新しいテクノロジー制限は反映されません。

:::tip 再起動後の動作確認
サーバー再起動後に参加して、指定したテクノロジーが意図通り利用不可になっているか確認してください。IDや構文が正しく入力されているかの検証に役立ちます。
:::

## トラブルシューティング

再起動後もテクノロジーが利用可能な場合は、以下を確認してください。

### IDのスペルを確認

テクノロジーIDが大文字小文字も含めて正確に記述されているか確認してください。

### 設定ファイルの構文をチェック

`OptionSettings=(...)`ブロックを編集した場合は以下を確認してください：

- 各設定がカンマで区切られている
- 引用符が正しく開閉されている
- 括弧が完全である
- `DenyTechnologyList`が正しい設定ブロック内にある

### サーバーが正常に再起動したか確認

サーバーが正しく再起動していないと、更新された設定が読み込まれません。

:::danger 設定ファイルの不正フォーマットによるリスク
`PalWorldSettings.ini`のフォーマットが不正だと設定が正しく読み込まれません。問題が発生した場合は、以前の正常なファイルに戻し、慎重に変更を再適用してください。
:::

## 結論

PalworldサーバーでテクノロジーIDを使って特定のテクノロジーを無効化することに成功しました。ご質問やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にお問い合わせください！ 🙂