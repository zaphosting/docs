---
id: dedicated-windows-fivem
title: "FiveM 専用サーバーセットアップ"
description: "txAdminを使って自分だけのFiveM専用サーバーをセットアップし、マルチプレイヤーゲームをスムーズに運用する方法を解説 → 今すぐ学ぼう"
sidebar_label: FiveM
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

専用サーバーを所有していて、txAdminで自分のFiveM専用サーバーサービスをインストール・運用したいですか？ここでその方法を詳しく説明します。インストールと設定の全手順と注意点を解説します。

:::warning OSの選択とインストールについて
VPSまたは専用サーバーにすでにOSを選択しインストール済みであることが前提です。まだの場合は、専用サーバーの[初期セットアップ](dedicated-setup.md)ガイドを先にご覧ください。
:::

## 準備

FiveMサーバーをセットアップするには、実際のFiveM専用サーバーのセットアップを始める前に必要な準備作業があります。

### データベースのセットアップ

データベースを必要とするリソースを使いたい場合は、追加で**データベースサーバー**が必要です。データベースサーバーのセットアップ方法はいくつかありますが、当社の[MySQLインストール](dedicated-windows-installmysql.md)ガイドで専用サーバーに自分の**データベースサーバー**をインストールする方法を紹介しています。

### FiveMサーバーソフトのダウンロード

次にFiveMサーバーソフトをダウンロードします。お好きなブラウザでFiveMの[サーバービルドリスト](https://runtime.fivem.net/artifacts/fivem/build_server_windows/master/)にアクセスし、最新のFiveMサーバービルドをダウンロードしてください。

ダウンロードしたファイルをDownloadsフォルダで解凍し、FiveMサーバーファイルを別のフォルダに移動するのがおすすめです。ここでは例として、デスクトップの**FiveM**というフォルダにサーバーソフトを置いています。

:::warning 解凍ツールが必要です
FiveMサーバーソフトの圧縮ファイルを解凍するには解凍ツールが必要です。ここでは[7Zipソフトウェア](https://7-zip.com/)を使用しています。
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/B9Qs9raB3fRZjJ4/download)

### FiveMサーバーのライセンスキー作成

すべてのFiveMサーバーには専用のライセンスキーが必要で、これは新しい[Cfx.reポータル](http://portal.cfx.re/)で管理されます。ライセンスキーはあなたのCfx.reアカウントに紐づけられます。サイトにログインし、**Server**カテゴリに移動して**Generate Key**ボタンをクリックしてください。

![img](https://screensaver01.zap-hosting.com/index.php/s/X6kHcs6o2dcFJqw/preview)

## 設定

これでFiveMサーバーとtxAdminのインストールを開始できます。FiveMサーバーディレクトリを開き、`cfx-server.exe`アプリケーションを実行してください。

![img](https://screensaver01.zap-hosting.com/index.php/s/aSEbx3LnJe2rZpd/download)

サーバーアプリを起動すると、サーバーコンソールとtxAdminが開きます。txAdminの画面で、あなたの**Cfx.reアカウント**をtxAdminに連携させる必要があります。

![img](https://screensaver01.zap-hosting.com/index.php/s/EDcJWjKSrrwARTL/download)

### txAdminセットアップ

txAdminセットアップでは、FiveMサーバーを5ステップでインストール・設定します。txAdminの指示に従い、まず**サーバー名**を決めてください。次に希望の**サーバータイプ**を選択します。この例では、QBCoreがプリインストールされたFiveMサーバーのインストールを示しています。

**Deployment Type**ステップで**Popular Recipes**を選び、続けて**QBCore Framework Template**を選択します。希望の**Data Directory**を確認し、**Recipe Deployer**を開始してインストールを完了させます。

![img](https://screensaver01.zap-hosting.com/index.php/s/WACQEdocRxNrRrk/download)

Recipe Deployerの途中で、サーバー起動前に必要な最後の情報を入力します。先ほど作成したFiveMライセンスキーを**License Key**欄に入力してください。次に**Show/Hide Database Options (Advanced)**をクリックし、データベースサーバーのログイン情報を入力します。ここでは**root**ユーザーのパスワードのみ必要で、他の設定は変更不要です。入力内容を確認し、**Run Recipe**をクリックして処理を開始します。

![img](https://screensaver01.zap-hosting.com/index.php/s/QPyEctyQbp3kCxa/download)

### ファイアウォール設定

サーバーを外部からアクセス可能にするため、VPS/専用サーバーで使用しているポートのポートフォワーディングルールを変更する必要があります。これはPowershellコマンドで行うのが簡単ですが、Windows Defenderファイアウォールの画面からも設定可能です。

<Tabs>
<TabItem value="powershell" label="Powershellで設定" default>

Windowsの検索ボックスで**Powershell**を検索し、右クリックで**管理者として実行**してください。管理者権限で実行しないと設定が正しく反映されません。

:::info
必ず管理者モードでPowershellを実行してください。そうしないと設定が適用されない場合があります。
:::

以下のコマンドをPowershellにコピー＆ペーストして実行します。
```
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Inbound -LocalPort 30120 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Inbound -LocalPort 30120 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Outbound -LocalPort 30120 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Outbound -LocalPort 30120 -Protocol UDP -Action Allow
```

これでFiveMサーバーが外部からアクセス可能になるためのファイアウォールルールが自動で作成されます。

</TabItem>

<TabItem value="windefender" label="Windows Defenderで設定">

Windowsの検索機能で**Windows Firewall Settings with Advanced Security**を開きます。基本のWindowsファイアウォール画面を開いた場合は、**Advanced Settings**を押して詳細設定画面を開いてください。

![](https://screensaver01.zap-hosting.com/index.php/s/woitzXpAAirg9JN/preview)

FiveMサーバー用に新しいルールを作成します。以下のプロトコルとポートで、受信と送信の両方のルールを追加してください。
- TCP 受信・送信: 30120
- UDP 受信・送信: 30120

設定方法がわからない場合は、当社の[ポートフォワーディング（ファイアウォール）](vserver-windows-port.md)ガイドをご参照ください。

</TabItem>
</Tabs>

## まとめ

VPSまたは専用サーバーにFiveM専用サーバーサービスを無事インストール・設定できました。ご不明点やサポートが必要な場合は、毎日対応している当社サポートチームまでお気軽にお問い合わせください！ 🙂