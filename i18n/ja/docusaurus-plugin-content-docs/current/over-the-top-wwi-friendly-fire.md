---
id: over-the-top-wwi-friendly-fire
title: "Over the Top WWI：フレンドリーファイアの設定"
description: "Over the Top WWIサーバーでフレンドリーファイアを有効化または調整する方法 → 今すぐ詳しく学ぼう"
sidebar_label: フレンドリーファイア
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

フレンドリーファイアは、プレイヤーが味方にダメージを与えられるかどうかを決める設定です。この設定を調整することで、**Over the Top WWI** ゲームサーバーの戦闘をどれだけリアルに、またはカジュアルにするかをコントロールできます。

フレンドリーファイアを有効にするとリアリズムや戦術性がアップし、無効化または軽減するとより気軽で遊びやすい体験になります。

<InlineVoucher />

## 設定方法

フレンドリーファイアの設定はサーバーの設定ファイル内で行います。**ゲームサーバー管理パネル**の**Configs**からアクセスして編集可能です。`ServerConfiguration.ini` ファイルを開き、以下のパラメーターを探してください：

```
EnableFriendlyMeleeFire = 1
EnableFriendlyRangeFire = 1
FriendlyFireAtRoundStart = 60
FriendlyFirePercent = 5
RangeFriendlyFirePercent = 5
ExplosionFf = 0
FriendlyFireReflectPercent = 0
```

- `EnableFriendlyMeleeFire`：味方への近接ダメージの有効/無効
- `EnableFriendlyRangeFire`：味方への遠距離ダメージの有効/無効
- `FriendlyFireAtRoundStart`：フレンドリーファイアが有効になるまでの遅延時間（秒）
- `FriendlyFirePercent`：味方に与える近接ダメージの割合
- `RangeFriendlyFirePercent`：味方に与える遠距離ダメージの割合
- `ExplosionFf`：味方への爆発ダメージの有効/無効
- `FriendlyFireReflectPercent`：味方ではなく攻撃者に反射されるダメージの割合

`ServerConfiguration.ini` を編集後、ファイルを保存してサーバーを再起動してください。新しいフレンドリーファイア設定が即座に反映されます。

## まとめ

おめでとうございます！これで**Over the Top WWIゲームサーバー**のフレンドリーファイア設定が完了しました。これらの値を調整することで、コミュニティに合わせたリアリズムとゲーム体験のバランスを取れます。

さらに質問やサポートが必要な場合は、いつでもお気軽にサポートチームにお問い合わせくださいね！🙂

<InlineVoucher />