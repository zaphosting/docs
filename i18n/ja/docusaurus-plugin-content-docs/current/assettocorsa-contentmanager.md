---
id: assettocorsa-contentmanager
title: "Assetto Corsa：Content Managerでゲームサーバーを設定する方法"
description: "ゲームサーバーの設定を効率的に管理して、パフォーマンスとカスタマイズを最適化する方法をチェック → 今すぐ詳しく見る"
sidebar_label: Content Managerでゲームサーバーを設定
services:
  - gameserver-assettocorsa
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::info
**重要** Content Managerでゲームサーバーを管理するには、フルバージョンが必要です。ライトバージョンではサーバー管理はできません。
:::

<InlineVoucher />


## 準備

まずContent Managerを開き、右上のサンドイッチメニューをクリックして「Server」を選択します：

![](https://screensaver01.zap-hosting.com/index.php/s/LGKdDPSCMCEMEZj/preview)

ここで新しいプリセットを作成し、それを選択します：

![](https://screensaver01.zap-hosting.com/index.php/s/XLTcJkwrAAwB65o/preview)

## サーバースロットの設定

まずサーバーの容量を設定します。今回のサーバーは10スロットなので、Capacityに「10」を選択します：

![](https://screensaver01.zap-hosting.com/index.php/s/XreNRjbpSJJqEsQ/preview)

## マップの設定

デフォルトではImolaが選択されていますが、マップをクリックすると好きなマップを選べます：

![](https://screensaver01.zap-hosting.com/index.php/s/B87ywSwXHL6qzFD/preview)



## 車両の設定

次に「Entry List」タブに切り替え、新しい車を追加します：

![](https://screensaver01.zap-hosting.com/index.php/s/bY5Q5WB7nDq7f8q/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/w6oxDfGJifFZbd7/preview)

:::info
車両スロットはすべて埋め、利用可能なスロット数を超えないように注意してください。

![](https://screensaver01.zap-hosting.com/index.php/s/tSZn2QJLzfDx4r9/preview)
:::

## FTPアップロードの設定

「Advanced」メニューからFTPアップローダーを設定できます。これでワンクリックでサーバー設定をアップロード可能に。

![](https://screensaver01.zap-hosting.com/index.php/s/7TmdJPGKAbAJnDP/preview)


ここにFTP情報を入力します：

![](https://screensaver01.zap-hosting.com/index.php/s/7R9xNeEbDQpF4BD/preview)

:::info
「Folder」にはゲームサーバーのURLに表示されるIDを入力してください。例：

> https://zap-hosting.com/en/customer/gameserver/show/**427814**/ftpBrowser/
:::

今回の場合は以下のようになります：

```
/g427814/assetto-corsa/
```

AssettoServerの場合：

```
/g427814/assettoserver/
```

設定が終わったら「Upload Content」をクリック。設定したコンフィグ、トラック、車両が自動でアップロードされるので、あとはサーバーを起動するだけ！

<InlineVoucher />