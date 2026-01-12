---
id: vserver-windows-installmysql
title: "VPS：MySQLのインストール"
description: "Windows VPSで信頼性の高いデータ管理のために、自分だけのMySQLデータベースサーバーをセットアップしてセキュリティを強化する方法をチェック → 今すぐ詳しく見る"
sidebar_label: MySQLのインストール
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## はじめに

MySQLサーバーは様々なアプリケーションで必要とされ、例えばゲームサーバーやウェブサイトの重要なデータを管理することができます。ここでは、Windows VPS上に自分だけのMySQLデータベースサーバーをセットアップする方法を解説します。
<InlineVoucher />

## インストール

まずはリモートデスクトップ接続でサーバーにアクセスし、データベースサーバーとして使われる最新のMariaDBをダウンロードします：[MariaDB ダウンロード](https://mariadb.org/download/?t=mariadb)。ダウンロードしたアーカイブはWinRARや7Zipで解凍し、インストールファイルをダブルクリックで起動してください。

その後、インストール画面で**Next**をクリックしながら進めていき、rootパスワードの入力を求められたら以下の画面になります：

![](https://screensaver01.zap-hosting.com/index.php/s/gMrr8aHEM2eAG22/preview)

ここでデータベースサーバーへのアクセス用のマスターパスワードを設定します。誰にも知られない強力なパスワードを必ず使いましょう！

:::info
重要！NavicatやHeidiSQLなどのツールで外部からデータベースにアクセスしたい場合は、**Enable access from remote machines for root user**（rootユーザーのリモートアクセスを有効にする）オプションを必ず有効にしてください！ただし、セキュリティ上の理由から通常は推奨しません。
:::

その後は**Next**をクリックしてインストールの最後まで進み、最後に**Install**をクリックします：

![](https://screensaver01.zap-hosting.com/index.php/s/qYT3rrDrcXRb4gc/preview)

これでデータベースサーバーが起動し、使用可能な状態になりました！

## 外部アクセスの設定

インストール時に「Enable access from remote machines for root user」を有効にした場合は、WindowsファイアウォールでMySQLのポート**3306**を開放する必要があります。ファイアウォールを開き、新しいルールを作成してください。
ポート開放の方法は以下のガイドを参考にしてください：
[ポート開放（ファイアウォール）](vserver-windows-port.md)

これで外部からMySQLサーバーにアクセスできるようになります！



## まとめ

おめでとうございます！VPSにMySQLサーバーを無事インストールし、設定も完了しました。もし質問や問題があれば、毎日対応しているサポートチームまでお気軽にお問い合わせください！

<InlineVoucher />