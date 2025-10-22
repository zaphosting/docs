---
id: arma3-gamemode
title: "Arma 3: ゲームモードの変更"
description: "Arma 3サーバーでゲームモードを設定・読み込みして、カスタマイズされたプレイ体験を楽しもう → 今すぐチェック"
sidebar_label: ゲームモードの変更
services:
  - gameserver-arma3
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## ゲームモードの設定

Arma 3サーバーのゲームモードを変更するには、対応するミッションファイルをサーバーにアップロードする必要があります。

現在、以下のミッションファイルはアップロード不要でご利用いただけます：

- Arma 3 Wasteland

これらはすでに**mpmissions**ディレクトリにあります。

<InlineVoucher />

## ミッションファイルのアップロード

ミッションファイルをアップロードするには、まずFTPでサーバーに接続してください：[FTPアクセス方法](gameserver-ftpaccess.md)。
その後、対応するミッションファイルを**/gxxxxxx/arma3/**内の**mpmissions**ディレクトリにアップロードします。
この例では、ゲームモード**King of the Hill**をサーバーにアップロードしています。

![](https://screensaver01.zap-hosting.com/index.php/s/rDS7DsEfQskZ9Y3/preview)


## サーバーでのミッションファイルの読み込み

サーバーでミッションファイルを読み込むには、Arma 3サーバーのインターフェースにアクセスし、左メニューの**Configs**タブをクリックします：

![](https://screensaver01.zap-hosting.com/index.php/s/dxDWHiFJy5e4qYq/preview)

そこで**server.cfg**ファイルを編集し、ミッションファイル名を画像のように入力します：

![](https://screensaver01.zap-hosting.com/index.php/s/7JQED8wC9WGBdYB/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/7jtRK3YRD7wWiij/preview)

編集後、**保存**をクリックしてサーバーを起動すれば、新しいミッションファイルが読み込まれます。

<InlineVoucher />