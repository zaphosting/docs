---
id: dedicated-windows-fivem
title: "専用サーバー：FiveM 専用サーバーセットアップ"
description: "txAdminを使って自分だけのFiveM専用サーバーをセットアップ＆運用する方法をチェック → 今すぐ詳しく知ろう"
sidebar_label: FiveM
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';




## はじめに

専用サーバーを持っていて、txAdminで自分のFiveM専用サーバーをインストール＆運用したい？それならここがピッタリ！以下では、インストールや設定に必要なステップや注意点を全部解説していくよ。 



:::warning  OSの選択とインストール済みであること
専用サーバーにすでにOSを選んでインストール済みであることが前提だよ。まだなら、まずは[専用サーバーの初期セットアップ](dedicated-setup.md)ガイドを参考にしてね。
:::



## 準備

FiveMサーバーをセットアップするには、実際のFiveM専用サーバーのセットアップを始める前にやっておくべき準備がいくつかあるよ。



### データベースのセットアップ

データベースが必要なリソースを使いたい＆インストールしたい場合は、追加で**データベースサーバー**が必要になるよ。データベースサーバーのセットアップ方法はいろいろあるけど、[MySQLのインストール](dedicated-windows-installmysql.md)ガイドでは専用サーバー上に自分の**データベースサーバー**をインストールする方法を紹介してるよ。



### FiveMサーバーソフトのダウンロード

次はFiveMサーバーソフトをダウンロードしよう。インストール済みの好きなブラウザで[Server Build List](https://runtime.fivem.net/artifacts/fivem/build_server_windows/master/)のFiveM公式ページにアクセスして、最新のFiveMサーバービルドをダウンロードしてね。 

ダウンロードしたファイルはDownloadsフォルダで解凍して、FiveMサーバーファイルはできれば別フォルダに移動しよう。ここでは例として、デスクトップに**FiveM**という名前のフォルダを作ってそこに置いてるよ。 

:::warning 解凍ツールが必要
FiveMサーバーソフトの圧縮ファイルを解凍するには解凍ツールが必要だよ。ここでは[7Zip](https://7-zip.com/)を使ってる。
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/B9Qs9raB3fRZjJ4/download)



### FiveMサーバーのライセンスキー作成

FiveMサーバーには必ず専用のライセンスキーが必要で、これは新しい[Cfx.reポータル](http://portal.cfx.re/)で管理されてるよ。ライセンスキーはCfx.reアカウントに紐づいてるから、サイトにログインして**Server**カテゴリに行き、**Generate Key**ボタンをクリックして作成しよう。

![img](https://screensaver01.zap-hosting.com/index.php/s/X6kHcs6o2dcFJqw/preview)



## 設定

ここからFiveMサーバーとtxAdminのインストールを始めるよ。FiveMサーバーフォルダを開いて、`FXServer.exe`を実行してね。

![img](https://screensaver01.zap-hosting.com/index.php/s/aSEbx3LnJe2rZpd/download)


サーバーアプリを起動すると、サーバーコンソールとtxAdminが開くよ。txAdminの画面で自分の**Cfx.reアカウント**をtxAdminに連携させよう。  


![img](https://screensaver01.zap-hosting.com/index.php/s/EDcJWjKSrrwARTL/download)



### txAdminセットアップ

txAdminセットアップでは、自分のFiveMサーバーを5ステップでインストール＆設定するよ。txAdminの指示に従って、まずは**サーバー名**を決めてね。次に希望の**サーバータイプ**を選択。ここではQBCoreがプリインストールされたFiveMサーバーの例を紹介するよ。

**Deployment Type**で**Popular Recipes**を選んで、次に**QBCore Framework Template**を選択。希望の**Data Directory**を確認して、**Recipe Deployer**をスタートしてインストールを完了させよう。

![img](https://screensaver01.zap-hosting.com/index.php/s/WACQEdocRxNrRrk/download)

Recipe Deployerの途中で、サーバー起動前に必要な情報を入力するよ。先ほど作成したFiveMライセンスキーを**License Key**欄に入れてね。次に**Show/Hide Database Options (Advanced)**をクリックして、データベースサーバーのログイン情報を入力。ここでは**root**ユーザーのパスワードだけでOK。他の設定はそのままで大丈夫。入力内容を確認したら**Run Recipe**を押して処理を開始しよう。

![img](https://screensaver01.zap-hosting.com/index.php/s/QPyEctyQbp3kCxa/download)


### ファイアウォール設定
サーバーを外部からアクセス可能にするには、専用サーバープロセスが使うポートのポートフォワーディング設定を変更する必要があるよ。簡単なのはPowershellコマンドで直接設定する方法だけど、Windows Defenderファイアウォールの画面から設定することもできるよ。

<Tabs>
<TabItem value="powershell" label="Powershellで設定" default>

Windowsの検索ボックスで**Powershell**を検索して、右クリックから**管理者として実行**を選んで起動しよう。管理者権限がないと設定が正しく反映されないから注意してね。

:::info
必ず管理者モードでPowershellを起動してね。そうしないと設定が反映されないことがあるよ。
:::

次に、以下のコマンドをコピーしてPowershellに貼り付けて実行しよう：
```
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Inbound -LocalPort 30120 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Inbound -LocalPort 30120 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Outbound -LocalPort 30120 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Outbound -LocalPort 30120 -Protocol UDP -Action Allow
```

これでFiveMサーバーが外部からアクセス可能になるためのファイアウォールルールが自動で作成されるよ。

</TabItem>

<TabItem value="windefender" label="Windows Defenderで設定">

Windowsの検索から**Windows ファイアウォールの詳細設定**を開こう。基本のWindowsファイアウォール画面からは**詳細設定**を押さないと開けないことがあるよ。

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

FiveMサーバー用に新しいルールを作成しよう。受信ルールと送信ルールの両方で、以下のプロトコルとポートを追加してね：
- TCP 受信・送信：30120
- UDP 受信・送信：30120

設定方法がわからなければ、[ポートフォワーディング（ファイアウォール）](vserver-windows-port.md)ガイドも参考にしてみてね。

</TabItem>
</Tabs>

## まとめ

これで専用サーバーにFiveM専用サーバーサービスを無事インストール＆設定できたよ！もしわからないことやサポートが必要なら、いつでも気軽にサポートチームに連絡してね。毎日対応してるから安心して 🙂


<InlineVoucher />