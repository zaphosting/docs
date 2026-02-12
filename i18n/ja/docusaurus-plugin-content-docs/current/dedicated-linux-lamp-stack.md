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

**LAMP**スタックは、特にPHPウェブサイトやアプリにフォーカスした、動的なウェブサイトホスティングを簡単に実現するために一緒にセットアップされる人気のオープンソースソフトウェア群です。略称は、**L**inux（OS）、**A**pache（ウェブサーバー）、**M**ySQL（データベース）、そして最後に**P**HP（処理）を指します。このガイドでは、Linux専用サーバー上でLAMPスタックをセットアップする手順を、To-Doリストのウェブサイトを例に詳しく解説します。

## 準備

まずはSSHでサーバーに接続してください。接続方法がわからない場合は、[初回アクセス（SSH）](vserver-linux-ssh.md)ガイドをご覧ください。

本ガイドではUbuntuをLinuxディストリビューションとして使用します。Debianでも同様の手順で、他のディストリビューションでも似たような流れですが、コマンドの構文が若干異なる場合があります。OSがインストールされていてSSH接続ができていることを確認してください。

インストールを始める前に、以下のコマンドでパッケージを最新にアップデートしておきましょう：
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

インストールはLAMPの各コアコンポーネントごとに分けて進めます。まずApacheウェブサーバー、次にMySQLデータベース、最後にPHPです。インストール中に、PHPで書かれたテスト用ウェブサイトをセットアップし、MySQLデータベースにアクセスし、Apache経由でウェブリクエストを処理・配信する流れを作ります。

### Apacheのセットアップ

Apacheはウェブリクエストを処理しレスポンスを返すウェブサーバーです。以下のコマンドでインストールします。
```
sudo apt install apache2
```

インストール後は、ウェブサーバーがインターネットからアクセス可能になるように適切なファイアウォールルールを作成しましょう。ここではApacheが登録アプリケーションとしてある**UFWファイアウォール**を使います。

別のファイアウォールを使っている場合は、HTTPのポート80を通す設定をしてください。Linuxのファイアウォールについては[ファイアウォール管理](vserver-linux-firewall.md)ガイドも参考にどうぞ。

UFWファイアウォールを有効にし、SSH用のルールも作成します。
```
# SSH用ルール作成
sudo ufw allow OpenSSH

# UFWファイアウォール有効化
sudo ufw enable
```

:::caution
UFWを使う場合は必ずSSH用のルールを作成してください！これをしないと、現在のセッションが切れた後にサーバーへSSH接続できなくなります！
:::

次にApache用のルールを作成し、ルールが正しく設定されているか確認します。
```
# Apache用ルール作成
sudo ufw allow in "Apache Full"

# UFWルール確認
sudo ufw status
```

:::tip
`ufw app list`コマンドで利用可能なプロファイルを確認できます。上記の`Apache Full`はHTTP（ポート80）とHTTPS（ポート443）の両方を許可するルールを作成します。
:::

`Apache`と`Apache (v6)`のルールが`ALLOW`になっていればOKです。SSHルールなど他のルールも表示されます。

