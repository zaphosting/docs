---
id: palworld-server-commands
title: "Palworld: Palworld サーバーコマンド"
description: "管理者コントロールやゲームプレイに使えるPalworldの便利なサーバーコマンドを徹底解説 → 今すぐチェック！"
sidebar_label: サーバーコマンド
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
Palworldのゲームサーバーには、ゲーム内やサーバーのコンソールから使える便利なビルトインサーバーコマンドが揃っています。このガイドでは、それらのコマンドを詳しく解説し、使い方の例も紹介していきます。

<YouTube videoId="SDZC4-FEdNM" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/85ennn4gSYBPNYo/preview" title="たった1分でPALWORLDサーバーをセットアップ！" description="実際に動いているところを見ると理解が深まる？そんなあなたにピッタリの動画です。急いでいる時も、じっくり情報を吸収したい時も、わかりやすく解説しています！"/>

<InlineVoucher />

## 管理者設定

まずはPalworldサーバーの管理者パスワードを設定し、ゲーム内で自分を管理者として追加する必要があります。これをしないと、次のセクションで紹介する管理者用サーバーコマンドは使えません。

管理者パスワードは、サーバーのウェブインターフェースの**設定**タブから、または**PalWorldSettings.ini**設定ファイルで設定可能です。設定後は、ゲーム内で `/AdminPassword [password]` コマンドを使って自分を管理者に追加できます。

:::tip
管理者パスワードの設定や管理者追加についてもっと詳しく知りたいなら、[管理者設定ガイド](palworld-admin.md)をぜひチェックしてください。より深い内容を扱っています。
:::

## 利用可能なコマンド

以下の表は、Palworldのゲームサーバーで使える各種コマンドの一覧です。ゲーム内やサーバーコンソールから利用可能で、使い方の例や説明も載せています。

`steamid` パラメータが必要な場合は、プレイヤーリストで対象プレイヤーを右クリック2回すると簡単にSteamIDをコピーできます。

:::info
これらのコマンドを使うには、管理者パスワードを設定し、 `/AdminPassword` コマンドで自分に権限を付与しておく必要があります。設定していないと権限エラーが出ます。このガイドの次のセクションで設定方法を確認してください。
:::

| コマンド構文                   | 受け付ける値     | 説明                                                                   | 
| ------------------------------ | ---------------- | ----------------------------------------------------------------------- | 
| /Shutdown [秒数] [メッセージ]  | 整数, 文字列     | 指定秒数後にメッセージ付きでサーバーをシャットダウン                   | 
| /DoExit                        | -                | サーバーを強制停止                                                     | 
| /Broadcast                     | 文字列           | 現在サーバーにいる全プレイヤーにメッセージを送信                      | 
| /KickPlayer [steamid]          | 文字列           | 指定したプレイヤーをサーバーからキック                                | 
| /BanPlayer [steamid]           | 文字列           | 指定したプレイヤーをサーバーからBAN                                    | 
| /TeleportToPlayer [steamid]    | 文字列           | 指定したプレイヤーの元へテレポート                                    | 
| /TeleportToMe [steamid]        | 文字列           | 指定したプレイヤーを自分の元へテレポート                              | 
| /ShowPlayers                   | -                | 現在接続中の全プレイヤー情報を表示                                    | 
| /Info                          | -                | サーバー情報を表示                                                    | 
| /Save                          | -                | 現在のワールドデータを保存                                            |

:::note
現状、ゲーム内でBAN解除するコマンドはありません。BAN解除したい場合は、サーバーディレクトリ内の `banlist.txt` ファイルを手動で編集してください。
:::

<InlineVoucher />