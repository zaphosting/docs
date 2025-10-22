---
id: assettocorsa-mods
title: "Assetto Corsa：サーバーにMODをインストールする方法"
description: "Assetto Corsaのゲームサーバーを最適なプレイ体験のためにセットアップ＆カスタマイズする方法をチェック → 今すぐ詳しく見る"
sidebar_label: MODのインストール
services:
  - gameserver-assettocorsa
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## FTPに接続する

サーバーを設定する前に、[FTPアクセス](gameserver-ftpaccess.md)を設定する必要があります：

![](https://screensaver01.zap-hosting.com/index.php/s/gcojCfR2L8Mt5gg/preview)

設定が完了したら、接続してサーバーフォルダを開きましょう：

![](https://screensaver01.zap-hosting.com/index.php/s/eSDXfR8HS6eDC6g/preview)


## 準備

まずはAssetto Corsaのフォルダを開きます。Steamを開いてゲームリストの「Assetto Corsa」を右クリックして開きます。

次に「ローカルファイル」を開き、ローカルのゲームファイルを開きます：

![](https://screensaver01.zap-hosting.com/index.php/s/A8PqgJEGHnc72Xe/preview)

次に「server」フォルダを開きます。そこに「acServerManager」ファイルがあるので開きましょう。



## 車両の設定

次に「Cars / Entry List」タブに切り替えます。ここで新しい車両を追加できます：


車両を有効にするには、左側のチェックマークをオンにします。

![](https://screensaver01.zap-hosting.com/index.php/s/3M7QKxcEEBEEKfw/preview)

中央にはグリッドに配置できる車両が表示されます。ここでグリッドに入れたい車両の色を選べます：

![](https://screensaver01.zap-hosting.com/index.php/s/7WbYdxJk8TJEDc3/preview)

:::info
複数の車両を選択したい場合は、複数のチェックを入れて中央に異なる車両を追加できます。

すべての車両スロットが埋まっていて、利用可能なスロット数を超えないように注意してください。

![](https://screensaver01.zap-hosting.com/index.php/s/ogiaNKsGJZjWK2p/preview)
:::


## 設定ファイルのアップロード

「Save」ボタンで設定を保存し、「Export」ボタンでエクスポートします：

![](https://screensaver01.zap-hosting.com/index.php/s/DcJLfNGYtpmRjSz/preview)

ここで設定データを保存する空のフォルダを選択します。

AC Server Managerは閉じて、エクスポートした設定ファイルのフォルダを開きます。

![](https://screensaver01.zap-hosting.com/index.php/s/cRYG4yspGbzpnHH/preview)

これらの設定ファイルをドラッグ＆ドロップでゲームサーバーの「cfg」フォルダにコピーします。

![](https://screensaver01.zap-hosting.com/index.php/s/56pgFoDj9KQyBX2/preview)



## サーバーコンテンツのアップロード

次にサーバー用のコンテンツを生成します。これでCar＆MapのMODがサーバーに読み込まれます。まずは下の「Update Server Content」をクリック：

![](https://screensaver01.zap-hosting.com/index.php/s/dRg5xoxcrNcCK9r/preview)

この処理には数分かかることがあります。すべてのマップ＆車両がサーバーファイルに変換されます。

:::info
処理完了後に「Could not update」というメッセージが出ることがありますが、問題ありません。
:::

次にAcServerManagerがある「Server」フォルダを開きます。そこに「Content」フォルダがあるので、これをドラッグ＆ドロップでAssetto Corsaのゲームサーバーにアップロードし、古い「Content」フォルダを上書きします：

![](https://screensaver01.zap-hosting.com/index.php/s/dfDYjZjADkpfdDc/preview)

コンテンツのアップロードが完了したら、サーバーを再起動すると車両MODがインストールされて有効になります。

<InlineVoucher />