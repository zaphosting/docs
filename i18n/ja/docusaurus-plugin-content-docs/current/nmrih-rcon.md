---
id: nmrih-rcon
title: "No More Room In Hell: RCON"
description: "No More Room In Hellのゲームサーバーをリモートで管理する方法をチェックして、柔軟なコントロールと監視を実現しよう → 今すぐ詳しく見る"
sidebar_label: RCON
services:
  - gameserver-nmrih
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

RCON（リモートコンソール）は、ゲームサーバーをリモートで操作するためのネットワークプロトコルです。サーバー環境に直接触れずにコンソールへアクセスできるため、管理コマンドの実行や設定パラメータの調整、サーバーステータスの取得が可能になります。

No More Room In Hellでは、RCONを使ってプレイヤー管理やゲームプレイ設定の変更、診断情報の取得などのサーバー側コマンドを実行します。接続はパスワードで保護され、指定されたポートを通じて対応するRCONクライアントからアクセスできます。

RCONの大きなメリットは、**プレイヤーとしてゲームに接続しなくてもサーバー管理ができる**ことです。サーバー管理者は外部ツールやコマンドライン、ウェブダッシュボードからNo More Room In Hellを監視・操作できるため、リモート運用にとても便利で柔軟です。

<InlineVoucher />

## 設定方法

RCONを使うには、まず有効化と設定が必要です。これはゲームサーバーの管理パネル内の**Configs**にある設定ファイルを編集して行います。`server.cfg`というファイルに以下のエントリを追加または修正してください：

```cfg
rcon_password "define-your-password"
```

## RCONでの接続方法

No More Room In HellサーバーへRCONで接続するには、コマンドラインツールの**rcon-cli**を使います。公式の[GitHubリポジトリ](https://github.com/gorcon/rcon-cli)からダウンロード可能です。ツールをPCにインストールしたら、サーバーのIPアドレス、RCONポート、RCONパスワードを使って接続します。

割り当てられたポートは、ゲームサーバー管理画面の設定ページ下部にある**ポート一覧**で確認できます。パスワードとポートはパネルや設定ファイルで設定した値と一致させてください。以下のコマンドで接続し、コマンドを直接実行できます：

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```

## RCONコマンド一覧

RCON接続後は、No More Room In Hellサーバー上で様々な管理・診断コマンドを実行できます。利用可能なコマンドはゲームエンジンによって異なりますが、主にプレイヤー管理、状態確認、サーバー制御に関するものが含まれます。

| コマンド                      | 説明                                         |
| ---------------------------- | -------------------------------------------- |
| `rcon_password <password>`   | RCONアクセスの認証                           |
| `status`                     | サーバーとプレイヤー情報の表示               |
| `changelevel <mapname>`      | 指定したマップに切り替え                     |
| `mp_timelimit <min>`         | マップごとの制限時間を設定                   |
| `mp_roundtime <min>`         | ラウンドの時間を設定                         |
| `sv_cheats 0/1`              | チートコマンドの有効/無効（管理者のみ）      |
| `kick <playername>`          | プレイヤーをサーバーからキック               |
| `banid <duration> <SteamID>` | 指定期間プレイヤーをBAN                       |
| `exec <file.cfg>`            | 設定ファイルを実行                           |
| `say <message>`              | 全プレイヤーにメッセージを送信               |

## まとめ

RCONはNo More Room In Hellゲームサーバーのリモート管理に欠かせないツールです。管理機能へ素早く直接アクセスでき、パスワード認証によるアクセス制御も備えています。安全かつ適切な設定を行うことで、サーバーの安定稼働と不正アクセス防止に役立ちます。

質問やサポートが必要な場合は、いつでもお気軽にサポートチームまでご連絡ください！毎日対応していますよ！🙂

<InlineVoucher />