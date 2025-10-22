---
id: dedicated-pterodactyl
title: "専用サーバー：Pterodactylのインストール"
description: "自分だけのPterodactylゲームサーバーパネルを効率的にセットアップ＆管理する方法をチェック → 今すぐ詳しく"
sidebar_label: Pterodactylのインストール
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Pterodactylパネルは、ゲームサーバーを簡単に管理・ホスティングできるオープンソースのコントロールパネルです。管理者が複数のゲームサーバーを一元的に設定・管理できるユーザーインターフェースを提供します。

このガイドでは、専用サーバーに自分のPterodactylインスタンスをセットアップするための手順を紹介します。

<InlineVoucher />

## 準備

Pterodactylパネルをインストールするには、Linuxが動作する専用サーバーが必要です。以下の表にある対応OSのいずれかを使用してください。

| OS     | 対応バージョン       |
| ------ | ------------------- |
| Ubuntu | 20.04, 22.04        |
| CentOS | 7, 8                |
| Debian | 11, 12              |

## 依存関係

Pterodactylを正常にインストール・実行するには、いくつかの依存関係が必要です。また、PHPの依存関係マネージャーであるComposerも利用します。

### 依存関係リスト

このガイドで必要な依存関係のリストです。次のセクションでインストール方法を解説します。

- PHP 8.1（拡張機能：cli, openssl, gd, mysql, PDO, mbstring, tokenizer, bcmath, xmlまたはdom, curl, zip, fpm）
- MariaDB
- Webサーバー - 本ガイドではNginxを使用します。
- curl
- tar
- unzip
- git
- composer v2

### 依存関係のインストール

まず、OSにデフォルトでないパッケージを追加できるように、以下のコマンドを実行します。

```bash
apt -y install software-properties-common curl apt-transport-https ca-certificates gnupg
```

次に、PHP、Redis、MariaDB（MySQL）の追加リポジトリをインストールします。

```bash
LC_ALL=C.UTF-8 add-apt-repository -y ppa:ondrej/php
```

一時データ保存に必要なRedisもインストールします。

```bash
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list
```

Webサーバーには信頼性が高くオープンソースのNginxを選びました。ApacheやCaddyなど他のWebサーバーも使えますが、本ガイドには適していません。

```bash
sudo apt install nginx # Nginxのインストール
sudo ufw allow 'Nginx Full' # ファイアウォールの調整
```

`http://[your_serverip]/` にアクセスして、Nginxが正常に動作しているか確認しましょう。デフォルトのウェルカムページが表示されるはずです。

続いて、MySQLデータベースとして使うMariaDBをインストールします。

```bash
curl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash
```

最後にリポジトリを更新し、残りの依存関係をインストールします。

```bash
apt update
apt -y install php8.1 php8.1-{common,cli,gd,mysql,mbstring,bcmath,xml,fpm,curl,zip} mariadb-server nginx tar unzip git redis-server
```

これで必要な依存関係がすべてインストールされました。次はComposerのインストールに進みましょう。

### Composerのインストール

主要な依存関係が揃ったので、PHPの依存関係マネージャーであるComposerをインストールします。これにより、Pterodactylサービス全体を簡単にダウンロード・インストールできます。

以下のコマンドを実行してください。

```bash
curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer
```

## パネルのダウンロード

すべての準備が整ったので、Pterodactylパネルをインストールします。

まず、パネルを保存するフォルダを作成します。

```bash
mkdir /var/www/pterodactyl
cd /var/www/pterodactyl
```

次に、公式Pterodactyl GitHubリポジトリから必要なファイルをクローンします。

```bash
curl -Lo panel.tar.gz https://github.com/pterodactyl/panel/releases/latest/download/panel.tar.gz
tar -xzvf panel.tar.gz
chmod -R 755 storage/* bootstrap/cache/
```

クローンが完了すると、パネルのダウンロードが成功しています。次のセクションでは、パネルが正しくインストールされ、正常に動作するように各種設定を行います。

## インストール

インストールの最初のステップは、Pterodactylパネルのデータを保存するMySQLデータベースのセットアップです。すでに適切なユーザーを持つMySQLデータベースがある場合は、次のサブセクションをスキップして進めてください。

### データベースのセットアップ

MySQLにログインします。新規インスタンスの場合は以下のコマンドでログイン可能です。

```
mysql -u root -p
```

既存のMySQLインスタンスがある場合は、`-u`にユーザー名、`-p`でパスワード入力を行います。

ログイン後、Pterodactyl用の新しいユーザーを作成します。`[your_password]`は任意のパスワードに置き換えてください。

```sql
CREATE USER 'pterodactyl'@'127.0.0.1' IDENTIFIED BY '[your_password]';
```

