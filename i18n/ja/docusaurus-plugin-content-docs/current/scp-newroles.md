---
id: scp-newroles
title: "SCP Secret Laboratory：サーバーに新しいロールを追加する方法"
description: "リモート管理を効果的に行うために、特定の権限を持つサーバーロールの作成とカスタマイズ方法を学ぼう → 今すぐチェック"
sidebar_label: 新しいロールを追加
services:
  - gameserver-scp 
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## 設定ファイルを確認しよう
新しいロールは「config_remoteadmin.txt」ファイルに入力します。  
この設定ファイルは、サーバーのインターフェース内の「Configs」をクリックすると見つけられます。

![](https://screensaver01.zap-hosting.com/index.php/s/7JEE5gLDyF29mZR/preview)

ここで該当の設定ファイルを探し、右側の「目のアイコン」をクリックして開きます。

## 既存のロールをコピーしよう
設定ファイルを開いたら、以下のようなエントリーを探せます：

![](https://screensaver01.zap-hosting.com/index.php/s/tDBFmR5g44gxpp5/preview)

これはすでに入力されているロールの例です。  
新しいエントリーはこの下に追加します。  
やり方は、上のロールのどれかのブロックをコピーして、一番下のロールの下に貼り付けるだけ。  
今回は「Moderator」ロールをコピーして下に挿入しました：

![](https://screensaver01.zap-hosting.com/index.php/s/ELHDZCDcT6WDydJ/preview)

## 自分のロールを追加しよう
コピーした既存ロールのブロックを編集して、自分の好きな値を入力します。  
今回は「ZAP」という名前に変更しました：

![](https://screensaver01.zap-hosting.com/index.php/s/6gtEmbeBjP5A8zy/preview)

ここまでできたら、次はロールを利用可能なリストに追加する必要があります。  
これも同じ設定ファイルの少し下の方にあります。

![](https://screensaver01.zap-hosting.com/index.php/s/qNNKnwYaYSjy2XK/preview)

「moderator」ロールの下に自分のロールを追加しましょう。  
:::info
注意：ハイフン「-」の前後のスペースを必ず守ってください！
:::

## 権限の設定
「config_remoteadmin.txt」ファイルの一番下で、それぞれのロールに対する権限を調整できます。  
自分のロールに権限を割り当てたい場合は、カッコ内にロール名を入れます。  
例はこんな感じです：

![](https://screensaver01.zap-hosting.com/index.php/s/kRSiKjYyWsK2RD3/preview)


<InlineVoucher />