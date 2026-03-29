---
id: over-the-top-wwi-configure-map-rotation-rules
title: "Over the Top WWI：マップローテーションルールの設定"
description: "Over the Top WWIサーバーでのマップローテーションの設定方法 → 今すぐチェック"
sidebar_label: マップローテーション
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

**Over the Top WWI** のマップローテーションルールは、プレイヤー数に応じてマップの選択とプレイを制御します。これにより、マップがバランスよく、アクティブなプレイヤー数に適した状態で維持されます。

この設定を調整することで、プレイヤーが少なすぎるのに大きなマップが選ばれたり、小さなマップにプレイヤーが集中しすぎるのを防げます。

<InlineVoucher />

## 設定方法

マップローテーションルールはサーバーの設定ファイル内で行います。**ゲームサーバー管理パネル**の**Configs**からアクセスして編集可能です。`ServerConfiguration.ini`という設定ファイルを見つけて開いてください。その中に以下のパラメータがあります：


EnableMinMaxPlayersPerMapCheck = False


- `EnableMinMaxPlayersPerMapCheck` はプレイヤー数に基づく自動マップ選択の有効・無効を切り替えます

  - `False` → 無効
  - `True` → 有効


有効にすると、サーバーは現在のプレイヤー数をチェックし、それに応じてマップ選択を調整します。これにより、適切な範囲内でマップが選ばれ、バランスの取れたゲームプレイが維持されます。

システムは内部の閾値を使ってマップの適正を判断し、大きすぎてプレイヤーが少ないマップや、小さすぎて混雑するマップを避けます。

`ServerConfiguration.ini`を編集したら、ファイルを保存してサーバーを再起動してください。更新されたマップローテーションの挙動が自動的に反映されます。

## まとめ

おめでとうございます！これで**Over the Top WWIサーバー**のマップローテーションルール設定が完了しました。プレイヤー数に合わせてマップサイズを調整し、バランスの良いゲームプレイを実現できます。

ご不明点やサポートが必要な場合は、いつでもお気軽にサポートチームまでご連絡ください。毎日対応していますよ！🙂

<InlineVoucher />