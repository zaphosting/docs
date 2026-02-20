---
id: vserver-linux-php
title: 'LinuxサーバーにPHPをセットアップ - パワフルな動的ウェブアプリを作ろう'
description: "LinuxサーバーにPHPをインストールしてウェブ開発を始めよう。Apacheやスタンドアロンでの最適な設定方法も解説 → 今すぐチェック"
sidebar_label: PHPのインストール
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

PHPはウェブ開発で大人気の汎用プログラミング言語です。このガイドでは、サーバーにPHPをインストールする手順を紹介します。

<InlineVoucher />

## 準備

まずはSSHでサーバーに接続しましょう。接続方法がわからない場合は、[初回アクセス（SSH）](vserver-linux-ssh.md)ガイドをチェックしてください。

ログインしたら、サーバーを安全かつ最新の状態に保つために、使用しているOSに合わせたアップデートコマンドを実行するのがおすすめです。

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

LinuxサーバーにPHPをインストールする方法は大きく分けて2つあります。スタンドアロンで使う方法と、Apache用の追加パッケージとしてインストールする方法です。Apache以外のウェブサーバーを使う場合や汎用的に使いたい場合はスタンドアロンをおすすめします。Apacheで使うならApache用の方法でPHPを追加しましょう。

## スタンドアロン

最新のPHPをインストールするには以下のコマンドを使います。特定のバージョンを入れたい場合は、`-y`オプションの後にバージョンを指定してください。

```
# 最新版
sudo apt install php

# 特定バージョン（例: php7.4）
sudo apt -y install php[version]
```

`php -v`コマンドでインストールが成功したか確認しましょう。これでサーバーにPHPが無事インストールされました。必要な拡張機能があれば、**PHP拡張機能**のセクションもチェックしてください。

## Apacheでの利用

まずはApacheをまだ入れていなければ、以下のコマンドでインストールしましょう。

```
sudo apt install apache2
```

インストール後は、ウェブサーバーがインターネットからアクセスできるようにファイアウォールの設定を確認します。ここではApache用に登録されている**UFWファイアウォール**を例にします。別のファイアウォールを使っている場合は、HTTPのポート80を開放してください。

```
sudo ufw allow in "Apache"
```

これでサーバーにアクセスできるはずです。ブラウザで `http://[your_serverip]` にアクセスしてみてください。

Apacheが準備できたら、以下のコマンドでApache用のPHPパッケージをインストールします。

```
sudo apt install php libapache2-mod-php
```

`php -v`でインストールを確認しましょう。これでApacheとPHPの連携が完了です。必要な拡張機能は**PHP拡張機能**のセクションを参考にしてください。

## PHP拡張機能

PHPは機能拡張用の多彩な拡張モジュールが用意されています。利用可能な拡張機能の一覧を見たい場合は、以下のコマンドで検索結果をスクロールしながら確認できます。

```
apt search php- | less
```

矢印キーでスクロールし、終了したいときは `Q` を押してください。拡張機能をインストールするには、以下のように `apt install` コマンドを使います。複数の拡張機能をスペース区切りで一気に入れることも可能です。

```
sudo apt install [php_extension] [...]
```

## まとめ

これでLinuxサーバーにPHPを無事インストールできました。もし質問やサポートが必要なら、いつでもお気軽にサポートチームにお問い合わせくださいね！🙂

<InlineVoucher />