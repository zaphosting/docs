---
id: satisfactory-switchexperimental
title: "Satisfactory: 実験的ビルド"
description: "Satisfactoryの実験的ビルドを使って主要アップデートをいち早く体験し、ゲームプレイを強化するメリットとリスクをチェック → 今すぐ詳しく知ろう"
sidebar_label: 実験的ビルド
services:
  - gameserver-satisfactory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 実験的ビルドって何？
Satisfactoryには通常ビルドと実験的ビルドの2種類があります。通常ビルドはより安定していてバグも少なく、完成度の高いビルドです。一方、実験的ビルドは主要なパッチをいち早く試せるビルドで、バグが多い可能性があり更新も頻繁ですが、最新アップデートを真っ先に体験できるメリットがあります！

:::info
注意：どちらのビルドを選んでも、ゲームサーバーとゲームクライアントの両方が同じビルドバージョンでないと接続できません。
:::

<InlineVoucher />

## 実験的ビルドへの切り替え方法
当社のゲームサーバーシステムでは、ウェブサイトからサーバーのビルドを簡単に変更できます。始める前に、Satisfactoryのセーブデータをバックアップすることをおすすめします。ビルドを切り替えるとファイルがすべて消去されるためです。

### セーブデータのバックアップ
ゲームサーバー全体やセーブデータのバックアップはとても簡単です。Satisfactoryの製品ページにアクセスし、`ツール -> バックアップ`タブを開きましょう。

![Screenshot 2023-02-21 192618](https://screensaver01.zap-hosting.com/index.php/s/sMA9kQxoLoozsPa/preview)

このページでは自動バックアップなど様々な機能が利用でき、詳しくは[バックアップ](gameserver-backups.md)で解説しています。ここでは手動バックアップにフォーカスします。

ページ上部の緑色の+アイコンを押し、表示される確認画面で承認すると、ゲームサーバー全体のバックアップがZAPのバックアップストレージに保存されます。

![Screenshot 2023-02-21 193113](https://screensaver01.zap-hosting.com/index.php/s/Gf2XRLzz46WNHHE/preview)

バックアップが作成されると、FTP経由でアクセス可能です。詳しくは[FTPアクセス](gameserver-ftpaccess.md)を参照してください。

または、ウェブインターフェースの`セーブゲームマネージャー`から直接セーブデータをダウンロードすることもできます。[セーブゲームマネージャーはこちら](satisfactory-savegame.md)。

### 実験的ゲームサーバーへの切り替え
まず、Satisfactoryの製品ページにアクセスし、`設定 -> ゲーム`タブを開きます。

![Screenshot 2023-02-21 191212](https://screensaver01.zap-hosting.com/index.php/s/nyksz8LjPtRGq4w/preview)

`インストール済みゲーム`セクションに、すでにインストールされているゲームが表示されます。以前にビルドを切り替えたことがあればここに表示されているので、最後のステップでゲームを有効化できます。

次に下にスクロールして`利用可能なゲーム`のドロップダウンメニューを開き、検索ボックスに「Satisfactory」と入力します。

![Screenshot 2023-02-21 191713](https://screensaver01.zap-hosting.com/index.php/s/CPein9Qctkwp8Yd/preview)

緑色のダウンロードボタンを押し、表示される確認画面でセットアップを承認すると、指定したサーバービルドのダウンロードが始まります。

![Screenshot 2023-02-21 191956](https://screensaver01.zap-hosting.com/index.php/s/C3zwiXf9THNpdDk/preview)

> ダウンロードには数分かかる場合があります。完了するまで待ってから次のステップに進んでください。

これで両方のバージョンが`インストール済みゲーム`に表示され、切り替えが簡単になります。

最後に、`インストール済みゲーム`セクションでゲームを有効化します。青い「ゲームを有効化」アイコンを押してください。

:::info
注意：再インストール時にゲームのデータはすべて削除されます。まだバックアップをしていない場合は、必ず戻ってバックアップを行ってください。
:::

![Screenshot 2023-02-22 020606](https://screensaver01.zap-hosting.com/index.php/s/nmJ56coL946CNBG/preview)

通常ビルドに戻したい場合は、同じ手順で選択時に通常のSatisfactoryゲームサーバーを選べばOKです！

## ゲームクライアントを実験的ビルドに切り替える方法
:::info
注意：どちらのビルドを選んでも、ゲームサーバーとゲームクライアントの両方が同じビルドバージョンでないと接続できません。
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="Steam" label="Steam" default>
まずSteamを開き、ライブラリから「Satisfactory」を探します。右クリックしてプロパティメニューを開きましょう。

![Screenshot 2023-02-21 203108](https://screensaver01.zap-hosting.com/index.php/s/3iqTTQNQdNpX976/preview)

新しいメニューの中の`ベータ`タブに移動し、`experimental`を選択します。

![Screenshot 2023-02-21 203435](https://screensaver01.zap-hosting.com/index.php/s/PnMTyGWqWd78iZa/preview)

これで完了です。Steamが選択したビルドにゲームをアップデートするのを待ってから、ゲームを起動してサーバーを楽しんでください！
</TabItem>
<TabItem value="Epic Games" label="Epic Games">
Epic Gamesの場合はもっと簡単です。ライブラリにある「Satisfactory Experimental」ゲームを選ぶだけでOK。Epic Gamesランチャーでは両方のビルドが別々にライブラリに表示されます。

これで完了です。Epic Gamesがゲームをダウンロード＆インストールするのを待ってから、ゲームを起動してサーバーを楽しんでください！

</TabItem>
</Tabs>

<InlineVoucher />