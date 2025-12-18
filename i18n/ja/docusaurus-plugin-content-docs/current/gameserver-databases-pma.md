---
id: gameserver-databases-pma
title: 'ゲームサーバー：PHPMyAdminアクセス'
description: "ZAP-HostingのゲームサーバーでphpMyAdminを使ってMySQLデータベースを効率的に管理し、スムーズなデータベース操作を実現 → 今すぐ詳しくチェック"
sidebar_label: PHPMyAdmin
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

phpMyAdminを使えば、MySQLデータベースをウェブインターフェースから素早く簡単に管理できます。ZAP-Hostingではゲームサーバー製品にMySQLデータベースが含まれており、phpMyAdminはもちろん、NavicatやHeidiSQLなどの外部MySQL管理ツールでも操作可能です。こちらの使い方は[外部データベースアクセス](gameserver-database-external-access.md)ガイドでも紹介しています。

<InlineVoucher />

## phpMyAdminへのログイン

まずはゲームサーバー用に作成されたデータベース一覧にアクセスします。サーバーの左サイドバーの「ツール」タブ内にある「データベース」メニューを開きましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/ay9X6jBsCRWYdDB/preview)

このページにはサーバーのすべてのデータベースが一覧表示されます。phpMyAdminへのログインはとっても簡単で、システムが自動的にログイン処理をしてくれます。青い「管理」ボタンをクリックするだけでOKです。

:::info
もし自動ログインがうまくいかない場合は、該当のユーザー情報を使って手動でログインしてください。情報はこの例の赤枠部分から確認できます。
:::


## テーブル操作ツール

最初に表示されるのはphpMyAdminのスタートページです。各データベースのテーブルを表示・編集するには、対象のデータベースを開きます。

![](https://screensaver01.zap-hosting.com/index.php/s/DFTDGKm47ngaB9R/preview)

すると、そのデータベース内のすべてのテーブルと、各種操作ができるツールが一覧表示されます。例えば、赤い「削除」ボタンをクリックするとテーブルを削除できます。

![](https://screensaver01.zap-hosting.com/index.php/s/dkPqEj5xgQoHgHD/preview)

複数のテーブルに対して一括で操作を行いたい場合は、左端のチェックボックスをクリックして選択してください。すべてのテーブルに適用したい場合は「すべて選択」ボタンを使うと一括選択できます。その後、ドロップダウンメニューから希望の操作を選び、「OK」をクリックして実行します。

![](https://screensaver01.zap-hosting.com/index.php/s/Qip8TDLbeezT67F/preview)


## テーブル内容の編集

テーブル内の値は、該当フィールドをダブルクリックするだけで簡単に編集可能です。ただし、編集が可能な設定になっているテーブルである必要があります。編集可能な場合は、下記のように3つのアクションボタンが表示されます。

![](https://screensaver01.zap-hosting.com/index.php/s/H7twJagPyR7L66w/preview)


## SQLコマンドの実行

phpMyAdminでは通常のSQLコマンドも実行できます。まず対象のデータベースを選択し、メニューバー上部の「SQL」メニューを開きます。

コマンド入力画面が表示されたら、実行したいSQLコマンドを入力し、「OK」をクリックして実行してください。

![](https://screensaver01.zap-hosting.com/index.php/s/jJcmLGcXAfxQgkH/preview)

<InlineVoucher />