---
id: fivem-mods-installreplace
title: "FiveM：サーバーに置き換え用カーモッドをインストールする方法"
description: "FiveMサーバーにモッドをセットアップ＆アップロードして、カスタムプレイ体験を楽しもう → 今すぐチェック"
sidebar_label: 置き換えカーモッドのインストール
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## FTPで接続しよう
まずはFTPでサーバーに接続しよう。詳しくは[FTPアクセスガイド](gameserver-ftpaccess.md)を参考にしてね。

## 準備

まずは「resources」フォルダ内にモッド用のフォルダを作成しよう。

:::info
フォルダ名は特別な記号を含まなければ自由に決めてOK。ここでは例として「assets」にしてるよ。
:::

次に、新しく作った「assets」フォルダ内に fxmanifest.lua ファイルを作成しよう。

以下の内容をこのファイルに書き込んでね：

```
fx_version 'cerulean'
games { 'gta5' }

```

書き終わったら fxmanifest.lua は保存して閉じてOK。もう使わないよ。

次に、assetsフォルダ内に「stream」フォルダを作成しよう。

![](https://screensaver01.zap-hosting.com/index.php/s/yZgpLTTPtpe2sXZ/preview)

## モッドをアップロードしよう

streamフォルダを開いて、ここにytdやyftファイルをドラッグ＆ドロップでアップロードしよう：

![](https://screensaver01.zap-hosting.com/index.php/s/mxNAFtBHaAjeQYj/preview)

モッドのアップロードが完了したら、FiveMサーバーの「server-data」フォルダ内にある server.cfg ファイルにリソースを登録しよう。

テキストエディタで開いて、「start」行の下に以下のように追記してね：

```
start assets
```

これで完了！サーバーを再起動すれば、カーモッドがサーバー上で使えるようになるよ！

<InlineVoucher />