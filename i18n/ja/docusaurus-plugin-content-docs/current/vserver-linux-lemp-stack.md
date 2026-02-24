---
id: vserver-linux-lemp-stack
title: "LinuxサーバーにLEMPスタックをセットアップ - 高性能ウェブアプリをデプロイしよう"
description: "Linux VPSサーバーで動的なPHPサイトをホスティングするためのLEMPスタックのセットアップ方法 → 今すぐチェック"
sidebar_label: Web LEMPスタック
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

**LEMP**スタックは、PHPサイトやアプリに特化した動的ウェブホスティングを簡単に実現するために一緒にセットアップされる人気のオープンソースソフトウェア群です。頭文字は、**L**inux（OS）、"**E**ngine x"（nginx）ウェブサーバー、**M**ySQLデータベース、そして最後に**P**HP（処理）を表しています。このガイドでは、Linux VPS上にLEMPスタックをセットアップする手順を、ToDoリストのウェブサイトを例に詳しく解説します。

<InlineVoucher />

## 準備

まずはSSHでサーバーに接続しましょう。やり方がわからない場合は、[初回アクセス（SSH）](vserver-linux-ssh.md)ガイドをチェックしてください。

本ガイドではUbuntuをLinuxディストリビューションとして使用します。Debianでも同様の手順で、他のディストリビューションでも似たような流れですが、コマンドの書式が若干異なる場合があります。OSがインストールされていてSSH接続できることを確認してください。

インストールを始める前に、必ず以下のコマンドでパッケージを最新にアップデートしましょう：
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

インストールはLEMPの各コアコンポーネントごとに分けて進めます。まずNginxウェブサーバー、次にMySQLデータベース、最後にPHPです。インストール中にPHPで書かれたテスト用ウェブサイトを作成し、MySQLデータベースにアクセスし、Nginx経由でリクエストを処理・配信する流れを体験します。

### Nginxのセットアップ

Nginxはウェブリクエストを処理しレスポンスを返すウェブサーバーです。以下のコマンドでインストールします。
```
sudo apt install nginx
```

インストール後は、ウェブサーバーがインターネットからアクセス可能になるようにファイアウォールの設定を確認しましょう。ここではNginxが登録アプリケーションとしてある**UFWファイアウォール**を使います。

別のファイアウォールを使っている場合は、HTTPのポート80を通す設定をしてください。Linuxのファイアウォールについては[ファイアウォール管理](vserver-linux-firewall.md)ガイドも参考にどうぞ。

UFWファイアウォールを有効にし、SSH用のルールも作成します。
```
# SSH用ルール作成
sudo ufw allow OpenSSH

# UFWファイアウォール有効化
sudo ufw enable
```

:::caution
UFWファイアウォールを使う場合は必ずSSH用ルールを作成してください！設定しないと現在のセッションが切れた後にサーバーへSSH接続できなくなります！
:::

次にNginx用のルールを作成し、設定を確認します。
```
# Nginx用ルール作成
sudo ufw allow in "Nginx Full"

# UFWファイアウォールの状態確認
sudo ufw status
```

:::tip
利用可能なプロファイルは `ufw app list` コマンドで確認できます。ここで使った `Nginx Full` はHTTP（ポート80）とHTTPS（ポート443）の両方を許可する設定です。
:::

`Nginx` と `Nginx (v6)` のルールが `ALLOW` になっていればOKです。SSHルールなど他のルールも表示されます。

