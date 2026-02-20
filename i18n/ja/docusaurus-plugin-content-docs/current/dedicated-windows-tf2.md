---
id: dedicated-windows-tf2
title: "専用サーバー：Team Fortress 2 専用サーバー Windows セットアップ"
description: "VPSや専用サーバーにTeam Fortress 2専用サーバーを簡単にセットアップする方法をチェック → 今すぐ詳しく見る"
sidebar_label: "Team Fortress 2"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
VPSや専用サーバーを持っていて、そこにゲームサーバーをインストールしたい？例えばTeam Fortress 2専用サーバーとか？それならここがピッタリ！以下で、サーバーにこうしたサービスをステップバイステップでインストールする方法を解説するよ。



## 準備

Team Fortress 2サーバーのセットアップにはSteamCMDが必要だよ。SteamCMDは**Steamクライアントのコマンドライン版**。このツールを使えば、人気Steamゲームの専用サーバーアプリをサクッとダウンロードできる。SteamCMDは公式Valve開発者サイトで手に入るよ：`https://developer.valvesoftware.com/wiki/SteamCMD`。

ダウンロード後は、**steamcmd.zip**ファイルが入っているから、まずはこれを解凍しよう。別フォルダを作ってそこに解凍するのがおすすめ。解凍後に**steamcmd.exe**が見えるはず。これを実行して、インストールが完了するまで待とう。

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

「**Loading Steam API.... OK**」のメッセージが出たら、インストールは成功。さあ、Team Fortress 2サーバーのインストールに進もう。



## インストール

インストールが終わったら、**Steamコマンドライン（steamcmd.exe）**でコマンドを実行できるはず。まずはログインが必要で、**anonymous**ユーザーでログインするよ。以下のコマンドを実行してね：`login anonymous`

次はインストール。`app_update 232250`コマンドを使うよ。App ID **232250**は**Team Fortress 2専用サーバー**のアプリケーションを指している。

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

ダウンロードが完了するまで気長に待とう。ゲームサイズが大きいと時間がかかることもあるよ。成功すると、成功メッセージが表示される。

サーバーを外部から見えるようにしてアクセス可能にするには、使うサーバーポートをファイアウォールで開放／転送しなきゃ。Windowsファイアウォールの設定を開こう。

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

設定で追加ルールを作成する必要がある。受信ルールと送信ルールをそれぞれ開いて、TCP/UDPプロトコルの27015-27020ポートを追加しよう。



## 設定

ここまででTeam Fortress 2サーバーのセットアップは完了。さらに細かい設定をしたいなら、起動ファイルを直接編集しよう。ルートディレクトリに移動して、`cfg`フォルダ内の`server.cfg`ファイルを開いてサーバーオプションを編集できるよ。

```
../steamapps/common/tf2-ds/tf2/tf/cfg/server.cfg
```

## GSLトークンの登録

他のプレイヤーがあなたのサーバーに参加するには、Game Server Login Token（GSLT）を生成してサーバーに設定する必要があるよ。このトークンはSteamにサーバーを認証するためのもの。GSLTは http://steamcommunity.com/dev/managegameservers で作成できる。ゲームIDは232250（Team Fortress 2）を使ってね。

トークンを取得したら、サーバー起動パラメータに`+sv_setsteamaccount <TOKEN>`として追加しよう。



## サーバーの起動＆接続

さあ、サーバーを起動しよう。メインゲームディレクトリに移動して、以下の起動コマンドを実行してね：

```
start srcds.exe -console -game tf -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

コマンドプロンプトにログが表示されて起動成功のサインが見えるはず。初回起動はセットアップの関係で少し時間がかかることもあるよ。もしくは、サーバーリストの下の検索バーで`[your_ip_address]:2456`を検索して直接接続もできるよ。


## まとめ

おめでとう！VPSにTeam Fortress 2サーバーを無事インストール＆設定できたね！質問やサポートが必要なら、毎日対応しているサポートチームに気軽に連絡してね 🙂