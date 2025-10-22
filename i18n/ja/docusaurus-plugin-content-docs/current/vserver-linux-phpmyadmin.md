---
id: vserver-linux-phpmyadmin
title: "VPS: phpMyAdminのインストール"
description: "phpMyAdminの使いやすいウェブインターフェースでMySQLやMariaDBのデータベースを簡単に管理する方法をチェック → 今すぐ詳しく見る"
sidebar_label: phpMyAdminのインストール
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

phpMyAdminはMySQLやMariaDBのデータベースを管理するための無料のウェブベースツールです。SQLコマンドを手動で入力することなく、データベースの作成、編集、管理、削除ができるユーザーフレンドリーなインターフェースを提供します。

<InlineVoucher />

## 準備

インストールを始める前に、システムが最新の状態であることを確認しましょう。保留中のアップデートやアップグレードは以下のコマンドで実行できます：

```
sudo apt update -y
sudo apt upgrade -y
```

また、phpMyAdminを使うにはPHPがすでにインストールされている必要があります。PHPのインストール方法については、当社の[Install PHP](vserver-linux-php.md)ガイドをチェックしてください。  
:::warning PHPパッケージが不足している場合
必要なPHPパッケージが不足していると、phpMyAdminのPHPファイルが正しく処理・表示されません。 
:::

## インストール

準備が整ったら、phpMyAdminのインターフェースのインストールを始めましょう。まずはphpMyAdminをインストールしたいディレクトリを開きます。  
`cd /usr/share`コマンドで該当ディレクトリに移動し、`wget`を使って最新のphpMyAdminバージョンをダウンロードします：

```
wget https://www.phpmyadmin.net/downloads/phpMyAdmin-latest-all-languages.zip -O phpmyadmin.zip
```

:::warning
`wget`コマンドが見つからない場合は、以下のコマンドでインストールしてください：  
`sudo apt install wget -y`  
:::

ダウンロードが完了したら、以下のコマンドでZIPファイルを解凍します：

```
unzip phpmyadmin.zip
```
:::warning
`unzip`コマンドが見つからない場合は、以下のコマンドでインストールしてください：  
`sudo apt install unzip -y`  
:::

解凍したアーカイブをわかりやすい名前にリネームし、ZIPファイルを削除、必要な権限を設定します：

```
mv phpMyAdmin-*-all-languages phpmyadmin
rm phpmyadmin.zip; chmod -R 0755 phpmyadmin
```

## 設定

### Webサーバー設定ファイル

次にphpMyAdminをウェブサーバーの設定に追加します。`nano /etc/apache2/conf-available/phpmyadmin.conf`で新しい  
Virtual Host設定ファイルを作成し、以下の内容を入力してください：

```
# phpMyAdmin Apache configuration

Alias /phpmyadmin /usr/share/phpmyadmin

<Directory /usr/share/phpmyadmin>
    Options SymLinksIfOwnerMatch
    DirectoryIndex index.php
</Directory>

# セキュリティのためアクセス不要なディレクトリへのウェブアクセスを禁止
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

内容を入力したら、***CTRL+X***で保存して閉じ、***Yキー***を押して***Enter***で確定します。

作成したVirtual Host設定ファイルを有効化し、Apacheをリロードします。以下のコマンドを実行してください：

```
a2enconf phpmyadmin
systemctl reload apache2
```

### 必要な一時ディレクトリの作成

phpMyAdminが正常に動作するために、一時ディレクトリを作成し、適切な権限を設定します。以下のコマンドを使ってください：

```
mkdir /usr/share/phpmyadmin/tmp/
chown -R www-data:www-data /usr/share/phpmyadmin/tmp/
```

## まとめ

おめでとうございます！phpMyAdminのインストールと設定が無事完了しました。サーバーのIPアドレスとパス（http://IP-Address/phpmyadmin）を使ってウェブインターフェースにアクセスできます。  
もし質問やサポートが必要な場合は、いつでもお気軽に当社のサポートチームにご連絡ください。毎日対応していますよ！🙂

<InlineVoucher />