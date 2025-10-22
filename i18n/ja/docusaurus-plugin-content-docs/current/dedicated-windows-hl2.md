---
id: dedicated-windows-hl2
title: "専用サーバー：Half-Life 2 専用サーバー Windows セットアップ"
description: "VPSや専用サーバーにHalf-Life 2専用サーバーを素早く効率的にセットアップする方法 → 今すぐチェック"
sidebar_label: "Half-Life 2"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
VPSや専用サーバーを持っていて、そこにゲームサーバーをインストールしたい？例えばHalf-Life 2専用サーバーとか？それならここがピッタリ！以下で、サーバーにこうしたサービスをステップバイステップでインストールする方法を解説するよ。

<InlineVoucher />

## 準備

Half-Life 2サーバーのセットアップにはSteamCMDが必要だよ。SteamCMDは**Steamクライアントのコマンドライン版**。このツールを使えば、人気Steamゲームの専用サーバーアプリを簡単かつ素早くダウンロードできるんだ。SteamCMDは公式Valve開発者サイトで手に入るよ：https://developer.valvesoftware.com/wiki/SteamCMD。

続いてダウンロードを行うよ。ダウンロードしたファイルには**steamcmd.zip**が含まれていて、まずはこれを解凍しよう。別フォルダを作ってそこに解凍するのがおすすめ。解凍後に**steamcmd.exe**が見えるはず。これを実行して、インストールが完了するまで待とう。

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

**Loading Steam API.... OK** のメッセージが表示されたら、インストールは無事完了。これでHalf-Life 2サーバーのインストールに進めるよ。



## インストール

インストールが終わったら、**Steamコマンドライン（steamcmd.exe）**でコマンドを実行できるはず。まずはログインしよう。ログインは**anonymous**ユーザーで行うよ。以下のコマンドを実行してね：`login anonymous`

次はインストールだ。`app_update 232370`コマンドを使うよ。App ID **232370** は**Half-Life 2専用サーバー**アプリケーションを指している。

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

ダウンロードが完了するまで気長に待とう。ゲームサイズが大きいと時間がかかることもあるよ。成功すると成功メッセージが表示されるから確認してね。

サーバーを外部から見えるようにしてアクセス可能にするには、使うサーバーポートをファイアウォールで許可・転送しなきゃ。Windowsファイアウォールの設定を開こう。

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

設定で追加ルールを作成する必要があるよ。受信ルールと送信ルールをそれぞれクリックして、以下のポートをTCP/UDP両方で追加しよう：27015-27020。



## 設定

ここまででHalf-Life 2サーバーのセットアップは完了。さらにサーバー設定をカスタマイズしたいなら、起動ファイルを直接編集しよう。ルートディレクトリに移動して、そこからcfgフォルダを開き、`server.cfg`ファイルを編集してね。

```
../steamapps/common/hl2-ds/hl2mp/cfg/server.cfg
```

## GSLトークンの登録

他のプレイヤーがあなたのサーバーに参加するには、Game Server Login Token（GSLT）を生成してサーバーに設定する必要があるよ。このトークンはSteamにサーバーを認証するためのもの。GSLTを作るには http://steamcommunity.com/dev/managegameservers にアクセスして、ゲームID 232370（Half-Life 2）を使ってトークンを作成しよう。

トークンを取得したら、サーバー起動パラメータに `+sv_setsteamaccount <TOKEN>` として追加してね。



## サーバーの起動＆接続

いよいよサーバーを起動しよう。メインゲームディレクトリに移動して、以下の起動コマンドを実行してね：

```
start srcds.exe -console -game hl2mp -secure +maxplayers 10 +map dm_runoff +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

コマンドプロンプトにログが表示されて起動成功のサインが見えるはず。初回起動はセットアップのために少し時間がかかることもあるよ。もしくは、サーバーリストの下の検索バーで `[your_ip_address]:2456` を使って直接接続もできるよ。


## まとめ

おめでとう！VPSにHalf-Life 2サーバーのインストールと設定が無事完了したね！もし質問やサポートが必要なら、いつでも毎日対応しているサポートチームに気軽に連絡してね！🙂

<InlineVoucher />