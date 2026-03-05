---
id: csgo-becomeadmin
title: "CS:GO: 管理者になる方法"
description: "CS:GOのゲームプレイでサーバーを完全にコントロールするための管理者権限の割り当てと管理方法をチェック → 今すぐ詳しく知ろう"
sidebar_label: 管理者になる
services:
  - gameserver-csgo
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
管理者権限を割り当てることで、サーバーを簡単かつ包括的に管理できるようになります。管理者として、ゲーム内で提供されるすべてのオプションや機能を直接使うことが可能です。サーバーに管理者権限を割り当てるために必要な手順を以下で詳しく説明します。  
<InlineVoucher />

## 準備
管理者権限を使うには、まず基盤を整える必要があります。CS:GOはデフォルトでは包括的な管理機能を提供していませんが、CounterStrikeSharpのようなフレームワークが存在します。このフレームワークをインストールして設定を行う必要があります。まだインストールしていない場合は、ぜひ当社の[プラグインのインストール](csgo-plugins)ガイドをチェックしてください。

## 管理者の定義

管理者の追加は、`admins.json` 設定ファイルで行います。場所は `../CS:GO/game/csgo/addons/CounterStrikeSharp/addons/configs/` です。新しい管理者を宣言するには、新しいエントリーを作成します。名前、識別子（identity）、フラグ（権限）が必要です。名前は任意で設定可能で、識別用のプレースホルダーとして使われます。識別子の「identity」にはSteamアカウントのSteamIDを指定してください。さらに、必要に応じてフラグを定義します。

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
管理者グループも定義可能です。これにより、管理者の権限をグループ単位で設定でき、個別に権限を設定する手間が省けます。グループは `admin_groups.json` 設定ファイルで定義し、場所は `../CS:GO/game/csgo/addons/CounterStrikeSharp/addons/configs/` です。

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

## 管理者のイミュニティ（免疫）設定
管理者にはイミュニティ値を割り当てることができます。イミュニティ値が低い管理者やプレイヤーが、より高いイミュニティ値を持つ管理者やプレイヤーに対して攻撃コマンドを実行しようとすると、そのコマンドは失敗します。イミュニティ値は `configs/admins.json` の各管理者に `immunity` キーを追加して設定します。

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
イミュニティチェックはCounterStrikeSharpが自動で行うわけではありません。各プラグインがイミュニティチェックの管理を担当します。
:::

## まとめ

おめでとうございます！管理者権限の設定が無事完了しました。もし質問やサポートが必要な場合は、いつでもお気軽に当社のサポートチームにご連絡ください。毎日対応していますよ！🙂

<InlineVoucher />