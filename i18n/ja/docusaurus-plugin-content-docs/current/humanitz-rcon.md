---
id: humanitz-rcon
title: "HumanitZ: RCON"
description: "RCONとrcon-cliを使ってHumanitZサーバーをリモート管理する方法 → 今すぐ詳しく学ぼう"
sidebar_label: RCON
services:
- gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

RCON（リモートコンソール）は、ゲームサーバーをリモートで操作するためのネットワークプロトコルです。管理者はゲームに直接接続することなく、サーバー上でコマンドを実行できます。これにより、プレイヤー管理や設定調整、サーバーの監視を外部から行うことが可能になります。

**HumanitZ**では、RCONを使ってプレイヤーのキックやメッセージ送信、サーバーの挙動制御などの管理コマンドを実行できます。アクセスはパスワードと専用ポートで保護されています。

RCONの大きなメリットは、**ゲーム内プレイヤーとして接続しなくてもサーバー管理ができる**ため、柔軟かつ効率的なリモート管理が可能なことです。

<InlineVoucher />

## 設定方法

RCONを使うには、まずサーバー設定で有効化する必要があります。サーバーの設定ページを開き、rconオプションを有効にしてください。もしくは設定ファイルからも調整可能です。ゲームサーバーの管理パネルで「Configs」へ進み、`GameServerSettings.ini`ファイルを開きます。

以下の項目を追加または修正してください：

```
RCONEnabled=true
RCONPassword=your_secure_password
RCONPort=XXXXX
```

割り当てられたRCONポートは、サーバー管理の**ポート一覧**で確認できます。パスワードとポートが設定と一致していることを必ず確認してください。

変更後はファイルを保存し、**サーバーを再起動**して設定を反映させましょう。

## RCON接続方法

HumanitZサーバーにRCONで接続するには、コマンドラインツールの**rcon-cli**を使います。公式GitHubリポジトリから入手可能です：
https://github.com/gorcon/rcon-cli

インストール後、以下のコマンドでサーバーに接続できます：

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```

`<IP>`, `<PORT>`, `<PASSWORD>`はそれぞれサーバーのIPアドレス、RCONポート、パスワードに置き換えてください。

このコマンドで、対話型セッションを開かずにローカルから直接RCONコマンドを実行できます。

## RCONコマンド一覧

RCONで接続すると、HumanitZサーバー上で様々な管理コマンドを実行可能です。利用できるコマンドはゲーム実装によりますが、一般的にはプレイヤー管理やサーバー制御が含まれます。

| コマンド | 説明 |
|----------------------------------|------------------------------------------|
| `broadcast <message>`| 全プレイヤーにメッセージを送信 |
| `kick <playername>`| 指定プレイヤーをサーバーからキック |
| `ban <playername>` | プレイヤーをBAN |
| `unban <playername>` | BANを解除 |
| `save` | 現在のゲーム状態を保存 |
| `restart`| サーバーを再起動 |
| `shutdown` | サーバーをシャットダウン |
| `whitelist add <steamid>`| プレイヤーをホワイトリストに追加 |
| `whitelist remove <steamid>` | ホワイトリストからプレイヤーを削除 |

## まとめ

おめでとうございます！これで**HumanitZサーバーのRCON設定と利用が完了**しました。リモートからサーバー管理や管理コマンドの実行ができ、ゲームに参加せずにコントロールが可能です。

もし質問やサポートが必要な場合は、いつでもお気軽に当社のサポートチームへお問い合わせください。毎日対応しています！🙂

<InlineVoucher />