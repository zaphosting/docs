---
id: vserver-linux-firewall
title: "VPS: Linuxでのファイアウォール管理"
description: "サーバーを安全に保ち、必要な外部接続を許可するためのファイアウォール設定方法 → 今すぐ詳しく学ぼう"
sidebar_label: ポートフォワーディング（ファイアウォール）
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

多くのサービスやプログラムでは外部からの接続を許可する必要があります。これはファイアウォールを設定することで可能になります。
このガイドでは、ファイアウォールの設定方法と接続許可のやり方を学びます。

<InlineVoucher />

## 準備

ファイアウォールをインストールするには、SSHでサーバーに接続する必要があります。やり方がわからない場合は、[初回アクセス](vserver-linux-ssh.md)ガイドをチェックしてみてください。
接続後は、`apt update` と `apt upgrade` を使ってサーバーを最新状態にアップデートしましょう。

## UFWの使い方（簡単）

Linuxには複数のファイアウォールプログラムがありますが、このガイドでは人気の高い2つ、UFWとIPTablesにフォーカスします。
まずは設定や管理が簡単なUFWから始めましょう。

### UFWのインストール

`sudo apt install ufw` でAPT経由で簡単にインストールできます。
SSH接続が切れないように、まだ有効化はせずにまず設定を行いましょう。

### UFWの設定

デフォルトでは以下のポリシーをおすすめします：

`sudo ufw default deny incoming`  
と  
`sudo ufw default allow outgoing`

次にSSH接続や開けたいポートを許可します：

`sudo ufw allow 22` （SSH用）

`sudo ufw allow 80` （HTTPの例）

`sudo ufw allow 25565` （Minecraftサーバーの例）


UFWを有効にするには `sudo ufw enable` を実行します。必要に応じて後からも `sudo ufw allow ポート番号` でポートを追加できます。


### ポートフォワーディングの追加

ポートを開放するには以下のコマンドを使います：

TCPポートの場合：

`sudo ufw allow ポート番号/tcp`  
（ポート番号は開放したいポートに置き換えてください）

例：Minecraftサーバー用に `sudo ufw allow 25565/tcp`

UDPポートの場合：

`sudo ufw allow ポート番号/udp`  
（ポート番号は開放したいポートに置き換えてください）

例：TeamSpeak 3サーバー用に `sudo ufw allow 9987/udp`

### ポートフォワーディングの一覧表示と削除

設定済みのポートルールを一覧表示するには `sudo ufw status numbered` を実行します。  
ルールを削除したい場合は、リストの番号を使って `sudo ufw delete 番号` を実行してください。

## IPTablesのインストール（上級者向け）

ほとんどのシステムにはIPTablesがデフォルトで入っていますが、念のため `sudo apt install iptables` でインストールできます。

### IPTablesの設定

まずはデフォルトポリシーと基本設定を行います：

`sudo iptables -P INPUT DROP` で全ての着信接続を拒否

`sudo iptables -P FORWARD DROP` で全ての転送を拒否

`sudo iptables -P OUTPUT ACCEPT` で全ての送信接続を許可

`sudo iptables -A INPUT -i lo -j ACCEPT` でループバックを許可

`sudo iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT` で既存の接続を許可

次にSSH接続や開けたいポートを許可します：

`sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT` （SSH用）

`sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT` （HTTPの例）

`sudo iptables -A INPUT -p tcp --dport 25565 -j ACCEPT` （Minecraftサーバーの例）

設定を永続化するために、`sudo apt install iptables-persistent` をインストールし、`sudo netfilter-persistent save` で保存、`sudo systemctl enable netfilter-persistent` で自動起動に登録します。

### ポートフォワーディングの追加

ポートを開放するには以下のコマンドを使います：

TCPポートの場合：

`sudo iptables -A INPUT -p tcp --dport ポート番号 -j ACCEPT`  
（ポート番号は開放したいポートに置き換えてください）

例：Minecraftサーバー用に `sudo iptables -A INPUT -p tcp --dport 25565 -j ACCEPT`

UDPポートの場合：

`sudo iptables -A INPUT -p udp --dport ポート番号 -j ACCEPT`  
（ポート番号は開放したいポートに置き換えてください）

例：TeamSpeak 3サーバー用に `sudo iptables -A INPUT -p udp --dport 9987 -j ACCEPT`

### ポートフォワーディングの一覧表示と削除

ルール一覧を表示するには `sudo iptables -L --line-numbers` を使います。  
ルールを削除したい場合は、リストの番号を使って `sudo iptables -D INPUT 番号` を実行してください。

## まとめ

Linuxサーバーにファイアウォールを無事インストールし、自分だけのポートルールを作成できましたね。  
このガイドは他のポートを開放する際にも役立ちます。  
質問やサポートが必要な場合は、いつでもお気軽にサポートチームにお問い合わせください！毎日対応していますよ！🙂

<InlineVoucher />