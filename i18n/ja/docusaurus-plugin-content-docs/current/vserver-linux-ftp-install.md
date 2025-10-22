---
id: vserver-linux-ftp-install
title: "VPS: FTPサーバーのインストール"
description: "LinuxでFileZilla Serverを使って安全なFTPサーバーをセットアップ＆管理し、効率的にファイル転送する方法をチェック → 今すぐ詳しく見る"
sidebar_label: FTPサーバーのインストール
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

**FTP（ファイル転送プロトコル）**は、TCP/IPネットワーク上でファイルを転送するためのネットワークプロトコルです。このプロトコルはシステム間でのファイル交換を簡単にするために開発されました。**FileZilla Server**を使えば、Linux OS上にFTPサーバーを簡単に構築できます。FileZilla Serverはインストールや設定が簡単で、ユーザーアカウントの作成、アクセス権の管理、ファイル転送など多彩な機能を備えています。このガイドでは、Linuxサーバーに**FileZilla Server**をインストールし、設定する手順を解説します。

<InlineVoucher />

## インストール

FTPユーザーを追加する前に、まずFTPサーバーをインストールしましょう。サーバーにSSH（Puttyなど）で一度接続します。

FTPサーバーをインストールするには、以下のコマンドを入力します：**apt-get install proftpd**。インストール確認のために**Y**を入力して実行してください：

![](https://screensaver01.zap-hosting.com/index.php/s/seKtY9GBELG78in/preview)

次に設定ファイルを調整します。以下のコマンドを入力してください：**nano /etc/proftpd/proftpd.conf**。するとNanoエディタで設定ファイルが開きます：

![](https://screensaver01.zap-hosting.com/index.php/s/J5kS2bJFjDyLpCZ/preview)

以下の内容を追加してください：

![](https://screensaver01.zap-hosting.com/index.php/s/TZoDZpiBQi5Yb5L/preview)

設定を反映させるためにFTPサーバーを再起動します。以下のコマンドを実行してください：**service proftpd restart**

## ユーザーの追加

新しいFTPユーザーを作成するには、まずFTPグループを作成します。コマンドは**addgroup ftpuser**です。実行例は以下の通り：

![](https://screensaver01.zap-hosting.com/index.php/s/M2jnE6mWqQLKkme/preview)

次に、FTPユーザーを追加します。以下のコマンドを順に実行してください：  
**adduser benutzerftp -shell /bin/false -home /var/www**  
続けて  
**adduser benutzerftp ftpuser**

パスワード設定を求められます：

![](https://screensaver01.zap-hosting.com/index.php/s/LKsops7sKTr2jXt/preview)

入力内容を確認して続行します：

![](https://screensaver01.zap-hosting.com/index.php/s/LWdMS2j7PnRQwnd/preview)

最後に、新しいユーザーをグループに割り当てます：**adduser benutzerftp ftpuser**

![](https://screensaver01.zap-hosting.com/index.php/s/66fqTTttpM5BPkg/preview)

これで設定した情報を使って接続できます：

![](https://screensaver01.zap-hosting.com/index.php/s/ftccknJBSoC2pCH/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/zRsRHA3NWNCwcsj/preview)

## まとめ

おめでとう！FTPのインストールと設定が無事完了しました。もし質問やトラブルがあれば、いつでもサポートチームに連絡してくださいね。毎日あなたをサポートします！

<InlineVoucher />