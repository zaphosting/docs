---
id: satisfactory-addmods
title: "Satisfactory：Modのインストール"
description: "Satisfactoryサーバーでセーブデータを守りながら安全にModを管理・インストールする方法 → 今すぐチェック"
sidebar_label: Modのインストール
services:
  - gameserver-satisfactory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::danger
**重要**

現在、Modsは動作していません！
:::

:::info
**注意**

Modsは開発元から**公式サポートされていません**が、容認されています！

最悪の場合、Modのインストールでセーブデータが破損したり、アップデートで一時的にプレイ不可になったり、完全に破壊されることもあります！

Modをインストールする**前に必ずバックアップを作成**し、念のため定期的にバックアップも取るようにしましょう！
:::

<InlineVoucher />

## サーバーにMod付きSatisfactoryをインストールする

サーバーにModをインストールするには、まずModded Satisfactoryサーバーを注文する必要があります：https://zap-hosting.com/en/satisfactory-server-hosting/
すでにSatisfactoryサーバーをレンタルしている場合でも、[ゲーム変更](gameserver-gameswitch.md)のクラウドシステムを使っていつでもゲームを切り替え可能です。

## Modマネージャーをインストールする

「SatisfactoryModManager」というツールを使うと、Modの管理やインストールが超簡単にできちゃいます。数クリックで完了！
WindowsとLinuxに対応していて、こちらからダウンロード可能：https://github.com/satisfactorymodding/SatisfactoryModManager/releases

リンク先ページに全バージョンが載ってますが、基本的には一番上の最新バージョンを使いましょう。
「Assets」からOSに合ったファイルをクリックすると自動でダウンロードが始まるか、ブラウザや設定によっては確認が出ます。

![](https://screensaver01.zap-hosting.com/index.php/s/e7q5qCBP7D4ZL5g/preview)

ダウンロードが終わったらファイルを実行して、インストール時に好きなオプションを選んでPCにModマネージャーを入れましょう。

## Modをインストールする

クライアント（プレイヤー全員）とサーバーに**同じModを1:1でインストール**しないと接続できず、クラッシュの原因になります。
まずはクライアントにModをまとめてインストールし、その後サーバーに転送します。

:::info
**警告**

すべてのModがマルチプレイヤー対応とは限りません！

マルチプレイヤー対応のModは、通常Modの説明に明記されています。

ただし、対応と書いてあっても100%保証ではないので注意してください！
:::

### クライアント

Modはプロファイルごとに保存されるので、テスト用のワールドで別のModを試したり、ワンクリックで通常のModに戻したりできます。
まずはプロファイルを選ぶか、新規作成しましょう（スクショ参照）。

![](https://screensaver01.zap-hosting.com/index.php/s/EMFsKnrsowZAxJE/preview)

フィルターを「Compatible」に設定すると、現在のバージョンに対応しているModだけが表示されます。

![](https://screensaver01.zap-hosting.com/index.php/s/jg82aG3ketFxesD/preview)

マルチプレイヤー対応が確認できたModは、ダウンロードアイコンをクリックするだけで簡単にインストール可能です。

![](https://screensaver01.zap-hosting.com/index.php/s/CH2pBzS8iXxEpRz/preview)

### サーバー

クライアントに必要なModをすべてインストールし、マルチプレイヤー対応を確認したら、次はサーバーにModを入れます。
変更の転送でトラブルが起きないよう、サーバーは必ず停止してから作業してください！

FTPでサーバーに接続し、Modをアップロードします。
FTP接続については[FTPアクセス](gameserver-ftpaccess.md)で詳しく解説しています。
接続後、以下のフォルダを開きます：`/gXXXX/modded-satisfactory/FactoryGame/Mods`

次に、PCのSatisfactoryのローカルフォルダを開きます。
Steam版とEpic Games版で開き方が少し違うので、下のタブから該当する方をチェックしてください。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="Steam" label="Steam" default>
Steam版の場合は、Steamクライアントから直接フォルダを開けます：

![](https://screensaver01.zap-hosting.com/index.php/s/ryEKHqEQFDBkkME/preview)

</TabItem>
<TabItem value="Epic Games" label="Epic Games">
Epic Games版はインストールフォルダを開くボタンがないので手動で開きます。
Windowsエクスプローラーを開き、Epic Gamesをインストールしたフォルダに移動してください。
通常はここです：`C:\Program Files\Epic Games\SatisfactoryEarlyAccess`

</TabItem>
</Tabs>

クライアントでModマネージャーを使ってインストールしたModをFTPでアップロードします。
Mod本体にアクセスするには、`FactoryGame -> Mods`フォルダを順に開きます。

CTRLキーを押しながらクリックして、**SMLフォルダ以外のすべてのフォルダ**を選択します。

![](https://screensaver01.zap-hosting.com/index.php/s/jCNjLHiF3JRgB24/preview)

選択したフォルダをFTPのModフォルダにドラッグ＆ドロップでアップロードしましょう。

## サーバーを起動する

Modのアップロードが終わったら、ウェブのコントロールパネルからサーバーを起動するだけ。
これでサーバーに参加できるはずです。詳しくは[サーバーへの接続](satisfactory-connect.md)ガイドをチェック！

<InlineVoucher />