---
id: moe-server-savegames
title: "Myth of Empires: セーブゲームの管理"
description: "Myth of Empiresのゲームセーブを安全に管理・バックアップして、スムーズなプレイ継続を実現しよう → 今すぐ詳しくチェック"
sidebar_label: セーブゲーム管理
services:
  - gameserver-moe
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

このガイドでは、Myth of Empiresのゲームサーバー上でのセーブゲームの管理方法を解説します。ローカルとサーバー上のセーブゲームのバックアップや、サーバーへのアップロード方法もカバーしています。

<InlineVoucher />

## 準備

サーバーファイルにアクセスするには、[WinSCP](https://winscp.net/eng/index.php)や[FileZilla](https://filezilla-project.org/)などのFTPクライアントが必要です。どちらもオープンソースで無料ダウンロード可能です。

ゲームサーバーのウェブインターフェースの **Tools->FTP-Browser** にある認証情報を使って、FTPクライアントからサーバーに接続してください。接続方法については、[FTPアクセス](gameserver-ftpaccess.md) ガイドも参考にしてください。

## セーブゲームのバックアップ

### ローカルセーブゲーム

ローカルセーブゲームは、あなたのデバイス上でマルチプレイゲームをホストしている間に作成されたものです。MOEはこれらをゲームインストールフォルダ内の特定のフォルダに保存しています。

Steamを開き、**Myth of Empires** を右クリックして **管理** セクションの中の **ローカルファイルを閲覧** を選択してください。

![](https://screensaver01.zap-hosting.com/index.php/s/Cmj325wLSWgNGif/preview)

以下のパスに移動します：
```
../WindowsPrivateServer/MOE/Saved/SaveGames/
```

このフォルダ内に、現在存在するすべてのローカルセーブゲームが表示されます。

### FTP経由でのセーブゲームアクセス

サーバー上のセーブゲームのバックアップは簡単です。FTPクライアントでゲームサーバーに接続したら、以下のパスに移動してください：
```
../moe-dedicated/MOE/Saved/SaveGames/
```

ここにセーブゲームのフォルダがあるはずです。フォルダを右クリックして **ダウンロード** ボタンを使い、ローカルデバイスに保存しましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/3yN723tY8eiBb2w/preview)

### 自動バックアップ

ウェブインターフェースからセーブゲーム（と設定ファイル）を自動バックアップするオプションもあります。ゲームサーバーのウェブインターフェースの **Tools->Backups** セクションにアクセスし、バックアップのスケジュール設定が可能です。10GBの無料バックアップストレージが利用でき、そこにバックアップが保存されます。バックアップについて詳しくは、専用の[バックアップ](gameserver-backups.md)ガイドをチェックしてください。

## セーブゲームのアップロード

バックアップと同様に、セーブゲームのアップロードも簡単です。まずFTPクライアントでゲームサーバーに接続し、以下のパスに移動します：
```
../moe-dedicated/MOE/Saved/SaveGames/
```

![](https://screensaver01.zap-hosting.com/index.php/s/KLD26KTYZYpfoqP/preview)

FTPクライアント上でセーブゲームフォルダをドラッグ＆ドロップすれば、サーバーにアップロードされます。

## セーブゲームの有効化

セーブゲームを使うには、サーバー設定で選択する必要があります。最も簡単なのは、ゲームサーバーのウェブインターフェースの **Settings** セクションにアクセスすることです。詳しくは[サーバー設定](moe-configuration.md)ガイドを参照してください。

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)

ここで、基本設定の **Map Name** パラメータを見つけてください。アップロードしたワールドがここに表示されているはずです。表示されない場合は、アップロード後にサーバーを再起動してください。

これでゲームサーバーにセーブゲームを追加できました。

<InlineVoucher />