---
id: ark-becomeadmin
title: "ARK: 管理者になる方法"
description: "ゲームサーバーをフル管理者権限で操作して、ゲーム体験をもっと楽しもう → 今すぐチェック"
sidebar_label: 管理者になる
services:
  - gameserver-ark
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
管理者権限を割り当てることで、サーバーを完全にコントロールできるシンプルかつ包括的な管理が可能になります。管理者として、ゲーム内で提供されているすべてのオプションや機能を直接使うことができます。サーバーに管理者権限を割り当てるための手順を以下に詳しく説明します。  
<InlineVoucher />

## 設定方法

管理者権限があれば、Configを変更せずにゲーム内で直接サーバーの設定を変更できます。自分や他のプレイヤーに管理者権限を付与するには、まずサーバー管理者パスワードを設定する必要があります。このパスワードは、当社のウェブインターフェースの設定で定義します。

![](https://screensaver01.zap-hosting.com/index.php/s/kLEsKbT6RN6c7Na/preview)

パスワードを設定したら、サーバーを再起動してください。その後、ゲーム内コンソールから以下のコマンドとサーバー管理者パスワードを使って管理者としてログインできます。

```
enableCheats password
```

これで管理者としてすべてのサーバーコマンドを実行可能になります。以下に、よく使われるコマンドの一覧を紹介します。

## よく使うコマンド一覧

| コマンド                                        | 説明                                                  |
| ---------------------------------------------- | ----------------------------------------------------- |
| setcheatplayer TRUE/FALSE                      | チートメニューの有効化 / 無効化                       |
| admincheat AllowPlayerToJoinNoCheck SteamID    | プレイヤーをホワイトリストに追加                      |
| admincheat DisallowPlayerToJoinNoCheck SteamID | プレイヤーをホワイトリストから削除                    |
| admincheat SetMessageOfTheDay メッセージ        | 接続時に表示されるメッセージ（MOTD）を設定            |
| admincheat broadcast メッセージ                 | サーバー内の全プレイヤーにメッセージを送信            |
| admincheat god                                 | 自分のプレイヤーを無敵状態にする                       |
| admincheat fly                                 | 自分のプレイヤーの飛行を有効化                         |
| admincheat walk                                | 自分のプレイヤーの飛行を無効化                         |
| admincheat teleport                            | 見ている方向に自分のプレイヤーをテレポート             |
| admincheat slomo                               | サーバーと全プレイヤーの移動速度を変更                 |
| admincheat playersonly                         | すべてのクリーチャーの動きを停止し、クラフトを停止/防止 |
| admincheat ghost                               | 自分のプレイヤーにノークリップを有効化                 |
| admincheat forcetame                           | 恐竜を即座にテイムし、サドルなしで乗れるようにする     |
| admincheat listplayers                         | すべてのプレイヤーとSteamId64を一覧表示                |
| admincheat banplayer SteamId64                 | SteamID64を使ってプレイヤーをBAN                        |
| admincheat unbanplayer SteamId64               | SteamID64を使ってプレイヤーのBANを解除                  |
| admincheat setplayerpos x y z                  | 自分のプレイヤーを指定座標にテレポート                  |
| admincheat saveworld                           | ワールドの現在の状態を保存                              |
| admincheat addexperience 数値                   | プレイヤーに経験値を追加                                |
| admincheat settimeofday 時刻                    | ゲームサーバーの時間を変更。例: "admincheat settimeofday 12:00" |

## まとめ

おめでとうございます！管理者権限の設定が無事完了しました。もし質問やサポートが必要な場合は、いつでもお気軽に当社のサポートチームにご連絡ください。毎日対応していますよ！🙂

<InlineVoucher />