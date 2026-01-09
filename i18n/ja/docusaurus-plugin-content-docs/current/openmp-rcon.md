---
id: openmp-rcon
title: "Open.mp: RCONを使ったサーバー管理"
description: "RCONを使ってゲームサーバーをリモートで効率的に管理・操作する方法をチェック → 今すぐ詳しく見る"
sidebar_label: RCON
services:
  - gameserver-openmp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## RCONって何？

RCONはゲームサーバーなどのプログラムで使われるインターフェースで、リモートからのメンテナンスや管理ができる仕組みだよ。このインターフェースを使うと、すでに稼働中のサーバーにアクセスして操作できるんだ。専用のリモート管理プログラムで接続して、サーバーをコントロールできるってわけ。

<InlineVoucher />

## 設定ファイルへのアクセス方法

RCONを使うには、まずサーバーの設定ファイルにアクセスしてこの機能を有効化する必要があるよ。設定ファイルはサーバーのウェブインターフェースからか、直接FTPで編集できるよ。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="configs" label="ウェブインターフェースで設定ファイル編集">

#### ウェブインターフェースで設定ファイル編集

この方法が一番簡単なのでおすすめ！

:::note
設定ファイルを編集する前にサーバーは必ず停止してね。編集後にサーバーを再起動しないと変更が反映されないし、再起動しないと変更が元に戻っちゃうよ。
:::

ゲームサーバーのウェブインターフェースの**Configs**セクションに行って、青い「ファイル編集」ボタンを押そう。こんな感じ：

![](https://screensaver01.zap-hosting.com/index.php/s/izzL3f9FaGdc9ay/preview)

テキストエディタが開くので、`rcon`セクションを探してね。ここで`enable`パラメータを`true`に設定しよう。例：`"enable":true`。ブラウザの検索機能（CTRL+F）を使うと探しやすいよ。

同じセクションで、`password`パラメータを設定してRCONアクセス用のパスワードも決めておこう。これで不正アクセスを防げるから、パスワードは絶対に秘密にしてね。

![](https://screensaver01.zap-hosting.com/index.php/s/WPPbd6C7k6m5Ja7/preview)

</TabItem>

<TabItem value="ftp" label="FTPで編集">

#### FTPで編集

:::note
設定ファイルを編集する前にサーバーは必ず停止してね。編集後にサーバーを再起動しないと変更が反映されないし、再起動しないと変更が元に戻っちゃうよ。
:::

FTPで設定ファイルを編集する方法もあるよ。FTPの使い方がわからない場合は、[FTPアクセスガイド](gameserver-ftpaccess.md)をチェックしてみてね。ただし、この方法は少し手間がかかるから、ファイルの中身を直接編集したいならウェブインターフェースの**Configs**セクションを使うのが楽だよ。

FTPでサーバーに接続したら、以下のディレクトリに移動してね：
```
..g[zap_id]/gta-openmp/
```

ここにある`config.json`ファイルが設定ファイルだから開いて編集しよう。

ファイル内の`rcon`セクションを探して、`enable`を`true`に設定し、`password`パラメータでRCONアクセス用のパスワードも設定してね。

</TabItem>
</Tabs>

:::info
設定を変更したら、必ずサーバーを再起動して変更を反映させてね。
:::

## RCONの使い方

サーバーの設定でRCONを有効にしたら、設定ファイルで指定したポートを使ってOpen.mpのRCONインターフェースにアクセスできるよ。

接続にはRCON対応のプログラムが必要で、オープンソースの[RCON Console](https://sourceforge.net/projects/rconconsole/)がおすすめ。

使いたいRCONプログラムにサーバーのIPアドレスとポートを入力しよう。ゲームサーバーがオンラインで稼働していることを確認してね。

接続が成功すれば、選んだRCON ConsoleプログラムからPalworldサーバーにコマンドを送信できるようになるよ。

:::tip
RCONで使えるコマンドは[サーバーコマンド一覧](openmp-server-commands.md)でチェックしてみてね。
:::

これでPalworldサーバーでRCONが使えるようになったよ！

<InlineVoucher />