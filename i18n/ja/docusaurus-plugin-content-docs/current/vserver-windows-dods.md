---
id: vserver-windows-dods
title: "VPS: Day of Defeat: Source 専用サーバー Windows セットアップ"
description: "VPSや専用サーバーにDay of Defeat: Source専用サーバーを素早く効率的にセットアップする方法 → 今すぐチェック"
sidebar_label: "Day of Defeat: Source"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
VPSや専用サーバーを持っていて、そこにゲームサーバーをインストールしたい？例えばDay of Defeat: Source専用サーバーとか？それならここがピッタリ！以下で、サーバーにこういったサービスをインストールする手順をステップバイステップで解説するよ。

<InlineVoucher />

## 準備

Day of Defeat: SourceサーバーのセットアップにはSteamCMDが必要だよ。SteamCMDは**Steamクライアントのコマンドライン版**。このツールを使うと、人気Steamゲームの専用サーバーアプリを簡単かつ素早くダウンロードできるんだ。SteamCMDは公式Valve開発者サイトで手に入るよ：https://developer.valvesoftware.com/wiki/SteamCMD。

続いてダウンロードを行うよ。ダウンロードしたファイルには**steamcmd.zip**が含まれていて、まずはこれを解凍しよう。別フォルダを作ってそこに解凍するのがおすすめ。解凍後に**steamcmd.exe**が見えるはず。これを実行して、インストールが完了するまで待とう。

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

「**Loading Steam API.... OK**」のメッセージが表示されたら、インストールは無事完了。これでDay of Defeat: Sourceサーバーのインストールに進めるよ。



## インストール

インストールが終わったら、**Steamコマンドライン（steamcmd.exe）**でコマンドを実行できるようになっているはず。まずはログインが必要。ログインは**anonymous**ユーザーで行うよ。以下のコマンドを実行してね：`login anonymous`

次はインストールだ。`app_update 232290`コマンドを使うよ。App IDの**232290**は**Day of Defeat: Source 専用サーバー**のアプリケーションを指している。

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

ダウンロードが完了するまで気長に待とう。ゲームサイズが大きいと時間がかかることもあるよ。成功すると完了メッセージが表示されるから確認してね。

サーバーを外部から見えるようにしてアクセス可能にするには、使うサーバーポートをファイアウォールで許可/転送しなきゃ。Windowsファイアウォールの設定を開こう。

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

設定で追加ルールを作成する必要があるよ。下記のように受信ルールと送信ルールをクリックして、TCP/UDPプロトコルの27015-27020ポートを追加しよう。



## 設定

ここまででDay of Defeat: Sourceサーバーのセットアップは完了。さらに細かいサーバー設定をしたいなら、起動ファイルを直接編集しよう。ルートディレクトリに移動して、そこからcfgフォルダを開き、`server.cfg`ファイルを編集すればOK。

```
../steamapps/common/dod-ds/dod/cfg/server.cfg
```

## GSLトークンの登録

他のプレイヤーがあなたのサーバーに参加するには、Game Server Login Token（GSLT）を生成してサーバーに設定する必要があるよ。このトークンはSteamにサーバーを認証するためのもの。GSLTを作るには http://steamcommunity.com/dev/managegameservers にアクセスして、ゲームID 232290（Day of Defeat: Source）を使ってトークンを作成しよう。

トークンを取得したら、サーバー起動パラメータに `+sv_setsteamaccount <TOKEN>` を追加して設定してね。



## サーバーの起動＆接続

いよいよサーバーを起動するよ。メインゲームディレクトリに移動して、以下の起動コマンドを実行しよう：

```
start srcds.exe -console -game dod -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

コマンドプロンプトにログが表示されて起動成功のサインが見えるはず。初回起動はセットアップのために少し時間がかかることもあるから気長に待ってね。もしくは、サーバーリストの下の検索バーに `[your_ip_address]:2456` を入力して直接接続もできるよ。


## まとめ

おめでとう！VPSにDay of Defeat: Sourceサーバーを無事インストール＆設定できたね！もし質問やサポートが必要なら、いつでも毎日対応しているサポートチームに気軽に連絡してね！🙂

<InlineVoucher />