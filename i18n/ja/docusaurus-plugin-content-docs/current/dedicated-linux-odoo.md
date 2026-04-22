---
id: dedicated-linux-odoo
title: "LinuxサーバーにOdooをセットアップ - 自分だけのオープンソースERP＆CRMを運用しよう"
description: "Odooの統合ERP＆CRMプラットフォームでビジネスプロセスを管理・自動化し、会社運営を効率化 → 今すぐ詳しくチェック"
sidebar_label: Odooのインストール
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Odooはモジュール式のオープンソースプラットフォームで、Enterprise Resource Planning（ERP）とCustomer Relationship Management（CRM）の機能を統合しています。会計、在庫管理、プロジェクト管理、営業などのビジネスプロセスを一つのシステムで管理・自動化できます。

柔軟な拡張機能により、Odooは特定のニーズに合わせてカスタマイズ可能で、会社のあらゆる分野を一元管理する統合ソリューションを提供します。

![img](https://screensaver01.zap-hosting.com/index.php/s/3nwfLeK2c9kTiCp/preview)

このサービスを自分でホスティングしようと考えていますか？セットアップと設定の全ステップをわかりやすく解説し、注意すべきポイントもすべてお伝えします。

## One Click AppsインストーラーでOdooをインストール

VPSのウェブインターフェースにある**One Click Appsインストーラー**から直接**Odoo**をインストールできます。初期アプリ設定が完了したら、アプリカタログを開き、**Odoo**を検索。お好みのプロジェクト、環境、ドメイン設定でデプロイを開始しましょう。これにより、コマンドラインでの手動セットアップなしで、ウェブベースの管理、カスタムドメイン対応、SSLプロビジョニング（利用可能な場合）などの統合管理機能を活用しながら、素早く簡単に**Odoo**を展開・管理できます。

## 前提条件

**Odoo**をインストールする前に、スムーズな導入と最適なパフォーマンスを確保するために、ホスティング環境が以下の要件を満たしていることを確認してください。

| ハードウェア | 最低限       | 推奨         |
| ------------ | ------------ | ------------ |
| CPU          | 1 vCPUコア   | 4 vCPUコア   |
| RAM          | 1 GB         | 4 GB         |
| ディスク容量 | 15 GB        | 25 GB        |

ソフトウェアは必要な依存関係がすべてインストールされていること、対応OS上で動作していることが必要です。以下の要件を満たしているか必ず確認してください：

**依存関係:** `Docker`

**OS:** Docker 26+をサポートする最新のUbuntu/Debian

依存関係が正しくインストールされ、対応OSが使用されていることを確認し、Odooインストール時の互換性問題を避けましょう。

## 準備

**Odoo**のセットアップ前に、システムの準備が必要です。OSを最新バージョンにアップデートし、必要な依存関係をインストールします。これにより安定した環境が整い、インストール中やその後のトラブルを防げます。

### システムのアップデート
最新のソフトウェアとセキュリティ改善を適用するため、まずはシステムアップデートを行いましょう。以下のコマンドを実行してください：

```
sudo apt update && sudo apt upgrade -y
```

これで最新のセキュリティパッチとソフトウェアバージョンが適用されます。

### 依存関係のインストール
アップデートが完了したら、依存関係のインストールに進みます。Odooは複数のDockerコンテナで動作するため、まずDockerをインストールする必要があります。以下のコマンドを実行してください：

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Dockerのインストール手順や使い方は、当社の[Dockerガイド](dedicated-linux-docker.md)で詳しく解説しています。

### ドメインの設定

Odooはデフォルトでホストのポート80（HTTP）と443（HTTPS）で動作します。ドメインを設定し、DNSレコードをホストのIPアドレスに向けましょう。当社でドメイン管理している場合は、[EasyDNS](domain-easydns.md)機能を使って簡単に設定可能です。

## インストール

すべての要件を満たし準備が整ったら、Odooアプリケーションのインストールに進みます。

複数のDockerプロジェクトを扱う場合は、プロジェクトごとにディレクトリ構造を分けて管理するのがベストプラクティスです。ユーザーのホームディレクトリ内に*docker*フォルダを作り、ドメインごとにサブフォルダを用意すると、設定の競合を防げます。

例として、`example.com`ドメイン用の構造を準備するには：

```
mkdir -p /docker/example.com
cd /docker/example.com
```

このプロジェクトディレクトリ内に、コンテナのボリュームとしてマウントするサブフォルダを作成するのがおすすめです。ボリュームはサービス間でデータ共有や永続化に使います。特にnginxとcertbotがアクセスする共有webrootは、SSL証明書の生成・更新に必須です。以下のような構造を作成しましょう：

```
mkdir -p nginx/{conf,ssl,inc} config addons
```

これでnginxの設定、SSL証明書、インクルードファイル、Odooの設定やアドオン用の専用ディレクトリが用意されます。

### Docker Composeの作成

dockerプロジェクト内で`nano compose.yml`を使い、以下のコードを貼り付けて保存してください：

```
services:
  db:
    image: postgres:16
    ports:
      - "5432:5432"
    environment:
      - POSTGRES_USER=odoo
      - POSTGRES_PASSWORD=odoo
      - PGDATA=/var/lib/postgresql/data/pgdata
    volumes:
      - odoo-db-data:/var/lib/postgresql/data

  odoo:
    image: odoo:18.0
    depends_on:
      - db
    ports:
      - "8069:8069"
    volumes:
      - odoo-web-data:/var/lib/odoo
      - ./config:/etc/odoo
      - ./addons:/mnt/extra-addons
    command: odoo -d odoo_db -i base --db_user=odoo --db_password=odoo --db_host=db

  nginx:
    image: nginx:latest
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/conf:/etc/nginx/conf.d
      - ./nginx/inc:/etc/nginx/inc
      - ./nginx/ssl:/etc/nginx/ssl
      - ./nginx/certbot/www:/var/www/certbot
      - ./nginx/certbot/conf:/etc/letsencrypt
    depends_on:
      - odoo

  certbot:
    image: certbot/certbot
    volumes:
      - ./nginx/certbot/www:/var/www/certbot
      - ./nginx/certbot/conf:/etc/letsencrypt

volumes:
  odoo-db-data:
  odoo-web-data:
```

### ファイアウォール設定

nginxとcertbotが正常に動作するには、TCPポート80（HTTP）と443（HTTPS）をファイアウォールで許可する必要があります。certbotはHTTP検証にポート80を使い、HTTPS通信にはポート443が必須です。UFW（Uncomplicated Firewall）が有効な場合は、以下のコマンドで許可しましょう：

```
sudo ufw allow http
sudo ufw allow https
```

設定後、`sudo ufw status`でポートが開放されているか確認してください。その他のファイアウォール設定でこれらのポートがブロックされていないかも要チェックです。そうでないと証明書発行やHTTPS通信が失敗します。

### Nginxの設定

nginx設定は、ドメイン用の設定ファイルを作成することから始まります。`nginx/conf`ディレクトリ内に、ドメイン名をファイル名にした設定ファイルを作成しましょう。例として`nano nginx/conf/example.com.conf`を実行し、以下の基本設定を追加してください。`example.com`は実際のドメイン名に置き換えます：

```
server {
    listen 80;
    server_name example.com;

    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        return 301 https://$host$request_uri;
    }
}
```

この設定により、certbotがACMEチャレンジを完了し有効なSSL証明書を発行できます。また、HTTPアクセスはすべてHTTPSへリダイレクトされます。

ファイル保存後、データベース、Odoo、nginxのコンテナを起動します。以下のコマンドを実行してください：

```
sudo docker compose up -d db odoo nginx
```

コンテナはバックグラウンドで起動し、nginxは新設定を読み込みます。これでcertbotが証明書を生成できる状態になります。

### SSL証明書の生成

以下のコマンドを実行してcertbotでSSL証明書を作成します。`-d`の後に自分のドメインを指定し、`user@mail.com`は有効なメールアドレスに置き換えてください。

```
sudo docker compose run --rm certbot certonly --webroot --webroot-path=/var/www/certbot -d example.com --email user@mail.com --agree-tos --no-eff-email
```

続いて、暗号鍵交換のセキュリティを強化するために専用のDHパラメータファイルを生成します。

```
openssl dhparam -out nginx/ssl/dhparam.pem 2048
```

次に`nano nginx/ssl/ssl.conf`で`ssl.conf`ファイルを作成し、以下の内容を追加してください。`example.com`は自分のドメインに置き換えます：

```
ssl_protocols TLSv1.2 TLSv1.3;
ssl_ecdh_curve X25519:prime256v1:secp384r1;
ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384:DHE-RSA-CHACHA20-POLY1305;
ssl_prefer_server_ciphers off;
ssl_session_timeout 1d;
ssl_session_cache shared:MozSSL:10m;
ssl_dhparam "/etc/nginx/ssl/dhparam.pem";
ssl_trusted_certificate /etc/letsencrypt/live/example.com/chain.pem;
resolver 1.1.1.1 1.0.0.1 valid=300s;
```

## 設定

### Nginx設定

先ほど作成したnginx設定ファイルを編集し、以下の内容に置き換えてください。これによりサイトはHTTPSのみで提供されます。

`server_name`には実際のドメイン名を、`ssl_certificate`と`ssl_certificate_key`には証明書ファイルの正しいパスを指定してください。

```bash
server {
    listen 443 ssl;
    http2 on;
    server_name example.com;

    # MozillaのSSL設定を読み込み
    include /etc/nginx/ssl/ssl.conf;

    # 証明書のパス（マウントしたボリュームに合わせて調整）
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;

    # セキュリティヘッダー
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always;

    access_log /var/log/nginx/odoo_access.log;
    error_log  /var/log/nginx/odoo_error.log;

    # Gzip圧縮設定
    include /etc/nginx/inc/gzip.conf;

    # Odooへのプロキシ設定
    location / {
        proxy_pass http://odoo:8069;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-NginX-Proxy true;
        proxy_set_header X-Forwarded-Proto https;
        proxy_set_header X-Forwarded-Host $host;
        proxy_redirect off;
        proxy_request_buffering off;
        # 標準リクエスト用の推奨タイムアウト
        proxy_connect_timeout 30s;
        proxy_send_timeout    60s;
        proxy_read_timeout    60s;
        send_timeout          60s;
    }

    # 静的ファイルのキャッシュ
    location ~* /web/static/ {
        proxy_cache_valid 200 60m;
        proxy_buffering on;
        expires 864000;
        proxy_pass http://odoo:8069;
    }

    # ロングポーリング用タイムアウト延長
    location /longpolling {
        proxy_pass http://odoo:8069;
        proxy_connect_timeout 60s;
        proxy_send_timeout    300s;
        proxy_read_timeout    300s;
        send_timeout          300s;
    }

    location /websocket {
        proxy_pass http://odoo:8069;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

server {
    listen 80;
    server_name example.com;

    # CertbotがチャレンジURLにアクセス可能にする設定
    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        return 301 https://$host$request_uri;
    }
}
```

設定を保存したら、nginxコンテナを再起動して新設定を反映させます：

```
sudo docker compose restart nginx
```

再起動時にエラーメッセージがないか確認しましょう。問題があれば`sudo docker compose logs nginx`でログをチェックしてトラブルシュートしてください。エラーなく起動したら、ブラウザでサイトにアクセスし、HTTPSが有効で正常に表示されるか確認しましょう。

### Odooの設定オプション

カスタム設定を適用したい場合は、`config/odoo.conf`に専用の設定ファイルを作成し、必要なオプションを追加できます。

このファイルでは、ログイン画面からのデータベース選択を非表示にする`list_db = False`、リバースプロキシ環境で動作させるための`proxy_mode = True`などが設定可能です。カスタムアドオンを使う場合は、`addons_path`のコメントを外して先ほど作成したaddonsディレクトリを指定しましょう。例：

```
[options]
list_db = False
proxy_mode = True
#addons_path = /mnt/extra-addons
```

### `-i base`フラグの削除

`compose.yml`内の`-i base`フラグは、odooコンテナを再作成するとデータベースを再生成してしまうため削除が必要です。`nano compose.yml`でファイルを開き、`command`行を以下のように修正してください：

```
command: odoo -d odoo_db --db_user=odoo --db_password=odoo --db_host=db
```

## ウェブサイトへのアクセス

インストールと設定が完了し、すべてのサービスが起動したら、ブラウザのアドレスバーにドメインを入力して安全にウェブサイトへアクセスできます。

![img](https://screensaver01.zap-hosting.com/index.php/s/QTEzbrqG66tTQEA/download)

これで新規インストールのスタートページが表示されます。初回ログインには、ユーザー名`admin`、パスワード`admin`のデフォルトアカウントが用意されています。必ずこれらの認証情報は変更してください。

## まとめと追加リソース

おめでとうございます！これでVPS/専用サーバーにOdooを無事インストール・設定できました。さらにサーバー設定を進める際に役立つ以下のリソースもぜひチェックしてみてください：

- [Odoo.com](https://odoo.com) - 公式サイト
- [odoo.com/documentation/18.0/](https://www.odoo.com/documentation/18.0/) - Odoo公式ドキュメント

ここにない質問やサポートが必要な場合は、いつでもお気軽に当社サポートチームまでお問い合わせください。毎日対応していますので安心してご利用くださいね！🙂