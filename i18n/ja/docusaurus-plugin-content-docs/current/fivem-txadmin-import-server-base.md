---
id: fivem-txadmin-import-server-base
title: "FiveM: txAdminでサーバーベースをインポート"
description: "txAdminを使って準備済みのサーバーベースを自分のサーバーにインポートし、素早くセットアップ＆スムーズに統合する方法をチェック → 今すぐ詳しく見る"
sidebar_label: サーバーベースのインポート
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## はじめに

ネットで見つけた準備済みのサーバーを自分のサーバーにアップロードしたい？問題なし！txAdminを使えば、いくつかの重要なポイントを押さえれば、準備済みサーバーを簡単かつスピーディにインポートできます。このガイドでは、サーバーベースのインポート方法を紹介します。



<InlineVoucher />

## 準備

セットアップを始めるには、あらかじめインターネットから準備済みのサーバーベースをPCにダウンロードし、ファイルを解凍しておく必要があります。

サーバーベースの内容はサーバーの種類や内容によって異なり、ファイル構成も変わることがありますが、基本的には以下のデータが含まれているはずです：

- **サーバー設定ファイル - `server.cfg`（必須）：** サーバーの全設定やコマンドが記載されたファイル。
- **リソースフォルダ - `resource`（必須）：** サーバーベースで使われているリソースがすべて入っています。
- **SQLファイル - `filenameXY.sql`（任意）：** リソースとデータベース間の連携に必要な完成済みのデータベース構造が含まれています（使う場合）。

ダウンロードしたサーバーベースの**データ（`server.cfg`、`resources`）**はゲームサーバーにアップロードし、**SQLファイル**は当社が提供するZAPデータベースにインポートする必要があります。

### サーバーファイル
サーバーベースのデータアップロードはFTP経由で行います。まだFTPの使い方がわからない場合は、こちらのガイドをチェック：[FTPアクセス](gameserver-ftpaccess.md)

FTPでゲームサーバーに接続し、`fivem`フォルダに移動します。まだなければサーバーベース用のフォルダを作成しましょう。ここでは例として完成済みサーバーベースの名前を**ExampleServer**とします。

