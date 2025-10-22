---
id: voiceserver-voicebot-connection
title: "ボイスサーバー：ボイスボットをボイスサーバーに連携する方法"
description: "ボイスボットをTeamSpeakやDiscordサーバーに接続して、シームレスなコミュニケーションとコントロールを実現する方法をチェック → 今すぐ詳しく学ぼう"
sidebar_label: ボイスサーバーにリンク
services:
  - voiceserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />



## はじめに

ボイスボットをTeamSpeakサーバーに接続したいけど、どうやってやるのかよくわからない？大丈夫、ここから詳しく説明していくよ！



## ボットをTeamSpeakに接続する方法

ボイスボットをTeamSpeak 3サーバーに接続するには、まずコントロールパネルで呼び出します。次に、左側の**サーバー**を選択してね。こんな感じ：

![](https://screensaver01.zap-hosting.com/index.php/s/bPPCgtQH4Q8NwxB/preview)

アカウントで予約済みのTeamSpeakがあれば、**サーバー**の下から選択できるよ。外部ホスティングの場合は、**カスタムTeamSpeakサーバー**も選べる。

その後、下の欄に必要な情報を入力して保存すれば、ボイスボットがTeamSpeak 3サーバーに接続されるよ。例はこちら：

![](https://screensaver01.zap-hosting.com/index.php/s/PDBa6qy53FgAKRY/preview)


## ボットをDiscordに接続する方法

ボイスボットをDiscordに接続するには、**サーバー**に行って、**Discord**を選択してね。

![](https://screensaver01.zap-hosting.com/index.php/s/g73fPeqbesHiXSm/preview)

**Discordボットトークン**と**DiscordボットクライアントID**を入力すれば、ボイスボットがDiscordサーバーに接続されるよ。


## DiscordボットトークンとクライアントIDの取得方法

Discordサーバーは直接のIPアドレスやポートがないから、ボットを使う前にいくつか準備が必要だよ。


### Discordアプリケーションの作成

まずはDiscordアプリケーションを作る必要があるよ。ボットはこのアプリに紐づいて、その名前で動くんだ。作成は[Discord Developer Portal](https://discord.com/developers/applications/)から。

**New Application**をクリックして新しいアプリを作成し、好きな名前をつけてね。こんな感じ：

![](https://screensaver01.zap-hosting.com/index.php/s/YPbPtRaPEHZ7pB4/preview)

次に**Create**をクリックしてアプリを作成。次のステップで使うアプリケーションIDはメモしておこう：

![](https://screensaver01.zap-hosting.com/index.php/s/tzBNzKBGzX8j4EK/preview)


### ボットの設定とトークン取得

アプリ作成時に自動でボットも作られるよ。トークンは**Reset Token**をクリックすると取得できる。これもメモ必須：

![](https://screensaver01.zap-hosting.com/index.php/s/5ypmywwPJxRAFax/preview)

:::caution
ボットトークンは絶対に他人に教えないでね。ボットの安全と正常な動作のための秘密鍵みたいなものだから、シェア厳禁！
:::

同じページで少しスクロールして、**Presence Intent**、**Server Members Intent**、**Message Content Intent**を有効にして保存しよう：

![](https://screensaver01.zap-hosting.com/index.php/s/3Lkbs5Yb9grgrJ7/preview)


### ボットをDiscordに招待する

先ほどメモしたクライアントIDを以下のリンクの該当部分に入れて、ブラウザで開いてボットをDiscordサーバーに追加しよう。例はこんな感じ：
```
https://discordapp.com/oauth2/authorize?&client_id=1364549558197026816&scope=bot&permissions=0
```

![](https://screensaver01.zap-hosting.com/index.php/s/yKX4ocRtrZ7zLWB/preview)


### ボットのパネル設定

最後に、ZAP-Hostingのコントロールパネルに戻って、メモしたトークンとクライアントIDを入力し、下の**保存**を押すよ：

![](https://screensaver01.zap-hosting.com/index.php/s/9Y79xx2FzGm73zW/preview)

これでボットを起動すれば、約10秒でDiscordサーバーに接続されるはず！ 


## まとめ

ボイスボットはめっちゃ便利で楽しいアイテムだよ。TeamSpeakサーバーでもDiscordでも使えるから、ぜひ活用してみてね。質問やサポートが必要なら、いつでも気軽にサポートチームに連絡してね！毎日対応してるよ 🙂 

<InlineVoucher />