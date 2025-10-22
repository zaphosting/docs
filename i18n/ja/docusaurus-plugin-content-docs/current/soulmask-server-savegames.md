---
id: soulmask-server-savegames
title: "Soulmask: Soulmaskセーブゲームの管理"
description: "Soulmaskのセーブデータをローカルとサーバーで安全に管理・バックアップする方法をチェック → 今すぐ詳しく知ろう"
sidebar_label: セーブゲーム管理
services:
  - gameserver-soulmask
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

このガイドでは、ゲームサーバー上でのSoulmaskのセーブゲームの管理方法を紹介します。ローカルとサーバーのセーブデータのバックアップや、サーバーへのアップロード方法も解説します。

<InlineVoucher />

## 準備

サーバーファイルにアクセスするには、[WinSCP](https://winscp.net/eng/index.php) や [FileZilla](https://filezilla-project.org/) のようなFTPクライアントが必要です。どちらもオープンソースで無料ダウンロード可能です。

ゲームサーバーのウェブインターフェースの **ツール->FTPブラウザ** にある認証情報を使ってFTPクライアントからサーバーに接続してください。接続方法については、[FTPアクセス](gameserver-ftpaccess.md) ガイドも参考にしてみてください。

## セーブゲームのバックアップ

### ローカルセーブゲーム

ローカルセーブゲームは、マルチプレイをローカルでホストしている間に作成されたものです。WindowsのローカルAppData内の以下のパスにあります：
```
../AppData/Local/WS/[your_steamid]/AutoGames
```

:::tip
`CTRL` + `R` を同時に押して「ファイル名を指定して実行」ダイアログを開き、以下のパスを入力すると簡単にアクセスできます：`%userprofile%/appdata/local/WS/`。OKを押してSteamIDのフォルダを開き、AutoGamesフォルダにアクセスしましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/FT4J9Jdi8d8LDxq/preview)
:::

この場所で、すべてのローカルセーブゲームが見られます。各フォルダはサーバーの招待コードでラベル付けされているので、正しいワールドを簡単に特定できます。

### FTP経由でのセーブゲームアクセス

サーバーからのセーブゲームのバックアップは簡単です。FTPクライアントでゲームサーバーに接続したら、以下のパスに移動してください：
```
../soulmask/WS/Saved/Worlds/Dedicated
```

ここにメインの `Level01_Main` フォルダがあり、専用サーバーのセーブデータが保存されています。フォルダを右クリックして **ダウンロード** を選択し、ローカルに保存しましょう。

:::note
現在、Soulmask専用サーバーは1つのセーブのみ対応しており、メインの `Level01_Main` フォルダに保存されています。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/Ywna6zc3BkCK6ES/preview)

### 自動バックアップ

ウェブインターフェースからセーブゲーム（と設定ファイル）の自動バックアップも設定可能です。ゲームサーバーのウェブインターフェースの **ツール->バックアップ** セクションにアクセスし、スケジュールを設定してください。10GBの無料バックアップストレージが利用可能です。バックアップの詳細は、専用の[バックアップ](gameserver-backups.md)ガイドもチェックしてみてください。

## セーブゲームのアップロード

バックアップと同様に、セーブゲームのアップロードも簡単です。まずFTPクライアントでゲームサーバーに接続し、サーバーをシャットダウンしてください。

:::note
現在、Soulmask専用サーバーは1つのセーブのみ対応しており、メインの `Level01_Main` フォルダに保存されています。
:::

準備ができたら、以下のパスに移動します：
```
../soulmask/WS/Saved/Worlds/Dedicated/Level01_Main
```

![](https://screensaver01.zap-hosting.com/index.php/s/iWKPKw5Grg4JgPi/preview)

アップロードしたいセーブの **world.db** ファイルをドラッグ＆ドロップでここに置き、既存のファイルを上書きしてください。既存のファイルを残したい場合は、上書き前に必ずサーバーからダウンロードしておきましょう。

ゲームプレイ設定ファイルもアップロード可能です。以下のパスに移動してください：
```
../soulmask/WS/Saved/GameplaySettings
```

![](https://screensaver01.zap-hosting.com/index.php/s/yqXF9EaDCin5rzT/preview)

アップロードしたいセーブの **GameXishu.json** ファイルをドラッグ＆ドロップで置き、既存のファイルを上書きします。こちらも上書き前に既存ファイルをダウンロードしておくのがおすすめです。

:::tip
もしアップロードするセーブの **GameXishu.json** ファイル名が `GameXishu_2.json` のように少し違う場合は、専用サーバーが認識できるようにファイル名を `GameXishu.json` に戻してください。
:::

あとはサーバーを再起動すれば、セーブが正常にロードされます。

<InlineVoucher />