---
id: dedicated-linux-lemp-stack
title: "専用サーバー：LEMPスタックのセットアップ - Linux、Nginx、MySQL、PHP"
description: "Linuxサーバーで動的なPHPウェブサイトをホスティングするためのLEMPスタックのセットアップ方法を実例付きで解説 → 今すぐチェック"
sidebar_label: Web LEMPスタック
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

**LEMP**スタックは、PHPウェブサイトやアプリに特化した動的なウェブサイトホスティングを簡単に実現するために一緒にセットアップされる人気のオープンソースソフトウェア群です。頭文字は、**L**inux（OS）、"**E**ngine x"（nginx）をウェブサーバー、**M**ySQLをデータベース、そして最後に**P**HPを処理に使うことを表しています。このガイドでは、Linux専用サーバーにLEMPスタックをセットアップする手順を、詳細な解説とTo-Doリストウェブサイトの例を交えて紹介します。

<InlineVoucher />

## 準備

まずはSSHでサーバーに接続しましょう。やり方がわからない場合は、[初回アクセス（SSH）](vserver-linux-ssh.md)ガイドをチェックしてください。

このガイドではUbuntuをLinuxディストリビューションとして使用します。Debianでも同様の手順で、他のディストリビューションでもコマンドの書式が多少異なる場合がありますが基本は同じです。OSがインストールされていてSSH接続ができる状態であることを確認してください。

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

インストールはLEMPの各コアコンポーネントごとに分けて行います。まずNginxウェブサーバー、次にMySQLデータベース、最後にPHPです。インストール中にPHPで書かれたテスト用ウェブサイトをセットアップし、MySQLデータベースにアクセスし、Nginxを通じてリクエストを処理・配信する流れを作ります。

### Nginxのセットアップ

Nginxはウェブリクエストを処理しレスポンスを返すウェブサーバーです。以下のコマンドでインストールします。
```
sudo apt install nginx
```

インストール後は、ウェブサーバーがインターネットからアクセス可能になるようにファイアウォールのルールを設定しましょう。ここではNginx用の登録済みアプリケーションがある**UFWファイアウォール**を使います。

別のファイアウォールを使っている場合は、HTTPのポート80を通す設定をしてください。Linuxのファイアウォールについては[ファイアウォール管理](vserver-linux-firewall.md)ガイドも参考にどうぞ。

UFWファイアウォールを有効にし、SSH用のルールも作成します。
```
# SSH用ルール作成
sudo ufw allow OpenSSH

# UFWファイアウォール有効化
sudo ufw enable
```

:::caution
UFWファイアウォールを使う場合は必ずSSH用ルールを作成してください！これをしないと現在のセッションが切れた後、サーバーにSSH接続できなくなります！
:::

次にNginx用のルールを作成し、ルールが正しく設定されているか確認します。
```
# Nginx用ルール作成
sudo ufw allow in "Nginx Full"

# UFWファイアウォールのルール確認
sudo ufw status
```

:::tip
利用可能なプロファイルは `ufw app list` コマンドで確認できます。上記の例で使った `Nginx Full` はHTTP（ポート80）とHTTPS（ポート443）の両方を許可するルールを作成します。
:::

`Nginx` と `Nginx (v6)` のルールが `ALLOW` になっていればファイアウォールの設定はOKです。SSHルールなど他のルールも表示されるはずです。

