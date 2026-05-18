---
id: humanitz-airdrop-management
title: "HumanitZ: エアドロップ管理"
description: "HumanitZサーバーでエアドロップを有効化・無効化・設定する方法 → 今すぐチェック"
sidebar_label: "エアドロップ管理"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## はじめに

HumanitZのエアドロップは貴重な戦利品を提供し、プレイヤーの動きや戦闘エリア、サーバー全体のダイナミクスに大きな影響を与えます。サーバーのプレイスタイルに合わせて、アクションを増やしたいなら頻繁な補給物資の投下を、有料資源を減らしてよりサバイバル感を出したいなら完全に無効化することもできます。

<InlineVoucher />

## 設定方法

エアドロップの設定は `GameServerSettings.ini` ファイルで管理します。このファイルはサーバーの管理パネルの **Configs** セクションからアクセス可能です。設定ファイル内で以下のパラメータを探してください：

```
; エアドロップを有効にするかどうかの設定
AirDrop=true
; エアドロップの間隔（ゲーム内日数）
AirDropInterval=1
```

設定の意味は以下の通りです：

- `AirDrop=true` – エアドロップを有効化  
- `AirDrop=false` – エアドロップを完全に無効化  
- `AirDropInterval` – エアドロップが発生するまでのゲーム内日数  

例えば、3ゲーム日ごとにエアドロップを発生させたい場合は：

```
AirDrop=true
AirDropInterval=3
```

エアドロップを完全に無効化したい場合は：

```
AirDrop=false
```

ファイルを編集したら、変更を保存してサーバーを再起動してください。新しい設定が反映されます。

## まとめ

おめでとうございます！`GameServerSettings.ini` の `AirDrop` と `AirDropInterval` の値を変更することで、HumanitZサーバーのエアドロップ挙動をカスタマイズできました。もし質問やサポートが必要な場合は、いつでもお気軽にサポートチームにお問い合わせくださいね！毎日対応していますよ 🙂 

<InlineVoucher />