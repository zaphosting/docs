---
id: enshrouded-configuration
title: "Enshrouded: Enshrouded サーバー設定"
description: "Enshroudedのゲームプレイとサーバー管理を最適化するためのサーバー設定カスタマイズ方法 → 今すぐチェック"
sidebar_label: サーバー設定
services:
  - gameserver-enshrouded
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Enshroudedのローンチ時には、いくつかの設定パラメータを自分好みにカスタマイズできます。このガイドでは、現在利用可能なすべての設定パラメータを紹介し、それぞれの詳細を解説していきます。

<YouTube videoId="wgvfvQdtwN4" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/tc7mcyZqk8Wyafa/preview" title="わずか60秒でEnshroudedサーバーをセットアップ！" description="実際に動いているところを見ると理解が深まる？そんなあなたにピッタリ！忙しい時でも、楽しく情報を吸収したい時でも、動画でわかりやすく解説しています！"/>

<InlineVoucher />

## 設定ファイルへのアクセス方法

まずは設定ファイルにアクセスして、パラメータを編集する必要があります。編集方法はいくつかあります。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Webインターフェースから" default>

#### Webインターフェースから

一番簡単な方法は、ゲームサーバーのWebインターフェースの**設定**セクションにアクセスし、該当の設定を探すことです。以下のように表示されます：

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)

</TabItem>

<TabItem value="configs" label="WI設定ファイルから">

#### WI設定ファイルから

:::note
設定ファイルを編集する前にサーバーを停止してください。編集後にサーバーを再起動すると、変更が元に戻ってしまいます。
:::

直接ファイルを編集したい場合は、ゲームサーバーのWebインターフェースの**Configs**セクションに行き、青い「ファイル編集」ボタンを押してください。以下のように表示されます：

![](https://screensaver01.zap-hosting.com/index.php/s/jPep5HzYtWnJTxT/preview)

これでサイト上で直接テキストエディタが開き、編集が可能です。

</TabItem>

<TabItem value="ftp" label="FTPから">


#### FTPから

:::note
設定ファイルを編集する前にサーバーを停止してください。編集後にサーバーを再起動すると、変更が元に戻ってしまいます。
:::

最後の方法はFTP経由でのアクセスです。FTPの使い方に慣れていない場合は、[FTPアクセス](gameserver-ftpaccess.md)のガイドを参考にしてください。ただし、この方法は時間がかかるため、ファイルの直接編集をしたい場合は、前述のゲームサーバーのWebインターフェースの**Configs**セクションを使うことをおすすめします。

</TabItem>
</Tabs>

## サーバー設定オプション

現在ゲームが提供しているサーバー設定オプションは以下の通りで、特にサーバー名やパスワード、内部設定などをカスタマイズできます。

:::tip
ポート、IP、ディレクトリ設定の変更は推奨しません。これらはゲームサーバーによって自動設定されているため、変更するとゲームサーバーが正常に動作しなくなる可能性があります！
:::

| パラメータ名       | 例                                     | 説明                                                         |
| ------------------ | ------------------------------------- | ------------------------------------------------------------ |
| name               | ZAP-Hosting Docs Test                  | サーバーの名前                                               |
| password           | iLoveZAP!2024                         | パスワードでサーバーをロック（プライベートサーバーに）       |
| saveDirectory      | ./savegame（デフォルト）               | セーブデータを保存するディレクトリを指定                     |
| logDirectory       | ./logs（デフォルト）                   | ログを保存するディレクトリを指定                             |
| ip                 | 123.123.123.123                       | サーバーが動作するパブリックIP                               |
| gamePort           | 15636（デフォルト）                   | サーバーが動作するパブリックポート                           |
| queryPort          | 15637（デフォルト）                   | サーバーにアクセス可能なパブリックポート                     |
| slotCount          | 4                                     | サーバーに参加可能な最大プレイヤー数（最大16）               |

変更を終えたら、必ずファイルを保存し、サーバーを再起動してください。次回サーバー起動時に、設定した内容が反映されます。

<InlineVoucher />