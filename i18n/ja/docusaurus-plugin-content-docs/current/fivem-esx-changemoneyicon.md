---
id: fivem-esx-changemoneyicon
title: "FiveM: お金アイコンの変更"
description: "サーバーのマネーアイコンをカスタマイズして、ゲーム内体験をパーソナライズしよう → 今すぐ詳しくチェック"
sidebar_label: お金アイコンの変更
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::warning Archived Guide
このドキュメントはアーカイブされています。内容が古くなったり、正確でなくなった場合にアーカイブされます。アーカイブ理由は以下の通りです：

**理由**: 実装方法が古いESXバージョン向けのため。現在のESXバージョンでは構造が変わっており、この方法は使えません。 
::::



<InlineVoucher />

## FTPで接続する

まずは[FTPアクセス設定](gameserver-ftpaccess.md)を行いましょう。


設定が完了したら、接続してサーバーフォルダを開きます。

![](https://screensaver01.zap-hosting.com/index.php/s/pxEfN8qRjRJGWzN/preview)


ここでは`server-data`フォルダ内の`server.cfg`ファイルを開きます。

## 設定を編集する

`start essentialmode`の行の上に以下を追加します：

```Lua
set es_moneyIcon "$"
```

ここで「$」を好きなアイコンに置き換えられます。

![](https://screensaver01.zap-hosting.com/index.php/s/gYapTyixG98AQo5/preview)


ファイルを保存してサーバーを再起動すると、ゲーム内のお金アイコンが変更されます。

<InlineVoucher />