---
id: source-gsltoken
title: ゲームサーバーログイントークンの使い方
description: "GSLトークンがSteamゲームサーバーをどう守るか、アカウントに紐づくBANで安全かつルール遵守のサーバー運営を実現 → 今すぐチェック"
sidebar_label: GSLトークン
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## ❓ GSLトークンって何？

Gameserver Login Tokens（GSLT）は、Steamがセキュリティ対策として導入した仕組みです。特定のSteamゲーム（主にSource系ゲーム）のゲームサーバーを運営するには、このトークンを発行する必要があります。

<InlineVoucher />

## ❓ GSLトークンの目的は？

過去にValveはゲームサーバーのホスティングに関するルールを変更しましたが、すべてのゲームサーバー運営者がそれに従っていたわけではありません。その結果、ゲームサーバーのIPアドレスがBANされる事態が起きました。

しかし、この方法は新しいIPアドレスに変えれば簡単に回避できてしまい、ゲームサーバープロバイダーにとっても大きな問題でした。なぜなら、IPアドレスをBANすると他のユーザーにも影響が及ぶことが多かったからです。

そこで、このシステムが導入され、IPではなくトークンをBANし、そのトークンに紐づくSteamアカウントをゲームサーバー運営からブロックする仕組みになりました。

## ➕ トークンの作成方法

ゲームサーバーログイントークンを作成するには、Steamのウェブサイトにログインしている必要があります。トークンはここで作成可能です：[Steam Game Server Account Management](https://steamcommunity.com/dev/managegameservers)

![](https://screensaver01.zap-hosting.com/index.php/s/an5ySHwzSZmEwep/preview)

アクセスすると、App IDとメモ（任意の名前）を入力するよう求められます。App IDはゲームによって異なります。以下に主要なApp IDをまとめました：

|              ゲーム名               | App ID |
| :------------------------------: | :----: |
| Counter-Strike: Global Offensive |  730   |
|      Counter-Strike: Source      |  240   |
|         Team Fortress 2          |  440   |
|            Garrys Mod            |  4000  |

GSLトークンはコントロールパネルの設定画面で指定できます。

![](https://screensaver01.zap-hosting.com/index.php/s/jqkbkXG2YQLatw2/preview)

この設定を行いサーバーを再起動すると、サーバーはパブリックサーバーリストに表示されるようになります。

## ⁉ よくある質問

**GSLトークンの前提条件は？**

SteamアカウントにコミュニティBANなどの制限がないことが必要です。また、有効な電話番号がSteamアカウントに登録されている必要があります。

**1つのGSLトークンを複数のサーバーで使えますか？**

ゲームサーバーごとに個別のトークンが必要です。

**GSLトークンがBANされる原因は？**

特にCS:GOのゲームサーバーでは、使用禁止のプラグインがあります。公式リストは公開されていませんが、プレイヤーのインベントリ（武器スキン）、ランクなどを変更するプラグインが含まれます。

**GSLトークンがBANされたらどうなる？**

トークンがBANされると、そのアカウントと紐づくすべてのトークンもBANされます。つまり、そのゲームサーバーはパブリックにアクセスできなくなり、今後そのアカウントでのゲームサーバー運営もできなくなります。ただし、Steamアカウント自体はゲームプレイに使い続けられ、これ以上のペナルティはありません。

<InlineVoucher />