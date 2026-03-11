---
id: voiceserver-voicebot-connection
title: "ボイスサーバー：ボイスボットをボイスサーバーに連携する方法"
description: "TeamSpeakやDiscordサーバーにボイスボットを接続して、シームレスなコミュニケーションとコントロールを実現する方法をチェック → 今すぐ詳しく見る"
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

ボイスボットをTeamSpeak 3サーバーに接続するには、まずコントロールパネルでボットを呼び出す必要があるよ。次に、左側のメニューから**サーバー**を選択してね：

![](https://screensaver01.zap-hosting.com/index.php/s/bPPCgtQH4Q8NwxB/preview)

ここで、アカウントに紐づいているTeamSpeakがあれば**サーバー**の下から選択できるよ。もし外部でホスティングされている場合は、**カスタムTeamSpeakサーバー**も選べるよ。

その後、下の欄に必要な情報を入力して保存すれば、ボイスボットがTeamSpeak 3サーバーに接続されるよ。例はこんな感じ：

![](https://screensaver01.zap-hosting.com/index.php/s/PDBa6qy53FgAKRY/preview)


## ボットをDiscordに接続する方法

ボイスボットをDiscordに接続するには、まず**サーバー**に行って、次に**Discord**を選択してね。

![](https://screensaver01.zap-hosting.com/index.php/s/g73fPeqbesHiXSm/preview)

ここで**Discordボットトークン**と**DiscordボットクライアントID**を入力すれば、ボイスボットがDiscordサーバーに接続されるよ。


## DiscordボットトークンとクライアントIDの取得方法

Discordサーバーは直接のIPアドレスやポートがないから、ボットを使う前にいくつか準備が必要だよ。


### Discordアプリケーションの作成

まずはDiscordアプリケーションを作成しよう。ボットはこのアプリケーションに紐づけられて、その名前で動くんだ。作成は[Discord開発者ポータル](https://discord.com/developers/applications/)からできるよ。

**New Application**をクリックして新しいアプリケーションを作成し、好きな名前をつけてね：

![](https://screensaver01.zap-hosting.com/index.php/s/YPbPtRaPEHZ7pB4/preview)

次に**Create**をクリックしてアプリケーションを作成。ここで表示されるアプリケーションIDはメモしておこう：

![](https://screensaver01.zap-hosting.com/index.php/s/tzBNzKBGzX8j4EK/preview)


### ボットの設定とトークン取得

アプリケーションを作ると自動的にボットも作成されるよ。トークンは**Reset Token**をクリックすると取得できるから、必ずメモしておいてね：

![](https://screensaver01.zap-hosting.com/index.php/s/5ypmywwPJxRAFax/preview)

:::caution
ボットトークンは絶対に他人に教えないでね。ボットの安全な動作のための秘密鍵みたいなものだから、漏れるとセキュリティリスクになるよ。
:::

同じページの少し下にスクロールして、**Presence Intent**、**Server Members Intent**、**Message Content Intent**を有効にしてから保存しよう：

![](https://screensaver01.zap-hosting.com/index.php/s/3Lkbs5Yb9grgrJ7/preview)


### ボットをDiscordに招待する

ボットを招待するには、先ほどメモしたクライアントIDを以下のリンクの該当部分に入れて、ブラウザで開いてDiscordサーバーに追加してね。例はこんな感じ：
```
https://discordapp.com/oauth2/authorize?&client_id=1364549558197026816&scope=bot&permissions=0
```

![](https://screensaver01.zap-hosting.com/index.php/s/yKX4ocRtrZ7zLWB/preview)


### ボットのパネル設定

最後に、ZAP-Hostingのコントロールパネルに戻って、先ほどメモしたトークンとクライアントIDを入力して、下の**保存**を押そう：

![](https://screensaver01.zap-hosting.com/index.php/s/9Y79xx2FzGm73zW/preview)

これでボットを起動すれば、約10秒でDiscordサーバーに接続されるはずだよ。 


## まとめ

ボイスボットはめっちゃ便利で楽しいアイテムだよ。TeamSpeakサーバーでもDiscordでも使えるから、ぜひ活用してみてね。もしわからないことがあったら、いつでもサポートチームに連絡してね。毎日みんなのサポートを待ってるよ！🙂

<InlineVoucher />