![](https://screensaver01.zap-hosting.com/index.php/s/o8NDBppnTwHdSgf/preview)

ファイアウォールが開放されたら、Apacheが正常に動作しているか確認しましょう。ブラウザでサーバーのIPアドレスにアクセスします：`http://[your_ipaddress]`

正常ならデフォルトのウェルカムページが表示されます。表示されない場合は以下のコマンドでサービスの状態を確認してください：`systemctl status apache2`

![](https://screensaver01.zap-hosting.com/index.php/s/irmnDDNi436HH4c/preview)

### MySQLのセットアップ

次にMySQLサーバーをインストールし、リレーショナルにデータを永続化できるデータベースとして使います。
```
sudo apt install mysql-server
```

インストール後は、MySQLサーバーのセキュリティを強化するために推奨されるスクリプトを実行しましょう。任意ですが強くおすすめします。以下のコマンドで開始します。
```
sudo mysql_secure_installation
```

対話形式で進みます。最初にパスワードの検証について聞かれます。将来的に安全なパスワードのみ許可するために`Y`を選び、`MEDIUM`（1）か`STRONG`（2）を選択してください。

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

次に匿名ユーザーの削除とrootのリモートログイン禁止について聞かれます。セキュリティ上の理由から両方とも`Y`で承認することを強く推奨します。これによりテストユーザーが削除され、rootユーザーはSSH経由のローカルのみで使用可能になります。

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

最後にテストデータベースの削除と権限テーブルのリロードを聞かれます。こちらも`Y`で承認してください。テストテーブルは不要で、権限テーブルのリロードが必要です。

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

MySQLが起動しているか確認するには、以下のコマンドでログインを試みます：`sudo mysql -u root`。成功するとウェルカムメッセージが表示されます。終了するには`quit`コマンドを使います。

### PHPのセットアップ

最後のLAMPコンポーネントはPHPです。ApacheとMySQL用のプラグインも一緒にインストールします。
```
sudo apt install php libapache2-mod-php php-mysql
```

インストールが成功したかはバージョン確認でチェックできます。バージョンが表示されればOKです。
```
php -v
```

:::tip PHP拡張機能
高度な用途では追加のPHP拡張機能が必要になることがあります。以下のコマンドで一覧を確認できます。
```
apt search php- | less
```
矢印キーでスクロールし、`Q`で終了。拡張機能のインストールは以下のように複数同時に可能です。
```
sudo apt install [php_extension] [...]
```
:::

`index.php`ファイルがデフォルトの`.html`より優先されるように、ディレクトリインデックスを調整しましょう。以下のコマンドで設定ファイルを開きます。
```
sudo nano /etc/apache2/mods-enabled/dir.conf
```

nanoエディタで`index.php`をリストの先頭に移動します。
```
DirectoryIndex index.php index.html index.cgi index.pl index.xhtml index.htm
```

保存してnanoを終了（`CTRL + X`、`Y`、`ENTER`）。設定を反映するためApacheを再起動します。
```
sudo systemctl restart apache2
```

### テスト用ウェブサイトの作成

LAMPの各コンポーネントのインストールが完了したので、LAMPスタックがどのように連携して動的なウェブサイトを構築するかを示すためのテスト用ウェブサイトを作成します。これは任意ですが、ツールの活用方法を理解するのに役立ちます。

今回はPHPで作成した小さなTo-Doリストサイトを例にします。MySQLのテーブルに保存されたTo-Do項目を取得して表示し、Apache経由で配信します。

実際の運用ではドメインを使うことが多いので、ここではテスト用に`zapdocs.example.com`というドメインを使います。必ずサーバーのIPアドレスを指す`A`タイプのDNSレコードを設定してください。設定方法は[ドメインレコード](domain-records.md)ガイドを参照してください。

:::note
ドメインを使わずIPアドレスでアクセスしたい場合は、`[your_domain]`の部分を任意の名前に置き換え、後述の仮想ホスト設定で`ServerName`行を削除してください。
:::

#### Apacheの設定

ウェブサーバーでは通常、ウェブサイトのファイルは`/var/www`ディレクトリ以下に保存されます。Apacheはデフォルトで`html`ディレクトリにデフォルトページを持っていますが、複数サイトをホスティングする場合は各サイトごとに個別のフォルダを作るのがおすすめです。

以下のように、ドメインごとに`/var/www/[your_domain]`フォルダを作成します。ここでは`/var/www/zapdocs.example.com`です。
```
sudo mkdir /var/www/[your_domain]
```

次に、`sites-available`ディレクトリに新しいApacheの仮想ホスト設定ファイルを作成します。
```
sudo nano /etc/apache2/sites-available/[your_domain].conf
```

以下のテンプレートをコピーし、`[your_domain]`を使うドメインに置き換えてnanoに貼り付けます。
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

この仮想ホストはポート80（HTTP）でリクエストを受け、`ServerName`に合致するドメインのリクエストを処理し、先ほど作成したフォルダからファイルを配信します。

保存してnanoを終了（`CTRL + X`、`Y`、`ENTER`）。設定ファイルに文法エラーがないか以下のコマンドで確認しましょう。
```
sudo apache2ctl configtest
```

最後に新しい仮想ホストを有効化します。
```
sudo a2ensite [your_domain]
```

:::note ドメイン未使用の場合
ドメインを使わない場合は`ServerName`行を削除またはコメントアウトし、デフォルトの仮想ホストを無効化してください。
```
sudo a2dissite 000-default
```
:::

設定を反映するためApacheを再起動します。
```
sudo systemctl restart apache2
```

#### ウェブサイトの作成

Apacheの設定が完了したので、実際に配信するウェブサイトを作成します。現状フォルダは空なので何も表示されません。ここでは先述のTo-Doリストサイトを作成します。

##### データベースの準備

まずはMySQLにログインし、新しいデータベースとテーブルを作成します。
```
sudo mysql -u root
```

以下のSQLを実行して`todowebsite`データベースと`todoitems`テーブルを作成します。
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

サンプルのTo-Do項目をいくつか追加します。
```
INSERT INTO todoitems (name, is_completed) VALUES ('Create ZAP-Docs Guide', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('Buy a ZAP-Hosting Server', 1);
INSERT INTO todoitems (name, is_completed) VALUES ('Join ZAP-Hosting Discord', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('Have a great day!', 0);
```

このサイト専用の`todo`ユーザーを作成します。
```
# ユーザー作成
# [your_password]は任意のパスワードに置き換えてください
CREATE USER todo@localhost IDENTIFIED BY '[your_password]';

# 権限付与（まとめてコピーしてください）
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER
ON todowebsite.*
TO todo@localhost;

# 権限反映
FLUSH PRIVILEGES;
```

準備ができたら`quit`でMySQLを終了します。

##### PHPウェブサイトファイル

最後に、`/var/www/[your_domain]`に`index.php`ファイルを作成します。
```
sudo nano /var/www/[your_domain]/index.php
```

以下のコードをコピーして貼り付けてください。MySQLへの接続とTo-Doリストの表示を行います。

:::important
`[your_password]`は先ほど設定した`todo`ユーザーのパスワードに必ず変更してください。
:::

```php
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
<html lang="ja">
  <head>
      <meta charset="UTF-8">
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
              // 各エントリーをループ処理
              foreach ($result as $entry) {
                  echo "<li>";
                  // XSS対策でhtmlspecialcharsを使用して名前を表示
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
// 接続終了
$conn->close();
?>
```

貼り付けたら保存してnanoを終了（`CTRL + X`、`Y`、`ENTER`）。

#### ウェブサイトのテスト

これでLAMPスタックを使ったテスト用To-Doウェブサイトが完成しました！

先ほど設定したドメイン（例：`zapdocs.example.com`）でブラウザからアクセスしてみてください（`http`/ポート80）。以下のような画面が表示されるはずです。

![](https://screensaver01.zap-hosting.com/index.php/s/NgK2n8xN3wZPLeP/preview)

## まとめ

おめでとうございます！LAMPスタックのインストールとセットアップが無事完了しました！次のステップとして、ドメインと**SSL証明書**の設定を強くおすすめします。これによりウェブサイトへの通信が安全に暗号化されます。ぜひ[Certbotガイド](dedicated-linux-certbot.md)の**Apacheプラグイン**に注目して、対話形式のセットアップを進めてみてください。

質問やサポートが必要な場合は、いつでもお気軽にサポートチームにお問い合わせくださいね！🙂