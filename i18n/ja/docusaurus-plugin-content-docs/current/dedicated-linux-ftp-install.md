---
id: dedicated-linux-ftp-install
title: "専用サーバー：FTPサーバーのインストール"
description: "LinuxでFileZilla Serverを使って安全なFTPサーバーをセットアップ・管理し、ファイル転送やユーザーアクセスを効率化する方法を解説 → 今すぐチェック"
sidebar_label: FTPサーバーのインストール
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

**FTP（ファイル転送プロトコル）**は、TCP/IPネットワーク上でファイルを転送するためのネットワークプロトコルです。このプロトコルはシステム間でのファイル交換を簡単にするために開発されました。**FileZilla Server**を使えば、Linux OS上にFTPサーバーを簡単に構築できます。FileZilla Serverはインストールや設定がシンプルで、ユーザーアカウントの作成、アクセス権の管理、ファイル転送など多彩な機能を備えています。このガイドでは、Linuxサーバーに**FileZilla Server**をインストールし設定する手順を紹介します。

## FTPサーバーをインストールしてユーザーを追加するには？

FTPユーザーを追加するには、まずFTPサーバーをインストールする必要があります。まずはSSH（Puttyなど）でサーバーに一度接続しましょう。

FTPサーバーをインストールするには、以下のコマンドを入力します：  
```
apt-get install proftpd
```
インストール確認のために**Y**を入力して実行してください：

![](https://screensaver01.zap-hosting.com/index.php/s/MWzQMoq5yrRXP7Y/preview)

次に設定ファイルを調整します。以下のコマンドを入力して設定ファイルを開きます：  
```
nano /etc/proftpd/proftpd.conf
```
するとNanoエディタで設定ファイルが開きます：

![](https://screensaver01.zap-hosting.com/index.php/s/8X4A6MZEr27YqFf/preview)

以下の内容を追加してください：

![](https://screensaver01.zap-hosting.com/index.php/s/7ykDgQeP2qTHSbm/preview)

設定を反映させるためにFTPサーバーを再起動します。以下のコマンドを実行してください：  
```
service proftpd restart
```

## FTPユーザーを追加するには？

新しいFTPユーザーを作成するには、まずFTPグループを作成します。以下のコマンドを実行してください：  
```
addgroup ftpuser
```
実行例はこんな感じです：

![](https://screensaver01.zap-hosting.com/index.php/s/eQ2yfySHYx3Wzcp/preview)

次に、以下のコマンドでFTPユーザーを追加します：  
```
adduser benutzerftp -shell /bin/false -home /var/www
adduser benutzerftp ftpuser
```

パスワード設定を求められます：

![](https://screensaver01.zap-hosting.com/index.php/s/4cmAAMcBaoTQ4QD/preview)

入力内容を確認して、問題なければ続行します：

![](https://screensaver01.zap-hosting.com/index.php/s/6bNjWnr7ie3Cnty/preview)

最後に、ユーザーをグループに追加します：  
```
adduser benutzerftp ftpuser
```

![](https://screensaver01.zap-hosting.com/index.php/s/bj277RHHMBQtPbp/preview)

これで設定完了です。設定した情報でFTP接続が可能になります：

![](https://screensaver01.zap-hosting.com/index.php/s/7toWfnRSmQzGL9r/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/oHsAKpc7MHqEQCF/preview)