---
id: cs2-cstv
title: "CS2: CSTV "
description: "遅延ありのライブゲーム配信と自動録画で観戦を楽しもう。いつでも試合を振り返れる → 今すぐチェック"
sidebar_label: CSTV
services:
  - gameserver-cs2
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

CSTVは、ゲームを少し遅延させてライブ配信する機能を提供します。これにより、ゲームに参加していない外部の人もサーバー上の状況をリアルタイムで追えます。この技術は有名なカウンターストライクの大会でも使われており、観客が試合の様子を楽しめるようになっています。さらに、配信は自動で録画もできるので、後から何度でも試合を見返せます。

<InlineVoucher />

## 有効化

CSTVサービスの有効化は**server.cfg**設定ファイルで行います。以下のコマンドを追加してください：

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
|     tv_autorecord "0\|1"     | 全試合をCSTVデモとして自動録画。デモファイル名はauto-YYYYYMMDD-hhmm-map.dem形式 |
|     tv_autoretry "0\|1"      | ネットワークタイムアウト後に再接続を試みる |
| tv_chattimelimit "seconds"  | 視聴者のチャット書き込みをx秒ごとに制限 |
|       tv_debug "0\|1"        |             CSTVのデバッグ情報を表示             |
|   tv_delaymapchange "0\|1"   | 配信完了までマップ変更を遅延させる |
|      tv_maxclients "n"       |          CSTVサーバーの最大クライアント数          |
|        tv_maxrate "n"        | 最大許容CSTV視聴者帯域幅、0は無制限 |
|        tv_msg "text"         |           すべての視聴者にメッセージを送信           |
|        tv_name "name"        | CSTVのホスト名。サーバーブラウザやステータスバーに表示される名前を定義 |
|       tv_nochat "0\|1"       |           CSTVチャットの有効/無効           |
|    tv_password "password"    |       CSTV配信をパスワードで保護       |
|     tv_record "filename"     |             CSTVデモの録画を開始             |
|           tv_stop            |                 CSTV配信を停止                 |
|        tv_stoprecord         |            CSTVデモの録画を停止             |
|           tv_title           |           CSTV配信のタイトルを定義           |

## 接続方法

サーバーで機能が有効化されていれば、サーバーのIPアドレスとCSTV用ポートでアクセス可能です。ゲーム内のコンソールから以下のコマンドで接続します：

```
connect SERVERIP:27020
```

手動・自動録画されたデモはCS:GOサーバーのメインディレクトリ（/gxxxxx/cs2/game/csgo）に保存されます。FTPアクセスでダウンロード可能です。FTPアクセス方法がわからない場合は、こちらのガイドを参考にしてください：[FTPアクセス方法](gameserver-ftpaccess.md)。

![](https://screensaver01.zap-hosting.com/index.php/s/w9b4Z7ECoSkSQdT/preview)

ゲーム内のデモ再生機能で、ダウンロードしたデモを**Load**から選択し、**Play**ボタンで再生できます。

<InlineVoucher />