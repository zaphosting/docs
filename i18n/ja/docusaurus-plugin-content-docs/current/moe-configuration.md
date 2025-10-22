---
id: moe-configuration
title: "Myth of Empires：サーバー設定"
description: "Myth of Empiresサーバーを最適なプレイ環境とコントロールのためにカスタマイズする方法をチェック → 今すぐ詳しく見る"
sidebar_label: サーバー設定
services:
  - gameserver-moe
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
Myth of Empiresには、サーバーを自分好みにカスタマイズできる幅広い設定オプションがあります。このガイドでは、現在利用可能な設定パラメーターのいくつかをピックアップし、それぞれを詳しく解説していきます。

<YouTube videoId="a-tZnWIpOSg" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/GozxMwycZ43y4sm/preview" title="Myth Of Empiresサーバーをたった1分でセットアップ！" description="実際に動いているのを見ると理解しやすい？そんなあなたにピッタリ！動画でわかりやすく解説。急いでいる時も、じっくり情報を吸収したい時もぜひチェックしてね！"/>

<InlineVoucher />

## 設定ファイルへのアクセス方法

まずは設定ファイルにアクセスして、パラメーターを編集する必要があります。設定ファイルの編集方法はいくつかあります。

:::tip
**Webインターフェース**での編集を強くおすすめします。MOEは設定項目や設定ファイルが多いため、直接ファイルを編集するよりもWebインターフェースからの編集のほうが圧倒的に早くセットアップできます。
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Webインターフェースから" default>

#### Webインターフェースから

一番使いやすい方法は、ゲームサーバーのWebインターフェースの**設定**セクションにアクセスし、該当する設定を探して編集することです。以下のように表示されます：

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)

多彩なセクションと設定が表示され、直接値を編集できます。

</TabItem>

<TabItem value="configs" label="WI設定ファイルから">

#### WI設定ファイルから

:::note
設定ファイルを編集する前にサーバーを停止してください。編集後にサーバーを再起動すると変更が元に戻ってしまいます。
:::

直接設定ファイルを編集したい場合は、ゲームサーバーのWebインターフェースの**Configs**セクションにアクセスしてください。編集したいファイルの青い「ファイル編集」ボタンを押すと、以下のようにテキストエディタが開きます：

![](https://screensaver01.zap-hosting.com/index.php/s/ke6TF9RooBGqawW/preview)

サイト上で直接編集可能です。

</TabItem>

<TabItem value="ftp" label="FTPから">

#### FTPから

:::note
設定ファイルを編集する前にサーバーを停止してください。編集後にサーバーを再起動すると変更が元に戻ってしまいます。
:::

最後の方法はFTP経由でのアクセスです。FTPの使い方がわからない場合は、[FTPアクセスガイド](gameserver-ftpaccess.md)をチェックしてください。ただし、この方法は時間がかかるため、ファイルの内容を直接編集したい場合は、やはりゲームサーバーのWebインターフェースの**設定**セクションを使うのがおすすめです。

</TabItem>
</Tabs>

## サーバー設定オプション

ここでは、変更したくなるであろう重要なサーバー設定オプションの一部をピックアップし、内部設定も含めて紹介します。

:::tip
ポート、IP、ディレクトリの設定はゲームサーバーが自動で設定するため、変更はおすすめしません。これらを変更するとサーバーが正常に動かなくなる可能性があります！
:::

| パラメーター名 | 例                                     | 説明                                                       |
| -------------- | --------------------------------------- | ----------------------------------------------------------- | 
| name           | ZAP-Hosting Docs Test                   | サーバー名                                                 |
| password       | iLoveZAP!2024                           | パスワードでサーバーをロック（プライベートサーバー）       |
| description    | This is a cool server!                  | サーバーの説明を追加                                       |
| gamemode       | PVE / PVP                               | サーバーのゲームモードを設定                               |
| mapname        | Central Island                          | サーバーのマップを設定                                     |
| difficulty     | 1                                       | ワールドの難易度を設定                                     |

変更を終えたら、必ずファイルを保存し、サーバーを再起動してください。次回起動時から、設定した内容が反映されます。

<InlineVoucher />