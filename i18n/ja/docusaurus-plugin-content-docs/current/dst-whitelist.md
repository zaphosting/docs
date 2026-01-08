---
id: dst-whitelist
title: "Don't Starve Together: ホワイトリスト"
description: "ZAP-HostingのDon't Starve Togetherサーバーでホワイトリストを設定する方法 → 今すぐ詳しく見る"
sidebar_label: ホワイトリスト
services:
  - gameserver-dst
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

ホワイトリストは、サーバーに参加できるユーザーを制限するアクセスリストです。Don't Starve Togetherでは、KleiユーザーIDをベースにした許可リストとして実装されています。一般的な設定は、`whitelist.txt`ファイルと`cluster.ini`内の`whitelist_slots`の組み合わせです。

<InlineVoucher />


## ホワイトリストの有効化

FTPでサーバーに接続し、`cluster.ini`があるクラスターのフォルダ（通常は`DoNotStarveTogether/Cluster_1/`やプロバイダー固有のパス）を見つけます。`cluster.ini`を開き、`[NETWORK]`セクション内の`whitelist_slots`を設定します。

サーバーを実質的にホワイトリスト専用にするには、`whitelist_slots`を`max_players`と同じ値に設定してください。

```ini
[NETWORK]
max_players = 6
whitelist_slots = 6
```

同じクラスターのディレクトリ内に`whitelist.txt`を作成または編集し、1行に1つずつKU_形式のKlei IDを追加します。

```txt
KU_aaaaaaaa
KU_bbbbbbbb
```

ファイルを保存してサーバーを再起動します。許可リストは起動時に読み込まれます。

## ホワイトリストプレイヤーの管理

プレイヤーを追加するには、`whitelist.txt`にそのKU_ IDを追記し、保存して再起動します。

プレイヤーを削除するには、`whitelist.txt`からそのKU_ IDを削除し、保存して再起動します。

予約された許可リストのスロット数がリスト内のユーザー数を超えた場合に参加問題が起きないよう、`whitelist.txt`内のID数は`whitelist_slots`以上に保ってください。

## ホワイトリスト機能の確認

再起動後、`whitelist.txt`にないアカウントで参加を試みてください。`whitelist_slots`が`max_players`と同じなら、参加は失敗するはずです。その後、リストにあるKU_ IDで参加してアクセスを確認してください。

もしリスト外のプレイヤーがまだ参加できる場合は、アクティブなクラスターのフォルダを編集したか、`[NETWORK]`セクションに`whitelist_slots`の行があるかを確認してください。

## まとめ

上記の手順を正しく行えば、ホワイトリストが有効になり、サーバーに参加できるユーザーを正確に管理できます。アクセスに問題がある場合は、サーバーをもう一度再起動し、ファイルやコマンドの出力で変更が反映されているか再確認してください。

<InlineVoucher />