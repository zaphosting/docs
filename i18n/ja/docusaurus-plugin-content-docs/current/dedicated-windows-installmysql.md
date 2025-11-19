---
id: dedicated-windows-installmysql
title: "専用サーバー：MySQLのインストール"
description: "Windows専用サーバーで信頼性の高いデータ管理のために、自分だけのMySQLデータベースサーバーをセットアップしてセキュリティを強化する方法 → 今すぐ詳しく見る"
sidebar_label: MySQLのインストール
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

MySQLサーバーはさまざまなアプリケーションで必要とされ、例えばゲームサーバーやウェブサイトの重要なデータを管理することができます。ここでは、Windows専用サーバー上に自分だけのMySQLデータベースサーバーをセットアップする方法を解説します。



## インストール

まずはリモートデスクトップ接続でサーバーにアクセスし、データベースサーバーとして使われるMariaDBの最新バージョンをダウンロードします：[MariaDB ダウンロード](https://mariadb.org/download/?t=mariadb)。

ダウンロードしたアーカイブをWinRARや7Zipで解凍し、インストールファイルをダブルクリックで起動します：

![](https://screensaver01.zap-hosting.com/index.php/s/53N4nAFHyrH4y3Q/preview)

その後、**Next**をクリックしてインストールを進め、rootパスワードの入力を求められたら以下の画面になります：

![](https://screensaver01.zap-hosting.com/index.php/s/eaPM9S8DFkyL2cK/preview)

ここでデータベースサーバーへのアクセス用のマスターパスワードを設定します。必ず他人に知られない安全なパスワードを使ってください！

:::info
重要！NavicatやHeidiSQLなどのツールで外部からデータベースにアクセスしたい場合は、**Enable access from remote machines for root user（rootユーザーのリモートアクセスを有効にする）**オプションを必ず有効にしてください！ただし、セキュリティ上の理由から通常は推奨されません。
:::

その後も**Next**をクリックしてインストールを進め、最後に**Install**をクリックします：

![](https://screensaver01.zap-hosting.com/index.php/s/btHcmpYicgiraY4/preview)

これであなたのデータベースサーバーがオンラインになり、使用可能な状態です！

## 外部アクセスの設定

インストール時に「Enable access from remote machines for root user」を有効にした場合は、WindowsファイアウォールでMySQLのポート**3306**を開放する必要があります。ファイアウォールを開き、新しいルールを作成してください。
ポート開放の方法は以下のガイドを参考にしてください：
[ポート開放（ファイアウォール）](vserver-windows-port.md)

これで外部からMySQLサーバーにアクセスできるようになります！



## まとめ

おめでとうございます、MySQLサーバーのインストールが無事完了しました。もし質問やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にお問い合わせくださいね！🙂


