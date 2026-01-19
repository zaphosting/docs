---
id: vserver-windows-hytale
title: "VPS: Hytale 専用サーバーセットアップ"
description: "Windows VPSでHytale専用サーバーをセットアップして、快適なゲームプレイ管理を実現する方法 → 今すぐチェック"
sidebar_label: Hytale
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
Windows VPSを持っていて、自分のHytaleゲームサーバーをホストしたい？このガイドでは、Windows環境でHytale専用サーバーをインストールして起動する手順をわかりやすく解説するよ。

<InlineVoucher />

## 準備

Hytaleサーバーを動かすには、いくつかの基本要件を満たす必要があるよ。サーバーはJava 25で動作し、最低でも4GBのRAMが必要。x64とarm64の両方のアーキテクチャに対応してる。実際のリソース使用量はプレイヤー数、視界距離、ワールドのアクティビティによって変わるから、大規模サーバーならもっとリソースが必要になるかも。

続ける前に、WindowsにJava 25がインストールされているか確認しよう。コマンドプロンプトを開いて以下を実行してみてね：

```
java --version
```

もしJavaがまだインストールされていなければ、Windowsサーバー向けのJavaインストール専用ガイドを参考にしてね。Javaの正しいインストールと設定方法を詳しく説明しているよ。



## インストール

まずはHytaleサーバー用の専用フォルダを作ろう。これでサーバーファイルを一箇所にまとめて管理できるよ。例えば：

```
C:\Hytale
```

サーバーには主に2つのコンポーネントが必要：サーバーアプリ本体とゲームアセット。これらはHytaleのコマンドラインダウンローダーを使って入手できるよ。これはサーバー運用やアップデートを簡単にするためのツール。

CLIダウンローダーはHytaleサーバーファイルのダウンロードと更新を効率的に行える仕組み。ダウンローダーのアーカイブをダウンロードしたら、一時フォルダに展開しよう。アーカイブ内にはQUICKSTART.mdファイルがあって、ツールの基本的な使い方が書いてあるよ。

コマンドラインからダウンローダーを起動して、画面の指示に従って最新のサーバーバージョンをダウンロードしよう。完了したら、ダウンロードしたサーバーファイルとアセットのアーカイブをサーバーフォルダにコピー。これでフォルダ内にサーバーのJARファイルとAssets.zipのようなアセットアーカイブが揃うはず。

| **コマンド**                                   | **説明**                       |
| :-------------------------------------------- | :----------------------------- |
| `./hytale-downloader`                         | 最新リリースをダウンロード     |
| `./hytale-downloader -print-version`          | ダウンロードせずゲームバージョン表示 |
| `./hytale-downloader -version`                | hytale-downloaderのバージョン表示 |
| `./hytale-downloader -check-update`           | hytale-downloaderのアップデート確認 |
| `./hytale-downloader -download-path game.zip` | 指定ファイルにダウンロード     |
| `./hytale-downloader -patchline pre-release`  | プレリリースチャンネルからダウンロード |
| `./hytale-downloader -skip-update-check`      | 自動アップデートチェックをスキップ |



## 設定

### サーバー起動

サーバーはJARファイルを起動し、アセットアーカイブのパスを指定してスタートするよ。アセットの場所が違う場合はパスを調整してね。サーバーフォルダでコマンドプロンプトを開いて以下を実行：

```
java -jar HytaleServer.jar --assets C:\Hytale\Assets.zip --bind 0.0.0.0:5520
```

### 認証

初回起動時は、プレイヤーが接続できるようにサーバーの認証が必要。これはサーバーコンソールからデバイスベースのログインプロセスで行うよ。コンソールに表示される指示に従って認証を完了させてね。

```
/auth login device
```

出力例はこんな感じ：

```
> /auth login device
===================================================================
DEVICE AUTHORIZATION
===================================================================
Visit: https://accounts.hytale.com/device
Enter code: ABCD-1234
Or visit: https://accounts.hytale.com/device?user_code=ABCD-1234
===================================================================
Waiting for authorization (expires in 900 seconds)...

[ユーザーがブラウザで認証を完了]

> Authentication successful! Mode: OAUTH_DEVICE
```

認証が完了すれば、サーバーはプレイヤーの接続を受け入れられるよ。



### ファイアウォール設定

デフォルトではサーバーはUDPポート5520で全インターフェースにバインドして待機してる。必要に応じてアドレスやポートは変更可能。サーバーはUDPのQUICプロトコルで通信するから、ファイアウォールで指定ポートのUDPトラフィックを許可してね。IptablesやUFWを使うか、PowerShellで以下のコマンドを実行すると簡単に設定できるよ：

```
New-NetFirewallRule -DisplayName "Hytale Server" -Direction Inbound -Protocol UDP -LocalPort 5520 -Action Allow
```



## パフォーマンスのポイント

視界距離はメモリ消費に大きく影響する重要な要素。視界距離が長いほどRAM使用量が増えるのは、より多くのワールドデータを同時にアクティブにする必要があるから。

多くの環境では、最大視界距離12チャンク（384ブロック）がサーバー性能とゲーム体験のバランスが良いよ。

参考までに、Minecraftサーバーのデフォルト視界距離は10チャンク（160ブロック）。Hytaleの384ブロックはMinecraftの約24チャンクに相当するから、メモリ要件が高いのも納得だね。プレイヤー数やシステムリソースに応じて調整しよう。



## まとめ

おめでとう！これでHytaleサーバーがシステム上で動いてる状態になったよ。ここからは、MODの導入やワールド設定の調整、パフォーマンスチューニングでプレイヤーベースに合わせてカスタマイズしていこう。サーバーが大きくなるにつれてリソース使用状況を定期的にチェックするのがおすすめ。

質問やサポートが必要なら、いつでも気軽にサポートチームに連絡してね。毎日対応してるよ！🙂

<InlineVoucher />