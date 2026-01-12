---
id: vserver-linux-hytale
title: "VPS: Hytale 専用サーバーセットアップ"
description: "Linux VPSでHytale専用サーバーをセットアップして、スムーズなゲームプレイ管理を実現する方法 → 今すぐチェック"
sidebar_label: Hytale
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
Linux VPSを持っていて、そこにHytaleをインストールしたい？それならここがピッタリ。この記事では、Linuxサーバーにこのサービスをインストールする手順をステップバイステップで解説するよ。

<InlineVoucher />

## 準備

Hytaleサーバーを動かすには、システムがいくつかの基本要件を満たしている必要があるよ。サーバーはJava 25で動作し、最低でも4GBのRAMが必要。x64とarm64の両方のアーキテクチャに対応してる。実際のリソース使用量はプレイヤー数、視界距離、ワールドのアクティビティによって変わるから、大規模サーバーなら追加リソースが必要になるかも。

続ける前に、Java 25がインストールされているか確認してね。以下のコマンドでチェックできるよ：

```
java --version
```

もしJavaがまだインストールされていなければ、Linuxサーバー向けの専用[Javaインストール](vserver-linux-java)ガイドを参考にしてね。このガイドではJavaの正しいインストールと設定方法を説明してるよ。



## インストール

まずはHytaleサーバー用の専用ディレクトリを作成しよう。これでサーバーファイルを一箇所にまとめて管理できるよ。

```
sudo mkdir -p /opt/hytale
sudo chown -R $(whoami):$(whoami) /opt/hytale
cd /opt/hytale
```

サーバーには主に2つのコンポーネントが必要：サーバーアプリケーション本体とゲームアセット。これらはHytaleのコマンドラインダウンローダーを使って入手できるよ。これはサーバー展開やアップデートを簡単にするためのツールなんだ。

CLIダウンローダーはHytaleサーバーファイルのダウンロードと更新を体系的に行える方法を提供してる。ダウンローダーのアーカイブをダウンロードしたら、一時ディレクトリに展開してね。アーカイブ内にはQUICKSTART.mdファイルがあって、ツールの基本的な使い方が書かれてるよ。

コマンドラインからダウンローダーを実行して、画面の指示に従い最新のサーバーバージョンをダウンロードしよう。完了したら、ダウンロードしたサーバーファイルとアセットのアーカイブをサーバーディレクトリにコピーしてね。この時点でディレクトリにはサーバーのJARファイルとAssets.zipのようなアセットアーカイブが入っているはず。

| **コマンド**                                   | **説明**                       |
| :-------------------------------------------- | :---------------------------- |
| `./hytale-downloader`                         | 最新リリースをダウンロード    |
| `./hytale-downloader -print-version`          | ダウンロードせずゲームバージョンを表示 |
| `./hytale-downloader -version`                | hytale-downloaderのバージョン表示 |
| `./hytale-downloader -check-update`           | hytale-downloaderのアップデート確認 |
| `./hytale-downloader -download-path game.zip` | 指定ファイルにダウンロード    |
| `./hytale-downloader -patchline pre-release`  | プレリリースチャネルからダウンロード |
| `./hytale-downloader -skip-update-check`      | 自動アップデートチェックをスキップ |



## 設定

### サーバーの起動

サーバーはJARファイルを起動し、アセットアーカイブのパスを指定してスタートするよ。アセットが別の場所にある場合はパスを調整してね。

```
java -jar HytaleServer.jar --assets /opt/hytale/Assets.zip --bind 0.0.0.0:5520
```

### 認証

初回起動時は、プレイヤーが接続できるようにサーバーの認証が必要だよ。これはサーバーコンソールからデバイスベースのログインプロセスで行うんだ。コンソールに表示される指示に従って認証を完了させてね。

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

[User completes authorization in browser]

> Authentication successful! Mode: OAUTH_DEVICE
```

認証が完了すれば、サーバーはプレイヤーの接続を受け入れられるようになるよ。



### ファイアウォール設定

デフォルトでは、サーバーはUDPポート5520で全インターフェースにバインドして待機しているよ。必要に応じてアドレスやポートは変更可能。サーバーはUDPのQUICプロトコルで通信するから、ファイアウォールで指定ポートのUDPトラフィックを許可しておこう。iptablesやUFWを使って設定できるよ。

```
sudo iptables -A INPUT -p udp --dport 5520 -j ACCEPT
sudo ufw allow 5520/udp
```



## パフォーマンスのポイント

視界距離はメモリ消費に大きく影響する重要な要素だよ。値が大きいほどRAM使用量が増えるのは、より多くのワールドデータを同時にアクティブにする必要があるから。

多くの環境では、最大視界距離12チャンク（384ブロック）がサーバーパフォーマンスとゲーム体験のバランスが良いとされているよ。

参考までに、Minecraftサーバーのデフォルト視界距離は10チャンク（160ブロック）。Hytaleの384ブロックは約24チャンクに相当していて、これがメモリ要件が高い理由の一つ。プレイヤー数や利用可能なシステムリソースに応じて調整しよう。



## まとめ

おめでとう！これであなたのシステム上に機能するHytaleサーバーが立ち上がったよ。ここからは、MODの導入やワールド設定の調整、パフォーマンスチューニングをしてプレイヤーベースに合わせてカスタマイズしていこう。サーバーが成長するにつれて安定稼働のためにリソース使用状況の定期的な監視もおすすめ。

質問やサポートが必要なら、いつでも気軽にサポートチームに連絡してね。毎日対応してるから安心して！🙂

<InlineVoucher />