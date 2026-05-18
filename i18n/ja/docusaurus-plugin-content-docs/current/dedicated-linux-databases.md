---
id: dedicated-linux-databases
title: "Linuxサーバーでデータベースをセットアップ - データベースサービスの導入と管理"
description: "Ubuntuやその他のLinuxディストリビューションで様々なデータベースをインストール・設定し、パフォーマンスとセキュリティを強化 → 今すぐ詳しくチェック"
sidebar_label: データベースのインストール
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

このガイドでは、さまざまな種類のデータベースのインストール手順を紹介します。例としてUbuntu 20.04を使用していますが、当サイトで提供している他のLinuxディストリビューション向けの同等のコマンドも記載しています。これらのコマンドはSSH経由で実行する必要があります。SSHでサーバーに接続する方法がわからない場合は、こちらをご覧ください：[初回アクセス（SSH）](vserver-linux-ssh.md)。

## One Click Appsインストーラーでデータベースをインストール

VPSのウェブインターフェースにある**One Click Appsインストーラー**から直接**データベース**をインストールできます。初期アプリ設定が完了したら、アプリカタログを開き、**データベース**を検索。お好みのプロジェクト、環境、ドメイン設定でデプロイを開始しましょう。コマンドラインでの手動セットアップなしで、統合されたウェブベースの管理、カスタムドメイン対応、SSL発行（対応している場合）などのメリットを享受しながら、素早く簡単に**データベース**を展開・管理できます。

## 準備

データベースのインストールを始める前に、まずシステムを最新の状態にしておく必要があります。お使いのOSに応じて、以下のコマンドでパッケージマネージャーのパッケージを更新してください。

```
// Ubuntu & Debian
sudo apt update

// CentOS
sudo yum update

// OpenSUSE
sudo zypper up

// Fedora
sudo dnf upgrade --refresh
```

## データベースの種類

インストールしたいデータベースサービスに応じて、該当するガイドに従ってください。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="mariadb" label="MariaDB (MySQL)" default>

## MariaDBとは？

MariaDBはMySQLからフォークされたオープンソースのリレーショナルデータベース管理システムです。パフォーマンスやセキュリティの向上、継続的な開発が特徴。特にストレージエンジンの改善があり、MySQLとの完全な互換性を持つアーキテクチャを提供しています。MySQLよりMariaDBを推奨します。

## MariaDBのインストール

まず、最新のMariaDBバージョンがインストールされるように確認します。Debian 9やUbuntu 18.04など古いOSでは、標準のパッケージマネージャーに最新MariaDBが含まれていないため、以下のコマンドで最新リポジトリを追加します。

```
curl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash
```

リポジトリを追加したら、準備ステップの手順に従ってパッケージマネージャーのキャッシュを更新してください。

:::info
MariaDBリポジトリの追加（上記のステップ）は、Ubuntu 22.04やDebian 11などの最新OSでは無視しても問題ありません。
:::

リポジトリ設定が完了したら、`mariadb-server`パッケージをインストールします。OSに応じて以下のコマンドを実行してください。

```
// Ubuntu & Debian
sudo apt install mariadb-server

// CentOS
sudo yum install mariadb-server

// OpenSUSE
sudo zypper install mariadb

// Fedora
sudo dnf install mariadb-server
```

## MariaDBの設定

インストール完了後、以下のコマンドでサーバーの設定を開始します。

```
mysql_secure_installation
```

プロンプトに従ってMariaDB（MySQL）サーバーを設定し、rootユーザーのパスワードを設定しましょう。次のプロンプトは**Enter**キーでスキップできます。

![](https://screensaver01.zap-hosting.com/index.php/s/sYDegXcMZwCoZzJ/preview)

:::info
rootユーザーはMariaDB（MySQL）サーバーのメインユーザーです！
:::

次にrootユーザーのパスワード設定を求められます。**y**で承認し、新しいパスワードを入力してください。

:::note
パスワード入力中は画面に表示されませんが、正常な動作です。安全なパスワードを設定し、大切に保管してください。
:::

続いて匿名ユーザーの削除を求められます。セキュリティのため必ず**y**で承認しましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/9rnHy9dJmezjemq/preview)

次にrootユーザーの外部接続許可について尋ねられます。セキュリティ上、無効にして**y**で承認することを推奨します。

