---
id: vserver-linux-lamp-stack
title: "VPS: LAMPスタックのセットアップ - Linux, Apache, MySQL, PHP"
description: "Linux VPSで動的なPHPウェブサイトを効率的にホスティングするためのLAMPスタックのセットアップ方法を解説 → 今すぐチェック"
sidebar_label: Web LAMPスタック
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

**LAMP**スタックは、PHPウェブサイトやアプリに特化したシンプルな動的ウェブサイトホスティングを実現するために一緒にセットアップされる人気のオープンソースソフトウェア群です。略称は、**L**inux（OS）、**A**pache（ウェブサーバー）、**M**ySQL（データベース）、そして**P**HP（処理）を指します。このガイドでは、Linux VPS上でLAMPスタックをセットアップする手順を、To-Doリストのウェブサイトを例に詳しく解説します。

<InlineVoucher />

## 準備

まずはSSHでサーバーに接続してください。接続方法がわからない場合は、[初回アクセス（SSH）](vserver-linux-ssh.md)ガイドをご覧ください。

本ガイドではUbuntuをLinuxディストリビューションとして使用します。Debianでも同様の手順で、他のディストリビューションでも似たような流れですが、コマンドの文法が若干異なる場合があります。OSがインストールされていてSSH接続ができる状態であることを確認してください。

インストールを始める前に、以下のコマンドでパッケージを最新状態にアップデートしておきましょう：
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

インストールはLAMPの各コアコンポーネントごとに分けて行います。まずApacheウェブサーバー、次にMySQLデータベース、最後にPHPの順です。インストール中に、PHPで書かれたテスト用ウェブサイトをセットアップし、MySQLデータベースにアクセスし、Apacheを通じてウェブリクエストを処理・配信する流れを体験します。

### Apacheのセットアップ

Apacheはウェブリクエストを処理しレスポンスを返すウェブサーバーです。以下のコマンドでインストールします。
```
sudo apt install apache2
```

インストール後は、ウェブサーバーがインターネットからアクセス可能になるようにファイアウォールのルールを設定しましょう。ここではApache用に登録されたアプリケーションがある**UFWファイアウォール**を使います。

別のファイアウォールを使っている場合は、HTTPのポート80を通す設定をしてください。Linuxのファイアウォールについては[ファイアウォール管理](vserver-linux-firewall.md)ガイドも参考にどうぞ。

UFWファイアウォールを有効化し、SSH用のルールも作成します。
```
# SSH用ルールを作成
sudo ufw allow OpenSSH

# UFWファイアウォールを有効化
sudo ufw enable
```

:::caution
UFWファイアウォールを使う場合は必ずSSH用のルールを作成してください！設定しないと現在のセッションが切れた後、サーバーにSSH接続できなくなります！
:::

続いてApache用のルールを作成し、設定が反映されているか確認します。
```
# Apache用ルールを作成
sudo ufw allow in "Apache Full"

# UFWファイアウォールのルールを確認
sudo ufw status
```

:::tip
利用可能なプロファイルは `ufw app list` コマンドで確認できます。上記の例で使った `Apache Full` はHTTP（ポート80）とHTTPS（ポート443）の両方を許可するルールを作成します。
:::

`Apache` と `Apache (v6)` のルールが `ALLOW` になっていればファイアウォールの設定はOKです。SSHルールなど他に設定済みのルールも表示されます。

