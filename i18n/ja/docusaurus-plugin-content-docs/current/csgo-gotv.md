---
id: csgo-gotv
title: "CS:GO: GOTV"
description: "遅延ありのライブゲーム配信と自動録画で観戦を楽しもう。いつでも試合を振り返れる → 今すぐチェック"
sidebar_label: GOTV
services:
  - gameserver-csgo
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

GOTVは、少し遅延を持たせてゲームをライブ配信する機能を提供します。これにより、ゲームに参加していない外部の人もサーバー上で何が起きているかを追うことができます。この技術は有名なカウンターストライクの大会でも使われており、観客が試合の様子を観戦できるようになっています。さらに、配信は自動で録画もできるので、後から何度でも試合を見返せます。

<InlineVoucher />

## 有効化

GOTVサービスの有効化は**server.cfg**設定ファイルで行います。以下のコマンドを追加してください：

```
tv_enable 1
tv_delay 90
tv_advertise_watchable 1
```

## 設定

上記のコマンドはGOTVマスターサーバーを有効化しアクセス可能にするため必須です。さらに高度な設定用のコマンドは以下の通りです：

|            コマンド            |                         説明                         |
| :--------------------------: | :--------------------------------------------------: |
|  tv_allow_camera_man "0\|1"  |        観戦者がカメラマンとして操作可能にする        |
| tv_allow_static_shots "0\|1" |    固定視点カメラを使って撮影する    |
|     tv_autorecord "0\|1"     | 全試合をGOTVデモとして自動録画。デモファイル名はauto-YYYYYMMDD-hhmm-map.dem形式 |
|     tv_autoretry "0\|1"      | ネットワークタイムアウト後に再接続を試みる |
| tv_chattimelimit "seconds"  | 視聴者がチャットできる間隔を秒単位で制限 |
|       tv_debug "0\|1"        |             GOTVのデバッグ情報を表示             |
|   tv_delaymapchange "0\|1"   | 配信完了までマップ変更を遅延させる |
|      tv_maxclients "n"       |          GOTVサーバーの最大クライアント数          |
|        tv_maxrate "n"        | GOTV視聴者の最大帯域幅制限、0は無制限 |
|        tv_msg "text"         |           すべての視聴者にメッセージを送信           |
|        tv_name "name"        | GOTVのホスト名。サーバーブラウザやステータスバーに表示される名前を設定 |
|       tv_nochat "0\|1"       |           GOTVチャットの有効/無効           |
|    tv_password "password"    |       GOTV配信にパスワードを設定して保護       |
|     tv_record "filename"     |             GOTVデモの録画を開始             |
|           tv_stop            |                 GOTV配信を停止                 |
|        tv_stoprecord         |            GOTVデモの録画を停止             |
|           tv_title           |           GOTV配信のタイトルを設定           |

## 接続方法

サーバーで機能が有効化されていれば、サーバーのIPアドレスと割り当てられたGOTVポートからアクセス可能です。ゲーム内のコンソールを開き、以下のコマンドで接続します：

```
connect SERVERIP:27020
```

手動・自動録画されたデモはCS:GOサーバーのメインディレクトリ（/gxxxxx/CS:GO/game/csgo）に保存されます。FTPアクセスでダウンロード可能です。FTPアクセス方法がわからない場合は、こちらの説明を参考にしてください：[FTPアクセス方法](gameserver-ftpaccess.md)。

![](https://screensaver01.zap-hosting.com/index.php/s/w9b4Z7ECoSkSQdT/preview)

ゲーム内のデモ再生機能で、**Load**からダウンロードしたデモを選択し、**Play**ボタンで再生できます。

<InlineVoucher />