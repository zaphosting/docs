---
id: cs2-becomeadmin
title: "CS2: 管理者になる方法"
description: "CS2のゲームプレイでサーバーを完全にコントロールするための管理者権限の割り当てと管理方法をチェック → 今すぐ詳しく見る"
sidebar_label: 管理者になる
services:
  - gameserver-cs2
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
管理者権限の割り当てにより、サーバーを完全にコントロールできるシンプルかつ包括的な管理が可能になります。管理者として、ゲーム内で提供されるすべてのオプションや機能を直接利用できます。サーバーに管理者権限を割り当てるために必要な手順を以下で詳しく説明します。  
<InlineVoucher />

## 準備
管理者権限を使うには、まず基盤を作る必要があります。CS2はデフォルトで包括的な管理機能を提供していませんが、CounterStrikeSharpのような管理用フレームワークがあります。このフレームワークをインストールして設定する必要があります。まだインストールしていない場合は、ぜひ[プラグインのインストール](cs2-plugins)ガイドをチェックしてください。

## 管理者の定義

管理者の追加は、`admins.json`設定ファイルで行います。場所は`../cs2/game/csgo/addons/CounterStrikeShap/addons/configs/`です。新しい管理者を登録するには、新しいエントリーを作成します。名前、識別子（identity）、フラグ（権限）を含める必要があります。名前は任意で設定でき、識別用のプレースホルダーとして使われます。識別子「identity」にはSteamアカウントのSteamIDを指定してください。さらに、必要なフラグを定義します。

```js title="admins.json (例)"
{
  "User 1": {
    "identity": "76561198808392634",
    "flags": ["@css/changemap", "@css/generic"]
  },
  "User 2": {
    "identity": "STEAM_0:1:1",
    "flags": ["@css/generic"]
  }
}
```

## 管理者グループの定義
管理者グループも定義可能です。これにより、管理者の権限を対応するグループ単位で設定できます。個別に権限を設定する必要がなくなるので便利です。グループは`admin_groups.json`設定ファイルで定義し、場所は`../cs2/game/csgo/addons/CounterStrikeShap/addons/configs/`です。

```js title="admin_groups.json"
"#css/simple-admin": {
  "flags": [
    "@css/generic",
    "@css/reservation",
    "@css/ban",
    "@css/slay",
  ]
}
```

## 管理者の免疫値の定義
管理者には免疫値を割り当てることができます。免疫値が低い管理者やプレイヤーが、免疫値が高い管理者やプレイヤーに対して攻撃コマンドを実行しようとすると、そのコマンドは失敗します。免疫値は`configs/admins.json`の各管理者に`immunity`キーを追加して設定します。

```json
{
  "ZoNiCaL": {
    "identity": "76561198808392634",
    "flags": ["@css/changemap", "@css/generic"],
    "immunity": 100
  }
}
```
:::info
免疫チェックはCounterStrikeSharpが自動で行うわけではありません。免疫チェックの管理は各プラグインに任されています。
:::

## まとめ

おめでとうございます！管理者権限の設定が無事完了しました。もし質問やサポートが必要な場合は、いつでもお気軽にサポートチームまでご連絡ください。毎日対応していますよ！🙂

<InlineVoucher />