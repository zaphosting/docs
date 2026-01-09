---
id: enshrouded-server-savegames
title: "Enshrouded: Enshroudedのセーブデータ管理"
description: "Enshroudedのセーブデータを管理・バックアップしてマルチプレイを安心して楽しもう → 今すぐチェック"
sidebar_label: セーブデータ管理
services:
  - gameserver-enshrouded
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

このガイドでは、ゲームサーバー上でのEnshroudedのセーブデータ管理方法を解説します。ローカルとサーバーのセーブデータのバックアップや、サーバーへのアップロード方法もカバーしています。

<InlineVoucher />

## 準備

サーバーファイルにアクセスするには、[WinSCP](https://winscp.net/eng/index.php) や [FileZilla](https://filezilla-project.org/) のようなFTPクライアントが必要です。どちらもオープンソースで無料ダウンロード可能です。

ゲームサーバーのウェブインターフェースの **ツール->FTPブラウザ** にある認証情報を使ってFTPクライアントからサーバーに接続してください。接続方法の詳細は、[FTPアクセス](gameserver-ftpaccess.md) ガイドを参考にしてください。


## セーブデータのバックアップ

### ローカルセーブデータ

ローカルセーブデータとは、自分のデバイスでマルチプレイをホストしている間に作成されたものです。EnshroudedはデフォルトでSteam Cloudを使って自動的にセーブデータをバックアップします。アクセスするには、Steamのuserdataフォルダに移動してください。パスは以下の通りです：
```
../Steam/userdata/[your_steamid]/1203620/remote
```

:::tip
通常、SteamフォルダはOSドライブの `C://Program Files x86/Steam` にあります。ただし、Steamを別の場所にインストールしている場合は異なる可能性があります。
:::

このフォルダにたどり着くと、キャラクターファイルとすべてのローカルセーブデータが一箇所にまとまっています。

![](https://screensaver01.zap-hosting.com/index.php/s/dyydLNzQt7ZWRPx/preview)

:::note
もしSteam Cloudを使わずにセーブしている場合は、セーブフォルダは以下のディレクトリにあります：`C://Users/[youruser]/Saved Games/Enshrouded`。
:::

### FTP経由でのセーブデータアクセス

サーバー上のセーブデータをバックアップするのは簡単です。FTPクライアントでゲームサーバーに接続したら、以下のパスに移動してください：
```
../enshrouded/savegame/
```

ここにランダムな文字列のファイルがあり、それがセーブデータです。ファイルを右クリックして **ダウンロード** を選択すれば、ローカルに保存できます。

![](https://screensaver01.zap-hosting.com/index.php/s/wTcodeKXYq3RBfY/preview)

### 自動バックアップ

ウェブインターフェースからセーブデータ（と設定ファイル）を自動バックアップするオプションもあります。ゲームサーバーのウェブインターフェースで **ツール->バックアップ** にアクセスし、スケジュール設定を行ってください。10GBの無料バックアップストレージが利用可能です。バックアップの詳細は専用の[バックアップ](gameserver-backups.md)ガイドもチェックしてみてください。

## セーブデータのアップロード

バックアップと同じく、アップロードも簡単です。FTPクライアントでゲームサーバーに接続し、以下のパスに移動します：
```
../enshrouded/savegame/
```

![](https://screensaver01.zap-hosting.com/index.php/s/gJW8wSapi4Bo2gw/preview)

FTPクライアント上でセーブデータをこのフォルダにドラッグ＆ドロップすれば、サーバーにアップロードされます。

## セーブデータの有効化

セーブデータの使用も超簡単。サーバーに接続し、ゲームセットアップ画面で使いたいセーブデータを選ぶだけ。セーブ名、レベル、最終プレイ日時が表示されるので、どれを使うかすぐ分かります。

これでゲームサーバーにセーブデータを追加完了です！

<InlineVoucher />