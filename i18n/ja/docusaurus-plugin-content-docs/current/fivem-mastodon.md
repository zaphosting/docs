---
id: fivem-mastodon
title: "FiveM：サーバーのアクティビティフィード設定方法"
description: "Mastodonのアクティビティフィードをサーバーに統合してリアルタイム更新＆コミュニティの盛り上げに活用しよう → 今すぐチェック"
sidebar_label: アクティビティフィードの設定
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## 準備

サーバーにアクティビティフィードを設定するには、まずMastodonでアカウント登録が必要です。

## 設定

まずMastodonのプロフィールを開いて、ユーザー名をコピーします。今回の例では `zaphosting@mstdn.instance` です。

次にFiveMのサーバーの「Configs」を開き、server.cfgを編集します。

ファイルの一番下に以下の行を追加しましょう：

```
sets activitypubFeed username
```

"username" はあなたのMastodonのユーザー名に置き換えてください。

![](https://screensaver01.zap-hosting.com/index.php/s/oQWC9pxrweM8FsY/preview)

保存したらサーバーを再起動します。約20分後にサーバーを開くと「Feed」タブが利用可能になります。


<InlineVoucher />