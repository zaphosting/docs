---
id: dedicated-windows-css
title: "専用サーバー：Counter-Strike: Source 専用サーバー Windows セットアップ"
description: "VPSや専用サーバーにCounter-Strike: Source専用サーバーを簡単・迅速にセットアップする方法をチェック → 今すぐ詳しく見る"
sidebar_label: "Counter-Strike: Source"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
VPSや専用サーバーを持っていて、そこにゲームサーバーをインストールしたい？例えばCounter-Strike: Source専用サーバーとか？それならここがピッタリ！以下で、サーバーにこうしたサービスをステップバイステップでインストールする方法を解説するよ。



## 準備

Counter-Strike: SourceサーバーのセットアップにはSteamCMDが必要だよ。SteamCMDは**Steamクライアントのコマンドライン版**。このツールを使えば、人気のSteamゲームの専用サーバーアプリを素早く簡単にダウンロードできる。SteamCMDは公式Valve開発者サイトで入手可能：`https://developer.valvesoftware.com/wiki/SteamCMD`。

続いてダウンロードを行うよ。ダウンロードしたファイルには**steamcmd.zip**が含まれていて、まずはこれを解凍しよう。別フォルダを作ってそこに解凍するのがおすすめ。解凍後に**steamcmd.exe**が見えるはず。これを実行して、インストールが完了するまで待とう。

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

**Loading Steam API.... OK**のメッセージが表示されたら、インストールは無事完了。これでCounter-Strike: Sourceサーバーのインストールに進めるよ。



## インストール

インストール後は**Steamコマンドライン（steamcmd.exe）**でコマンドを実行できるようになっているはず。まずはログインが必要。ユーザーは**anonymous**でログインしよう。以下のコマンドを実行してね：`login anonymous`

次にインストールを行うよ。コマンドは`app_update 232330`。App ID **232330**は**Counter-Strike: Source専用サーバー**アプリを指している。

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

ダウンロードが完了するまで気長に待とう。ゲームサイズが大きいと時間がかかることもあるよ。成功すると完了メッセージが表示される。

サーバーを外部から見えるようにしアクセス可能にするには、使用するサーバーポートをファイアウォールで許可・転送する必要がある。Windowsファイアウォールの設定を開こう。

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

設定で追加ルールを作成しよう。受信ルールと送信ルールをそれぞれ開き、以下のポートをTCP/UDP両方で追加：27015-27020。



## 設定

ここまででCounter-Strike: Sourceサーバーのセットアップは完了。さらに細かい設定をしたい場合は、起動ファイルを直接編集しよう。ルートディレクトリに移動し、その中のcfgフォルダにある`server.cfg`ファイルを開いてサーバーオプションを編集できる。

```
../steamapps/common/css-ds/cstrike/cfg/server.cfg
```

## GSLトークンの登録

他のプレイヤーがあなたのサーバーに参加するには、Game Server Login Token（GSLT）を生成してサーバーに設定する必要がある。このトークンはSteamにサーバーを認証するためのもの。GSLTを作成するには http://steamcommunity.com/dev/managegameservers にアクセスし、ゲームID 232330（Counter-Strike: Source）を使ってトークンを生成しよう。

トークンを取得したら、サーバー起動パラメータに`+sv_setsteamaccount <TOKEN>`として追加してね。



## サーバーの起動＆接続

いよいよサーバーを起動しよう。メインゲームディレクトリに移動して、以下の起動コマンドを実行してね：

```
start srcds.exe -console -game cstrike -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

コマンドプロンプトにログが表示され、起動が成功したことがわかるはず。初回起動はセットアップのため少し時間がかかることもあるよ。もしくは、サーバーリストの下部検索バーで`[your_ip_address]:2456`を検索して直接接続もできるよ。


## まとめ

おめでとう！VPSにCounter-Strike: Sourceサーバーを無事インストール＆設定できたね！もし質問やサポートが必要なら、毎日対応しているサポートチームに気軽に連絡してね 🙂