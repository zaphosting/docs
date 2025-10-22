---
id: fivem-gamebuild
title: "FiveM: DLCコンテンツを有効化する"
description: "FiveMサーバーで特定のDLCバージョンを強制して、最新のマップや車両、コンテンツを楽しむ方法 → 今すぐチェック"
sidebar_label: DLCゲームビルドを有効化
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

ゲームビルドの強制設定を使うと、サーバーに特定のDLCバージョンを適用でき、最新のマップや服装、車両などをプレイ可能に！ 

<InlineVoucher />

## 利用可能なゲームビルド

こちらは利用可能なDLCとそのビルドIDの一覧です：

| ビルドID |         ビルド名          |
| :------: | :-----------------------: |
|   2060   | Los Santos Summer Special |
|   2189   |        Cayo Perico        |
|   2372   |         Tuner DLC         |
|   2545   |       The Contract        |
|   2699   | The Criminal Enterprises  |
|   2802   |   Los Santos Drug Wars    |
|   2944   |  San Andreas Mercenaries  |
|   3095   |       The Chop Shop       |
|   3258   |  Bottom Dollar Bounties   |
|   3407   |    Agents of Sabotage     |
|   3570   |        Money Fronts       |



## ビルドの有効化

Cayo Perico、Tuner DLC、Los Santos Summer Specialなどの追加DLCコンテンツを使うには、サーバーの設定で指定する必要があります。DLCビルドを設定するには、txAdminのインターフェースを開き、FXServer設定に進んでください。

![](https://screensaver01.zap-hosting.com/index.php/s/HxmnfPEdcDJgZLX/preview)

あとは、**Additional Arguments** セクションに以下のsetコマンドを追加し、`BUILD_ID_CHOICE`を上記テーブルのIDに置き換えるだけ：

```
+set sv_enforceGameBuild BUILD_ID_CHOICE
```



## まとめ

ビルドを選択したら、FiveMサーバーを再起動してください。指定したDLCビルドでサーバーが起動します。これでFiveMゲームサーバーのゲームビルド設定は完了です。質問やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にお問い合わせくださいね！🙂

<InlineVoucher />