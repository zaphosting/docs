---
id: eco-whitelist
title: "ECO: ホワイトリスト"
description: "ZAP-HostingのECOサーバーでホワイトリストを設定する方法→ 今すぐ詳しくチェック"
sidebar_label: ホワイトリスト
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

ホワイトリストは、サーバーに接続できるユーザーを制限するアクセスリストです。ECOではホワイトリストは`Users.eco`設定ファイルに保存され、少なくとも1つのSteamID64が登録されると自動的に有効になります。

## ホワイトリストの有効化

FTPでサーバーに接続し、`Users.eco`ファイルを探します。開いたら`WhiteList`セクションを見つけて、`$values`内にSteamID64を追加してください。

```json
"WhiteList": {
  "System.String": {
"$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
"$values": [
  "76561198000000000"
]
  }
}
```

ファイルを保存してサーバーを再起動し、新しいアクセスリストが反映されるようにしましょう。

## ホワイトリストプレイヤーの管理

プレイヤーの追加は、ゲーム内で必要な権限があればZAP-Hostingのゲームサーバー管理のライブコンソールからも可能です。以下のコマンドでプレイヤー名を指定して追加します。

```text
/whitelist PlayerName
```

プレイヤーの削除は`Users.eco`を編集して行います。`$values`から該当のSteamID64を削除し、保存後にサーバーを再起動してください。削除用のサーバーコマンドはありません。

## ホワイトリストの動作確認

再起動後、`$values`に含まれていないアカウントで接続を試みてください。アクセスがブロックされるはずです。その後、ホワイトリストに登録されたアカウントで接続してみましょう。

もしアクセスが制限されていない場合は、SteamID64が最低1つ登録されているか、編集した`Users.eco`ファイルが現在稼働中のサーバーインスタンスのものと一致しているかを確認してください。

## まとめ

上記の手順を正しく行えば、ホワイトリストが有効になり、サーバーに参加できるユーザーを正確に管理できます。もしアクセス制限が期待通りに機能しない場合は、サーバーをもう一度再起動し、ファイルやコマンドの出力を再確認して変更が適用されているかチェックしましょう。

<InlineVoucher />