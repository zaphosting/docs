---
id: vserver-windows-cs16
title: "VPS: Counter-Strike 1.6 専用サーバー Windows セットアップ"
description: "VPSや専用サーバーにCounter-Strike 1.6専用サーバーを簡単にセットアップする方法を解説 → 今すぐチェック"
sidebar_label: "Counter-Strike 1.6"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
VPSや専用サーバーを持っていて、そこにゲームサーバーをインストールしたい？例えばCounter-Strike 1.6専用サーバーとか？それならここがピッタリ！以下で、サーバーにこういったサービスをステップバイステップでインストールする方法を説明するよ。

<InlineVoucher />

## 準備

Counter-Strike 1.6サーバーのセットアップにはSteamCMDが必要だよ。SteamCMDは**Steamクライアントのコマンドライン版**で、このツールを使うと人気Steamゲームの専用サーバーアプリをサクッとダウンロードできる。SteamCMDは公式Valve開発者サイトで手に入るよ：https://developer.valvesoftware.com/wiki/SteamCMD。

ダウンロードすると、**steamcmd.zip**ファイルが入っているから、まずはこれを解凍しよう。別フォルダを作ってそこに解凍するのがおすすめ。解凍後に**steamcmd.exe**が見えるはず。これを実行して、インストールが完了するまで待とう。

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

「**Loading Steam API.... OK**」のメッセージが出たら、インストールは成功。これでCounter-Strike 1.6サーバーのインストールに進めるよ。



## インストール

インストール後は**Steamコマンドライン（steamcmd.exe）**でコマンドが実行できるはず。まずはログインが必要で、**anonymous**ユーザーでログインするよ。以下のコマンドを実行してね：`login anonymous`

次にインストールだ。`app_update 90`コマンドを使うよ。App IDの**90**は**Counter-Strike 1.6専用サーバー**アプリを指している。

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

ダウンロードが完了するまで気長に待とう。ゲームサイズが大きいと時間がかかることもあるよ。成功すると完了メッセージが表示される。

サーバーを外部から見えるようにしてアクセス可能にするには、使うサーバーポートをファイアウォールで開放/転送しなきゃ。Windowsファイアウォールの設定を開こう。

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

設定で追加ルールを作成する必要がある。受信ルールと送信ルールをそれぞれ開いて、TCP/UDPプロトコルの27015-27020ポートを追加しよう。



## 設定

ここまででCounter-Strike 1.6サーバーのセットアップは完了。さらに細かい設定は起動ファイルを直接編集してできるよ。ルートディレクトリに移動して、そこからcfgフォルダを開き、`server.cfg`ファイルを編集しよう。ここでサーバーのオプションを調整できる。

```
../steamapps/common/cs-ds/cstrike/cfg/server.cfg
```

## GSLトークンの登録

他のプレイヤーがあなたのサーバーに参加するには、Game Server Login Token（GSLT）を生成してサーバーに設定する必要があるよ。このトークンはSteamにサーバーを認証させるもの。GSLTは http://steamcommunity.com/dev/managegameservers で作成できる。ゲームIDは90（Counter-Strike 1.6）を使ってね。

トークンを取得したら、サーバー起動パラメータに `+sv_setsteamaccount <TOKEN>` を追加して設定しよう。



## サーバーの起動＆接続

さあ、サーバーを起動しよう。メインゲームディレクトリに移動して、以下の起動コマンドを実行してね：

```
hlds.exe -console -game cstrike +maxplayers 8 +map de_dust
```

コマンドプロンプトにログが表示されて起動成功のサインが見えるはず。初回起動はセットアップのために少し時間がかかることもあるよ。もしくは、サーバーリストの下の検索バーで `[your_ip_address]:2456` を使って直接接続もできるよ。


## まとめ

おめでとう！VPSにCounter-Strike 1.6サーバーを無事インストール＆設定できたね！もし質問やサポートが必要なら、いつでも毎日対応しているサポートチームに気軽に連絡してね！🙂

<InlineVoucher />