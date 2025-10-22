---
id: fivem-txadmin-discord-bot
title: "FiveM: txAdmin Discordボット"
description: "txAdminサーバーでDiscordボットを連携・活用して、FiveMサーバー管理をもっと便利に → 今すぐチェック"
sidebar_label: txAdmin Discordボット
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## はじめに
txAdminパネルはFiveMサーバーに便利な機能をたくさん提供していて、その中にはDiscordボットの連携も含まれています。
このガイドでは、Discordボットのセットアップ方法と使い方を紹介します。

<InlineVoucher />

## 準備

txAdminサーバー用のDiscordボットをセットアップするには、まずtxAdminパネルにログインする必要があります。
ログイン情報はサーバーの概要ページに表示されているので、以下のように確認してください：

![img](https://screensaver01.zap-hosting.com/index.php/s/69LdTK3FyNZNXid/download)

:::info

このガイドはtxAdminがすでにセットアップされていることが前提です。セットアップ方法は[FiveM: txAdminセットアップ](fivem-txadmin-setup.md)ガイドをご覧ください。

:::

## セットアップ

### Discordアプリケーションの作成

txAdminでボットを使うには、まずDiscordアプリケーションを作成する必要があります。ボットはそのアプリケーションに紐づけられ、その名前で動作します。アプリケーション作成は[Discord Developer Portal](https://discord.com/developers/applications/)にアクセスしてください。

「New Application」をクリックして新しいアプリケーションを作成し、好きな名前を付けます：

![](https://screensaver01.zap-hosting.com/index.php/s/YPbPtRaPEHZ7pB4/preview)

次に「Create」をクリックしてアプリケーションを作成します。次のステップで使うので、アプリケーションIDはメモしておきましょう：

![](https://screensaver01.zap-hosting.com/index.php/s/tzBNzKBGzX8j4EK/preview)


### ボットの設定とトークン取得

アプリケーション作成時に自動でボットも作成されます。トークンは「Reset Token」をクリックすると取得できます。こちらも必ずメモしておきましょう：

![](https://screensaver01.zap-hosting.com/index.php/s/5ypmywwPJxRAFax/preview)

:::caution
ボットのトークンは絶対に他人に教えないでください。トークンは秘密鍵のようなもので、漏れるとセキュリティリスクになります。
:::

同じページの少し下にスクロールして、「Server Members Intent」を有効にして変更を保存してください：

![](https://screensaver01.zap-hosting.com/index.php/s/c5SnKpn4GXtGM38/preview)

### Discordへのボット招待

ボットをDiscordに招待するには、先ほどメモしたクライアントIDを以下のリンクの該当部分に入れて、ブラウザで開きます。例はこんな感じです：
```
https://discordapp.com/oauth2/authorize?&client_id=1364549558197026816&scope=bot&permissions=18432
```

![](https://screensaver01.zap-hosting.com/index.php/s/yKX4ocRtrZ7zLWB/preview)


### サーバーIDとチャンネルIDの取得

txAdminでボットを正しく使うには、ボットが動作するDiscordサーバーのIDが必要です。
Discordのサーバーアイコンを右クリックして「サーバーIDをコピー」を選択し、IDをメモしてください。

例はこんな感じです：
![](https://screensaver01.zap-hosting.com/index.php/s/GBZGZGRPQQo95ys/preview)

また、ステータス更新（再起動予定など）を投稿するチャンネルを設定したい場合は、そのチャンネルのIDも同じ方法でコピーできます。
ボットがそのチャンネルでメッセージの読み書き権限を持っていることを忘れないでください。

:::info
サーバーIDやチャンネルIDをコピーできない場合は、Discordのユーザー設定で開発者モードを有効にしてください：
![](https://screensaver01.zap-hosting.com/index.php/s/gLRRxNsLL8Eb5jj/preview)
:::

### txAdminでの設定カスタマイズ

txAdminでDiscordボットを有効化し、先ほどメモしたIDやトークンを入力します：

![](https://screensaver01.zap-hosting.com/index.php/s/HBAEi9c7dMLLCBy/preview)

#### オプション：ステータスメッセージの送信

サーバーの現在の状態やプレイヤー数などを常に更新するステータスメッセージを送ることもできます。
やり方は、ステータスを表示したいDiscordチャンネルで `/status add` と入力するだけです。ボットがメッセージ送信権限を持っていることを確認してください。

こういったメッセージが作成されます：

![](https://screensaver01.zap-hosting.com/index.php/s/XnzsK4NGZTHYsM6/preview)

このメッセージの内容はtxAdminのDiscord設定ページで自由にカスタマイズ可能です。

## まとめ

txAdmin用のDiscordボットをセットアップすると、FiveMサーバーの状態や情報をDiscordサーバー内で簡単に表示できるようになります。質問やサポートが必要な場合は、いつでもお気軽にサポートチームにお問い合わせくださいね！🙂

<InlineVoucher />