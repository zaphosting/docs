---
id: vserver-windows-valheim
title: "VPS: Valheim 専用サーバー Windows セットアップ"
description: "VPSや専用サーバーにValheim専用サーバーを素早く効率的にセットアップする方法をチェック → 今すぐ詳しく見る"
sidebar_label: Valheim
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
VPSや専用サーバーを持っていて、そこにゲームサーバーをインストールしたい？例えばValheim専用サーバーとか？それならここがピッタリ！以下で、サーバーにこうしたサービスをインストールする方法をステップバイステップで解説するよ。

<YouTube videoId="Trs9Ysxa1gc" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/8yWGtXMPFr8Jyza/preview" title="Windows VPSでのValheim専用サーバーセットアップ" description="実際に動いているのを見ると理解しやすい？そんなあなたに！動画でわかりやすく解説。急いでる時も、じっくり学びたい時も、どっちもOK！"/>
<InlineVoucher />

## 準備
ValheimサーバーのセットアップにはSteamCMDが必要だよ。SteamCMDは**Steamクライアントのコマンドライン版**。このツールを使うと、人気Steamゲームの専用サーバーアプリを簡単にダウンロードできるんだ。SteamCMDは公式Valve開発者サイトで入手可能：`https://developer.valvesoftware.com/wiki/SteamCMD`。

ダウンロード後は、**steamcmd.zip**ファイルが手に入るから、まずはこれを解凍しよう。別フォルダを作ってそこに解凍するのがおすすめ。解凍後に**steamcmd.exe**が見えるはず。これを実行して、インストールが完了するまで待とう。
![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

**Loading Steam API.... OK** のメッセージが出たら、インストール完了！これでValheimサーバーのインストールに進めるよ。



## インストール

インストールが終わったら、**Steamコマンドライン（steamcmd.exe）**でコマンドを実行できるはず。まずはログインしよう。ユーザーは**anonymous**でログインするよ。以下のコマンドを実行してね：`login anonymous`

次にインストールだ。コマンドは `app_update 896660` 。App ID **896660** は**Valheim専用サーバー**アプリケーションを指してるよ。

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

:::info
完了するまで処理を中断しないでね。少し時間がかかるけど、焦らず待つのが吉！ :)
:::


インストールしたディレクトリに移動して、以下のサブディレクトリへ：  **../steamapps/common/Valheim dedicated Server/**

ここでサーバーソフトを起動するためのスタートアップファイルを作成しよう。ファイル名は `start_headless.bat` にしてね。

:::info
ファイル拡張子を表示する設定がオンになっているか確認して、正しい拡張子が付くようにしよう。
:::

ファイルを開いて、以下の内容を追加し、保存しよう：

```
@echo off
set SteamAppId-892970

echo "Starting server PRESS CIRL-C to exit"

REM Tip: Make a local copy of this script to avoid it being overwritten by steam.
REM NOTE: Minimum password length is 5 characters & Password cant be in the server name.
REM NOTE: You need to make sure che ports 2456-2458 is being forwarded to your server through your local router & firewall.

valheim server -nographics -batchmode -name "My Server" -port 2456 -world "Dedicated" -password "secret" -crossplay
```

サーバーを外部から見えるようにしアクセス可能にするには、使うサーバーポートをファイアウォールで有効化／転送しなきゃ。Windowsファイアウォールの設定を開こう。

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

設定で追加ルールを作成する必要があるよ。受信ルールと送信ルールをそれぞれ開いて、TCP/UDPプロトコルのポート2456-2458を追加しよう。




## 設定

実際のセットアップはこれで完了。さらに設定を変えたい場合は、**start_headless_server.bat** ファイルを編集しよう。サーバー名、パスワード、管理者パスワードなど色々変更できるよ。ファイルは以下のディレクトリにある：

```
../steamapps/common/Valheim dedicated Server/
```



## プレイ

セットアップが終わったら、先ほど作成した **start_headless_server.bat** ファイルを実行してサーバーを起動しよう。サーバーのコンソールが開いて起動プロセスが始まるはず。問題なければ、起動後にサーバーリストに表示されるよ。


## まとめ

おめでとう！VPSにValheim専用サーバーを無事インストール＆設定できたね！もし質問やトラブルがあれば、いつでもサポートチームに連絡してね。毎日みんなの助けになるよ！

<InlineVoucher />