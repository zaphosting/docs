---
id: dedicated-linux-java
title: "専用サーバー：Javaのインストール"
description: "Javaアプリをスムーズに動かすために、さまざまなLinuxシステムでのJavaインストール方法を学ぼう。環境をしっかり整える → 今すぐチェック"
sidebar_label: Javaのインストール
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Javaは世界中で使われている超人気のプログラミング言語で、多くのプログラムやサービスに使われています。Javaベースのプログラムを動かすには、システムにJavaがインストールされていることが絶対条件です。ここでは、提供しているLinux OSでJavaをインストールする方法を紹介します。



## 準備

実際にJavaをインストールする前に、システムが最新の状態になっているか確認するのが大事です。まずはSSHでサーバーに接続しましょう。SSHが何か、使い方がわからない場合は、こちらのガイドをチェックしてね: [初回アクセス（SSH）](vserver-linux-ssh.md)

接続できたら、OSに合わせて以下のコマンドでシステムをアップデートします：

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

準備ができたら、いよいよJavaのインストール開始です。OSごとに以下のコマンドを実行してください：

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

インストールが成功したかは、**java --version** コマンドでチェックできます。出力はこんな感じになるはず：

```
openjdk 11.0.9.1 2020-11-04
OpenJDK Runtime Environment (build 11.0.9.1+1-Ubuntu-0ubuntu1.20.04)
OpenJDK 64-Bit Server VM (build 11.0.9.1+1-Ubuntu-0ubuntu1.20.04, mixed mode)
```

この例ではJava 11が無事インストールされています。これでJavaアプリをサクッと動かせる環境が整いました！