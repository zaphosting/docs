---
id: hytale-pvp-management
title: "Hytale: PvP管理"
description: "Hytaleサーバーでのプレイヤー対プレイヤー戦闘（PvP）を管理・設定する方法 → 今すぐ詳しく見る"
sidebar_label: PvP管理
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

HytaleサーバーでのPvP管理は、プレイヤー同士がワールド内でダメージを与え合ったり戦ったりできるかどうかをコントロールします。PvP設定を調整することで、サーバーオーナーはプレイヤー間の戦闘を完全に有効化、完全に無効化、または特定の状況に限定することができます。

<InlineVoucher />

## 設定方法

PvPの挙動はワールドごとに定義され、サーバーの設定ファイルで構成されます：

```
/gXXXXXXX/hytale/universe/worlds/default/config.json
```

この設定は、サーバーがプレイヤー同士のダメージをどう扱うか、そしてアクティブなワールド内でPvPが許可されているかを決定します。PvP設定の変更は該当ワールド全体に適用され、反映させるにはサーバーの再起動が必要です。

以下の例は、あるワールドでPvPが無効化されている設定です：

```
"WorldConfig": {
  "PvP": false
}
```

この設定を適用すると、そのワールド内でプレイヤー同士がダメージを与え合うことができなくなり、PvE（プレイヤー対環境）に特化した環境が作られます。

PvPを有効にしてプレイヤー同士の戦闘を許可する場合は、以下のように設定します：

```
"WorldConfig": {
  "PvP": true
}
```

## まとめ

設定が完了すれば、PvPの管理方法が明確になり、協力プレイや競争環境、またはその両方をサポートするために簡単に設定を調整できます。ご不明点やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にお問い合わせください！🙂

<InlineVoucher />