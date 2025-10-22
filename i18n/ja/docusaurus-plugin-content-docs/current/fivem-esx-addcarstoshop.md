---
id: fivem-esx-addcarstoshop
title: "FiveM：ショップに車を追加する方法"
description: "カスタマイズされた車ショップ体験のために、データベースで車両を管理・追加する方法をチェック → 今すぐ詳しく学ぼう"
sidebar_label: ディーラーに車を追加
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## データベースへのアクセス

まずはデータベースに接続します。これは「Databases」タブから行います。

![](https://screensaver01.zap-hosting.com/index.php/s/8NYJC6Qq5inG5yk/preview)

そこで青いアイコンをクリックし、ページに記載されている情報でログインします。

![](https://screensaver01.zap-hosting.com/index.php/s/XK5CLoeckxxHk8w/preview)

## スポーン名を見つける

次に車のスポーン名を調べます。これは実際に試してみるか、以下のページを参照して探せます：
https://wiki.gtanet.work/index.php?title=Vehicle_Models

## 新しい車両を追加する

車を選んだら、リストに追加しましょう。

:::info
デフォルトで多くの車がすでに車ショップに登録されています。まずはあなたの車が既にあるか確認してみてください。
:::

まずは車のカテゴリーを確認します。どのカテゴリーに追加できるか把握するためです。
これは「vehicle_categories」テーブルで確認します。

![](https://screensaver01.zap-hosting.com/index.php/s/PYSt6anrdXs8QLY/preview)

ここで「name」カラムを使います。これを覚えておきましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/CnrQJcGbf3SPdtg/preview)

次に「vehicles」テーブルに移動し、
「Insert」をクリックします。

![](https://screensaver01.zap-hosting.com/index.php/s/eN5x9o724a6tKwf/preview)

ここで新しい車両を追加します。各項目の簡単な説明：

**name** ショップに表示される名前  
**model** スポーン名（必ず小文字で入力してください）  
**price** 車両の価格  
**category** 先ほど確認したカテゴリー名

参考までに、こちらはサンプルです：

![](https://screensaver01.zap-hosting.com/index.php/s/cFrrLYKTALmCnFP/preview)

<InlineVoucher />