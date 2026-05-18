---
id: dedicated-windows-satisfactory
title: "専用サーバー: Satisfactory 専用サーバー Windows セットアップ"
description: "シームレスなプレイと管理のために、サーバーに Satisfactory 専用サーバーをセットアップする方法を学ぼう → 今すぐチェック"
sidebar_label: Satisfactory
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
専用サーバーを持っていて、その上にゲームサーバーをインストールしたい？例えば Satisfactory 専用サーバーとか？それならここがピッタリ！以下で、サーバーにこうしたサービスをインストールする方法をステップバイステップで解説するよ。

<YouTube videoId="rqtQJa_awGw" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/gp82J4xr9T5Y969/preview" title="Windows VPSでのSatisfactory専用サーバーセットアップ" description="実際の動きを見たほうが理解しやすい？任せて！この動画でわかりやすく解説。急いでる時も、じっくり学びたい時も、最高の情報収集方法だよ！"/>



## 準備

Satisfactoryサーバーのセットアップには SteamCMD が必要だよ。SteamCMD は **Steamクライアントのコマンドライン版**。このツールを使えば、人気のSteamゲームの専用サーバーアプリを素早く簡単にダウンロードできる。SteamCMDは公式Valve開発者サイトで入手可能：`https://developer.valvesoftware.com/wiki/SteamCMD`。

ダウンロード後は、**steamcmd.zip** ファイルが手に入るから、まずはこれを解凍しよう。別フォルダを作ってそこに解凍するのがおすすめ。解凍後に **steamcmd.exe** が見えるはず。これを実行して、インストールが完了するまで待とう。

![](https://screensaver01.zap-hosting.com/index.php/s/9EaPpm3NWadXTx5/preview)

**Loading Steam API.... OK** のメッセージが表示されたら、インストールは成功。さあ、Satisfactoryサーバーのインストールを始めよう。



## インストール

インストールが終わったら、**Steamコマンドライン（steamcmd.exe）** でコマンドが実行できるはず。まずはログインが必要。ユーザーは **anonymous** でログインしよう。以下のコマンドを実行：

```
login anonymous
```

次にインストールを実行。コマンドは `app_update 1690800`。App ID **1690800** は **Satisfactory 専用サーバー** アプリケーションを指してるよ。

![](https://screensaver01.zap-hosting.com/index.php/s/KtzJ3AaYJk7BJEt/preview)



:::info
完了するまで処理を中断しないでね。少し時間がかかるけど、我慢する価値あり！ :)
:::



インストールしたディレクトリに移動して、以下のサブディレクトリへ：

```
../steamapps/common/SatisfactoryDedicatedServer
```

ここでサーバーソフトを起動するためのスタートアップファイルを作成しよう。ファイル名は：

```
server-start.bat
```

:::info
ファイル拡張子を正しく表示するために「ファイル名拡張子を表示」オプションを有効にしておいてね。
:::

ファイルを開いて、以下の内容を追加し、保存しよう：

```
Factoryserver.exe -log -unattended
```



ファイルを実行すると、初回起動時に必要なコンポーネントのインストールを促すポップアップが出るはず。ゲームは Visual C++ ランタイムを必要とするから、「はい」をクリックしてインストールを完了させてね。

サーバーを外部から見えるようにしアクセス可能にするには、使用するサーバーポートをファイアウォールで有効化／転送する必要がある。Windowsファイアウォールの設定を開こう。

![](https://screensaver01.zap-hosting.com/index.php/s/dy6AwJsT8XBpdXr/preview)


設定で追加ルールを作成しよう。以下のように受信ルールと送信ルールをクリックして、UDPプロトコルのポート15000を追加してね。



## 設定

基本セットアップはこれで完了。さらに設定を変えたい場合は、**ServerSettings.ini** 設定ファイルを編集しよう。ここでサーバー名やパスワードなどを変更できるよ。ファイルは以下のディレクトリにある：

```
../steamapps/common/SatisfactoryDedicatedServer/FactoryGame/Saved/Config/WindowsServer/
```



## プレイ

セットアップが終わったら、先ほど作成した **server-start.bat** ファイルを実行してサーバーを起動しよう。サーバーのコンソールが開いて起動プロセスが始まるはず。問題なければ、起動後にサーバーリストに表示されるよ。



