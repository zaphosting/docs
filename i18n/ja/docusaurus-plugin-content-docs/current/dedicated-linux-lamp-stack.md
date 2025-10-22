---
id: dedicated-linux-lamp-stack
title: "専用サーバー：LAMPスタックのセットアップ - Linux、Apache、MySQL、PHP"
description: "Linuxサーバーで動的なPHPウェブサイトを効率的にホスティングするためのLAMPスタックのセットアップ方法をチェック → 今すぐ詳しく見る"
sidebar_label: Web LAMPスタック
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

**LAMP**スタックは、PHPウェブサイトやアプリに特化したシンプルな動的ウェブサイトホスティングを可能にする、人気のオープンソースソフトウェアの組み合わせです。略称は、**L**inux（OS）、**A**pache（ウェブサーバー）、**M**ySQL（データベース）、そして**P**HP（処理）を指します。このガイドでは、Linux専用サーバーにLAMPスタックをセットアップする手順を、To-Doリストのウェブサイトを例に詳しく解説します。

<InlineVoucher />

## 準備

まずはSSHでサーバーに接続しましょう。接続方法がわからない場合は、[初期アクセス（SSH）](vserver-linux-ssh.md)ガイドを参照してください。

本ガイドではUbuntuをLinuxディストリビューションとして使用します。Debianでも同様の手順で、他のディストリビューションでも似たような手順ですが、コマンドの構文が若干異なる場合があります。OSがインストールされていてSSH接続ができることを確認してください。

インストールを始める前に、以下のコマンドでパッケージを最新にアップデートしておきましょう。
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

## インストール

インストールはLAMPの各コアコンポーネントごとに分けて進めます。まずApacheウェブサーバー、次にMySQLデータベース、最後にPHPをセットアップします。インストール中にPHPで書かれたテスト用ウェブサイトを作成し、MySQLデータベースにアクセスし、Apacheがリクエストを処理して応答を返す流れを確認します。

### Apacheのセットアップ

Apacheはウェブリクエストを処理しレスポンスを返すウェブサーバーです。以下のコマンドでインストールします。
```
sudo apt install apache2
```

インストール後は、ウェブサーバーがインターネットからアクセス可能になるようにファイアウォールのルールを設定しましょう。ここではApache用に登録されたアプリケーションがある**UFWファイアウォール**を使います。

別のファイアウォールを使っている場合は、HTTPのポート80を通す設定をしてください。Linuxのファイアウォールについては[ファイアウォール管理](vserver-linux-firewall.md)ガイドも参考に。

UFWファイアウォールを有効にし、SSH用のルールも作成します。
```
# SSHを許可するルールを作成
sudo ufw allow OpenSSH

# UFWファイアウォールを有効化
sudo ufw enable
```

:::caution
UFWを使う場合は必ずSSH用のルールを作成してください！設定しないと現在のセッションが切断された後、サーバーにSSH接続できなくなります！
:::

次にApache用のルールを作成し、設定を確認します。
```
# Apacheを許可するルールを作成
sudo ufw allow in "Apache Full"

# UFWのルールを確認
sudo ufw status
```

:::tip
`ufw app list`コマンドで利用可能なプロファイルを確認できます。ここで使った`Apache Full`はHTTP（ポート80）とHTTPS（ポート443）の両方を許可する設定です。
:::

`Apache`と`Apache (v6)`のルールが`ALLOW`になっていればOKです。SSHルールなど他のルールも表示されるはずです。

