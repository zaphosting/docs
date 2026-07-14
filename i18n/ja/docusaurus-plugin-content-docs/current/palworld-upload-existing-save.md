---
id: palworld-upload-existing-save
title: "Palworld: 既存セーブのアップロード"
description: "既存のPalworldセーブをアップロードし、ファイルデータを正しくアップロードして、サーバーが正しいワールドフォルダを読み込むように設定する方法を学びます。 -> 今すぐ詳しく学ぶ"
sidebar_label: Palworld: 既存セーブのアップロード
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Palworldは専用ゲームサーバーのワールドデータを特定のセーブフォルダに保存し、それを正しく読み込むために対応する設定エントリが必要です。このガイドでは、ZAP-HostingのPalworldサーバーに既存のセーブをアップロードし、正しいワールドデータでサーバーを起動する設定方法を説明します。

:::danger サポートされていないセーブソース
XboxコンソールやPS5のクラウドセーブを専用Palworldサーバーに直接転送することはできません。この方法で移行できるのはPCインストール版または既存の専用サーバーからのセーブのみです。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## 準備

開始前に以下を用意してください：

| 必要条件 | 詳細 |
| --- | --- |
| 既存のPalworldセーブ | PCインストール版または他の専用サーバーからのセーブフォルダ |
| ZAP-Hostingのゲームサーバーアクセス | ファイルマネージャーや`Configs`セクションを含むウェブインターフェースへのアクセス |
| サーバー停止状態 | セーブデータを置き換える前にPalworldサーバーを停止しておく必要があります |
| セーブフォルダ名 | アップロードするセーブの正確なフォルダ名（例：`[your_savefolder_id]`） |

:::info 設定ファイルへのアクセス
ZAP-Hostingでは、Palworldの設定ファイルはゲームサーバー管理の`Configs`からアクセスできます。ファイルマネージャーで直接編集する必要はなく、パスを手動で確認したい場合のみ利用してください。
:::

## 必要なセーブ構造の理解

アップロード前に、Palworldが実際に読み込むフォルダ構造を理解することが重要です。

サーバーのセーブ場所は以下です：

```text
Pal/Saved/SaveGames/0/[your_savefolder_id]/
```

このフォルダ内には通常、以下のようなファイルやフォルダがあります：

```text
Level.sav
LevelMeta.sav
Players/
```

古いセーブや移行したセーブでは、以下のファイルも存在する場合があります：

```text
WorldOption.sav
```

:::caution 非推奨のWorldOption.savの削除
アップロードしたセーブフォルダに`WorldOption.sav`がある場合、サーバー起動前に必ず削除してください。このファイルは新しいPalworldサーバー環境で問題を引き起こすことが知られており、移行セーブで特に必要とされない限り使用しないでください。
:::

## 正しい設定ファイルを見つける

アップロードしたワールドをサーバーに読み込ませるには、`GameUserSettings.ini`を編集する必要があります。

ZAP-Hostingのゲームサーバー管理画面で：

1. Palworldサーバーを開く
2. `Configs`に移動
3. `GameUserSettings.ini`を開く

サーバー環境によって、ファイルパスは通常以下のいずれかです：

| 可能なパス | 備考 |
| --- | --- |
| `Pal/Saved/Config/LinuxServer/GameUserSettings.ini` | LinuxベースのPalworldサーバーで一般的 |
| `Pal/Saved/Config/WindowsServer/GameUserSettings.ini` | Windowsベースの環境で見られる場合あり |

:::note パスの違いについて
Palworldサーバーのインストールは、提供元のプラットフォームにより`LinuxServer`または`WindowsServer`のいずれかを使用します。`Configs`から編集する場合は正しいファイルが表示されているため、`GameUserSettings.ini`を編集していることを確認してください。
:::

## 他の専用サーバーからセーブをアップロードする

既に他のホスティングプロバイダーからのセーブがある場合は、直接移行できます。

