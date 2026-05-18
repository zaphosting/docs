---
id: csgo-cstv
title: "CS:GO: CSTV "
description: "遅延ありのライブゲーム配信と自動録画で観戦を楽しもう。試合をいつでも振り返れる → 今すぐチェック"
sidebar_label: CSTV
services:
  - gameserver-csgo
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

CSTVは、少し遅延を持たせたライブゲーム配信を可能にします。これにより、ゲームに直接関わっていない外部の人もサーバー上の状況を追うことができます。この技術は有名なカウンターストライクの大会でも使われており、観客が試合の様子を楽しめるようになっています。さらに、配信は自動で録画もできるので、後から何度でも見返せます。

<InlineVoucher />

## 有効化

CSTVサービスの有効化は**server.cfg**設定ファイルで行います。必要なコマンドを追加してください：

```
tv_enable 1
tv_delay 90
tv_advertise_watchable 1
```

## 設定

上記のコマンドはCSTVマスターサーバーを有効化しアクセス可能にするため必須です。さらに高度な設定用のコマンドは以下の通りです：

|            コマンド            |                         説明                         |
| :--------------------------: | :--------------------------------------------------: |
|  tv_allow_camera_man "0\|1"  |        観戦者がカメラマンとして操作可能にする        |
| tv_allow_static_shots "0\|1" |    固定方向のカメラで撮影する設定    |
|     tv_autorecord "0\|1"     | 全試合を自動でCSTVデモとして録画。デモファイル名は auto-YYYYYMMDD-hhmm-map.dem 形式 |
|     tv_autoretry "0\|1"      | ネットワークタイムアウト後に再接続を試みる |
| tv_chattimelimit "秒数"      | 視聴者がチャットを書き込める間隔を秒単位で制限 |
|       tv_debug "0\|1"        |             CSTVのデバッグ情報を表示             |
|   tv_delaymapchange "0\|1"   | 配信完了までマップ変更を遅延させる |
|      tv_maxclients "n"       |          CSTVサーバーの最大クライアント数          |
|        tv_maxrate "n"        | 最大許容CSTV視聴者帯域幅、0は無制限 |
|        tv_msg "テキスト"     |           すべての視聴者にメッセージを送信           |
|        tv_name "名前"        | CSTVのホスト名。サーバーブラウザやステータスバーに表示される名前を定義 |
|       tv_nochat "0\|1"       |           CSTVチャットの有効/無効           |
|    tv_password "パスワード"  |       CSTV配信にパスワード保護をかける       |
|     tv_record "ファイル名"   |             CSTVデモの録画を開始             |
|           tv_stop            |                 CSTV配信を停止                 |
|        tv_stoprecord         |            CSTVデモの録画を停止             |
|           tv_title           |           CSTV配信のタイトルを定義           |

## 接続方法

サーバーで機能が有効化されていれば、サーバーのIPアドレスと割り当てられたCSTVポートからアクセス可能です。ゲーム内のコンソールで以下のコマンドを使って接続します：

```
connect SERVERIP:27020
```

手動・自動で録画されたデモはCS:GOサーバーのメインディレクトリ（/gxxxxx/CS:GO/game/csgo）に保存されます。FTPアクセスでダウンロード可能です。FTPアクセス方法がわからない場合は、こちらのガイドを参考にしてください：[FTPアクセス方法](gameserver-ftpaccess.md)。

![](https://screensaver01.zap-hosting.com/index.php/s/w9b4Z7ECoSkSQdT/preview)

ゲーム内のデモ再生機能で、ダウンロードしたデモを**Load**から選択し、**Play**ボタンで再生できます。

<InlineVoucher />