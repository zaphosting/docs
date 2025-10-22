---
id: redm-gamebuild
title: "RedM: DLCコンテンツを有効化する"
description: "RedMサーバーで特定のDLCバージョンを強制して最新のマップや車両、コンテンツを楽しむ方法 → 今すぐチェック"
sidebar_label: DLCゲームビルドを有効化
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

ゲームビルドの強制設定を使うと、特定のDLCバージョンをサーバーに適用でき、最新のマップや衣装、車両などをプレイ可能にします！

<InlineVoucher />

## 利用可能なゲームビルド

こちらは利用可能なDLCとそのビルドIDの一覧です：

| ビルドID |                          ビルド名                          |
| :------: | :--------------------------------------------------------: |
|   1311   | 2020年中期アップデート、Red Dead Onlineライセンスとは非互換。 |
|   1355   | 2020年12月アップデート、RDOなど新しいゲームエディションに対応。 |
|   1436   | 2021年7月アップデート、Blood Money DLCの新コンテンツを含む。 |
|   1491   | 2022年9月アップデート、限定的なコンテンツ/変更。             |


## ビルドの有効化

Blood Moneyなどの追加DLCコンテンツを使うには、サーバーの設定ファイルで指定する必要があります。DLCビルドを設定するには、まずtxAdminのインターフェースを開き、CFGエディターにアクセスしてください。あとは、表にあるビルドのいずれかを `sv_enforceGameBuld` コマンドで指定するだけです。

![img](https://screensaver01.zap-hosting.com/index.php/s/YoRFMoHxdSNydoD/preview)


## まとめ

ビルドを選択したら、RedMゲームサーバーを再起動してください。指定したDLCビルドでサーバーが起動します。これでRedMゲームサーバーのゲームビルド設定は完了です。質問やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にご連絡くださいね！🙂

<InlineVoucher />