![](https://screensaver01.zap-hosting.com/index.php/s/A36rfRzL3gFGq9x/preview)

ファイアウォールが開放されたら、ブラウザでサーバーのIPアドレスにアクセスしてNginxが動作しているか確認しましょう：`http://[your_ipaddress]`

正常ならデフォルトのウェルカムページが表示されます。表示されない場合は以下のコマンドでサービスの状態を確認してください：`systemctl status nginx`

![](https://screensaver01.zap-hosting.com/index.php/s/EqFoyXMJMaHc3dc/preview)

### MySQLのセットアップ

次にMySQLサーバーをインストールし、リレーショナルにデータを永続保存できるデータベースとして使います。
```
sudo apt install mysql-server
```

インストール後はセキュリティを強化するために推奨されるスクリプトを実行しましょう。任意ですが強くおすすめします。以下のコマンドで起動します。
```
sudo mysql_secure_installation
```

対話形式で進みます。まずパスワードの検証について聞かれます。将来的に安全なパスワードのみ許可するために `Y` を選び、`1`（MEDIUM）か `2`（STRONG）を選択しましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

次に匿名ユーザーの削除とrootのリモートログイン禁止について聞かれます。セキュリティのため両方とも `Y` で承認することを強く推奨します。これでテストユーザーが削除され、rootユーザーはSSH経由のローカル接続のみ可能になります。

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

最後にテストデータベースの削除と権限テーブルのリロードを聞かれます。こちらも不要なので `Y` で承認してください。

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

MySQLが起動しているかは以下のコマンドでログインを試みて確認できます：`sudo mysql -u root`。成功するとウェルカムメッセージが表示されます。終了は `quit` コマンドで。

### PHPのセットアップ

最後のLEMPコンポーネントはPHPです。NginxでPHPを動かすには外部プログラムの `php-fpm`（PHP fastCGIプロセスマネージャー）を使います。Nginxはリクエストを `php-fpm` に渡して処理します。

以下のコマンドで最新のphp-fpmとMySQL用PHPプラグインをインストールします。これでNginxとPHP、PHPとMySQLが連携可能になります。
```
sudo apt install php-fpm php-mysql
```

インストールが成功したかはバージョン確認でチェックしましょう。バージョンが表示されればOKです。
```
php -v
```

:::tip PHP拡張機能
高度な用途では追加のPHP拡張が必要になることもあります。以下のコマンドで一覧を確認できます。
```
apt search php- | less
```
矢印キーでスクロールし、終了は `Q` キー。拡張をインストールするには以下のように複数指定も可能です。
```
sudo apt install [php_extension] [...]
```
:::

### テスト用ウェブサイトの作成

LEMPの各コンポーネントが揃ったので、実際に動作を確認するためのテスト用ウェブサイトを作成します。これは任意ですが、LEMPの仕組みを理解するのに役立ちます。

今回はPHPで書かれた小さなToDoリストサイトを作り、MySQLのテーブルからデータを取得してNginx経由で配信します。

テスト用に `zapdocs.example.com` というドメインを使います。実際にはドメインを用意し、サーバーのIPアドレスを指す `A`タイプのDNSレコードを必ず設定してください。設定方法は[ドメインレコード](domain-records.md)ガイドを参照。

:::note
ドメインを使わずIPアドレスでアクセスしたい場合は、`[your_domain]` の部分を任意の名前に置き換え、サーバーブロックの `server_name` パラメータは削除してください。
:::

#### Nginxの設定

ウェブサーバーでは通常、ウェブサイトのファイルは `/var/www` 配下に保存されます。Nginxはデフォルトで `html` ディレクトリにデフォルトページを持っていますが、複数サイトを管理する場合はドメインごとにフォルダを分けるのがおすすめです。

以下のようにドメイン名のフォルダを作成します。例では `/var/www/zapdocs.example.com` です。
```
sudo mkdir /var/www/[your_domain]
```

次に、`sites-available` にドメイン用のNginxサーバーブロック設定ファイルを作成します。
```
sudo nano /etc/nginx/sites-available/[your_domain].conf
```

以下のテンプレートをコピーし、`[your_domain]` を使うドメインに置き換えてnanoに貼り付けてください。
```
server {
    listen 80;
    server_name [your_domain] www.[your_domain];
    root /var/www/[your_domain];

    index index.php index.html index.htm;

    location / {
        try_files $uri $uri/ =404;
    }

    location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/var/run/php/php[your_phpversion]-fpm.sock;
     }

    location ~ /\.ht {
        deny all;
    }
}
```

:::important PHPバージョン
`[your_phpversion]` はインストール済みのPHPバージョンに合わせて変更してください。`php -v` コマンドでバージョンを確認できます。例：`PHP 8.3.6 (cli)` なら `8.3` を指定し、以下のようにします。
```
fastcgi_pass unix:/var/run/php/php8.3-fpm.sock;
```
:::

このサーバーブロックはポート80（HTTP）をリッスンし、`server_name` に合致するリクエストを受け付けます。ルートディレクトリは先ほど作成した `/var/www/[your_domain]` です。

保存してnanoを終了するには `CTRL + X`、`Y`、`ENTER` の順に押します。

最後にこの設定を有効化するため、`sites-enabled` にシンボリックリンクを作成します。
```
sudo ln -s /etc/nginx/sites-available/[your_domain].conf /etc/nginx/sites-enabled/
```

:::note ドメイン未使用の場合
ドメインを使わない場合は `server_name` 行を削除またはコメントアウトし、デフォルトのサーバーブロックを無効化してください。
```
sudo unlink /etc/nginx/sites-enabled/default
```
:::

設定ファイルに文法エラーがないかは以下でチェックできます。
```
sudo nginx -t
```

問題なければNginxをリロードして設定を反映します。
```
sudo systemctl reload nginx
```

#### ウェブサイトの作成

Nginxの設定ができたので、実際に配信するウェブサイトファイルを作成します。現状フォルダは空なので何も表示されません。ここではToDoリストのPHPサイトを作ります。

##### データベースの準備

まずMySQLにログインし、新しいデータベースとテーブルを作成します。
```
sudo mysql -u root
```

以下のSQLを実行して `todowebsite` データベースと `todoitems` テーブルを作成します。
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

専用の `todo` ユーザーも作成します。
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

最後に `/var/www/[your_domain]` に `index.php` ファイルを作成します。
```
sudo nano /var/www/[your_domain]/index.php
```

以下のコードをコピーして貼り付けてください。MySQLへの接続とToDoリストの表示を行います。

:::important
`[your_password]` は先ほど設定した `todo` ユーザーのパスワードに必ず置き換えてください。
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
<html lang="en">
  <head>
      <meta charset="UTF--8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>To-Do List</title>
  </head>
  <body>
      <h1>Awesome To-Do List :D</h1>
      <p>For our awesome ZAP-Hosting guide: <a href="https://zap-hosting.com/guides/docs/vserver-linux-lemp-stack">https://zap-hosting.com/guides/docs/vserver-linux-lemp-stack</a></p>
      <ul>
          <?php
          // 結果があるかチェック
          if ($result->num_rows > 0) {
              // 各エントリーをループ処理
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
              // データがなければメッセージ表示
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

貼り付けたら `CTRL + X`、`Y`、`ENTER` で保存して終了します。

#### ウェブサイトの動作確認

これでLEMPスタックを使ったテスト用ToDoサイトが完成しました！

ブラウザで先ほど設定したドメイン（HTTP/ポート80）にアクセスしてみてください。例では `zapdocs.example.com` です。以下のような画面が表示されるはずです。

![](https://screensaver01.zap-hosting.com/index.php/s/NgK2n8xN3wZPLeP/preview)

## まとめ

おめでとうございます！LEMPスタックのインストールとセットアップが無事完了しました！次のステップとして、ぜひドメインと**SSL証明書**の設定を強くおすすめします。これによりウェブサイトへの通信が安全に暗号化されます。

[Certbotガイド](dedicated-linux-certbot.md)の**Nginxプラグイン**に注目して、対話形式のセットアップを進めてみてください。簡単に証明書を取得・設定できます。

質問やサポートが必要な場合は、いつでもお気軽にサポートチームへお問い合わせくださいね！🙂

<InlineVoucher />