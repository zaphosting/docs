---
id: projectzomboid-rcon
title: "Project Zomboid: RCON"
description: "ゲーム内アクセスなしでProject Zomboidサーバーを安全にリモート管理・操作する方法 → 今すぐチェック"
sidebar_label: RCON
services:
  - gameserver-projectzomboid
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

RCON（リモートコンソール）は、ゲームサーバーをリモートで操作するためのネットワークプロトコルです。サーバー環境に直接触れずにコンソールへアクセスできるため、管理コマンドの実行や設定パラメータの調整、サーバーステータスの取得が可能になります。

Project Zomboidでは、RCONを使ってプレイヤー管理やゲームプレイ設定の変更、診断情報の取得などのサーバー側コマンドを実行します。接続はパスワードで保護され、指定されたポートを通じて対応するRCONクライアントからアクセスできます。

RCONの大きなメリットは、**プレイヤーとしてゲームに接続しなくてもサーバー管理ができる**ことです。サーバー管理者は外部ツールやコマンドライン、ウェブダッシュボードからProject Zomboidを監視・操作でき、リモート運用の自由度と利便性が大幅にアップします。

<InlineVoucher />

## 設定方法

RCONを使うには、まず有効化と設定が必要です。これはゲームサーバー管理パネルの **Configs** 内にある設定ファイルを編集して行います。`servertest.ini` というファイルに以下の項目を追加または修正してください：

```cfg
RCONPort=XXXXX
RCONPassword=define-your-password
```
割り当てられたRCONポートは、設定ページ下部のポート一覧で確認でき、そこに指定する必要があります。



## RCON接続方法

Project ZomboidサーバーへRCONで接続するには、コマンドラインツールの **rcon-cli** を使います。公式の[GitHubリポジトリ](https://github.com/gorcon/rcon-cli)からダウンロード可能です。ツールをPCにインストールしたら、サーバーのIPアドレス、RCONポート、RCONパスワードを使って接続します。

割り当てポートはゲームサーバー管理の設定ページ下部「ポート一覧」で確認可能です。パスワードとポートはパネルや設定ファイルの値と一致させてください。以下のコマンドで接続し、直接コマンドを実行できます：

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```



## RCONコマンド一覧

RCON接続後は、Project Zomboidサーバー上で様々な管理・診断コマンドを実行可能です。利用できるコマンドはゲームエンジンによりますが、主にプレイヤー管理、状態確認、サーバー制御に関するものが含まれます。

| コマンド                          | 説明                                   |
| -------------------------------- | ------------------------------------- |
| `/grantadmin <username>`         | 指定プレイヤーに管理者権限を付与       |
| `/removeadmin <username>`        | 指定プレイヤーの管理者権限を剥奪       |
| `/save`                          | ワールドを手動でセーブ                 |
| `/kickuser <username>`           | 指定プレイヤーをサーバーからキック     |
| `/banuser <username>`            | 指定プレイヤーをBAN                     |
| `/unbanuser <username>`          | 指定プレイヤーのBANを解除               |
| `/adduser <username> <password>` | 新規ユーザーをパスワード付きで作成     |
| `/godmod <username>`             | 指定ユーザーのゴッドモードを切り替え   |
| `/teleport <Name1> <Name2>`      | Name1をName2の位置にテレポート         |
| `/chopper`                       | ヘリコプターの飛行をシミュレート       |



## まとめ

RCONはProject Zomboidゲームサーバーのリモート管理に欠かせないツールです。管理機能へ素早く直接アクセスでき、パスワード認証によるアクセス制御も備えています。安全かつ適切な設定がサーバーの安定稼働と不正アクセス防止に重要です。

ご不明点やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にお問い合わせくださいね！🙂

<InlineVoucher />