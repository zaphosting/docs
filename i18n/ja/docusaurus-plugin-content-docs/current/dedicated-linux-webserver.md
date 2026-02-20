---
id: dedicated-linux-webserver
title: "LinuxサーバーにNginxとApacheをセットアップ - 強力なウェブサーバー環境を構築しよう"
description: "NginxやApacheのウェブサーバーを効率的にセットアップ＆設定する方法をチェック → 今すぐ詳しく見る"
sidebar_label: ウェブサーバーのインストール
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

NginxとApacheは、ユーザーのブラウザにウェブページを配信するために使われる人気のウェブサービスです。ここでは、どちらかのサービスをシステムにインストールする方法を紹介します。



## 準備

ウェブサーバーの実際のインストールを始める前に、システムが最新の状態であることを確認する必要があります。まずはSSHでサーバーに接続しましょう。SSHが何か、使い方がわからない場合は、こちらのガイドをチェックしてください: [初回アクセス（SSH）](vserver-linux-ssh.md)。

接続できたら、以下のコマンドでOSに合わせてシステムをアップデートします：

```
// Debian
sudo apt-get update

// Ubuntu
sudo apt update

// CentOS
sudo yum update

// OpenSUSE
sudo zypper update

// Fedora
sudo dnf upgrade --refresh
```



## インストール

準備が整ったら、いよいよウェブサーバーのインストールを始めましょう。OSとウェブサーバーによって、以下のコマンドを実行してください：



### Apache

```
// Debian
sudo apt install apache2

// Ubuntu
sudo apt install apache2

// CentOS
sudo yum install httpd

// OpenSUSE
sudo zypper install httpd

// Fedora
sudo dnf install httpd
```

ウェブサーバーのインストールが完了したら、あなたのウェブサイトのファイルをアップロードできます。FTP/SFTPでサーバーに接続し、以下のディレクトリに移動してファイルをアップロードしてください。

```
/var/www/html/
```



### Nginx

```
// Debian
sudo apt install nginx

// Ubuntu
sudo apt install nginx

// CentOS
sudo yum install nginx

// OpenSUSE
sudo zypper install nginx

// Fedora
sudo dnf install nginx
```

ウェブサーバーのインストールが完了したら、あなたのウェブサイトのファイルをアップロードできます。FTP/SFTPでサーバーに接続し、以下のディレクトリに移動してファイルをアップロードしてください。

```
/usr/share/nginx/html
```



## バージョン確認

インストールが完了したら、`apache2 -v`（Apache）または `nginx -v`（Nginx）コマンドでインストールが成功したかチェックしましょう。出力は以下のような感じになります：



### Apache

```
apache2 -v
Server version: Apache/2.4.41 (Ubuntu)
Server built:   XXXX-XX-XXTXX:XX:XX
```



### Nginx

```
nginx -V
nginx version: nginx/1.2.3
...
```

どちらかの出力が確認できれば、ウェブサーバーのインストールは無事成功です！