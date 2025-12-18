---
id: fivem-qbcore-spawnpoints
title: "FiveM: QbCoreでスポーンポイントを管理・カスタマイズしよう"
description: "QBCoreフレームワークでスポーンポイントをカスタマイズ・追加して、ゲーム体験をもっと楽しく → 今すぐチェック"
sidebar_label: スポーンポイント
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

デフォルトのスポーンポイントを変えたい、もしくは追加したい？**QBCoreフレームワーク**のスポーンポイントは`qb-spawn`リソースで管理されてるよ。ここではそのカスタマイズ方法を解説するね。

<InlineVoucher />

## 設定方法

スポーンポイントは`qb-spawn`リソース内の`config.lua`設定ファイルで調整できるよ。このファイルはFTPで編集可能。FTPの使い方がまだわからないなら、[FTPアクセス](gameserver-ftpaccess.md)ガイドを見てみてね。

デフォルトのスポーンポイント設定はこんな感じ：

```
QB.Spawns = {
    ["legion"] = { -- テーブルのインデックス
        coords = vector4(195.17, -933.77, 29.7, 144.5), -- プレイヤーがスポーンする座標
        location = "legion", -- JavaScriptがどれを選んだか認識するための名前
        label = "Legion Square", -- メニューに表示される名前
    },

    ["policedp"] = {
        coords = vector4(428.23, -984.28, 29.76, 3.5),
        location = "policedp",
        label = "Police Department",
    },

    ["paleto"] = {
        coords = vector4(80.35, 6424.12, 31.67, 45.5),
        location = "paleto",
        label = "Paleto Bay",
    },

    ["motel"] = {
        coords = vector4(327.56, -205.08, 53.08, 163.5),
        location = "motel",
        label = "Motels",
    },
```

もっとスポーンポイントを追加したいなら、設定ファイルに新しいレコードを追加すればOK：

```
["new_spawn_name"] = { -- ユニークな名前が必要
    coords = vector4(1.1, -1.1, 1.1, 180.0), -- プレイヤーがスポーンする座標
    location = "new_spawn_name", -- ユニークな名前が必要
    label = "New spawn name", -- 選択メニューに表示されるラベル
},
```

:::info 座標の取得について
現在の座標を取得するには適切なリソースが必要だよ。ネット上には色々あるから、自分に合ったものを探してみてね。:)
:::

最終的にはこんな感じになるよ：

```
    QB.Spawns = {
    
        ["legion"] = { -- テーブルのインデックス
            coords = vector4(195.17, -933.77, 29.7, 144.5), -- プレイヤーがスポーンする座標
            location = "legion", -- JavaScriptがどれを選んだか認識するための名前
            label = "Legion Square", -- メニューに表示される名前
        },
    
        ["policedp"] = {
            coords = vector4(428.23, -984.28, 29.76, 3.5),
            location = "policedp",
            label = "Police Department",
        },
    
        ["paleto"] = {
            coords = vector4(80.35, 6424.12, 31.67, 45.5),
            location = "paleto",
            label = "Paleto Bay",
        },
    
        ["motel"] = {
            coords = vector4(327.56, -205.08, 53.08, 163.5),
            location = "motel",
            label = "Motels",
        },
        
        ["new_spawn_name"] = { -- ユニークな名前が必要
        coords = vector4(1.1, -1.1, 1.1, 180.0), -- プレイヤーがスポーンする座標
        location = "new_spawn_name", -- ユニークな名前が必要
        label = "New spawn name", -- 選択メニューに表示されるラベル
         },
    }
```




## まとめ

この方法で既存のスポーンポイントを変更したり、新しいスポーンポイントを追加できたはず！もしわからないことがあれば、いつでもサポートチームに連絡してね。毎日対応してるから安心して！🙂

<InlineVoucher />