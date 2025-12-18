---
id: ats-server-modding
title: "ATS: ATSサーバーへのMod/DLCのインストール方法"
description: "クライアントとサーバー両方でのプレイをさらに楽しむために、American Truck SimulatorのModやDLCの導入方法をチェックしよう → 今すぐ詳しく見る"
sidebar_label: Mod/DLCのインストール
services:
  - gameserver-ats
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

American Truck SimulatorはSteam Workshopを通じたネイティブのMod対応があり、購入したゲームDLCと合わせて多彩なModをゲームやゲームサーバーに追加できます。このガイドでは、クライアントにModを導入し、その後ATSゲームサーバーに適用する手順を解説します。

<InlineVoucher />

## Mod & DLCの追加

まずは使いたいModやDLCを見つけて選択しましょう。ゲーム内のメインメニューから**Modマネージャー**と**DLCブラウザ**を使ってアクセスできます。

![](https://screensaver01.zap-hosting.com/index.php/s/osjX59MRjrPBfe6/preview)

### Mod

メインメニューの**Modマネージャー**からSteam Workshopを通じて簡単にModを探せます。

インストールしたModは、各Modの横にある矢印を使って**アクティブMod**リストに移動させるのを忘れずに。

![](https://screensaver01.zap-hosting.com/index.php/s/TG7XK6ZodWZM2pz/preview)

最後に変更を確定して、シングルプレイヤーモードでゲームを開始しましょう。

### DLC

購入済みのDLCはメインメニューの**DLCブラウザ**から確認できます。

ここで現在所有し、クライアントにインストールされているDLCを一覧でチェック可能です。

## サーバーパッケージのエクスポート

Modを有効化してゲーム内準備ができたら、Modをサーバーパッケージとしてエクスポートします。デフォルトではゲーム内コンソールは無効なので、まず有効化が必要です。

以下のディレクトリにある`config.cfg`ファイルを開きます：
```
C:/Users/[your_user]/Documents/American Truck Simulator
```

このファイル内で`uset g_developer "0"`を`uset g_developer "1"`に書き換え、同様に`uset g_console "0"`を`uset g_console "1"`に変更してコンソールを有効にします。

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

`Documents/American Truck Simulator`フォルダに`server_packages.dat`と`server_packages.sii`の2つのファイルがエクスポートされます。これらはDLCやModの情報を含み、次のステップで使用します。

## サーバーパッケージのアップロード

エクスポートしたサーバーパッケージをATSゲームサーバーにFTPでアップロードします。接続方法は[FTPアクセス](gameserver-ftpaccess.md)ガイドを参考にしてください。

準備ができたら、ゲームサーバーのルートの**American Truck Simulator**ディレクトリに移動し、2つのサーバーパッケージファイルをアップロードします。既に同名ファイルがある場合は上書きしてください。

![](https://screensaver01.zap-hosting.com/index.php/s/c5cYWL8eQKTzDg9/preview)

:::tip
Modを使う場合、クライアントとサーバー間でModの同期が必須です。サーバーに存在しないModで接続すると、足りないModのダウンロードを促されます。
:::

最後にサーバーを再起動すれば、Modが自動的に有効化・インストールされます。これでATSゲームサーバーへのMod導入は完了です。

<InlineVoucher />