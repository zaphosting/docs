---
id: ark-rcon
title: "ARK: Survival Evolved: RCON"
description: "ゲームに参加せずにARK: Survival Evolvedサーバーを安全にリモート管理・操作する方法 → 今すぐチェック"
sidebar_label: RCON
services:
  - gameserver-ark
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

RCON（リモートコンソール）は、ゲームサーバーをリモートで操作するためのネットワークプロトコルです。サーバー環境に直接アクセスせずにコンソール操作が可能で、管理コマンドの実行や設定パラメータの調整、サーバーステータスの取得などができます。

ARK: Survival Evolvedでは、RCONを使ってプレイヤー管理やゲームプレイ設定の変更、診断情報の取得などのサーバー側コマンドを実行します。接続はパスワードで保護され、指定されたポートを通じて対応するRCONクライアントからアクセス可能です。

RCONの大きなメリットは、**プレイヤーとしてゲームに接続しなくてもサーバー管理ができる**こと。管理者は外部ツールやコマンドライン、ウェブダッシュボードからARK: Survival Evolvedを監視・操作でき、リモート管理の自由度と利便性が大幅にアップします。

<InlineVoucher />

## 設定方法

RCONを使うには、まず有効化と設定が必要です。ゲームサーバー管理パネルの**Configs**内にある設定ファイルを編集します。`GameUserSettings.ini`というファイルに以下の項目を追加または修正してください：

```cfg
[ServerSettings]
RCONEnabled=True
ServerAdminPassword=define-your-password
```
割り当てられたRCONポートは設定ページ下部のポート一覧で確認でき、ここで指定する必要があります。



## RCON接続方法

ARK: Survival EvolvedサーバーへRCON接続するには、専用ツール**ARKon**を使います。こちらの[Steamスレッド]([Steam thread](https://steamcommunity.com/app/346110/discussions/2/3417684283223117680/))からダウンロード可能です。PCにインストール後、以下の情報で新規サーバー登録を行います：

- サーバーのIPアドレス  
- RCONポート
- RCONパスワード 

接続プロファイルを保存したら、リストからサーバーを選択して接続開始。接続後はグラフィカルインターフェースからRCONコマンドを実行できます。ARKonはARK: Survival Evolved専用の便利機能も搭載：

- リアルタイムのプレイヤーリストとオンライン状況  
- ゲーム内チャットの監視・操作  
- よく使う管理コマンドのクイックボタン  
- RCON出力とコマンド履歴のログ記録



## RCONコマンド一覧

RCON接続後は、ARK: Survival Evolvedサーバーで様々な管理・診断コマンドが使えます。利用可能なコマンドはゲームエンジンによりますが、主にプレイヤー管理や状態確認、サーバー制御が中心です。

| コマンド                            | 説明                                           |
|-----------------------------------|------------------------------------------------|
| `EnableCheats <password>`         | サーバーで管理者モードを有効化（管理コマンド使用可） |
| `AdminCheat KickPlayer <Steam64ID>` | プレイヤーをキック（追放）                     |
| `AdminCheat BanPlayer <Steam64ID>`  | プレイヤーをBAN（接続禁止）                    |
| `AdminCheat UnbanPlayer <playerName>` | BAN解除                                       |
| `AdminCheat Broadcast <message>`   | 全プレイヤーにブロードキャストメッセージ送信  |
| `AdminCheat SaveWorld`            | 現在のワールド状態を保存                        |
| `AdminCheat SetTimeOfDay <hh:mm>` | ゲーム内時間を設定                              |
| `AdminCheat TeleportPlayerIDToMe <playerID>` | 指定プレイヤーを自分の位置にテレポート       |
| `cheat Slomo <factor>`            | ゲーム速度を調整                                |
| `AdminCheat GiveItemNum <ItemID> <quantity> <quality> 0` | アイテムをインベントリにスポーン              |




## まとめ

RCONはARK: Survival Evolvedゲームサーバーのリモート管理に欠かせないツールです。パスワード認証によるアクセス制御を備え、管理機能へ素早く直接アクセス可能。適切かつ安全な設定がサーバーの安定稼働と不正アクセス防止の鍵となります。

不明点やサポートが必要な場合は、いつでもお気軽に当社サポートチームへご連絡ください！毎日対応していますよ 🙂 

<InlineVoucher />