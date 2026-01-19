---
id: starmade-whitelist
title: "StarMade: ホワイトリスト"
description: "ZAP-HostingのStarMadeサーバーでホワイトリストを設定する方法 → 今すぐ詳しくチェック"
sidebar_label: ホワイトリスト
services:
  - gameserver-starmade
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

ホワイトリストは、サーバーに参加できるユーザーを制限するアクセスリストです。StarMadeは`server.cfg`で管理され、`whitelist.txt`でユーザーを登録する組み込みのホワイトリスト機能をサポートしています。

<InlineVoucher />

## ホワイトリストの有効化

FTPでサーバーに接続し、`server.cfg`を開きます。認証とホワイトリストを有効にしましょう。

```cfg
USE_STARMADE_AUTHENTICATION=true
REQUIRE_STARMADE_AUTHENTICATION=true
USE_WHITELIST=true
```

ファイルを保存したら、同じサーバーディレクトリにあるか新規作成した`whitelist.txt`を開きます。StarMadeのフォーマットでプレイヤーを1行ずつ追加してください。

```txt
act:-1:PlayerName
act:-1:AnotherPlayer
```

サーバーを再起動して、更新したホワイトリストを読み込みます。

## ホワイトリストプレイヤーの管理

プレイヤーを追加するには、`whitelist.txt`に新しい行を同じフォーマットで追記し、保存して再起動。削除する場合は該当行を削除し、保存して再起動してください。

名前に特殊文字が含まれる場合は、ログイン時のゲーム内表示名と完全に一致する名前を使うことで不一致を防げます。

## ホワイトリストの動作確認

再起動後、`whitelist.txt`にないアカウントで接続を試みてアクセスが拒否されるか確認してください。その後、リストにあるプレイヤー名で接続してみましょう。

リストにあるプレイヤーが参加できない場合は、StarMade認証が有効かつ必須になっているかを確認してください。そうでないと名前の照合が正しく行われません。

## まとめ

上記の手順を正しく行えば、ホワイトリストが有効になり、サーバーに参加できるユーザーを正確に管理できます。もしアクセスに問題がある場合は、サーバーをもう一度再起動し、ファイルやコマンドの出力を再確認して変更が反映されているかチェックしましょう。

質問やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にお問い合わせくださいね！🙂

<InlineVoucher />