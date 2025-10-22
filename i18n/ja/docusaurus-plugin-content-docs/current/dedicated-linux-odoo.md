---
id: dedicated-linux-odoo
title: "専用サーバー：LinuxでOdoo（オープンソースERP＆CRM）をセットアップ"
description: "Odooの統合ERP＆CRMプラットフォームでビジネスプロセスを管理・自動化し、会社運営を効率化 → 今すぐ詳しくチェック"
sidebar_label: Odooのインストール
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Odooはモジュール式のオープンソースプラットフォームで、エンタープライズリソースプランニング（ERP）とカスタマーリレーションシップマネジメント（CRM）機能を組み合わせています。会計、在庫、プロジェクト管理、営業などのビジネスプロセスを一つのシステムで管理・自動化できます。

柔軟な拡張機能により、Odooは特定のニーズに合わせてカスタマイズ可能で、会社のあらゆる分野を統合的に管理するソリューションを提供します。

![img](https://screensaver01.zap-hosting.com/index.php/s/3nwfLeK2c9kTiCp/preview)

自分でこのサービスをホスティングしようと考えていますか？セットアップと設定のすべてのステップをわかりやすく解説し、注意すべきポイントもお伝えします。

<InlineVoucher />



## 前提条件

**Odoo**をインストールする前に、スムーズなインストールと最適なパフォーマンスを保証するために、ホスティング環境が以下の要件を満たしていることを確認してください。

| ハードウェア | 最低要件     | 推奨要件     |
| ------------ | ------------ | ------------ |
| CPU          | 1 vCPUコア   | 4 vCPUコア   |
| RAM          | 1 GB         | 4 GB         |
| ディスク容量 | 15 GB        | 25 GB        |

ソフトウェアは必要な依存関係がすべてインストールされていること、対応OS上で動作していることを要求します。インストールを進める前に、以下の要件を満たしているか必ず確認してください：

**依存関係:** `Docker`

**OS:** Docker 26+をサポートする最新のUbuntu/Debian

依存関係がすべてインストールされていること、正しいOSバージョンを使用していることを確認し、Odooのインストール時の互換性問題を避けましょう。



## 準備

**Odoo**のセットアップ前に、システムの準備が必要です。OSを最新バージョンにアップデートし、必要な依存関係をインストールします。これにより安定した環境が整い、インストール中やインストール後の問題を防げます。


### システムのアップデート
最新のソフトウェアとセキュリティ改善を適用するため、まずはシステムのアップデートを行いましょう。以下のコマンドを実行してください：

```
sudo apt update && sudo apt upgrade -y
```
これにより、最新のセキュリティパッチとソフトウェアバージョンが適用されます。

### 依存関係のインストール
アップデートが完了したら、依存関係のインストールに進みます。OdooはDockerコンテナ群で動作するため、まずDockerをインストールする必要があります。以下のコマンドを実行してください：

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Dockerのインストール手順や使い方の詳細は、当社の[Docker](vserver-linux-docker.md)ガイドをご覧ください。



### ドメインの設定

Odooはデフォルトでポート80（HTTP）と443（HTTPS）でホスト上で動作します。ドメインを設定し、DNSレコードをホストに向けてください。ドメインが当社管理の場合は、[EasyDNS](domain-easydns.md)機能で簡単に設定可能です。




## インストール
すべての要件を満たし、準備が整ったらOdooのインストールに進みましょう。

複数のDocker環境を扱う場合は、プロジェクトごとに明確なディレクトリ構造を作るのがベストプラクティスです。一般的にはユーザーのホームディレクトリ内に *docker* フォルダを作り、ドメインごとにサブフォルダを用意します。こうすることで、同じサーバー上で複数プロジェクトを設定の競合なくホスティングできます。

例として、`example.com`ドメイン用の構造を準備するには：

```
mkdir -p /docker/example.com
cd /docker/example.com
```

このプロジェクトディレクトリ内に、コンテナのボリュームとしてマウントするサブフォルダを作成するのがおすすめです。ボリュームはサービス間でデータ共有や永続化に使います。特にnginxとcertbotがSSL証明書の生成・更新でアクセスする共有webrootは重要です。以下のような構造を作成しましょう：

```
mkdir -p nginx/{conf,ssl,inc} config addons
```

nginxの設定、SSL証明書、インクルードファイル、Odoo固有の設定やアドオン用のディレクトリが用意されます。




### Docker Composeの作成

dockerプロジェクト内で`nano compose.yml`を使いcompose.ymlファイルを作成し、以下のコードを貼り付けてください：

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

nginxとcertbotが正常に動作するには、TCPポート80（HTTP）と443（HTTPS）をファイアウォールで許可する必要があります。certbotはHTTP検証にポート80を使い、HTTPS通信にはポート443が必須です。UFW（Uncomplicated Firewall）が有効な場合は、以下のコマンドでルールを追加してください：

```
sudo ufw allow http
sudo ufw allow https
```

その後、`sudo ufw status`でポートが開放されていることを確認しましょう。その他のファイアウォール設定でこれらのポートがブロックされていないかも必ずチェックしてください。そうしないと証明書の生成やHTTPS通信が失敗します。



### Nginxの設定

nginxの設定は、ドメイン用の設定ファイルを作成することから始まります。`nginx/conf`ディレクトリ内にドメイン名のファイルを作成します。例えば、`nano nginx/conf/example.com.conf`を実行し、以下の基本設定を追加してください。`example.com`は実際のドメイン名に置き換えます：

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

この設定により、certbotがACMEチャレンジを完了し有効なSSL証明書を発行できます。また、HTTPリクエストはすべてHTTPSへリダイレクトされます。

ファイルを保存したら、データベース、Odoo、nginxのコンテナを起動します。以下のコマンドを実行してください：

```
sudo docker compose up -d db odoo nginx
```

コンテナはバックグラウンドで起動し、nginxは新しい設定を読み込みます。これにより次のステップでcertbotが証明書を生成可能になります。


### SSL証明書の生成

以下のコマンドを実行し、certbotでSSL証明書を作成します。`-d`の後に自分のドメインを指定し、`user@mail.com`は有効なメールアドレスに置き換えてください。

```
sudo docker compose run --rm certbot certonly --webroot --webroot-path=/var/www/certbot -d example.com --email user@mail.com --agree-tos --no-eff-email
```

続いて、暗号鍵交換のセキュリティを強化するために専用のDHパラメータファイルを生成します。

```
openssl dhparam -out nginx/ssl/dhparam.pem 2048
```

次に、`nano nginx/ssl/ssl.conf`で`ssl.conf`ファイルを作成し、以下の内容を追加してください。`example.com`は自分のドメインに置き換えます：

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

`server_name`ディレクティブには実際のドメイン名を、`ssl_certificate`と`ssl_certificate_key`には証明書ファイルの正しいパスを指定してください。

```bash
server {
    listen 443 ssl;
    http2 on;
    server_name example.com;

    # MozillaのSSL設定をインクルード
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

    # ロングポーリング用のタイムアウト延長
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



nginx設定を保存したら、新しい設定を反映させるためにnginxコンテナを再起動します：

```
sudo docker compose restart nginx
```

再起動によりnginxは更新された設定を読み込み、すぐに新しいパラメータでリクエストを処理します。再起動時にエラーメッセージが出た場合は、`sudo docker compose logs nginx`でログを確認し設定の問題をトラブルシュートしてください。エラーなく起動したら、ブラウザでサイトにアクセスしHTTPSが有効で正常に表示されるか確認しましょう。



### Odooの設定オプション

カスタム設定を適用するには、Odoo用の専用設定ファイルを作成します。`config/odoo.conf`に新規ファイルを作り、必要なオプションを追加してください。

このファイル内で、ログイン画面からデータベース選択を非表示にする`list_db = False`、リバースプロキシ環境で動作することを示す`proxy_mode = True`、カスタムアドオンを使う場合は`addons_path`のコメントを外して先ほど作成したaddonsディレクトリを指定できます。例：

```
[options]
list_db = False
proxy_mode = True
#addons_path = /mnt/extra-addons
```



### -i baseフラグの削除

`compose.yml`内の`-i base`フラグは、odooコンテナを再作成するときにデータベースを再作成してしまうため削除が必要です。`nano compose.yml`でcomposeファイルを開き、コマンドを以下のように修正してください：

```
command: odoo -d odoo_db --db_user=odoo --db_password=odoo --db_host=db
```



## ウェブサイトへのアクセス

インストールと設定が完了し、すべてのサービスが起動している状態で、ブラウザのアドレスバーにドメインを入力すると安全にウェブサイトへアクセスできます。



![img](https://screensaver01.zap-hosting.com/index.php/s/QTEzbrqG66tTQEA/download)

これで新規インストールのスタートページが表示されます。初回ログイン用のデフォルトアカウントはユーザー名`admin`、パスワード`admin`です。セキュリティのため、必ずこれらの認証情報は変更してください。



## まとめと追加リソース

おめでとうございます！専用サーバーにOdooを無事インストール・設定できました。サーバー設定の参考になる以下のリソースもぜひチェックしてみてください。

- [Odoo.com](https://odoo.com) - 公式サイト
- [odoo.com/documentation/18.0/](https://www.odoo.com/documentation/18.0/) - Odooドキュメント

ここにない質問やサポートが必要な場合は、いつでもお気軽に当社サポートチームへお問い合わせください。毎日対応しています！🙂



<InlineVoucher />