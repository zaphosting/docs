---
id: foundry-server-savegames
title: "Foundry: Foundryセーブゲームの管理"
description: "Foundryのセーブデータをローカルとサーバー上で安全にバックアップ・管理して、スムーズなゲームプレイを実現する方法をチェック → 今すぐ詳しく見る"
sidebar_label: セーブゲームの管理
services:
  - gameserver-foundry
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

このガイドでは、Foundryのゲームサーバー上でのセーブゲームの管理方法について解説します。ローカルとサーバー上のセーブデータのバックアップや、サーバーへのアップロード方法もカバーしています。

<InlineVoucher />

## 準備

サーバーファイルにアクセスするには、[WinSCP](https://winscp.net/eng/index.php) や [FileZilla](https://filezilla-project.org/) といったFTPクライアントが必要です。どちらもオープンソースで無料ダウンロード可能です。

ゲームサーバーのウェブインターフェースの **ツール->FTPブラウザー** にある認証情報を使って、FTPクライアントからサーバーに接続してください。接続方法については、[FTPアクセス](gameserver-ftpaccess.md) ガイドも参考にしてください。

## セーブゲームのバックアップ

### ローカルセーブゲーム

ローカルセーブゲームは、あなたのデバイス上でマルチプレイヤーゲームをホストしている間に作成されたものです。WindowsのLocalLow AppData内の以下のパスにあります：
```
../AppData/LocalLow/Channel 3 Entertainment/Foundry/save
```

:::tip
`CTRL` + `R` を同時に押して「ファイル名を指定して実行」ダイアログを開き、以下のパスを入力すると直接アクセスできます：`%userprofile%/appdata/locallow/Channel 3 Entertainment/foundry/save`。**OK**を押せばフォルダが開きます。

![](https://screensaver01.zap-hosting.com/index.php/s/E6rniERFyc5AdS9/preview)
:::

この場所で、すべてのローカルセーブゲームを確認できます。

![](https://screensaver01.zap-hosting.com/index.php/s/LGPj2xZNGeCJpjt/preview)

### FTP経由でのセーブゲームアクセス

サーバー上のセーブゲームのバックアップは簡単です。FTPクライアントでゲームサーバーに接続したら、以下のパスに移動してください：
```
../foundry/saves/save
```

ここに各セーブゲームごとのフォルダが見えるはずです。フォルダを右クリックして **ダウンロード** を選べば、ローカルに保存できます。

![](https://screensaver01.zap-hosting.com/index.php/s/X2f3Fo27GCyFe3m/preview)

### 自動バックアップ

ウェブインターフェースからセーブゲーム（と設定ファイル）を自動でバックアップするオプションもあります。ゲームサーバーのウェブインターフェースの **ツール->バックアップ** セクションにアクセスし、スケジュール設定などを行ってください。無料で10GBのバックアップストレージが利用可能です。バックアップの詳細は専用の[バックアップ](gameserver-backups.md)ガイドもチェックしてみてください。

## セーブゲームのアップロード

バックアップと同様に、セーブゲームのアップロードも簡単です。まずFTPクライアントでゲームサーバーに接続し、以下のパスに移動します：
```
../foundry/saves/save
```

![](https://screensaver01.zap-hosting.com/index.php/s/CobaowD4JLPWte7/preview)

FTPクライアントでセーブゲームフォルダをこのフォルダにドラッグ＆ドロップすれば、サーバーにアップロードされます。

:::tip
アップロードしたセーブゲームフォルダの名前は控えておくと便利です。次のセクションで有効化する際に必要になります。
:::

## セーブゲームの有効化

特定のセーブゲームを使うには、設定ファイルの編集が必要です。いくつか方法がありますが、ここでは一番使いやすいウェブインターフェースからの編集方法を紹介します。他の編集方法は[サーバー設定](foundry-configuration.md)ガイドを参照してください。

ゲームサーバーのウェブインターフェースの **設定** セクションに行き、**Savename** の設定を探します。

ここを、先ほどアップロードしたセーブゲームフォルダの名前に変更してください。変更後は画面下の緑色の **保存** ボタンを押して保存し、サーバーを再起動しましょう。

<InlineVoucher />