---
id: dedicated-linux-php
title: '専用サーバー：PHPのインストール'
description: "LinuxサーバーにPHPをインストールしてウェブ開発を始めよう。必須拡張機能でセットアップを最適化 → 今すぐチェック"
sidebar_label: PHPのインストール
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

PHPはウェブ開発で広く使われている人気の汎用プログラミング言語です。このガイドでは、PHPをサーバーにインストールする手順を解説します。

<InlineVoucher />

## 準備

まずはSSHでサーバーに接続しましょう。接続方法がわからない場合は、[初回アクセス（SSH）](vserver-linux-ssh.md)ガイドを参考にしてください。

ログイン後は、サーバーを安全かつ最新の状態に保つために、使用しているOSに対応したアップデートコマンドを実行することをおすすめします。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
  sudo apt update
```

</TabItem>
<TabItem value="centos" label="CentOS">

```
  sudo yum update
```

</TabItem>
<TabItem value="opensuse" label="OpenSUSE">

```
  sudo zypper update
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```
  sudo dnf update
```

</TabItem>
</Tabs>

## インストール

LinuxサーバーにPHPをインストールする方法は主に2つあります。スタンドアロンでのインストールか、Apache用の追加パッケージとしてのインストールです。Apache以外のウェブサーバーを使っている場合や汎用的な用途ならスタンドアロン方式をおすすめします。Apacheウェブサーバーと一緒に使う場合は、Apache用のパッケージとしてインストールしましょう。

## スタンドアロン

最新のPHPをインストールするには以下のコマンドを使います。特定のバージョンをインストールしたい場合は、`-y`オプションの後にバージョンを指定してください。

```
# 最新版
sudo apt install php

# 特定バージョン（例：php7.4）
sudo apt -y install php[version]
```

`php -v`コマンドでインストールが成功したか確認しましょう。これでサーバーにPHPがインストールされました。必要な拡張機能をインストールするために、**PHP拡張機能**のセクションもぜひチェックしてください。

## Apacheを使う場合

まず、まだApacheをインストールしていなければ以下のコマンドでインストールします。

```
sudo apt install apache2
```

インストール後は、ウェブサーバーがインターネットからアクセスできるように適切なファイアウォール設定を行いましょう。ここではApacheが登録アプリケーションとしてある**UFWファイアウォール**を例にします。別のファイアウォールを使っている場合は、HTTPのポート80を開放してください。

```
sudo ufw allow in "Apache"
```

これでサーバーにアクセスできるはずです。ブラウザで `http://[your_serverip]` にアクセスして確認してみましょう。

Apacheが準備できたら、以下のコマンドでApache用のPHPパッケージをインストールします。

```
sudo apt install php libapache2-mod-php
```

`php -v`コマンドでインストールが成功したか確認しましょう。これでApacheと一緒にPHPが使えるようになりました。必要な拡張機能をインストールするために、**PHP拡張機能**のセクションもぜひチェックしてください。

## PHP拡張機能

PHPには機能を拡張できる多くのオプション拡張機能があります。利用可能な拡張機能の一覧を見るには、以下のコマンドを実行してください。検索結果は`less`コマンドでページ送りしながら確認できます。

```
apt search php- | less
```

矢印キーでスクロールし、終了するには`Q`を押します。拡張機能をインストールするには、以下のように`apt install`コマンドを使います。複数の拡張機能をスペース区切りで一度に指定するとインストールが速くなります。

```
sudo apt install [php_extension] [...]
```

## まとめ

これでLinuxサーバーにPHPを無事インストールできました。質問やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にお問い合わせくださいね！🙂

<InlineVoucher />