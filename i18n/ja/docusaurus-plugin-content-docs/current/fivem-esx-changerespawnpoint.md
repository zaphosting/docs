---
id: fivem-esx-changerespawnpoint
title: "FiveM: リスポーンポイントの設定"
description: "ESXで救急車のリスポーンポイントを更新して、ゲームプレイをカスタマイズしサーバー管理を改善する方法をチェック → 今すぐ詳しく見る"
sidebar_label: リスポーンポイントの変更
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



:::warning アーカイブ済みガイド
このドキュメントはアーカイブされています。ドキュメントは、もはや関連性がない、誤っている、または最新でない場合にアーカイブされます。以下の理由でアーカイブされました：

**理由**: 実装方法が古いESXバージョン向けのものです。現在のESXバージョンでは構造が変わっているため、この方法は使えません。 
::::



:::info
ESXがインストールされている必要があります
:::

<InlineVoucher />

📔 準備

座標を取得するには、以下のようなCoordsスクリプトが必要です：
[CoordsScript](https://github.com/qalle-fivem/qalle_coords)
インストール方法はこちら：[リソースのインストール](fivem-installresources.md)
このスクリプトをインストールしたら、ゲーム内で */coords* を押します。
これで座標が表示されます。

📑 設定の編集

座標がわかったら、Configタブに移動します。

ここで **CTRL + F** を押して **ambulance** を検索します。
該当ファイルを開きます。
スクロールして **Config_RespawnPoint** を見つけます。

![](https://screensaver01.zap-hosting.com/index.php/s/6FYfkgfPfEWK6sj/preview)

ここで座標を編集して置き換えます。
編集後は保存をクリックするだけです。

![](https://screensaver01.zap-hosting.com/index.php/s/ZEcfQt69SX5if3Q/preview)

:::info
サーバーを再起動すると変更が反映されます。
:::

<InlineVoucher />