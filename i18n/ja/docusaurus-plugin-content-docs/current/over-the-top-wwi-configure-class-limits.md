---
id: over-the-top-wwi-configure-class-limits
title: "Over the Top WWI：クラス制限の設定"
description: "Over the Top WWIサーバーでクラス制限を設定する方法 → 今すぐ詳しく学ぼう"
sidebar_label: クラス制限
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

**Over the Top WWI** のクラス制限は、スナイパーやサッパー、ヘビーなど特定のユニットタイプを使用できるプレイヤー数を管理します。これらの制限を調整することで、ゲームプレイのバランスを取り、特定のクラスの過剰使用を防げます。

クラス制限を設定することで、公平なチーム編成を実現し、より戦略的で構造化されたゲーム体験を作り出せます。

<InlineVoucher />

## 設定方法

クラス制限はサーバーの設定ファイル内で行います。**ゲームサーバー管理パネル**の**Configs**からアクセスして編集可能です。`ServerConfiguration.ini`という設定ファイルを探して開いてください。ファイル内で以下のパラメータを見つけます：

```
EnableClassLimits = 1
PercentofCavPerTeam = 20
NumberOfSappers = 90
NumberOfSpecialists = 12
NumberofInfOfficers = 9
NumberOfSnipers = 10
NumberOfHeavys = 12
NumberofStormTroops = 25
MinimumNumOfPlayerForClassLimits = 15
```

- `EnableClassLimits` はクラス制限の有効・無効を切り替えます  
  - `0` → 無効  
  - `1` → 有効  

- `PercentofCavPerTeam` はチームごとに許可される騎兵ユニットの割合を設定します

- `NumberOfSappers`、`NumberOfSpecialists`、`NumberOfSnipers`、`NumberOfHeavys`、`NumberofStormTroops` は各クラスを使用できるプレイヤー数を指定します

- `NumberofInfOfficers` は士官役割の人数を制御します

- `MinimumNumOfPlayerForClassLimits` はクラス制限を適用するために必要な最低プレイヤー数を定義します

これらの値を調整して、各クラスを選択できるプレイヤー数をコントロールし、好みのゲームプレイスタイルに合わせてサーバーのバランスを取ってください。

`ServerConfiguration.ini`を編集後は、ファイルを保存してサーバーを再起動してください。新しいクラス制限が自動的に適用されます。

## まとめ

おめでとうございます！これで**Over the Top WWIサーバー**のクラス制限設定が完了しました。チーム編成のバランスを整え、ゲーム体験をより良くできます。

ご不明点やサポートが必要な場合は、いつでもお気軽にサポートチームまでお問い合わせください。毎日対応していますよ！🙂

<InlineVoucher />