![img](https://screensaver01.zap-hosting.com/index.php/s/HzDrADKgK3rqfKm/download)



フォルダを作成したら、サーバーベースのデータをアップロードします。作成したフォルダに移動し、リソースフォルダとサーバー設定ファイルをアップロードしてください。結果はこんな感じになります：

![img](https://screensaver01.zap-hosting.com/index.php/s/xyAZyt8W5XcxGaF/preview)

 

### データベース

サーバーベースでデータベースを使う場合は、提供されたSQLファイルをZAPデータベースにインポートする必要があります。やり方がわからなければこちらのガイドを参照：[SQLファイルのインポート](fivem-sql-file-import.md) 

ガイドの通りにSQLファイルをデータベースにインポートしてください。ただし、最初にSQLファイルの内容を編集し、ZAPデータベースの正しい名前を指定しているか必ず確認してください。`Use '...'`コマンド内の元の値をZAPデータベース名に置き換えましょう。

:::warning インポート前にSQLファイルの内容を必ずチェック
SQLファイルの内容が正しく編集されていないと、以下のエラーが出ます：

`Access denied for user ‘zapXXXXX-X’@’%’ to database ’originalDatabaseName’` 
:::



## txAdminセットアップ

サーバーの準備はこれで完了です。続いてはtxAdminのセットアップ画面でインストールや設定を行います。詳しいアクセス方法やセットアップ手順は以下のガイドを参考にしてください：[txAdminセットアップ](fivem-txadmin-setup.md)



### ようこそ

プロジェクト名を決めましょう。この名前はサーバーリスト用ではなく、txAdminのインターフェース内やチャット・Discordメッセージ用の名前です。続けて「Deployment Type（展開タイプ）」のステップへ進みます。

![img](https://screensaver01.zap-hosting.com/index.php/s/FCmd5xQ89wSPHfe/preview)

### 展開タイプ

ここではサーバーのセットアップ方法を選びます。選択肢は「Popular Recipes（人気レシピ）」「Existing Server Data（既存サーバーデータ）」「Remote URL Template（リモートURLテンプレート）」「Custom Template（カスタムテンプレート）」の4つ。今回は**Existing Server Data**を選択してください。

![img](https://screensaver01.zap-hosting.com/index.php/s/oMSBwf6jmHMwtYn/preview)

### パスの指定

次にサーバーベースの場所を指定します。フォルダ構造は以下のように始まり、作成したサーバーベース名を付け足します：`/home/zapXXXXX/gXXXXXXXX/fivem/ExampleServer`

スクリーンショットのようにフォルダ構造をコピー＆ペーストし、最後に作成したサーバーベースのフォルダ名を追加してください。結果はこんな感じになります：

![img](https://screensaver01.zap-hosting.com/index.php/s/eDPeDzSqfMbk7Tg/download)



**Next**をクリック。`server.cfg`が認識されるはずなので確認し、**Save & Start**ボタンで通常のセットアップを完了させましょう。 



## 設定

ほとんどの場合、サーバーはすぐには起動しません。IPアドレスやポートの設定ミス、データベース接続情報の不足、ライセンスキーの未設定などが原因です。なので、サーバー設定ファイルの最終調整が必要になります。

### サーバー情報

デフォルトではIPアドレスやポートの情報が空欄か間違っていることが多いです。`server.cfg`内に正しいエンドポイント情報があるか確認しましょう。書き方は以下の通り：

```
endpoint_add_tcp "0.0.0.0:30120"
endpoint_add_udp "0.0.0.0:30120"
```

IPアドレス（0.0.0.0）とポート（30120）を自分のサーバーの情報に置き換えてください。ゲームサーバーの管理画面で確認できます。

:::warning IPアドレスやポートが間違っている場合
設定が間違っていると、以下のエラーが表示されます：

```
Line XX: [ZAP-Hosting] the 'endpoint_add_tcp' interface MUST be 'XXX.XXX.XXX.XXX'
Line XX: [ZAP-Hosting] the 'endpoint_add_udp' interface MUST be 'XXX.XXX.XXX.XXX'
```
:::


### データベース

サーバーがデータベースに接続できるように、`server.cfg`にMySQL接続文字列を記述する必要があります。デフォルト例はこんな感じ：

```sql
set mysql_connection_string "mysql://username:password@dataBaseHostname/databaseName?charset=utf8mb4"
```

サーバーベースによってはすでに接続文字列がある場合もありますが、なければ追加し、正しいデータベース情報に書き換えましょう。ゲームサーバー管理画面の「Databases」から情報を確認できます。例：

```sql
set mysql_connection_string "mysql://zapXXXXXXX-X:yourDatabasePassword@mysql-mariadb-XX-XXX.zap-hosting.com/zapXXXXXX-X?charset=utf8mb4"
```

:::tip 簡単に済ませたいなら
ゲームサーバー管理画面の設定下部にある**[Reconfigure MySQL Connection String](https://screensaver01.zap-hosting.com/index.php/s/zZSmQex6ropFK3X/preview)**ボタンを押せば自動で設定できます。
:::


### Onesync

サーバーベースの`server.cfg`に**Onesync**関連の設定があれば削除してください。OnesyncはtxAdminの設定画面で管理します。設定は**Settings ⟶ FXServer**にあります。

![img](https://screensaver01.zap-hosting.com/index.php/s/Y4LKM8ZRn4ZSFzp/download)

### ライセンスキー

サーバーを動かすにはCFXから発行されるライセンスキーが必要です。作成方法は以下のガイドを参照：[自分のライセンスキー](fivem-licensekey.md)

ライセンスキーは`server.cfg`に以下のように追加します：

```
sv_licenseKey "yourLicenseKeyGoesHere"
```



## まとめ

おめでとう！ファイルのアップロード、txAdminセットアップの完了、サーバー設定の最終調整ができたら、あとはサーバーを起動してサーバーベースで遊ぶだけです。

<InlineVoucher />