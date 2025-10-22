---
id: vserver-windows-vrising
title: "VPS: V-Rising 専用サーバー Windows セットアップ"
description: "V Rising 専用の Windows サーバーを最適なゲームパフォーマンスとスムーズなサーバーのレンタルのためにセットアップする方法をチェック → 今すぐ詳しく見る"
sidebar_label: V-Rising
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

<YouTube videoId="to2ghqNpGLA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/qnEwRNpMmo3JzQq/preview" title="V RISING 専用 Windows サーバーのセットアップ方法！" description="実際に動いているのを見ると理解しやすい？そんなあなたにピッタリ！動画でわかりやすく解説。急いでいる時も、じっくり情報を楽しみたい時もぜひチェックしてね！"/>
<InlineVoucher />

## 基本情報: 
Windows Server 2016/2019 ベースで、最低でも4x 2.4 GHz CPU（AMD/Intel）と4GB以上のRAM（DDR3/4）、6GB以上の空きディスク（SSD推奨）が必要です。サーバーは64ビットアーキテクチャで動作している必要があります。

## ステップ1 V-Rising用フォルダを作成する

まずは[初期アクセス（RDP）](vserver-windows-userdp.md)を使ってサーバーに接続します。接続できたら、V-Risingのファイルをインストールするための新しいフォルダをサーバー上に作成しましょう。  
今回はデスクトップに新しいフォルダを作成します。  
右クリックして「新規作成 -> フォルダー」を選択。

![](https://screensaver01.zap-hosting.com/index.php/s/wgf8ckdTgiQ9wAq/preview)

好きな名前を付けてOK。今回は「VRising」と名付けます。

## ステップ2 SteamCMDをWindowsサーバーにダウンロード

ブラウザを開いて[こちらのリンク](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip)にアクセス。Windows用のSteamCMDがサーバーにダウンロードされます。

![](https://screensaver01.zap-hosting.com/index.php/s/7HE5smMXq6mEetw/preview)

ダウンロードされたファイルはダウンロードフォルダにあります。（環境によって異なる場合あり）

![](https://screensaver01.zap-hosting.com/index.php/s/eEsyPe9J8KWGRMs/preview)

わかりやすくするために、steamcmd.zipファイルを先ほど作成したデスクトップのVRisingフォルダにコピーします。  
ファイルをクリックして「CTRL+C」を押し、VRisingフォルダを開いて「CTRL+V」を押します。  
これでVRisingフォルダ内にファイルがコピーされました。

![](https://screensaver01.zap-hosting.com/index.php/s/rNCZB7NDYkqDxrm/preview)

steamcmd.zipファイルを右クリックして「すべて展開」を選択。表示されるメッセージで「展開」ボタンをクリック。

![](https://screensaver01.zap-hosting.com/index.php/s/RSQReHkc3SYbzNS/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/yaw87p2bcmFe9z6/preview)

展開が完了したら、steamcmdファイルをダブルクリック。  
新しいウィンドウが開き、steamcmdのファイルがインストールされます。

![](https://screensaver01.zap-hosting.com/index.php/s/R7Xm4tSLfEBqboD/preview)

## ステップ3 V Risingのファイルをダウンロード

steamcmdのインストールが完了すると、以下の画面が表示されます。

![](https://screensaver01.zap-hosting.com/index.php/s/DjaZjaqM8tFZzCj/preview)

ファイルのダウンロード先を指定します。  
「force_install_dir」コマンドを使います。  
今回の例では以下のコマンドです：  
force_install_dir "C:\Users\Administrator\Desktop\VRising"

![](https://screensaver01.zap-hosting.com/index.php/s/EFdLWdJ5Ypym3Ym/preview)

次に匿名ユーザーでログインします。  
「login anonymous」と入力。

![](https://screensaver01.zap-hosting.com/index.php/s/SN8qqRPezLDEF3Q/preview)

ログインできたら、いよいよファイルをダウンロード。  
以下のコマンドを使います：  
app_update 1829350 validate

ファイルのダウンロードが始まります。数分かかることもあります。

![](https://screensaver01.zap-hosting.com/index.php/s/S5cwykrPq6bYyrG/preview)

完了すると、VRisingフォルダ内にすべてのファイルが揃っています。

![](https://screensaver01.zap-hosting.com/index.php/s/8PwswWgB8BxwECL/preview)

## ステップ4 V Risingサーバーの起動と設定

start_server_example.batファイルを編集して設定を変更できます。  
ファイルを右クリックして「編集」を選択。  
サーバー名やセーブファイルの保存パスなどを調整可能です。

![](https://screensaver01.zap-hosting.com/index.php/s/PFDkyayBtSBoEFa/preview)

さらに細かい設定は、VRisingServer_Data\StreamingAssets\Settings フォルダ内の設定ファイルで行えます。

![](https://screensaver01.zap-hosting.com/index.php/s/jQWy34tbPTEtcc9/preview)

ServerHostSettings.jsonファイルでは、ポート設定、サーバー説明、セーブ間隔、ゲームサーバーパスワードなどの一般設定が可能。  
例としてサーバー名を「ZAP-Hosting Test Server」に変更しました。

サーバーを起動するには、start_server_example.batファイルをダブルクリック。

![](https://screensaver01.zap-hosting.com/index.php/s/nSqbQQb3pHXnWmZ/preview)

起動には少し時間がかかります。  
ポートが正しく開放されていれば、次のステップでサーバーリストに表示されます。

![](https://screensaver01.zap-hosting.com/index.php/s/TajWHXtRCLEeRKf/preview)

## ステップ5 ファイアウォールでポートを開放

友達と遊べるようにサーバーは公開されている必要があります。  
そのためにはWindowsファイアウォールでサーバーのポートを開放しましょう。  
TCPとUDPの両方でポート9876と9877を開放してください。  
9876がゲームサーバーポート、9877がクエリポートです。  
Windowsでのポート開放方法は[ポート開放（ファイアウォール）](vserver-windows-port.md)を参照。

ポート開放後、サーバーが起動していれば公開アクセス可能になります。

## まとめ

おめでとう！これでV-RisingをVPSに無事インストール＆設定できました！  
もし質問やトラブルがあれば、毎日対応しているサポートチームに気軽に連絡してくださいね！

<InlineVoucher />