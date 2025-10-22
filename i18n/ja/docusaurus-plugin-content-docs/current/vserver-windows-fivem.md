---
id: vserver-windows-fivem
title: "VPS: FiveM 専用サーバーセットアップ"
description: "VPSで自分だけのFiveM専用サーバーをtxAdminでインストール＆設定する方法をチェック → 今すぐ詳しく見る"
sidebar_label: FiveM
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';




## はじめに

VPSを持っていて、自分だけのFiveM専用サーバーをtxAdminでインストール＆運用したい？それならここがピッタリ！以下では、インストールから設定までの必要なステップと注意点を全部解説するよ。 


## 準備

FiveMサーバーを立てるには、実際のFiveM専用サーバーのセットアップを始める前にやっておくべき準備がいくつかあるよ。



### データベースのセットアップ

データベースが必要なリソースを使いたい＆インストールしたい場合は、追加で**データベースサーバー**が必要になるよ。こういったサーバーのセットアップ方法はいろいろあるけど、うちの[MySQLインストールガイド](vserver-windows-installmysql.md)では、VPSに自分の**データベースサーバー**をインストールする方法を紹介してるよ。



### FiveMサーバーソフトのダウンロード

次はFiveMサーバーソフトをダウンロードしよう。好きなブラウザでFiveMの[サーバービルドリスト](https://runtime.fivem.net/artifacts/fivem/build_server_windows/master/)にアクセスして、最新のFiveMサーバービルドをゲットしてね。 

ダウンロードしたファイルはDownloadsフォルダで解凍して、FiveMサーバーファイルはできれば別フォルダに移動しよう。ここでは例として、デスクトップの**FiveM**フォルダにサーバーソフトを置いてるよ。 

:::warning 解凍ツールが必要
FiveMサーバーソフトの圧縮ファイルを解凍するには解凍ツールが必要だよ。ここでは[7Zip](https://7-zip.com/)を使ってる。
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/B9Qs9raB3fRZjJ4/download)



### FiveMサーバーのライセンスキー作成

FiveMサーバーには必ず専用のライセンスキーが必要で、これは新しい[Cfx.reポータル](http://portal.cfx.re/)で管理されてるよ。ライセンスキーはCfx.reアカウントに紐づいてるから、サイトにログインして**Server**カテゴリから**Generate Key**ボタンを押して作成しよう。

![img](https://screensaver01.zap-hosting.com/index.php/s/X6kHcs6o2dcFJqw/preview)



## 設定

さあ、FiveMサーバーとtxAdminのインストールを始めよう。まずはFiveMサーバーフォルダを開いて、`FXServer.exe`を実行してね。

![img](https://screensaver01.zap-hosting.com/index.php/s/aSEbx3LnJe2rZpd/download)


サーバーアプリを起動すると、サーバーコンソールとtxAdminが開くよ。txAdminの画面で、自分の**Cfx.reアカウント**をtxAdminに連携させよう。  


![img](https://screensaver01.zap-hosting.com/index.php/s/EDcJWjKSrrwARTL/download)



### txAdminセットアップ

txAdminのセットアップでは、自分のFiveMサーバーを5ステップでインストール＆設定するよ。txAdminの指示に従って、まずは**サーバー名**を決めてね。次に希望の**サーバータイプ**を選択。この例では、QBCoreがプリインストールされたFiveMサーバーをセットアップしてるよ。

**Deployment Type**ステップで**Popular Recipes**を選んで、続けて**QBCore Framework Template**を選択。希望の**Data Directory**を確認して、**Recipe Deployer**を起動してインストールを完了させよう。

![img](https://screensaver01.zap-hosting.com/index.php/s/WACQEdocRxNrRrk/download)

Recipe Deployerの途中で、サーバー起動前に必要な最後の情報を入力するよ。先ほど作ったFiveMのライセンスキーを**License Key**欄に入れてね。次に**Show/Hide Database Options (Advanced)**をクリックして、データベースサーバーのログイン情報を入力。ここでは**root**ユーザーのパスワードだけでOK。他の設定はそのままで大丈夫。入力内容を確認したら、**Run Recipe**を押して処理を開始しよう。

![img](https://screensaver01.zap-hosting.com/index.php/s/QPyEctyQbp3kCxa/download)


### ファイアウォール設定
サーバーを外部からアクセス可能にするには、専用サーバープロセスが使うポートのポートフォワーディング設定を変更する必要があるよ。簡単なのはPowershellコマンドで直接設定する方法だけど、Windows Defenderファイアウォールの画面から設定する方法もある。

<Tabs>
<TabItem value="powershell" label="Powershellで設定" default>

Windowsの検索ボックスで**Powershell**を検索して、右クリックから**管理者として実行**を選んで起動しよう。権限が必要だから必ず管理者モードでね。

:::info
管理者モードでPowershellを起動しないと設定が正しく反映されないことがあるよ。
:::

次に、以下のコマンドをPowershellにコピペして実行してね：
```
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Inbound -LocalPort 30120 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Inbound -LocalPort 30120 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Outbound -LocalPort 30120 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Outbound -LocalPort 30120 -Protocol UDP -Action Allow
```

これでFiveMサーバーが外部からアクセスできるように必要なファイアウォールルールが自動で作成されるよ。

</TabItem>

<TabItem value="windefender" label="Windows Defenderで設定">

Windowsの検索で**Windows ファイアウォールの詳細設定**を開こう。基本のWindowsファイアウォール画面からは**詳細設定**を押さないと開けないこともあるよ。

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

FiveMサーバー用に新しいルールを作成しよう。以下のプロトコルとポートで、受信と送信の両方にルールを追加してね：
- TCP 受信・送信：30120
- UDP 受信・送信：30120

設定方法がわからなければ、うちの[ポートフォワーディング（ファイアウォール）ガイド](vserver-windows-port.md)を参考にしてね。

</TabItem>
</Tabs>

## まとめ

これでVPSにFiveM専用サーバーを無事インストール＆設定できたよ！もし質問やサポートが必要なら、毎日対応してるサポートチームに気軽に連絡してね 🙂


<InlineVoucher />