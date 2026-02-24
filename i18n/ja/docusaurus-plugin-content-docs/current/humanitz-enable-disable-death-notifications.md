---
id: humanitz-enable-disable-death-notifications
title: "HumanitZ：デス通知の有効化／無効化"
description: "HumanitZサーバーでプレイヤーのデス通知を有効化または無効化する方法 → 今すぐチェック"
sidebar_label: "デス通知の有効化／無効化"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## はじめに

デス通知は、サーバー内で誰かが死亡したときにプレイヤーに知らせる機能です。アクティビティの把握に便利ですが、より没入感のある体験や競技性を重視するサーバーでは、公開のデスメッセージをオフにしたい場合もあります。

HumanitZでは、サーバーの設定ファイルからプレイヤーのデス通知を簡単に有効化・無効化できます。

<InlineVoucher />

## 設定方法

デス通知の設定は `GameServerSettings.ini` ファイルで管理されています。サーバーの管理パネルの **Configs** からアクセス可能です。  
設定ファイル内で以下のパラメーターを探してください：

```
;If set to true notification about dead players will be disabled. Admins will still be able to see them.
NoDeathFeedback=true
```

- `NoDeathFeedback=true` – 通常プレイヤー向けのデス通知を無効化します。管理者は引き続き通知を受け取れます。  
- `NoDeathFeedback=false` – すべてのプレイヤーにデス通知を有効化します。

全員にデス通知を表示したい場合は、以下のように設定してください：

```
NoDeathFeedback=false
```

ファイルを編集したら、変更を保存してサーバーを再起動すると設定が反映されます。

## まとめ

おめでとうございます！`GameServerSettings.ini` の `NoDeathFeedback` の値を変更することで、HumanitZサーバーのデス通知設定を無事にカスタマイズできました。  
もし質問やサポートが必要な場合は、いつでもお気軽にサポートチームまでご連絡ください。毎日対応していますよ！🙂

<InlineVoucher />