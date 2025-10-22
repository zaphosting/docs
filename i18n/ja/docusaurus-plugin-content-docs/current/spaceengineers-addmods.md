---
id: spaceengineers-addmods
title: "Space Engineers: Modのインストール方法"
description: "Space Engineersのゲームサーバーに安全にModを設定・追加して、カスタマイズされたプレイ体験を楽しもう → 今すぐチェック"
sidebar_label: Modのインストール
services:
  - gameserver-spaceengineers
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

### 準備

サーバーにModを追加するには、設定ファイルを編集する必要があります。変更を適用する際に問題が起きないよう、必ず事前にサーバーを停止しておいてください！

正しい設定ファイルを編集するために、まずセーブゲームの名前を確認しましょう。設定を変更していなければ、デフォルトは「zap001」です。ただし念のため、以下の手順で確認してください：

サーバーの設定にアクセスするには、左のリストから「設定」タブ内の「Settings」を開きます。

![](https://screensaver01.zap-hosting.com/index.php/s/Begs32xtfWitRDA/preview)

このページの最初のフィールドでセーブゲーム名を確認・変更できます。この名前を覚えておいて、後で正しい設定ファイルを編集しましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/DHs7JGyxRMSfDKN/preview)

このマニュアルの手順を正確に行うために、**Notepad++**のインストールも必須です！

## Modを選ぶ

Space EngineersのワークショップにはたくさんのModがあります。ワークショップは[こちら](https://steamcommunity.com/workshop/about/?appid=244850)からアクセス可能。

気になるModを見つけたらクリックして詳細を確認。気に入ったらMod IDを控えましょう。Mod IDは通常、サイドやURLバーの上部に太字で表示されています：

![](https://screensaver01.zap-hosting.com/index.php/s/k6WKbbZEizX7TpR/preview)

## 設定ファイルを開く

サーバーのファイル編集は2通りあります。ひとつは[FTPアクセス](gameserver-ftpaccess.md)経由、もうひとつはウェブインターフェースの設定エディターから。

今回は設定の構文エラーを避けるため、FTP経由で手動編集します。FTP接続の方法は上記リンクの説明を参照してください。

FTP接続ができたら、以下のディレクトリに移動します：

``/gXXXXXX/space-engineers/DedicatedServer64/config/Saves``

このフォルダにはサーバーで作成されたすべてのセーブゲームが一覧表示されます。編集したいセーブゲームのフォルダを開きます。例では「zap001」フォルダです：

![](https://screensaver01.zap-hosting.com/index.php/s/cLT8FLSnQE42ZwN/preview)

このフォルダ内のsandboxファイルを編集します。スクリーンショットの通り、この設定ファイルを開いてください！

![](https://screensaver01.zap-hosting.com/index.php/s/bKrCK6LcCMbkwbb/preview)

## Modを追加する

設定ファイルの最後にすでにMod用のエリアがあります。マウスでその部分を選択して削除し、以下の内容を追加します：

`<Mods></Mods>`

内容を挿入したら、"&gt;" と "&lt;" の間にカーソルを置いてENTERを押します。これで正しい構文が自動で整い、続けられます。

![](https://screensaver01.zap-hosting.com/index.php/s/JbTqfX455XbffRs/preview)

次に最初のModを追加します。Modは「ModItem」で構成されます。以下の内容をコピーして、GIFのように設定ファイルに貼り付けましょう：

```xml
	<ModItem>
		<Name>12345.sbm</Name>
		<PublishedFileId>12345</PublishedFileId>
		<PublishedServiceName>Steam</PublishedServiceName>
	</ModItem>
```

![](https://screensaver01.zap-hosting.com/index.php/s/FkgJmMTBAp8SLzp/preview)

:::info
ここで「12345」は選んだModのIDに置き換えてください！
:::

GIFのように、追加したいMod分だけ同じ手順を繰り返します。すべてのModを追加し終えたら、**CTRL+S**で保存してファイルを閉じます。その後サーバーを通常通り起動すれば、Modが自動でインストールされます。

<InlineVoucher />