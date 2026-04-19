---
id: windrose-manage-worlds
title: "Windrose: ワールド管理"
description: "Windroseで複数のワールドを管理し、ワールドセーブの切り替えや専用サーバー上で正しいワールド構造を使った設定方法を学びましょう。 -> 今すぐ詳しく見る"
sidebar_label: ワールド管理
services:
 - gameserver-windrose
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Windroseは1台の専用サーバーで複数のワールドをサポートし、それぞれ独自のセーブデータと`WorldDescription.json`設定を使用します。このガイドでは、新しいワールドの作成、既存ワールドの切り替え、バックアップ、そして安全なワイプ方法を学びます。

## 準備

開始する前に、ZAP-HostingのウェブインターフェースからWindroseゲームサーバーにアクセスできること、そしてセーブや設定変更を行う際はサーバーがオフラインであることを確認してください。

:::info 必要なアクセス権
Windroseのワールドを安全に管理するには、ZAP-Hostingのゲームサーバー管理画面の**ファイルマネージャー**、**設定**、**バックアップ**の各セクションにアクセスできる必要があります。
:::

:::caution まずサーバーを停止してください
`ServerDescription.json`の編集、`WorldDescription.json`の変更、ワールドフォルダの作成やセーブデータの削除を行う前に、必ずサーバーを停止してください。これによりデータ破損や不完全なワールド書き込みを防げます。
:::

## Windroseのワールド構造を理解する

Windroseはすべてのワールドデータをセーブプロファイルディレクトリ内に保存します。最初のワールドはサーバーを初めて起動した際に自動で作成されます。

関連する構造は以下の通りです：

```text
R5/Saved/SaveProfiles/Default
ServerDescription.json
RocksDB
<game_version>
Worlds
World_1_ID
WorldDescription.json
World_2_ID
```

実際のワールドフォルダは以下のパスにあります：

```text
R5/Saved/SaveProfiles/Default/RocksDB/[your_game_version]/Worlds/
```

各ワールドフォルダは固有の`IslandId`という名前で命名されています。サーバーはこのIDを内部的に使用してどのワールドを読み込むか識別します。

| ファイルまたはフォルダ | 用途 |
| --- | --- |
| `ServerDescription.json` | 現在アクティブなサーバー設定（読み込むワールドを含む）を定義 |
| `RocksDB/[your_game_version]/Worlds/` | 利用可能なすべてのワールドセーブフォルダを保存 |
| `[your_world_id]/WorldDescription.json` | 特定のワールドの設定を保存 |
| `WorldIslandId` | サーバーが読み込むワールドを指定する`ServerDescription.json`内の値 |

:::danger ワールドフォルダの名前変更禁止
ワールドフォルダの名前を手動で変更してはいけません。Windroseはフォルダ名をRocksDBデータベース内の内部`IslandId`として使用しています。名前を変えるとワールドが破損したり、孤立して使用不能になる恐れがあります。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## アクティブなワールドを確認する

ワールドの切り替えや作成を行う前に、現在アクティブなワールドを特定しておくと便利です。

### サーバー設定を確認する

ゲームサーバー管理の**設定**セクションを開き、`ServerDescription.json`を探します。もしリストにない場合は**ファイルマネージャー**からルートディレクトリの`ServerDescription.json`を開いてください。

以下のフィールドを探します：

```json
"WorldIslandId": "[your_world_id]"
```

この値がサーバー起動時に読み込むワールドを定義しています。

### ワールドIDを確認する

特定のセーブ済みワールドを識別するには、そのワールドフォルダ内の`WorldDescription.json`を開き、`IslandId`の値を確認します。

例：

```json
{
  "Version": 1,
  "WorldDescription": {
    "IslandId": "World_Example_ID",
    "WorldName": "My World",
    "WorldPresetType": "Medium",
    "WorldSettings": {}
  }
}
```

このファイル内の`IslandId`はフォルダ名と完全に一致している必要があります。

## ワールドの切り替え

すでに複数のワールドがサーバーに保存されている場合は、アクティブな`WorldIslandId`を変更してワールドを切り替えられます。

### 対象ワールドを更新する

まず、ZAP-Hostingのウェブインターフェースからサーバーを停止します。

次に、**設定**セクションまたは**ファイルマネージャー**のルートディレクトリから`ServerDescription.json`を開きます。

以下のフィールドを見つけます：

```json
"WorldIslandId": "PASTE_TARGET_WORLD_ID_HERE"
```

ここに読み込みたいワールドの`IslandId`を貼り付けます。対象ワールドの`WorldDescription.json`を開くとIDがわかります。

### 保存してサーバーを再起動する

ファイルを保存し、サーバーを再起動します。Windroseは選択したワールドを読み込みます。

:::tip ワールドIDは正確に確認してください
`WorldIslandId`が既存のワールドフォルダやその`IslandId`と完全に一致しない場合、サーバーは意図したワールドを読み込めなかったり、新しいワールドを生成する可能性があります。
:::

## 新しいワールドを作成する

1台のサーバーで複数のワールドセッションをホストしたい場合は、新しいワールドを手動で作成できます。

### ワールドフォルダを作成する

まずサーバーを停止します。

**ファイルマネージャー**を開き、以下のパスに移動します：

```text
R5/Saved/SaveProfiles/Default/RocksDB/[your_game_version]/Worlds/
```

