---
id: conan-rcon
title: "Conan Exiles: RCON"
description: "ゲーム内接続なしでConan Exilesサーバーを安全にリモート管理・操作する方法 → 今すぐチェック"
sidebar_label: RCON
services:
  - gameserver-conan
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

RCON（リモートコンソール）は、ゲームサーバーをリモートで操作するためのネットワークプロトコルです。サーバー環境に直接触れることなくコンソールにアクセスできるため、管理コマンドの実行や設定パラメータの調整、サーバーステータスの取得が可能になります。

Conan Exilesでは、RCONを使ってプレイヤー管理やゲームプレイ設定の変更、診断情報の取得などのサーバー側コマンドを実行します。接続はパスワードで保護され、指定されたポートを通じて対応するRCONクライアントからアクセスできます。

RCONの大きなメリットは、**プレイヤーとしてゲームに接続しなくてもサーバー管理ができる**ことです。サーバー管理者は外部ツールやコマンドライン、ウェブダッシュボードからConan Exilesを監視・操作できるので、リモート運用にとても便利で柔軟です。

<InlineVoucher />

## 設定方法

RCONを使うには、まず有効化と設定が必要です。これはゲームサーバー管理パネルの **Configs** 内にある設定ファイルを編集して行います。`game.ini` というファイルに以下の項目を追加または修正してください：

```cfg
[RconPlugin]
RconEnabled=1
RconPassword=define-your-password
RconPort=XXXXX
```
割り当てられたRCONポートは、設定ページ下部のポート一覧で確認でき、ここに指定する必要があります。



## RCONでの接続方法

Conan ExilesサーバーにRCONで接続するには、コマンドラインツールの **rcon-cli** を使います。公式の[GitHubリポジトリ](https://github.com/gorcon/rcon-cli)からダウンロード可能です。ツールをPCにインストールしたら、サーバーのIPアドレス、RCONポート、RCONパスワードを使って接続します。

割り当てられたポートはゲームサーバー管理の設定ページ下部の **ポート一覧** で確認できます。パスワードとポートはパネルや設定ファイルで設定した値と一致させてください。以下のコマンドで接続し、直接コマンドを実行できます：

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```



## RCONコマンド一覧

RCON接続後は、Conan Exilesサーバー上で様々な管理・診断コマンドを実行できます。利用可能なコマンドはゲームエンジンによりますが、一般的にはプレイヤー管理、ステータス確認、サーバー制御などの操作が含まれます。

| コマンド                     | 説明                              |
| --------------------------- | ---------------------------------- |
| `broadcast <message>`       | 全プレイヤーにメッセージを送信     |
| `kick <playername>`         | プレイヤーをサーバーからキック     |
| `ban <playername>`          | プレイヤーをBANする                |
| `unban <playername>`        | BANを解除する                      |
| `restartserver`             | サーバーを再起動する              |
| `restartserver <seconds>`   | 指定秒数後にサーバーを再起動する   |
| `shutdownserver`            | サーバーをシャットダウンする      |
| `shutdownserver <seconds>`  | 指定秒数後にサーバーをシャットダウンする |
| `changemap <mapname>`       | 別のマップを読み込む              |
| `setpassword <newpassword>` | 新しいRCONパスワードを設定する     |

## まとめ

RCONはConan Exilesゲームサーバーのリモート管理に欠かせないツールです。パスワード認証によるアクセス制御を備え、管理機能に素早く直接アクセスできます。適切かつ安全な設定がサーバーの安定稼働と不正アクセス防止の鍵となります。

何か質問やサポートが必要な場合は、いつでもお気軽にサポートチームまでご連絡ください！毎日対応していますよ！🙂

<InlineVoucher />