---
id: csgo-becomeadmin
title: "CS:GO: 管理者になる方法"
description: "CS:GOでSourcemodを使って管理者権限を割り当て、サーバーを完全にコントロールする方法をチェック → 今すぐ詳しく知ろう"
sidebar_label: 管理者になる
services:
  - gameserver-csgo
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
管理者権限を割り当てることで、サーバーをフルコントロールできるシンプルかつ包括的な管理が可能になります。管理者として、Sourcemodが提供するすべてのオプションや機能をゲーム内で直接使うことができます。サーバーに管理者権限を割り当てるために必要な手順を以下で詳しく説明します。  
<InlineVoucher />

## 準備

管理者権限を使うには、まず基盤を作る必要があります。CS:GOはデフォルトでは包括的な管理機能を提供していませんが、Sourcemodのようなフレームワークがあります。このフレームワークをインストールして設定する必要があります。まだインストールしていない場合は、CS:GO用プラグインのインストールガイドをぜひチェックしてください。

## 管理者の定義

管理者の追加は、`../csgo/cstrike/addons/sourcemod/configs/`にある`admins_simple.ini`または`admins.cfg`の設定ファイルで行います。シンプルな設定なら`admins_simple.ini`で十分です。ここでSteamIDごとに管理者を定義し、権限フラグを直接割り当てられます。

```ini title="admins_simple.ini (例)"
"STEAM_0:1:12345678" "z"
"STEAM_0:1:87654321" "bcdefgjk"
```

この例では、最初の管理者は`z`フラグでフル権限を持ち、2番目の管理者は選択された権限のみを持ちます。

グループや免疫、パスワードなどの高度な設定を使いたい場合は、`admins.cfg`を使いましょう。

```
Admins
{
  "User 1"
  {
    "auth"    "steam"
    "identity" "STEAM_0:1:12345678"
    "flags"   "z"
  }

  "User 2"
  {
    "auth"    "steam"
    "identity" "STEAM_0:1:87654321"
    "flags"   "bcdefgjk"
  }
}
```

## 管理者グループの定義

管理者グループも定義可能です。これにより、管理者の権限をグループ単位で管理でき、個別に権限を設定する手間が省けます。グループは`../csgo/cstrike/addons/sourcemod/configs/`にある`admin_groups.cfg`で定義します。

```
Groups
{
  "Full Admin"
  {
    "flags"   "z"
    "immunity" "99"
  }

  "Moderator"
  {
    "flags"   "bcdefgjk"
    "immunity" "10"
  }
}
```

その後、`admins.cfg`で管理者にグループを割り当てます。

```
Admins
{
  "User 1"
  {
    "auth"     "steam"
    "identity" "STEAM_0:1:12345678"
    "group"    "Full Admin"
  }
}
```

## 管理者の免疫レベルの定義

管理者やグループに免疫値を割り当てることができます。免疫値が低い管理者が、より高い免疫値の管理者に対してコマンドを実行しようとすると失敗します。免疫値は`admins.cfg`の各管理者に`immunity`キーを追加するか、`admin_groups.cfg`で直接設定します。

```
Admins
{
  "ZoNiCaL"
  {
    "auth"      "steam"
    "identity"  "STEAM_0:1:12345678"
    "flags"     "z"
    "immunity"  "100"
  }
}
```

免疫値が高いほど、免疫値の低い管理者からの管理操作に対して強い保護がかかります。

## まとめ

おめでとうございます！これでSourcemodを使ったCS:GOサーバーの管理者権限設定が完了しました。もし質問やサポートが必要な場合は、いつでもお気軽にサポートチームにお問い合わせください。毎日対応していますよ！🙂

<InlineVoucher />