ユニークな名前で新しいフォルダを作成します。このフォルダ名が新しいワールドの`IslandId`になります。

例：

```text
R5/Saved/SaveProfiles/Default/RocksDB/[your_game_version]/Worlds/MySecondWorld
```

### ワールド説明ファイルを作成する

新しいフォルダ内に`WorldDescription.json`という名前のファイルを作成し、以下のテンプレートを貼り付けます：

```json
{
  "Version": 1,
  "WorldDescription": {
    "IslandId": "YOUR_NEW_WORLD_ID",
    "WorldName": "My Second World",
    "WorldPresetType": "Medium",
    "WorldSettings": {}
  }
}
```

`YOUR_NEW_WORLD_ID`を作成したフォルダ名に置き換えてください。

:::caution IDの一致が必須です
`WorldDescription.json`内の`IslandId`はフォルダ名と完全に一致している必要があります。大文字小文字の違いや余分なスペースもワールドが正しく読み込まれない原因になります。
:::

### 新しいワールドをアクティブに設定する

次に`ServerDescription.json`を開き、`WorldIslandId`の値を新しいワールドIDに更新します。

例：

```json
"WorldIslandId": "MySecondWorld"
```

ファイルを保存してサーバーを起動すると、Windroseは新しいワールドを初回起動時に生成します。

## ワールドのバックアップ

ワールドを切り替えたり、データをワイプしたり、新しい設定を試す前に、必ずワールドセーブのバックアップを作成してください。

### ZAP-Hostingのバックアップ機能を使う

まずサーバーを停止します。

パネルのサイドバーから**バックアップ**を開き、新しいバックアップを作成します。これはサーバー全体の状態を後で復元したい場合に最も安全な方法です。

### ワールドファイルを手動でダウンロードする

セーブデータの直接コピーだけが欲しい場合は、**ファイルマネージャー**を開き、`RocksDB/`フォルダ全体をZIPまたはダウンロードオプションで取得してください。

対象パス：

```text
R5/Saved/SaveProfiles/Default/RocksDB/
```

| バックアップ方法 | 推奨用途 |
| --- | --- |
| パネルバックアップ | サーバー全体の復元に最適 |
| 手動で`RocksDB/`をダウンロード | ワールドセーブの直接アーカイブに最適 |
| 両方を使う | 重要なワールドやワイプ前に最適 |

:::note バックアップのおすすめ
複数のワールドを管理している場合は、パネルバックアップと`RocksDB/`の手動コピー両方を保持すると、特定のワールドを後で柔軟に復元できます。
:::

## ワールドをワイプする

ワールドを完全にリセットしたい場合は、セーブフォルダを削除し、サーバーに新規生成させることができます。

### ワールドセーブを削除する

サーバーを停止します。

**ファイルマネージャー**を開き、以下のパスに移動します：

```text
R5/Saved/SaveProfiles/Default/RocksDB/[your_game_version]/Worlds/
```

ワイプしたいワールドのフォルダを削除してください。

### ワールドを再生成する

`ServerDescription.json`の`WorldIslandId`が削除したワールドIDを指していることを確認してください。

サーバーを再起動すると、Windroseは対象のワールドフォルダが存在しないことを検知し、そのIDで新しいワールドを生成します。

:::danger 削除前にフォルダを必ず確認してください
誤ったワールドフォルダを削除すると、バックアップがない限りそのワールドのセーブデータは永久に失われます。フォルダ名と`IslandId`をよく確認してから実行してください。
:::

## ワールド設定の管理

各ワールドは独自の`WorldDescription.json`を持つため、同じサーバー上で異なるワールドごとに別々の設定を維持できます。

### ワールド設定の例

```json
{
  "Version": 1,
  "WorldDescription": {
    "IslandId": "MySecondWorld",
    "WorldName": "My Second World",
    "WorldPresetType": "Medium",
    "WorldSettings": {}
  }
}
```

### 重要な値

| キー | 説明 |
| --- | --- |
| `Version` | ファイルで使用される設定バージョン |
| `IslandId` | 内部ワールドID。フォルダ名と一致必須 |
| `WorldName` | ワールドの表示名 |
| `WorldPresetType` | ワールド生成のプリセットタイプ |
| `WorldSettings` | 追加のワールド固有設定（対応している場合） |

:::info パネルでの設定管理
Windroseの設定ファイルはゲームサーバー管理の**設定**で管理できます。ファイルが見つからない場合は**ファイルマネージャー**で直接編集してください。
:::

## 複数ワールド管理のベストプラクティス

1台のサーバーで複数ワールドを管理するのは、テストやイベント、別プレイヤーグループ向けに便利です。整理して管理するために以下を推奨します：

- `[your_pvp_world]`や`[your_build_world]`のようにわかりやすくユニークなワールドIDを使う
- フォルダ名と`IslandId`を完全に一致させる
- ワールド切り替えやワイプ前に必ずバックアップを取る
- サーバー稼働中はファイルを変更しない
- どの`WorldIslandId`がどのワールド名か記録しておく

これにより、長期間にわたり多くのワールドを管理しても混乱を避けられます。

## 結論

おめでとうございます、Windroseのワールド管理をサーバー上で無事に行うことができました。ご不明点やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にお問い合わせください！🙂