![](https://screensaver01.zap-hosting.com/index.php/s/cEozmgcXDBgaRwY/preview)

続いてMariaDB（MySQL）が提供するテスト用データベースの削除を**y**で承認しましょう。不要なので削除して問題ありません。

![](https://screensaver01.zap-hosting.com/index.php/s/kGHT3tm78dNBTRo/preview)

最後にデータベースの権限を更新するか聞かれます。rootユーザーのパスワードを有効にするため、**y**で承認してください。

![](https://screensaver01.zap-hosting.com/index.php/s/kGNDZkRS4QrpEfF/preview)

これでMariaDB（MySQL）サーバーの準備が完了です！

![](https://screensaver01.zap-hosting.com/index.php/s/nFxJoiYeCp7MYXN/preview)
</TabItem>

<TabItem value="redis" label="Redis">

## Redisとは？

Redisはインメモリのデータ構造ストアで、主にキー・バリュー形式のデータ保存に使われますが、リストやJSONなど他の形式もサポートしています。高速で、ミリ秒単位でクエリに応答するのが特徴です。

## Redisのインストール

まず、Redisをインストールするためのリポジトリを追加します。このステップはすべてのLinuxディストリビューションで必要なわけではなく、以下のOSでのみ必要です。お使いのOSとバージョンに合ったコマンドを実行してください。

```
// Ubuntu（全バージョン）とDebian（Debian 10のみ）
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list

// CentOS（CentOS 7のみ）
sudo yum install epel-release

// CentOS（CentOS 8のみ）
sudo dnf install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
```

リポジトリを追加したら、準備ステップの手順に従ってパッケージマネージャーのキャッシュを更新してください。

:::info
上記にお使いのOSがない場合、このステップは不要です。
:::

リポジトリ追加後、Redisサーバーパッケージをインストールします。OSに応じて以下のコマンドを実行してください。

```
// Ubuntu & Debian
sudo apt install redis-server

// CentOS
sudo yum install redis

// OpenSUSE
sudo zypper install redis

// Fedora
sudo dnf install redis
```

インストール完了後、Redisサーバーはすぐに使用可能です！デフォルトでは127.0.0.1:6379でパスワードなしで動作します。

:::caution 
Debian/Ubuntuユーザー向け：
インストール後、Redisサーバーがサーバーブート時に自動起動するようにサービスを有効化してください。以下のコマンドで実行できます。
```
sudo systemctl enable --now redis-server
```
:::

</TabItem>

<TabItem value="mongodb" label="MongoDB">

## MongoDBとは？
MongoDBはドキュメント指向のNoSQLデータベースで、スケーラビリティと開発者の柔軟性を重視しています。JSONに似たBSON形式でデータを保存し、多様なデータタイプを扱えます。インデックスを使って応答時間を短縮でき、MySQLやSQLiteのような固定スキーマを持たないため、素早く柔軟な開発が可能です。

## MongoDBのインストール

以下のタブからお使いのOSを選択し、対応するガイドを表示してください。

<Tabs>
<TabItem value="mongodb-ubuntu-debian" label="Ubuntu & Debian">

### Ubuntu & Debianでのインストール

まず、MongoDBの公開GPGキーをインポートします。

```
curl -fsSL https://pgp.mongodb.com/server-6.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-6.0.gpg \
   --dearmor
```

次に、MongoDBのリポジトリをOSのソースリストに追加します。以下のコマンドを実行してください。

```
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-6.0.gpg ] https://repo.mongodb.org/apt/$(lsb_release -si | awk '{print tolower($0)}') $(lsb_release -sc)/mongodb-org/6.0 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
```

パッケージマネージャーのリポジトリを更新します。

```
sudo apt update
```

最後にMongoDBをインストールします。

```
sudo apt install mongodb-org
```

これでMongoDBのインストールは完了です！

</TabItem>
<TabItem value="mongodb-centos-fedora" label="CentOS & Fedora">

### CentOS & Fedoraでのインストール

まず、Red Hat系システム用のMongoDBリポジトリを設定します。

`/etc/yum.repos.d/mongodb-org-6.0.repo`というファイルを作成し、以下の内容を貼り付けてください。

```
[mongodb-org-6.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/6.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-6.0.asc
```

次にMongoDBをインストールします。CentOSとFedoraでコマンドが異なるので、該当する方を実行してください。

```
// CentOS
sudo yum install -y mongodb-org

// Fedora
sudo dnf install -y mongodb-org
```

これでMongoDBのインストールは完了です。ほかのLinuxディストリビューションよりも簡単ですよ！

</TabItem>
<TabItem value="mongodb-suse" label="OpenSUSE">

### OpenSUSEでのインストール

まず、MongoDBリポジトリの公開鍵をインポートします。

```
sudo rpm --import https://www.mongodb.org/static/pgp/server-6.0.asc
```

次にMongoDBリポジトリを追加します。

```
sudo zypper addrepo --gpgcheck "https://repo.mongodb.org/zypper/suse/15/mongodb-org/6.0/x86_64/" mongodb
```

最後にMongoDBをインストールします。

```
sudo zypper -n install mongodb-org
```

これでMongoDBのインストールは完了です！

</TabItem>
</Tabs>

</TabItem>
</Tabs>