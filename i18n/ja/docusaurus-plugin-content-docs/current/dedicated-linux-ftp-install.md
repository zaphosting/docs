---
id: dedicated-linux-ftp-install
title: "専用サーバー：FTPサーバーのインストール"
description: "LinuxでFileZilla Serverを使って安全なFTPサーバーをセットアップし、ファイル転送やユーザーアクセスを効率化する方法をチェック → 今すぐ詳しく見る"
sidebar_label: FTPサーバーのインストール
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

**FTP（ファイル転送プロトコル）**は、TCP/IPネットワーク上でファイルを転送するためのネットワークプロトコルです。このプロトコルはシステム間でファイルを簡単に交換できるように開発されました。**FileZilla Server**を使えば、Linux OS上にFTPサーバーを簡単に構築できます。FileZilla Serverはインストールや設定が簡単で、ユーザーアカウントの作成、アクセス権の管理、ファイル転送など多彩な機能を備えています。このガイドでは、Linuxサーバーに**FileZilla Server**をインストールし設定する手順を解説します。

<InlineVoucher />

## FTPサーバーをインストールしてユーザーを追加するには？

FTPユーザーを追加するには、まずFTPサーバーをインストールする必要があります。まずはSSH（Puttyなど）でサーバーに一度接続しましょう。

FTPサーバーをインストールするには、以下のコマンドを入力します：**apt-get install proftpd**。インストール確認のために**Y**を入力して実行してください：

![](https://screensaver01.zap-hosting.com/index.php/s/MWzQMoq5yrRXP7Y/preview)

次に設定ファイルを調整します。以下のコマンドを入力してください：**nano /etc/proftpd/proftpd.conf**。実行するとNanoエディタで設定ファイルが開きます：

![](https://screensaver01.zap-hosting.com/index.php/s/8X4A6MZEr27YqFf/preview)

以下の内容を追加してください：

![](https://screensaver01.zap-hosting.com/index.php/s/7ykDgQeP2qTHSbm/preview)

設定を反映させるためにFTPサーバーを再起動します。以下のコマンドを実行してください：**service proftpd restart**

## FTPユーザーを追加するには？

新しいFTPユーザーを作成するには、まずFTPグループを作成します。以下のコマンドを実行してください：**addgroup ftpuser**。実行例は以下の通りです：

![](https://screensaver01.zap-hosting.com/index.php/s/eQ2yfySHYx3Wzcp/preview)

次に、以下のコマンドでFTPユーザーを追加します：**adduser benutzerftp -shell /bin/false -home /var/www**、続けて**adduser benutzerftp ftpuser**を実行します。

パスワードの設定を求められます：

![](https://screensaver01.zap-hosting.com/index.php/s/4cmAAMcBaoTQ4QD/preview)

入力内容を確認して問題なければ続行します：

![](https://screensaver01.zap-hosting.com/index.php/s/6bNjWnr7ie3Cnty/preview)

最後に、ユーザーをグループに割り当てます。以下のコマンドを実行してください：**adduser benutzerftp ftpuser**。

![](https://screensaver01.zap-hosting.com/index.php/s/bj277RHHMBQtPbp/preview)

これで設定した情報を使って接続できます：

![](https://screensaver01.zap-hosting.com/index.php/s/7toWfnRSmQzGL9r/preview)


![](https://screensaver01.zap-hosting.com/index.php/s/oHsAKpc7MHqEQCF/preview)


<InlineVoucher />