---
id: dedicated-windows-cs2
title: "専用サーバー：Counter-Strike 2 専用サーバー Windows セットアップ"
description: "VPSや専用サーバーにCounter-Strike 2専用サーバーを素早く効率的にセットアップする方法 → 今すぐ詳しく見る"
sidebar_label: "Counter-Strike 2"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
VPSや専用サーバーを持っていて、そこにゲームサーバーをインストールしたい？例えばCounter-Strike 2専用サーバーとか？それならここがピッタリ！以下で、サーバーにこういったサービスをステップバイステップでインストールする方法を説明するよ。

<InlineVoucher />

## 準備

Counter-Strike 2サーバーのセットアップにはSteamCMDが必要だよ。SteamCMDは**Steamクライアントのコマンドライン版**。このツールを使うと、人気のSteamゲームの専用サーバーアプリを簡単かつ迅速にダウンロードできるんだ。SteamCMDは公式Valve開発者サイトで入手可能：https://developer.valvesoftware.com/wiki/SteamCMD。

続いてダウンロードを行うよ。ダウンロードしたファイルには**steamcmd.zip**が含まれていて、まずはこれを解凍しよう。専用のフォルダを作ってそこに解凍するのがおすすめ。解凍後に**steamcmd.exe**が見えるはず。これを実行して、インストールが完了するまで待とう。

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

「**Loading Steam API.... OK**」というメッセージが表示されたら、インストールは無事完了。これでCounter-Strike 2サーバーのインストールに進めるよ。



## インストール

インストールが終わったら、**Steamコマンドライン（steamcmd.exe）**でコマンドを実行できるようになっているはず。まずはログインが必要。ユーザーは**anonymous**でログインしよう。以下のコマンドを実行してね：`login anonymous`

次はインストールだ。`app_update 730`コマンドを使うよ。App IDの**730**は**Counter-Strike 2専用サーバー**アプリケーションを指している。

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

ダウンロードが完了するまで気長に待とう。ゲームサイズが大きいと時間がかかることもあるよ。成功すると、成功メッセージが表示されるから確認してね。

サーバーを外部から見えるようにしてアクセス可能にするには、使うサーバーポートをファイアウォールで許可・転送しなきゃ。Windowsファイアウォールの設定を開こう。

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

設定で追加ルールを作成する必要があるよ。以下のように受信ルールと送信ルールをクリックして、TCP/UDPプロトコルの27015-27020ポートを追加しよう。



## 設定

ここまででCounter-Strike 2サーバーのセットアップは完了。さらにサーバーの設定をカスタマイズしたい場合は、起動ファイルを直接編集しよう。ルートディレクトリに移動して、そこからcfgフォルダに進み、`server.cfg`ファイルを開いてサーバーオプションを編集できるよ。

```
../steamapps/common/cs2-ds/game/csgo/cfg/server.cfg
```

## GSLトークンの登録

他のプレイヤーがあなたのサーバーに参加するには、Game Server Login Token（GSLT）を生成してサーバーに設定する必要があるよ。このトークンはSteamにサーバーを認証するためのもの。GSLTを作成するには、http://steamcommunity.com/dev/managegameservers にアクセスして、ゲームID 730（Counter-Strike 2）を使ってトークンを作成しよう。

トークンを取得したら、サーバー起動パラメータに`+sv_setsteamaccount <TOKEN>`を追加して設定してね。



## サーバーの起動＆接続

いよいよサーバーを起動するよ。メインのゲームディレクトリに移動して、以下の起動コマンドを実行しよう：

```
.\cs2.exe -dedicated +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX +map de_dust2
```

コマンドプロンプトにログが表示されて、起動が成功したことがわかるはず。初回起動はセットアップのために少し時間がかかることもあるから気長にね。もしくは、サーバーリストの下部検索バーで `[your_ip_address]:2456` を使って直接接続もできるよ。


## まとめ

おめでとう！VPSにCounter-Strike 2サーバーを無事インストール＆設定できたね！もし質問やサポートが必要なら、毎日対応しているサポートチームに気軽に連絡してね！🙂

<InlineVoucher />