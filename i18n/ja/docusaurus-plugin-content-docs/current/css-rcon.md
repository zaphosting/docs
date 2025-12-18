---
id: css-rcon
title: "Counter-Strike: Source: RCON"
description: "Counter-Strike: Sourceサーバーを安全かつ効率的にリモート管理・操作する方法をチェック → 今すぐ詳しく見る"
sidebar_label: RCON
services:
  - gameserver-css
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

RCON（リモートコンソール）は、ゲームサーバーをリモートで操作するためのネットワークプロトコルです。サーバー環境に直接触れることなくコンソールにアクセスできるため、管理コマンドの実行や設定パラメータの調整、サーバーステータスの取得が可能になります。

Counter-Strike: Sourceでは、RCONを使ってプレイヤー管理やゲームプレイ設定の変更、診断情報の取得などのサーバー側コマンドを実行します。接続はパスワードで保護され、指定されたポートを通じて対応するRCONクライアントからアクセスできます。

RCONの大きなメリットは、**プレイヤーとしてゲームに接続しなくてもサーバー管理ができること**です。サーバー管理者は外部ツールやコマンドライン、ウェブダッシュボードからCounter-Strike: Sourceを監視・操作できるため、リモート運用に柔軟性と利便性をもたらします。

<InlineVoucher />

## 設定方法

RCONを使うには、まず有効化と設定が必要です。これはゲームサーバーの管理パネル内の**Configs**にある設定ファイルを編集して行います。`server.cfg`というファイルに以下の記述を追加または修正してください：

```cfg
rcon_password "ここにパスワードを設定"
```

## RCONでの接続方法

Counter-Strike: SourceサーバーにRCONで接続するには、コマンドラインツールの**rcon-cli**を使います。公式の[GitHubリポジトリ](https://github.com/gorcon/rcon-cli)からダウンロード可能です。ツールをPCにインストールしたら、サーバーのIPアドレス、RCONポート、RCONパスワードを使って接続します。

割り当てられたポートは、ゲームサーバー管理画面の設定ページ下部にある**ポート一覧**で確認できます。パスワードとポートはパネルや設定ファイルで設定したものと一致している必要があります。以下のコマンドで接続し、直接コマンドを実行できます：

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```

## RCONコマンド一覧

RCON接続後は、Counter-Strike: Sourceサーバー上で様々な管理・診断コマンドを実行可能です。利用できるコマンドはゲームエンジンによりますが、主にプレイヤー管理、状態確認、サーバー制御に関するものが含まれます。

| コマンド                    | 説明                                      |
|---------------------------|------------------------------------------|
| `rcon_password <password>`   | RCON管理者として認証                     |
| `status`               | プレイヤーとサーバー情報を表示            |
| `changelevel <map>`   | マップを切り替え                          |
| `mp_autoteambalance 0/1` | チームの自動バランスを有効/無効にする   |
| `mp_timelimit <minutes>` | マップの制限時間を設定                    |
| `mp_friendlyfire 0/1`    | フレンドリーファイアの有効/無効          |
| `mp_freezetime <seconds>` | ラウンド開始時のフリーズ時間を設定        |
| `sv_cheats 0/1`         | チートを有効化（管理者のみ使用可能）      |
| `exec <file.cfg>`       | 設定ファイルを実行                        |
| `kick <player>`         | プレイヤーをサーバーからキック            |

## まとめ

RCONはCounter-Strike: Sourceゲームサーバーのリモート管理に欠かせないツールです。管理機能へ素早く直接アクセスでき、パスワード認証によるアクセス制御も備えています。適切かつ安全な設定がサーバーの安定稼働と不正アクセス防止の鍵となります。

ご不明点やサポートが必要な場合は、いつでもお気軽に当社サポートチームまでお問い合わせください！毎日対応していますよ！🙂

<InlineVoucher />