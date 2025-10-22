---
id: tf2-rcon
title: "Team Fortress 2: RCON"
description: "Team Fortress 2サーバーをリモートで管理・操作する方法を紹介。柔軟な管理と監視が可能に → 今すぐチェック"
sidebar_label: RCON
services:
  - gameserver-tf2
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

RCON（リモートコンソール）は、ゲームサーバーをリモートで操作するためのネットワークプロトコルです。サーバー環境に直接触れずにコンソールへアクセスできるため、管理コマンドの実行や設定パラメータの調整、サーバーステータスの取得が可能になります。

Team Fortress 2では、RCONを使ってプレイヤー管理やゲームプレイ設定の変更、診断情報の取得などのサーバー側コマンドを実行します。接続はパスワードで保護され、指定されたポートを通じて対応するRCONクライアントからアクセスできます。

RCONの大きなメリットは、**プレイヤーとしてゲームに接続しなくてもサーバー管理ができること**です。サーバー管理者は外部ツールやコマンドライン、ウェブダッシュボードからTeam Fortress 2を監視・操作でき、リモート運用の自由度と利便性が格段にアップします。

<InlineVoucher />

## 設定方法

RCONを使うには、まず有効化と設定が必要です。これはゲームサーバー管理パネルの**Configs**内にある設定ファイルを編集して行います。`server.cfg`というファイルに以下の記述を追加または修正してください：

```cfg
rcon_password "define-your-password"
```

## RCONでの接続方法

Team Fortress 2サーバーにRCONで接続するには、コマンドラインツールの**rcon-cli**を使います。公式の[GitHubリポジトリ](https://github.com/gorcon/rcon-cli)からダウンロード可能です。ツールをPCにインストールしたら、サーバーのIPアドレス、RCONポート、RCONパスワードを使って接続します。

割り当てられたポートは、ゲームサーバー管理画面の設定ページ下部にある**ポート一覧**で確認できます。パスワードとポートはパネルや設定ファイルで設定したものと一致させる必要があります。以下のコマンドで接続し、コマンドを直接実行できます：

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```

## RCONコマンド一覧

RCON接続後は、Team Fortress 2サーバー上で様々な管理・診断コマンドを実行可能です。利用できるコマンドはゲームエンジンによって異なりますが、主にプレイヤー管理、ステータス確認、サーバー制御に関するものが含まれます。

| コマンド                      | 説明                                         |
| ---------------------------- | -------------------------------------------- |
| `rcon_password <password>`   | RCONアクセスの認証                           |
| `status`                     | サーバーとプレイヤー情報の表示               |
| `changelevel <mapname>`      | 指定したマップに切り替え                     |
| `mp_timelimit <min>`         | マップごとの制限時間設定                     |
| `mp_roundtime <min>`         | ラウンド時間の設定                           |
| `sv_cheats 0/1`              | チートコマンドの有効/無効（管理者のみ）     |
| `kick <playername>`          | プレイヤーをサーバーからキック               |
| `banid <duration> <SteamID>` | 指定期間プレイヤーをBAN                       |
| `exec <file.cfg>`            | 設定ファイルの実行                           |
| `say <message>`              | 全プレイヤーにメッセージを送信               |

## まとめ

RCONはTeam Fortress 2ゲームサーバーのリモート管理に欠かせないツールです。管理機能へ迅速かつ直接アクセスでき、パスワード認証によるアクセス制御も備えています。適切かつ安全な設定を行うことで、サーバーの安定稼働と不正アクセス防止を両立できます。

ご不明点やサポートが必要な場合は、いつでもお気軽に当社サポートチームまでお問い合わせください！毎日対応していますよ！🙂

<InlineVoucher />