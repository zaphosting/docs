---
id: dedicated-windows-hl2
title: "専用サーバー：Half-Life 2 専用サーバー Windows セットアップ"
description: "VPSや専用サーバーにHalf-Life 2専用サーバーを素早く効率的にセットアップする方法を学ぼう → 今すぐチェック"
sidebar_label: "Half-Life 2"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
VPSや専用サーバーを持っていて、そこにゲームサーバーをインストールしたい？例えばHalf-Life 2専用サーバーとか？それならここがピッタリ！以下では、そんなサービスをサーバーにインストールする手順をステップバイステップで解説していくよ。



## 準備

Half-Life 2サーバーのセットアップにはSteamCMDが必要だよ。SteamCMDは**Steamクライアントのコマンドライン版**で、このツールを使うと人気のSteamゲームの専用サーバーアプリを簡単かつ素早くダウンロードできる。SteamCMDは公式Valve開発者サイトで入手可能：`https://developer.valvesoftware.com/wiki/SteamCMD`。

ダウンロードが完了すると、**steamcmd.zip**ファイルが手に入るから、まずはこれを解凍しよう。別フォルダを作ってそこに解凍するのがおすすめ。解凍後に**steamcmd.exe**が見えるはず。これを実行して、インストールが完了するまで待とう。

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

「**Loading Steam API.... OK**」のメッセージが表示されたら、インストールは成功。さあ、Half-Life 2サーバーのインストールを始めよう。



## インストール

インストール後は**Steamコマンドライン（steamcmd.exe）**でコマンドを実行できるようになっているはず。まずはログインしよう。ログインは**anonymous**ユーザーで行うよ。以下のコマンドを実行してね：`login anonymous`

次にインストールだ。コマンドは `app_update 232370` 。App ID **232370** は**Half-Life 2専用サーバー**アプリケーションを指しているよ。

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

ダウンロードが完了するまで気長に待とう。ゲームサイズが大きいと時間がかかることもあるよ。成功すると完了メッセージが表示される。

サーバーを外部から見えるようにしアクセス可能にするには、使うサーバーポートをファイアウォールで開放（転送）する必要がある。Windowsファイアウォールの設定を開こう。

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

設定で追加ルールを作成しよう。受信ルールと送信ルールの両方に以下のポートをTCP/UDPプロトコルで追加：27015-27020。



## 設定

ここまででHalf-Life 2サーバーのセットアップは完了。さらに細かい設定をしたい場合は、起動ファイルを直接編集しよう。ルートディレクトリに移動し、その中のcfgフォルダにある`server.cfg`ファイルを開いてサーバーオプションを編集できるよ。

```
../steamapps/common/hl2-ds/hl2mp/cfg/server.cfg
```

## GSLトークンの登録

他のプレイヤーがあなたのサーバーに参加するには、Game Server Login Token（GSLT）を生成してサーバーに設定する必要があるよ。このトークンはSteamにサーバーを認証させるためのもの。GSLTを作成するには http://steamcommunity.com/dev/managegameservers にアクセスして、ゲームID 232370（Half-Life 2）を使ってトークンを作成しよう。

トークンを取得したら、サーバー起動パラメータに `+sv_setsteamaccount <TOKEN>` を追加して設定してね。



## サーバーの起動＆接続

いよいよサーバーを起動しよう。メインゲームディレクトリに移動して、以下の起動コマンドを実行してね：

```
start srcds.exe -console -game hl2mp -secure +maxplayers 10 +map dm_runoff +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

コマンドプロンプトにログが表示されて起動が成功したことがわかるはず。初回起動はセットアップのために少し時間がかかることもあるよ。別の方法として、サーバーリストの下部検索バーに `[your_ip_address]:2456` を入力して直接接続もできるよ。


## まとめ

おめでとう！VPSにHalf-Life 2サーバーを無事インストール＆設定できたね！もし質問やサポートが必要なら、いつでも毎日対応しているサポートチームに気軽に連絡してね 🙂