![](https://screensaver01.zap-hosting.com/index.php/s/A36rfRzL3gFGq9x/preview)

ファイアウォールが開放されたら、ブラウザでサーバーのIPアドレスにアクセスしてNginxが動作しているか確認しましょう。例：`http://[your_ipaddress]`

正常ならデフォルトのウェルカムページが表示されます。表示されない場合は以下のコマンドでサービスの状態を確認してください：`systemctl status nginx`

![](https://screensaver01.zap-hosting.com/index.php/s/EqFoyXMJMaHc3dc/preview)

### MySQLのセットアップ

次にMySQLサーバーをインストールし、リレーショナルにデータを永続化できるデータベースを用意します。
```
sudo apt install mysql-server
```

インストール後はセキュリティを強化するために推奨されるスクリプトを実行しましょう。これは任意ですが強く推奨します。以下のコマンドで実行できます。
```
sudo mysql_secure_installation
```

対話形式で進みます。最初にパスワードの検証について聞かれます。将来的に安全なパスワードのみ許可するために `Y` を選び、`MEDIUM`（1）か `STRONG`（2）を選択しましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

次に匿名ユーザーの削除とrootのリモートログイン禁止について聞かれます。セキュリティ上の理由から両方とも `Y` を選択することを強く推奨します。これによりテストユーザーが削除され、rootユーザーはSSH経由のローカルのみで使えるようになりリスクが減ります。

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

最後にテストデータベースの削除と権限テーブルのリロードを聞かれます。こちらも不要なので `Y` を選択してください。

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

MySQLが起動しているか確認するには以下のコマンドでログインを試みます：`sudo mysql -u root`。成功すればウェルカムメッセージが表示されます。終了は `quit` コマンドで。

### PHPのセットアップ

最後のLEMPコンポーネントはPHPです。NginxでPHPを動かすには外部プログラムの `php-fpm`（PHP fastCGIプロセスマネージャー）を使います。Nginxはリクエストを `php-fpm` に渡して処理させます。

以下のコマンドで最新のphp-fpmとMySQL用PHPプラグインをインストールします。これでNginxがPHPを扱え、PHPからMySQLを使えるようになります。
```
sudo apt install php-fpm php-mysql
```

インストールが成功したかはバージョン確認でチェックできます。バージョンが表示されればOKです。
```
php -v
```

:::tip PHP拡張機能
高度な用途では追加のPHP拡張機能が必要になる場合があります。以下のコマンドで一覧を確認できます。
```
apt search php- | less
```
矢印キーでスクロールし、終了は `Q` を押します。拡張機能のインストールは以下のように複数同時に指定可能です。
```
sudo apt install [php_extension] [...]
```
:::

### テスト用ウェブサイトの作成

LEMPの各コンポーネントが揃ったので、実際に動作を確認するためのテスト用ウェブサイトを作成します。これは任意ですが、LEMPスタックの連携を理解するのに役立ちます。

今回はPHPで書かれた小さなTo-Doリストサイトを作り、MySQLのテーブルからデータを取得してNginx経由で配信します。

例として `zapdocs.example.com` というテスト用ドメインを使います。実際にはドメインを使うことが多いので、必ずサーバーのIPアドレスを指す `A`タイプのDNSレコードを設定してください。設定方法は[ドメインレコード](domain-records.md#a-records)ガイドを参照。

:::note
ドメインを使わずIPアドレスでアクセスしたい場合は、以降の `[your_domain]` を任意の名前に置き換え、サーバーブロックの `server_name` 行は削除してください。
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

以下のテンプレートをコピーして、`[your_domain]` を使うドメインに置き換えてください。
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
`[your_phpversion]` はインストールされているPHPのバージョンに置き換えてください。`php -v` で確認できます。例：`PHP 8.3.6 (cli) ...` なら `8.3` を使い、以下のようにします。
```
fastcgi_pass unix:/var/run/php/php8.3-fpm.sock;
```
:::

このサーバーブロックはポート80（HTTP）をリッスンし、`server_name` に合致するリクエストを受け付けます。ルートディレクトリは先ほど作成した `/var/www/[your_domain]` です。

ファイルを保存してnanoを終了するには `CTRL + X`、`Y`、`ENTER` の順に押します。

最後にこの設定を有効化するため、`sites-enabled` にシンボリックリンクを作成します。
```
sudo ln -s /etc/nginx/sites-available/[your_domain].conf /etc/nginx/sites-enabled/
```

:::note ドメインを使わない場合
ドメインを使わない場合は `server_name` 行を削除またはコメントアウトし、デフォルトのサーバーブロックを無効化してください。
```
sudo unlink /etc/nginx/sites-enabled/default
```
:::

設定ファイルに文法エラーがないかは以下でチェックできます。
```
sudo nginx -t
```

問題なければNginxを再起動して設定を反映します。
```
sudo systemctl reload nginx
```

#### ウェブサイトの作成

Nginxの設定ができたので、実際に配信するウェブサイトを作成します。現状フォルダは空なので何も表示されません。ここでは先述のTo-Doリストサイトを作ります。

##### データベースの準備

まずはMySQLに新しいデータベースとテーブルを作成します。MySQLにログインしましょう。
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

続いてサンプルデータをいくつか挿入します。
```
INSERT INTO todoitems (name, is_completed) VALUES ('Create ZAP-Docs Guide', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('Buy a ZAP-Hosting Server', 1);
INSERT INTO todoitems (name, is_completed) VALUES ('Join ZAP-Hosting Discord', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('Have a great day!', 0);
```

最後にこのウェブサイト専用の `todo` ユーザーを作成します。
```
# ユーザー作成
# [your_password] は任意のパスワードに置き換えてください
CREATE USER todo@localhost IDENTIFIED BY '[your_password]';

# 権限付与（まとめてコピーしてください）
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER
ON todowebsite.*
TO todo@localhost;

# 権限リロード
FLUSH PRIVILEGES;
```

準備ができたら `quit` コマンドでMySQLを終了します。

##### PHPウェブサイトファイル

最後に、To-DoページのPHPファイルを `/var/www/[your_domain]` に作成します。nanoで新規作成しましょう。
```
sudo nano /var/www/[your_domain]/index.php
```

以下のコードをコピーして貼り付けてください。最初のPHP部分でMySQLに接続し、後半のHTML部分でデータをリスト表示します。

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
// 接続を閉じる
$conn->close();
?>
```

貼り付けたら `CTRL + X`、`Y`、`ENTER` で保存してnanoを終了します。

#### ウェブサイトの動作確認

これでLEMPスタックを使ったテスト用To-Doウェブサイトが完成しました！

先ほど設定したドメイン（HTTP/ポート80）でアクセスしてみましょう。例では `zapdocs.example.com` です。以下のような画面が表示されるはずです。

![](https://screensaver01.zap-hosting.com/index.php/s/NgK2n8xN3wZPLeP/preview)

## まとめ

おめでとうございます！LEMPスタックのインストールとセットアップが無事完了しました！次のステップとして、ドメインと**SSL証明書**の設定を強くおすすめします。これによりウェブサイトへの通信が安全に暗号化されます。

当社の[Certbotガイド](vserver-linux-certbot.md#webroot-plugin)の**Nginxプラグイン**部分を参考に、対話形式で簡単に証明書を取得・設定できます。

質問やサポートが必要な場合は、いつでもお気軽に当社のサポートチームにお問い合わせください！毎日対応していますよ！🙂

<InlineVoucher />