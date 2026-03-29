---
title: "Over the Top WWI：サーバーメッセージの設定方法"
description: "Over the Top WWIサーバーで自動サーバーメッセージを設定する方法 → 今すぐチェック"
sidebar_label: サーバーメッセージ
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

自動サーバーメッセージは、プレイ中に重要な情報をプレイヤーに伝える便利な方法です。ルールの共有やDiscordサーバーの宣伝、役立つヒントの提供などに使えます。

**Over the Top WWI**のゲームサーバーでは、メッセージを定期的に表示できるので、手動操作なしで全プレイヤーに重要な情報を届けられます。

<InlineVoucher />

## 設定方法

サーバーメッセージはサーバーの設定ファイル内で設定します。**ゲームサーバー管理パネル**の**Configs**からアクセスして編集可能です。`ServerConfiguration.ini`という設定ファイルを開いて、以下のパラメータを探してください：

```
ShowServerTimedMessages = 1
AddServerMessage = Join the official Discord! discord.gg/example
AddServerMessage = Please report any bugs on our Discord.
ServerMessagesTimer = 120
```

- `ShowServerTimedMessages` は自動メッセージの有効・無効を切り替えます。`1`で有効、`0`で無効です。
- `AddServerMessage` は表示するメッセージを定義します。複数行追加して、ゲーム中にメッセージをローテーションできます。
- `ServerMessagesTimer` はメッセージの表示間隔（秒）を指定します。例：`120`なら2分ごとにメッセージが表示されます。

メッセージは自由にカスタマイズ・追加可能です：

```
AddServerMessage = サーバーへようこそ！
AddServerMessage = ルールを守り、他のプレイヤーを尊重しましょう。
AddServerMessage = 最新情報はDiscordでチェック！
```

`ServerConfiguration.ini`を編集後は保存してサーバーを再起動してください。設定した間隔でメッセージが自動的にゲーム内に表示されます。

## まとめ

おめでとうございます！これで**Over the Top WWIゲームサーバー**の自動メッセージ設定が完了しました。プレイヤーへの情報共有がスムーズになり、サーバーのコミュニケーションが向上します。

ご不明点やサポートが必要な場合は、いつでもお気軽にサポートチームまでご連絡ください。毎日対応しています！🙂

<InlineVoucher />