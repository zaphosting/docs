---
id: dedicated-windows-nmrih
title: "専用サーバー: No More Room In Hell 専用サーバー Windowsセットアップ"
description: "VPSや専用サーバーにNo More Room In Hellの専用ゲームサーバーを簡単・スピーディにセットアップする方法 → 今すぐチェック"
sidebar_label: "No More Room In Hell"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
VPSや専用サーバーを持っていて、そこにゲームサーバーをインストールしたい？例えばNo More Room In Hellの専用サーバーとか？それならここがピッタリ！以下で、そんなサービスをサーバーにインストールする方法をステップバイステップで解説するよ。



## 準備

No More Room In HellサーバーのセットアップにはSteamCMDが必要だよ。SteamCMDは**Steamクライアントのコマンドライン版**。このツールを使えば、人気Steamゲームの専用サーバーアプリをサクッと簡単にダウンロードできるんだ。SteamCMDは公式Valve開発者サイトでゲットできるよ：`https://developer.valvesoftware.com/wiki/SteamCMD`。

ダウンロードが終わったら、**steamcmd.zip**ファイルが手に入るから、まずはこれを解凍しよう。別フォルダを作ってそこに解凍するのがおすすめ。解凍後に**steamcmd.exe**が見えるはず。これを実行して、インストールが完了するまで待とう。

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

**Loading Steam API.... OK**のメッセージが出たら、インストール完了！これでNo More Room In Hellサーバーのインストール準備が整ったよ。



## インストール

インストールが終わったら、**Steamコマンドライン（steamcmd.exe）**でコマンドを実行できるようになってるはず。まずはログインしよう。ユーザーは**anonymous**でOK。以下のコマンドを実行してね：`login anonymous`

次はインストールだよ。コマンドは`app_update 317670`。App IDの**317670**は**No More Room In Hell専用サーバー**のアプリを指してる。

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

ダウンロードが完了するまで気長に待とう。ゲームサイズが大きいと時間かかることもあるからね。成功すると成功メッセージが表示されるよ。

サーバーを外部から見えるようにしてアクセス可能にするには、使うサーバーポートをファイアウォールで開放（転送）しなきゃ。Windowsファイアウォールの設定を開こう。

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

設定で追加ルールを作成する必要があるよ。受信ルールと送信ルールをそれぞれ開いて、TCP/UDPの27015-27020ポートを追加しよう。



## 設定

ここまででNo More Room In Hellサーバーのセットアップは完了。さらに細かい設定をしたいなら、起動ファイルを直接編集しよう。ルートディレクトリに移動して、そこからcfgフォルダを開き、`server.cfg`ファイルを編集すればOK。

```
../steamapps/common/nmrih-ds/nmrih/cfg/server.cfg
```

## GSLトークンの登録

他のプレイヤーがあなたのサーバーに参加するには、Game Server Login Token（GSLT）を生成してサーバーに設定する必要があるよ。このトークンはSteamにサーバーを認証させるためのもの。GSLTを作るには http://steamcommunity.com/dev/managegameservers にアクセスして、ゲームID 317670（No More Room In Hell）を使ってトークンを作成しよう。

トークンができたら、サーバー起動パラメータに`+sv_setsteamaccount <TOKEN>`を追加して設定してね。



## サーバーの起動＆接続

いよいよサーバーを起動しよう。メインのゲームディレクトリに移動して、以下の起動コマンドを実行してね：

```
start srcds.exe -console -game nmrih -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

コマンドプロンプトにログが表示されて起動成功のサインが見えたらOK。初回起動はセットアップの関係で少し時間がかかることもあるよ。別の方法として、サーバーリストの下の検索バーに`[あなたのIPアドレス]:2456`を入力して直接接続もできるよ。


## まとめ

おめでとう！VPSにNo More Room In Hellサーバーのインストール＆設定が無事完了したね！もし質問やサポートが必要なら、いつでも気軽にサポートチームに連絡してね。毎日対応してるから安心して 🙂