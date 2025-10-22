---
id: assettocorsa-configure
title: "Assetto Corsa: サーバーの設定方法"
description: "カスタムマップや車両でAssetto Corsaのゲームサーバーを最適化する方法をチェック → 今すぐ詳しく見る"
sidebar_label: サーバー設定
services:
  - gameserver-assettocorsa
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## FTPに接続する

サーバーを設定する前に、[FTPアクセス](gameserver-ftpaccess.md)を設定しておく必要があります：

![](https://screensaver01.zap-hosting.com/index.php/s/GdzeM4wyAGtGk8e/preview)

設定が完了したら、接続してサーバーフォルダを開きましょう：

![](https://screensaver01.zap-hosting.com/index.php/s/dkSSLWF5QGGf4yR/preview)


## 準備

まずはAssetto Corsaのフォルダを開きます。Steamを開いてゲームリストの「Assetto Corsa」を右クリックしてください。

次に「ローカルファイル」を開き、ローカルのゲームファイルを表示します：

![](https://screensaver01.zap-hosting.com/index.php/s/XKBgdiNbZ5AXtia/preview)

その後、「server」フォルダを開き、「acServerManager」ファイルを起動します。

## マップの設定

「AC Server Manager」の画面が開きます。ここでサーバー設定を作成・管理できます。まずは新しい設定を作成しましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/Z37toTgBHDmf54n/preview)

サーバーの設定ができる画面に移ります。今回はトラックと車両だけ編集したいので、「Tracks」タブを開きます。

ここで好きなマップをクリックし、上部でトラック上の車の数を調整できます。

![](https://screensaver01.zap-hosting.com/index.php/s/Hr9AMt9SHyas4CN/preview)

:::info
サーバーのスロット数より多い車の数を設定しないように注意してください。多すぎるとサーバーが起動しません。
:::

## 車両の設定

次に「Cars / Entry List」タブに切り替えます。ここで新しい車両を追加できます：

車両を有効にするには、左側のチェックマークを入れてください。

![](https://screensaver01.zap-hosting.com/index.php/s/4w643p56GLXK9cP/preview)

中央にはグリッドに配置できる車両が表示されます。ここでグリッドに入れたい車の色を選べます：

![](https://screensaver01.zap-hosting.com/index.php/s/T5SfpsdAPxfMwnY/preview)

:::info
複数の車両を選択したい場合は、複数のチェックを入れて中央に追加してください。

全ての車両スロットが埋まっていて、サーバーのスロット数を超えないように設定しましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/FTeJX3BJipBRFQP/preview)
:::

## 設定ファイルのアップロード

設定が完了したら、「Save」ボタンで保存し、「Export」ボタンでエクスポートします：

![](https://screensaver01.zap-hosting.com/index.php/s/b7co7wfcegmwPYd/preview)

空いているフォルダを選択して設定データを保存しましょう。

これでAC Server Managerは閉じてOKです。エクスポートしたフォルダを開きます。

![](https://screensaver01.zap-hosting.com/index.php/s/4Nysjo24BAAGbqe/preview)

この設定ファイルをドラッグ＆ドロップでゲームサーバーの「cfg」フォルダにコピーします。

![](https://screensaver01.zap-hosting.com/index.php/s/YKHtnDMSqBgssDc/preview)

これで新しい設定でサーバーを起動できます。

<InlineVoucher />