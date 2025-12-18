---
id: vserver-linux-mastodon
title: "VPS: Mastodonのインストール"
description: "Debian系サーバーで安全なセルフホスト型Mastodonソーシャルネットワークをセットアップして、完全なコントロールとプライバシーを実現 → 今すぐ詳しくチェック"
sidebar_label: Mastodonをインストール
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Mastodonは、セルフホスト型のソーシャルネットワーキングサービスを運用するための無料かつオープンソースのソフトウェアです。

![](https://screensaver01.zap-hosting.com/index.php/s/tprjy6DYmZNWSDH/preview)

X（旧Twitter）に似たマイクロブログ機能を持ち、多数の独立運営ノード（インスタンス）によって提供されています。各インスタンスは独自の行動規範、利用規約、プライバシーポリシー、プライバシー設定、モデレーションポリシーを持っています。
:::info
このガイドはDebian系ディストリビューションへのインストールにフォーカスしています。DebianやUbuntuが例です。使用するOSによって手順が異なる場合があります。
:::

<InlineVoucher />

## システム要件
Mastodonインスタンスをサーバーにセットアップするには、以下の要件を満たす必要があります。
- ドメイン
- Linuxベースのサーバー
- メールサーバー

## システムの準備
インターネットからアクセス可能なサーバーでパスワードログインはセキュリティリスクなので、事前にSSHのパスワードログインを無効化することをおすすめします。
サーバーのWebインターフェースの「情報」→「アクセス＆セキュリティ」→「パスワードログインを無効化」から設定可能です。
![](https://screensaver01.zap-hosting.com/index.php/s/jYHPGg6t9qJn3gD/preview)

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
インストールには時間がかかる場合があります。終わったら、Node.JS用のパッケージマネージャーyarnを設定します：
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
完了したら、Rubyとbundlerをインストールします：
```bash
RUBY_CONFIGURE_OPTS=--with-jemalloc rbenv install 3.0.3
rbenv global 3.0.3
gem install bundler --no-document
```
時間がかかるので、待っている間にお茶やコーヒーをどうぞ。セットアップが終わったら、`exit`コマンドでrootユーザーに戻れます。

## PostgreSQLの設定
MastodonはPostgreSQLをデータベースとして使用します。以下のコマンドで設定します：
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
最新のMastodonをgitでダウンロードします：
```bash
git clone https://github.com/tootsuite/mastodon.git live && cd live
git checkout $(git tag -l | grep -v 'rc[0-9]*$' | sort -V | tail -n 1)
```
RubyとJavascriptの依存関係をインストールします：
```bash
bundle config deployment 'true'
bundle config without 'development test'
bundle install -j$(getconf _NPROCESSORS_ONLN)
yarn install --pure-lockfile
```
Mastodonの設定ファイルを作成します：
```bash
RAILS_ENV=production bundle exec rake mastodon:setup
```
:::info
データベース設定に失敗した場合は、`sudo -u postgres psql`でPostgreSQLにログインし、以下のドキュメントを参照してください：

https://gist.github.com/amolkhanorkar/8706915
:::

設定後、`exit`でrootユーザーに戻ります。

## Webサーバーの設定
ここが少し難しい部分です。まずDNSにAレコードまたはAAAAレコードを作成し、サーバーのIPアドレスを指すようにします。もしくはルートレコードをサーバーに向けてもOKです。

次に以下のコマンドでMastodonのnginx設定をコピーして有効化します：
```bash
cp /home/mastodon/live/dist/nginx.conf /etc/nginx/sites-available/mastodon
ln -s /etc/nginx/sites-available/mastodon /etc/nginx/sites-enabled/mastodon
```

`/etc/nginx/sites-available/mastodon`をvimやnanoなどで開き、`example.com`を自分のドメインに書き換えます。

次にSSL証明書を取得します。以下のコマンドで簡単にできます：
```bash
certbot --nginx -d <your domain>
```
ドメインを入力し、いくつかの質問に答えます。最後にHTTPからHTTPSへの自動リダイレクトを聞かれたら、オンにすることをおすすめします。

## Mastodonサービスの作成
最後にMastodonのシステムサービスを作成します。以下のコマンドでサービス設定をコピーします：
```sh
cp /home/mastodon/live/dist/mastodon-*.service /etc/systemd/system/
```

サービスを有効化して起動します：
```sh
systemctl daemon-reload
systemctl enable --now mastodon-web mastodon-sidekiq mastodon-streaming
```

## まとめ

おめでとう！Mastodonのインストールと設定が無事完了しました！もし質問や問題があれば、毎日対応しているサポートチームまで気軽にお問い合わせくださいね！



<InlineVoucher />