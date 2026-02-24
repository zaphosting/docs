---
id: dedicated-linux-lamp-stack
title: "LinuxサーバーにLAMPスタックをセットアップ - クラシックPHPアプリをパワーアップ"
description: "Linuxサーバーで動的なPHPウェブサイトを効率的にホスティングするためのLAMPスタックのセットアップ方法を発見 → 今すぐチェック"
sidebar_label: Web LAMPスタック
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

**LAMP**スタックは、特にPHPウェブサイトやアプリにフォーカスしたシンプルな動的ウェブサイトホスティングを可能にするために一緒にセットアップされる人気のオープンソースソフトウェア群です。頭文字は、**L**inux（OS）、**A**pache（ウェブサーバー）、**M**ySQL（データベース）、そして最後に**P**HP（処理）を表します。このガイドでは、Linux専用サーバーにLAMPスタックをセットアップするプロセスを、詳細な解説とTo-Doリストウェブサイトのセットアップ例を交えて紹介します。

## 準備

まずはSSHでサーバーに接続しましょう。やり方がわからない場合は、[初回アクセス（SSH）](vserver-linux-ssh.md)ガイドをチェックしてください。

このガイドではUbuntuをLinuxディストリビューションとして使用します。Debianでも同様の手順で、他のディストリビューションでも似たような手順ですが、コマンドの構文が若干異なる場合があります。OSがインストールされていてSSH接続されていることを確認してください。

いつものように、インストールを始める前に以下のコマンドでパッケージを最新にアップデートしましょう：
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

インストールはLAMPの各コア依存関係ごとに分けて行います。まずApacheウェブサーバー、次にMySQLデータベース、最後にPHPです。インストール中にPHPで書かれたテストウェブサイトをセットアップし、MySQLデータベースにアクセスします。最後に各ウェブリクエストはApacheウェブサーバーを通じて処理・配信されます。

### Apacheのセットアップ

Apacheはウェブリクエストを処理しレスポンスを返すウェブサーバーです。以下のコマンドでインストールします。
```
sudo apt install apache2
```

インストール後は、ウェブサーバーがインターネットからアクセス可能になるように適切なファイアウォールルールを作成しましょう。ここではApacheが登録アプリケーションとしてある**UFWファイアウォール**を使います。

別のファイアウォールを使っている場合は、ポート80（HTTP）を通すように設定してください。Linuxのファイアウォールについては[ファイアウォール管理](vserver-linux-firewall.md)ガイドを参照してください。

UFWファイアウォールが有効で、SSH用のルールが作成されていることを確認します。
```
# SSH用ルール作成
sudo ufw allow OpenSSH

# UFWファイアウォール有効化
sudo ufw enable
```

:::caution
UFWファイアウォールを使う場合は必ずSSH用ルールを作成してください！これをしないと現在のセッションが切れた際にサーバーにSSH接続できなくなります！
:::

次にApache用のルールを作成し、ルールが正しく設定されているか確認します。
```
# Apache用ルール作成
sudo ufw allow in "Apache Full"

# UFWファイアウォールルール確認
sudo ufw status
```

:::tip
`ufw app list`コマンドで利用可能なプロファイルを確認できます。上記の`Apache Full`はHTTP（ポート80）とHTTPS（ポート443）の両方を許可するルールを作成します。
:::

`Apache`と`Apache (v6)`のルールが`ALLOW`になっていればファイアウォールは準備完了です。SSHルールなど他のルールも表示されるはずです。

