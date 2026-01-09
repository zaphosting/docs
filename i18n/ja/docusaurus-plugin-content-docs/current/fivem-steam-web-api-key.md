---
id: fivem-steam-web-api-key
title: "FiveM: Steam Web APIキーの設定"
description: "FiveMで認証を有効にし、サーバー機能を強化するためのSteam Web APIキーの取得と有効化方法をチェック → 今すぐ詳しく見る"
sidebar_label: Steam Web APIキー
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Steam Web APIキーはFiveMで重要な役割を持っています。これは、Steamを識別子として使うさまざまなスクリプトやリソースがAPIキーによる認証を行うために必要です。

<InlineVoucher />

## 準備

APIキーをリクエストするには、制限のないSteamアカウントが必要です。制限付きのSteamアカウントはSteamの機能に制限があるため、完全なアクセス権がないとAPIキーをリクエストできません。アカウントとその機能をアンロックするには、Steamストアで最低**5.00 USD**の購入が必要です。

## APIキーのリクエスト

Steamアカウントが準備できたら、自分のSteam Web APIキーをリクエストできます。Steamアカウント名とパスワードで[Steamの公式サイト](https://steamcommunity.com/dev/apikey)にログインしてください。

![](https://screensaver01.zap-hosting.com/index.php/s/Wm8rdwwFPbt7D5W/preview)

ログイン後、ドメイン名を入力し、Steam Web APIの利用規約に同意して、**Register**ボタンをクリックします。ドメインは**サーバーのIPアドレス**（ポートなし）を設定してください。

![](https://screensaver01.zap-hosting.com/index.php/s/GNmZXzTn9JJ8cBo/preview)

成功すると、以下のように自分のSteam Web APIキーが表示されます。

![](https://screensaver01.zap-hosting.com/index.php/s/m8WoXg3WcjeaQrW/preview)

## APIキーの有効化

Steam Web APIキーを取得したら、FiveMゲームサーバーの設定ファイル（`server.cfg`）にキーを設定します。`server.cfg`は**txAdminのインターフェース**内の**CFG Editor**からアクセス可能です。既存の行を探すか、なければ新しく作成し、以下のように`YOUR_KEY_HERE`を取得したキーに置き換えて追加してください。

```
set steam_webApiKey "YOUR_KEY_HERE"
```

![img](https://screensaver01.zap-hosting.com/index.php/s/ED4QbkP8aaeF92B/preview)

## まとめ

最後にサーバーを再起動しましょう。次回サーバーが完全に起動した際にSteam Web APIキーが読み込まれます。これでFiveMゲームサーバーにSteam Web APIキーを無事に追加できました。質問やサポートが必要な場合は、いつでもお気軽にサポートチームまでご連絡ください！毎日対応していますよ！🙂

<InlineVoucher />