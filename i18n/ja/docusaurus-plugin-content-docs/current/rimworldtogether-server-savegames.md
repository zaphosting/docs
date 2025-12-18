---
id: rimworldtogether-server-savegames
title: "Rimworld Together：Rimworld Togetherのセーブゲーム管理"
description: "Rimworld Togetherのセーブゲームを管理・バックアップして、マルチプレイをスムーズに楽しもう → 今すぐチェック"
sidebar_label: セーブゲーム管理
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

このガイドでは、ゲームサーバー上でのRimworld Togetherのセーブゲーム管理方法を解説します。ローカルとサーバーのセーブゲームのバックアップや、サーバーへのアップロード方法も紹介します。

:::info
既存のバニラゲームをモッド入りのRimworld Togetherサーバーに移動すると、ゲームプレイに問題が発生する可能性が高いです。特に異なるモッド構成のサーバー間でワールドを移動する場合は注意してください。
:::

<InlineVoucher />

## 準備

サーバーファイルにアクセスするには、[WinSCP](https://winscp.net/eng/index.php) や [FileZilla](https://filezilla-project.org/) のようなFTPクライアントが必要です。どちらもオープンソースで無料ダウンロード可能です。

ゲームサーバーのウェブインターフェースの **ツール->FTPブラウザ** にある認証情報を使って、FTPクライアントからサーバーに接続してください。接続方法については、[FTPアクセス](gameserver-ftpaccess.md) ガイドも参考にしてください。


## セーブゲームのバックアップ

### ローカルセーブゲーム

ローカルセーブゲームは、あなたのデバイス上でローカルホストのマルチプレイゲーム中に作成されたものです。WindowsのLocalLow AppData内の以下のパスにあります：
```
../AppData/LocalLow/Ludeon Studios/RimWorld by Ludeon Studios/Saves
```

:::tip
`CTRL` + `R` を同時に押して、実行ダイアログに以下のパスを入力すると直接アクセスできます：`%userprofile%/appdata/locallow/Ludeon Studios/RimWorld by Ludeon Studios/Saves`。**OK**を押せばフォルダが開きます。

![](https://screensaver01.zap-hosting.com/index.php/s/LZ6Ljo2DfBoH45s/preview)
:::

ここで、すべてのローカルセーブゲームを確認できます。

### FTP経由でのセーブゲームアクセス

サーバーからセーブゲームをバックアップするのは簡単です。FTPクライアントでゲームサーバーに接続したら、以下のパスに移動してください：
```
../rimworld-together/Saves
```

ここに各セーブゲームごとのフォルダが見えるはずです。フォルダを右クリックして **ダウンロード** を選べば、ローカルデバイスに保存できます。

![](https://screensaver01.zap-hosting.com/index.php/s/yjYXnDSHs7g5eCH/preview)

### 自動バックアップ

ウェブインターフェースからセーブゲーム（と設定ファイル）を自動バックアップするオプションもあります。ゲームサーバーのウェブインターフェースで **ツール->バックアップ** セクションにアクセスし、スケジュール設定などのオプションを調整してください。10GBの無料バックアップストレージが利用可能で、そこにバックアップが保存されます。バックアップの詳細は専用の[バックアップ](gameserver-backups.md)ガイドもチェックしてみてください。

## セーブゲームのアップロード

バックアップと同様に、セーブゲームのアップロードも簡単です。まずFTPクライアントでゲームサーバーに接続し、以下のパスに移動します：
```
../rimworld-together/Saves
```

![](https://screensaver01.zap-hosting.com/index.php/s/s4zakSdKniMdGmT/preview)

FTPクライアント上でセーブゲームフォルダをドラッグ＆ドロップすれば、サーバーにアップロードされます。

:::info
冒頭でも触れたように、異なるモッド構成のサーバー間でワールドを移動すると、ゲームプレイに問題が起こる可能性が高いので注意してください。
:::

<InlineVoucher />