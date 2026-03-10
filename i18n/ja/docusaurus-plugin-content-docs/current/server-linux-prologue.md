---
id: server-linux-prologue
title: "LinuxサーバーでPrologueをセットアップ - 自分だけのオーディオブック視聴プラットフォームをホストしよう"
description: "Dockerまたは手動セットアップでLinux VPSにPrologue対応のオーディオブックサーバーをインストールして稼働させる方法を学ぼう → 今すぐ詳しく見る"
sidebar_label: Prologueのインストール
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## はじめに

[Prologue](https://prologue.audio/)は、自分でホストするオーディオブックサーバー向けに設計された最新のオーディオブック視聴プラットフォームです。iPhone、iPad、Apple Watch、CarPlayなど複数のデバイスでオーディオブックライブラリをストリーミング、整理、視聴できます。

クラウドベースのオーディオブックプラットフォームに頼る代わりに、自分でホストすることでオーディオブックのコレクションやストリーミング環境を完全にコントロール可能。サーバーを設定すれば、Prologueのモバイルアプリが接続して再生進捗、ブックマーク、視聴履歴を同期します。

このガイドでは、Linux VPS上にPrologue対応のオーディオブックサーバーを2つの方法で展開する方法を紹介します：

- Webサーバーへの手動インストール
- Dockerを使ったコンテナ管理が簡単なデプロイ

![img](https://screensaver01.zap-hosting.com/index.php/s/ocybWYJaSRrwksD/preview)

<InlineVoucher />



## Prologueの活用シーン

Prologueは、オーディオブックライブラリを完全に所有し柔軟に管理したいユーザーに最適です。

よくある使い方は：

- プライベートなオーディオブックストリーミングプラットフォームのホスティング
- 大量のオーディオブックを一元管理
- 複数デバイス間での再生同期
- どこからでもオーディオブックにリモートアクセス
- 商用オーディオブックプラットフォームの自分版代替を作成

自分でホストすることでメディアファイルを完全に管理しつつ、スケーラブルなオーディオブックサーバーを構築できます。



## 必要条件

サーバーをインストールする前に、システムが以下の要件を満たしていることを確認してください。

| ハードウェア | 最低限 | 推奨 |
|----------|---------|-------------|
| CPU | 1 vCPU | 2 vCPU |
| RAM | 2 GB | 4 GB |
| ディスク容量 | 20 GB | 50 GB |

<InlineServiceLink />

必要なソフトウェアはインストール方法によって異なります：

手動セットアップ：

- Linuxサーバー
- Webサーバー（ApacheまたはNginx）
- PHP
- データベースサーバー

Dockerセットアップ：

- Docker
- Docker Compose





## 準備

インストールを始める前に、システムパッケージをアップデートしましょう。

```
sudo apt update
sudo apt upgrade
```


選んだセットアップ方法に応じて必要なランタイム環境がインストールされているか確認します。Dockerの場合：

```
docker --version
docker compose version
```

もしDockerがまだなら、先にインストールしてください。



## 手動セットアップ

手動セットアップはコンテナを使わずに直接サーバーにアプリをインストールします。従来のホスティング環境での展開に便利です。



### アプリケーションのダウンロード

まずプロジェクト用ディレクトリを作成し、アプリファイルをダウンロードします。

```
mkdir prologue-server
cd prologue-server
```


次にプロジェクトリポジトリをクローンします：

```
git clone https://github.com/michaelstaake/Prologue.git
```



### Webサーバーの設定

アプリファイルをWebサーバーのディレクトリに移動します。Apacheの場合の例：

```
sudo mv prologue-server /var/www/prologue
```


アプリディレクトリを指すバーチャルホスト設定を作成します。Apacheの例：

```<VirtualHost *:80>
ServerName yourdomain.com
DocumentRoot /var/www/prologue
</VirtualHost>
```


設定後、Webサーバーを再起動します。

```
sudo systemctl restart apache2
```



### 環境設定の編集

設定ファイルを編集し、データベース接続やサーバーURLなど必要な設定を更新します。

```
nano config.php
```


設定が完了すると、設定したドメインやサーバーのIPアドレスからWebインターフェースにアクセス可能になります。



## Dockerセットアップ

Dockerはアプリをコンテナ内で動かすことで、より簡単にデプロイできます。



### プロジェクトディレクトリの作成

Docker用のディレクトリを作成します。

```
mkdir prologue-docker
cd prologue-docker
```



### Docker Compose設定の作成

`nano compose.yaml`でDocker Composeファイルを作成し、以下の設定を貼り付けます：

```
services:
  prologue:
    image: ghcr.io/michaelstaake/prologue:latest
    container_name: prologue
    ports:
      - "13378:80"
    volumes:
      - ./data:/data
    restart: unless-stopped
```



### コンテナの起動

`docker compose up -d`でコンテナを起動し、`docker ps`で動作を確認します。Dockerが必要なイメージを自動でダウンロードし、オーディオブックサーバーを起動します。



### サーバーへのアクセス

サーバーが起動したらブラウザで以下にアクセス：

```
http://YOUR_SERVER_IP:13378
```

YOUR_SERVER_IPはVPSのIPアドレスに置き換えてください。初回起動時に以下を求められます：

- 管理者アカウントの作成
- オーディオブックライブラリのディレクトリ設定
- オーディオブックファイルのスキャンとインポート


ライブラリ設定後、Prologueモバイルアプリをサーバーに接続してオーディオブックのストリーミングを開始できます。



## まとめ

おめでとう！手動インストールまたはDockerベースのどちらかでPrologue対応のオーディオブックサーバーを無事に展開できました。

どちらの方法でも、自分のインフラ上でオーディオブックコレクションをホストし、Prologueアプリを通じてデバイスにストリーミング可能です。Dockerはメンテナンスやアップデートが楽で、手動セットアップはWebサーバー環境をより細かく制御できます。

質問やサポートが必要な場合は、いつでもお気軽に当社のサポートチームにお問い合わせください！毎日対応していますよ 🙂 

<InlineVoucher />