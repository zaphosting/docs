---
id: dedicated-windows-css
title: "専用サーバー：Counter-Strike: Source 専用サーバー Windows セットアップ"
description: "VPSや専用サーバーにCounter-Strike: Source専用サーバーを簡単・迅速にセットアップする方法 → 今すぐチェック"
sidebar_label: "Counter-Strike: Source"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
VPSや専用サーバーを持っていて、そこにゲームサーバーをインストールしたい？例えばCounter-Strike: Source専用サーバーとか？それならここがピッタリ！以下で、サーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。

<InlineVoucher />

## 準備

Counter-Strike: SourceサーバーのセットアップにはSteamCMDが必要だよ。SteamCMDは**Steamクライアントのコマンドライン版**。このツールを使えば、人気のSteamゲームの専用サーバーアプリを素早く簡単にダウンロードできるんだ。SteamCMDは公式Valve開発者サイトで入手可能：https://developer.valvesoftware.com/wiki/SteamCMD。

続いてダウンロードを行うよ。ダウンロードしたファイルには**steamcmd.zip**が含まれていて、まずはこれを解凍しよう。別フォルダを作ってそこに解凍するのがおすすめ。解凍後に**steamcmd.exe**が見えるはず。これを実行して、インストールが完了するまで待とう。

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

**Loading Steam API.... OK**のメッセージが表示されたら、インストールは成功。これでCounter-Strike: Sourceサーバーのインストールに進めるよ。



## インストール

インストール後は**Steamコマンドライン（steamcmd.exe）**でコマンドを実行できるはず。まずはログインが必要。ユーザー名は**anonymous**でログインしよう。以下のコマンドを実行してね：`login anonymous`

次はインストールだよ。`app_update 232330`コマンドを使う。App IDの**232330**は**Counter-Strike: Source専用サーバー**アプリを指しているよ。

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

ダウンロードが完了するまで気長に待とう。ゲームサイズが大きいと時間がかかることもあるからね。成功すると完了メッセージが表示されるよ。

サーバーを外部から見えるようにしてアクセス可能にするには、使うサーバーポートをファイアウォールで開放/転送しなきゃ。Windowsファイアウォールの設定を開こう。

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

設定で追加ルールを作成する必要があるよ。受信ルールと送信ルールをそれぞれクリックして、以下のポートをTCP/UDP両方で追加しよう：27015-27020。



## 設定

ここまででCounter-Strike: Sourceサーバーのセットアップは完了。さらに細かい設定をしたいなら、起動ファイルを直接編集しよう。ルートディレクトリに移動して、`cfg`フォルダ内の`server.cfg`ファイルを開いてみて。

```
../steamapps/common/css-ds/cstrike/cfg/server.cfg
```

## GSLトークンの登録

他のプレイヤーがサーバーに参加できるように、Game Server Login Token（GSLT）を生成してサーバーに設定しよう。このトークンはSteamにサーバーを認証するためのもの。GSLTは http://steamcommunity.com/dev/managegameservers で作成できるよ。ゲームIDは232330（Counter-Strike: Source用）を使ってね。

トークンを取得したら、サーバー起動パラメータに`+sv_setsteamaccount <TOKEN>`として追加しよう。



## サーバーの起動＆接続

いよいよサーバーを起動するよ。メインゲームディレクトリに移動して、以下の起動コマンドを実行しよう：

```
start srcds.exe -console -game cstrike -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

コマンドプロンプトにログが表示されて起動成功のサインが見えるはず。初回起動はセットアップのため少し時間がかかることもあるよ。もしくは、サーバーリストの下の検索バーで `[your_ip_address]:2456` を検索して直接接続もできるよ。


## まとめ

おめでとう！VPSにCounter-Strike: Sourceサーバーを無事インストール＆設定できたね！もし質問やサポートが必要なら、いつでも毎日対応しているサポートチームに気軽に連絡してね！🙂

<InlineVoucher />