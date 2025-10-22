---
id: redm-txadmin-discord-bot
title: "RedM: txAdmin Discordボット"
description: "txAdmin RedMサーバーにDiscordボットをセットアップ＆連携して、管理やコミュニケーションを強化しよう → 今すぐ詳しくチェック"
sidebar_label: txAdmin Discordボット
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## はじめに
txAdminパネルはRedMサーバー向けにたくさんの機能を提供していて、その中にはDiscordボットの連携も含まれています。
このガイドでは、Discordボットのセットアップ方法と使い方を紹介します。

<InlineVoucher />

## 準備

txAdminサーバー用のDiscordボットをセットアップするには、まずtxAdminパネルにログインする必要があります。
ログイン情報はサーバーの概要ページに表示されているので、以下のように確認してください：

![img](https://screensaver01.zap-hosting.com/index.php/s/6gJa3qsymE2kzCi/download)

:::info

このガイドはtxAdminがすでにセットアップされていることが前提です。セットアップ方法は[RedM: txAdminセットアップ](redm-txadmin-setup.md)ガイドをご覧ください。

:::

## セットアップ

### Discordアプリケーションの作成

txAdminでボットを使うには、まずDiscordアプリケーションを作成する必要があります。ボットはそのアプリケーションに紐づけられ、その名前で動作します。アプリケーション作成は[Discord Developer Portal](https://discord.com/developers/applications/)にアクセスしてください。

次に、**New Application**をクリックして新しいアプリケーションを作成し、好きな名前を付けます：

![](https://screensaver01.zap-hosting.com/index.php/s/YPbPtRaPEHZ7pB4/preview)

その後、**Create**をクリックしてアプリケーションを作成します。次のステップで使うので、アプリケーションIDはメモしておきましょう：

![](https://screensaver01.zap-hosting.com/index.php/s/tzBNzKBGzX8j4EK/preview)


### ボットの設定とトークン取得

アプリケーション作成時に自動でボットも作成されます。トークンは**Reset Token**をクリックすると取得できます。こちらも必ずメモしておきましょう：

![](https://screensaver01.zap-hosting.com/index.php/s/5ypmywwPJxRAFax/preview)

:::caution
ボットのトークンは絶対に他人に教えないでください。トークンは秘密鍵のようなもので、漏れるとセキュリティリスクになります。
:::

同じページの少し下にスクロールして、「Server Members Intent」を有効にし、変更を保存してください：

![](https://screensaver01.zap-hosting.com/index.php/s/c5SnKpn4GXtGM38/preview)

### Discordへのボット招待

ボットを招待するには、先ほどメモしたクライアントIDを以下のリンクの該当部分に入れて、ブラウザで開きます。するとボットをDiscordサーバーに追加できます。例はこんな感じ：

```
https://discordapp.com/oauth2/authorize?&client_id=1364549558197026816&scope=bot&permissions=18432
```

![](https://screensaver01.zap-hosting.com/index.php/s/yKX4ocRtrZ7zLWB/preview)


### サーバーIDとチャンネルIDの取得

ボットをtxAdminで正しく使うには、ボットが動作するDiscordサーバーのIDが必要です。
Discordでサーバーアイコンを右クリックして**サーバーIDをコピー**を選択し、IDをメモしてください。

例はこんな感じです：
![](https://screensaver01.zap-hosting.com/index.php/s/GBZGZGRPQQo95ys/preview)

また、ステータス更新（再起動スケジュールなど）を投稿するチャンネルを設定する場合は、そのチャンネルのIDも同じ方法でコピーできます。
ボットがそのチャンネルでメッセージの読み書き権限を持っていることを忘れずに。

:::info
サーバーIDやチャンネルIDをコピーできない場合は、Discordのユーザー設定で開発者モードを有効にしてください：
![](https://screensaver01.zap-hosting.com/index.php/s/gLRRxNsLL8Eb5jj/preview)
:::

### txAdminでの設定カスタマイズ

txAdminでDiscordボットを有効化し、先ほどメモしたIDやトークンを入力します：

![](https://screensaver01.zap-hosting.com/index.php/s/HBAEi9c7dMLLCBy/preview)

#### オプション：ステータスメッセージの送信

任意で、現在のサーバーステータスやプレイヤー数などを常に更新するステータスメッセージを送信できます。
やり方は、ステータスを表示したいDiscordチャンネルで`/status add`と入力してください。ボットがメッセージ送信権限を持っていることを確認しましょう。

こういったメッセージが作成されます：

![](https://screensaver01.zap-hosting.com/index.php/s/XnzsK4NGZTHYsM6/preview)

このメッセージの内容はtxAdminのDiscord設定ページで自由にカスタマイズ可能です。

## まとめ

txAdmin用のDiscordボットをセットアップすると、RedMサーバーのステータスや情報をDiscordサーバー内で簡単に表示できるようになります。質問やサポートが必要な場合は、いつでもお気軽にサポートチームにお問い合わせくださいね！🙂

<InlineVoucher />