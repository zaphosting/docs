---
id: vserver-linux-databases
title: "VPS: データベースのインストール"
description: "Linuxでのさまざまなデータベースのインストールと設定方法を紹介。パフォーマンスとセキュリティを向上させよう → 今すぐチェック"
sidebar_label: データベースのインストール
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

このガイドでは、さまざまな種類のデータベースのインストール手順を紹介します。例としてUbuntu 20.04をOSに使用していますが、当サイトで提供している他のLinuxディストリビューション向けの同等のコマンドも記載しています。これらのコマンドはSSH経由で実行する必要があります。SSHでサーバーに接続する方法がわからない場合は、こちらをご覧ください：[初回アクセス（SSH）](vserver-linux-ssh.md)。

<InlineVoucher />

## 準備

データベースのインストールを始める前に、まずシステムが最新の状態であることを確認しましょう。OSに応じて、以下のコマンドでパッケージマネージャーのパッケージを更新してください：

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

インストールしたいデータベースサービスに応じて、該当のガイドに従ってください：

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="mariadb" label="MariaDB (MySQL)" default>

## MariaDBとは？

MariaDBはMySQLからフォークされたオープンソースのリレーショナルデータベース管理システムです。パフォーマンスやセキュリティの向上、継続的な開発が特徴です。特にストレージエンジンの改善があり、MySQLとの完全な互換性を持つアーキテクチャを備えています。MySQLよりMariaDBをおすすめします。

## MariaDBのインストール

まず、最新のMariaDBバージョンがインストールされるように確認します。Debian 9やUbuntu 18.04などの古いOSでは、標準のパッケージマネージャーに最新のMariaDBが含まれていないため、以下のコマンドで最新バージョンを取得できるようにします。

```
curl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash
```

