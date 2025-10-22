---
id: dedicated-windows-valheim
title: "専用サーバー：Valheim 専用サーバー Windows セットアップ"
description: "自分のサーバーにValheim専用サーバーをセットアップして、スムーズなマルチプレイヤーゲームを楽しもう → 今すぐチェック"
sidebar_label: Valheim
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
専用サーバーを持っていて、その上にゲームサーバーをインストールしたい？例えばValheim専用サーバーとか？それならここがピッタリ！以下で、サーバーにこういったサービスをインストールする方法をステップバイステップで解説するよ。

<YouTube videoId="Trs9Ysxa1gc" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/D2doaAqjzdMSo9r/preview" title="Windows VPSでのValheim専用サーバーセットアップ" description="実際に動いているところを見ると理解しやすい？そんなあなたに！この動画でわかりやすく解説。急いでる時も、じっくり学びたい時も、どっちもOK！"/>

<InlineVoucher />

## 準備
ValheimサーバーのセットアップにはSteamCMDが必要だよ。SteamCMDはSteamクライアントの**コマンドライン版**。このツールを使うと、人気Steamゲームの専用サーバーアプリをサクッと簡単にダウンロードできるんだ。SteamCMDは公式Valve開発者サイトで手に入るよ：https://developer.valvesoftware.com/wiki/SteamCMD。

ダウンロードが終わったら、**steamcmd.zip**ファイルが入っているから、まずはこれを解凍しよう。別フォルダを作ってそこに解凍するのがおすすめ。解凍後に**steamcmd.exe**が見えるはず。これを実行して、インストールが完了するまで待とう。
![](https://screensaver01.zap-hosting.com/index.php/s/Y5zygHw2DFJa4dZ/preview)

「**Loading Steam API.... OK**」のメッセージが出たら、インストール完了！これでValheimサーバーのインストールに進めるよ。



## インストール

インストールが終わったら、**Steamコマンドライン（steamcmd.exe）**でコマンドを実行できるようになる。まずはログインしよう。ユーザーは**anonymous**でOK。以下のコマンドを実行してね：`login anonymous`

次はインストールだ。`app_update 896660`コマンドを使うよ。App ID **896660**は**Valheim専用サーバー**アプリケーションのIDだ。

![](https://screensaver01.zap-hosting.com/index.php/s/PxZFZat7cP2C26k/preview)

:::info
インストールが完了するまで絶対に中断しないでね。少し時間がかかるけど、焦らず待つのが吉！ :)
:::


インストールしたディレクトリに移動して、次のサブディレクトリに入ろう：  **../steamapps/common/Valheim dedicated Server/**

ここでサーバーソフトを起動するためのスタートアップファイルを作成するよ。ファイル名は：start_headless.bat

:::info
ファイル拡張子が正しく表示されるように、「ファイル拡張子を表示」オプションを有効にしておいてね。
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

サーバーを外部から見えるようにしてアクセス可能にするには、使うサーバーポートをファイアウォールで開放／転送しなきゃ。Windowsファイアウォールの設定を開こう。

![](https://screensaver01.zap-hosting.com/index.php/s/MTHjL85zKsLtN9g/preview)

設定で追加ルールを作成する必要があるよ。受信ルールと送信ルールをそれぞれ開いて、TCP/UDPの2456-2458ポートを追加しよう。




## 設定

基本セットアップはこれで完了。さらに設定を変えたい場合は、**start_headless_server.bat**ファイルを編集してね。ここでサーバー名、パスワード、管理者パスワードなど色々変更できるよ。ファイルは以下のディレクトリにある：

```
../steamapps/common/Valheim dedicated Server/
```



## プレイ

セットアップが終わったら、先ほど作った**start_headless_server.bat**ファイルを実行してサーバーを起動しよう。サーバーのコンソールが開いて起動プロセスが始まるはず。問題なく起動すれば、サーバーリストに表示されるよ。

<InlineVoucher />