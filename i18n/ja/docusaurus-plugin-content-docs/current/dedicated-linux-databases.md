---
id: dedicated-linux-databases
title: "専用サーバー：データベースのインストール"
description: "Ubuntuやその他のLinuxディストリビューションでの各種データベースのインストールと設定方法を解説 → 今すぐチェック"
sidebar_label: データベースのインストール
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

このガイドでは、さまざまな種類のデータベースのインストール手順を紹介します。例としてUbuntu 20.04を使用していますが、当社のサイトで提供している他のLinuxディストリビューション向けの同等のコマンドも記載しています。これらのコマンドはSSH経由で実行する必要があります。SSHでサーバーに接続する方法がわからない場合は、こちらをご覧ください：[初回アクセス（SSH）](vserver-linux-ssh.md)。

<InlineVoucher />

## 準備

データベースのインストールを始める前に、まずシステムが最新の状態であることを確認しましょう。お使いのOSに応じて、以下のコマンドでパッケージマネージャーのパッケージを更新してください。

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

MariaDBはMySQLからフォークされたオープンソースのリレーショナルデータベース管理システムです。パフォーマンスやセキュリティの向上、継続的な開発が特徴です。特にストレージエンジンの改善があり、MySQLとの完全な互換性を持つアーキテクチャを提供しています。MySQLよりMariaDBを推奨します。

## MariaDBのインストール

まず、最新のMariaDBバージョンがインストールされるように確認します。Debian 9やUbuntu 18.04などの古いOSでは、標準のパッケージマネージャーに最新のMariaDBが含まれていないため、以下のコマンドで最新バージョンを取得できるようにします。

```
curl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash
```

リポジトリを追加したら、[準備](#準備)セクションの手順に従ってパッケージマネージャーのキャッシュを更新してください。

:::info
MariaDBリポジトリの追加（上記のステップ）は、Ubuntu 22.04やDebian 11などの最新OSでは省略しても問題ありません。
:::

リポジトリのセットアップが完了したら、`mariadb-server`パッケージをインストールしてMariaDBのインストールを開始します。OSに応じて以下のコマンドを実行してください。

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

インストールが完了したら、以下のコマンドでサーバーの設定を開始します。

```
mysql_secure_installation
```

プロンプトに従ってMariaDB（MySQL）サーバーの設定を行い、サーバーのパスワードを設定します。次のプロンプトでは、**Enter**キーを押して入力をスキップできます。

![](https://screensaver01.zap-hosting.com/index.php/s/sYDegXcMZwCoZzJ/preview)

:::info
rootユーザーはMariaDB（MySQL）サーバーのメインユーザーです！
:::

次にrootユーザーのパスワードを設定するか尋ねられます。**y**を入力して設定を開始し、新しいパスワードを入力してください。

:::note
パスワード入力中は画面に表示されませんが、これは正常な動作です。rootユーザーには安全なパスワードを設定し、必ず安全な場所に保管してください。
:::

続いて匿名ユーザーを削除するか尋ねられます。セキュリティのため必ず削除しましょう。**y**で承認してください。

![](https://screensaver01.zap-hosting.com/index.php/s/9rnHy9dJmezjemq/preview)

次にrootユーザーの外部接続を許可するか尋ねられます。セキュリティ上、無効にすることを推奨します。**y**で無効化してください。

![](https://screensaver01.zap-hosting.com/index.php/s/cEozmgcXDBgaRwY/preview)

次にMariaDBが提供するテスト用データベースを削除するか尋ねられます。不要なので**y**で削除しましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/kGHT3tm78dNBTRo/preview)

最後にデータベースの権限を更新するか尋ねられます。rootユーザーのパスワードを有効にするため、**y**で承認してください。

![](https://screensaver01.zap-hosting.com/index.php/s/kGNDZkRS4QrpEfF/preview)

これでMariaDB（MySQL）サーバーの準備が完了です！

![](https://screensaver01.zap-hosting.com/index.php/s/nFxJoiYeCp7MYXN/preview)
</TabItem>

<TabItem value="redis" label="Redis">

## Redisとは？

Redisはインメモリのデータ構造ストアで、主にキー・バリュー形式のデータ保存に使われますが、リストやJSONなど他の形式もサポートしています。高速で、ミリ秒単位でクエリに応答するのが特徴です。

## Redisのインストール

まず、Redisをインストールするためのリポジトリを追加します。このステップはすべてのLinuxディストリビューションで必要なわけではなく、以下のOSでのみ必要です。お使いのOSとバージョンに対応するコマンドを実行してください。

```
// Ubuntu（全バージョン）とDebian（Debian 10のみ）
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list

// CentOS（CentOS 7のみ）
sudo yum install epel-release

// CentOS（CentOS 8のみ）
sudo dnf install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
```

リポジトリを追加したら、[準備](#準備)セクションの手順に従ってパッケージマネージャーのキャッシュを更新してください。

:::info
上記にお使いのOSがない場合、このステップは不要です。
:::

リポジトリの追加が完了したら、Redisサーバーパッケージのインストールに進みます。お使いのOSに応じて以下のコマンドを実行してください。

```
// Ubuntu と Debian
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
MongoDBはドキュメント指向のNoSQLデータベースで、スケーラビリティと開発者の柔軟性を重視しています。JSONに似たBSON形式でデータを保存し、多様なデータタイプを扱えます。インデックスを使って応答時間を短縮でき、MySQLやSQLiteのような固定スキーマを持たないため、素早く柔軟に対応可能です。

## MongoDBのインストール

以下のタブからお使いのOSを選択し、該当するガイドを表示してください。

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

これでパッケージマネージャーからMongoDB Community Editionをインストール可能ですが、その前にリポジトリを更新します。

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

まず、Red Hat系システム向けにMongoDBリポジトリを設定します。

`/etc/yum.repos.d/mongodb-org-6.0.repo`というファイルを作成し、以下の内容を貼り付けてください。

```
[mongodb-org-6.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/6.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-6.0.asc
```

これでMongoDBをインストールできます。CentOSとFedoraでインストールコマンドが異なるので、該当するコマンドを実行してください。

```
// CentOS
sudo yum install -y mongodb-org

// Fedora
sudo dnf install -y mongodb-org
```

これでMongoDBのインストールは完了です。ほかのLinuxディストリビューションに比べて簡単です！

</TabItem>
<TabItem value="mongodb-suse" label="OpenSUSE">

### OpenSUSEでのインストール

まず、MongoDBリポジトリの公開キーをインポートします。

```
sudo rpm --import https://www.mongodb.org/static/pgp/server-6.0.asc
```

次に、MongoDBリポジトリを追加します。

```
sudo zypper addrepo --gpgcheck "https://repo.mongodb.org/zypper/suse/15/mongodb-org/6.0/x86_64/" mongodb
```

最後に最新のMongoDBをインストールします。

```
sudo zypper -n install mongodb-org
```

これでMongoDBのインストールは完了です！

</TabItem>
</Tabs>

</TabItem>
</Tabs>

<InlineVoucher />