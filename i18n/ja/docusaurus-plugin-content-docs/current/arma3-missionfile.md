---
id: arma3-missionfile
title: "Arma 3: 自分のミッションファイルをアップロードしよう"
description: "Arma 3サーバーにカスタムミッションファイルをアップロードして、あなただけのゲーム体験を楽しもう → 今すぐ詳しくチェック"
sidebar_label: 自分のミッションファイルをアップロード
services:
  - gameserver-arma3
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## ミッションファイルのアップロード

自分のミッションファイルをアップロードするには、まずFTPでサーバーに接続する必要があります：[FTPアクセス方法](gameserver-ftpaccess.md)。
その後、ミッションファイルを**/gxxxxxx/arma3/**内の**mpmissions**フォルダにアップロードしてください。
この例では、ミッションファイル**King_of_the_hill.Altis**をサーバーにアップロードしています。

![](https://screensaver01.zap-hosting.com/index.php/s/jkfK9X48qj2e7Pn/preview)

<InlineVoucher />

## サーバーでミッションファイルを読み込む

サーバーからミッションファイルを読み込むには、Arma 3サーバーのインターフェースにアクセスし、左メニューの**Configs**タブをクリックします：

![](https://screensaver01.zap-hosting.com/index.php/s/PD98ATq8xHdjy8Q/preview)

そこで**server.cfg**ファイルを編集し、ミッションファイル名を画像のように入力してください：

![](https://screensaver01.zap-hosting.com/index.php/s/aG7QESxyTNpATsG/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/6TZ7mc578pcHpbF/preview)

編集が終わったら**保存**をクリックしてサーバーを起動すれば、新しいミッションファイルが読み込まれます。

<InlineVoucher />