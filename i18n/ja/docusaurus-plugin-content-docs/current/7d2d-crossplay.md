---
id: 7d2d-crossplay
title: "7 Days to Die：コンソールとPCプレイヤーのクロスプレイを有効化する方法"
description: "7 Days to DieのゲームサーバーをPCとコンソール間のクロスプレイに対応させる設定方法を解説 → 今すぐチェック"
sidebar_label: クロスプレイを有効化
services:
  - gameserver-7d2d
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

最新バージョンの**7 Days to Die**では、クロスプレイ機能により**PCと対応コンソールプラットフォーム**のプレイヤーが同じゲームサーバーに参加可能になりました。これにより、使っているプラットフォームに関係なくコミュニティ全体で一緒に遊べます。

クロスプレイを実現するには、ゲームサーバー側で特定の設定を行う必要があります。これらの設定は、コンソールからの接続に対応し、Epic Online Servicesを通じて正しく登録されるために必須です。

<InlineVoucher />



## 設定方法

クロスプレイの設定は`serverconfig-zap.xml`ファイル内にあります。このファイルを編集するには、まず**ゲームサーバーの管理画面**を開き、**Configs**メニューに進みます。そこで`serverconfig-zap.xml`を見つけて開いてください。

ファイル内で以下の設定値が正しく指定されているか確認しましょう：

```
<property name="ServerMaxPlayerCount" value="8"/> 
<property name="ServerAllowCrossplay" value="true"/> 
<property name="EACEnabled" value="true"/> 
<property name="IgnoreEOSSanctions" value="false"/> 
```

これらのパラメータはクロスプレイ対応に必須です。`ServerMaxPlayerCount`は**最大8人**までに設定してください。コンソールのクロスプレイは現在8人までの参加者に対応しています。`ServerAllowCrossplay`はコンソールプレイヤーの参加を許可するために必ず有効にしてください。

さらに、`EACEnabled`は必ず有効のままにしてください。クロスプレイは**Epic Online ServicesとEasy Anti-Cheat**を使った認証とマッチメイキングに依存しています。`IgnoreEOSSanctions`は`false`に設定し、EOSの制限がクロスプラットフォームセッションで正しく適用されるようにします。

設定を変更したらファイルを保存し、**ゲームサーバーを再起動**して新しい設定を反映させましょう。



## 注意点

クロスプレイ対応には、すべてのプレイヤーが対応バージョンのゲームを使用している必要があります。非対応のMODや大幅にカスタマイズされた設定を使っているサーバーでは、コンソールプレイヤーが接続できない場合があります。コンソールプレイヤーがサーバーを見つけられない、参加できない場合は、クロスプレイ設定が正しいか、サーバーが最新の対応バージョンで動作しているかを確認してください。



## まとめ

おめでとうございます！これで**7 Days to Dieのゲームサーバーでクロスプレイが有効化**され、PCとコンソールのプレイヤーが同じワールドで遊べるようになりました。正しいサーバー設定があれば、異なるプラットフォーム間でもコミュニティが一緒に楽しめます。

もし質問やサポートが必要な場合は、いつでもお気軽に当社のサポートチームにお問い合わせください。毎日対応していますよ！🙂

<InlineVoucher />