---
id: csgo-gotv
title: "CSGO: GOTVについての情報"
description: "GOTVがCS:GOや類似ゲームでのライブゲーム配信やリプレイ録画を可能にし、観戦体験を向上させる仕組みをチェック → 今すぐ詳しく知ろう"
sidebar_label: GOTV
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::warning Archived Guide
このドキュメントはアーカイブされています。内容が古くなったり、正確でなくなった場合にアーカイブされます。アーカイブ理由は以下の通りです：

理由：CS:GOは現在アクティブに提供されておらず、開発も終了しています。CS2がCS:GOの後継です。CS2への移行をおすすめします。
::::



## GOTVって何？


GOTVは、少し遅延を持ってゲームをライブ配信する機能です。これにより、ゲームに参加していない外部の人もサーバー上で起きていることを観戦できます。この技術は有名なカウンターストライクの大会でも使われており、観客が試合を楽しめるようになっています。さらに、配信は自動的に保存もできるので、後からリプレイとして見返すことも可能です。

![](https://screensaver01.zap-hosting.com/index.php/s/qcewrMDCF2nzyie/preview)

<InlineVoucher />

## GOTVの使い方は？


サーバーでこの機能が有効になっている場合、サーバーのIPアドレスとGOTV用のポートを使ってアクセスできます。接続にはゲーム内のコンソールを使います。以下のコマンドで接続可能です：

```
connect SERVERIP:27020
```


手動・自動で録画されたデモはCS:GOサーバーのメインディレクトリ（gxxxxx / csgo / csgo /）に保存されます。これらは提供されているFTPアクセスからダウンロード可能です。FTPアクセスの方法がわからない場合は、こちらのガイドを参考にしてください：[FTPアクセス方法](gameserver-ftpaccess.md)。


![](https://screensaver01.zap-hosting.com/index.php/s/enbMKLwNaeqdzxm/preview)



ゲーム内のデモ再生機能を使うと、ダウンロードしたデモを**Load**で選択し、**Play**ボタンで再生できます。



## GOTVマスターサーバーの設定方法

GOTVマスターサーバーを有効にするには、**server.cfg**に以下のコマンドを追加する必要があります：

```
tv_enable 1
tv_delay 90
tv_advertise_watchable 1
```



上記のコマンドはGOTVマスターサーバーを有効化し、アクセス可能にするために必須です。さらに高度な設定用のコマンドは以下の通りです：

|            コマンド            |                         説明                         |
| :--------------------------: | :----------------------------------------------------------: |
|  tv_allow_camera_man "0\|1"  |        観戦者がカメラマンとして操作可能にする        |
| tv_allow_static_shots "0\|1" |    固定方向のカメラを使って撮影する    |
|     tv_autorecord "0\|1"     | すべてのゲームを自動的にGOTVデモとして録画。デモファイルの形式はauto-YYYYYMMDD-hhmm-map.dem |
|     tv_autoretry "0\|1"      | ネットワークタイムアウト後に再接続を試みる |
| tv_chattimelimit "seconds"  | 観戦者がチャットを書き込める間隔を秒単位で制限 |
|       tv_debug "0\|1"        |             GOTVのデバッグ情報を表示             |
|   tv_delaymapchange "0\|1"   | 配信が完了するまでマップ変更を遅延させる |
|      tv_maxclients "n"       |          GOTVサーバーの最大クライアント数           |
|        tv_maxrate "n"        | GOTV視聴者の最大帯域幅制限、0は無制限 |
|        tv_msg "text"         |           すべての視聴者にメッセージを送信           |
|        tv_name "name"        | GOTVのホスト名。サーバーブラウザやステータスバーに表示される名前を定義 |
|       tv_nochat "0\|1"       |           GOTVチャットの有効/無効           |
|    tv_password "password"    |       GOTV配信をパスワードで保護        |
|     tv_record "filename"     |             GOTVデモの録画を開始             |
|           tv_stop            |                 GOTV配信を停止                  |
|        tv_stoprecord         |            GOTVデモの録画を停止              |
|           tv_title           |           GOTV配信のタイトルを定義           |

<InlineVoucher />