---
id: vserver-linux-java
title: "VPS: Javaのインストール"
description: "さまざまなLinuxシステムにJavaをインストールして設定し、プログラムをスムーズに動かす方法を学ぼう → 今すぐ詳しく見る"
sidebar_label: Javaのインストール
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Javaは世界中で多くのプログラムやサービスに使われている超人気のプログラミング言語です。Javaベースのプログラムを動かすには、システムにJavaがインストールされていることが絶対条件。ここでは、提供しているLinux OSでJavaをインストールする方法を紹介します。

<InlineVoucher />

## 準備

実際にJavaをインストールする前に、システムが最新の状態になっているか確認するのが大事。まずはSSHでサーバーに接続します。SSHが何か分からない、使い方がわからない場合は、こちらのガイドをチェックしてね：[初回アクセス（SSH）](vserver-linux-ssh.md)

接続できたら、OSに合わせて以下のコマンドでシステムをアップデートしましょう：

```
// Debian
sudo apt-get update

// Ubuntu
sudo apt update

// CentOS
sudo yum update

// OpenSUSE
sudo zypper up

// Fedora
sudo dnf upgrade --refresh
```

## インストール

準備ができたら、いよいよJavaのインストール開始！OSごとに以下のコマンドを実行してね：

**Debian**

```
sudo apt-get install default-jdk
```

**Ubuntu**

```
sudo apt install default-jdk
```

**CentOS**

```
sudo yum install java-11-openjdk
```

**Fedora**

```
sudo dnf install java-11-openjdk
```

## バージョン確認

インストールが成功したかは、**java --version** コマンドでチェック可能。こんな感じの表示が出ればOKです：

```
openjdk 11.0.9.1 2020-11-04
OpenJDK Runtime Environment (build 11.0.9.1+1-Ubuntu-0ubuntu1.20.04)
OpenJDK 64-Bit Server VM (build 11.0.9.1+1-Ubuntu-0ubuntu1.20.04, mixed mode)
```

## まとめ

おめでとう！Javaのインストールと設定が無事完了しました！もし何か質問やトラブルがあれば、毎日対応しているサポートチームに気軽に連絡してね！

<InlineVoucher />