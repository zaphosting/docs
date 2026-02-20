---
id: vserver-windows-ark
title: "VPS: ARK Survival Evolved 専用サーバー Windows セットアップ"
description: "Windows VPSでARK: Survival Evolved 専用サーバーを簡単＆スピーディにセットアップする方法 → 今すぐチェック！"
sidebar_label: ARK Survival Evolved 専用サーバーセットアップ
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';


## はじめに
Windows VPSを持っていて、そこにゲームサーバーをインストールしたい？例えばARK: Survival Evolved 専用サーバーとか？それならここがピッタリ！以下で、サーバーにこういったサービスをインストールする方法をステップバイステップで解説するよ。

<YouTube videoId="YOz_SqsUkg4" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/Tde2kaHrjgtMd3H/preview" title="ARK: Survival Evolved 専用サーバー Windows VPS セットアップ" description="実際に動いてるところを見ると理解しやすい？そんなあなたに！動画でわかりやすく解説。急いでる時も、じっくり見たい時もOK！"/>

RDPでVPSに接続してARK: Survival Evolved 専用サーバーをセットアップしよう。RDPでの接続方法がわからない場合は、[初回アクセス（RDP）](vserver-windows-userdp.md) ガイドをチェックしてみてね。

<InlineVoucher />

## 準備

ARKサーバーのセットアップにはSteamCMDが必要だよ。SteamCMDはSteamクライアントの**コマンドライン版**。このツールを使えば、人気Steamゲームの専用サーバーアプリをサクッとダウンロードできる。SteamCMDは公式Valve開発者サイトで入手可能：`https://developer.valvesoftware.com/wiki/SteamCMD`。

ダウンロード後は、**steamcmd.zip**ファイルが手に入るから、まずはこれを解凍しよう。専用のフォルダを作ってそこに解凍するのがおすすめ。解凍後に**steamcmd.exe**が見えるはず。これを実行して、インストールが完了するまで待とう。

![](https://screensaver01.zap-hosting.com/index.php/s/67Prbs9CKEo4tfG/preview)

**Loading Steam API.... OK** のメッセージが出たらインストール完了！これでARKサーバーのインストールに進めるよ。



## インストール

インストールが終わったら、**Steamコマンドライン（steamcmd.exe）**でコマンドを実行できるはず。まずはログインしよう。ユーザーは**anonymous**でOK。以下のコマンドを実行してね：`login anonymous`

次にインストールだ。コマンドは `app_update 376030` 。App ID **376030** は **ARK: Survival Evolved 専用サーバー**のアプリケーションを指してるよ。

![](https://screensaver01.zap-hosting.com/index.php/s/37YL4YgiL4EogS6/preview)



:::info
インストールが完了するまで絶対に中断しないでね。少し時間かかるけど、我慢する価値あり！ :)
:::



インストールしたディレクトリに移動して、以下のサブディレクトリへ：**../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Binaries/Win64**。

ここでサーバーソフトを起動するためのスタートアップファイルを作成しよう。ファイル名は `start-ark.bat` にしてね。

:::info
ファイル拡張子を正しく表示するために「ファイル拡張子を表示」オプションを有効にしておくのを忘れずに！
:::

ファイルを開いて、以下の内容を追加し、保存しよう：

```
start ShooterGameServer.exe TheIsland?listen?SessionName=<server_name>?ServerPassword=<join_password>?ServerAdminPassword=<admin_password>?Port=<port>?QueryPort=<query_port>?MaxPlayers=<max_players>
exit
```



サーバーを外部から見えるようにしてアクセス可能にするには、使うサーバーポートをファイアウォールで開放／転送しなきゃ。Windowsファイアウォールの設定を開こう。

![](https://screensaver01.zap-hosting.com/index.php/s/WxKJRKAPf9dXwFF/preview)


設定で追加ルールを作成する必要があるよ。以下のプロトコルとポートを、受信・送信ルール両方に追加してね：

- TCP 受信・送信：27020
- UDP 受信・送信：27015
- UDP 受信・送信：7777-7778



## 設定

実際のセットアップはこれで完了。さらに細かい設定は、**DefaultGameUserSettings.ini** と **Gameusersettings.ini** の設定ファイルでできるよ。ここでサーバー名、サーバーパスワード、管理者パスワードなど色々変更可能。以下のディレクトリにあるからアクセスしてみて：

```
../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Config/
../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Saved/Config/WindowsServer/
```



## プレイ

セットアップの最後に、先ほど作成した **start-ark.bat** ファイルを実行してサーバーを起動しよう。サーバーのコンソールが開いて起動プロセスが始まるはず。うまくいけば、起動後にサーバーリストに表示されるよ。

![](https://screensaver01.zap-hosting.com/index.php/s/SkjP94KCa9YnJXn/preview)


## まとめ

おめでとう！VPSにARK Survivalサーバーを無事インストール＆設定できたね！もし質問やトラブルがあったら、毎日対応してるサポートチームに気軽に連絡してね！

<InlineVoucher />