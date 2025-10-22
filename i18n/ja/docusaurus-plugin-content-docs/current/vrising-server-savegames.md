---
id: vrising-server-savegames
title: "V Rising: V Risingのセーブデータ管理"
description: "V Risingのゲームセーブデータの管理とバックアップ方法を解説。マルチプレイを安全に楽しむためのポイントをチェック → 今すぐ詳しく"
sidebar_label: セーブデータ管理
services:
  - gameserver-vrising
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

このガイドでは、V Risingのゲームサーバー上でのセーブデータ管理方法を紹介します。ローカルとサーバーのセーブデータのバックアップや、サーバーへのアップロード方法を解説します。

<InlineVoucher />

## 準備

サーバーファイルにアクセスするには、[WinSCP](https://winscp.net/eng/index.php)や[FileZilla](https://filezilla-project.org/)などのFTPクライアントが必要です。どちらもオープンソースで無料ダウンロード可能です。

ゲームサーバーのウェブインターフェースの **ツール->FTPブラウザ** にある認証情報を使ってFTPクライアントでサーバーに接続してください。接続方法の詳細は、[FTPアクセス](gameserver-ftpaccess.md) ガイドを参考にしてください。

## セーブデータのバックアップ

### ローカルセーブデータ

ローカルセーブデータは、自分のデバイスでマルチプレイゲームをホストした際に作成されるものです。WindowsのLocalLow AppData内、以下のパスにあります：
```
../AppData/LocalLow/Stunlock Studios/VRising
```

:::tip
`CTRL` + `R` を同時に押して「ファイル名を指定して実行」を開き、以下のパスを入力すると直接アクセスできます：`%userprofile%/appdata/locallow/Stunlock Studios/VRising`。**OK**を押すとフォルダが開きます。

![](https://screensaver01.zap-hosting.com/index.php/s/dz4ytiTai5jD2ep/preview)
:::

この場所には、Steamクラウドセーブ機能の使用状況やサーバーの種類によって、`Saves` と/または `CloudSaves` フォルダが表示されます。中に入るとローカルのセーブデータが見つかります。

:::note
ゲームのバージョンによって、セーブデータはv1またはv3フォルダ内に保存されます。
:::

### FTP経由でのセーブデータアクセス

サーバー上のセーブデータのバックアップは簡単です。FTPクライアントでゲームサーバーに接続したら、以下のパスに移動してください：
```
../vrising/save-data/Saves
```

ここにv1とv3のフォルダがあり、ゲームのバージョンによって異なります。各フォルダ内にセーブデータがあるので、フォルダを右クリックして **ダウンロード** を選択し、ローカルに保存しましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/tZ4HngqLeHTkizz/preview)

### 自動バックアップ

ウェブインターフェースからセーブデータ（と設定ファイル）を自動でバックアップするオプションもあります。ゲームサーバーのウェブインターフェースで **ツール->バックアップ** に進み、スケジュール設定を行ってください。10GBの無料バックアップストレージが利用可能です。バックアップの詳細は専用の[バックアップ](gameserver-backups.md)ガイドをチェック！

## セーブデータのアップロード

バックアップと同様に、セーブデータのアップロードも簡単です。まずFTPクライアントでゲームサーバーに接続し、以下のパスに移動します：
```
../vrising/save-data/Saves
```

![](https://screensaver01.zap-hosting.com/index.php/s/RXd4aoxrA6QnP46/preview)

セーブデータのバージョンに合わせて、該当するフォルダにドラッグ＆ドロップでアップロードしてください。

:::tip
アップロードしたセーブデータのフォルダ名は控えておくと便利です。次のセクションで有効化する際に必要になります。
:::

## セーブデータの有効化

特定のセーブデータを使うには、設定ファイルの編集が必要です。いくつか方法がありますが、ここでは一番簡単なウェブインターフェースでの編集方法を紹介します。他の編集方法は[サーバー設定](vrising-configuration.md)ガイドを参照してください。

ゲームサーバーのウェブインターフェースの **設定** セクションにある **Savename** の項目を探します。

ここに、先ほどアップロードしたセーブデータのフォルダ名を入力し、画面下の緑色の **保存** ボタンを押して保存してください。その後、サーバーを再起動すれば設定が反映されます。

<InlineVoucher />