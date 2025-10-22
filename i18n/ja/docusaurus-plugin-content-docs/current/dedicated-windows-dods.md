---
id: dedicated-windows-dods
title: "専用サーバー：Day of Defeat: Source 専用サーバー Windows セットアップ"
description: "VPSや専用サーバーにDay of Defeat: Source専用サーバーを素早く効率的にセットアップする方法をチェック → 今すぐ詳しく見る"
sidebar_label: "Day of Defeat: Source"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
VPSや専用サーバーを持っていて、そこにゲームサーバーをインストールしたい？例えばDay of Defeat: Source専用サーバーとか？それならここがピッタリ！以下で、サーバーにこういったサービスをステップバイステップでインストールする方法を解説するよ。

<InlineVoucher />

## 準備

Day of Defeat: SourceサーバーのセットアップにはSteamCMDが必要だよ。SteamCMDは**Steamクライアントのコマンドライン版**。このツールを使えば、人気のSteamゲームの専用サーバーアプリを簡単かつ素早くダウンロードできるんだ。SteamCMDは公式Valve開発者サイトで手に入るよ：https://developer.valvesoftware.com/wiki/SteamCMD。

続いてダウンロードを行うよ。ダウンロードしたファイルには**steamcmd.zip**が含まれていて、まずはこれを解凍しよう。別フォルダを作ってそこに解凍するのがおすすめ。解凍後に**steamcmd.exe**が見えるはず。これを実行して、インストールが完了するまで待とう。

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

**Loading Steam API.... OK** のメッセージが表示されたら、インストールは無事完了。これでDay of Defeat: Sourceサーバーのインストールに進めるよ。



## インストール

インストールが終わったら、**Steamコマンドライン（steamcmd.exe）**でコマンドを実行できるようになっているはず。まずはログインが必要。ユーザーは**anonymous**でログインしよう。以下のコマンドを実行してね：`login anonymous`

次はインストールだよ。コマンドは `app_update 232290` 。App ID **232290** は**Day of Defeat: Source 専用サーバー**のアプリケーションを指しているよ。

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

ダウンロードが完了するまで気長に待とう。ゲームサイズが大きいと時間がかかることもあるからね。成功すると成功メッセージが表示されるよ。

サーバーを外部から見えるようにしてアクセス可能にするには、使うサーバーポートをファイアウォールで許可（ポート開放）しないといけない。Windowsファイアウォールの設定を開こう。

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

設定で追加ルールを作成する必要があるよ。受信ルールと送信ルールをそれぞれクリックして、以下のポートをTCP/UDP両方で追加しよう：27015-27020。



## 設定

ここまででDay of Defeat: Sourceサーバーのセットアップは完了。さらに細かいサーバー設定は起動ファイルを直接編集して行えるよ。ルートディレクトリに移動して、そこからcfgフォルダを開き、`server.cfg`ファイルを編集しよう。

```
../steamapps/common/dod-ds/dod/cfg/server.cfg
```

## GSLトークンの登録

他のプレイヤーがあなたのサーバーに参加するには、Game Server Login Token（GSLT）を生成してサーバーに設定する必要があるよ。このトークンはSteamにサーバーを認証させるためのもの。GSLTを作るには http://steamcommunity.com/dev/managegameservers にアクセスして、ゲームID 232290（Day of Defeat: Source）を使ってトークンを作成しよう。

トークンを取得したら、サーバー起動パラメータに `+sv_setsteamaccount <TOKEN>` を追加して設定してね。



## サーバーの起動＆接続

いよいよサーバーを起動しよう。メインゲームディレクトリに移動して、以下の起動コマンドを実行してね：

```
start srcds.exe -console -game dod -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

コマンドプロンプトにログが表示されて起動が成功したことがわかるはず。初回起動はセットアップのために少し時間がかかることもあるよ。もしくは、サーバーリストの下の検索バーに `[your_ip_address]:2456` を入力して直接接続もできるよ。


## まとめ

おめでとう！VPSにDay of Defeat: Sourceサーバーを無事インストール＆設定できたね！もし質問やサポートが必要なら、毎日対応しているサポートチームに気軽に連絡してね！🙂

<InlineVoucher />