![](https://screensaver01.zap-hosting.com/index.php/s/o8NDBppnTwHdSgf/preview)

ファイアウォールが開放されたら、ブラウザでサーバーのIPアドレスにアクセスしてApacheが動作しているか確認しましょう。例：`http://[your_ipaddress]`

正常ならデフォルトのウェルカムページが表示されます。表示されない場合は以下のコマンドでサービスの状態を確認してください。
```
systemctl status apache2
```

![](https://screensaver01.zap-hosting.com/index.php/s/irmnDDNi436HH4c/preview)

### MySQLのセットアップ

次にMySQLサーバーをインストールし、リレーショナルなデータベースとしてデータを永続的に保存できるようにします。
```
sudo apt install mysql-server
```

インストール後はセキュリティを強化するために推奨されるスクリプトを実行しましょう。これは任意ですが強く推奨します。
```
sudo mysql_secure_installation
```

対話形式で進みます。最初にパスワードの強度チェックについて聞かれます。将来的に安全なパスワードのみ許可するために`Y`を選び、`MEDIUM`（1）か`STRONG`（2）を選択してください。

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

次に匿名ユーザーの削除とrootのリモートログイン禁止を聞かれます。セキュリティ上の理由から両方とも`Y`で承認することを強く推奨します。

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

最後にテストデータベースの削除と権限テーブルのリロードを聞かれます。こちらも`Y`で承認してください。

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

MySQLが起動しているか確認するには以下のコマンドでログインを試みます。
```
sudo mysql -u root
```
成功すればウェルカムメッセージが表示されます。終了するには`quit`コマンドを使います。

### PHPのセットアップ

最後にPHPをインストールします。ApacheとMySQLで動作するためのプラグインも一緒に入れます。
```
sudo apt install php libapache2-mod-php php-mysql
```

インストールが成功したかはバージョン確認でチェックできます。
```
php -v
```

:::tip PHP拡張機能
高度な用途では追加のPHP拡張機能が必要になることがあります。以下のコマンドで一覧を確認できます。
```
apt search php- | less
```
矢印キーでスクロールし、`Q`で終了。拡張機能をインストールするには以下のように複数指定も可能です。
```
sudo apt install [php_extension] [...]
```
:::

`index.php`をデフォルトの`.html`より優先させるために、ディレクトリインデックスを調整しましょう。
```
sudo nano /etc/apache2/mods-enabled/dir.conf
```

nanoエディタで`index.php`をリストの先頭に移動します。
```
DirectoryIndex index.php index.html index.cgi index.pl index.xhtml index.htm
```

保存してnanoを終了（`CTRL + X`、`Y`、`ENTER`）し、Apacheを再起動します。
```
sudo systemctl restart apache2
```

### テスト用ウェブサイトの作成

LAMPの各コンポーネントが揃ったので、実際に動作を確認するためのテスト用ウェブサイトを作成します。これは任意ですが、LAMPの仕組みを理解するのに役立ちます。

今回はPHPで書かれた小さなTo-Doリストサイトを作り、MySQLのテーブルからデータを取得してApache経由で表示します。

テスト用ドメインは`zapdocs.example.com`を使います。実際にはドメインを用意し、サーバーのIPアドレスを指す`A`タイプのDNSレコードを設定してください。設定方法は[ドメインレコード](domain-records.md#a-records)ガイドを参照。

:::note
ドメインを使わずIPアドレスでアクセスする場合は、後述の仮想ホスト設定で`ServerName`行を削除してください。
:::

#### Apacheの設定

ウェブサーバーでは通常、ウェブサイトのファイルは`/var/www`ディレクトリ以下に保存されます。Apacheはデフォルトで`html`ディレクトリを持っていますが、複数サイトを管理する場合はドメインごとにフォルダを分けるのがおすすめです。

以下のようにドメイン名のフォルダを作成します。
```
sudo mkdir /var/www/[your_domain]
```

次に、`sites-available`ディレクトリに仮想ホストの設定ファイルを作成します。
```
sudo nano /etc/apache2/sites-available/[your_domain].conf
```

以下のテンプレートをコピーし、`[your_domain]`を実際のドメインに置き換えてください。
```
<VirtualHost *:80>
    ServerName [your_domain]
    ServerAlias www.[your_domain]
    ServerAdmin webmaster@localhost
    DocumentRoot /var/www/[your_domain]
    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```

この設定はポート80（HTTP）でのリクエストを受け付け、`ServerName`に合致するドメインのリクエストを`/var/www/[your_domain]`フォルダから配信します。

保存してnanoを終了し、`sudo apache2ctl configtest`で構文エラーがないか確認しましょう。

最後に仮想ホストを有効化します。
```
sudo a2ensite [your_domain]
```

:::note ドメイン未使用時
ドメインを使わない場合は`ServerName`行を削除またはコメントアウトし、デフォルトの仮想ホストを無効化してください。
```
sudo a2dissite 000-default
```
:::

Apacheを再起動して設定を反映します。
```
sudo systemctl restart apache2
```

#### ウェブサイトの作成

Apacheの設定ができたので、実際に配信するウェブサイトファイルを作成します。今はフォルダが空なので何も表示されません。

ここでは先ほど作成したドメインのフォルダに`index.php`ファイルを作成し、To-DoリストのPHPページを作ります。
```
sudo nano /var/www/[your_domain]/index.php
```

以下のコードをコピーして貼り付けてください。最初のPHP部分でMySQLに接続し、データを取得します。

:::important
`[your_password]`は先ほど作成した`todo`ユーザーのパスワードに必ず置き換えてください。
:::

HTML部分は取得したデータをリスト表示します。

```
<?php
// MySQL接続情報
$servername = "localhost";
$username = "todo";
$password = "[your_password]";
$dbname = "todowebsite";

// 接続作成
$conn = new mysqli($servername, $username, $password, $dbname);

// 接続確認
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// SQLクエリ実行
$sql = "SELECT id, name, is_completed, creation_date FROM todoitems ORDER BY creation_date DESC";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="ja">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>To-Doリスト</title>
  </head>
  <body>
      <h1>最高のTo-Doリスト :D</h1>
      <p>ZAP-Hostingガイドはこちら: <a href="https://zap-hosting.com/guides/docs/vserver-linux-lamp-stack">https://zap-hosting.com/guides/docs/vserver-linux-lamp-stack</a></p>
      <ul>
          <?php
          if ($result->num_rows > 0) {
              foreach ($result as $entry) {
                  echo "<li>";
                  echo htmlspecialchars($entry["name"]);

                  if ($entry["is_completed"]) {
                      echo " <strong>(完了)</strong>";
                  } else {
                      echo " <strong>(未完了)</strong>";
                  }

                  echo " - 作成日: " . htmlspecialchars($entry['creation_date']);
                  echo "</li>";
              }
          } else {
              echo "<li>To-Doアイテムが見つかりません。</li>";
          }
          ?>
      </ul>
  </body>
</html>

<?php
$conn->close();
?>
```

貼り付けたら保存してnanoを終了します。

#### ウェブサイトのテスト

これでLAMPスタックを使ったテスト用To-Doウェブサイトが完成しました！

ブラウザで先ほど設定したドメイン（例：`zapdocs.example.com`）にアクセスし、HTTP（ポート80）で表示を確認してください。以下のような画面が表示されるはずです。

![](https://screensaver01.zap-hosting.com/index.php/s/NgK2n8xN3wZPLeP/preview)

## まとめ

おめでとうございます！LAMPスタックのインストールとセットアップが無事完了しました！次のステップとして、ドメインと**SSL証明書**の設定を強くおすすめします。これによりウェブサイトへの通信が安全に暗号化されます。

[Certbotガイド](vserver-linux-certbot.md#webroot-plugin)の**Apacheプラグイン**に注目し、対話形式のセットアップを進めて証明書を簡単に取得しましょう。

質問やサポートが必要な場合は、いつでもお気軽にサポートチームにお問い合わせくださいね！🙂

<InlineVoucher />