### 既存セーブのバックアップ

以前のプロバイダーで以下の場所からセーブフォルダを探してダウンロードします：

```text
Pal/Saved/SaveGames/0/
```

ランダムな英数字のフォルダ名ごと丸ごとコピーしてください。例：

```text
[your_savefolder_id]
```

### ZAP-Hostingサーバーを停止する

新しいセーブをアップロードする前に、ZAP-HostingのウェブインターフェースでPalworldサーバーを停止してください。

:::caution セーブの競合を防ぐために
サーバーが起動中にセーブファイルを置き換えないでください。アップロードの不完全やデータ上書き、セーブ破損の原因になります。
:::

### デフォルトセーブフォルダの置き換え

ゲームサーバーのファイルマネージャーで以下に移動します：

```text
Pal/Saved/SaveGames/0/
```

サーバーが自動生成したデフォルトのセーブフォルダを削除し、既存のセーブフォルダを同じ場所にアップロードします。

アップロード後の構造は以下のようになります：

```text
Pal/Saved/SaveGames/0/[your_savefolder_id]/
```

### GameUserSettings.iniで正しいセーブフォルダを設定する

`Configs`から`GameUserSettings.ini`を開き、`DedicatedServerName`エントリを探します。

アップロードしたセーブフォルダの正確な名前を設定してください：

```ini
DedicatedServerName=[your_savefolder_id]
```

| 設定項目 | 必須値 |
| --- | --- |
| `DedicatedServerName` | `Pal/Saved/SaveGames/0/`内の正確なフォルダ名 |

:::tip 完全一致が必須
`DedicatedServerName`はアップロードしたフォルダ名と完全に一致する必要があります。大文字小文字や数字も含めて正確に入力してください。不一致の場合、別のワールドが起動したり、マップ進行なしで読み込みが完了したように見えることがあります。
:::

### サーバーを起動する

設定を保存したら、Palworldサーバーを再起動してください。

アップロード後は追加のコンソールコマンドは通常不要で、サーバーの完全再起動で新しいセーブが読み込まれます。

## Steam協力プレイのセーブをアップロードする

以前Steamの協力プレイでローカルホストしていたワールドも専用サーバーにアップロード可能です。

### ローカルのSteamセーブを探す

Windows PCで`Windows` + `R`を押し、以下を開きます：

```text
%LOCALAPPDATA%\Pal\Saved\SaveGames
```

この場所内でSteamID64の名前のフォルダを開き、アップロードしたいワールドフォルダを探します：

```text
%LOCALAPPDATA%\Pal\Saved\SaveGames\[your_steamid64]\[your_savefolder_id]
```

### セーブをサーバーにアップロードする

正しいセーブフォルダがわかったら：

1. Palworldサーバーを停止
2. ファイルマネージャーを開く
3. `Pal/Saved/SaveGames/0/`に移動
4. デフォルトのセーブフォルダを削除
5. 既存のセーブフォルダをアップロード
6. `Configs`の`GameUserSettings.ini`を開く
7. 以下を設定：

```ini
DedicatedServerName=[your_savefolder_id]
```

8. ファイルを保存し、サーバーを再起動

:::caution ホストキャラクターの制限
ローカルSteam協力プレイのワールドを移行する場合、ホストキャラクターは接続プレイヤーデータのように自動で転送されません。キャラクターの継続性が必要な場合は、追加のサードパーティ製セーブ変換やキャラクター転送手順が必要になることがあります。
:::

## PC Game Passのセーブをアップロードする

PC Game Passのセーブは形式が異なり、専用Palworldサーバーで直接使用できません。

### Game Passセーブの場所

ローカルのGame Passセーブデータは通常以下に保存されています：

```text
%LOCALAPPDATA%\Packages\PocketpairInc.Palworld_ad4psfrxyesvt\SystemAppData\wgs\
```

### まずセーブを変換する

