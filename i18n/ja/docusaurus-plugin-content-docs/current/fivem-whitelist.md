---
id: fivem-whitelist
title: "FiveM: ホワイトリスト"
description: "ホワイトリストを使ってサーバーアクセスを制限し、セキュリティとプレイヤー管理を強化する方法 → 今すぐチェック"
sidebar_label: ホワイトリスト
services:
  - gameserver-fivem
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
サーバーを誰でもアクセスできる状態にしたくない？サーバーの見える範囲やアクセスを制限する方法はいくつかあります。その中の一つがホワイトリストの利用で、ここで詳しく解説します。

ホワイトリストは特定の人だけを許可するリストです。つまり、ホワイトリストに登録されている人だけが接続可能で、リストにない人は接続を拒否され、「ホワイトリストに登録されていません」というメッセージが表示されます。

![](https://screensaver01.zap-hosting.com/index.php/s/TCYYodZW2XN6FYk/preview)

<InlineVoucher />

## 設定方法

FiveMのホワイトリスト機能を管理するには、まずtxAdminのインターフェースを開きます。次に**Settings**メニューから**Whitelist**タブを開きましょう。

![img](https://screensaver01.zap-hosting.com/index.php/s/WJBH63dWtyWWYQ6/download)

使用したいホワイトリストのモードを選択します。管理画面では以下のオプションが利用可能です：

- 管理者のみ（メンテナンスモード）
- Discordサーバーメンバー
- Discordサーバーロール
- 承認済みライセンス

この例では**承認済みライセンス**を選択・有効化し、プレイヤーのライセンスを使って承認を行います。

![img](https://screensaver01.zap-hosting.com/index.php/s/dzTZLTczjWjorkf/download)

プレイヤーのライセンスIDはtxAdminの管理者によってホワイトリストに登録される必要があります。これは**Whitelistページ**または`/whitelist`コマンドで行えます。

## まとめ

すべての手順を踏めば、サーバーのホワイトリスト機能を無事に有効化・設定できています。もし質問やサポートが必要な場合は、いつでもお気軽にサポートチームにお問い合わせください！毎日対応していますよ 🙂 

<InlineVoucher />