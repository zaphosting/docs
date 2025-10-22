---
id: dedicated-windows-satisfactory
title: "専用サーバー：Satisfactory 専用サーバー Windows セットアップ"
description: "シームレスなプレイと管理のために、サーバーにSatisfactory専用サーバーをセットアップする方法を学ぼう → 今すぐチェック"
sidebar_label: Satisfactory
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
専用サーバーを持っていて、その上にゲームサーバーをインストールしたい？例えばSatisfactory専用サーバーとか？それならここがピッタリ！以下で、サーバーにこうしたサービスをインストールする方法をステップごとに解説するよ。

<YouTube videoId="rqtQJa_awGw" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/gp82J4xr9T5Y969/preview" title="Windows VPSでのSatisfactory専用サーバーセットアップ" description="実際に動いているところを見ると理解が深まる？そんなあなたに！この動画でわかりやすく解説。急いでる時も、じっくり情報を吸収したい時も、どっちもOK！"/>

<InlineVoucher />

## 準備

SatisfactoryサーバーのセットアップにはSteamCMDが必要だよ。SteamCMDは**Steamクライアントのコマンドライン版**。このツールを使えば、人気のSteamゲームの専用サーバーアプリをサクッと簡単にダウンロードできる。SteamCMDは公式Valve開発者サイトで入手可能：https://developer.valvesoftware.com/wiki/SteamCMD。

ダウンロードが終わったら、**steamcmd.zip**ファイルが手に入るから、まずはこれを解凍しよう。別フォルダを作ってそこに解凍するのがおすすめ。解凍後に**steamcmd.exe**が見えるはず。これを実行して、インストールが完了するまで待とう。

![](https://screensaver01.zap-hosting.com/index.php/s/9EaPpm3NWadXTx5/preview)

**Loading Steam API.... OK** のメッセージが出たら、無事に完了。これでSatisfactoryサーバーのインストール準備が整ったよ。



## インストール

インストール後は、**Steamコマンドライン（steamcmd.exe）**でコマンドを実行できるようになっているはず。まずはログインしよう。ユーザーは**anonymous**でOK。以下のコマンドを実行してね：`login anonymous`

次はインストールだ。`app_update 1690800`コマンドを使うよ。App ID **1690800** は **Satisfactory専用サーバー**アプリケーションを指している。

![](https://screensaver01.zap-hosting.com/index.php/s/KtzJ3AaYJk7BJEt/preview)



:::info
完了する前に処理を中断しないでね。ミスの原因になるから。少し時間がかかるけど、じっくり待つ価値あり！ :)
:::



インストールしたディレクトリに移動して、以下のサブディレクトリに進もう：**../steamapps/common/SatisfactoryDedicatedServer**

ここで、サーバーソフトを起動するためのスタートアップファイルを作成する必要があるよ。ファイル名は：server-start.bat

:::info
ファイル拡張子を表示する設定がオンになっていることを確認して、正しい拡張子が使われているかチェックしてね。
:::

ファイルを開いて、以下の内容を追加し、保存しよう：

```
Factoryserver.exe -log -unattended
```



このファイルを実行すると、初回起動時にプログラム実行に必要なコンポーネントのポップアップが出るはず。ゲームはVisual C++ランタイムを必要とするから、[はい]をクリックしてインストールを完了させてね。

サーバーを外部から見えるようにしアクセス可能にするには、使うサーバーポートをファイアウォールで許可/転送する必要がある。Windowsファイアウォールの設定を開こう。

![](https://screensaver01.zap-hosting.com/index.php/s/dy6AwJsT8XBpdXr/preview)


設定で追加ルールを作成しよう。下記のように受信ルールと送信ルールをクリックして、UDPプロトコルのポート15000を追加してね。



## 設定

基本セットアップはこれで完了。さらに設定を変えたい場合は、**ServerSettings.ini**設定ファイルを編集しよう。ここでサーバー名やパスワードなどを変更できるよ。以下のディレクトリに移動してね：

```
../steamapps/common/SatisfactoryDedicatedServer/FactoryGame/Saved/Config/WindowsServer/
```



## プレイ

セットアップが終わったら、先ほど作成した**server-start.bat**ファイルを実行してサーバーを起動しよう。サーバーのコンソールが開いて起動プロセスが始まるはず。問題なく起動すれば、サーバーリストに表示されるよ。


<InlineVoucher />