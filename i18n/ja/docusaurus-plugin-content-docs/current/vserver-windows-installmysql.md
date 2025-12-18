---
id: vserver-windows-installmysql
title: "VPS：MySQLのインストール"
description: "Windows VPSで信頼できるデータ管理のために、自分だけのMySQLデータベースサーバーをセットアップしてセキュリティを強化する方法をチェック → 今すぐ詳しく見る"
sidebar_label: MySQLをインストール
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## はじめに

MySQLサーバーはさまざまなアプリケーションで必要とされ、例えばゲームサーバーやウェブサイトの重要なデータを管理できます。ここでは、Windows VPS上に自分だけのMySQLデータベースサーバーをセットアップする方法を説明します。
<InlineVoucher />

## インストール

まずはリモートデスクトップ接続でサーバーにアクセスし、データベースサーバーとして使われるMariaDBの最新バージョンをダウンロードします：[MariaDB ダウンロード](https://mariadb.org/download/?t=mariadb)。

ダウンロードしたアーカイブをWinRARや7Zipで解凍し、インストールファイルをダブルクリックで起動します：

![](https://screensaver01.zap-hosting.com/index.php/s/aPZn6jmLK5NZybW/preview)

その後、**Next**をクリックしながらインストールを進め、rootパスワードの入力を求められたら入力します：

![](https://screensaver01.zap-hosting.com/index.php/s/gMrr8aHEM2eAG22/preview)

ここでデータベースサーバーへのアクセス用のマスターパスワードを設定します。誰にも知られない安全なパスワードを使うようにしてください！

:::info
重要！NavicatやHeidiSQLなどのツールで外部からデータベースにアクセスしたい場合は、**Enable access from remote machines for root user（rootユーザーのリモートアクセスを有効化）**のオプションを必ず有効にしてください！ただし、セキュリティ上の理由から通常は推奨しません。
:::

その後、**Next**をクリックしてインストールの最後まで進み、**Install**をクリックします：

![](https://screensaver01.zap-hosting.com/index.php/s/qYT3rrDrcXRb4gc/preview)

これでデータベースサーバーがオンラインになり、使用可能です！

## 外部アクセスの設定

インストール時に「Enable access from remote machines for root user」を有効にした場合は、WindowsファイアウォールでMySQLのポート**3306**を開放する必要があります。ファイアウォールを開き、新しいルールを作成してください。
ポート開放の方法は以下のガイドを参考にしてください：
[ポート開放（ファイアウォール）](vserver-windows-port.md)

これで外部からMySQLサーバーにアクセスできるようになります！

## まとめ

おめでとうございます！VPSにMySQLサーバーを無事インストールして設定できました。もし質問や問題があれば、毎日対応しているサポートチームまでお気軽にお問い合わせください！

<InlineVoucher />