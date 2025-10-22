---
id: fivem-notlisted
title: "FiveM: サーバーがサーバーリストに表示されない"
description: "サーバーリストに表示されない問題のトラブルシューティング方法を紹介。サーバーを正しくリストに表示させるためのポイント → 今すぐチェック"
sidebar_label: サーバーがサーバーリストにない
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

サーバーがサーバーリストに表示されない場合、いくつかの原因が考えられます。このガイドで問題が解決しない場合は、ぜひ[サポート](https://zap-hosting.com/en/customer/support/)までご連絡ください。

<InlineVoucher />

## 設定ミス

多くの場合、単純な設定ミスが原因です。まずはサーバーがリスト表示を無効にしていないか確認しましょう。`sv_master1`の行をチェックします：

![](https://screensaver01.zap-hosting.com/index.php/s/KBH8deTbXxfrWtB/preview)

:::info
この行は**必ず**「#」でコメントアウトされている必要があります。もしコメントアウトされていなければ、サーバーはリストに表示されません。
:::

また、サーバー名（`sv_hostname`）も確認しましょう：

![](https://screensaver01.zap-hosting.com/index.php/s/9KyEj4tNQWRYxdB/preview)

この例では行末の引用符が抜けています。サーバー名によってはフォーマットの問題が起きることもあるので、例えば [DE] や ä、ü、ö のような特殊文字は削除することをおすすめします。

## 問題のあるリソース

リソースが原因でサーバーがリストに表示されないこともあります。この場合は、最後にインストールしたリソースを削除し、サーバーを約1時間オンラインにして様子を見てください。多くの場合、再び表示されるはずです。

## 再インストール

上記の方法で解決しない場合は、サーバーの再インストールをおすすめします。これによりサーバーファイルがすべてデフォルトにリセットされます。

:::info
再インストール前に必ずバックアップを取ってください。バックアップがないとサーバー内のデータは失われます。
:::

<InlineVoucher />