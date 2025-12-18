---
id: valheim-savegame
title: "Valheim：サーバーでのセーブデータ管理"
description: "Savegame-Managerを使ってValheimのセーブデータを効率的に管理・ダウンロード・復元する方法をチェック → 今すぐ詳しく見る"
sidebar_label: セーブデータ管理
services:
  - gameserver-valheim
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## セーブデータのダウンロード

:::info
注意：セーブデータをダウンロードする前に、サーバーを停止してアクティブなセーブデータを保存してください。サーバー停止後、ページをリロードするとセーブデータが表示されます。
:::

セーブデータのダウンロードは、ウェブインターフェースの`Savegame-Manager`から行えます：

![](https://screensaver01.zap-hosting.com/index.php/s/FryL7EXmEYBFBXD/preview)

緑色の「Download」ボタンをクリックするだけで簡単にセーブデータをダウンロード可能：

![](https://screensaver01.zap-hosting.com/index.php/s/2o2gnQ3GKpwc22w/preview)

:::info
注意：`.db`ファイルと`.fwl`ファイルの両方を必ずダウンロードしてください。
:::

これで完了！バックアップを他の用途に使ったり、後でアップロードし直したりできます。

## セーブデータのアップロード＆有効化

自分のセーブデータをアップロードするには、まずセーブゲームマネージャーを開きます。

ここでドラッグ＆ドロップでセーブデータをアップロードできます。アップロード後はこんな感じになります：

![](https://screensaver01.zap-hosting.com/index.php/s/H2RJSyMGeiojfxD/preview)

:::info
セーブデータはゲームが作成した時の名前と同じである必要があります。
:::

今回のバックアップファイルは`380622.fwl`と`380622.db`です。

次に、上の`Savegame (worlds)`欄にバックアップの名前を入力します：

![](https://screensaver01.zap-hosting.com/index.php/s/Ggrys4xKjDm7inz/preview)

`ZAP Backups`の欄で自分のセーブデータを探します：

![](https://screensaver01.zap-hosting.com/index.php/s/beRMYmE4CicDNsz/preview)

あとは両方のファイルの黄色い「Restore」ボタンを押して確認すれば、セーブデータがロードされます。

ロード完了後、右下にメッセージが表示されます：

![](https://screensaver01.zap-hosting.com/index.php/s/Zs9F4rNRen4QMcs/preview)

これでサーバーを起動すれば、アップロードしたセーブデータがサーバー上で有効になります。



## 自動セーブについて

残念ながらValheimは現時点で自動セーブに対応していません。ゲーム進行を保存するにはサーバーを停止する必要があります。ウェブインターフェースの再起動プランナーを使えば、特定の時間にサーバーを自動再起動できます：

![](https://screensaver01.zap-hosting.com/index.php/s/gTp5yJDQyHKX7eF/preview)

ここで毎日または毎週の再起動時間を簡単に追加可能：

![](https://screensaver01.zap-hosting.com/index.php/s/nyqbMzjNL78qz9K/preview)

再起動を保存したら、複数の毎日・毎週再起動も設定できます。

![](https://screensaver01.zap-hosting.com/index.php/s/BddatyGLAZZWnCA/preview)

これで完了！指定した時間にサーバーが再起動し、そのタイミングでセーブデータが保存されます。

<InlineVoucher />