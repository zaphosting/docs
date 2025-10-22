---
id: gameserver-database-external-access
title: 'ゲームサーバー：外部データベースアクセス'
description: "NavicatやHeidiSQLなどのツールを使ってZAP-HostingのMySQLデータベースを管理する方法 → 今すぐ詳しくチェック"
sidebar_label: 外部データベースアクセス
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

ZAP-Hostingでは、ゲームサーバー製品にMySQLデータベースが標準で付属しています。これらはphpMyAdminを使った内部管理だけでなく、NavicatやHeidiSQLなどのMySQL管理ツールを使って外部からも管理可能です。

データベースにアクセスするためにはユーザー認証情報が必要です。これらはゲームサーバーの管理画面内のデータベースセクションで確認できます。必要な情報は、**サーバー/IPアドレス**、**データベース名**、**ユーザー名**、**パスワード**、そしてデフォルトのポート番号 **3306** です：

![](https://screensaver01.zap-hosting.com/index.php/s/GLG56HQ737rNC7R/preview)

<InlineVoucher />

## 準備

まずはソフトウェアが必要です。ここでは例として[Navicat](https://www.chip.de/downloads/Navicat-Lite_70358373.html)または[HeidiSQL](https://www.heidisql.com/download.php)を紹介します。ダウンロードしたファイルを実行し、セットアップ手順に従ってインストールしてください。完了したらプログラムを起動し、データベースへの接続設定を行います。

## HeidiSQL

HeidiSQLで接続を確立するには、「New」で新しい接続を作成します。

![](https://screensaver01.zap-hosting.com/index.php/s/CgwFCeHErLAokHo/preview)

Hostname / IPにはデータベースのホスト名を入力します。例では「mysql-mariadb-5-101.zap-hosting.com」です。ユーザー名とパスワードも管理画面の情報を使い、ポートは3306のままにします。

その後、「Open」をクリックするだけです。


## Navicat

Navicatで接続を作成するには、新しい接続を作成し、**Connection**で**MySQL**を選択します。すると別ウィンドウが開き、データベース情報を入力します。

![](https://screensaver01.zap-hosting.com/index.php/s/rFBDYidqnBc4TZB/preview)

**Connection Name**はデータベース一覧での識別用なので好きな名前を付けてOKです。その他の情報は上記の管理画面の内容を入力してください。入力後、**OK**をクリックして設定完了です。左側のデータベース一覧から接続を開けます。ダブルクリックするか右クリックして「Open connection」を選択してください：

![](https://screensaver01.zap-hosting.com/index.php/s/Gy7jjBDHiR5n5gn/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/WyqzoLaEP6yQn85/preview)

その後、すべてのデータベーステーブルが表示されます。phpMyAdminと同様にクリック操作やSQLコマンドでデータベースの編集・管理が可能です。
![](https://screensaver01.zap-hosting.com/index.php/s/FxDrm2K3f7YwLqS/preview)





## まとめ

これでデータベースへの接続が無事に完了し、管理ができるようになりました。もし質問やサポートが必要な場合は、いつでもお気軽にサポートチームまでご連絡くださいね！毎日対応していますよ！🙂

<InlineVoucher />