リポジトリを追加したら、[準備ステップ](#準備)の手順に従ってパッケージマネージャーのキャッシュを更新してください。

:::info
MariaDBリポジトリの追加（上記のステップ）は、Ubuntu 22.04やDebian 11などの最新OSでは無視しても問題ありません。
:::

リポジトリのセットアップが完了したら、`mariadb-server`パッケージをインストールしてMariaDBのインストールを開始します。OSに応じて以下のコマンドを実行してください：

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

インストールが完了したら、以下のコマンドでサーバーの設定を開始します：

```
mysql_secure_installation
```

プロンプトに従ってMariaDB（MySQL）サーバーの設定を行い、サーバーのパスワードを設定してください。次のプロンプトでは、今は入力をスキップするために**Enter**を押して構いません。

![](https://screensaver01.zap-hosting.com/index.php/s/S8mibcHmaAcetqJ/preview)

:::info
rootユーザーはMariaDB（MySQL）サーバーのメインユーザーです！
:::

次にrootユーザーのパスワードを設定するか聞かれます。**y**で承認し、新しいパスワードを入力してください。

:::note
パスワード入力中は画面に表示されませんが、これは正常な挙動です。rootユーザーには安全なパスワードを設定し、大切に保管してください。
:::

続いて、匿名ユーザーを削除するか聞かれます。セキュリティのため必ず**y**で承認しましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/7q2kGxDXTfWg36m/preview)

次のプロンプトではrootユーザーの外部接続を許可するか聞かれます。セキュリティ上、無効にして**y**で承認することをおすすめします。

![](https://screensaver01.zap-hosting.com/index.php/s/PcpJ6boNspf2fPo/preview)

次にMariaDB（MySQL）が提供するテスト用データベースを削除するか聞かれます。不要なので**y**で承認してください。

![](https://screensaver01.zap-hosting.com/index.php/s/9HfkcaLjGXjEwK7/preview)

最後にデータベースの権限を更新するか聞かれます。rootユーザーのパスワードを有効にするために**y**で承認しましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/QiBNQYFiwJM4CcA/preview)

これでMariaDB（MySQL）サーバーの準備が完了です！

![](https://screensaver01.zap-hosting.com/index.php/s/zkKoTX7GbbKgj2M/preview)
</TabItem>

<TabItem value="redis" label="Redis">

## Redisとは？

Redisはインメモリのデータ構造ストアで、主にキー・バリュー形式のデータ保存に使われますが、リストやJSONなど他の形式もサポートしています。高速でミリ秒単位の応答を提供するのが特徴です。

## Redisのインストール

まず、Redisをインストールするためのリポジトリを追加します。このステップはすべてのLinuxディストリビューションで必要なわけではなく、以下のOSでのみ必要です。お使いのOSとバージョンに合ったコマンドを実行してください：

```
// Ubuntu（全バージョン）とDebian（Debian 10のみ）
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list

// CentOS（CentOS 7のみ）
sudo yum install epel-release

// CentOS（CentOS 8のみ）
sudo dnf install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
```

リポジトリを追加したら、[準備ステップ](#準備)の手順に従ってパッケージマネージャーのキャッシュを更新してください。

:::info
上記にお使いのOSがない場合、このステップは不要です。
:::

リポジトリの追加が完了したら、Redisサーバーパッケージのインストールに進みます。OSに応じて以下のコマンドを実行してください：

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

インストールが完了すればRedisサーバーはすぐに使えます！デフォルトでは127.0.0.1:6379でパスワードなしで動作します。

:::caution 
Debian/Ubuntuユーザー向け：
インストール後、Redisサーバーがサーバー起動時に自動で起動するようにサービスを有効化してください。以下のコマンドで設定できます：
```
sudo systemctl enable --now redis-server
```
:::

</TabItem>

<TabItem value="mongodb" label="MongoDB">

## MongoDBとは？
MongoDBはドキュメント指向のNoSQLデータベースで、スケーラビリティと開発者の柔軟性を重視しています。JSONに似たBSON形式でデータを保存し、多様なデータタイプを扱えます。インデックスを使って応答時間を短縮でき、MySQLやSQLiteのような固定スキーマを持たないため、素早く柔軟に開発できます。

## MongoDBのインストール

以下のタブからお使いのOSを選択し、対応するガイドを表示してください。

<Tabs>
<TabItem value="mongodb-ubuntu-debian" label="Ubuntu & Debian">

### Ubuntu & Debianでのインストール

まず、MongoDBの公開GPGキーをインポートします：

```
curl -fsSL https://pgp.mongodb.com/server-6.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-6.0.gpg \
   --dearmor
```

次に、MongoDBのリポジトリをOSのソースリストに追加します。以下のコマンドを実行してください：

```
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-6.0.gpg ] https://repo.mongodb.org/apt/$(lsb_release -si | awk '{print tolower($0)}') $(lsb_release -sc)/mongodb-org/6.0 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
```

これでパッケージマネージャーからMongoDB Community Editionをインストールできますが、その前にリポジトリを更新するために`sudo apt update`を実行してください。最後にMongoDBをインストールします：

```
sudo apt install mongodb-org
```

これでMongoDBのインストールは完了です！

</TabItem>
<TabItem value="mongodb-centos-fedora" label="CentOS & Fedora">

### CentOS & Fedoraでのインストール

まず、Red Hat系システム用のMongoDBリポジトリを設定します。

`/etc/yum.repos.d/mongodb-org-6.0.repo`というファイルを作成し、以下の内容を貼り付けてください：

```
[mongodb-org-6.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/6.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-6.0.asc
```

これでMongoDBをインストールできます。CentOSとFedoraでインストールコマンドが少し異なるので、該当するコマンドを使ってください：

```
// CentOS
sudo yum install -y mongodb-org

// Fedora
sudo dnf install -y mongodb-org
```

これでMongoDBのインストールは完了です。ほかのLinuxディストリビューションより簡単ですよ！

</TabItem>
<TabItem value="mongodb-suse" label="OpenSUSE">

### OpenSUSEでのインストール

まず、MongoDBリポジトリの公開鍵をインポートします：

```
sudo rpm --import https://www.mongodb.org/static/pgp/server-6.0.asc
```

次に、MongoDBリポジトリを追加します：

```
sudo zypper addrepo --gpgcheck "https://repo.mongodb.org/zypper/suse/15/mongodb-org/6.0/x86_64/" mongodb
```

最後に、最新のMongoDBをインストールします：

```
sudo zypper -n install mongodb-org
```

これでMongoDBのインストールは完了です！

</TabItem>
</Tabs>

</TabItem>
</Tabs>


## まとめ

おめでとうございます、データベースのインストールと設定が無事完了しました！もし質問や問題があれば、毎日対応しているサポートチームまでお気軽にお問い合わせください！

<InlineVoucher />