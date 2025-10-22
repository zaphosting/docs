---
id: ets2-server-modding
title: "ETS2: ETS2サーバーへのMod/DLCのインストール方法"
description: "Euro Truck Simulator 2の体験をさらに充実させるために、ModやDLCを追加して没入感のあるプレイを楽しもう → 今すぐチェック"
sidebar_label: Mod/DLCのインストール
services:
  - gameserver-factorio-ets2
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Euro Truck Simulator 2はゲーム内にSteam WorkshopのネイティブModサポートが組み込まれており、購入したDLCと一緒に様々なModをゲームやゲームサーバーに追加できます。このガイドでは、クライアントにModをインストールし、その後ETS2サーバーに適用する手順を解説します。

<InlineVoucher />

## Mod & DLCの追加

まずは、使いたいModやDLCを見つけて選択しましょう。ゲーム内のメインメニューから**Modマネージャー**と**DLCブラウザ**のオプションでアクセスできます。

![](https://screensaver01.zap-hosting.com/index.php/s/osjX59MRjrPBfe6/preview)

### Mod

メインメニューの**Modマネージャー**からSteam Workshopを通じて簡単にModを探せます。

Modをインストールしたら、各Modの横にある矢印を使って**アクティブMod**リストに移動させるのを忘れずに。

![](https://screensaver01.zap-hosting.com/index.php/s/TG7XK6ZodWZM2pz/preview)

最後に変更を確定して、シングルプレイヤーモードでゲームを開始しましょう。

### DLC

購入済みのDLCはメインメニューの**DLCブラウザ**から確認できます。

ここで現在所有し、クライアントにインストールされているDLCを一覧でチェック可能です。

## サーバーパッケージのエクスポート

Modを有効化してゲーム内の準備ができたら、Modをサーバーパッケージとしてエクスポートする必要があります。これにはゲーム内のコンソールを開く必要がありますが、デフォルトでは無効になっています。

有効化するには、以下のディレクトリにある`config.cfg`ファイルを開きます：
```
C:/Users/[your_user]/Documents/Euro Truck Simulator 2
```

このファイル内で`uset g_developer "0"`の行を`uset g_developer "1"`に変更して有効化します。同様に`uset g_console "0"`も`uset g_console "1"`に変更してください。

![](https://screensaver01.zap-hosting.com/index.php/s/Wz52e4o2KtTndZM/preview)
![](https://screensaver01.zap-hosting.com/index.php/s/raR8jxq7imKzjDD/preview)

ゲームを再起動すると、キーボードレイアウトに応じて以下のいずれかのキーでコンソールを開けるようになります：
```
` OR ~ OR \
```

準備ができたら、コンソールで以下のコマンドを入力してサーバーパッケージをエクスポートします：
```
export_server_packages
```

![](https://screensaver01.zap-hosting.com/index.php/s/zbzbdKfyr5xyNrK/preview)

`Documents/Euro Truck Simulator 2`フォルダに`server_packages.dat`と`server_packages.sii`の2つのファイルがエクスポートされます。これらはDLCやModの情報を含み、次のステップで使用します。

## サーバーパッケージのアップロード

Mod用のサーバーパッケージをエクスポートしたら、FTPを使ってETS2サーバーにアップロードします。接続方法は[FTPアクセス](gameserver-ftpaccess.md)ガイドを参考にしてください。

準備ができたら、メインのルートフォルダ**Euro Truck Simulator 2**に移動し、サーバーパッケージの2ファイルをアップロードします。既にファイルがある場合は上書きしてください。

![](https://screensaver01.zap-hosting.com/index.php/s/9xaDPw7sptsN3FH/preview)

:::tip
Modを使う場合、クライアントとサーバー間でModの同期が必須です。サーバーにあるModをクライアントが持っていない場合は、足りないModのダウンロードを促されます。
:::

最後にサーバーを再起動すれば、Modが自動的に有効化・インストールされます。これでETS2サーバーへのModインストールは完了です。

<InlineVoucher />