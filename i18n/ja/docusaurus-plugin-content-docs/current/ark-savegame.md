---
id: ark-savegame
title: ARK Survival Evolved 自分のセーブファイルをインポートする方法
description: "公式または自分のバックアップセーブを使ってArk: Survival Evolvedサーバーを復元し、スムーズなゲームプレイを続ける方法をチェック → 今すぐ詳しく見る"
sidebar_label: セーブファイルのインポート
services:
  - gameserver-ark
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

自分のセーブファイルや公式のバックアップセーブファイルをArk: Survival Evolvedのゲームサーバーにインポートしたい？そんなあなたにピッタリのガイド！ここでは、自分の通常のセーブファイルや公式バックアップセーブファイルを新しいサーバーにインポートする手順をわかりやすく解説します。

<YouTube videoId="lvIIVOhAUjo" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/riyYaWCc4562mTS/preview" title="公式サーバーバックアップでARK:SEサーバーを手に入れる方法" description="実際の動きを見たほうが理解しやすい？そんなあなたのために動画を用意しました！急いでいる時も、じっくり情報を吸収したい時も、最高の方法で解説しています！"/>

<InlineVoucher />

## セーブファイルの準備

### 公式バックアップセーブファイル

まずは公式サーバーのセーブファイルをダウンロードしましょう。これは[ARKの公式サイト](https://survivetheark.com/index.php?/server-backups/)から直接ダウンロード可能です。また、[コミュニティ製のツール](https://arkutils.netlify.app/tools/officialdownload)を使うとサーバー検索が簡単にできて便利です。

:::note
XboxやPlaystationのプレイヤーは、残念ながら公式サーバーファイルをダウンロードできません。開発者はSteamとEpicプラットフォームのワールドセーブのみ自由にダウンロード可能にしています。
:::

2023年8月25日と2023年9月30日にスナップショットが作成されています。どちらかの日付のものから自分のサーバーを見つけてセーブファイルをダウンロードしてください。

:::note
公式バックアップセーブの利用は、**ARK - SE（公式バックアップセーブ対応）**のゲームサーバーバリアントのみ可能です。別のバージョンを使っている場合は、ゲームサーバーのウェブインターフェースの**games**セクションでバージョンを変更するか、[ゲーム変更](gameserver-gameswitch.md)ガイドを参考にしてください。

![](https://screensaver01.zap-hosting.com/index.php/s/Kwjyx4sDSHLTFZJ/preview)
:::

### 自分の通常セーブファイル

自分の通常のセーブファイル（非公式）をインポートする場合は、セーブファイル内のすべてのファイルが必要です。通常は**Shootergame/Saved**ディレクトリ内の**SavedArks**フォルダに保存されています。これらのファイルを探して、インポートのために保存しておきましょう。

:::note
この場合は、通常の**Ark: SE**ゲームサーバーバリアント（公式バックアップセーブ非対応）を使うのがおすすめです。公式ではない通常のセーブファイルをインポートするためです。

![](https://screensaver01.zap-hosting.com/index.php/s/FCMPjApJBjZxdR2/preview)
:::

## セーブファイルをサーバーにアップロードする

.zip形式のセーブファイルをダウンロードしたら、7zipやWinrarなどの解凍ソフトで展開してください。ゲームサーバーの種類やセーブファイルの種類に関わらず、アップロード手順は同じです。

次に、FTPでサーバーにアクセスしてセーブファイルをアップロードします。FTPクライアントのログインやファイル転送方法がわからない場合は、[FTPアクセス](gameserver-ftpaccess.md)ガイドを参考にしてください。

FTPクライアントで接続したら、ゲームサーバー内の以下のサブディレクトリに移動します：
```
/gxxxxx/ark/ShooterGame/Saved/SavedArks
```

![](https://screensaver01.zap-hosting.com/index.php/s/YXFcNPMgtbmRJJj/preview)

現在のセーブファイルのすべてのファイルを削除（または将来プレイしたい場合はバックアップ）し、展開したすべてのファイル（.ark、.arktribe、.arkprofileファイルを含む）をこのディレクトリにドラッグ＆アップロードしてください。アップロードにはセーブファイルのサイズによって時間がかかることがありますので、気長に待ちましょう。

アップロードが完了したらサーバーを再起動してください。新しくアップロードしたファイルが読み込まれ、公式バックアップセーブファイルのアップロードが成功したことになります。

<InlineVoucher />