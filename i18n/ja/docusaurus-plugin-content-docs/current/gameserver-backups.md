---
id: gameserver-backups
title: 'ゲームサーバー：バックアップの作成、ダウンロード、インポート'
description: "ゲームサーバーのデータを守るために、手動または自動バックアップの作成と復元を簡単に行う方法をチェック → 今すぐ詳しく見る"
sidebar_label: バックアップ
services:
  - gameserver
  - premium-storage
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
クリックひとつで個別バックアップを作成できる機能を提供しています。これにより、簡単かつ手間なくバックアップを作成し、いつでもインポート可能です。この機能はゲームサーバーのサーバーファイルだけでなく、関連するデータベースにも対応しています。すべてのバックアップはお客様のストレージサーバーに保存され、デフォルトで10GBの無料ストレージが付いています。もっと必要な場合は、プレミアムストレージへのアップグレードも可能です。

手動でバックアップを作成するだけでなく、自動でバックアップを作成することもできます。バックアップは指定した時間に毎日または毎週作成可能です。バックアップを復元すると、その時点の状態にサーバーが戻ります。

<YouTube videoId="yUDAcfyDELc" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/CTWHD2Lq4QqFWQw/preview" title="サーバーのバックアップ作成方法！" description="実際に動いているところを見ると理解しやすい？そんなあなたにピッタリ！忙しい時も、じっくり情報を吸収したい時も、この動画でわかりやすく解説します！"/>

<InlineVoucher />

## 手動でバックアップを作成する

バックアップ一覧の横にある緑色の **+** ボタンを押すと、手動でバックアップを作成できます。バックアップ作成がすぐに始まります。

:::info
バックアップ作成はサーバーのファイルサイズによっては数分かかることがあります！
:::

## 自動でバックアップを作成する

ページ下部に自動バックアップの設定など、さらにオプションがあります。機能を有効にするには、**自動でバックアップを作成** のオプションをオンにしてください。さらに、バックアップの間隔も設定が必要です。

![](https://screensaver01.zap-hosting.com/index.php/s/gB9n6JspdNW73bj/preview)

ゲームによっては、スコアや権限など重要なデータがデータベースに保存されていることが多いので、データベースのバックアップも一緒に取るのがおすすめです。

>⚠️ 定期的なバックアップ作成には十分なストレージ容量が必須です。常に十分な空き容量を確保してください。 

## バックアップのダウンロード／削除

バックアップをダウンロードまたは削除したい場合は、FTPでストレージサーバーに接続する必要があります。FTPの使い方はこちらのガイドを参照してください：[FTPアクセス方法](gameserver-ftpaccess.md)

![](https://screensaver01.zap-hosting.com/index.php/s/tfJoBpaELEPKMij/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/q3E8XTX8gRQoasY/preview)

ここでストレージサーバーのユーザー情報や現在使用中のストレージ容量を確認できます。FTP接続後は、バックアップのダウンロードや削除が可能です。

<InlineVoucher />