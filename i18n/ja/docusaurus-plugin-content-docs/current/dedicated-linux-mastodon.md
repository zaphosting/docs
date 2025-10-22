---
id: dedicated-linux-mastodon
title: "専用サーバー：Mastodonのインストール"
description: "Debian系サーバーで安全なセルフホスト型Mastodonソーシャルネットワークをセットアップして、独立したマイクロブログを始めよう → 今すぐ詳しく見る"
sidebar_label: Mastodonをインストール
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Mastodonは、セルフホスト型のソーシャルネットワーキングサービスを運用するための無料かつオープンソースのソフトウェアです。

![](https://screensaver01.zap-hosting.com/index.php/s/oNCpfBwLNB5f79P/preview)

X（旧Twitter）に似たマイクロブログ機能を持ち、多数の独立運営されるノード（インスタンス）によって提供されています。各インスタンスは独自の行動規範、利用規約、プライバシーポリシー、プライバシー設定、モデレーションポリシーを持っています。
:::info
このガイドはDebian系ディストリビューションへのインストールに焦点を当てています。DebianやUbuntuが例です。使用するOSによって手順が異なります。
:::

<InlineVoucher />

## システム要件
Mastodonインスタンスをサーバーにセットアップするには、以下の要件を満たす必要があります。
- ドメイン
- Linuxベースのサーバー
- メールサーバー

## システムの準備
インターネットからアクセス可能なサーバーでパスワードログインはセキュリティリスクなので、事前にSSHのパスワードログインを無効化することを推奨します。
サーバーのWebインターフェースの「情報」→「アクセス＆セキュリティ」→「パスワードログインを無効化」から設定可能です。
![](https://screensaver01.zap-hosting.com/index.php/s/k6bBoxt7HJ4jqnL/preview)

その後、以下のコマンドでパッケージをアップデートします：
```
apt update && apt upgrade -y
```

次にMastodonの依存関係をインストールします：
```bash
# システムリポジトリ
apt install -y curl wget gnupg apt-transport-https lsb-release ca-certificates
# Node.JS
curl -sL https://deb.nodesource.com/setup_16.x | bash -
# PostgreSQL
wget -O /usr/share/keyrings/postgresql.asc https://www.postgresql.org/media/keys/ACCC4CF8.asc
echo "deb [signed-by=/usr/share/keyrings/postgresql.asc] http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/postgresql.list
```

依存関係をインストールしたら、必要なシステムパッケージを以下の2つのコマンドでインストールします：
```bash
apt update
apt install -y \
  imagemagick ffmpeg libpq-dev libxml2-dev libxslt1-dev file git-core \
  g++ libprotobuf-dev protobuf-compiler pkg-config nodejs gcc autoconf \
  bison build-essential libssl-dev libyaml-dev libreadline6-dev \
  zlib1g-dev libncurses5-dev libffi-dev libgdbm-dev \
  nginx redis-server redis-tools postgresql postgresql-contrib \
  certbot python3-certbot-nginx libidn11-dev libicu-dev libjemalloc-dev
```
インストールには時間がかかる場合があります。終わったら、Node.JSのパッケージマネージャーであるyarnを設定します：
```bash
corepack enable
yarn set version stable
```

## Rubyのインストール
Rubyのバージョン管理を楽にするために、mastodonというログイン無効のユーザーを作成し、そのユーザーに切り替えます：
```bash
# フィールドは空のままでOK
adduser --disabled-login mastodon
su - mastodon
```

次にRubyマネージャーの`rbenv`をインストールします。以下のコマンドを実行してください：
```bash
git clone https://github.com/rbenv/rbenv.git ~/.rbenv
cd ~/.rbenv && src/configure && make -C src
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
exec bash
git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
```
これが終わったら、Rubyとbundlerをインストールします：
```bash
RUBY_CONFIGURE_OPTS=--with-jemalloc rbenv install 3.0.3
rbenv global 3.0.3
gem install bundler --no-document
```
時間がかかるので、待っている間にお茶やコーヒーをどうぞ。セットアップが完了したら、`exit`コマンドでrootユーザーに戻れます。

## PostgreSQLの設定
MastodonはデータベースにPostgreSQLを使用します。以下のコマンドで設定を行います：
```bash
sudo -u postgres psql
```

PostgreSQLプロンプト内で以下を入力：
```sql
CREATE USER mastodon CREATEDB;
\q
```

## Mastodonのセットアップ
再度mastodonユーザーに切り替えます：
```bash
su - mastodon
```
gitを使って最新のMastodonをダウンロードします：
```bash
git clone https://github.com/tootsuite/mastodon.git live && cd live
git checkout $(git tag -l | grep -v 'rc[0-9]*$' | sort -V | tail -n 1)
```
RubyとJavascriptの最後の依存関係をインストールします：
```bash
bundle config deployment 'true'
bundle config without 'development test'
bundle install -j$(getconf _NPROCESSORS_ONLN)
yarn install --pure-lockfile
```
次にMastodonの設定ファイルを作成します：
```bash
RAILS_ENV=production bundle exec rake mastodon:setup
```
:::info
もしデータベースのセットアップに失敗したら、`sudo -u postgres psql`でPostgreSQLにログインし、以下のドキュメントを参照してください：

https://gist.github.com/amolkhanorkar/8706915
:::

設定が終わったら、`exit`でrootユーザーに戻ります。

## Webサーバーの設定
ここが少し難しいところです。まずDNSにAレコードやAAAAレコードを作成し、サーバーのIPアドレスを指すようにします。もしくはルートレコードをサーバーに向けてもOKです。

次に以下の2つのコマンドでMastodonのWebサーバー設定をコピーして有効化します：
```bash
cp /home/mastodon/live/dist/nginx.conf /etc/nginx/sites-available/mastodon
ln -s /etc/nginx/sites-available/mastodon /etc/nginx/sites-enabled/mastodon
```

その後、`/etc/nginx/sites-available/mastodon`をvimやnanoなどのテキストエディタで開き、`example.com`をあなたのドメインに書き換えます。

次にSSL証明書を取得します。以下のコマンドで簡単にできます：
```bash
certbot --nginx -d <your domain>
```
ドメインを入力し、いくつかの質問に答えます。最後にHTTPリクエストをHTTPSに自動リダイレクトするか聞かれるので、有効化をおすすめします。

## Mastodonサービスの作成
最後にMastodonのシステムサービスを作成します。以下のコマンドでサービス設定をコピーします：
```sh
cp /home/mastodon/live/dist/mastodon-*.service /etc/systemd/system/
```

次にサービスを有効化して起動します：
```sh
systemctl daemon-reload
systemctl enable --now mastodon-web mastodon-sidekiq mastodon-streaming
```

再起動後にセットアップ完了です。インスタンスを楽しんでください！

<InlineVoucher />