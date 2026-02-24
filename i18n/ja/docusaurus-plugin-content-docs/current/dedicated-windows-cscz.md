---
id: dedicated-windows-cscz
title: "専用サーバー：Counter-Strike: Condition Zero 専用サーバー Windows セットアップ"
description: "VPSや専用サーバーにCounter-Strike: Condition Zero専用サーバーを簡単・迅速にセットアップする方法 → 今すぐチェック"
sidebar_label: "Counter-Strike: Condition Zero"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
VPSや専用サーバーを持っていて、そこにゲームサーバーをインストールしたい？例えばCounter-Strike: Condition Zero専用サーバーとか？それならここがピッタリ！以下で、サーバーにこういったサービスをステップバイステップでインストールする方法を解説するよ。



## 準備

Counter-Strike: Condition ZeroサーバーのセットアップにはSteamCMDが必要だよ。SteamCMDは**Steamクライアントのコマンドライン版**。このツールを使えば、人気Steamゲームの専用サーバーアプリをサクッと簡単にダウンロードできる。SteamCMDは公式Valve開発者サイトで入手可能：`https://developer.valvesoftware.com/wiki/SteamCMD`。

ダウンロード後は、**steamcmd.zip**ファイルが手に入るから、まずはこれを解凍しよう。別フォルダを作ってそこに解凍するのがおすすめ。解凍すると**steamcmd.exe**が見えるはず。これを実行して、インストールが完了するまで待とう。

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

**Loading Steam API.... OK** のメッセージが表示されたら、インストール完了！これでCounter-Strike: Condition Zeroサーバーのインストール準備が整ったよ。



## インストール

インストールが終わったら、**Steamコマンドライン（steamcmd.exe）**でコマンドを実行できるようになってるはず。まずはログインしよう。ユーザーは**anonymous**でOK。以下のコマンドを実行してね：`login anonymous`

次はインストールだ。`app_update 90`コマンドを使うよ。App IDの**90**は**Counter-Strike: Condition Zero専用サーバー**アプリを指してる。

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

ダウンロードが完了するまで気長に待とう。ゲームサイズが大きいと時間かかることもあるからね。成功すると完了メッセージが表示されるよ。

サーバーを外部から見えるようにしてアクセス可能にするには、使うサーバーポートをファイアウォールで開放／転送しなきゃ。Windowsファイアウォールの設定を開こう。

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

設定で追加ルールを作成する必要がある。受信ルールと送信ルールをそれぞれ開いて、TCP/UDPプロトコルの27015-27020ポートを追加しよう。



## 設定

ここまででCounter-Strike: Condition Zeroサーバーのセットアップは完了。さらに細かい設定をしたいなら、起動ファイルを直接編集しよう。ルートディレクトリに移動して、そこからcfgフォルダを開き、`server.cfg`ファイルを編集すればOK。

```
../steamapps/common/cs-ds/cstrike/cfg/server.cfg
```



## サーバーの起動＆接続

さあ、サーバーを起動しよう。ゲームのメインディレクトリに移動して、以下の起動コマンドを実行してね：

```
hlds.exe -console -game cstrike +maxplayers 8 +map de_dust
```

コマンドプロンプトにログが表示されて、起動成功のサインが見えるはず。初回起動はセットアップの関係で少し時間がかかることもあるから気長に待ってね。もしくは、サーバーリストの下部検索バーで `[your_ip_address]:2456` を入力して直接接続もできるよ。


## まとめ

おめでとう！VPSにCounter-Strike: Condition Zeroサーバーを無事インストール＆設定できたね！もし質問やサポートが必要なら、いつでも毎日対応しているサポートチームに気軽に連絡してね 🙂