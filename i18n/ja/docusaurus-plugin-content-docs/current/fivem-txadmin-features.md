---
id: fivem-txadmin-features
title: "FiveM: txAdmin インターフェース"
description: "txAdminの多機能ウェブパネルでFiveMゲームサーバーを効率的に管理・監視する方法 → 今すぐ詳しくチェック"
sidebar_label: txAdmin インターフェース
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## はじめに

txAdminは完全無料で使える、多機能なウェブパネルで、FiveMゲームサーバーの管理と監視を簡単に行えます。FiveMゲームサーバーの運営を超ラクにするための豊富な機能が揃っています。このガイドでは、txAdminのインターフェースを紹介し、その機能やできることをわかりやすく解説します。

![](https://screensaver01.zap-hosting.com/index.php/s/YrRXBNBX2xTnRyJ/preview)

<InlineVoucher />



## ナビゲーション

ナビゲーションメニューには、**Players（プレイヤー）**、**History（履歴）**、**Whitelist（ホワイトリスト）**、**Admins（管理者）**、**Settings（設定）**、**System（システム）**の項目があります。以下でそれぞれ詳しく説明します。

### Players（プレイヤー）

Playersセクションでは、接続したプレイヤーの統計情報をざっくり確認できます。総接続数、過去24時間の接続数、過去24時間および7日間の新規プレイヤー数などが表示されます。その下には現在接続中のプレイヤー一覧があり、総プレイ時間、初回接続時間、最終接続時間も見れます。

プレイヤーをクリックすると、さらに管理オプションが表示されます。ここでは詳細情報、メモ、履歴（BANや警告）、ID（プレイヤー識別子やハードウェアID）、BANの操作が可能です。

![](https://screensaver01.zap-hosting.com/index.php/s/wpRc2sW6gZZaN3S/download)





### History（履歴）

Historyセクションでは、プレイヤーに対して発行されたすべての警告やBANが一覧で見れます。プレイヤー情報、理由、発行者や実行者、日時などの詳細も確認可能。警告やBANの取り消しもここから行えます。

![](https://screensaver01.zap-hosting.com/index.php/s/qbLwEx39pmpY4sa/preview)

### Whitelist（ホワイトリスト）

Whitelistセクションではホワイトリスト機能の管理ができます。ホワイトリストを有効にすると、サーバーへのアクセスを制限可能です。txAdmin設定で有効にしている場合、新規プレイヤーが初めて接続すると自動でホワイトリスト申請が作成されます。ここで申請の管理ができます。

![](https://screensaver01.zap-hosting.com/index.php/s/o4K5zgGrz8G7Rqp/preview)

### Admins（管理者）

Adminsセクションでは管理者の指定と管理ができます。**Add（追加）**ボタンを押すとポップアップが開き、アカウント作成と権限設定が可能です。

![](https://screensaver01.zap-hosting.com/index.php/s/H7BYP2QqyZD6nSJ/download)

### Settings（設定）

Settingsセクションでは、txAdminとゲームサーバーの幅広い設定が行えます。設定項目が多いため、**Global（全般）**、**FXServer**、**Bans（BAN）**、**Whitelist（ホワイトリスト）**、**Discord**、**Game（ゲーム）**のカテゴリに分かれています。以下で詳しく解説します。

![img](https://screensaver01.zap-hosting.com/index.php/s/9r44PictxZLad6c/download)

#### Global（全般）

サーバー名、チャットやDiscordメッセージの言語、BANテンプレートの設定ができます。

![img](https://screensaver01.zap-hosting.com/index.php/s/7mr4D28GGqfPQQw/preview)

#### FXServer

サーバーデータフォルダやCFGファイルパスの設定、ゲームモードやDLCの有効化、OneSyncのON/OFF、オートスタートやクワイエットモードなどの追加引数を設定できます。

![img](https://screensaver01.zap-hosting.com/index.php/s/8s5rBzAN7nsRtqe/preview)



#### Bans（BAN）

BAN機能の管理ができます。アカウントのBAN状態を常にチェックするかどうかや、BANで接続拒否された際に表示するメッセージを設定可能です。

![img](https://screensaver01.zap-hosting.com/index.php/s/fTjM4EFbtB7cw4q/preview)

#### Whitelist（ホワイトリスト）

ホワイトリスト機能のON/OFF設定や、ホワイトリストに登録がない場合に接続拒否された際のメッセージを設定できます。

![img](https://screensaver01.zap-hosting.com/index.php/s/6MyaBwRnroTSHbK/preview)



#### Discord

Discord連携を有効にすると、情報が連携されたDiscordサーバーに自動送信されます。Discordボットの必要情報を設定して有効化します。

![img](https://screensaver01.zap-hosting.com/index.php/s/jSbXE9c23wjiKRf/preview)

#### Game（ゲーム）

ゲーム内で使えるtxAdminメニューを有効化できます。管理者は /tx コマンドでメニューにアクセス・管理可能。レイアウトやスイッチ切替用ボタンの設定、通知や警告のカスタマイズもできます。

![img](https://screensaver01.zap-hosting.com/index.php/s/fLo976YMdbYkHts/preview)

### System（システム）

Settingsセクションでは、重要な一般オプションや情報が見れます。**Master Actions（マスター操作）**、**Diagnostics（診断）**、**Console Log（コンソールログ）**、**Action Log（アクションログ）**のカテゴリに分かれています。以下で詳しく説明します。



#### Master Actions（マスター操作）

FXServerのリセット、データベースのバックアップ、データベースのクリーンアップ、長期間非アクティブなプレイヤーをホワイトリストから削除するタイミングの設定ができます。

![](https://screensaver01.zap-hosting.com/index.php/s/3A38EoqELeWMYJ6/download)



#### Diagnostics（診断）

環境情報、txAdminのランタイム情報、診断レポート、FXServerの /info.json、プロセス情報などが表示されます。

![](https://screensaver01.zap-hosting.com/index.php/s/4Qg9MKwwnqFXwBd/preview)

#### Console Log（コンソールログ）

txAdminの親端末での出力を表示。通常は隠れているデバッグメッセージも確認できます。

![](https://screensaver01.zap-hosting.com/index.php/s/jsCerbambRn5DMy/preview)

#### Action Log（アクションログ）

txAdminや管理者が行ったすべての操作を記録したログを表示します。

![](https://screensaver01.zap-hosting.com/index.php/s/P65fwKRSfjDZgdo/preview)



## サイドバー

サイドバーメニューには、**Dashboard（ダッシュボード）**、**Live Console（ライブコンソール）**、**Resources（リソース）**、**Server Log（サーバーログ）**、**CFG Editor（CFGエディター）**の項目があります。以下で詳しく解説します。



### Dashboard（ダッシュボード）

ダッシュボードではサーバーの基本情報を一目で確認できます。統計情報で利用状況やパフォーマンスのリアルタイムデータを監視可能。サーバーの状態（起動中、オンライン、停止中）がサイドバーに表示され、そこからサーバーの起動・停止・再起動、ワンクリックで全プレイヤーキック、アナウンス送信もできます。さらにスケジュール再起動の設定も可能。サイドバー右側には現在接続中のプレイヤー情報が表示されます。

![](https://screensaver01.zap-hosting.com/index.php/s/YrRXBNBX2xTnRyJ/preview)



### Live Console（ライブコンソール）

ライブコンソールではサーバーの動作状況をリアルタイムで確認できます。アクティビティ、警告、エラーメッセージの詳細が見れ、問題解決のためのデバッグに役立ちます。

![](https://screensaver01.zap-hosting.com/index.php/s/PDyPa7TfsHgTbAD/preview)

### Resources（リソース）
Resourcesセクションでは、テンプレート（レシピ）で事前インストールされたものや後から追加したすべてのリソースを一覧で確認できます。必要に応じて再起動や停止も可能です。

![](https://screensaver01.zap-hosting.com/index.php/s/QJZnMTCqQpx92EL/preview)

### Server Log（サーバーログ）

サーバーログでは、プレイヤーの接続・切断、チャットメッセージ、ゲーム内の死亡、メニュー操作、実行されたコマンド、システムイベントなど、サーバー上のすべてのアクティビティを監視できます。

![](https://screensaver01.zap-hosting.com/index.php/s/zgBGMQq3stNkstq/preview)



### CFG Editor（CFGエディター）

CFGエディターを使って、サーバーの `server.cfg` 設定ファイルを管理・更新できます。サーバー設定を制御する重要なコマンドがここにまとめられています。

![](https://screensaver01.zap-hosting.com/index.php/s/jqDBDqp55HoKmNB/preview)


<InlineVoucher />