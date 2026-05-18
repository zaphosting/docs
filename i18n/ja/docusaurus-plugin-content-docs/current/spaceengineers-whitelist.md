---
id: spaceengineers-whitelist
title: "Space Engineers: ホワイトリスト"
description: ZAP-HostingのSpace Engineersサーバーでホワイトリストを設定する方法 → 今すぐ詳しく知ろう
sidebar_label: ホワイトリスト
services:
  - gameserver-spaceengineers
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

ホワイトリストとは、サーバーに参加できるユーザーを制限するアクセスリストのこと。Space Engineersでは、特定のSteamグループのメンバーだけが接続できるSteamグループベースのホワイトリストがよく使われています。

<InlineVoucher />

## ホワイトリストの有効化

まずサーバー用のSteamグループを作成し、許可したいプレイヤーを追加しましょう。その後、FTPでサーバーに接続し、`SpaceEngineers-Dedicated.cfg`を開きます。

サーバーがプライベートモードに設定されていることを確認し、設定ファイルの最後にグループIDを指定します。

```xml
<ServerType>PRIVATE</ServerType>
<GroupID>XXXXXXXXXXXXXXXXXX</GroupID>
```

`GroupID`は自分のSteamグループIDに置き換えてください。ファイルを保存してサーバーを再起動しましょう。

## ホワイトリストプレイヤーの管理

誰かをホワイトリストに追加したい場合は、その人をSteamグループに招待し、参加してもらいます。グループメンバーになれば接続可能です。

削除したい場合は、その人をSteamグループから外してください。メンバーでなくなれば接続できなくなります。別のグループにホワイトリストを切り替えたい場合は、`<GroupID>`の値を変更してサーバーを再起動してください。

## ホワイトリストの動作確認

再起動後、Steamグループに入っていないアカウントで接続を試みてください。サーバーが接続を拒否するはずです。その後、グループメンバーのアカウントで接続を試してみましょう。

もしアクセスがまだ開いている場合は、サーバーがプライベートモードで動作しているか、`SpaceEngineers-Dedicated.cfg`に`<GroupID>`の記述があるかを確認してください。

## まとめ

上記の手順を正しく行えば、ホワイトリストが有効になり、誰がサーバーに参加できるかを正確にコントロールできます。もしアクセスに問題がある場合は、サーバーをもう一度再起動し、ファイルやコマンドの出力を再確認して変更が適用されているかチェックしましょう。

質問やサポートが必要な場合は、いつでもお気軽にサポートチームにお問い合わせください！毎日対応していますよ！🙂

<InlineVoucher />