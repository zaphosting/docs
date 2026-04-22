---
id: dedicated-linux-phpmyadmin
title: "LinuxサーバーにphpMyAdminをセットアップ - Webインターフェースでデータベース管理"
description: "phpMyAdminのWebインターフェースでMySQLやMariaDBのデータベースを簡単に管理する方法を解説 → 今すぐチェック"
sidebar_label: phpMyAdminのインストール
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

phpMyAdminはMySQLやMariaDBのデータベースを管理するための無料のWebベースツールです。SQLコマンドを手動で入力することなく、データベースの作成、編集、管理、削除ができる使いやすいインターフェースを提供します。

## One Click AppsインストーラーでphpMyAdminをインストール

VPSのWebインターフェースにある**One Click Appsインストーラー**から直接**phpMyAdmin**をインストールできます。初期アプリ設定が完了したら、アプリカタログを開き、**phpMyAdmin**を検索。お好みのプロジェクト、環境、ドメイン設定でデプロイを開始しましょう。コマンドラインでの手動セットアップ不要で、Webベースの管理、カスタムドメイン対応、利用可能な場合はSSLも自動で設定されるので、手軽かつ快適にphpMyAdminを運用できます。

## 準備

インストールを始める前に、システムが最新の状態であることを確認してください。保留中のアップデートやアップグレードは以下のコマンドで実行できます：

```
sudo apt update -y
sudo apt upgrade -y
```

また、phpMyAdminの利用にはPHPが必須なので、すでにPHPがインストールされていることを確認してください。PHPのインストール方法は、[PHPインストールガイド](vserver-linux-php.md)を参考にしてください。

:::warning PHPパッケージが不足している場合
必要なPHPパッケージが不足していると、phpMyAdminのPHPファイルが正しく処理・表示されません。 
:::

## インストール

準備が整ったら、phpMyAdminのインターフェースをインストールしましょう。まずはphpMyAdminをインストールしたいディレクトリを開きます。

`cd /usr/share`コマンドで該当ディレクトリに移動し、`wget`を使って最新のphpMyAdminをダウンロードします：

```
wget https://www.phpmyadmin.net/downloads/phpMyAdmin-latest-all-languages.zip -O phpmyadmin.zip
```

:::warning
`wget`コマンドが見つからない場合は、以下のコマンドでインストールしてください：
`sudo apt install wget -y` 
:::

ダウンロードが完了したら、次のコマンドでZIPファイルを解凍します：

```
unzip phpmyadmin.zip
```

:::warning
`unzip`コマンドが見つからない場合は、以下のコマンドでインストールしてください：
`sudo apt install unzip -y` 
:::

解凍したフォルダをわかりやすい名前にリネームし、ZIPファイルを削除、必要な権限を設定します：

```
mv phpMyAdmin-*-all-languages phpmyadmin
rm phpmyadmin.zip; chmod -R 0755 phpmyadmin
```

## 設定

### Webサーバーの設定ファイル

次にphpMyAdminをWebサーバーの設定に追加します。`nano /etc/apache2/conf-available/phpmyadmin.conf`で新しい設定ファイルを作成し、以下の内容を入力してください：

```
# phpMyAdmin Apache設定

Alias /phpmyadmin /usr/share/phpmyadmin

<Directory /usr/share/phpmyadmin>
    Options SymLinksIfOwnerMatch
    DirectoryIndex index.php
</Directory>

# セキュリティのためアクセス不要なディレクトリへのWebアクセスを禁止
<Directory /usr/share/phpmyadmin/templates>
    Require all denied
</Directory>
<Directory /usr/share/phpmyadmin/libraries>
    Require all denied
</Directory>
<Directory /usr/share/phpmyadmin/setup/lib>
    Require all denied
</Directory>
```

入力が終わったら、`CTRL+X`で保存して閉じ、`Y`を押して`Enter`で確定します。

作成した設定ファイルを有効化し、Apacheをリロードします：

```
a2enconf phpmyadmin
systemctl reload apache2
```

### 必要な一時ディレクトリの作成

phpMyAdminが正常に動作するために、一時ディレクトリを作成し、適切な権限を設定します。以下のコマンドを実行してください：

```
mkdir /usr/share/phpmyadmin/tmp/
chown -R www-data:www-data /usr/share/phpmyadmin/tmp/
```

## まとめ

おめでとうございます！phpMyAdminのインストールと設定が無事完了しました。サーバーのIPアドレスとパス（http://IP-Address/phpmyadmin）を使ってWebインターフェースにアクセスできます。もし質問やサポートが必要な場合は、いつでもお気軽にサポートチームまでご連絡くださいね！🙂