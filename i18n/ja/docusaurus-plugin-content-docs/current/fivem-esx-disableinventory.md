---
id: fivem-esx-disableinventory
title: "FiveM: インベントリを無効化する (F2)"
description: "ESXのデフォルトインベントリを無効化してサーバー体験をカスタマイズする方法 → 今すぐチェック"
sidebar_label: インベントリを無効化する (F2)
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



:::warning アーカイブ済みガイド
このドキュメントはアーカイブされています。内容が古くなった、誤っている、または最新でない場合にアーカイブされます。以下の理由でアーカイブされました：

**理由**: 実装方法が古いESXバージョン向けのものです。現在のESXバージョンでは構造が変わっているため、この方法は使えません。 
::::

<InlineVoucher />

## FTPに接続する

インベントリを無効化する前に、[FTPアクセスの設定](gameserver-ftpaccess.md)を済ませておきましょう。

設定が完了したら、接続してサーバーフォルダを開きます：

![](https://screensaver01.zap-hosting.com/index.php/s/GWPAB639GoYcybT/preview)


## 変更を加える

次に、`server-data/resources/[esx]` フォルダを開くと、`es_extended` フォルダがあります：

![](https://screensaver01.zap-hosting.com/index.php/s/6HLxaYmZgsQ5Qc5/preview)

この中の `config.lua` ファイルを開きます。

テキストエディタで開いたら、以下のコードを探します：

```Lua
Config.EnableDefaultInventory   = true -- Display the default Inventory ( F2 )
```

これを次のように書き換えます：

```Lua
Config.EnableDefaultInventory   = false
```


ファイルを保存してサーバーを再起動すれば、サーバーに入った後にインベントリが開けなくなります。

<InlineVoucher />