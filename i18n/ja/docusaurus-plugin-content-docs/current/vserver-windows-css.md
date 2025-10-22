---
id: vserver-windows-css
title: "VPS: Counter-Strike: Source 専用サーバー Windows セットアップ"
description: "VPSやサーバーにCounter-Strike: Source専用サーバーを簡単・迅速にセットアップする方法をチェック → 今すぐ詳しく見る"
sidebar_label: "Counter-Strike: Source"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
VPSや専用サーバーを持っていて、そこにゲームサーバーをインストールしたい？例えばCounter-Strike: Source専用サーバーとか？それならここがピッタリ！以下で、サーバーにこういったサービスをステップバイステップでインストールする方法を解説するよ。

<InlineVoucher />

## 準備

Counter-Strike: SourceサーバーのセットアップにはSteamCMDが必要だよ。SteamCMDは**Steamクライアントのコマンドライン版**で、このツールを使うと人気Steamゲームの専用サーバーアプリを簡単かつ素早くダウンロードできる。SteamCMDは公式Valve開発者サイトで手に入るよ：https://developer.valvesoftware.com/wiki/SteamCMD。

続いてダウンロードを行う。ダウンロードしたファイルには**steamcmd.zip**が含まれていて、まずはこれを解凍しよう。専用のフォルダを作ってそこに解凍するのがおすすめ。解凍後に**steamcmd.exe**が見えるはず。これを実行して、インストールが完了するまで待とう。

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

**Loading Steam API.... OK** のメッセージが表示されたら、インストールは無事完了。これでCounter-Strike: Sourceサーバーのインストールに進めるよ。



## インストール

インストールが終わったら、**Steamコマンドライン（steamcmd.exe）**でコマンドを実行できるようになっているはず。まずはログインが必要で、これは**anonymous**ユーザーで行うよ。以下のコマンドを実行しよう：`login anonymous`

次にインストールだ。コマンドは `app_update 232330` 。App ID **232330** は**Counter-Strike: Source 専用サーバー**アプリを指しているよ。

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

ダウンロードが完了するまで気長に待とう。ゲームサイズが大きいと時間がかかることもあるよ。成功すると完了メッセージが表示されるから確認してね。

サーバーを外部から見えるようにしてアクセス可能にするには、使うサーバーポートをファイアウォールで開放・転送しなきゃ。Windowsファイアウォールの設定を開こう。

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

設定で追加ルールを作成する必要がある。受信ルールと送信ルールをそれぞれ開いて、TCP/UDPプロトコルの27015-27020ポートを追加しよう。



## 設定

ここまででCounter-Strike: Sourceサーバーのセットアップは完了。さらに細かいサーバー設定は起動ファイルを直接編集して行えるよ。ルートディレクトリに移動して、そこからcfgフォルダを開き、`server.cfg`ファイルを編集しよう。

```
../steamapps/common/css-ds/cstrike/cfg/server.cfg
```

## GSLトークンの登録

他のプレイヤーがあなたのサーバーに参加するには、Game Server Login Token（GSLT）を生成してサーバーに設定する必要があるよ。このトークンはSteamにサーバーを認証させるもの。GSLTを作るには http://steamcommunity.com/dev/managegameservers にアクセスして、ゲームID 232330（Counter-Strike: Source）を使ってトークンを作成しよう。

トークンを取得したら、サーバー起動パラメータに `+sv_setsteamaccount <TOKEN>` として追加してね。



## サーバーの起動＆接続

いよいよサーバーを起動しよう。メインのゲームディレクトリに移動して、以下の起動コマンドを実行してね：

```
start srcds.exe -console -game cstrike -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

コマンドプロンプトにログが表示されて起動成功のサインが見えるはず。初回起動はセットアップの関係で少し時間がかかることもあるよ。もしくは、サーバーリストの下の検索バーで `[your_ip_address]:2456` を入力して直接接続もできるよ。


## まとめ

おめでとう！VPSにCounter-Strike: Sourceサーバーを無事インストール＆設定できたね！もし質問やサポートが必要なら、いつでも毎日対応しているサポートチームに気軽に連絡してね！🙂

<InlineVoucher />