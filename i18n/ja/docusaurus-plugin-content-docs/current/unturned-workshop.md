---
id: unturned-workshop
title: "Unturned: サーバーにWorkshopコンテンツをインストールする方法"
description: "UnturnedサーバーをカスタムSteam Workshopコンテンツで強化して、あなただけのゲーム体験を作ろう → 今すぐチェック"
sidebar_label: Workshopコンテンツ
services:
  - gameserver-unturned
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

Steam Workshopを使えば、サーバーをもっと自由にカスタマイズできるよ。ここではSteam Workshopを使ってサーバーにコンテンツを追加する方法を解説するね。

### 準備

MODやマップ、モデルなどをダウンロードできる場所はいろいろあるけど、一番人気なのはSteam Workshopだよ。ここにはサーバーにインストールできるたくさんのリソースがあるんだ。まずは欲しいWorkshopアイテムを見つけよう。UnturnedのSteam Workshopはここからアクセスできるよ: [Unturned - Steam Workshop](https://steamcommunity.com/app/304930/workshop/)

欲しいアイテムが決まったら、そのWorkshopアイテムのIDをコピーして、コントロールパネルに追加する必要があるよ。ブラウザかSteamクライアントでWorkshopを見ているかによって、IDのコピー方法が違うから以下を参考にしてね：

- **Steamクライアントの場合**

  Workshopアイテムのページで右クリックして「ページURLをコピー」を選択。URLからIDをコピーしよう。

  ![](https://screensaver01.zap-hosting.com/index.php/s/QD89esrFTQ8gZfb/preview)

  

- **ブラウザの場合**

  URLバーの**.../?id=**の後に続く数字の組み合わせがIDだよ。これをコピーしてね。

  ![](https://screensaver01.zap-hosting.com/index.php/s/XzRRT98ess4dyFX/preview)





### コンテンツの追加

欲しいコンテンツが集まったら、次はサーバーに追加しよう。追加する内容はコントロールパネルのConfigs内にある**WorkshopDownloadConfig.json**で指定するよ。

![](https://screensaver01.zap-hosting.com/index.php/s/T7gsio62gDH7DHb/preview)

ここにSteam WorkshopアイテムのIDを'FileIDs'に追加していくよ。完成例はこんな感じ：

```json
{
  "File_IDs": [
  	1567256534,
    1234567890, // 例（プレースホルダー）
    0987654321  // 例（プレースホルダー）
  
  ],
  "Ignore_Children_File_IDs": [],
  "Query_Cache_Max_Age_Seconds": 600,
  "Max_Query_Retries": 2,
  "Use_Cached_Downloads": true,
  "Should_Monitor_Updates": true,
  "Shutdown_Update_Detected_Timer": 600,
  "Shutdown_Update_Detected_Message": "Workshopファイルの更新を検知、シャットダウンまで: {0}",
  "Shutdown_Kick_Message": "Workshopファイル更新のためシャットダウンします。"
}
```

設定が終わったらサーバーを起動しよう。起動時に追加したコンテンツが自動でダウンロードされるよ。ライブコンソールで確認できて、こんな感じの表示になるはず：

```
1 workshop item(s) to download...
Downloading workshop item 1567256534
Successfully downloaded workshop item: 1567256534
```

これでコンテンツのダウンロードとセットアップは完了！サーバーでちゃんと有効になっているよ。

<InlineVoucher />