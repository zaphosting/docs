---
id: palworld-upload-existing-save
title: "Palworld: 既存セーブのアップロード"
description: "ZAP-Hostingのゲームサーバーで既存のPalworldセーブをアップロードし、サーバーワールドを移行し、必要な設定ファイルを正しく更新する方法を学びましょう。 -> 今すぐ詳しく見る"
sidebar_label: Palworld: 既存セーブのアップロード
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Palworldは専用サーバーのワールドデータを特定のセーブフォルダーに保存し、そのフォルダーをサーバー設定で指定します。このガイドでは、ZAP-HostingのPalworldサーバーに既存のセーブをアップロードし、正しいワールドを読み込むための設定を更新する方法を説明します。

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## 準備

作業を始める前に、既存のPalworldセーブフォルダーがローカルデバイスにあることを確認してください。

:::danger サポート対象外のセーブ元
XboxコンソールやPS5のクラウドセーブはPalworld専用サーバーに直接転送できません。PC版インストールまたは他の専用サーバーからのセーブのみ移行可能です。
:::

:::info 必要なアクセス権
ZAP-Hostingのゲームサーバーのウェブインターフェースにアクセスできること、特にファイルマネージャーと`Configs`セクションへのアクセスが必要です。
:::

サーバーファイルへのアクセス方法が不明な場合は、該当するZAP-Docsのファイル管理ガイドを参照してください。

## 必要なセーブ構造の理解

アップロード前に、セーブの構造が正しいか確認しましょう。

Palworld専用サーバーでは、アクティブなワールドセーブは以下の場所に保存されます：

```text
Pal/Saved/SaveGames/0/[your_save_folder_id]/
```

`[your_save_folder_id]`は通常、長い英数字の文字列で、例：

```text
84B5E2264EC387DEDB43179D666031A1
```

有効なセーブフォルダーには通常、以下のようなファイルやフォルダーが含まれます：

| 項目 | 用途 |
| --- | --- |
| `Level.sav` | メインのワールドセーブデータ |
| `LevelMeta.sav` | ワールドのメタデータ |
| `Players/` | プレイヤーのセーブデータ |
| `WorldOption.sav` | レガシーのワールドオプションファイル（削除が必要な場合あり） |

:::caution WorldOption.savは削除してください
アップロードしたセーブフォルダーに`WorldOption.sav`が含まれている場合、サーバー起動前に必ず削除してください。このファイルは現在の専用サーバー環境で問題を引き起こすことが知られており、新しいPalworldの公式変更で特に必要とされない限り、移行セーブには使用しないでください。
:::

## ZAPインターフェースで設定ファイルを探す

セーブフォルダーをアップロードしたら、サーバーがそのフォルダーを読み込むようにPalworldの設定を編集します。

ZAP-Hostingのゲームサーバー管理画面で`Configs`セクションを開き、以下のファイルを探します：

```text
GameUserSettings.ini
```

現在のサーバー環境によって、このファイルは通常以下のいずれかのパスにあります：

| 可能なパス | 備考 |
| --- | --- |
| `Pal/Saved/Config/LinuxServer/GameUserSettings.ini` | LinuxベースのPalworldサーバーで一般的なパス |
| `Pal/Saved/Config/WindowsServer/GameUserSettings.ini` | Windowsベースの古いまたは代替パス |

:::note LinuxServerとWindowsServerのパスについて
Palworld専用サーバーは一般的に`LinuxServer`の設定パスで展開されます。`WindowsServer`が見当たらない場合は`LinuxServer`を確認してください。ZAPインターフェースでは`Configs`を開き、`GameUserSettings.ini`を直接選択するのが最も簡単です。
:::

## 既存セーブのアップロード

アップロード方法はセーブの元によって異なりますが、ZAPサーバー上の保存先は同じです。

### まずサーバーを停止する

デフォルトのワールドを置き換える前に、ZAP-HostingのウェブインターフェースでPalworldサーバーを停止してください。

:::caution セーブ破損防止
サーバーが稼働中にワールドファイルをアップロードまたは置き換えないでください。サーバーを停止することで不完全な書き込みやセーブデータの破損を防げます。
:::

### デフォルトのセーブフォルダーを削除する

ファイルマネージャーで以下のディレクトリに移動します：

```text
Pal/Saved/SaveGames/0/
```

この中に通常、デフォルトで生成されたセーブフォルダーがあります。アップロード前にこのデフォルトフォルダーを削除してください。

### 既存のセーブフォルダーをアップロードする

既存のセーブフォルダーを以下にアップロードします：

```text
Pal/Saved/SaveGames/0/
```

アップロード後の構造は以下のようになります：

```text
Pal/
└── Saved/
    └── SaveGames/
        └── 0/
            └── [your_save_folder_id]/
                ├── Level.sav
                ├── LevelMeta.sav
                ├── Players/
                └── WorldOption.sav
```

`WorldOption.sav`が存在する場合はアップロード後に削除してください。

:::tip フォルダー名は正確にコピー
次のステップで正確なフォルダー名が必要です。ファイルマネージャーに表示されている`[your_save_folder_id]`を英数字すべて含めて正確にコピーしてください。
:::