![](https://screensaver01.zap-hosting.com/index.php/s/o8NDBppnTwHdSgf/preview)

ファイアウォールがApache用に開放されたら、Apacheが正常に動作しているか確認しましょう。ブラウザでサーバーのIPアドレスにアクセスしてみてください：`http://[your_ipaddress]`

正常ならデフォルトのウェルカムページが表示されます。表示されない場合は以下のコマンドでサービスの状態を確認してください：`systemctl status apache2`

![](https://screensaver01.zap-hosting.com/index.php/s/irmnDDNi436HH4c/preview)

### MySQLのセットアップ

次にMySQLサーバーをインストールし、リレーショナルにデータを永続的に保存できるデータベースとして設定します。以下のコマンドでインストールします。
```
sudo apt install mysql-server
```

インストール後はMySQLサーバーのセキュリティを強化するために、`sudo mysql_secure_installation`コマンドでセキュアインストールスクリプトを実行することを強くおすすめします。これは任意ですが推奨されます。

対話形式で進み、最初にパスワードの検証について聞かれます。将来的に安全なパスワードのみ許可するために`Y`を選択し、`MEDIUM`（1）か`STRONG`（2）を選びましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

次に匿名ユーザーの削除とrootのリモートログイン禁止について聞かれます。セキュリティ上の理由から両方とも`Y`で承認することを強く推奨します。これによりテストユーザーが削除され、rootユーザーはSSH経由のローカルのみで使用可能になりリスクが減ります。

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

最後にテストデータベースの削除と権限テーブルのリロードについて聞かれます。テストテーブルは不要なので`Y`で承認し、権限テーブルをリロードしましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

MySQLが起動しているか確認するには、以下のコマンドでログインを試みます：`sudo mysql -u root`。成功すればウェルカムメッセージが表示されます。準備ができたら`quit`コマンドで終了してください。

### PHPのセットアップ

最後のLAMP依存関係はPHPです。以下のコマンドでPHPとApache用プラグイン、MySQL用プラグインを一緒にインストールします。これによりApacheがPHPを扱い、PHPがMySQLを利用できるようになります。
```
sudo apt install php libapache2-mod-php php-mysql
```

インストールが成功したかはバージョン確認でチェックできます。バージョンが表示されればPHPは正常に動作しています。
```
php -v
```

:::tip PHP拡張機能
高度な用途では追加のPHP拡張機能が必要になる場合があります。`apt search php- | less`コマンドで一覧を確認できます。

矢印キーでスクロールし、`Q`で終了します。拡張機能をインストールするには以下のように複数指定も可能です。

```
sudo apt install [php_extension] [...]
```
:::

`index.php`ファイルがデフォルトの`.html`より優先されるようにディレクトリインデックスを調整することをおすすめします。以下のコマンドで設定ファイルを開きます。
```
sudo nano /etc/apache2/mods-enabled/dir.conf
```

nanoエディタで`index.php`をリストの先頭に移動させます。
```
DirectoryIndex index.php index.html index.cgi index.pl index.xhtml index.htm
```

保存してnanoを終了するには`CTRL + X`、`Y`、`ENTER`を押します。変更を反映させるためApacheを再起動します。
```
sudo systemctl restart apache2
```

### テスト用ウェブサイトの作成

LAMPの各依存関係のインストールが完了したので、LAMPスタックがどのように連携して動的ウェブサイトを構築するかを示すテストウェブサイトを作成します。これは完全に任意ですが、ツールの活用方法を理解するのに役立ちます。

ここではPHPで書かれた小さなTo-Doリストウェブサイトを作成し、MySQLデータベースのテーブルからTo-Do項目を取得して返します。Apacheを通じて配信されます。

実際の運用ではドメインを使うことが多いため、ここではテスト用に`zapdocs.example.com`というドメインを使います。**必ず**サーバーのIPアドレスを指す`A`タイプのDNSレコードを設定してください。設定方法は[ドメインレコード](domain-records.md)ガイドを参照してください。

:::note
ドメインを使わずにIPアドレスでアクセスしたい場合は、`[your_domain]`の部分を任意の名前に置き換え、後述の仮想ホストファイル作成時に`ServerName`パラメータを削除してください。
:::

#### Apacheの設定

一般的にウェブサーバーでは全てのウェブサイトファイルは`/var/www`ディレクトリ以下に保存されます。Apacheはデフォルトで`html`ディレクトリにデフォルトページを持っていますが、複数サイトをホスティングする場合は各サイトごとに個別のディレクトリを作ることをおすすめします。

例えば`/var/www/[your_domain]`ディレクトリを作成します。ここでは`/var/www/zapdocs.example.com`になります。
```
sudo mkdir /var/www/[your_domain]
```

次に`sites-available`ディレクトリにこのドメイン用のApache仮想ホスト設定ファイルを作成します。
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

この仮想ホストファイルはポート80（HTTP）リクエストを処理し、`ServerName`に指定したドメインにマッチするか確認します。また、先ほど作成した`/var/www/[your_domain]`フォルダをファイル配信元として指定しています。

保存してnanoを終了したら、`sudo apache2ctl configtest`コマンドで構文エラーがないか確認しましょう。

最後に`a2ensite`コマンドで新しい仮想ホストを有効化します。
```
sudo a2ensite [your_domain]
```

:::note ドメイン未使用時
ドメインを使わない場合は`ServerName`行を削除または`#`でコメントアウトし、デフォルト仮想ホストを無効化してください。
```
sudo a2dissite 000-default
```
:::

Apacheを再起動して設定を反映させます。
```
sudo systemctl restart apache2
```

#### ウェブサイトの作成

Apacheの仮想ホストとドキュメントルートが設定できたので、実際に配信するウェブサイトを作成します。現状フォルダは空なので何も配信されません。ここでは前述のTo-Doリストサイトを作成します。

##### データベースの準備

まずは新しいデータベースとテーブルを作成し、リスト項目を保存できるようにします。MySQLにログインします。
```
sudo mysql -u root
```

次に`todowebsite`データベースと、その中に`todoitems`テーブルを作成します。
```
# データベース作成
CREATE DATABASE todowebsite;

# 作成したデータベースを使用
USE todowebsite;

# itemsテーブル作成
CREATE TABLE todoitems (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    is_completed BOOLEAN DEFAULT FALSE,
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

テーブルができたらサンプルデータをいくつか挿入します。
```
INSERT INTO todoitems (name, is_completed) VALUES ('Create ZAP-Docs Guide', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('Buy a ZAP-Hosting Server', 1);
INSERT INTO todoitems (name, is_completed) VALUES ('Join ZAP-Hosting Discord', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('Have a great day!', 0);
```

最後にこのウェブサイト専用の`todo`ユーザーを作成します。
```
# 専用ユーザー作成
# [your_password]は任意のパスワードに置き換えてください
CREATE USER todo@localhost IDENTIFIED BY '[your_password]';

# ユーザーに権限付与（まとめてコピー）
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER
ON todowebsite.*
TO todo@localhost;

# 権限をリロード
FLUSH PRIVILEGES;
```

準備ができたら`quit`コマンドでMySQLを終了してください。

##### PHPウェブサイトファイル

最後にTo-DoページのPHPファイルを作成します。先ほど作った`/var/www/[your_domain]`ディレクトリに`index.php`ファイルを作成します。
```
sudo nano /var/www/[your_domain]/index.php
```

以下のコードをnanoにコピーしてください。最初のPHP部分はMySQLへの接続を確立します。

:::important
`[your_password]`は先ほど設定した`todo`ユーザーのパスワードに必ず変更してください。
:::

HTML部分はメインのウェブページで、結果をループして順不同リストを作成します。

```
<?php
// MySQL接続準備
$servername = "localhost";
$username = "todo";
$password = "[your_password]";
$dbname = "todowebsite";

// 接続作成
$conn = new mysqli($servername, $username, $password, $dbname);

// 接続成功確認、失敗ならエラー表示
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// SQLクエリでテーブルからエントリを取得し$resultにセット
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
          // 結果があるか確認
          if ($result->num_rows > 0) {
              // クエリ結果の各エントリをループ
              foreach ($result as $entry) {
                  echo "<li>";
                  // 名前を表示、XSS対策でhtmlspecialchars使用
                  echo htmlspecialchars($entry["name"]);

                  // 完了状況を表示
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
              // 見つからなければメッセージ表示
              echo "<li>No to-do items found.</li>";
          }
          ?>
      </ul>
  </body>
</html>

<?php
// データベース接続を閉じる
$conn->close();
?>
```

コピーしたら`CTRL + X`、`Y`、`ENTER`で保存してnanoを終了します。

#### ウェブサイトのテスト

これでLAMPスタックの全要素を使ったテスト用To-Doウェブサイトが完成しました！

先ほど設定したドメイン（HTTP/ポート80）でアクセスできるはずです。例では`zapdocs.example.com`です。結果は以下のようになります：

![](https://screensaver01.zap-hosting.com/index.php/s/NgK2n8xN3wZPLeP/preview)

## まとめ

おめでとうございます！LAMPスタックのインストールとセットアップに成功しました！次のステップとして、ドメインと**SSL証明書**の設定を**強くおすすめ**します。これによりウェブサイトへのデータ送信が安全になります。ぜひ[Certbotガイド](dedicated-linux-certbot.md)の**Apacheプラグイン**に注目し、対話形式のセットアップで簡単に証明書を取得してください。

質問やサポートが必要な場合は、いつでもお気軽にサポートチームにお問い合わせくださいね！🙂