---
id: terraria-tmodloader-installmod
title: "Terraria: Modのインストール（tModLoader）"
description: "Terrariaのプレイ体験をアップグレード！tModLoaderのModを簡単にインストール＆有効化する方法をチェック → 今すぐ詳しく見る"
sidebar_label: Modのインストール（tModLoader）
services:
  - gameserver-terraria
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## tModLoaderを使ったModのインストール

Terraria用のtModLoaderは、TerrariaサーバーにModを読み込ませるための超重要な改造ツールです。インストールはドラッグ＆ドロップでサクッとできて、サーバー側でのちょっとした設定だけでOK。だからめっちゃ簡単で数分で完了しますよ！


## PCへのtModLoaderインストール方法

まだtModLoaderをインストールしていないなら、Steamから無料でダウンロードできます。Steamストアで「tModLoader」を検索するか、こちらのリンクからどうぞ：[SteamストアのtModLoader](https://store.steampowered.com/app/1281930/tModLoader/)

ダウンロード＆インストール後は、Steamから直接tModLoaderを起動できます。

## PCでのMod追加方法

メインメニューに入ったら、**Mods**をクリックして、次に**Manage Mods**、そして**Open Mod Folder**をクリックしてModフォルダを開きます：

![](https://screensaver01.zap-hosting.com/index.php/s/KYXqfC3oaFeti3t/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/sPbWCz9KiY6n9dN/preview)

開いたフォルダはデフォルトで **C:\Users\UserName\Documents\My Games\Terraria\ModLoader\Mods** にあります。ここに好きなModを入れましょう。
今回は例としてCalamity-Modをインストールします。

![](https://screensaver01.zap-hosting.com/index.php/s/bbXjf6JpMKC6jzq/preview)

:::info
Modファイルは必ず **.tmod** という拡張子で終わっている必要があります。そうでないとサーバーで読み込めません！
:::

フォルダを閉じて、ゲーム内で**Back**をクリックし、次に**Mods**をクリック：

![](https://screensaver01.zap-hosting.com/index.php/s/95y5k6AfobCJJed/preview)

追加したModが表示されるので、**Disabled**をクリックして有効化しましょう：

![](https://screensaver01.zap-hosting.com/index.php/s/dCbgnKbeWkr2JeY/preview)

Modを有効にするには**Reload Mods**をクリック。その後ゲームを閉じて、サーバーにModをインストールする準備完了です。


## サーバーへのModインストール方法

サーバーにModをインストールするには、FTPでサーバーに接続します。やり方はここでチェック：[FTPアクセス](gameserver-ftpaccess.md)

FTPで以下のディレクトリに移動します：/g******/terraria/mods/ ここに先ほど使った **.tmod** ファイルをアップロードしてください：

![](https://screensaver01.zap-hosting.com/index.php/s/7NtFqes4g9JfQLW/preview)

:::info
**enabled.json** というファイルがなければ、一度サーバーを起動してください。そうすれば自動で生成されます。もしくは自分で作成してもOKです。
:::

**enabled.json** ファイルを右クリック > 編集で開き、そこに有効にしたいModの名前を追加します。こんな感じ：

![](https://screensaver01.zap-hosting.com/index.php/s/FECRXyNGsNNwadd/preview)

複数のModを入れたい場合は、こんな風にカンマ区切りで追加してください：

![](https://screensaver01.zap-hosting.com/index.php/s/dtSqazRiH6zBRqD/preview)

:::info
最後のMod名以外は必ずカンマを入れてくださいね！
:::

FTP接続を閉じて、サーバーを起動。SteamからダウンロードしたtModLoaderでサーバーに接続しましょう。

**ESC**キーを押して、**Settings** > **Mod Configuration**をクリックすると、サーバーに読み込まれたModが確認できます：

<InlineVoucher />