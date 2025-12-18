---
id: palworld-rcon
title: "Palworld: RCON"
description: "ゲームに参加せずに柔軟にPalworldサーバーをリモート管理＆監視する方法 → 今すぐチェック"
sidebar_label: RCON
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

RCON（リモートコンソール）は、ゲームサーバーをリモートで操作するためのネットワークプロトコルです。サーバー環境に直接触れずにコンソールへアクセスできるため、管理コマンドの実行や設定パラメータの調整、サーバーステータスの取得が可能になります。

Palworldでは、RCONを使ってプレイヤー管理やゲームプレイ設定の変更、診断情報の取得などのサーバー側コマンドを実行します。接続はパスワードで保護され、指定されたポートを通じて対応するRCONクライアントからアクセスできます。

RCONの最大のメリットは、**プレイヤーとしてゲームに接続しなくてもサーバー管理ができること**。サーバー管理者は外部ツールやコマンドライン、ウェブダッシュボードからPalworldを監視・操作できるので、リモート運用に超便利です。

<InlineVoucher />

## 設定方法

RCONを使うには、まず有効化と設定が必要です。これはゲームサーバー管理パネルの **Configs** 内にある設定ファイルを編集して行います。`PalWorldSettings.ini` というファイルに、以下の項目を追加または修正してください：

```cfg
RCONEnabled=True,
RCONPort=XXXXX,
AdminPassword="define-your-password"
```
割り当てられたRCONポートは、設定画面の一番下にあるポート一覧で確認でき、そこに指定する必要があります。



## RCONでの接続方法

PalworldサーバーにRCONで接続するには、コマンドラインツールの **rcon-cli** を使います。公式の[GitHubリポジトリ](https://github.com/gorcon/rcon-cli)からダウンロード可能です。ツールをPCにインストールしたら、サーバーのIPアドレス、RCONポート、パスワードを使って接続します。

割り当てられたポートはゲームサーバー管理の設定画面下部の **ポート一覧** で確認可能。パスワードとポートはパネルや設定ファイルで設定したものと一致させてください。以下のコマンドで接続し、コマンドを直接実行できます：

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```



## RCONコマンド一覧

RCON接続後は、Palworldサーバー上で様々な管理・診断コマンドを実行可能です。利用できるコマンドはゲームエンジンによりますが、一般的にはプレイヤー管理、ステータス確認、サーバー制御などが含まれます。

| コマンド                                   | 説明                                                         |
|------------------------------------------|-------------------------------------------------------------|
| `/Shutdown <seconds> <message>`          | カウントダウン後にメッセージ付きでサーバーをシャットダウン   |
| `/DoExit`                                | サーバーを即時停止                                           |
| `/Broadcast <message>`                   | 接続中の全プレイヤーにメッセージを送信                       |
| `/KickPlayer <SteamID>`                  | SteamID指定でプレイヤーをキック                              |
| `/BanPlayer <SteamID>`                   | プレイヤーを永久BAN                                          |
| `/TeleportToPlayer <SteamID>`            | 指定プレイヤーの元へテレポート                               |
| `/TeleportToMe <SteamID>`                | 指定プレイヤーを自分の場所へテレポート                       |
| `/ShowPlayers`                           | 現在接続中のプレイヤー一覧を表示                             |
| `/Info`                                  | サーバーの基本情報を表示                                     |
| `/Save`                                  | ワールドを手動でセーブ                                       |



## まとめ

RCONはPalworldゲームサーバーのリモート管理に欠かせないツールです。パスワード認証によるアクセス制御を備え、管理機能へ素早く直接アクセスできます。安全かつ適切な設定がサーバーの安定稼働と不正アクセス防止の鍵となります。

何か質問やサポートが必要な場合は、いつでもお気軽にサポートチームまでご連絡くださいね！毎日対応しています 🙂 

<InlineVoucher />