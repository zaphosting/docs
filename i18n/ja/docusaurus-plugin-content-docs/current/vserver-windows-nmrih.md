---
id: vserver-windows-nmrih
title: "VPS: No More Room In Hell 専用サーバー Windows セットアップ"
description: "VPSや専用サーバーにNo More Room In Hell専用ゲームサーバーを素早く効率的にセットアップする方法を学ぼう → 今すぐチェック"
sidebar_label: "No More Room In Hell"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
VPSや専用サーバーを持っていて、そこにゲームサーバーをインストールしたい？例えばNo More Room In Hell専用サーバーとか？それならここがピッタリ！以下で、そんなサービスをサーバーにインストールする方法をステップバイステップで解説するよ。

<InlineVoucher />

## 準備

No More Room In HellサーバーのセットアップにはSteamCMDが必要。SteamCMDは**Steamクライアントのコマンドライン版**だよ。このツールを使えば、人気Steamゲームの専用サーバーアプリを簡単かつ素早くダウンロードできる。SteamCMDは公式Valve開発者サイトで手に入るよ：https://developer.valvesoftware.com/wiki/SteamCMD。

続いてダウンロードを行う。ダウンロードしたファイルには**steamcmd.zip**が含まれていて、まずはこれを解凍しよう。専用のフォルダを作ってそこに解凍するのがおすすめ。解凍後に**steamcmd.exe**が見えるはず。これを実行して、インストールが完了するまで待とう。

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

**Loading Steam API.... OK** のメッセージが表示されたら、インストールは無事完了。これでNo More Room In Hellサーバーのインストールに進めるよ。



## インストール

インストールが終わったら、**Steamコマンドライン（steamcmd.exe）**でコマンドを実行できるはず。まずはログインが必要。ユーザーは**anonymous**でログインしよう。以下のコマンドを実行してね：`login anonymous`

次はインストールだ。`app_update 317670`コマンドを使うよ。App ID **317670** は**No More Room In Hell 専用サーバー**のアプリケーションIDだ。

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

ダウンロードが完了するまで気長に待とう。ゲームサイズが大きいと時間がかかることもあるよ。成功すると、成功メッセージが表示されるから確認してね。

サーバーを外部から見えるようにしてアクセス可能にするには、使うサーバーポートをファイアウォールで開放/転送しなきゃ。Windowsファイアウォールの設定を開こう。

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

設定で追加ルールを作成する必要がある。以下のように受信ルールと送信ルールをクリックして、TCP/UDPプロトコルの27015-27020ポートを追加しよう。



## 設定

ここまででNo More Room In Hellサーバーのセットアップは完了。さらにサーバーの設定をしたいなら、起動ファイルを直接編集しよう。ルートディレクトリに移動して、そこからcfgフォルダを開き、`server.cfg`ファイルを編集すればOK。

```
../steamapps/common/nmrih-ds/nmrih/cfg/server.cfg
```

## GSLトークンの登録

他のプレイヤーがあなたのサーバーに参加するには、Game Server Login Token（GSLT）を生成してサーバーに設定する必要があるよ。このトークンはSteamにサーバーを認証させるためのもの。GSLTを作るには http://steamcommunity.com/dev/managegameservers にアクセスして、ゲームID 317670（No More Room In Hell）を使ってトークンを作成しよう。

トークンを取得したら、サーバー起動パラメータに `+sv_setsteamaccount <TOKEN>` を追加して設定してね。



## サーバーの起動＆接続

いよいよサーバーを起動しよう。メインゲームディレクトリに移動して、以下の起動コマンドを実行してね：

```
start srcds.exe -console -game nmrih -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

コマンドプロンプトにログが表示されて起動成功のサインが見えるはず。初回起動はセットアップの関係で少し時間がかかることもあるよ。もしくは、サーバーリストの下の検索バーで `[your_ip_address]:2456` を検索して直接接続もできるよ。


## まとめ

おめでとう！VPSにNo More Room In Hellサーバーを無事インストール＆設定できたね！もし質問やサポートが必要なら、いつでも毎日対応しているサポートチームに気軽に連絡してね！🙂

<InlineVoucher />