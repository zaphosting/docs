---
id: server-linux-n8n
title: "Linuxサーバーにn8nをセットアップ - 強力なワークフロー自動化を構築しよう"
description: "n8nをセルフホスティングでインストール・セットアップして、作業を楽にするAIワークフロー自動化を作ろう → 今すぐチェック"
sidebar_label: n8nのインストール
services:
  - vserver-service-n8n
  - dedicated-service-n8n
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';


## はじめに

[n8n](https://n8n.io/)は、ビジュアルエディターで素早く反復できるツールで、オートメーションワークフローを作成し、即座に結果を確認できます。日常の自動化から複雑なAIエージェントのワークフローまで幅広く対応可能です。

![img](https://screensaver01.zap-hosting.com/index.php/s/skzPCRajMZPbfw3/preview)

セルフホスティング対応とローコードエディターがn8nを開発者に大人気にしています。最大限のコントロールやカスタマイズを求め、長期的にコストを抑えたいなら、セルフホストは最高の選択肢です。

n8nを自分でホストする予定？セットアップから設定まで、必要なポイントを全部解説します。

<InlineVoucher />



## n8nの活用例

n8nは日常のさまざまなシーンで使え、タスク自動化、ローコードエディターの活用、AIエージェント構築、リード自動化、CRM強化、IT運用、セキュリティ運用、バックエンドのプロトタイピングなど、幅広い用途に最適です。初心者からエキスパートまで誰でも使えます。

n8nはGoogle Sheets、Telegram、MySQL、Slack、Discord、Postgresなど1367以上の連携を提供し、HubSpotとSalesforce、TwilioとWhatsApp、GitHubとJira、AsanaとSlack、AsanaとSalesforce、JiraとSlackなどのトレンド自動化コンビネーションやコミュニティテンプレートも豊富です。

## 必要条件

n8nは軽量ですが、ワークフローの使用量、APIコール、データ量の多いノードによってリソース使用量は増加します。VPSでn8nをホストする際の推奨ハードウェア要件は以下の通りです。

| ハードウェア | 最低限       | 推奨                      |
| ------------ | ------------ | ------------------------- |
| CPU          | 1 vCPUコア   | 2 vCPUコア                |
| RAM          | 2 GB         | 4 GB                      |
| ディスク容量 | 20 GB        | 50 GB                     |
<InlineServiceLink />

## 準備

始める前にDockerをインストールし、システムパッケージを更新する必要があります。[Dockerのインストールガイド](dedicated-linux-docker.md)を参考に、先に完了させてください。

## インストール
サーバーにDockerをインストールしたら、以下のコマンドでインストールを確認しましょう：

```
docker --version
docker compose version
```

### `.env`ファイルの作成

n8nのローカルファイルと環境設定を保存するプロジェクトディレクトリを作成し、中に移動します：

```
mkdir n8n-compose
cd n8n-compose
```

`n8n-compose`ディレクトリ内で`nano .env`を使って`.env`ファイルを作成し、以下のn8n環境設定を記述します。

```
# DOMAIN_NAMEとSUBDOMAINでn8nのアクセス先を決定します
# トップレベルドメイン
DOMAIN_NAME=zap.cloud

# サブドメイン
SUBDOMAIN=silver-octopus-xxxxx

# 上記例では https://silver-octopus-xxxxx.zap.cloud でn8nにアクセス可能

# Cronやスケジューリングノードで使う任意のタイムゾーン
GENERIC_TIMEZONE=Europe/Berlin

# TLS/SSL証明書作成に使うメールアドレス
SSL_EMAIL=hello@zap-hosting.com
```

:::info
DOMAIN_NAMEとSUBDOMAINはZAP-HostingのプロダクトページでVPSの`ホスト名`を確認して見つけられます。

![img](https://screensaver01.zap-hosting.com/index.php/s/7DoXD5F9m2oYTXX/preview)

:::

`zap.cloud`の部分をDOMAIN_NAMEに、前半の部分をSUBDOMAINに入力してください（例：silver-octopus-xxxxx）。

![img](https://screensaver01.zap-hosting.com/index.php/s/EaQn97J25TpwDSa/preview)

:::warning HTTPS必須
.envファイルに直接IPアドレスを使わないでください。n8nはHTTPS接続が必須で、SSL証明書はドメインに対してのみ発行されるため、IPアドレスでは証明書が発行されません。
:::

もし自分のドメインでn8nをホストしたい場合は、ドメインのDNSマネージャーでn8n用のサブドメインを作成し、VPSのIPアドレスを指すAレコードを設定してください。

| 名前             | 種類 | 値             | TTL  | 優先度 |
| ---------------- | ---- | -------------- | ---- | ------ |
| n8n (サブドメイン) | A    | IPv4アドレス   | 1440 | 0      |

### ローカルファイル用ディレクトリ作成

プロジェクトディレクトリ内に、n8nインスタンスとホスト間でファイル共有するための`local-files`ディレクトリを作成します：

```
mkdir local-files
```

### Docker Composeファイル作成

`nano compose.yaml`でDocker Composeファイルを作成し、以下の内容を貼り付けます：

```yaml
services:
  traefik:
    image: "traefik"
    restart: always
    command:
      - "--api.insecure=true"
      - "--providers.docker=true"
      - "--providers.docker.exposedbydefault=false"
      - "--entrypoints.web.address=:80"
      - "--entrypoints.web.http.redirections.entryPoint.to=websecure"
      - "--entrypoints.web.http.redirections.entrypoint.scheme=https"
      - "--entrypoints.websecure.address=:443"
      - "--certificatesresolvers.mytlschallenge.acme.tlschallenge=true"
      - "--certificatesresolvers.mytlschallenge.acme.email=${SSL_EMAIL}"
      - "--certificatesresolvers.mytlschallenge.acme.storage=/letsencrypt/acme.json"
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - traefik_data:/letsencrypt
      - /var/run/docker.sock:/var/run/docker.sock:ro

  n8n:
    image: docker.n8n.io/n8nio/n8n
    restart: always
    ports:
      - "127.0.0.1:5678:5678"
    labels:
      - traefik.enable=true
      - traefik.http.routers.n8n.rule=Host(`${SUBDOMAIN}.${DOMAIN_NAME}`)
      - traefik.http.routers.n8n.tls=true
      - traefik.http.routers.n8n.entrypoints=web,websecure
      - traefik.http.routers.n8n.tls.certresolver=mytlschallenge
      - traefik.http.middlewares.n8n.headers.SSLRedirect=true
      - traefik.http.middlewares.n8n.headers.STSSeconds=315360000
      - traefik.http.middlewares.n8n.headers.browserXSSFilter=true
      - traefik.http.middlewares.n8n.headers.contentTypeNosniff=true
      - traefik.http.middlewares.n8n.headers.forceSTSHeader=true
      - traefik.http.middlewares.n8n.headers.SSLHost=${DOMAIN_NAME}
      - traefik.http.middlewares.n8n.headers.STSIncludeSubdomains=true
      - traefik.http.middlewares.n8n.headers.STSPreload=true
      - traefik.http.routers.n8n.middlewares=n8n@docker
    environment:
      - N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS=true
      - N8N_HOST=${SUBDOMAIN}.${DOMAIN_NAME}
      - N8N_PORT=5678
      - N8N_PROTOCOL=https
      - N8N_RUNNERS_ENABLED=true
      - NODE_ENV=production
      - WEBHOOK_URL=https://${SUBDOMAIN}.${DOMAIN_NAME}/
      - GENERIC_TIMEZONE=${GENERIC_TIMEZONE}
      - TZ=${GENERIC_TIMEZONE}
    volumes:
      - n8n_data:/home/node/.n8n
      - ./local-files:/files

volumes:
  n8n_data:
  traefik_data:
```

これでn8nがインストールされ、SSL証明書が発行され、ドメインでn8nが公開されます。

### n8nの起動

n8nを起動するには、以下のコマンドを実行します：

```
sudo docker compose up -d
```

停止する場合は、こちら：

```
sudo docker compose stop
```

### n8nへのアクセス

起動後、ブラウザでURL（またはホスト名）にアクセスしてセットアップページを開きます。ここで管理者アカウントを作成してください。

![img](https://screensaver01.zap-hosting.com/index.php/s/3SNBcAtXco8RTQr/preview)

:::info パスワード注意
パスワードは忘れないようにしっかり覚えておきましょう！
:::

次に簡単なアンケートが表示され、基本情報の入力を求められます。

![img](https://screensaver01.zap-hosting.com/index.php/s/bY8sDwenKtSEBg4/preview)

任意で、有料機能の無料アクセスを得るためにメールアドレスを入力し、ライセンスキーをメールで受け取ることも可能です。興味があればメールアドレスを入力してリクエストしてください。

![img](https://screensaver01.zap-hosting.com/index.php/s/7jEtswn3s3gZ3Es/preview)

メールで届いたライセンスキーをコピーし、設定 > 使用状況とプラン > アクティベーションキー入力に貼り付けます。

### 最初のワークフロー作成

これでダッシュボードにアクセスでき、すぐにn8nを使い始められます！

![img](https://screensaver01.zap-hosting.com/index.php/s/RbFAoJ9ZRD9m8Px/preview)

白紙のキャンバスから始めるか、テンプレートを使うか選べます。n8nのセットアップは完了です！

![img](https://screensaver01.zap-hosting.com/index.php/s/y93sTPG9Qwt5PKo/preview)



## まとめと追加リソース

お疲れさま！n8nのサーバーへのインストールが完了し、すぐに使い始められます。以下のリソースもぜひチェックして、サーバー設定の参考にしてください。

- [n8n.io](https://n8n.io/) - 公式サイト
- [docs.n8n.io](https://docs.n8n.io/) - n8nドキュメント

ここにない質問があれば、いつでもサポートチームにお問い合わせください。毎日対応しているので安心です！🙂



<InlineVoucher />