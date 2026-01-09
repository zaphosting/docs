---
id: dedicated-windows-fivem
title: "専用サーバー：FiveM 専用サーバーセットアップ"
description: "txAdminを使って自分だけのFiveM専用サーバーをセットアップ＆運用する方法を解説 → 今すぐチェック"
sidebar_label: FiveM
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';




## はじめに

専用サーバーをお持ちで、txAdminを使って自分だけのFiveM専用サーバーをインストール＆運用したいですか？ここがまさにその場所！以下では、インストールと設定に必要なすべてのステップと注意点をわかりやすく解説します。



:::warning  OSの選択とインストール済みであること
専用サーバーにすでにOSを選択しインストール済みであることを前提としています。まだの場合は、まず[専用サーバーの初期セットアップ](dedicated-setup.md)ガイドの手順に従ってください。
:::



## 準備

FiveMサーバーをセットアップするには、実際のFiveM専用サーバーのセットアップを始める前に必要な準備ステップがあります。



### データベースのセットアップ

データベースが必要なリソースを使いたい場合は、追加で**データベースサーバー**が必要です。データベースサーバーのセットアップ方法はいくつかありますが、当社の[MySQLインストール](dedicated-windows-installmysql.md)ガイドでは、専用サーバー上に自分の**データベースサーバー**をインストールする方法を紹介しています。



### FiveMサーバーソフトのダウンロード

次にFiveMサーバーソフトをダウンロードします。お好きなブラウザでFiveMの[Server Build List](https://runtime.fivem.net/artifacts/fivem/build_server_windows/master/)ページにアクセスし、最新のFiveMサーバービルドをダウンロードしてください。

ダウンロードしたファイルをDownloadsフォルダで解凍し、FiveMサーバーファイルはできれば別のフォルダに移動しましょう。ここでは例として、デスクトップ上の**FiveM**というフォルダにサーバーソフトを置いています。

:::warning 解凍ツールが必要
ダウンロードしたFiveMサーバーソフトは圧縮ファイルなので、解凍ツールが必要です。ここでは[7Zip](https://7-zip.com/)を使用しています。
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/B9Qs9raB3fRZjJ4/download)



### FiveMサーバーのライセンスキー作成

FiveMサーバーにはそれぞれ専用のライセンスキーが必要で、新しい[Cfx.reポータル](http://portal.cfx.re/)で管理されます。ライセンスキーはあなたのCfx.reアカウントに紐づけられます。サイトにログインし、**Server**カテゴリに移動して**Generate Key**ボタンをクリックしてください。

![img](https://screensaver01.zap-hosting.com/index.php/s/X6kHcs6o2dcFJqw/preview)



## 設定

ここからFiveMサーバーとtxAdminのインストールを始めます。FiveMサーバーフォルダを開き、`FXServer.exe`を実行してください。

![img](https://screensaver01.zap-hosting.com/index.php/s/aSEbx3LnJe2rZpd/download)


サーバーアプリが起動すると、サーバーコンソールとtxAdminが開きます。txAdminの画面で、あなたの**Cfx.reアカウント**をtxAdminに連携させましょう。  


![img](https://screensaver01.zap-hosting.com/index.php/s/EDcJWjKSrrwARTL/download)



### txAdminセットアップ

txAdminセットアップでは、FiveMサーバーを5ステップでインストール＆設定します。txAdminの指示に従い、まず**サーバー名**を決めてください。次に希望の**サーバータイプ**を選択します。この例では、QBCoreがプリインストールされたFiveMサーバーのインストールを示しています。

**Deployment Type**で**Popular Recipes**を選び、続けて**QBCore Framework Template**を選択。希望の**Data Directory**を確認し、**Recipe Deployer**を起動してインストールを完了させます。

![img](https://screensaver01.zap-hosting.com/index.php/s/WACQEdocRxNrRrk/download)

Recipe Deployerの途中で、サーバー起動前に必要な情報を入力します。先ほど作成したFiveMのライセンスキーを**License Key**欄に入力。次に**Show/Hide Database Options (Advanced)**をクリックし、データベースサーバーのログイン情報を入力してください。ここでは**root**ユーザーのパスワードのみ必要で、他の設定はそのままでOK。入力内容を確認したら**Run Recipe**をクリックして処理を開始します。

![img](https://screensaver01.zap-hosting.com/index.php/s/QPyEctyQbp3kCxa/download)


### ファイアウォール設定
サーバーを外部からアクセス可能にするため、専用サーバープロセスが使うポートのポートフォワーディング設定を変更する必要があります。これはPowershellコマンドで行うのが簡単ですが、Windows Defenderファイアウォールの設定画面からも可能です。

<Tabs>
<TabItem value="powershell" label="Powershellで設定" default>

Windowsの検索ボックスで**Powershell**を検索し、右クリックで**管理者として実行**してください。権限が必要なので必ず管理者モードで起動しましょう。

:::info
管理者モードで実行しないと設定が正しく反映されないことがあります。
:::

以下のコマンドをコピーしてPowershellに貼り付けて実行してください：
```
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Inbound -LocalPort 30120 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Inbound -LocalPort 30120 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Outbound -LocalPort 30120 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Outbound -LocalPort 30120 -Protocol UDP -Action Allow
```

これでFiveMサーバーが外部からアクセス可能になるために必要なファイアウォールルールが自動で作成されます。

</TabItem>

<TabItem value="windefender" label="Windows Defenderで設定">

Windowsの検索から**Windowsファイアウォールの詳細設定**を開きます。基本画面からは**詳細設定**を押して必要なウィンドウを開く必要があるかもしれません。

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

FiveMサーバー用に新しいルールを作成します。以下のプロトコルとポートで、受信と送信の両方のルールを追加してください：
- TCP 受信・送信：30120
- UDP 受信・送信：30120

設定方法がわからない場合は、当社の[ポートフォワーディング（ファイアウォール）](vserver-windows-port.md)ガイドも参考にしてください。

</TabItem>
</Tabs>

## まとめ

これで専用サーバーにFiveM専用サーバーサービスを無事インストール＆設定できました。もし質問やサポートが必要な場合は、毎日対応している当社サポートチームまでお気軽にお問い合わせくださいね！🙂