## GameUserSettings.iniの編集

セーブのアップロードが完了したら、Palworldが正しいワールドを読み込むようにサーバー設定を更新します。

`Configs`セクションから`GameUserSettings.ini`を開き、`DedicatedServerName`の項目を探します。

アップロードしたセーブフォルダー名を正確に設定してください：

```ini
DedicatedServerName=[your_save_folder_id]
```

例：

```ini
DedicatedServerName=84B5E2264EC387DEDB43179D666031A1
```

### 必須の設定項目

編集時の参照用：

| 設定ファイル | キー | 必須値 |
| --- | --- | --- |
| `GameUserSettings.ini` | `DedicatedServerName` | アップロードしたセーブフォルダーの正確な名前 |

### この設定の役割

`DedicatedServerName`はPalworld専用サーバーに、`Pal/Saved/SaveGames/0/`内のどのフォルダーをアクティブなワールドとして読み込むかを指示します。

この値がアップロードしたフォルダー名と完全に一致しないと、サーバーは新しいワールドを作成したり、誤ったワールドを読み込んだりします。

:::danger 完全一致が必須
起動後にマップの進行状況が消えたり、空のワールドや新規生成されたセーブが表示される場合、最も多い原因は`DedicatedServerName`がアップロードしたフォルダー名と完全に一致していないことです。
:::

## セーブ元別の保存場所

元のセーブの場所がわからない場合は、以下の正しいパスを参照してください。

### 他の専用サーバープロバイダーから

以前のプロバイダーで以下の場所からセーブフォルダーをバックアップしてください：

```text
Pal/Saved/SaveGames/0/
```

元の名前のままワールドフォルダー全体をコピーし、上記の手順でZAP-Hostingサーバーにアップロードします。

### Steamの協力プレイセーブから

WindowsのローカルSteamセーブは以下のパスにあります：

```text
%LOCALAPPDATA%\Pal\Saved\SaveGames\[your_steamid64]\[your_save_folder_id]
```

`[your_steamid64]`はあなたのSteam 64ビットID、`[your_save_folder_id]`は移行したいワールドフォルダーです。

:::caution ホストキャラクターの制限
ローカルSteam協力プレイワールドを専用サーバーに移行する場合、元のホストキャラクターは接続プレイヤーデータのように自動で転送されません。ホストキャラクターを保持したい場合は、追加のサードパーティ製セーブ変換ツールやキャラクター転送ツールが必要になることがあります。
:::

### PC Game Passから

PC Game Pass版のローカルセーブは通常以下に保存されています：

```text
%LOCALAPPDATA%\Packages\PocketpairInc.Palworld_ad4psfrxyesvt\SystemAppData\wgs\
```

Game PassのセーブはSteamや専用サーバーのセーブ形式とは異なります。実際には、サードパーティ製の変換ツールでSteam互換または専用サーバー互換の形式に変換してからアップロードする必要があります。

:::info Game Passの変換が必要
PC Game Passの生データを直接アップロードしても通常は不十分です。まず変換し、その後変換済みのワールドフォルダーを`Pal/Saved/SaveGames/0/`にアップロードし、`DedicatedServerName`を設定してください。
:::

## サーバーを起動する

セーブフォルダーのアップロードと`GameUserSettings.ini`の更新が完了したら、ZAP-Hostingのウェブインターフェースからサーバーを再起動してください。

この移行プロセスで追加のコンソールコマンドは通常不要です。

起動後、サーバーに接続して以下を確認してください：

- 正しいワールドが読み込まれている
- 建物やマップの進行状況が反映されている
- プレイヤーデータが期待通りに存在している

## トラブルシューティング

アップロードしたセーブが正しく読み込まれない場合は、以下を確認してください。

### サーバーが新しいワールドを作成した

`GameUserSettings.ini`の以下の値がアップロードしたフォルダー名と完全に一致しているか確認してください：

```ini
DedicatedServerName=[your_save_folder_id]
```

また、アップロードしたセーブが以下の場所に直接あることを確認してください：

```text
Pal/Saved/SaveGames/0/[your_save_folder_id]/
```

### マップやワールドの進行状況が消えている

通常、以下のいずれかが原因です：

| 可能な原因 | 解決策 |
| --- | --- |
| `DedicatedServerName`の値が間違っている | 正確なアップロードフォルダー名を再入力 |
| セーブフォルダーを誤ったディレクトリにアップロードした | `Pal/Saved/SaveGames/0/`に移動 |
| アップロードが不完全 | フォルダー全体を再アップロードし、全ファイルが揃っているか確認 |

### WorldOption.savが問題を起こす

セーブに`WorldOption.sav`が含まれている場合は削除し、サーバーを再起動してください。

このファイルは古いセーブ処理に関連し、移行した専用サーバーワールドに干渉することがあります。

## おわりに

おめでとうございます。ZAP-Hostingサーバーに既存のPalworldセーブを無事アップロードできました。ご不明点やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にお問い合わせください！ 🙂