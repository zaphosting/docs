---
id: vserver-windows-satisfactory
title: "VPS: Satisfactory 専用サーバー Windows セットアップ"
description: "VPSや専用サーバーにSatisfactory専用サーバーを簡単＆スピーディにセットアップする方法 → 今すぐチェック！"
sidebar_label: Satisfactory
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
VPSや専用サーバーを持っていて、そこにゲームサーバーをインストールしたい？例えばSatisfactory専用サーバーとか？それならここがピッタリ！以下で、サーバーにこういったサービスをインストールする方法をステップごとに解説していくよ。

<YouTube videoId="rqtQJa_awGw" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/oHiNw9tMBtgL6nq/preview" title="Windows VPSでのSatisfactory専用サーバーセットアップ" description="実際に動いているところを見ると理解しやすい？そんなあなたに！動画でわかりやすく解説。急いでる時も、じっくり見たい時もOK！"/>
<InlineVoucher />

## 準備

SatisfactoryサーバーのセットアップにはSteamCMDが必要だよ。SteamCMDは**Steamクライアントのコマンドライン版**。このツールを使えば、人気Steamゲームの専用サーバーアプリを簡単にダウンロードできる。SteamCMDは公式Valve開発者サイトで入手可能：https://developer.valvesoftware.com/wiki/SteamCMD。

ダウンロード後は、**steamcmd.zip**ファイルが手に入るから、まずはこれを解凍しよう。専用のフォルダを作ってそこに解凍するのがおすすめ。解凍後に**steamcmd.exe**が見えるはず。これを実行して、インストールが完了するまで待とう。

![](https://screensaver01.zap-hosting.com/index.php/s/NkbSey5q2rWRjtF/preview)

「**Loading Steam API.... OK**」のメッセージが表示されたら、インストールは成功。これでSatisfactoryサーバーのインストールに進めるよ。



## インストール

インストールが終わったら、**Steamコマンドライン（steamcmd.exe）**でコマンドを実行できるはず。まずはログインしよう。ユーザーは**anonymous**でOK。以下のコマンドを実行してね：`login anonymous`

次にインストールだ。コマンドは `app_update 1690800` 。App ID **1690800** は**Satisfactory専用サーバー**のアプリケーションIDだよ。

![](https://screensaver01.zap-hosting.com/index.php/s/b8ePqS9FdP2rTzP/preview)



:::info
インストールが完了するまで絶対に中断しないでね。少し時間がかかるけど、焦らず待つのが成功のコツ！ :)
:::



インストールが終わったら、そのディレクトリに移動して、以下のサブディレクトリへ：**../steamapps/common/SatisfactoryDedicatedServer**

ここでサーバーソフトを起動するためのスタートアップファイルを作成しよう。ファイル名は：server-start.bat

:::info
ファイル拡張子が正しく表示されるように「ファイル名拡張子を表示」オプションを有効にしておいてね。
:::

ファイルを開いて、以下の内容を追加し、保存しよう：

```
Factoryserver.exe -log -unattended
```



ファイルを実行すると、初回起動時に必要なコンポーネントのインストールを促すポップアップが出るはず。ゲームはVisual C++ランタイムを必要とするから、「はい」をクリックしてインストールを完了させてね。

サーバーを外部から見えるようにしアクセス可能にするには、使うサーバーポートをファイアウォールで開放（転送）する必要がある。Windowsファイアウォールの設定を開こう。

![](https://screensaver01.zap-hosting.com/index.php/s/x29gQWEreNt3y2W/preview)


設定で追加ルールを作成しよう。受信ルールと送信ルールをそれぞれ開いて、UDPプロトコルのポート15000を追加してね。



## 設定

基本セットアップはこれで完了。さらに細かい設定は**ServerSettings.ini**ファイルで変更できるよ。サーバー名やパスワードなどもここで設定可能。場所は以下のディレクトリ：

```
../steamapps/common/SatisfactoryDedicatedServer/FactoryGame/Saved/Config/WindowsServer/
```



## プレイ

セットアップが終わったら、先ほど作成した**server-start.bat**を実行してサーバーを起動しよう。サーバーのコンソールが開いて起動処理が始まるはず。問題なければ、起動後にサーバーリストに表示されるよ。



## まとめ

おめでとう！これでVPSにSatisfactoryサーバーを無事インストール＆設定できたね！もし何か質問やトラブルがあったら、いつでもサポートチームに連絡してね。毎日みんなのサポートを待ってるよ！

<InlineVoucher />