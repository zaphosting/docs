---
id: dedicated-windows-l4d2
title: "専用サーバー：Left 4 Dead 2 専用サーバー Windows セットアップ"
description: "VPSや専用サーバーにLeft 4 Dead 2専用サーバーを簡単＆スピーディにセットアップする方法 → 今すぐチェック"
sidebar_label: "Left 4 Dead 2"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
VPSや専用サーバーを持っていて、そこにゲームサーバーをインストールしたい？例えばLeft 4 Dead 2専用サーバーとか？それならここがピッタリ！以下で、サーバーにこういったサービスをステップバイステップでインストールする方法を解説するよ。

<InlineVoucher />

## 準備

Left 4 Dead 2サーバーのセットアップにはSteamCMDが必要だよ。SteamCMDは**Steamクライアントのコマンドライン版**。このツールを使えば、人気Steamゲームの専用サーバーアプリをサクッと簡単にダウンロードできるんだ。SteamCMDは公式Valve開発者サイトで入手可能：https://developer.valvesoftware.com/wiki/SteamCMD。

続いてダウンロードを行うよ。ダウンロードしたファイルには**steamcmd.zip**が含まれていて、まずはこれを解凍しよう。別フォルダを作ってそこに解凍するのがおすすめ。解凍後に**steamcmd.exe**が見えるはず。これを実行して、インストールが完了するまで待とう。

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

「**Loading Steam API.... OK**」のメッセージが表示されたら、インストールは無事完了。さあ、Left 4 Dead 2サーバーのインストールを始めよう！



## インストール

インストールが終わったら、**Steamコマンドライン（steamcmd.exe）**でコマンドが実行できるはず。まずはログインが必要だよ。ログインは**anonymous**ユーザーで行う。以下のコマンドを実行しよう：`login anonymous`

次はインストールだ。`app_update 222840`コマンドを使うよ。App ID **222840**は**Left 4 Dead 2専用サーバー**アプリを指している。

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

ダウンロードが完了するまで気長に待とう。ゲームサイズが大きいと時間がかかることもあるよ。成功すると、成功メッセージが表示されるから安心してね。

サーバーを外部から見えるようにしてアクセス可能にするには、使うサーバーポートをファイアウォールで開放／転送しなきゃ。Windowsファイアウォールの設定を開こう。

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

設定で追加ルールを作成する必要がある。下記のように受信ルールと送信ルールをクリックして、TCP/UDPプロトコルの27015-27020ポートを追加しよう。



## 設定

ここまででLeft 4 Dead 2サーバーのセットアップは完了。さらに細かいサーバー設定は起動ファイルを直接編集して行えるよ。ルートディレクトリに移動して、そこからcfgフォルダに入って`server.cfg`ファイルを開こう。ここでサーバーオプションを編集できる。

```
../steamapps/common/l4d2-ds/l4d2/cfg/server.cfg
```

## GSLトークンの登録

他のプレイヤーがあなたのサーバーに参加するには、Game Server Login Token（GSLT）を生成してサーバーに設定する必要があるよ。このトークンはSteamにサーバーを認証するためのもの。GSLTを作るには http://steamcommunity.com/dev/managegameservers にアクセスして、ゲームID 222840（Left 4 Dead 2）を使ってトークンを作成しよう。

トークンを取得したら、サーバー起動パラメータに`+sv_setsteamaccount <TOKEN>`を追加して設定してね。



## サーバーの起動＆接続

いよいよサーバーを起動しよう。メインゲームディレクトリに移動して、以下の起動コマンドを実行してね：

```
start srcds.exe -console -game l4d2 -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

コマンドプロンプトにログが表示されて起動が成功したことがわかるはず。初回起動はセットアップのために少し時間がかかることもあるよ。もしくは、サーバーリストの下部検索バーで`[your_ip_address]:2456`を検索して直接接続もできるよ。


## まとめ

おめでとう！VPSにLeft 4 Dead 2サーバーを無事インストール＆設定できたね！もし質問やサポートが必要なら、毎日対応しているサポートチームに気軽に連絡してね！🙂

<InlineVoucher />