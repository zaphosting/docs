---
id: dedicated-windows-ark
title: "専用サーバー: ARK Survival Evolved 専用サーバー Windows セットアップ"
description: "Windows VPSでARK: Survival Evolved専用サーバーを簡単にセットアップする方法をチェック → 今すぐ詳しく見る"
sidebar_label: ARK Survival Evolved 専用サーバーセットアップ
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Windows VPSを持っていて、そこにゲームサーバーをインストールしたい？例えばARK: Survival Evolvedの専用サーバーとか？それならここがピッタリ！以下では、サーバーにこういったサービスをステップバイステップでインストールする方法を解説するよ。RDPでVPSに接続してARK: Survival Evolved専用サーバーをセットアップしよう。もしRDPでの接続方法がわからなければ、[初回アクセス（RDP）](vserver-windows-userdp.md)ガイドをチェックしてみてね。

<YouTube videoId="YOz_SqsUkg4" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/BF23kJKNsFQyeyX/preview" title="Windows VPSでのARK: Survival Evolved専用サーバーセットアップ" description="実際に動いているところを見ると理解しやすい？そんなあなたに！動画でわかりやすく解説。急いでる時も、じっくり見たい時も、どっちもOK！"/>

<InlineVoucher />

## 準備

ARKサーバーのセットアップにはSteamCMDが必要だよ。SteamCMDは**Steamクライアントのコマンドライン版**。このツールを使えば、人気Steamゲームの専用サーバーアプリをサクッとダウンロードできる。SteamCMDは公式Valve開発者サイトで入手可能：https://developer.valvesoftware.com/wiki/SteamCMD。

ダウンロード後は**steamcmd.zip**ファイルが手に入るので、まずはこれを解凍しよう。別フォルダを作ってそこに解凍するのがおすすめ。解凍後に**steamcmd.exe**が見えるはず。これを実行して、インストールが完了するまで待とう。

![](https://screensaver01.zap-hosting.com/index.php/s/QnqpbKQiEAFLL2T/preview)

「**Loading Steam API.... OK**」のメッセージが出たら、インストール完了！これでARKサーバーのインストール準備が整ったよ。



## インストール

インストールが終わったら、**Steamコマンドライン（steamcmd.exe）**でコマンドを実行できるようになる。まずはログインしよう。ユーザーは**anonymous**でOK。以下のコマンドを実行してね：`login anonymous`

次にインストールを開始。コマンドは`app_update 376030`。App ID **376030**は**ARK: Survival Evolved 専用サーバー**のアプリケーションを指してるよ。

![](https://screensaver01.zap-hosting.com/index.php/s/RJzpFL4ZPSsAZZd/preview)



:::info
インストールが完了するまで絶対に中断しないでね。少し時間かかるけど、じっくり待つ価値あり！ :)
:::



インストールしたディレクトリに移動して、以下のサブディレクトリを開こう：**../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Binaries/Win64**。

ここでサーバーソフトを起動するためのスタートアップファイルを作成するよ。ファイル名は`start-ark.bat`で作成してね。

:::info
ファイル拡張子が正しく表示されるように「ファイル拡張子を表示」オプションを有効にしておいてね。
:::

ファイルを開いて、以下の内容をコピペして保存しよう：

```
start ShooterGameServer.exe TheIsland?listen?SessionName=<server_name>?ServerPassword=<join_password>?ServerAdminPassword=<admin_password>?Port=<port>?QueryPort=<query_port>?MaxPlayers=<max_players>
exit
```



サーバーを外部から見えるようにしてアクセス可能にするには、使うサーバーポートをファイアウォールで開放/転送しなきゃ。Windowsファイアウォールの設定を開こう。

![](https://screensaver01.zap-hosting.com/index.php/s/p7iyYxZwfeGaZaW/preview)


設定で追加ルールを作成する必要があるよ。以下のプロトコルとポートを、受信・送信ルールに追加してね：

- TCP 受信・送信: 27020
- UDP 受信・送信: 27015
- UDP 受信・送信: 7777-7778



## 設定

基本セットアップはこれで完了。さらに細かい設定は**DefaultGameUserSettings.ini**や**Gameusersettings.ini**の設定ファイルでできるよ。ここでサーバー名やパスワード、管理者パスワードなど色々変更可能。ファイルは以下のディレクトリにある：

```
../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Config/
../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Saved/Config/WindowsServer/
```



## プレイ

セットアップが終わったら、先ほど作った**start-ark.bat**を実行してサーバーを起動しよう。サーバーのコンソールが開いて起動プロセスが始まるはず。問題なければ、起動後にサーバーリストに表示されるよ。

![](https://screensaver01.zap-hosting.com/index.php/s/cENfRQGxK4NjM3Y/preview)

<InlineVoucher />