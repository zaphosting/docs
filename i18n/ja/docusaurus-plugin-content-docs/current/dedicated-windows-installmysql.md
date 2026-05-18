---
id: dedicated-windows-installmysql
title: "WindowsサーバーにMySQLをセットアップ - 信頼できるデータベースを構築・管理しよう"
description: "Windows専用サーバーで自分だけのMySQLデータベースサーバーをセットアップ＆セキュアに運用する方法 → 今すぐチェック"
sidebar_label: MySQLのインストール
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

MySQLサーバーはさまざまなアプリケーションで必要とされ、例えばゲームサーバーやウェブサイトの重要なデータを管理することができます。ここでは、Windows専用サーバーに自分だけのMySQLデータベースサーバーをセットアップする方法を解説します。



## インストール

まずはリモートデスクトップ接続でサーバーにアクセスし、データベースサーバーとして使われるMariaDBの最新バージョンをダウンロードします：[MariaDB ダウンロード](https://mariadb.org/download/?t=mariadb)。

ダウンロードしたアーカイブをWinRARや7Zipで解凍し、インストールファイルをダブルクリックで起動します：

![](https://screensaver01.zap-hosting.com/index.php/s/53N4nAFHyrH4y3Q/preview)

その後、**Next**をクリックしてインストールを進め、rootパスワードの入力画面まで進みます：

![](https://screensaver01.zap-hosting.com/index.php/s/eaPM9S8DFkyL2cK/preview)

ここでデータベースサーバーへのアクセス用のマスターパスワードを設定します。誰にも知られない安全なパスワードを必ず使ってください！

:::info
重要！NavicatやHeidiSQLなどのツールで外部からデータベースにアクセスしたい場合は、**Enable access from remote machines for root user**（rootユーザーのリモートアクセスを有効にする）オプションを必ず有効にしてください！ただし、セキュリティ上の理由から通常は推奨しません。
:::

その後も**Next**をクリックしてインストールを進め、最後に**Install**をクリックします：

![](https://screensaver01.zap-hosting.com/index.php/s/btHcmpYicgiraY4/preview)

これでデータベースサーバーが起動し、利用可能な状態になりました！

## 外部アクセスの設定

インストール時に「Enable access from remote machines for root user」を有効にした場合は、WindowsファイアウォールでMySQLのポート**3306**を開放する必要があります。ファイアウォールを開き、新しいルールを作成してください。
ファイアウォールのポート開放方法は以下のガイドを参考にどうぞ：
[ポート開放（ファイアウォール）](vserver-windows-port.md)

これで外部からMySQLサーバーにアクセスできるようになります！



## まとめ

おめでとうございます！MySQLサーバーのインストールが無事完了しました。もし質問やサポートが必要な場合は、いつでもお気軽にサポートチームまでご連絡くださいね。毎日対応しています！🙂