ユーザーができたら、Pterodactyl用のデータベースを作成し、新ユーザーに権限を付与します。

```sql
CREATE DATABASE panel;
GRANT ALL PRIVILEGES ON panel.* TO 'pterodactyl'@'127.0.0.1' WITH GRANT OPTION;
```

これでMySQLユーザーとデータベースのセットアップが完了しました。`exit`コマンドでMySQL管理画面を終了してください。

### セットアップの続き

次に、環境設定ファイルのコピーを行います。

```bash
cp .env.example .env
```

続いて、Composerを使って必要なパッケージを自動インストールします。

```bash
composer install --no-dev --optimize-autoloader
```

アプリケーション用の暗号化キーを生成します。

```bash
php artisan key:generate --force
```

### 環境設定

Pterodactylインスタンスの設定を行います。以下のコマンドを実行すると、セッション、メール、キャッシュなど幅広い設定を対話形式で行えます。

```bash
php artisan p:environment:setup # 最初のコマンド
php artisan p:environment:database # 次のコマンド
```

### データベースのセットアップ

パネル稼働に必要な基本データをセットアップします。先ほど作成したデータベースを使います。

:::info
処理には数分かかる場合があります。途中で終了しないように注意してください。気長にお待ちください :)
:::

```bash
php artisan migrate --seed --force
```

### 管理者ユーザーの作成

データベース準備ができたら、最初の管理者ユーザーを作成してパネルにログインできるようにします。

```bash
php artisan p:user:make
```

### パーミッションの設定

パネルのファイルに対して、常に読み書き可能なように適切なパーミッションを設定します。

```bash
chown -R www-data:www-data /var/www/pterodactyl/*
```

これで、以下のURLにアクセスすればPterodactylパネルに入れます。`your_ipaddress`はサーバーのIPに置き換えてください。

```
http://[your_ipaddress]/
```

### キュー・ワーカーの設定

最後に、定期的に動作するcronジョブと、バックグラウンドで多くのタスクを処理するキュー・ワーカーを設定します。

まず、`sudo crontab -e`でcrontabを開き、以下の行を追加して毎分Pterodactylのスケジュールを実行します。

```bash
* * * * * php /var/www/pterodactyl/artisan schedule:run >> /dev/null 2>&1
```

次に、`systemd`を使ってキュー・ワーカーを常駐させます。

以下のコマンドでnanoエディタを開きます。

```
nano /etc/systemd/system/pteroq.service
```

以下の内容をコピー＆ペーストしてください。

```
# Pterodactyl Queue Worker File
# ----------------------------------

[Unit]
Description=Pterodactyl Queue Worker
After=redis-server.service

[Service]
# 一部のシステムではユーザーやグループ名が異なる場合があります。
# apacheやnginxユーザーを使う場合もあります。
User=www-data
Group=www-data
Restart=always
ExecStart=/usr/bin/php /var/www/pterodactyl/artisan queue:work --queue=high,standard,low --sleep=3 --tries=3
StartLimitInterval=180
StartLimitBurst=30
RestartSec=5s

[Install]
WantedBy=multi-user.target
```

:::note
CentOSを使っている場合は、`redis-server.service`を`redis.service`に置き換えてください。
:::

保存は `CTRL + X`、続いて `Y` を押して確定します。

最後に、redisサービスと作成したサービスを起動時に有効化します。

```
sudo systemctl enable --now redis-server
sudo systemctl enable --now pteroq.service
```

これでサーバーにPterodactylのインストールが完了しました。以下のURLでパネルにアクセスできます。`[your_serverip]`は自分のサーバーIPに置き換えてください。

```
http://[your_serverip]
```

## オプション：Webサーバーの設定

追加機能として、Webサーバーの設定を行うこともできます。本ガイドではNginxを使っているので、その設定方法を紹介します。

Webサーバーを設定するメリットは、パネルを自分のドメインで運用できたり、SSL証明書を設定して安全にアクセスできるようになることです。

### ドメインのDNSレコード設定

サーバーをドメインでアクセス可能にするには、そのドメインに対して`A`タイプのDNSレコードを設定する必要があります。これは利用しているドメイン管理サービスの「DNSパネル」などから設定可能です。レコードの内容は、あなたのサーバーのIPアドレスを指定してください。

