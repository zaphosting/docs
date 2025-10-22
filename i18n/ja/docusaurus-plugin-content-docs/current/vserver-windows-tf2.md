---
id: vserver-windows-tf2
title: "VPS: Team Fortress 2 専用サーバー Windows セットアップ"
description: "VPSやサーバーにTeam Fortress 2専用サーバーを簡単にセットアップする方法をチェック → 今すぐ詳しく見る"
sidebar_label: "Team Fortress 2"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
VPSや専用サーバーを持っていて、そこにゲームサーバーをインストールしたい？例えばTeam Fortress 2専用サーバーとか？それならここがピッタリ！以下では、サーバーにこういったサービスをステップバイステップでインストールする方法を解説するよ。

<InlineVoucher />

## 準備

Team Fortress 2サーバーのセットアップにはSteamCMDが必要だよ。SteamCMDは**Steamクライアントのコマンドライン版**。このツールを使えば、人気Steamゲームの専用サーバーアプリをサクッとダウンロードできるんだ。SteamCMDは公式Valve開発者サイトでゲットできるよ：https://developer.valvesoftware.com/wiki/SteamCMD。

続いてダウンロードを行うよ。ダウンロードしたファイルには**steamcmd.zip**が含まれていて、まずはこれを解凍しよう。専用のフォルダを作ってそこに解凍するのがおすすめ。解凍後に**steamcmd.exe**が見えるはず。これを実行して、インストールが完了するまで待とう。

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

**Loading Steam API.... OK** のメッセージが表示されたら、インストールは無事完了。これでTeam Fortress 2サーバーのインストールに進めるよ。



## インストール

インストールが終わったら、**Steamコマンドライン（steamcmd.exe）**でコマンドを実行できるはず。まずはログインが必要で、**anonymous**ユーザーでログインするよ。以下のコマンドを実行してね：`login anonymous`

次はインストールだ。`app_update 232250`コマンドを使うよ。App ID **232250** は**Team Fortress 2 専用サーバー**アプリケーションを指している。

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

ダウンロードが完了するまで気長に待とう。ゲームサイズが大きいと時間がかかることもあるからね。成功すると、成功メッセージが表示されるよ。

サーバーを外部から見えるようにしてアクセス可能にするには、使うサーバーポートをファイアウォールで開放／転送する必要がある。Windowsファイアウォールの設定を開こう。

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

設定で追加ルールを作成しよう。受信ルールと送信ルールをそれぞれクリックして、以下のポートをTCP/UDP両方で追加してね：27015-27020。



## 設定

ここまででTeam Fortress 2サーバーのセットアップは完了。さらに細かいサーバー設定をしたい場合は、起動ファイルを直接編集しよう。ルートディレクトリに移動して、そこからcfgフォルダ内の`server.cfg`ファイルを開いて編集できるよ。

```
../steamapps/common/tf2-ds/tf2/tf/cfg/server.cfg
```

## GSLトークンの登録

他のプレイヤーがあなたのサーバーに参加するには、Game Server Login Token（GSLT）を生成してサーバーに設定する必要があるよ。このトークンはSteamにサーバーを認証させるためのもの。GSLTは http://steamcommunity.com/dev/managegameservers で作成できる。ゲームIDは232250（Team Fortress 2）を使ってね。

トークンを取得したら、サーバー起動パラメータに `+sv_setsteamaccount <TOKEN>` を追加しよう。



## サーバーの起動＆接続

いよいよサーバーを起動しよう。メインゲームディレクトリに移動して、以下の起動コマンドを実行してね：

```
start srcds.exe -console -game tf -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

コマンドプロンプトにログが表示されて起動成功のサインが見えるはず。初回起動はセットアップの関係で少し時間がかかることもあるから気長に待ってね。もしくは、サーバーリストの下の検索バーで `[your_ip_address]:2456` を入力して直接接続もできるよ。


## まとめ

おめでとう！VPSにTeam Fortress 2サーバーを無事インストール＆設定できたね！もし質問やサポートが必要なら、いつでも毎日対応しているサポートチームに気軽に連絡してね！🙂

<InlineVoucher />