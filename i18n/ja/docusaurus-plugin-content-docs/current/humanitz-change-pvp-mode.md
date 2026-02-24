---
id: humanitz-change-pvp-mode
title: "HumanitZ: PvPモードの変更"
description: "HumanitZサーバーでPvPを有効または無効にする方法 → 今すぐ詳しく知ろう"
sidebar_label: "PvPモードの変更"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## はじめに

プレイヤー対プレイヤー（PvP）戦闘は、HumanitZのようなサバイバルゲームのコアメカニクスです。PvPを有効または無効にすることで、プレイヤー同士が戦闘でダメージを与え合えるかどうかや、車両やコンテナなどのプレイヤー所有アイテムとどう関わるかが変わります。

<InlineVoucher />



## 設定方法

PvPモードは `GameServerSettings.ini` ファイルで管理されています。このファイルはサーバーの管理パネルの **Configs** セクションからアクセス可能です。設定ファイル内で以下のパラメーターを探してください：

```
;false/true=Off/On. This will also affect the ability to interact with player items such as cars and containers
PVP=true
```

- `PVP=true` – プレイヤー対プレイヤー戦闘を有効にする  
- `PVP=false` – プレイヤー対プレイヤー戦闘を無効にする

PvPモードを変更するには、サーバーでのPvPの挙動に応じて値を `true`（オン）か `false`（オフ）に設定するだけです。

例 – PvP無効：

```
PVP=false
```

ファイルを編集したら、変更を保存してサーバーを再起動してください。新しい設定が反映されます。



## まとめ

おめでとうございます！`GameServerSettings.ini` の `PVP` 値を変更することで、HumanitZサーバーのPvPモードを無事に切り替えられました。もし質問やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にご連絡くださいね！🙂

<InlineVoucher />