---
id: humanitz-enable-disable-voice-chat
title: "HumanitZ：ボイスチャットの有効化・無効化"
description: "HumanitZサーバーでボイスチャットを有効化・無効化する方法 → 今すぐチェック"
sidebar_label: "ボイスチャットの有効化/無効化"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## はじめに

ボイスコミュニケーションはHumanitZサーバーの雰囲気を大きく変えます。ボイスチャットを有効にすると、プレイヤー同士が近接して直接会話でき、没入感や協力プレイがアップします。一方で無効にすると、外部のコミュニケーションツールを使ったり、より静かで孤立したサバイバル体験を楽しめます。

HumanitZでは、ボイスチャットの設定はサーバーの設定ファイル内で直接行います。

<InlineVoucher />



## 設定方法

ボイスチャットの設定は `GameServerSettings.ini` ファイルで管理されています。このファイルはサーバーの管理パネルの **Configs** からアクセス可能です。設定ファイル内で以下のパラメータを探してください：

```
;When set to 1 or true voice chat will be enabled, set 0 or false to disable
Voip=true
```

設定の意味は以下の通りです：

- `Voip=true` または `Voip=1` – ボイスチャットを有効化  
- `Voip=false` または `Voip=0` – ボイスチャットを無効化  

ボイスチャットの設定を変更したい場合は、この値を希望に合わせて書き換えてください。編集後はファイルを保存し、サーバーを再起動すると設定が反映されます。



## まとめ

おめでとうございます！`GameServerSettings.ini` の `Voip` の値を変更することで、HumanitZサーバーのボイスチャットを無事に有効化・無効化できました。もし質問やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にお問い合わせくださいね！🙂

<InlineVoucher />