![](https://screensaver01.zap-hosting.com/index.php/s/o8NDBppnTwHdSgf/preview)

ファイアウォールが開放されたら、Apacheが正常に動作しているか確認しましょう。ブラウザでサーバーのIPアドレスにアクセスしてみてください：`http://[your_ipaddress]`

正常ならデフォルトのウェルカムページが表示されます。表示されない場合は以下のコマンドでサービスの状態を確認してください：`systemctl status apache2`

![](https://screensaver01.zap-hosting.com/index.php/s/irmnDDNi436HH4c/preview)

### MySQLのセットアップ

次にMySQLサーバーをインストールし、リレーショナルにデータを永続化できるデータベースとして使います。
```
sudo apt install mysql-server
```

インストール後は、MySQLサーバーのセキュリティを強化するために推奨されるスクリプトを実行しましょう。これは任意ですが強く推奨します。以下のコマンドで実行できます。
```
sudo mysql_secure_installation
```

対話形式で進みます。最初にパスワードの検証について聞かれます。将来的に安全なパスワードのみ許可するために `Y` を選び、次に `1`（MEDIUM）か `2`（STRONG）を選択してください。

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

続いて匿名ユーザーの削除とrootのリモートログイン禁止について聞かれます。セキュリティ上の理由から両方とも `Y` を選ぶことを強く推奨します。これによりテストユーザーが削除され、rootユーザーはSSH経由のローカル接続のみ可能になります。

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

最後にテストデータベースの削除と権限テーブルのリロードを聞かれます。こちらも不要なテーブルを削除し権限を反映させるために `Y` を選びましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

MySQLが起動しているか確認するには、以下のコマンドでログインを試みてください：`sudo mysql -u root`。成功するとウェルカムメッセージが表示されます。終了するには `quit` コマンドを使います。

### PHPのセットアップ

最後のLAMPコンポーネントはPHPです。ApacheとMySQLでPHPを使えるようにするプラグインも一緒にインストールします。
```
sudo apt install php libapache2-mod-php php-mysql
```

インストールが成功したかはバージョンを確認してみましょう。バージョンが表示されればOKです。
```
php -v
```

:::tip PHP拡張機能
高度な用途では追加のPHP拡張機能が必要になることがあります。以下のコマンドで一覧を確認できます。
```
apt search php- | less
```
矢印キーでスクロールし、終了は `Q` を押します。拡張機能をインストールするには以下のようにします。複数同時に指定可能です。
```
sudo apt install [php_extension] [...]
```
:::

`index.php` ファイルが `.html` より優先されるようにディレクトリインデックスを調整することをおすすめします。以下のコマンドで設定ファイルを開きます。
```
sudo nano /etc/apache2/mods-enabled/dir.conf
```

nanoエディタで `index.php` をリストの先頭に移動してください：
```
DirectoryIndex index.php index.html index.cgi index.pl index.xhtml index.htm
```

保存してnanoを終了するには `CTRL + X`、`Y`、`ENTER` の順に押します。設定を反映させるためApacheを再起動します。
```
sudo systemctl restart apache2
```

### テスト用ウェブサイトの作成

LAMPの各コンポーネントが揃ったので、実際に動作を確認するためのテスト用ウェブサイトを作成します。これは任意ですが、LAMPスタックの連携を理解するのに役立ちます。

ここではPHPで書かれた小さなTo-Doリストのウェブサイトを作成し、MySQLのテーブルからデータを取得してApache経由で配信します。

実際の運用ではドメインを使うことが多いので、例として `zapdocs.example.com` というテストドメインを使います。必ずサーバーのIPアドレスを指す `A`タイプのDNSレコードを設定してください。設定方法は[ドメインレコード](domain-records.md)ガイドを参照してください。

:::note
ドメインを使わずIPアドレスでアクセスしたい場合は、`[your_domain]` の部分を任意の名前に置き換えてください。ただし後述のバーチャルホスト設定で `ServerName` パラメータは削除してください。
:::

#### Apacheの設定

ウェブサーバーでは通常、ウェブサイトのファイルは `/var/www` 配下に保存されます。Apacheはデフォルトで `html` ディレクトリにデフォルトページを持っていますが、複数サイトを管理する場合は各サイトごとにフォルダを分けるのがおすすめです。

以下のようにドメインごとにフォルダを作成します。例では `/var/www/zapdocs.example.com` です。
```
sudo mkdir /var/www/[your_domain]
```

次に、`sites-available` ディレクトリに新しいApacheのバーチャルホスト設定ファイルを作成します。
```
sudo nano /etc/apache2/sites-available/[your_domain].conf
```

以下のテンプレートをコピーし、`[your_domain]` を実際のドメイン名に置き換えてください。
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

この設定はポート80（HTTP）でのリクエストを受け付け、`ServerName` に合致するドメインのリクエストを `/var/www/[your_domain]` フォルダから配信します。

保存してnanoを終了したら、`sudo apache2ctl configtest` で構文エラーがないか確認しましょう。

最後に新しいバーチャルホストを有効化します。
```
sudo a2ensite [your_domain]
```

:::note ドメインを使わない場合
ドメインを使わない場合は `ServerName` 行を削除またはコメントアウト（行頭に `#` を付ける）してください。またデフォルトのバーチャルホストは以下で無効化します。
```
sudo a2dissite 000-default
```
:::

設定を反映させるためApacheを再起動します。
```
sudo systemctl restart apache2
```

#### ウェブサイトの作成

Apacheの設定ができたので、実際に配信するウェブサイトを作成します。現状フォルダは空なので何も表示されません。ここでは先述のTo-Doリストサイトを作ります。

##### データベースの準備

まずMySQLにログインし、新しいデータベースとテーブルを作成します。
```
sudo mysql -u root
```

以下のコマンドで `todowebsite` データベースと `todoitems` テーブルを作成します。
```
# データベース作成
CREATE DATABASE todowebsite;

# データベース選択
USE todowebsite;

# テーブル作成
CREATE TABLE todoitems (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    is_completed BOOLEAN DEFAULT FALSE,
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

サンプルデータをいくつか挿入します。
```
INSERT INTO todoitems (name, is_completed) VALUES ('Create ZAP-Docs Guide', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('Buy a ZAP-Hosting Server', 1);
INSERT INTO todoitems (name, is_completed) VALUES ('Join ZAP-Hosting Discord', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('Have a great day!', 0);
```

このサイト専用のユーザー `todo` を作成し、適切な権限を付与します。
```
# ユーザー作成
# [your_password] は任意のパスワードに置き換えてください
CREATE USER todo@localhost IDENTIFIED BY '[your_password]';

# 権限付与（まとめてコピーしてください）
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER
ON todowebsite.*
TO todo@localhost;

# 権限反映
FLUSH PRIVILEGES;
```

準備ができたら `quit` でMySQLを終了します。

##### PHPウェブサイトファイル

最後にPHPで書かれたTo-Doページのファイルを作成します。先ほど作った `/var/www/[your_domain]` フォルダに `index.php` ファイルを作成しましょう。
```
sudo nano /var/www/[your_domain]/index.php
```

以下のコードをコピーして貼り付けてください。最初のPHP部分でMySQLに接続し、後半のHTML部分でデータベースから取得したTo-Do項目をリスト表示します。

:::important
`[your_password]` は先ほど設定した `todo` ユーザーのパスワードに必ず置き換えてください。
:::

```
<?php
// MySQL接続準備
$servername = "localhost";
$username = "todo";
$password = "[your_password]";
$dbname = "todowebsite";

// 接続作成
$conn = new mysqli($servername, $username, $password, $dbname);

// 接続確認、失敗時はエラー表示
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// SQLクエリ実行、結果を$resultに格納
$sql = "SELECT id, name, is_completed, creation_date FROM todoitems ORDER BY creation_date DESC";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="en">
  <head>
      <meta charset="UTF--8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>To-Do List</title>
  </head>
  <body>
      <h1>Awesome To-Do List :D</h1>
      <p>For our awesome ZAP-Hosting guide: <a href="https://zap-hosting.com/guides/docs/vserver-linux-lamp-stack">https://zap-hosting.com/guides/docs/vserver-linux-lamp-stack</a></p>
      <ul>
          <?php
          // 結果があるかチェック
          if ($result->num_rows > 0) {
              // 結果の各項目をループ処理
              foreach ($result as $entry) {
                  echo "<li>";
                  // XSS対策でhtmlspecialcharsを使い名前を表示
                  echo htmlspecialchars($entry["name"]);

                  // 完了状態を表示
                  if ($entry["is_completed"]) {
                      echo " <strong>(Completed)</strong>";
                  } else {
                      echo " <strong>(Incomplete)</strong>";
                  }

                  // 作成日時を表示
                  echo " - Creation Date: " . htmlspecialchars($entry['creation_date']);
                  echo "</li>";
              }
          } else {
              // 項目がなければメッセージ表示
              echo "<li>No to-do items found.</li>";
          }
          ?>
      </ul>
  </body>
</html>

<?php
// 接続を閉じる
$conn->close();
?>
```

貼り付けたら保存してnanoを終了します（`CTRL + X`、`Y`、`ENTER`）。

#### ウェブサイトの動作確認

これでLAMPスタックを使ったテスト用To-Doウェブサイトが完成しました！

ブラウザで先ほど設定したドメイン（HTTPのポート80）にアクセスしてみてください。例では `zapdocs.example.com` です。以下のような画面が表示されるはずです。

![](https://screensaver01.zap-hosting.com/index.php/s/NgK2n8xN3wZPLeP/preview)

## まとめ

おめでとうございます！LAMPスタックのインストールとセットアップが無事完了しました！次のステップとして、ぜひドメインと**SSL証明書**の設定を強くおすすめします。これによりウェブサイトへの通信が安全に暗号化されます。

[Certbotガイド](vserver-linux-certbot.md)の**Apacheプラグイン**に注目して、対話形式のセットアップを進めると簡単に証明書を取得できます。

質問やサポートが必要な場合は、いつでもお気軽にサポートチームにお問い合わせください！毎日対応していますよ！🙂

<InlineVoucher />