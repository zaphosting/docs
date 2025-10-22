---
id: source-custom-content
title: ゲームサーバーへのカスタムコンテンツとMODの導入
description: "Counter-StrikeやGarry's ModなどのSourceゲームで、マップやスキン、サウンドなどのカスタムコンテンツがゲームプレイをどう盛り上げるか → 今すぐチェック"
sidebar_label: カスタムコンテンツ
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## カスタムコンテンツって何？

Counter-StrikeやGarry's ModのようなSourceゲームは、その多様性で知られています。これはすべて、プラグインや**カスタムコンテンツ**のサポートがあってこそ。ゾンビモード、かくれんぼ、ミニゲーム、ジェイルブレイクなど、さまざまなゲームモードが長年にわたり開発されてきました。

![](https://screensaver01.zap-hosting.com/index.php/s/MxDRfHZDFRHEjog/preview)

<InlineVoucher />

こうしたサーバーでは、コミュニティが作成したマップやプレイヤースキン、サウンドがよく使われています。プレイヤーがサーバーのカスタムコンテンツを利用・表示するには、まずサーバーからそのコンテンツをダウンロードする必要があります。方法は主に2つ：

- FastDL
- Steam Workshop

用途に応じて、どちらかがより便利です。以下にFastDLとWorkshopの違いをまとめました：

|  カスタムコンテンツ  | FastDL | Steam Workshop |
| :-----------------: | :----: | :------------: |
|        マップ       |   ✓    |       ✓        |
| マテリアル/モデル   |   ✓    |       ✗        |
|        サウンド     |   ✓    |       ✗        |



## カスタムコンテンツの設定方法



### FastDL

ここでは、当社の[ホスティング製品](https://zap-hosting.com/en/shop/product/webspace/)を使ったFastDLサーバーの設定方法を説明します。ただし、公開アクセス可能なウェブサーバーがあれば他の方法でもOK。まずはホスティング製品の管理画面を開きます：

![](https://screensaver01.zap-hosting.com/index.php/s/JdmBxGiicrQTxDt/preview)



次にファイルマネージャーを開き、以下のフォルダを作成します：

![](https://screensaver01.zap-hosting.com/index.php/s/dptRwGTgL6bHXrE/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/beCCJPFT5si3wRZ/preview)



続いて、ゲーム内でのコンテンツダウンロードが正常に動作するよう、ホスティングの権限設定を行います：

![](https://screensaver01.zap-hosting.com/index.php/s/7xSDbPRW6MYomk4/preview)

:::info
すべてのフォルダに対して権限設定を忘れずに！
:::

これでカスタムコンテンツをアップロードできます。ゲームサーバーには解凍済みのファイルをアップし、FastDL（ホスティング）にはbzip2形式で圧縮したファイルをアップロードするのがベスト。圧縮には7Zipがおすすめです。

最後に、ゲームサーバーの**server.cfg**にFastDLサーバーのURLを指定します。以下のコマンドを追加してください：

```
sv_allowdownload 1
sv_allowupload 1
sv_downloadurl "https://zapXXXXX-1.plesk08.zap-hosting.com" // ZAPのホスティングURLに置き換えてね。
```

サーバーを再起動して接続すると、対応するコンテンツが自動でダウンロードされます。ゲームのコンソールで確認も可能：

![](https://screensaver01.zap-hosting.com/index.php/s/Xbk5gSQAMQSK9Me/preview)



### Steam Workshop

続いてSteam Workshopの設定方法です。まずSteamで対象ゲームのWorkshopページを開きます。ここでは例として[CS:GO](https://steamcommunity.com/workshop/browse/?appid=730&browsesort=trend&section=collections)を使います。Workshopで「Browse」メニューから「Collection」を選択：

![](https://screensaver01.zap-hosting.com/index.php/s/PaTrSqacw7733yB/preview)

「Collection」を右クリックして、ゲームサーバー用のコレクションを作成します：

![](https://screensaver01.zap-hosting.com/index.php/s/JZmsT6KexmteeJw/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/99bEm45t48rCzAT/preview)

これでコレクションが作成されましたが、初期状態では空っぽです。そこで再度ゲームのWorkshopに戻り、追加したいアイテムを選びます：

![](https://screensaver01.zap-hosting.com/index.php/s/WpYrLbYESYjmmWa/preview)

収集が終わったら、コレクションに戻って右クリックし「Copy Page URL」を選択。URLからコレクションのIDを取得します。例：

...steamcommunity.com/sharedfiles/filedetails/?id=**2108505414**

最後に、このIDをゲームサーバーの管理画面のSteam Workshop設定に追加します：

![](https://screensaver01.zap-hosting.com/index.php/s/6gCM5rWoeBeg57M/preview)

<InlineVoucher />