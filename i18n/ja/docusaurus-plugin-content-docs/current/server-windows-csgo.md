---
id: server-windows-csgo
title: "CS:GO 専用サーバー Windows セットアップ"
description: "サーバーにCS:GO専用サーバーを素早く効率的にセットアップする方法 → 今すぐ詳しく見る"
sidebar_label: "CS:GO"
services:
  - vserver
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
VPSや専用サーバーを持っていて、そこにゲームサーバーをインストールしたい？例えばCS:GO専用サーバーとか？それならここがピッタリ！以下で、サーバーにこういったサービスをステップバイステップでインストールする方法を解説するよ。



## 準備

CS:GOサーバーのセットアップにはSteamCMDが必要だよ。SteamCMDは**Steamクライアントのコマンドライン版**。このツールを使えば、人気のSteamゲームのVPS/専用サーバー用アプリケーションを簡単にダウンロードできるんだ。SteamCMDは公式Valve開発者サイトで手に入るよ：https://developer.valvesoftware.com/wiki/SteamCMD。

ダウンロードすると、**steamcmd.zip**ファイルが入っているから、まずはこれを解凍しよう。別フォルダを作ってそこに解凍するのがおすすめ。解凍後に**steamcmd.exe**が見えるはず。これを実行して、インストールが完了するまで待とう。

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

**Loading Steam API.... OK** のメッセージが出たらインストール成功！これでCS:GOサーバーのインストール準備が整ったよ。



## インストール

インストール後は**Steamコマンドライン（steamcmd.exe）**でコマンドを実行できるようになっているはず。まずはログインしよう。ログインは**anonymous**ユーザーで行うよ。以下のコマンドを実行してね：`login anonymous`

次にインストールだ。`app_update 730`コマンドを使うよ。App ID **730** は**CS:GO専用サーバー**のアプリケーションを指している。

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

ダウンロードが完了するまで気長に待とう。ゲームサイズが大きいと時間がかかることもあるよ。成功すると完了メッセージが表示されるから安心してね。

サーバーを外部から見えるようにしてアクセス可能にするには、使うサーバーポートをファイアウォールで開放/転送しなきゃいけない。Windowsファイアウォールの設定を開こう。

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

設定で追加ルールを作成する必要があるよ。受信ルールと送信ルールをそれぞれ開いて、TCP/UDPプロトコルのポート27015-27020を追加しよう。



## 設定

ここまででCS:GOサーバーのセットアップは完了。さらに細かい設定をしたいなら、起動ファイルを直接編集しよう。ルートディレクトリに移動して、そこからcfgフォルダを開き、`server.cfg`ファイルを編集すればOK。

```
../steamapps/common/CS:GO-ds/game/csgo/cfg/server.cfg
```

## GSLトークンの登録

他のプレイヤーがあなたのサーバーに参加するには、Game Server Login Token（GSLT）を生成してサーバーに設定する必要があるよ。このトークンはSteamにサーバーを認証するためのもの。GSLTを作るには http://steamcommunity.com/dev/managegameservers にアクセスして、ゲームID **4465480**（新しいCS:GOスタンドアロン用）を使ってトークンを作成しよう。

トークンを取得したら、サーバー起動パラメータに `+sv_setsteamaccount <TOKEN>` を追加して設定してね。



## サーバーの起動＆接続

いよいよサーバーを起動しよう。メインのゲームディレクトリに移動して、以下の起動コマンドを実行してね：

```
.\CS:GO.exe -dedicated +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX +map de_dust2
```

コマンドプロンプトにログが表示されて起動成功のサインが見えるはず。初回起動はセットアップの関係で少し時間がかかることもあるよ。もしくは、サーバーリストの下部検索バーに `[your_ip_address]:2456` を入力して直接接続もできるよ。


## まとめ

おめでとう！VPSや専用サーバーにCS:GOサーバーを無事インストール＆設定できたね！もし質問やサポートが必要なら、いつでも毎日対応しているサポートチームに気軽に連絡してね！🙂