---
id: server-linux-cashlytics
title: "LinuxサーバーにCashlyticsをセットアップ - AI搭載のファイナンス管理をセルフホスト"
description: "Dockerを使ってLinux VPSにCashlyticsをインストール＆起動し、AIアシストで個人の家計管理や予算管理を始めよう → 今すぐチェック"
sidebar_label: Cashlyticsのインストール
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## はじめに

[Cashlytics](https://github.com/aaronjoeldev/cashlytics-ai)は、支出の追跡や予算管理、家計の傾向を把握するのに役立つ、モダンな**個人向けファイナンス＆予算管理プラットフォーム**です。取引データや支出カテゴリを分析し、どこにお金が使われているか、どう改善できるかを教えてくれます。

さらに、**AI搭載のアシスタント**と連携することで、財務データの分析や支出パターンの特定、賢い予算管理のためのインサイトを受け取ることも可能です。

![img](https://screensaver01.zap-hosting.com/index.php/s/W46gYzqdiPrBDsE/preview)

Cashlyticsを自分のサーバーでセルフホストすれば、**財務データを完全にコントロール**しつつ、どこからでもウェブインターフェースで予算管理ツールにアクセスできます。自分でCashlyticsをホストしたい？このガイドではLinux VPS上でDockerを使ったインストール手順を丁寧に解説します。

<InlineVoucher />

## Cashlyticsの活用シーン

Cashlyticsは、個人やビジネスでの財務管理や予算管理が重要なあらゆる場面で活用できます。主なユースケースは以下の通り：

- 個人の支出や月間予算の追跡
- 支出パターンや家計の傾向のモニタリング
- 複数の収入源や財務カテゴリの管理
- AIによるインサイトで賢い予算管理を実現
- プライベートでセルフコントロール可能な財務ダッシュボードの運用

セルフホスト型なので、クラウドベースの財務ツールに代わるプライバシー重視の選択肢として最適です。

## 前提条件

Cashlyticsをインストールする前に、VPSが以下の要件を満たしていることを確認してください。

| ハードウェア | 最低限 | 推奨 |
|----------|---------|-------------|
| CPU | 1コア | 2コア |
| RAM | 2 GB | 4 GB |
| ディスク容量 | 10 GB | 20 GB |



さらに、以下のソフトウェアがインストールされている必要があります：

- Docker
- Docker Compose

まだDockerをインストールしていない場合は、[Dockerインストールガイド](dedicated-linux-docker.md)を参考にセットアップしてください。



<InlineServiceLink />



## 準備

まずはCashlytics用のプロジェクトディレクトリを作成します。

```bash
mkdir cashlytics && cd cashlytics
```

次に、公式のCashlytics Docker設定ファイルをダウンロードします。

```
curl -O https://raw.githubusercontent.com/aaronjoeldev/cashlytics-ai/main/docker-compose.selfhost.yml
curl -O https://raw.githubusercontent.com/aaronjoeldev/cashlytics-ai/main/.env.example
```

環境設定ファイルを例ファイルからコピーして作成します。

```
cp .env.example .env
```

`.env`ファイルにはCashlyticsを動かすための設定変数が含まれています。



## インストール



### `.env`ファイルを開く

`.env`ファイルを開いて必要な環境変数を設定します。

```
nano .env
```



### データベースパスワードの設定

Cashlyticsが使うPostgreSQLデータベースの安全なパスワードを設定します。

```
POSTGRES_PASSWORD=your_secure_password_here
```



### データベース接続の設定

データベース接続文字列を更新し、上で設定したパスワードを使います。

```
DATABASE_URL=postgresql://cashlytics:your_secure_password_here@postgres:5432/cashlytics
```



### オプションのAIアシスタント

Cashlyticsは財務データを分析し予算管理のインサイトを提供するAIアシスタントをオプションでサポートしています。利用する場合はOpenAIのAPIキーを設定してください。

```
OPENAI_API_KEY=sk-your-openai-key
```

AIアシスタントを使わない場合は、この変数は空のままでOKです。



## Cashlyticsの起動

設定が完了したら、Docker Composeでアプリケーションを起動します。

```
docker compose -f docker-compose.selfhost.yml up -d
```

Dockerが必要なコンテナイメージをダウンロードし、Cashlyticsのサービスを起動します。コンテナが起動しているか確認するには：

```
docker ps
```



## Cashlyticsへのアクセス

コンテナが正常に起動したら、ブラウザでCashlyticsのウェブインターフェースにアクセスします。

```
http://YOUR_SERVER_IP:3000
```

YOUR_SERVER_IPはあなたのVPSのIPアドレスに置き換えてください。画面が表示されたら、家計や予算、カテゴリの設定を始められます。

## まとめ

おめでとうございます！LinuxサーバーにCashlyticsを無事インストールできました。これで支出の追跡や予算管理、財務データのインサイト取得がスタートできます。

自分のVPSや専用サーバーでCashlyticsを運用することで、財務情報を完全に自分で管理しながら、最新の予算管理ツールやAI分析の恩恵を受けられます。

何か質問やサポートが必要な場合は、いつでもお気軽に当社のサポートチームにお問い合わせくださいね！🙂

<InlineVoucher />