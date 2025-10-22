---
id: vserver-linux-php
title: 'VPS: PHPのインストール'
description: "LinuxサーバーにPHPをインストールしてウェブ開発を始めよう。Apacheやスタンドアロンでの最適な設定方法も解説 → 今すぐチェック"
sidebar_label: PHPをインストール
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

PHPはウェブ開発で広く使われている人気の汎用プログラミング言語です。このガイドでは、サーバーにPHPをインストールする手順を解説します。

<InlineVoucher />

## 準備

まずはSSHでサーバーに接続しましょう。接続方法がわからない場合は、[初回アクセス（SSH）](vserver-linux-ssh.md)ガイドをチェックしてください。

ログインしたら、サーバーを安全かつ最新の状態に保つために、使用しているOSに合わせたアップデートコマンドを実行することをおすすめします。

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

LinuxサーバーにPHPをインストールする方法は大きく分けて2つあります。スタンドアロンで使う方法と、Apacheの追加パッケージとしてインストールする方法です。Apache以外のウェブサーバーを使う場合や汎用的に使いたい場合はスタンドアロンをおすすめします。Apacheウェブサーバーと一緒に使う場合はApache用の方法でインストールしましょう。

## スタンドアロン

最新のPHPをインストールするには以下のコマンドを使います。特定のバージョンをインストールしたい場合は、`-y`オプションの後にバージョンを指定してください。

```
# 最新版
sudo apt install php

# 特定バージョン（例: php7.4）
sudo apt -y install php[version]
```

`php -v`コマンドでインストールが成功したか確認しましょう。これでサーバーにPHPがインストールされました。必要な拡張機能を入れるために、**PHP拡張機能**のセクションもぜひ読んでみてください。

## Apacheでの利用

まずはApacheをまだインストールしていなければ、以下のコマンドでインストールしましょう。

```
sudo apt install apache2
```

インストール後は、ウェブサーバーがインターネットからアクセスできるようにファイアウォールの設定を行います。ここではApache用の登録済みアプリケーションがある**UFWファイアウォール**を例にします。別のファイアウォールを使っている場合は、HTTPのポート80を開放してください。

```
sudo ufw allow in "Apache"
```

これでサーバーにアクセスできるはずです。ブラウザで `http://[your_serverip]` にアクセスして確認してみましょう。

Apacheの準備ができたら、以下のコマンドでApache用のPHPパッケージをインストールします。

```
sudo apt install php libapache2-mod-php
```

`php -v`コマンドでインストールが成功したか確認しましょう。これでApacheと一緒にPHPが使えるようになりました。必要な拡張機能を入れるために、**PHP拡張機能**のセクションもぜひ読んでみてください。

## PHP拡張機能

PHPには機能を拡張できる多くのオプション拡張機能があります。利用可能な拡張機能の一覧を確認するには、以下のコマンドを実行してください。検索結果を`less`コマンドでページ送りしながら見られます。

```
apt search php- | less
```

矢印キーでスクロールし、終了するときは `Q` を押します。拡張機能をインストールするには、以下のように`apt install`コマンドでパッケージ名を指定します。複数の拡張機能をスペース区切りで一度に指定すると効率的です。

```
sudo apt install [php_extension] [...]
```

## まとめ

これでLinuxサーバーにPHPを無事インストールできました。もし質問やサポートが必要な場合は、いつでもお気軽にサポートチームにお問い合わせくださいね！毎日対応しています 🙂 

<InlineVoucher />