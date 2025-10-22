---
id: satisfactory-savegame
title: "Satisfactory: セーブゲームの管理"
description: "Satisfactoryのゲームセーブをローカルとサーバー上で管理・バックアップする方法を解説 → 今すぐチェック"
sidebar_label: セーブゲームの管理
services:
  - gameserver-satisfactory
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

このガイドでは、Satisfactoryのゲームサーバー上でのセーブゲームの管理方法を紹介します。ローカルとサーバー上のセーブゲームのバックアップや、サーバーへのアップロード方法も解説します。

<InlineVoucher />

## 準備

サーバーファイルにアクセスするには、[WinSCP](https://winscp.net/eng/index.php)や[FileZilla](https://filezilla-project.org/)などのFTPクライアントが必要です。どちらもオープンソースで無料ダウンロード可能です。

ゲームサーバーのウェブインターフェースの **ツール->FTPブラウザ** にある認証情報を使ってFTPクライアントでサーバーに接続してください。接続方法の詳細は、[FTPアクセス](gameserver-ftpaccess.md)ガイドを参考にしてください。

## セーブゲームのバックアップ

### ローカルセーブゲーム

ローカルセーブゲームは、シングルプレイ中やローカルでマルチプレイをホストしている際に作成されるものです。WindowsのAppData内、以下のパスに保存されています：
```
../AppData/Local/FactoryGame/Saved/SaveGames
```

:::tip
`CTRL` + `R`を同時に押して、実行ダイアログに `%localappdata%/FactoryGame/Saved/SaveGames` と入力すると、直接このフォルダにアクセスできます。**OK**を押すだけで開けます。

![](https://screensaver01.zap-hosting.com/index.php/s/pbXDwJWfEPtbAY3/preview)
:::

この場所に、ローカルセーブゲームがまとめられたフォルダが見つかります。

![](https://screensaver01.zap-hosting.com/index.php/s/knB2RkXYGNR7J5M/preview)

### FTP経由でのセーブゲームアクセス

サーバー上のセーブゲームをバックアップするのは簡単です。FTPクライアントでゲームサーバーに接続したら、以下のパスに移動してください：
```
../satisfactory/save-backups
```

ここにランダムな文字列のフォルダがあり、それがセーブゲームです。フォルダを右クリックして **ダウンロード** を選択すれば、ローカルに保存できます。

![](https://screensaver01.zap-hosting.com/index.php/s/feHc74QHrzPwo24/preview)

### 自動バックアップ

ウェブインターフェースからセーブゲーム（と設定ファイル）を自動でバックアップするオプションもあります。ゲームサーバーのウェブインターフェースで **ツール->バックアップ** にアクセスし、スケジュール設定が可能です。10GBの無料バックアップストレージが利用でき、そこにバックアップが保存されます。バックアップの詳細は専用の[バックアップ](gameserver-backups.md)ガイドもチェックしてください。

## セーブゲームのアップロード

バックアップと同じく、アップロードも簡単です。まずFTPクライアントでゲームサーバーに接続し、以下のパスに移動します：
```
../satisfactory/save-backups
```

![](https://screensaver01.zap-hosting.com/index.php/s/8WsKYjYzNk54A65/preview)

FTPクライアントでセーブゲームフォルダをドラッグ＆ドロップすれば、サーバーにアップロードされます。

:::tip
アップロードしたセーブゲームフォルダの名前を控えておくと、次のセクションで有効化するときに便利です。
:::

## セーブゲームの有効化

セーブゲームの使用はとても簡単です。ゲーム内のSatisfactoryサーバーマネージャーから管理するか、サーバーのダッシュボードにある **セーブゲームマネージャー** セクションから操作できます。

## まとめ

これでゲームサーバーにセーブゲームを追加できました。質問やサポートが必要な場合は、いつでもサポートチームにお問い合わせください。毎日対応していますよ！🙂

<InlineVoucher />