---
id: fivem-resolve-dbconnection
title: "FiveM：データベース接続問題の解決方法"
description: "FiveMサーバーのデータベース接続問題を解決し、データベースとのシームレスな通信を復元する方法をチェック → 今すぐ詳しく見る"
sidebar_label: DB接続の解決
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Oxmysqlは、FiveMサーバーにプリインストールされている便利なオープンソースのFiveMリソースで、サーバーとデータベース間の通信を可能にします。開発中に、データベースの認証情報を更新するなどの変更を行うと、oxmysqlの接続文字列も更新する必要が出てくることがあります。データベース接続問題の例はこちら：

![](https://screensaver01.zap-hosting.com/index.php/s/G5zACEEErfP4EHG/preview)

このガイドでは、FiveMサーバーの設定ファイル内の接続文字列を調整して、データベース接続問題を解決する方法を紹介します。

<InlineVoucher />

## 自動解決方法

まずはウェブサイトのサーバーのウェブインターフェースパネルを開き、**設定**セクションに移動しましょう。

![img](https://screensaver01.zap-hosting.com/index.php/s/nizHMSk7oXCsJS4/download)

このページの一番下までスクロールすると、**アクション**ボタンが見つかります。ここで**MySQL接続文字列を再設定**ボタンを押し、その後サーバーを再起動すれば変更が反映されます。

![](https://screensaver01.zap-hosting.com/index.php/s/eZoSBJcbCr7422K/preview)

これで`server.cfg`ファイルが現在の正しい認証情報で自動的に更新され、データベースが再び正常に動作するはずです。

## 手動解決方法

手動で解決する場合は、`server.cfg`ファイルにアクセスし、ウェブインターフェースパネルで確認できる認証情報を使って接続文字列を直接編集します。まずtxAdminインターフェースにログインし、CFGエディターを開きます。別タブで**ツール -> データベース**セクションに移動すると、現在の認証情報が確認できます。

![](https://screensaver01.zap-hosting.com/index.php/s/7JJgtatLzZRXCDM/preview)

`server.cfg`ファイル内に以下の行を追加（または既にあれば**置き換え**）し、ウェブインターフェースで確認した認証情報を入力してください。

```
set mysql_connection_string "mysql://USER:PASSWORD@SERVER:3306/DATABASE"
```

![](https://screensaver01.zap-hosting.com/index.php/s/sf9sMJoZyJttHBE/preview)

編集が終わったらファイルを保存し、サーバーを再起動しましょう。

## まとめ

次回サーバー起動時には、サーバーがデータベースにアクセスできるようになり、正常に動作するはずです。これでデータベース接続問題は無事解決です。もし質問やサポートが必要な場合は、いつでもお気軽にサポートチームまでご連絡くださいね！🙂

<InlineVoucher />