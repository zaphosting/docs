---
id: vserver-linux-lamp-stack
title: "LinuxサーバーにLAMPスタックをセットアップ - クラシックなPHPアプリをパワーアップ"
description: "Linux VPSで動的なPHPサイトを効率的にホスティングするためのLAMPスタックのセットアップ方法をチェック → 今すぐ詳しく見る"
sidebar_label: Web LAMPスタック
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

**LAMP**スタックは、特にPHPのウェブサイトやアプリにフォーカスした、動的なウェブサイトホスティングを簡単に実現するための人気のオープンソースソフトウェア群です。頭文字は、**L**inux（OS）、**A**pache（ウェブサーバー）、**M**ySQL（データベース）、そして**P**HP（処理）を表しています。このガイドでは、Linux VPS上にLAMPスタックをセットアップする手順を、To-Doリストのウェブサイトを例に詳しく解説します。

<InlineVoucher />

## 準備

まずはSSHでサーバーに接続しましょう。やり方がわからない場合は、[初期アクセス（SSH）](vserver-linux-ssh.md)ガイドをチェックしてください。

このガイドではUbuntuをLinuxディストリビューションとして使用します。Debianでも同様の手順で、他のディストリビューションでもコマンドの書き方が少し異なる場合がありますが基本は同じです。OSがインストールされていてSSH接続ができる状態であることを確認してください。

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

インストールはLAMPの各コアコンポーネントごとに分けて進めます。まずApacheウェブサーバー、次にMySQLデータベース、最後にPHPです。インストール中にPHPで書かれたテスト用のウェブサイトを作成し、MySQLデータベースにアクセスし、Apache経由でリクエストを処理・配信する流れを体験します。

### Apacheのセットアップ

Apacheはウェブリクエストを処理しレスポンスを返すウェブサーバーです。以下のコマンドでインストールします。
```
sudo apt install apache2
```

インストール後は、ウェブサーバーがインターネットからアクセス可能になるようにファイアウォールのルールを設定しましょう。ここではApache用に登録されているアプリケーションがある**UFWファイアウォール**を使います。

別のファイアウォールを使っている場合は、HTTPのポート80を通す設定をしてください。Linuxのファイアウォールについては[ファイアウォール管理](vserver-linux-firewall.md)ガイドも参考にどうぞ。

UFWファイアウォールを有効化し、SSH用のルールも作成します。
```
# SSH用ルールを作成
sudo ufw allow OpenSSH

# UFWファイアウォールを有効化
sudo ufw enable
```

:::caution
UFWを使う場合は必ずSSH用のルールを作成してください！設定しないと現在のセッションが切断された後、サーバーにSSH接続できなくなります！
:::

