---
id: vrising-rcon
title: "V Rising: RCON"
description: "ゲーム内接続なしでV Risingサーバーを効率的にリモート管理・操作する方法 → 今すぐチェック"
sidebar_label: RCON
services:
  - gameserver-vrising
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

RCON（リモートコンソール）は、ゲームサーバーをリモートで操作するためのネットワークプロトコルです。サーバー環境に直接触れることなくコンソールにアクセスできるため、管理コマンドの実行や設定パラメータの調整、サーバーステータスの取得が可能になります。

V Risingでは、RCONを使ってプレイヤー管理やゲームプレイ設定の変更、診断情報の取得などのサーバー側コマンドを実行します。接続はパスワードで保護され、指定されたポートを通じて対応するRCONクライアントからアクセスできます。

RCONの最大のメリットは、**プレイヤーとしてゲームに接続しなくてもサーバー管理ができること**です。サーバー管理者は外部ツールやコマンドライン、ウェブダッシュボードからV Risingを監視・操作できるため、リモート運用に柔軟性と利便性をもたらします。

<InlineVoucher />

## 設定方法

RCONを使うには、まず有効化と設定が必要です。これはゲームサーバー管理パネルの**Configs**内にある設定ファイルを編集して行います。`ServerHostSettings.json`というファイルに以下の項目を追加または修正してください：

```cfg
  "Rcon": {
    "Enabled": false,
    "Port": XXXXX,
    "Password": "define-your-password"
  },
```

割り当てられたRCONポートは、設定ページ下部のポート一覧で確認でき、ここに指定する必要があります。



## RCONでの接続方法

V RisingサーバーへRCON接続するには、コマンドラインツールの**rcon-cli**を使用します。公式の[GitHubリポジトリ](https://github.com/gorcon/rcon-cli)からダウンロード可能です。ツールをPCにインストールしたら、サーバーのIPアドレス、RCONポート、パスワードを使って接続します。

割り当てられたポートはゲームサーバー管理の設定ページ下部の**ポート一覧**で確認できます。パスワードとポートはパネルや設定ファイルで設定した値と一致させてください。以下のコマンドで接続し、直接コマンドを実行できます：

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```



## RCONコマンド一覧

RCON接続後は、V Risingサーバー上で様々な管理・診断コマンドを実行可能です。利用できるコマンドはゲームエンジンによって異なりますが、主にプレイヤー管理、ステータス確認、サーバー制御に関するものが含まれます。

| コマンド                                     | 説明                                                   |
|--------------------------------------------|-------------------------------------------------------|
| `adminauth`                                | 管理者権限をキャラクターに付与（ゲーム内のみ）         |
| `admindeauth`                              | 管理者権限を解除                                       |
| `banuser <SteamID>`                        | プレイヤーを永久BAN                                    |
| `unbanuser <SteamID>`                      | BAN解除                                               |
| `kick <playername>`                        | 指定プレイヤーを即時キック                             |
| `give <ItemName> <Amount>`                 | アイテムを直接インベントリに付与                       |
| `teleport <X> <Y>`                         | 自キャラを指定座標にテレポート                         |
| `teleportplayer <name> <X> <Y>`            | 他プレイヤーを指定座標にテレポート                     |
| `changehealth <value>`                     | 現在の体力を指定値に設定                               |
| `spawn <EntityName> <Amount>`              | NPCやクリーチャーなどをスポーン                         |



## まとめ

RCONはV Risingゲームサーバーのリモート管理に欠かせないツールです。パスワード認証によるアクセス制御を備え、管理機能へ素早く直接アクセスできます。安全かつ適切な設定がサーバーの安定稼働と不正アクセス防止の鍵となります。

ご不明点やサポートが必要な場合は、いつでもお気軽に当社サポートチームまでお問い合わせくださいね！🙂

<InlineVoucher />