![](https://screensaver01.zap-hosting.com/index.php/s/EsGB6DaTC65Fce8/preview)

### デフォルト設定の削除

まずはNginxのデフォルト設定を削除します。

```bash
rm /etc/nginx/sites-enabled/default
```

ここからは、SSLを使うかどうかで設定内容が少し変わるので、どちらかを選んでください。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Nginx With SSL" label="Nginx With SSL" default>

### Certbotのセットアップ

SSL証明書を自動管理・更新するために、オープンソースのCertbotを使います。

まずはCertbotとNginx用のpython3パッケージをインストールします。

```bash
sudo apt update
sudo apt install -y certbot
sudo apt install -y python3-certbot-nginx
```

次に、証明書発行のための検証を行います。ここではHTTPチャレンジより安全なDNSチャレンジを使います。

使いたいドメインに対して`TXT`タイプのDNSレコードを作成してください。これもドメイン管理サービスのDNSパネルから設定します。

以下のコマンドを実行すると、DNSレコードに設定すべき値が表示されます。`[your_domain]`は使いたいドメインに置き換えてください。

```bash
certbot -d [your_domain] --manual --preferred-challenges dns certonly
```

DNSレコードを設定したら、証明書の自動更新用にcronジョブを設定します。`sudo crontab -e`でcrontabを開き、以下の行を追加してください。毎日23時に証明書を更新し、更新後にNginxを再起動します。

```bash
0 23 * * * certbot renew --quiet --deploy-hook "systemctl restart nginx"
```

#### 設定ファイルの作成

SSL証明書が準備できたら、Nginxの設定ファイルを作成します。

以下のコマンドでnanoエディタを開きます。

```bash
nano /etc/nginx/sites-enabled/pterodactyl.conf
```

以下の内容をコピーして貼り付けてください。`[your_domain]`は先ほどDNS設定したドメインに置き換えます。

:::warning
SSL証明書が設定されていないと、Webサーバーが正常に起動しません。必ず証明書を用意してください。
:::

```
server_tokens off;

server {
    listen 80;
    server_name [your_domain];
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name [your_domain];

    root /var/www/pterodactyl/public;
    index index.php;

    access_log /var/log/nginx/pterodactyl.app-access.log;
    error_log  /var/log/nginx/pterodactyl.app-error.log error;

    client_max_body_size 100m;
    client_body_timeout 120s;

    sendfile off;

    ssl_certificate /etc/letsencrypt/live/[your_domain]/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/[your_domain]/privkey.pem;
    ssl_session_cache shared:SSL:10m;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers "ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384";
    ssl_prefer_server_ciphers on;

    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";
    add_header X-Robots-Tag none;
    add_header Content-Security-Policy "frame-ancestors 'self'";
    add_header X-Frame-Options DENY;
    add_header Referrer-Policy same-origin;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_pass unix:/run/php/php8.1-fpm.sock;
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param PHP_VALUE "upload_max_filesize = 100M \n post_max_size=100M";
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_param HTTP_PROXY "";
        fastcgi_intercept_errors off;
        fastcgi_buffer_size 16k;
        fastcgi_buffers 4 16k;
        fastcgi_connect_timeout 300;
        fastcgi_send_timeout 300;
        fastcgi_read_timeout 300;
        include /etc/nginx/fastcgi_params;
    }

    location ~ /\.ht {
        deny all;
    }
}
```

</TabItem>
<TabItem value="Nginx Without SSL" label="Nginx Without SSL">

#### 設定ファイルの作成

以下のコマンドでnanoエディタを開きます。

```bash
nano /etc/nginx/sites-enabled/pterodactyl.conf
```

以下の内容をコピーして貼り付けてください。`[your_domain]`はDNSレコードを設定したドメインに置き換えます。

:::warning
SSL証明書が設定されていないと、Webサーバーが正常に起動しません。必ず証明書を用意してください。
:::

```
server {
    listen 80;
    server_name [your_domain];

    root /var/www/pterodactyl/public;
    index index.html index.htm index.php;
    charset utf-8;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    access_log off;
    error_log  /var/log/nginx/pterodactyl.app-error.log error;

    client_max_body_size 100m;
    client_body_timeout 120s;

    sendfile off;

    location ~ \.php$ {
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_pass unix:/run/php/php8.1-fpm.sock;
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param PHP_VALUE "upload_max_filesize = 100M \n post_max_size=100M";
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_param HTTP_PROXY "";
        fastcgi_intercept_errors off;
        fastcgi_buffer_size 16k;
        fastcgi_buffers 4 16k;
        fastcgi_connect_timeout 300;
        fastcgi_send_timeout 300;
        fastcgi_read_timeout 300;
    }

    location ~ /\.ht {
        deny all;
    }
}
```
</TabItem>
</Tabs>

### 設定の適用

設定ファイルを作成したら、以下のコマンドで有効化し、Nginxを再起動します。

```bash
sudo ln -s /etc/nginx/sites-available/pterodactyl.conf /etc/nginx/sites-enabled/pterodactyl.conf # CentOSでは不要

sudo systemctl restart nginx # Nginxの再起動
```

これで設定は完了です。設定したドメインでPterodactylパネルにアクセスできるはずです。

ドメインでのアクセスとSSL証明書の設定が無事に完了しました。

<InlineVoucher />