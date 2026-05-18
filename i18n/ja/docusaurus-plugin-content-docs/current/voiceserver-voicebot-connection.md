---
id: voiceserver-voicebot-connection
title: "ボイスサーバー：ボイスボットをボイスサーバーに接続する方法"
description: "TeamSpeakやDiscordサーバーにボイスボットを接続して、スムーズなコミュニケーションとコントロールを実現する方法をチェック → 今すぐ詳しく見る"
sidebar_label: ボイスサーバーにリンク
services:
  - voiceserver
  - voicebot
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />



## はじめに

ボイスボットをTeamSpeakサーバーに接続したいけど、どうやってやるのかよくわからない？大丈夫、ここから詳しく説明していくよ！



## ボットをTeamSpeakに接続する方法

ボイスボットをTeamSpeak 3サーバーに接続するには、まずコントロールパネルで呼び出します。次に、左側の**サーバー**をクリックして、以下のように進みます：

![](https://screensaver01.zap-hosting.com/index.php/s/bPPCgtQH4Q8NwxB/preview)

ここで、アカウントに紐づいたTeamSpeakがあれば**サーバー**から選択できます。外部ホスティングの場合は、**カスタムTeamSpeakサーバー**も選べます。

その後、下の欄に必要な情報を入力して保存すれば、ボイスボットがTeamSpeak 3サーバーに接続されます。例はこちら：

![](https://screensaver01.zap-hosting.com/index.php/s/PDBa6qy53FgAKRY/preview)


## ボットをDiscordに接続する方法

ボイスボットをDiscordに接続するには、**サーバー**から**Discord**を選択します。

![](https://screensaver01.zap-hosting.com/index.php/s/g73fPeqbesHiXSm/preview)

次に、**Discordボットトークン**と**DiscordボットクライアントID**を入力します。これでボイスボットがDiscordサーバーに接続されます。


## DiscordボットトークンとクライアントIDの取得方法

Discordサーバーは直接のIPアドレスやポートがないので、ボットを使う前にいくつか準備が必要です。


### Discordアプリケーションの作成

まずはDiscordアプリケーションを作成します。ボットはこのアプリに紐づけられ、その名前で動作します。作成は[Discord開発者ポータル](https://discord.com/developers/applications/)から行います。

**New Application**をクリックして新しいアプリを作成し、名前を付けます：

![](https://screensaver01.zap-hosting.com/index.php/s/YPbPtRaPEHZ7pB4/preview)

次に**Create**をクリックしてアプリを作成。続くステップで使うアプリケーションIDはメモしておきましょう：

![](https://screensaver01.zap-hosting.com/index.php/s/tzBNzKBGzX8j4EK/preview)


### ボットの設定とトークン取得

アプリ作成時に自動でボットも作成されます。トークンは**Reset Token**をクリックすると取得可能。ユーザートークンは必ずメモしておきましょう：

![](https://screensaver01.zap-hosting.com/index.php/s/5ypmywwPJxRAFax/preview)

:::caution
ボットトークンは絶対に他人に教えないでください。ボットの安全な動作とセキュリティのための秘密鍵のようなものです。
:::

同じページで少しスクロールして、**Presence Intent**、**Server Members Intent**、**Message Content Intent**を有効にして保存します：

![](https://screensaver01.zap-hosting.com/index.php/s/3Lkbs5Yb9grgrJ7/preview)


### ボットをDiscordに招待する

先ほどメモしたクライアントIDを以下のリンクの該当部分に入れて、ブラウザで開きボットをDiscordサーバーに追加します。例はこちら：
```
https://discordapp.com/oauth2/authorize?&client_id=1364549558197026816&scope=bot&permissions=0
```

![](https://screensaver01.zap-hosting.com/index.php/s/yKX4ocRtrZ7zLWB/preview)


### ボットのパネル設定

最後に、ZAP-Hostingのコントロールパネルに戻り、メモしたトークンとクライアントIDを入力して**保存**を押します：

![](https://screensaver01.zap-hosting.com/index.php/s/9Y79xx2FzGm73zW/preview)

あとはボットを起動すれば、約10秒でDiscordサーバーに接続されます。


## まとめ

ボイスボットはめっちゃ便利で楽しいアイテム。TeamSpeakサーバーでもDiscordでも使えるよ。もしわからないことがあれば、いつでもサポートチームに連絡してね！毎日対応してるから安心して 🙂 

<InlineVoucher />