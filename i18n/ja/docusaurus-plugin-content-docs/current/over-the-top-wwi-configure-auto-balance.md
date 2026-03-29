---
id: over-the-top-wwi-configure-auto-balance
title: "Over the Top WWI：自動チームバランスの設定"
description: "Over the Top WWIサーバーで自動チームバランスを設定する方法 → 今すぐチェック"
sidebar_label: 自動チームバランス
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

**Over the Top WWI** での公平で楽しい対戦にはチームバランスが超重要。バランスが取れていないと、一方のチームが大きく有利になってしまい、不公平でつまらないゲーム体験になっちゃうんだ。

自動バランスシステムは、特定の条件を満たしたときにプレイヤーを自動でチーム間に振り分けて、公平さをキープしてくれるよ。

<InlineVoucher />

## 設定方法

自動チームバランスはサーバーの設定ファイル内で設定するよ。**ゲームサーバー管理パネル**の**Configs**からアクセスして編集できる。`ServerConfiguration.ini` という設定ファイルを見つけて開いてね。中に以下のパラメータがあるよ：

```
EnableAutobalance = 1
TeamPercentsAutoBalance = 50
AutoBalanceThreshold = 5
MinAutoBalanceCount = 15
LimitTeamSelection = 0
```

- `EnableAutobalance` は自動チームバランスのオン・オフを切り替えるよ

- `0` → 無効
- `1` → 有効

- `TeamPercentsAutoBalance` は理想のチーム比率を設定。例：`50` はチーム人数を均等に
- `AutoBalanceThreshold` はバランスが崩れても許容する差の大きさ。これを超えるとバランス調整が発動
- `MinAutoBalanceCount` は自動バランスが有効になるための最低プレイヤー数
- `LimitTeamSelection` はプレイヤーが手動でチームを選べるか制限する設定

- `0` → 制限なし
- `1–3` → 値に応じてチーム選択を制限

`ServerConfiguration.ini` を編集したら、保存してサーバーを再起動しよう。これで試合中に自動でチームバランスを調整してくれるよ。

## まとめ

おめでとう！これで**Over the Top WWIサーバー**の自動チームバランス設定はバッチリ。公平な対戦ができて、みんなのゲーム体験がグッと良くなるはず。

もし質問やサポートが必要なら、いつでも気軽にサポートチームに連絡してね。毎日対応してるから安心して！🙂

<InlineVoucher />