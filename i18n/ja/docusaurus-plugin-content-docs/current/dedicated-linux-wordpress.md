---
id: dedicated-linux-wordpress
title: "LinuxサーバーにWordPressをセットアップ - 自分だけのウェブサイトやブログを始めよう"
description: "LAMPスタックを使ってLinuxサーバーにWordPressをインストールし、効率的にウェブサイトを構築・管理する方法を解説 → 今すぐチェック"
sidebar_label: WordPressのインストール
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

WordPressは、ウェブサイトの管理や公開に使われる人気のウェブコンテンツ管理システムです。近年では、メール、フォーラム、ストアなど様々な分野に進化しています。活発なコミュニティによって強力なプラグインエコシステムやテンプレートが整備されており、エンドユーザーでも簡単にセットアップできるのが特徴です。このガイドでは、LinuxサーバーにWordPress CMSをインストールする手順を紹介します。

![](https://screensaver01.zap-hosting.com/index.php/s/r26L7xASWY3d5Z5/preview)



## ワンクリックアプリインストーラーでWordPressをインストール

VPSのウェブインターフェースにある**ワンクリックアプリインストーラー**から、**WordPress**を直接インストールできます。初期アプリ設定が完了したら、アプリカタログを開き、**WordPress**を検索。お好みのプロジェクト、環境、ドメイン設定でデプロイを開始しましょう。コマンドラインでの手動セットアップ不要で、ウェブベースの管理やカスタムドメイン対応、SSL発行（対応している場合）などのメリットも享受できます。

## 準備

まずはSSHでサーバーに接続しましょう。やり方がわからない場合は、[初期アクセス（SSH）](dedicated-linux-ssh.md)ガイドをチェックしてください。

:::info
このガイドではUbuntuディストリビューションを使い、ウェブサーバーにApache、データベースにMySQL、コア依存関係にPHPを使用します。これがLAMPスタック（Linux、Apache、MySQL、PHP）です。
:::

ログインしたら、まずはアップデートコマンドを実行します。
```
sudo apt update
```

続いて必要な依存関係をすべてインストールします。以下のコマンドを丸ごとコピーして貼り付けてください。インストールには少し時間がかかる場合があります。
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

依存関係のインストールが終わったら、LAMPスタックのコア依存関係が正常に動作するように、いくつかの推奨設定を行いましょう。

### Apacheとファイアウォール

まずはApacheウェブサーバーがインターネットと通信できるようにファイアウォールを設定し、正常に動作しているか確認します。ウェブサーバーがインターネットからアクセス可能になるよう、適切なファイアウォールルールを作成することが重要です。

ここではApacheが登録アプリケーションとして用意されている**UFWファイアウォール**を使います。別のファイアウォールを使っている場合は、HTTPのポート80を通す設定をしてください。Linuxのファイアウォールについては[ファイアウォール管理](vserver-linux-firewall.md)ガイドも参考にどうぞ。

UFWファイアウォールが有効で、SSH用のルールが作成されていることを確認します。
```
# SSH用ルールを作成
sudo ufw allow OpenSSH

# UFWファイアウォールを有効化
sudo ufw enable
```

:::caution
UFWファイアウォールを使う場合は必ずSSH用のルールを作成してください！設定しないと、現在のセッションが切断された際にサーバーへSSH接続できなくなります！
:::

次にApache用のルールを作成し、ルールが正しく設定されているか確認します。
```
# Apache用ルールを作成
sudo ufw allow in "Apache Full"

# UFWファイアウォールのルールを確認
sudo ufw status
```

:::tip
利用可能なプロファイルは `ufw app list` コマンドで確認できます。上記の例で使った `Apache Full` はHTTP（ポート80）とHTTPS（ポート443）の両方を許可するルールを作成します。
:::

`Apache` と `Apache (v6)` のルールが `ALLOW` になっていればファイアウォールの設定はOKです。SSHルールなど他のルールも表示されるはずです。

![](https://screensaver01.zap-hosting.com/index.php/s/o8NDBppnTwHdSgf/preview)

Apache用のファイアウォールを開放したら、Apacheが正常に動作しているか確認しましょう。ブラウザで `http://[あなたのIPアドレス]` にアクセスしてみてください。

正常ならデフォルトのウェルカムページが表示されます。表示されない場合は、以下のコマンドでサービスの状態を確認してください： `systemctl status apache2`

![](https://screensaver01.zap-hosting.com/index.php/s/irmnDDNi436HH4c/preview)

### MySQLのセットアップ

次はMySQLの初期セットアップです。MySQLサーバーのセキュリティを保つために、セキュアインストールスクリプトを実行することを強くおすすめします。これは任意ですが推奨されます。以下のコマンドで実行可能です： `sudo mysql_secure_installation`

対話形式のセットアップが始まります。最初にパスワードのバリデーションについて聞かれます。将来的に安全なパスワードのみを許可するために `Y` を選択し、次に `1`（MEDIUM）か `2`（STRONG）を選びましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

続いて匿名ユーザーの削除とrootのリモートログイン禁止について聞かれます。セキュリティ上の理由から両方とも `Y` を選択することを強く推奨します。これによりテストユーザーが削除され、rootユーザーはSSH経由のローカルアクセスのみ可能となりリスクが減ります。

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

最後にテストデータベースの削除と権限テーブルのリロードを聞かれます。テストテーブルは不要なので `Y` を選択し、権限テーブルをリロードしましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

MySQLが起動しているか確認するために、以下のコマンドでログインを試みてください： `sudo mysql -u root`。成功するとウェルカムメッセージが表示されます。準備ができたら `quit` コマンドで終了できます。

![](https://screensaver01.zap-hosting.com/index.php/s/gFKBAZyaFiHgrCz/preview)

### PHPの動作確認

最後にPHPが正常に動作しているか確認しましょう。Apacheの `/var/www/html/` ディレクトリに `info.php` ファイルを作成し、`phpinfo()` 関数を実行する内容を記述します。
```
# nanoエディタで新規ファイルを開く
nano /var/www/html/info.php

# 以下の内容を貼り付け
<?php
phpinfo();
?>
```

保存は `CTRL+X` → `Y` → `Enter` で完了です。

ブラウザで以下のURLにアクセスし、PHP情報ページが表示されれば正常です。
```
http://[あなたのIPアドレス]/info.php
```

![](https://screensaver01.zap-hosting.com/index.php/s/bSg3nHaKRatBxFR/preview)

これでLAMPのコア依存関係が動作確認できたので、WordPressの本インストールに進みましょう。

## インストール

WordPressのインストールは大きく3つのステップに分かれます。まずMySQLデータベースの準備、次にWordPressのインストール、最後にセットアップウィザードでの設定です。

### MySQLデータベースの準備

インストールを始めるには、新しいMySQLデータベースを作成する必要があります。これは後でWordPressセットアップウィザードで使うので、以下の例を参考にしてください。

以下のコマンドをコピーして、データベース、テーブル、ユーザーを作成しましょう。
```
# MySQLにログイン
sudo mysql -u root

# データベース作成
CREATE DATABASE wordpress;

# wordpress専用ユーザー作成
# [your_password] は任意のパスワードに置き換えてください
CREATE USER wordpress@localhost IDENTIFIED BY '[your_password]';

# ユーザーに権限付与（まとめてコピー）
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER
ON wordpress.*
TO wordpress@localhost;

# 権限テーブルをリロード
FLUSH PRIVILEGES;
```

データベースとユーザーの作成が終わったら、`quit` コマンドでMySQLを終了します。これでWordPressのインストール準備が整いました。

### WordPressのインストール

WordPress本体は、APTパッケージではなく公式の**wordpress.org**から直接ダウンロードすることをおすすめします。WordPress公式もこちらを推奨しており、トラブルを避けられます。

最新リリースを一時ディレクトリにダウンロードするには以下のコマンドを使います。
```
cd /tmp && wget https://wordpress.org/latest.tar.gz
```

ダウンロードしたアーカイブを展開すると、必要なファイルが入った `wordpress` フォルダができます。
```
tar -xvf latest.tar.gz
```

展開したファイルをApacheの `/var/www/html/` ディレクトリにコピーし、ウェブからアクセスできるようにします。以下のコマンドでコピー、アップロード用ディレクトリ作成、権限設定を行います。
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

これでWordPressのインストールは完了です。セットアップウィザードは以下のURLからアクセスできます： `http://[あなたのIPアドレス]/wordpress`

### セットアップウィザード

セットアップウィザードでWordPressの設定を行います。最初に言語選択が表示されます。

続いてデータベース設定を入力します。先ほどMySQLで準備した情報を使うので、例に沿って入力してください。`[your_password]` は先ほど設定したパスワードに置き換えましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/4ZmA43WMjf2bBxB/preview)

設定が終わるとインストールを実行する画面が表示されます。これがセットアップの最後のステップです。

![](https://screensaver01.zap-hosting.com/index.php/s/7kfjz8p2cCzoD8S/preview)

次のページではサイトタイトル、メールアドレス、WordPress管理者アカウントのユーザー名とパスワードを入力します。検索エンジンのインデックス設定も選べます。

:::tip
強力なパスワードを設定し、ログイン情報は必ず保存しておきましょう！WordPressパネルへのアクセスに必要です。
:::

準備ができたら、**WordPressをインストール**ボタンを押してセットアップを完了させます。

![](https://screensaver01.zap-hosting.com/index.php/s/BZwxEpQAs3sKcc7/preview)

成功ページに移動し、**ログイン**ページへリダイレクトされます。ログインを選択し、先ほどのアカウント情報でWordPressパネルに初ログインしましょう！

![](https://screensaver01.zap-hosting.com/index.php/s/qEGcRQFWBcLDosj/preview)

ログイン成功すると、WordPressパネルのダッシュボードが表示され、インストール完了です。

![](https://screensaver01.zap-hosting.com/index.php/s/r26L7xASWY3d5Z5/preview)

## まとめ

おめでとうございます！WordPressのインストールと設定が無事完了しました。次のステップとして、**ドメイン**と**SSL証明書**の設定を強くおすすめします。これによりデータ通信が安全になり、WordPressパネルへのアクセスも簡単になります。ぜひ[Certbotガイド](dedicated-linux-certbot.md)の**Apacheプラグイン**に注目し、対話形式のセットアップで選んだドメインに証明書を素早く簡単に設定してください。

さらに詳しい設定やカスタマイズには、[WordPressプラグイン](webspace-wordpress-plugins.md)や[WordPress Elementor](webspace-wordpress-elementor.md)のガイドもぜひチェックしてみてください。プラグインの導入や人気のページビルダーElementorの使い方を解説しています。

質問やサポートが必要な場合は、いつでもお気軽にサポートチームまでご連絡ください！毎日対応していますよ 🙂