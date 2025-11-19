---
id: dedicated-windows-vrising
title: "専用サーバー: V-Rising 専用サーバー Windows セットアップ"
description: "V Rising 専用 Windows サーバーの最適なゲームパフォーマンスとサーバー管理のためのセットアップ方法をチェック → 今すぐ詳しく見る"
sidebar_label: V-Rising
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

<YouTube videoId="to2ghqNpGLA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/yCRYqJAjTTp4YFf/preview" title="V RISING 専用 Windows サーバーのセットアップ方法！" description="実際に動いているのを見ると理解しやすい？そんなあなたにピッタリ！動画でわかりやすく解説。急いでる時も、じっくり情報を楽しみたい時もOK！"/>



## 基本情報: 
Windows Server 2016/2019 ベースのサーバーで、最低でも4x 2.4 GHz CPU（AMD/Intel）、4GB以上のRAM（DDR3/4）、6GB以上の空きディスク（SSD推奨）が必要です。サーバーは64bitアーキテクチャで動作している必要があります。

## ステップ1 V-Rising用フォルダを作成する

まずは[初期アクセス（RDP）](vserver-windows-userdp.md)を使ってサーバーに接続します。接続できたら、V-Risingのファイルをインストールするための新しいフォルダをサーバー上に作成しましょう。
今回はデスクトップに新しいフォルダを作成します。
右クリックして「新規作成 -> フォルダ」を選択。

![](https://screensaver01.zap-hosting.com/index.php/s/SzB3TgsSkHRAaAB/preview)

好きな名前を付けてOK。今回は「VRising」と名付けます。

## ステップ2 SteamCMDをWindowsサーバーにダウンロード

ブラウザを開いて[こちらのリンク](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip)にアクセス。Windows用のSteamCMDがサーバーにダウンロードされます。

![](https://screensaver01.zap-hosting.com/index.php/s/oHSse2fToxxTpCt/preview)

ファイルはダウンロードフォルダに保存されます。（環境によって場所は異なる場合あり）

![](https://screensaver01.zap-hosting.com/index.php/s/35r8Dm49xcdwfq4/preview)

わかりやすくするために、steamcmd.zipファイルを先ほど作成したデスクトップのVRisingフォルダにコピーします。
ファイルをクリックして「CTRL+C」を押し、VRisingフォルダを開いて「CTRL+V」を押します。
これでファイルがVRisingフォルダにコピーされました。

![](https://screensaver01.zap-hosting.com/index.php/s/kKGt3gy2yDQXSLx/preview)

steamcmd.zipファイルを右クリックして「すべて展開」を選択。表示されるメッセージで「展開」ボタンをクリック。

![](https://screensaver01.zap-hosting.com/index.php/s/SHsNeRy4RbEenDX/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/y5ef3ncPgYMTzFw/preview)

展開が終わったら、steamcmdファイルをダブルクリック。
新しいウィンドウが開き、steamcmdファイルのインストールが始まります。

![](https://screensaver01.zap-hosting.com/index.php/s/TC2KAbWaCHEeZiF/preview)

## ステップ3 V Risingファイルをダウンロード

steamcmdファイルのインストールが完了すると、以下のような画面が表示されます。

![](https://screensaver01.zap-hosting.com/index.php/s/GAb4TgCNbpiW2F2/preview)

次に、ファイルをダウンロードする場所を指定します。
これは「force_install_dir」コマンドで行います。
今回の例では以下のコマンドです：
force_install_dir "C:\Users\Administrator\Desktop\VRising"

![](https://screensaver01.zap-hosting.com/index.php/s/DeNFAWGLLnKq7pr/preview)

続いて匿名ユーザーでログインします。
「login anonymous」と入力してください。

![](https://screensaver01.zap-hosting.com/index.php/s/pq74iCW6E2k8Sid/preview)

ログインが完了したら、いよいよファイルをダウンロードします。
以下のコマンドを使います：
app_update 1829350 validate

ファイルのダウンロードが始まります。
数分かかることがあります。

![](https://screensaver01.zap-hosting.com/index.php/s/6XX8wtekd89PJec/preview)

ダウンロードが完了すると、VRisingフォルダ内にすべてのファイルが揃っています。

![](https://screensaver01.zap-hosting.com/index.php/s/y9Gx9ANEpgbpESy/preview)

## ステップ4 V Risingサーバーの起動と設定

start_server_example.batファイルを編集して設定を変更できます。
ファイルを右クリックして「編集」を選択。
サーバー名やセーブデータの保存パスを調整可能です。

![](https://screensaver01.zap-hosting.com/index.php/s/zpEw92o7eQG9P2a/preview)

設定ファイルは他にもあります。
VRisingServer_Data\StreamingAssets\Settings フォルダ内にあります。

![](https://screensaver01.zap-hosting.com/index.php/s/9TtQm6Yp8g3y5HH/preview)

ServerHostSettings.jsonファイルでは一般設定が可能。
ポート番号、サーバー説明、セーブ間隔、ゲームサーバーパスワードなどを設定できます。
例としてサーバー名を「ZAP-Hosting Test Server」に変更しました。

サーバーを起動するには、start_server_example.batファイルをダブルクリック。

![](https://screensaver01.zap-hosting.com/index.php/s/gzs85C4HRy9MPTy/preview)

起動には少し時間がかかります。
ポートが正しく開放されていれば、次のステップでサーバーリストに表示されます。

![](https://screensaver01.zap-hosting.com/index.php/s/S9mM8KNzsFARmQW/preview)

## ステップ5 ファイアウォールでポートを開放

友達と遊ぶためにサーバーは公開アクセス可能である必要があります。そのためにはWindowsファイアウォールでサーバーのポートを開放しましょう。TCPとUDPの両方でポート9876と9877を開放してください。9876がゲームサーバーポート、9877がクエリポートです。
Windowsでのポート開放方法はこちら：[ポート開放（ファイアウォール）](vserver-windows-port.md)。

ポート開放後、サーバーが起動していれば公開アクセス可能になります。