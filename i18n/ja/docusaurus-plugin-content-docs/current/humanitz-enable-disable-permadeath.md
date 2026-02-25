---
id: humanitz-enable-disable-permadeath
title: "HumanitZ: パーマデスの有効化/無効化"
description: "HumanitZサーバーでパーマデスを有効化または無効化する方法 → 今すぐチェック"
sidebar_label: "パーマデスの有効化/無効化"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## はじめに

パーマデスはHumanitZのサバイバルプレイの難易度と緊張感を大幅にアップさせます。有効にすると、プレイヤーは死亡時にキャラクターを永久に失い、新しいキャラクターを作成しなければなりません。この設定はハードコアや高リスクのサバイバルサーバーでよく使われています。

<InlineVoucher />

## 設定方法

パーマデスは`GameServerSettings.ini`ファイルで管理されています。このファイルはサーバーの管理パネルの**Configs**からアクセス可能です。設定ファイル内で以下のパラメーターを探してください：

```
;When set to true the player that died will lose their character and have to create a new one
PermaDeath=false
```

- `PermaDeath=true` – パーマデスを有効化。プレイヤーは死亡時にキャラクターを永久に失います。  
- `PermaDeath=false` – パーマデスを無効化。プレイヤーは既存のキャラクターでリスポーン可能です。

パーマデスを有効にしたい場合は、値を以下のように変更してください：

```
PermaDeath=true
```

ファイルを編集したら、変更を保存してサーバーを再起動すると設定が反映されます。

## まとめ

おめでとうございます！`GameServerSettings.ini`の`PermaDeath`値を変更することで、HumanitZサーバーのパーマデスを無事に有効化または無効化できました。ご不明点やサポートが必要な場合は、いつでもお気軽にサポートチームまでお問い合わせくださいね！🙂

<InlineVoucher />