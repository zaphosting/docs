---
id: dedicated-linux-wordpress
title: "専用サーバー：WordPressのインストール"
description: "LAMPスタックを使ってLinuxサーバーにWordPressをインストールし、効率的にウェブサイトを構築・管理する方法をチェック → 今すぐ詳しく見る"
sidebar_label: WordPressのインストール
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

WordPressは、ウェブサイトの管理や公開に使われる人気のウェブコンテンツ管理システムです。近年では、メール、フォーラム、ストアなど様々な分野に進化しています。活発なコミュニティによって強力なプラグインエコシステムやテンプレートが整備されており、エンドユーザーでも簡単にセットアップできるのが特徴です。このガイドでは、LinuxサーバーにWordPress CMSをインストールする手順を解説します。

![](https://screensaver01.zap-hosting.com/index.php/s/r26L7xASWY3d5Z5/preview)

<InlineVoucher />

## 準備

まずはSSHでサーバーに接続しましょう。やり方がわからない場合は、[初回アクセス（SSH）](dedicated-linux-ssh.md)ガイドを参考にしてください。

:::info
このガイドではUbuntuディストリビューションを使い、ウェブサーバーにApache、データベースにMySQL、コア依存関係にPHPを使用します。これらをまとめてLAMPスタック（Linux、Apache、MySQL、PHP）と呼びます。
:::

ログインしたら、まずはアップデートコマンドを実行します。
```
sudo apt update
```

続いて必要な依存関係を一括でインストールします。以下のコマンドを丸ごとコピーして貼り付けてください。インストールには少し時間がかかる場合があります。
```
sudo apt install apache2 \
                 ghostscript \
                 libapache2-mod-php \
                 mysql-server \
                 php \
                 php-bcmath \
                 php-curl \
                 php-imagick \
                 php-intl \
                 php-json \
                 php-mbstring \
                 php-mysql \
                 php-xml \
                 php-zip
```

依存関係がインストールできたら、LAMPスタックのコア機能が正常に動作するようにいくつかの推奨設定を行いましょう。

### Apacheとファイアウォール

まずはApacheウェブサーバーがインターネットと通信できるようにファイアウォールを設定し、正常に動作しているか確認します。適切なファイアウォールルールを作成し、ウェブサーバーが外部からアクセス可能であることが重要です。

ここではApacheが登録アプリケーションとして用意されている**UFWファイアウォール**を使います。別のファイアウォールを使っている場合は、HTTPのポート80を通す設定をしてください。Linuxのファイアウォールについては[ファイアウォール管理](vserver-linux-firewall.md)ガイドも参考にどうぞ。

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

続いてApache用のルールを作成し、設定が反映されているか確認します。
```
# Apache用ルールを作成
sudo ufw allow in "Apache Full"

# UFWのルールを確認
sudo ufw status
```

:::tip
`ufw app list`コマンドで利用可能なプロファイルを確認できます。ここで使った`Apache Full`はHTTP（ポート80）とHTTPS（ポート443）の両方を許可するルールを作成します。
:::

`Apache`と`Apache (v6)`のルールが`ALLOW`になっていればOKです。SSHルールなど他のルールも表示されるはずです。

![](https://screensaver01.zap-hosting.com/index.php/s/o8NDBppnTwHdSgf/preview)

ファイアウォールが開放されたら、ブラウザで`http://[あなたのIPアドレス]`にアクセスしてApacheが動作しているか確認しましょう。

正常ならデフォルトのウェルカムページが表示されます。表示されない場合は以下のコマンドでApacheの状態をチェックしてください。
```
systemctl status apache2
```

![](https://screensaver01.zap-hosting.com/index.php/s/irmnDDNi436HH4c/preview)

### MySQLのセットアップ

次にMySQLの初期セットアップを行います。セキュリティを強化するために`mysql_secure_installation`スクリプトを実行することを強くおすすめします。これは任意ですが、実行したほうが安全です。
```
sudo mysql_secure_installation
```

対話形式で進みます。最初にパスワードの強度チェックについて聞かれます。将来的に安全なパスワードのみ許可するために`Y`を選び、強度は`1`（MEDIUM）か`2`（STRONG）を選択しましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

続いて匿名ユーザーの削除とrootのリモートログイン禁止について聞かれます。セキュリティ上の理由から両方とも`Y`で承認することをおすすめします。これによりテストユーザーが削除され、rootユーザーはローカル（SSH経由）からのみアクセス可能になります。

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

最後にテスト用データベースの削除と権限テーブルのリロードを聞かれます。こちらも`Y`で承認してください。

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

MySQLが起動しているか確認するため、以下のコマンドでログインを試みます。
```
sudo mysql -u root
```

成功すればウェルカムメッセージが表示されます。終了するには`quit`コマンドを使います。

![](https://screensaver01.zap-hosting.com/index.php/s/gFKBAZyaFiHgrCz/preview)

### PHPの動作確認

最後にPHPが正常に動作しているか確認しましょう。Apacheの`/var/www/html/`ディレクトリに`info.php`ファイルを作成し、`phpinfo()`を実行する内容を記述します。
```
# nanoエディタで新規ファイルを開く
nano /var/www/html/info.php

# 以下の内容を貼り付け
<?php
phpinfo();
?>
```

保存は`CTRL+X`、`Y`、`Enter`で行います。

ブラウザで以下のURLにアクセスし、PHP情報ページが表示されればOKです。
```
http://[あなたのIPアドレス]/info.php
```

![](https://screensaver01.zap-hosting.com/index.php/s/bSg3nHaKRatBxFR/preview)

これでLAMPスタックのコア依存関係が動作確認できたので、いよいよWordPressの本インストールに進みましょう。

## インストール

WordPressのインストールは大きく3つのステップに分かれます。まずMySQLデータベースの準備、次にWordPress本体のインストール、最後にセットアップウィザードでの設定です。

### MySQLデータベースの準備

インストールを始める前に、新しいMySQLデータベースを作成します。これは後でWordPressセットアップウィザードで使うので、以下の例を参考にしてください。

以下のコマンドをコピーして、データベースとユーザーを作成します。
```
# MySQLにログイン
sudo mysql -u root

# データベース作成
CREATE DATABASE wordpress;

# wordpress専用ユーザー作成
# [your_password]は任意のパスワードに置き換えてください
CREATE USER wordpress@localhost IDENTIFIED BY '[your_password]';

# ユーザーに権限付与（まとめてコピー）
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER
ON wordpress.*
TO wordpress@localhost;

# 権限テーブルをリロード
FLUSH PRIVILEGES;
```

データベースとユーザーが作成できたら、`quit`コマンドでMySQLからログアウトします。これでWordPressのインストール準備が整いました。

### WordPressのインストール

WordPress本体はAPTパッケージではなく、公式の**wordpress.org**から直接ダウンロードすることをおすすめします。WordPress公式もこちらを推奨しており、トラブルを避けられます。

最新のファイルを一時ディレクトリにダウンロードします。
```
cd /tmp && wget https://wordpress.org/latest.tar.gz
```

ダウンロードしたアーカイブを展開すると、`wordpress`フォルダが作成されます。
```
tar -xvf latest.tar.gz
```

展開したファイルをApacheの`/var/www/html/`ディレクトリにコピーし、ウェブからアクセスできるようにします。以下のコマンドでコピー、アップロード用ディレクトリ作成、権限設定を行います。
```
# wordpressフォルダをコピーし所有権を変更
cp -R wordpress /var/www/html/
chown -R www-data:www-data /var/www/html/wordpress/

# アップロード用ディレクトリ作成
mkdir /var/www/html/wordpress/wp-content/uploads

# ファイル権限を調整
chmod -R 755 /var/www/html/wordpress/
chown -R www-data:www-data /var/www/html/wordpress/wp-content/uploads/
```

これでWordPressのインストールは完了です。セットアップウィザードにアクセスしましょう。
```
http://[あなたのIPアドレス]/wordpress
```

### セットアップウィザード

セットアップウィザードでWordPressの設定を行います。最初に言語選択が表示されます。

続いてデータベース設定を入力します。先ほどMySQLで準備した情報を使うので、例に従って入力してください。`[your_password]`は先ほど設定したパスワードに置き換えます。

![](https://screensaver01.zap-hosting.com/index.php/s/4ZmA43WMjf2bBxB/preview)

設定が終わるとインストール実行の画面になります。これがセットアップの最後のステップです。

![](https://screensaver01.zap-hosting.com/index.php/s/7kfjz8p2cCzoD8S/preview)

次の画面ではサイトタイトル、メールアドレス、WordPress管理者アカウントのユーザー名とパスワードを入力します。検索エンジンのインデックス設定もここで選べます。

:::tip
強力なパスワードを設定し、ログイン情報は必ず保存しておきましょう！WordPressパネルへのアクセスに必要です。
:::

準備ができたら**WordPressをインストール**ボタンを押してセットアップを完了させます。

![](https://screensaver01.zap-hosting.com/index.php/s/BZwxEpQAs3sKcc7/preview)

成功するとログインページにリダイレクトされるので、先ほどのアカウント情報でログインしましょう！

![](https://screensaver01.zap-hosting.com/index.php/s/qEGcRQFWBcLDosj/preview)

ログインに成功すると、WordPressの管理パネルが表示されます。これでインストール完了です！

![](https://screensaver01.zap-hosting.com/index.php/s/r26L7xASWY3d5Z5/preview)

## まとめ

おめでとうございます！WordPressのインストールと設定が無事完了しました。次のステップとして、**ドメイン**と**SSL証明書**の設定を強くおすすめします。これによりデータ通信が安全になり、WordPressパネルへのアクセスも簡単になります。ぜひ[Certbotガイド](dedicated-linux-certbot.md)の**Apacheプラグイン**を参考に、対話形式で証明書をサクッと設定してください。

さらにWordPressの拡張やカスタマイズには、[WordPressプラグイン](webspace-wordpress-plugins.md)や人気のページビルダー「Elementor」を紹介した[WordPress Elementor](webspace-wordpress-elementor.md)ガイドもおすすめです。

質問やサポートが必要な場合は、いつでもお気軽にサポートチームまでご連絡くださいね！🙂

<InlineVoucher />