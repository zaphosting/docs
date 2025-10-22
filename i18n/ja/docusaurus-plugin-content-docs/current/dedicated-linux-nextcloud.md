---
id: dedicated-linux-nextcloud
title: "専用サーバー：Nextcloudのインストール"
description: "LinuxシステムでNextcloudサーバーのパフォーマンスと安定性を最大化する方法をチェック → 今すぐ詳しく見る"
sidebar_label: Nextcloudのインストール
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Nextcloudはオープンソースのクラウドソリューションで、Owncloudのフォークです。2016年に元Owncloud創設者のFrank Kalitschekによって設立されました。

![](https://screensaver01.zap-hosting.com/index.php/s/n2PbXo94RGNdPzt/preview)

Nextcloudサーバーをホスティングする際に、最適なパフォーマンス、安定性、機能性を実現するために以下のセットアップを推奨します。NextcloudサーバーはWindowsやMacOSとは互換性がありません。少なくとも追加の仮想化や類似の回避策なしでは動作しません。<br/>

<InlineVoucher />

## 準備

以下の要件は開発者の推奨と当社の経験に基づいています。これらの前提条件を満たさない場合、問題が発生する可能性があります。

#### ハードウェア

| コンポーネント | 最低要件               | 推奨                      |
| -------------- | ---------------------- | ------------------------- |
| CPU            | 2x 1 GHz               | 4x 2GHz以上               |
| RAM            | 512 MB                 | 4GB以上                   |
| ストレージ     | 10 GB                  | 50GB以上                  |
| 帯域幅         | 100 Mbit/s (上り下り)  | 500 Mbit/s (上り下り) 複数ユーザー利用時に推奨 |

#### ソフトウェア

| プラットフォーム | オプション                                                      |
| ---------------- | -------------------------------------------------------------- |
| OS               | Ubuntu (14.04, 16.04, 18.04), Debian(8,9,10), CentOS 6.5/7     |
| データベース     | MySQLまたはMariaDB 5.5+（推奨）、SQLite（テストや最小構成のみ推奨） |
| Webサーバー      | Apache 2.4 + `mod_php` または `php-fpm`（推奨）                 |
| PHP              | 5.6、7.0（推奨）、7.1（推奨）、7.2                              |

## 準備作業

LinuxサーバーにクラウドをインストールするにはSSHクライアントで接続する必要があります。SSHの使い方がわからない場合は、こちらのガイドを参考にしてください：[初回アクセス（SSH）](vserver-linux-ssh.md)

接続が確立したら、Nextcloudのインストールに必要なパッケージをインストールします。これにはWebサーバーとPHPのインストールが含まれます。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="Debian" label="Debian" default>

<br/>

**Apache（Webサーバー）**

🗄️ Debian 8/9/10:
```
sudo apt update && sudo apt -y upgrade
sudo apt -y install apache2
```

**PHP（ハイパーテキストプリプロセッサ）**

🗄️ Debian 8:
```
# ステップ1: PHP 7.3 PPAリポジトリの追加
sudo apt -y install lsb-release apt-transport-https ca-certificates 
sudo wget -O /etc/apt/trusted.gpg.d/php.gpg https://packages.sury.org/php/apt.gpg
echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/php7.3.list

# ステップ2: PHP 7.3のインストール
sudo apt -y install php7.3

# ステップ3: PHP 7.3拡張モジュールのインストール
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

🗄️ Debian 9:
```
# ステップ1: PHP 7.3 PPAリポジトリの追加
sudo apt -y install lsb-release apt-transport-https ca-certificates 
sudo wget -O /etc/apt/trusted.gpg.d/php.gpg https://packages.sury.org/php/apt.gpg
echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/php7.3.list

# ステップ2: PHP 7.3のインストール
sudo apt -y install php7.3

# ステップ3: PHP 7.3拡張モジュールのインストール
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

🗄️ Debian 10:
```
# ステップ1: PHP 7.3のインストール
sudo apt -y install php php-common

# ステップ2: PHP 7.3拡張モジュールのインストール
sudo apt -y install php-cli php-fpm php-json php-pdo php-mysql php-zip php-gd  php-mbstring php-curl php-xml php-pear php-bcmath
```

PHPのバージョン確認
```
php -v
```

</TabItem>
<TabItem value="Ubuntu" label="Ubuntu">

<br/>

**Apache（Webサーバー）**

🗄️ Ubuntu 16.X/18.X/19.X:
```
sudo apt update && sudo apt -y upgrade
sudo apt-get -y install apache2
```

**PHP（ハイパーテキストプリプロセッサ）**

🗄️ Ubuntu 16.X:
```
# ステップ1: PHP 7.3 PPAの追加
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:ondrej/php

# ステップ2: PHP 7.3のインストール
sudo apt-get update
sudo apt-get install -y php7.3

# ステップ3: PHP 7.3拡張モジュールのインストール
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

🗄️ Ubuntu 18.X:
```
# ステップ1: PHP 7.3 PPAの追加
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:ondrej/php

# ステップ2: PHP 7.3のインストール
sudo apt-get update
sudo apt-get install -y php7.3

# ステップ3: PHP 7.3拡張モジュールのインストール
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

🗄️ Ubuntu 19.X:
```
# ステップ1: PHP 7.3 PPAの追加
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:ondrej/php

# ステップ2: PHP 7.3のインストール
sudo apt-get update
sudo apt-get install -y php7.3

# ステップ3: PHP 7.3拡張モジュールのインストール
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

PHPのバージョン確認
```
php -v
```

</TabItem>
<TabItem value="CentOS" label="CentOS">
<br/>

**Apache（Webサーバー）**

🗄️ CentOS 6:
```
sudo yum -y update
sudo yum -y install httpd
sudo firewall-cmd --permanent --zone=public --add-service=http
sudo firewall-cmd --permanent --zone=public --add-service=https
sudo firewall-cmd --reload
sudo systemctl start httpd
sudo systemctl enable httpd.service
```

🗄️ CentOS 7:
```
sudo yum -y update
sudo yum -y install httpd
sudo firewall-cmd --permanent --zone=public --add-service=http
sudo firewall-cmd --permanent --zone=public --add-service=https
sudo firewall-cmd --reload
sudo systemctl start httpd
sudo systemctl enable httpd
```

🗄️ CentOS 8:
```
sudo yum -y update
sudo yum -y install httpd
sudo firewall-cmd --permanent --zone=public --add-service=http
sudo firewall-cmd --permanent --zone=public --add-service=https
sudo firewall-cmd --reload
sudo systemctl start httpd
sudo systemctl enable httpd
```

**PHP（ハイパーテキストプリプロセッサ）**

🗄️ CentOS 6:
```
# ステップ1: Yumリポジトリの設定
yum install epel-release
rpm -Uvh http://rpms.famillecollet.com/enterprise/remi-release-6.rpm

# ステップ2: PHP 7.3のインストール
yum --enablerepo=remi-php73 install php

# ステップ3: PHP 7.3拡張モジュールのインストール
yum --enablerepo=remi-php73 install php-xml php-soap php-xmlrpc php-mbstring php-json php-gd php-mcrypt
```

🗄️ CentOS 7:
```
# ステップ1: Yumリポジトリの設定
yum install epel-release
rpm -Uvh http://rpms.famillecollet.com/enterprise/remi-release-7.rpm

# ステップ2: PHP 7.3のインストール
yum --enablerepo=remi-php73 install php

# ステップ3: PHP 7.3拡張モジュールのインストール
yum --enablerepo=remi-php73 install php-xml php-soap php-xmlrpc php-mbstring php-json php-gd php-mcrypt
```

🗄️ CentOS 8:
```
# ステップ1: Yumリポジトリの設定
dnf install dnf-utils http://rpms.remirepo.net/enterprise/remi-release-8.rpm

# ステップ2: PHP 7.3のインストール
dnf module reset php
dnf module enable php:remi-7.3
dnf install php
```

PHPのバージョン確認
```
php -v
```

</TabItem>
</Tabs>

次に、Nextcloudの情報を保存するためのデータベースの種類を決めます。選択肢はいくつかあります：

<Tabs>

<TabItem value="MariaDB" label="MariaDB" default>

<br/>
MariaDBを使う場合は以下の手順に従ってください：

パッケージのインストール：
```
sudo apt-get install mariadb-server php-mysql
```

インストール中にrootパスワードの設定を求められます。要求がなければデフォルトは空パスワードです。これは安全ではないので、すぐに変更してください！

次にデータベースサーバーに接続し、必要なデータベースを作成します：

```sql
mysql -u root -p
CREATE DATABASE nextcloud;
```

続いて、Nextcloudデータベースにアクセスできるユーザーを作成します。

```sql
CREATE USER 'nc_user'@'localhost' IDENTIFIED BY 'YOUR_PASSWORD_HERE';
```

:::info
rootユーザーを使ってこのステップを省略しないでください。安全ではなく、データが危険にさらされます！
:::

最後に新しいユーザーに権限を付与します：

```SQL
GRANT ALL PRIVILEGES ON nextcloud.* TO 'nc_user'@'localhost';
FLUSH PRIVILEGES;
```

完了したらCtrl-Dでデータベースを終了し、次のステップに進みます。

</TabItem>
<TabItem value="MySQL" label="MySQL">

<br/>
MySQLを使う場合は以下の手順に従ってください：

パッケージのインストール：
```
sudo apt-get install mysql-server php-mysql
```

インストール中にrootパスワードの設定を求められます。要求がなければデフォルトは空パスワードです。これは安全ではないので、すぐに変更してください！

次にデータベースサーバーに接続し、必要なデータベースを作成します：

```sql
mysql -u root -p
CREATE DATABASE nextcloud;
```

続いて、Nextcloudデータベースにアクセスできるユーザーを作成します。

```sql
CREATE USER 'nc_user'@'localhost' IDENTIFIED BY 'YOUR_PASSWORD_HERE';
```

:::info
rootユーザーを使ってこのステップを省略しないでください。安全ではなく、データが危険にさらされます！
:::

最後に新しいユーザーに権限を付与します：

```SQL
GRANT ALL PRIVILEGES ON nextcloud.* TO 'nc_user'@'localhost';
FLUSH PRIVILEGES;
```

完了したらCtrl-Dでデータベースを終了し、次のステップに進みます。

</TabItem>
<TabItem value="PostgreSQL" label="PostgreSQL">
<br/>
PostgreSQLを使う場合は以下の手順に従ってください：

パッケージのインストール：
```
sudo apt-get update
sudo apt-get install postgresql postgresql-contrib
```

インストール中にrootパスワードの設定を求められます。要求がなければデフォルトは空パスワードです。これは安全ではないので、すぐに変更してください！

次にデータベースサーバーに接続し、必要なデータベースを作成します：

```sql
sudo -u postgres psql
CREATE DATABASE nextcloud;
```

続いて、Nextcloudデータベースにアクセスできるユーザーを作成します。

```sql
CREATE USER nextcloud with encrypted password 'YOUR_PASSWORD_HERE';
```

:::info
rootユーザーを使ってこのステップを省略しないでください。安全ではなく、データが危険にさらされます！
:::

最後に新しいユーザーに権限を付与します：

```SQL
grant all privileges on database mydb to myuser;
FLUSH PRIVILEGES;
```

完了したらCtrl-Dでデータベースを終了します。その後、PostgreSQLデータベースはWebインストーラーまたは**config.php**設定ファイルで修正できます。

```
<?php
$AUTOCONFIG = array(
  "dbtype"        => "pgsql",
  "dbname"        => "nextcloud",
  "dbuser"        => "username",
  "dbpass"        => "password",
  "dbhost"        => "localhost",
  "dbtableprefix" => "",
);
```

</TabItem>
<TabItem value="SQLite" label="SQLite">

<br/>
SQLiteを使う場合は以下の手順に従ってください：

パッケージのインストール：
```
apt-get install sqlite3 php-sqlite3
```

SQLite 3データベースの作成
```
sqlite3 DatabaseName.db
```

その後、SQLite 3データベースはWebインストーラーまたは**config.php**設定ファイルで修正できます。
```
<?php
$AUTOCONFIG = array(
  "dbtype"        => "sqlite",
  "dbname"        => "nextcloud",
  "dbtableprefix" => "",
);
```
</TabItem>
</Tabs>

## インストール

いよいよNextcloudのインストールを開始します。ソフトウェアをダウンロードして解凍します：
```
cd /var/www/
wget https://download.nextcloud.com/server/releases/latest.zip
apt-get install unzip
unzip latest.zip
chown -R www-data:www-data nextcloud
rm latest.zip
```

このステップが完了したら、インストールスクリプトを実行します。ブラウザから以下のURLでアクセス可能です：

:::info
**http://domain.tld/nextcloud/** 
:::

インストールスクリプトの設定画面が表示され、rootユーザーの作成やデータベース情報の設定を行います：

![](https://screensaver01.zap-hosting.com/index.php/s/BdLXfzQwpRPbL9E/preview)


![](https://screensaver01.zap-hosting.com/index.php/s/BNcyjRJNeT9dcZj/preview)


## セキュリティと安全性

**セットアップ警告**

![](https://screensaver01.zap-hosting.com/index.php/s/PdzHSP5WaPEcQqH/preview)



**データディレクトリ**

データディレクトリはWebルートディレクトリ（例：/var/www）外に置くことを強く推奨します。新規インストール時に設定可能ですが、事前にディレクトリを作成し適切な権限を設定する必要があります。例えばホームディレクトリ内にCloudという名前のディレクトリを作成して保存する方法があります。

```
mkdir /home/cloud/
chown -R www-data:www-data /home/cloud/
```



**SSL証明書（Let's Encrypt）によるHTTPS**

安全なクラウド環境はSSL接続のみでアクセス可能にすべきです。SSLなしではデータが平文で送信され、簡単に傍受・閲覧されてしまいます。

```
<IfModule mod_ssl.c>
<VirtualHost *:443>
 DocumentRoot "/var/www/nextcloud"
 ServerName domain.tld

 ErrorLog ${APACHE_LOG_DIR}/error.log
 CustomLog ${APACHE_LOG_DIR}/access.log combined

<Directory /var/www/nextcloud/>
 Options +FollowSymlinks
 AllowOverride All

 <IfModule mod_dav.c>
 Dav off
 </IfModule>

 SetEnv HOME /var/www/nextcloud
 SetEnv HTTP_HOME /var/www/nextcloud
 Satisfy Any

</Directory>

SSLCertificateFile /etc/letsencrypt/live/domain.tld/fullchain.pem
SSLCertificateKeyFile /etc/letsencrypt/live/domain.tld/privkey.pem
</VirtualHost>
</IfModule>

<IfModule mod_headers.c>
     Header always set Strict-Transport-Security "max-age=15768000; preload"
 </IfModule>
```



さらに、すべてのHTTPトラフィックはステータスコード301の恒久的リダイレクトでHTTPSに転送すべきです。ApacheのVirtualHosts設定例は以下の通りです：

```
<VirtualHost *:80>
   ServerName domain.tld
   Redirect permanent / https://domain.tld/
</VirtualHost>
```


## Nextcloudの管理

Nextcloudにはブラウザだけでなく、スマホやPCのアプリからもアクセス可能です。ダウンロードはこちらから：https://nextcloud.com/install/#install-clients

![](https://screensaver01.zap-hosting.com/index.php/s/5ay4YtgM8szkrxM/preview)

設定画面ではセットアップ後もオプションの調整やログ、アクティビティの確認ができます。二段階認証や暗号化などのセキュリティ設定、ロゴやカラー、スローガン、ヘッダーのデザイン設定、アクセス設定などもここで行えます。

**アプリ**

さらに、デフォルト以外の追加アプリもインストール可能です。メニューの**Apps**からアクセスできます。

![](https://screensaver01.zap-hosting.com/index.php/s/AG8PCQwDfsKGQXS/preview)

こうした**Apps**でNextcloudを自分好みにカスタマイズできます。

<InlineVoucher />