PC Game Passのセーブを専用サーバーで使うには、サードパーティ製の変換ツールでSteam互換形式に変換する必要があります。

よく使われるツールの一つは[Palworld Save Tools](https://github.com/cheahjs/palworld-save-tools)です。

:::danger サードパーティツールの免責事項
サードパーティ製のセーブ変換ツールはZAP-Hostingが開発・管理しているものではありません。機能は変わる可能性があり、互換性は保証されません。変換前に必ず元のセーブのバックアップを作成してください。
:::

変換後のエクスポート先は通常以下のようなフォルダになります：

```text
XGP_converted_saves
```

### 変換済みセーブをアップロードする

変換が完了したら：

1. サーバーを停止
2. ファイルマネージャーを開く
3. `Pal/Saved/SaveGames/0/`に移動
4. デフォルトのセーブフォルダを削除
5. 変換済みセーブフォルダをアップロード
6. `Configs`の`GameUserSettings.ini`を開く
7. 正しいフォルダ名を設定：

```ini
DedicatedServerName=[your_savefolder_id]
```

8. ファイルを保存し、サーバーを起動

## 必須の設定変更

このプロセスで最も重要な手動ステップは`GameUserSettings.ini`の正しい編集です。

### 設定エントリ概要

| ファイル | ZAPインターフェース内の場所 | 変更するエントリ | 例 |
| --- | --- | --- | --- |
| `GameUserSettings.ini` | `Configs` | `DedicatedServerName` | `DedicatedServerName=84B5E2264EC387DEDB43179D666031A1` |

### 設定例

アップロードしたセーブフォルダ名が`84B5E2264EC387DEDB43179D666031A1`の場合、設定は以下のようになります：

```ini
DedicatedServerName=84B5E2264EC387DEDB43179D666031A1
```

現在の設定テンプレートで既に引用符が使われていない限り、追加で引用符を付けないでください。

## アップロードの確認

サーバー起動後、接続してワールドデータが正しく読み込まれているか確認してください。

以下をチェックします：

| チェック項目 | 期待される結果 |
| --- | --- |
| ワールドの読み込み | 既存のマップや建造物が存在する |
| プレイヤーデータ | 移行済みのプレイヤーデータが適用されている |
| セーブフォルダの一致 | `DedicatedServerName`がアップロードしたフォルダ名と完全一致している |
| 非推奨ファイルの削除 | 問題を起こしていた`WorldOption.sav`が存在しない |

## トラブルシューティング

アップロードが期待通りに動作しない場合、以下の原因を確認してください。

### サーバーが新規ワールドを起動する

アップロードしたセーブではなく新しいワールドが作成される場合、最も多い原因は`DedicatedServerName`の値が間違っていることです。

以下を確認してください：

- アップロードしたフォルダが`Pal/Saved/SaveGames/0/`内にある
- フォルダ名を正確にコピーしている
- `DedicatedServerName=[your_savefolder_id]`がフォルダ名と完全に一致している

### マップデータが欠落している

サーバーは起動するがワールド進行やマップデータが見えない場合、同じくフォルダ名の不一致が原因です。

- アップロードしたセーブフォルダ名
- `GameUserSettings.ini`の`DedicatedServerName`の値

が一致しているか再度確認してください。

### セーブアップロードは正しいが読み込み失敗

フォルダ構造は正しいのにセーブが読み込まれない場合：

- セーブがサポートされているソースからのものか確認
- `WorldOption.sav`があれば削除
- ファイル置き換え前にサーバーが完全停止していたか確認
- 設定変更後にサーバーを再起動

:::tip ファイルアップロードのベストプラクティス
大きなセーブをアップロードする場合、転送が完全に終わるまでサーバーを起動しないでください。早く起動するとセーブが不完全になり、ワールドが正しく読み込まれません。
:::

## まとめ

おめでとうございます。既存のPalworldセーブをZAP-Hostingサーバーに無事アップロードできました。ご不明点やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にお問い合わせください！ 🙂