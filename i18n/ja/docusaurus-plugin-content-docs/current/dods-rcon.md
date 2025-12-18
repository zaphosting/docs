---
id: dods-rcon
title: "Day of Defeat: Source: RCON"
description: "Day of Defeat: Sourceのゲームサーバーをリモートで管理する方法をチェック → 今すぐ詳しく見る"
sidebar_label: RCON
services:
  - gameserver-dods
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

RCON（リモートコンソール）は、ゲームサーバーをリモートで操作するためのネットワークプロトコルです。サーバー環境に直接触れずにコンソールへアクセスできるため、管理コマンドの実行や設定パラメータの調整、サーバーステータスの取得が可能になります。

Day of Defeat: Sourceでは、RCONを使ってプレイヤー管理やゲームプレイ設定の変更、診断情報の取得などのサーバー側コマンドを実行します。接続はパスワードで保護されており、指定されたポートを通じて対応するRCONクライアントからアクセスできます。

RCONの大きなメリットは、**プレイヤーとしてゲームに接続しなくてもサーバー管理ができる**ことです。サーバー管理者は外部ツールやコマンドライン、ウェブダッシュボードからDay of Defeat: Sourceの管理・監視ができるため、リモート操作の自由度と利便性が格段にアップします。

<InlineVoucher />

## 設定方法

RCONを使うには、まず有効化と設定が必要です。これはゲームサーバーの管理画面で行います。**設定**セクションにある**RCON**オプションをオンにし、安全なパスワードを設定、さらに有効なポート番号を指定してください。

割り当てられたRCONポートは、設定画面の一番下にある**ポート一覧**で確認できます。

また、RCONを使うにはゲームサーバー管理パネルの**Configs**内にある設定ファイルを編集する方法もあります。`server.cfg`というファイルに以下のように追記または修正してください：

```cfg
rcon_password "define-your-password"
```

## RCON接続方法

Day of Defeat: SourceのゲームサーバーにRCONで接続するには、コマンドラインツールの**rcon-cli**を使います。公式の[GitHubリポジトリ](https://github.com/gorcon/rcon-cli)からダウンロード可能です。ツールをPCにインストールしたら、サーバーのIPアドレス、RCONポート、パスワードを使って接続します。

割り当てられたポートはゲームサーバー管理画面の**ポート一覧**で確認可能です。パスワードとポートは管理パネルや設定ファイルで設定したものと一致している必要があります。以下のコマンドで接続し、コマンドを直接実行できます：

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```

## RCONコマンド一覧

RCON接続後は、Day of Defeat: Sourceのゲームサーバー上で様々な管理・診断コマンドを実行できます。利用可能なコマンドはゲームエンジンによって異なりますが、主にプレイヤー管理、ステータス確認、サーバー制御に関するものが多いです。

| コマンド                      | 説明                                         |
| ---------------------------- | -------------------------------------------- |
| `rcon_password <password>`   | RCONアクセスの認証                           |
| `status`                     | サーバーとプレイヤー情報の表示               |
| `changelevel <mapname>`      | 指定したマップに切り替え                     |
| `mp_timelimit <min>`         | マップごとの制限時間を設定                   |
| `mp_roundtime <min>`         | ラウンド時間の設定                           |
| `sv_cheats 0/1`              | チートコマンドの有効/無効（管理者のみ）     |
| `kick <playername>`          | プレイヤーをサーバーからキック               |
| `banid <duration> <SteamID>` | 指定期間プレイヤーをBAN                       |
| `exec <file.cfg>`            | 設定ファイルを実行                           |
| `say <message>`              | 全プレイヤーにメッセージを送信               |

## まとめ

RCONはDay of Defeat: Sourceのゲームサーバーをリモートで管理するための必須ツールです。管理機能に素早く直接アクセスでき、パスワード認証によるアクセス制御も備えています。安全かつ適切な設定を行うことで、サーバーの安定稼働と不正アクセス防止が可能です。

もし質問やサポートが必要な場合は、いつでもお気軽にサポートチームまでご連絡ください！毎日対応していますよ！🙂

<InlineVoucher />