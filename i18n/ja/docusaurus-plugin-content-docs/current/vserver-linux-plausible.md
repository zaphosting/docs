---
id: vserver-linux-plausible
title: "VPS: OSにPlausibleをセットアップする方法"
description: "プライバシー重視のウェブ解析プラットフォームをセットアップして、クリアなインサイトと高速パフォーマンスを実現 → 今すぐ詳しくチェック"
sidebar_label: Plausibleのインストール
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Plausibleは、クッキーを使わずプライバシー規制に完全準拠した軽量オープンソースのウェブ解析プラットフォームです。訪問者数、ページビュー、滞在時間などの重要な指標を、シンプルで直感的なダッシュボードで提供します。使いやすさ、高速な動作、EU拠点のインフラを備え、Google Analyticsのモダンでプライバシーに配慮した代替として最適です。

自分でこのサービスをホスティングしたい？セットアップから設定まで、必要なポイントをすべて丁寧に解説します。

<InlineVoucher />

## 前提条件

**Plausible**をインストールする前に、スムーズな導入と最適なパフォーマンスを保証するために、ホスティング環境が以下の要件を満たしていることを確認してください。

| ハードウェア | 最低要件       | ZAP-Hosting推奨スペック |
| ------------ | -------------- | ----------------------- |
| CPU          | 1 vCPUコア     | 4 vCPUコア              |
| RAM          | 2 GB           | 4 GB                    |
| ディスク容量 | 10 GB          | 25 GB                   |

ソフトウェアは必要な依存関係がすべてインストールされていること、対応OS上で動作していることが必須です。以下の要件を満たしているか必ず確認してください。

**依存関係:** `Docker`

**OS:** Docker 26+をサポートする最新のUbuntuまたはDebian

依存関係のインストールとOSのバージョンが正しいことを確認し、Plausibleのインストール時の互換性問題を避けましょう。

## 準備

**Plausible**のセットアップ前に、システムの準備が必要です。OSを最新バージョンにアップデートし、必要な依存関係をインストールします。これにより安定した環境が整い、インストール中やその後のトラブルを防げます。

### システムのアップデート
最新のソフトウェアとセキュリティ改善を適用するため、まずはシステムアップデートを行いましょう。以下のコマンドを実行してください：

```
sudo apt update && sudo apt upgrade -y
```

これで最新のセキュリティパッチとソフトウェアバージョンが適用されます。

### 依存関係のインストール
アップデートが完了したら、依存関係のインストールに進みます。

#### Git
PlausibleのデータはGitHubからダウンロードするため、Gitのインストールが必要です。以下のコマンドを実行してください：

```
sudo apt install git-all
```

#### Docker

PlausibleはDockerコンテナでデプロイ・実行されます。Dockerのインストールが必要です。以下のコマンドを実行してください：

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Dockerのインストール方法や使い方の詳細は、当社の[Dockerガイド](vserver-linux-docker.md)でチェックできます。

## インストール

すべての要件を満たし準備が整ったら、Plausibleのインストールに進みましょう。

まずはCommunity Editionのリポジトリをクローンし、設定ファイルを作成します：

```
$ git clone -b v3.0.1 --single-branch https://github.com/Plausible/community-edition Plausible-ce
```

次に、環境変数ファイル（.env）を作成し、必須の変数を定義します。`BASE_URL`は、すでにDNSレコードがあなたのサーバーを指している実際のドメインに設定してください。また、64バイト以上のランダムな`SECRET_KEY_BASE`を生成する必要があります：

```
touch .env
echo "BASE_URL=https://Plausible.example.com" >> .env
echo "SECRET_KEY_BASE=$(openssl rand -base64 48)" >> .env
echo "HTTP_PORT=80" >> .env
echo "HTTPS_PORT=443" >> .env
```

`cat .env`で内容を確認し、以下のようになっていることをチェックしましょう：

```
BASE_URL=https://Plausible.example.com
SECRET_KEY_BASE=As0fZsJlUpuFYSthRjT5Yflg/NlxkFKPRro72xMLXF8yInZ60s6xGGXYVqml+XN1
HTTP_PORT=80
HTTPS_PORT=443
```

これらのデフォルトポートはLet’s EncryptがTLS証明書を自動発行するために必要です。リバースプロキシの背後でPlausibleを動かす場合は、これらの値を調整してください。さらに、Plausibleコンテナの正しいポートを公開するために`compose.override.yml`を作成します：

```
cat > compose.override.yml << EOF
services:
  Plausible:
    ports:
      - 80:80
      - 443:443
EOF 
```

最後に、Docker Composeで必要なサービスを起動します：

```
docker compose up -d
```

コンテナが起動したら、`BASE_URL`で指定したドメインにブラウザでアクセスし、最初のユーザーアカウントを作成しましょう。

![img](https://screensaver01.zap-hosting.com/index.php/s/Sw34XkXeHaMf9RJ/download)

## 設定

PlausibleはGoogle Search Consoleと連携可能で、検索クエリデータを解析に取り込めます。これにより、どのキーワードがトラフィックを牽引しているかがわかり、訪問者の行動をより深く理解できます。

Google CloudアカウントとOAuthクライアントがすでにある場合は、`.env`ファイルに`GOOGLE_CLIENT_ID`と`GOOGLE_CLIENT_SECRET`を追加するだけでOK。保存後、`docker compose up -d`でDockerサービスを再起動します。Plausibleのダッシュボードで *サイト設定 > インテグレーション* に進み、認証手順に従って連携を完了させましょう。

OAuthクライアントをまだ持っていない、または設定方法がわからない場合は、Plausible公式Wikiの詳細なステップバイステップガイドが役立ちます。Google Cloudでのプロジェクト作成、API有効化、OAuthクライアント設定、生成した認証情報のPlausibleへの追加方法が解説されています：[Plausible Wiki: Google Integration](https://github.com/Plausible/community-edition/wiki/google-integration)。

Google Search Consoleを使っているなら、Google連携を設定して検索キーワードのデータを取り込むのが超便利です。

すでにGoogle CloudアカウントとOAuthクライアントを持っているなら、`.env`に`GOOGLE_CLIENT_ID`と`GOOGLE_CLIENT_SECRET`を貼り付けて、`docker compose up -d`でサービスを再起動し、Plausibleのサイト設定 > インテグレーション画面の指示に従うだけでOKです。

## まとめと追加リソース

おめでとうございます！これでVPSにPlausibleを無事インストール＆設定できました。サーバー設定の参考になる以下のリソースもぜひチェックしてみてください。

- [Plausible.io](https://Plausible.io/) - 公式サイト
- [github.com/Plausible/analytics](https://github.com/Plausible/analytics) - アナウンス、ディスカッション、問題報告

ここにない質問やサポートが必要な場合は、いつでもお気軽に当社サポートチームへお問い合わせください。毎日対応していますよ！🙂

<InlineVoucher />