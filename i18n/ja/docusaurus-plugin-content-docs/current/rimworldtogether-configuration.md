---
id: rimworldtogether-configuration
title: "RimWorld Together：サーバー設定"
description: "RimWorld Togetherのサーバー設定をチェックして、ゲームプレイをカスタマイズし、アクセス管理でマルチプレイ体験を自分好みに → 今すぐ詳しく見る"
sidebar_label: サーバー設定
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

RimWorld Togetherのゲームサーバーは、多彩な設定パラメータを自由にカスタマイズできます。このガイドでは、現在利用可能な設定パラメータをすべて紹介し、それぞれの詳細をわかりやすく解説します。

<InlineVoucher />

## 設定ファイルへのアクセス方法

まずは設定ファイルにアクセスして、パラメータを編集できるようにしましょう。現状、これらのファイルを編集する唯一の方法はFTP経由でサーバーにアクセスすることです。FTPの使い方に慣れていない場合は、[FTPアクセスガイド](gameserver-ftpaccess.md)をチェックすることをおすすめします。

:::note
設定ファイルを編集する前に必ずゲームサーバーを停止してください。サーバーを再起動すると編集内容が元に戻ってしまいます。
:::

FTPクライアントの準備ができたら、以下のディレクトリに移動してください：
```
../rimworld-together/Core
```

このフォルダには、RimWorld Togetherのゲームサーバー用の多種多様な `.json` 設定ファイルが入っています。

![](https://screensaver01.zap-hosting.com/index.php/s/76g3TcY9TCLyFsH/preview)

## サーバー設定オプション

以下のセクションでは、RimWorld Togetherのゲームサーバーでよく使われる人気の設定オプションの調整方法を紹介します。各ファイルの詳細は、[公式RimWorld Togetherガイド](https://rimworldtogether.github.io/Guide/selfhosting/getting-started.html#core)の設定オプションの章もぜひ参考にしてください。

:::tip
**ServerConfig.json** ファイル内のポートやIP設定はゲームサーバー側で自動設定されているため、変更はおすすめしません。これらを変更するとゲームサーバーが正常に動作しなくなる可能性があります！
:::

#### サーバーホワイトリスト

サーバーホワイトリストの切り替えは簡単です。**Whitelist.json** 設定ファイルを開き、`UseWhitelist` パラメータを `true` に設定してください。

次に、`WhitelistedUsers` パラメータにゲーム内のユーザー名を追加します。リストにないユーザーは接続できなくなります。

#### ゲームプレイ設定

RimWorld Togetherのゲームサーバーでは、**DifficultyValues.json** ファイルを使って難易度関連のパラメータを幅広く調整できます。

また、セーブゲームの設定は **WorldConfig.json** ファイルで変更可能です。ただし、プレイがかなり進んでからの編集はゲーム体験を壊す恐れがあるので注意してください。

<InlineVoucher />