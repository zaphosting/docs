---
id: dedicated-windows-cscz
title: "専用サーバー：Counter-Strike: Condition Zero 専用サーバー Windows セットアップ"
description: "VPSや専用サーバーにCounter-Strike: Condition Zero専用サーバーを簡単＆スピーディにセットアップする方法 → 今すぐチェック"
sidebar_label: "Counter-Strike: Condition Zero"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
VPSや専用サーバーを持っていて、そこにゲームサーバーをインストールしたい？例えばCounter-Strike: Condition Zero専用サーバーとか？それならここがピッタリ！以下で、サーバーにこうしたサービスをステップバイステップでインストールする方法を解説するよ。

<InlineVoucher />

## 準備

Counter-Strike: Condition ZeroサーバーのセットアップにはSteamCMDが必要だよ。SteamCMDは**Steamクライアントのコマンドライン版**。このツールを使うと、人気Steamゲームの専用サーバーアプリをサクッと簡単にダウンロードできるんだ。SteamCMDは公式Valve開発者サイトで手に入るよ：https://developer.valvesoftware.com/wiki/SteamCMD。

続いてダウンロードを行うよ。ダウンロードしたファイルには**steamcmd.zip**が含まれていて、まずはこれを解凍しよう。別フォルダを作ってそこに解凍するのがおすすめ。解凍後に**steamcmd.exe**が見えるはず。これを実行して、インストールが完了するまで待とう。

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

**Loading Steam API.... OK**のメッセージが表示されたら、インストールは無事完了。これでCounter-Strike: Condition Zeroサーバーのインストール準備が整ったよ。



## インストール

インストールが終わったら、**Steamコマンドライン（steamcmd.exe）**でコマンドを実行できるようになっているはず。まずはログインしよう。ログインは**anonymous**ユーザーで行うよ。以下のコマンドを実行してね：`login anonymous`

次はインストールだ。`app_update 90`コマンドを使うよ。App IDの**90**は**Counter-Strike: Condition Zero専用サーバー**アプリを指している。

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

ダウンロードが完了するまで気長に待とう。ゲームサイズが大きいと時間がかかることもあるよ。成功すると完了メッセージが表示されるから安心してね。

サーバーを外部から見えるようにしてアクセス可能にするには、使うサーバーポートをファイアウォールで開放／転送しなきゃいけない。Windowsファイアウォールの設定を開こう。

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

設定で追加ルールを作成する必要があるよ。下記のように受信ルールと送信ルールをクリックして、TCP/UDPプロトコルの27015-27020ポートを追加しよう。



## 設定

ここまででCounter-Strike: Condition Zeroサーバーのセットアップは完了。さらに細かいサーバー設定をしたいなら、起動ファイルを直接編集しよう。ルートディレクトリに移動して、そこからcfgフォルダを開き、`server.cfg`ファイルを編集すればOK。

```
../steamapps/common/cs-ds/cstrike/cfg/server.cfg
```



## サーバーの起動＆接続

さあ、サーバーを起動しよう。メインのゲームディレクトリに移動して、以下の起動コマンドを実行してね：

```
hlds.exe -console -game cstrike +maxplayers 8 +map de_dust
```

コマンドプロンプトにログが表示されて、起動が成功したことがわかるはず。初回起動はセットアップの関係で少し時間がかかることもあるから気長に待ってね。もしくは、サーバーリストの下の検索バーで `[your_ip_address]:2456` を使って直接接続もできるよ。


## まとめ

おめでとう！VPSにCounter-Strike: Condition Zeroサーバーを無事インストール＆設定できたね！もし質問やサポートが必要なら、毎日対応しているサポートチームに気軽に連絡してね！🙂

<InlineVoucher />