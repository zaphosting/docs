---
id: fivem-installeup
title: "FiveM: EUP（Emergency Uniform Pack）をインストールする方法"
description: "Element Clubサブスクリプション必須で、フリーモードキャラ用のEmergency Uniform Packを設定する方法をチェック → 今すぐ詳しく見る"
sidebar_label: EUPのインストール
services:
  - gameserver-fivem
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';



## はじめに

**EUP**（Emergency Uniform Pack）は、フリーモードキャラクターに緊急サービスの制服を着せられるパックです。ここでは、具体的にどうやってインストールするかを詳しく解説します。

:::warning Element Clubサブスクリプション必須
EUPをインストール・使用するには、Element Clubのサブスクリプションが必要です。自分のサブスクリプションは[Cfx.reポータル](https://portal.cfx.re/subscriptions/element-club)でゲットしよう！
:::

<InlineVoucher />



## 準備

**EUP**のインストールを始める前に、いくつか準備が必要です。まずは[EUP](https://forum.cfx.re/t/emergency-uniform-pack-client-server-sided-easy-install-update-5-0-announcement/97599)と[NativeUI](https://github.com/FrazzIe/NativeUILua/archive/master.zip)を自分のPCにダウンロードして解凍しましょう。ダウンロード後、以下のZIPファイルが手元にあるはずです：

- `eup-ui.7z`
- `eup-stream.7z` 
- `NativeUI-master.zip`

これらのファイルをPC上で解凍してください。解凍後は、`__resource.lua`または`fxmanifest.lua`とスクリプトファイルやフォルダが含まれているはずです。

**eup-ui**
![](https://screensaver01.zap-hosting.com/index.php/s/PjXPtC49ZAkiD87/preview)

**eup-stream**
![](https://screensaver01.zap-hosting.com/index.php/s/y4HNTngCjkg8n44/preview)

**NativeUI**
![](https://screensaver01.zap-hosting.com/index.php/s/EwdgkfA5qjWNAYj/preview)

:::info
NativeUIは「NativeUI-master」フォルダを開くと正しいスクリプトが見つかります。もし見つからなければ、同名のサブフォルダに入っていることが多いです。
:::

## インストール
準備ができたら、いよいよインストール開始です。サーバーに[FTP](gameserver-ftpaccess.md)で接続し、ファイルをアップロードしましょう。ファイルやフォルダは`resources`ディレクトリにアップロードしてください。ディレクトリ構造は以下のようになっています：

```
/gxxxxxx/fivem/YourFramework/resources/
```

![](https://screensaver01.zap-hosting.com/index.php/s/qFtS6sJHy67Y773/preview)



## 設定

アップロードしたリソースをサーバーで読み込むために、サーバーの設定ファイルに指定する必要があります。txAdminのインターフェースにログインし、CFGエディターに進んでください。

![img](https://screensaver01.zap-hosting.com/index.php/s/xQgkC5npHji4ArM/download)



## まとめ

これでFiveMサーバーにEUPのインストールが完了しました。もし質問やサポートが必要な場合は、いつでもお気軽にサポートチームにお問い合わせくださいね！🙂


<InlineVoucher />