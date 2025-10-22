---
id: foundry-configuration
title: "Foundry: サーバー設定"
description: "Foundryサーバーの設定をカスタマイズして、最適なゲームプレイとサーバー管理を実現する方法をチェック → 今すぐ詳しく見る"
sidebar_label: サーバー設定
services:
  - gameserver-foundry
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Foundryサーバーは、多彩な設定パラメータを自由にカスタマイズできます。このガイドでは、現在利用可能なすべての設定パラメータを紹介し、それぞれの詳細をわかりやすく解説します。

<InlineVoucher />

## 設定ファイルへのアクセス方法

まずは設定ファイルにアクセスして、パラメータを編集できるようにしましょう。編集方法はいくつかあります。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Webインターフェースから" default>

#### Webインターフェースから

一番カンタンなのは、ゲームサーバーのWebインターフェースの**設定**セクションにアクセスして、該当の設定を探す方法です。以下のように操作します：

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)
</TabItem>

<TabItem value="configs" label="WI設定ファイルから">

#### WI設定ファイルから

:::note
設定ファイルを編集する前にサーバーを停止してください。編集後にサーバーを再起動すると、変更が元に戻ってしまいます。
:::

また、直接ファイルを編集したい場合は、ゲームサーバーのWebインターフェースの**Configs**セクションに行き、青い「ファイル編集」ボタンを押すと以下のようにテキストエディタが開きます：

![](https://screensaver01.zap-hosting.com/index.php/s/64bAt9qCqHAdWXH/preview)

サイト上で直接編集できるので便利です。

</TabItem>

<TabItem value="ftp" label="FTPから">

#### FTPから

:::note
設定ファイルを編集する前にサーバーを停止してください。編集後にサーバーを再起動すると、変更が元に戻ってしまいます。
:::

最後の方法はFTP経由でファイルにアクセスする方法です。FTPの使い方がわからない場合は、[FTPアクセスガイド](gameserver-ftpaccess.md)をチェックしてください。ただし、この方法は少し手間がかかるので、直接ファイルを編集したいならWebインターフェースの**Configs**セクションを使うのがおすすめです。

</TabItem>
</Tabs>

## サーバー設定オプション

以下の表は、Foundryサーバーで現在利用可能な重要なサーバー設定オプションをまとめたものです。

:::tip
ポート設定の変更はおすすめしません。これらはゲームサーバーによって自動設定されているため、変更するとサーバーが正常に動作しなくなる可能性があります！
:::

### 重要なサーバー設定

| パラメータ名          | 例                         | 説明                                                                                 |
| --------------------- | -------------------------- | ------------------------------------------------------------------------------------ | 
| server_world_name     | ZAPDocsTest                | ワールド名を設定。セーブファイルが保存されるフォルダ名にもなります                 |
| server_name           | ZAP-Hosting Docs Test      | サーバーリストに表示されるサーバー名                                               |
| server_password       | iLoveZAP!2024              | サーバーに参加するためのパスワードを設定                                           |
| server_is_public      | true/false                 | サーバーブラウザにサーバーを表示するかどうかを切り替え                             |
| server_port           | 3724 (デフォルト)          | ゲームで使用するネットワークポートを設定                                           |
| server_query_port     | 27015 (デフォルト)         | サーバーリストに情報を返すためのクエリポートを設定                                 |
| server_max_players    | 32                         | 同時に接続可能な最大プレイヤー数を設定                                             |

### ゲームプレイ設定

| パラメータ名            | 例           | 説明                                                                                 |
| ----------------------- | ------------ | ------------------------------------------------------------------------------------ | 
| pause_server_when_empty | true/false   | プレイヤーがいない時にサーバーを停止するかどうかを切り替え                         |
| map_seed                | 42938743982  | ワールド生成に使うカスタムシードを設定                                             |
| autosave_interval       | 300          | サーバーが自動セーブを行う間隔（秒単位）を設定                                     |

変更を終えたら、必ずファイルを保存してサーバーを再起動してください。次回起動時から、設定した内容が反映されます。

<InlineVoucher />