次にApache用のルールを作成し、設定を確認します。
```
# Apache用ルールを作成
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

インストール後は、MySQLのセキュリティを強化するためのスクリプトを実行することを強くおすすめします。任意ですが推奨です。
```
sudo mysql_secure_installation
```

対話形式で設定を進めます。まずはパスワードの強度チェックについて聞かれます。将来的に安全なパスワードのみ許可するために`Y`を選び、`MEDIUM`（1）か`STRONG`（2）を選択しましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

次に匿名ユーザーの削除とrootのリモートログイン禁止について聞かれます。セキュリティのため両方とも`Y`で承認することをおすすめします。これによりテストユーザーが削除され、rootユーザーはSSH経由のローカル接続のみ可能になります。

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

最後にテスト用データベースの削除と権限テーブルのリロードを聞かれます。不要なので`Y`で承認し、権限テーブルを更新しましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

MySQLが起動しているか確認するには以下のコマンドでログインを試みます。
```
sudo mysql -u root
```

成功するとウェルカムメッセージが表示されます。終了するには`quit`コマンドを使います。

### PHPのセットアップ

最後にPHPをインストールします。ApacheとMySQLを連携させるためのプラグインも一緒に入れます。
```
sudo apt install php libapache2-mod-php php-mysql
```

インストールが成功したかはバージョン確認でチェックできます。
```
php -v
```

:::tip PHP拡張機能
高度な用途では追加のPHP拡張が必要になることがあります。以下のコマンドで一覧を確認できます。
```
apt search php- | less
```
矢印キーでスクロールし、`Q`で終了。拡張をインストールするには以下のようにします。複数同時に指定可能です。
```
sudo apt install [php_extension] [...]
```
:::

`index.php`ファイルがデフォルトの`.html`より優先されるように、ディレクトリインデックスを調整しましょう。
```
sudo nano /etc/apache2/mods-enabled/dir.conf
```

nanoエディタで`index.php`をリストの先頭に移動します。
```
DirectoryIndex index.php index.html index.cgi index.pl index.xhtml index.htm
```

保存してnanoを終了（`CTRL + X` → `Y` → `ENTER`）。設定を反映するためApacheを再起動します。
```
sudo systemctl restart apache2
```

### テスト用ウェブサイトの作成

LAMPの各コンポーネントが揃ったので、実際に動作を確認するためのテスト用ウェブサイトを作成します。これは任意ですが、LAMPの仕組みを理解するのに役立ちます。

今回はPHPで書かれた小さなTo-Doリストサイトを作り、MySQLのテーブルからデータを取得してApache経由で配信します。

テスト用ドメインとして`zapdocs.example.com`を使います。実際にはドメインを用意し、サーバーのIPアドレスを指す`A`タイプのDNSレコードを必ず設定してください。設定方法は[ドメインレコード](domain-records.md)ガイドを参照。

:::note
ドメインを使わずIPアドレスでアクセスする場合は、後述の仮想ホスト設定で`ServerName`行を削除してください。
:::

#### Apacheの設定

ウェブサーバーでは通常、ウェブサイトのファイルは`/var/www`以下に保存されます。Apacheはデフォルトで`html`ディレクトリにデフォルトページを持っていますが、複数サイトを管理する場合はドメインごとにフォルダを分けるのがおすすめです。

以下のようにドメイン名のフォルダを作成します。例では`/var/www/zapdocs.example.com`です。
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

この設定はポート80（HTTP）でのリクエストを受け、`ServerName`に合致するドメインのリクエストを処理し、指定したフォルダからファイルを配信します。

保存してnanoを終了（`CTRL + X` → `Y` → `ENTER`）。設定ファイルに文法エラーがないか以下でチェックしましょう。
```
sudo apache2ctl configtest
```

仮想ホストを有効化します。
```
sudo a2ensite [your_domain]
```

:::note ドメイン未使用の場合
ドメインを使わない場合は`ServerName`行を削除またはコメントアウトし、デフォルトの仮想ホストを無効化してください。
```
sudo a2dissite 000-default
```
:::

最後にApacheを再起動して設定を反映します。
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

サンプルデータもいくつか挿入します。
```
INSERT INTO todoitems (name, is_completed) VALUES ('Create ZAP-Docs Guide', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('Buy a ZAP-Hosting Server', 1);
INSERT INTO todoitems (name, is_completed) VALUES ('Join ZAP-Hosting Discord', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('Have a great day!', 0);
```

専用の`todo`ユーザーも作成し、権限を付与します。
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

以下のコードをコピーして貼り付けてください。MySQLへの接続と、データベースからTo-Do項目を取得して表示するシンプルなPHPページです。

:::important
`[your_password]`は先ほど設定した`todo`ユーザーのパスワードに必ず置き換えてください。
:::

```
<?php
// MySQL接続設定
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

// SQLクエリ実行、結果を取得
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
              // 各項目をループ処理
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
// 接続を閉じる
$conn->close();
?>
```

貼り付けたら保存してnanoを終了（`CTRL + X` → `Y` → `ENTER`）。

#### ウェブサイトの動作確認

これでLAMPスタックを使ったテスト用To-Doウェブサイトが完成しました！

ブラウザで先ほど設定したドメイン（HTTPのポート80）にアクセスしてみてください。例では`zapdocs.example.com`です。以下のような画面が表示されるはずです。

![](https://screensaver01.zap-hosting.com/index.php/s/NgK2n8xN3wZPLeP/preview)

## まとめ

おめでとうございます！LAMPスタックのインストールとセットアップが無事完了しました！次のステップとして、ぜひドメインと**SSL証明書**の設定を強くおすすめします。これによりウェブサイトへの通信が安全に暗号化されます。

当社の[Certbotガイド](dedicated-linux-certbot.md)では**Apacheプラグイン**を使った証明書の簡単セットアップ方法を紹介しています。対話形式で進められるのでぜひご活用ください。

質問やサポートが必要な場合は、いつでもお気軽に当社のサポートチームまでお問い合わせくださいね！🙂

<InlineVoucher />