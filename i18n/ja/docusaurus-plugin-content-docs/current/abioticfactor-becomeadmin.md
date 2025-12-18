---
id: abioticfactor-becomeadmin
title: "Abiotic Factor: 管理者になる方法"
description: "プレイヤーに管理者権限を付与して、ゲームサーバーの完全なコントロールと快適なゲーム管理を実現する方法をチェック → 今すぐ詳しく見る"
sidebar_label: 管理者になる
services:
  - gameserver-abioticfactor
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

**Abiotic Factor** では、サーバー管理者がプレイヤー管理やサーバーコマンドの実行、設定変更を行うために、特別な権限が必要です。

<InlineVoucher />

## 設定方法

設定は `admin.ini` ファイルで行います。ゲームサーバーの管理画面の **Configs** セクションから `admin.ini` を開いてください。デフォルトでは、管理者を定義する以下のような記述があります。`ExampleID` の部分を、管理者権限を付与したいプレイヤーの **SteamID64** に置き換えてください。

```
[Moderators]
Moderator=ExampleID1
Moderator=ExampleID2
```

## まとめ

情報を正しく追加し、サーバーを再起動すると、指定したプレイヤーがゲーム内でフル管理者権限を持つようになります。ご不明点やサポートが必要な場合は、いつでもお気軽にサポートチームまでお問い合わせください！🙂

<InlineVoucher />