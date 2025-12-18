---
id: redm-txadmin-features
title: "RedM: txAdmin インターフェース"
description: "txAdminのフル機能ウェブパネルでRedMサーバーを効率的に管理・監視する方法 → 今すぐ詳しくチェック"
sidebar_label: txAdmin インターフェース
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## はじめに

txAdminは完全無料で使える、RedMゲームサーバーを管理＆監視するためのフル機能ウェブパネルです。RedMサーバーの管理を超簡単にするための多彩な機能が揃っています。このガイドでは、txAdminインターフェースを紹介し、その機能をピックアップしながら、具体的に何ができるのかを解説します。

![](https://screensaver01.zap-hosting.com/index.php/s/YrRXBNBX2xTnRyJ/preview)

<InlineVoucher />



## ナビゲーション

ナビゲーションメニューには以下の項目があります：**Players（プレイヤー）**、**History（履歴）**、**Whitelist（ホワイトリスト）**、**Admins（管理者）**、**Settings（設定）**、**System（システム）**。それぞれの内容を以下で詳しく説明します。

### Players（プレイヤー）

Playersセクションでは、接続したプレイヤーの統計情報をざっくり確認できます。接続した総プレイヤー数、過去24時間の接続数、過去24時間および7日間の新規プレイヤー数などが表示されます。その下には現在接続中のプレイヤー一覧があり、総プレイ時間、初回接続時間、最終接続時間も確認可能です。

プレイヤーをクリックすると、さらに管理オプションが表示されます。ここでは詳細情報、メモ、履歴（BANや警告）、ID（プレイヤー識別子、ハードウェアID）、BANオプションを確認・操作できます。

![](https://screensaver01.zap-hosting.com/index.php/s/wpRc2sW6gZZaN3S/download)





### History（履歴）

Historyセクションでは、プレイヤーに対して発行されたすべての警告やBANの一覧が表示されます。プレイヤー情報、理由、発行者や実行者、日時などの詳細も確認可能です。ここから警告やBANの取り消しもできます。

![](https://screensaver01.zap-hosting.com/index.php/s/qbLwEx39pmpY4sa/preview)

### Whitelist（ホワイトリスト）

Whitelistセクションではホワイトリスト機能の管理ができます。ホワイトリストを有効にすると、サーバーへのアクセスを制限可能です。txAdmin設定で有効にしている場合、新規プレイヤーが初めて接続すると自動でホワイトリスト申請が作成されます。ここで申請の管理ができます。

![](https://screensaver01.zap-hosting.com/index.php/s/o4K5zgGrz8G7Rqp/preview)

### Admins（管理者）

Adminsセクションでは管理者の指定と管理が可能です。**Add（追加）**ボタンを押すとポップアップが開き、アカウント作成と権限設定ができます。

![](https://screensaver01.zap-hosting.com/index.php/s/H7BYP2QqyZD6nSJ/download)

### Settings（設定）

Settingsセクションでは、txAdminとゲームサーバーの幅広い設定が行えます。設定項目が多いため、以下のカテゴリに分かれています：**General（一般）**、**FXServer**、**Restarter（再起動設定）**、**Player Manager（プレイヤーマネージャー）**、**Discord**、**Game（ゲーム）**。それぞれ詳しく説明します。

![img](https://screensaver01.zap-hosting.com/index.php/s/9r44PictxZLad6c/download)

#### General（一般）

サーバー名、チャット/Discordメッセージの言語、BANテンプレートの設定が可能です。

![](https://screensaver01.zap-hosting.com/index.php/s/y3WMSp5PPKyyDC2/preview)



#### FXServer

サーバーデータフォルダやCFGファイルパスの設定、ゲームモード/DLCの有効化、OneSyncのオンオフ、オートスタート、クワイエットモードなどの追加引数を設定できます。

![img](https://screensaver01.zap-hosting.com/index.php/s/8s5rBzAN7nsRtqe/preview)



#### Bans（BAN）

BAN機能の管理ができます。アカウントのBAN状態を常にチェックするかどうか、BANで接続拒否された際に表示するメッセージを設定可能です。

![img](https://screensaver01.zap-hosting.com/index.php/s/fTjM4EFbtB7cw4q/preview)

#### Whitelist（ホワイトリスト）

ホワイトリスト機能の有効化・無効化や、ホワイトリストにない場合に接続拒否時に表示するメッセージを設定できます。

![img](https://screensaver01.zap-hosting.com/index.php/s/6MyaBwRnroTSHbK/preview)

#### Discord

Discord連携を有効にすると、情報をリンクしたDiscordサーバーに自動送信できます。Discordボットの必要情報を設定して有効化します。

![img](https://screensaver01.zap-hosting.com/index.php/s/jSbXE9c23wjiKRf/preview)

#### Game（ゲーム）

ゲーム内で使えるtxAdminメニューを有効化できます。管理者は /tx コマンドでメニューにアクセス・管理可能です。レイアウトやスイッチ切替ボタンの設定、通知や警告のカスタマイズもできます。

![img](https://screensaver01.zap-hosting.com/index.php/s/fLo976YMdbYkHts/preview)

### System（システム）

Settingsセクション内で重要な一般オプションや情報が見られます。以下のカテゴリに分かれています：**Master Actions（マスター操作）**、**Diagnostics（診断）**、**Console Log（コンソールログ）**、**Action Log（アクションログ）**。それぞれ詳しく説明します。



#### Master Actions（マスター操作）

FXServerのリセット、データベースバックアップ、データベースのクリーンアップ、非アクティブなプレイヤーをホワイトリストから削除する期間の設定が可能です。  

![](https://screensaver01.zap-hosting.com/index.php/s/3A38EoqELeWMYJ6/download)



#### Diagnostics（診断）

環境情報、txAdminのランタイム情報、診断レポート、FXServerの /info.json、プロセス情報などが表示されます。

![](https://screensaver01.zap-hosting.com/index.php/s/4Qg9MKwwnqFXwBd/preview)

#### Console Log（コンソールログ）

txAdminの親端末での出力を表示します。通常は隠れているデバッグメッセージも含まれます。

![](https://screensaver01.zap-hosting.com/index.php/s/jsCerbambRn5DMy/preview)

#### Action Log（アクションログ）

txAdminや管理者が行ったすべての操作が記録されたアクションログを表示します。

![](https://screensaver01.zap-hosting.com/index.php/s/P65fwKRSfjDZgdo/preview)



## サイドバー

サイドバーメニューには以下の項目があります：**Dashboard（ダッシュボード）**、**Live Console（ライブコンソール）**、**Resources（リソース）**、**Server Log（サーバーログ）**、**CFG Editor（CFGエディター）**。それぞれ詳しく説明します。



### Dashboard（ダッシュボード）

ダッシュボードではサーバーの基本情報をすべて表示。利用状況やパフォーマンスのライブデータを統計でチェックできます。サーバーの状態（起動中、オンライン、停止中）もサイドバーに表示。ここからサーバーの起動・停止・再起動、ワンクリックで全プレイヤーキック、アナウンス送信も可能です。さらにスケジュール再起動の設定もできます。サイドバー右側には現在接続中のプレイヤー情報が表示されます。

![](https://screensaver01.zap-hosting.com/index.php/s/YrRXBNBX2xTnRyJ/preview)



### Live Console（ライブコンソール）

ライブコンソールではサーバーのリアルタイムアクティビティを確認できます。アクティビティ、警告、エラーメッセージの詳細が見られ、問題のデバッグに役立ちます。

![](https://screensaver01.zap-hosting.com/index.php/s/PDyPa7TfsHgTbAD/preview)

### Resources（リソース）
Resourcesセクションでは、テンプレート（レシピ）でプリインストールされたものや後から追加したすべてのリソースの一覧が見られます。必要に応じてリソースの再起動や停止も可能です。

![](https://screensaver01.zap-hosting.com/index.php/s/QJZnMTCqQpx92EL/preview)

### Server Log（サーバーログ）

サーバーログではサーバー上のすべてのアクティビティを監視できます。プレイヤーの接続・切断、チャットメッセージ、ゲーム内死亡、メニュー操作、実行コマンド、システムイベントなどの詳細が確認可能です。

![](https://screensaver01.zap-hosting.com/index.php/s/zgBGMQq3stNkstq/preview)



### CFG Editor（CFGエディター）

CFGエディターを使ってサーバーの `server.cfg` 設定ファイルを管理・更新できます。サーバー設定を制御する重要な設定コマンドがここにまとめられています。

![](https://screensaver01.zap-hosting.com/index.php/s/jqDBDqp55HoKmNB/preview)


<InlineVoucher />