---
id: arma-reforger-rcon
title: "Arma Reforger: RCON"
description: "Arma Reforgerのゲームサーバーを安全にリモート管理・操作する方法を解説。柔軟な管理と監視を実現 → 今すぐチェック"
sidebar_label: RCON
services:
  - gameserver-arma-reforger
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

RCON（リモートコンソール）は、ゲームサーバーをリモートで操作するためのネットワークプロトコルです。サーバー環境に直接アクセスせずにコンソール操作が可能で、管理コマンドの実行や設定パラメータの調整、サーバーステータスの取得などが行えます。

Arma Reforgerでは、RCONを使ってプレイヤー管理やゲームプレイ設定の変更、診断情報の取得などのサーバー側コマンドを実行します。接続はパスワードで保護され、指定されたポートを通じて対応するRCONクライアントからアクセス可能です。

RCONの大きなメリットは、**プレイヤーとしてゲームに接続しなくてもサーバー管理ができる**こと。サーバー管理者は外部ツールやコマンドライン、ウェブのダッシュボードからArma Reforgerを監視・操作でき、リモート運用に柔軟性と利便性をもたらします。

<InlineVoucher />

## 設定方法

RCONを使うには、まず有効化と設定が必要です。これはゲームサーバーの管理パネル内の**Configs**にある設定ファイルを編集して行います。`BEServer_x64.cfg`というファイルに、以下の項目を追加または修正してください：

```cfg
RConPort XXXXX
RConPassword define-your-password
```
割り当てられたRCONポートは設定ページ下部のポート一覧で確認でき、そこに指定する必要があります。



## RCON接続方法

Arma ReforgerサーバーへRCON接続するには、**BattleWarden**というツールを使います。公式サイトの[こちら](https://www.battlewarden.net)からダウンロード可能です。PCにインストール後、新しい接続プロファイルを作成します。必要な情報は以下の通り：

- サーバーのIPアドレス  
- RCONポート 
- RCONパスワード

接続が確立すると、グラフィカルインターフェースからRCONコマンドを実行できます。ゲームの統合状況によっては、プレイヤーリストやライブチャット、コマンド履歴などの追加機能も利用可能です。

![img](https://screensaver01.zap-hosting.com/index.php/s/P9S3rx3GFWkAo3G/preview)



## RCONコマンド一覧

RCON接続後は、Arma Reforgerサーバー上で様々な管理・診断コマンドを実行できます。利用可能なコマンドはゲームエンジンによって異なりますが、主にプレイヤー管理、状態確認、サーバー制御に関するものが多いです。

| コマンド                         | 説明                                        |
|----------------------------------|----------------------------------------------------|
| `#login <password>`             | サーバー管理者としてログイン                             |
| `#logout`                       | 管理者権限をログアウト                            |
| `#mission <missionName>`       | 新しいミッションをサーバーで開始                 |
| `#missions`                    | 選択可能なミッション一覧を表示            |
| `#restart`                     | 現在のミッションを再起動                       |
| `#reassign`                    | 全プレイヤーを役割割り当てに戻す          |
| `#kick <playerID>`             | プレイヤーをキック（追放）                                     |
| `#exec ban <playerID>`         | プレイヤーをBAN（禁止）                                      |
| `#exec unban <playerID>`       | プレイヤーのBANを解除                                    |
| `#shutdown`                    | サーバーをシャットダウン                              |



## まとめ

RCONはArma Reforgerゲームサーバーのリモート管理に欠かせないツールです。パスワード認証によるアクセス制御を備え、管理機能へ迅速かつ直接的にアクセス可能。適切かつ安全な設定がサーバーの安定稼働と不正アクセス防止の鍵となります。

ご不明点やサポートが必要な場合は、いつでもお気軽に当社サポートチームまでお問い合わせください！毎日対応していますよ 🙂 

<InlineVoucher />