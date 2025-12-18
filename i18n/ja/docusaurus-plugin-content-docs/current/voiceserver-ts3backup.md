---
id: voiceserver-ts3backup
title: "ボイスサーバー：バックアップの作成、ダウンロード、インポート"
description: "無料ストレージとアップグレードオプションで簡単にバックアップを作成・管理し、安全なデータ保護を実現 → 今すぐ詳しくチェック"
sidebar_label: バックアップ
services:
  - voiceserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

クリックひとつで個別バックアップを作成できる機能を提供しています。これにより、簡単かつ手間なくバックアップを作成し、いつでもインポート可能です。すべてのバックアップはお客様のストレージサーバーに保存され、デフォルトで10GBの無料ストレージが付属しています。もっと容量が必要な場合は、プレミアムストレージへのアップグレードも可能です。

<InlineVoucher />

## バックアップの作成

<Tabs>

<TabItem value="Webinterface" label="TeamSpeak サーバープロダクト" default>

当社のウェブサイトでバックアップを作成するには、ボイスサーバーサービスのウェブインターフェースを開き、管理画面の**スナップショット**に移動してください。そこから緑色の**スナップショットを作成**ボタンをクリックするとバックアップが作成されます。

![img](https://screensaver01.zap-hosting.com/index.php/s/G2EfYtMnqGzrjpC/download)

:::warning 外部バックアップについて
セキュリティ上の理由から、外部バックアップ（スナップショット）のインポートはできません。例外はありません。 
:::

</TabItem>
<TabItem value="self_hosted" label="セルフホスト（VPS/専用サーバー）">

TeamSpeak サーバープロダクトと同様に、GS/TS3インターフェースを使用している場合は、TeamSpeak サーバーサービス管理画面からワンクリックでバックアップ（スナップショット）を作成できます。また、TeamSpeakインスタンス（Query）のログイン情報と外部アプリケーションYatQAを使って手動でバックアップを作成することも可能です。

![](https://screensaver01.zap-hosting.com/index.php/s/GNak6s26sFcX4bA/preview)

YatQAでスナップショットを作成するには、アプリ上部の**Miscellaneous**に移動し、**Create and save snapshot**をクリックしてください。

![](https://screensaver01.zap-hosting.com/index.php/s/CZWZRYSXpCTi4j3/preview)

</TabItem>
</Tabs>

## バックアップのダウンロード

作成したバックアップ（スナップショット）は、FTP経由でストレージサーバーからダウンロード可能です。ログイン情報はストレージサーバーサービスのウェブインターフェースで確認できます。FTPの使い方がわからない場合は、当社の一般的な[FTPアクセス](gameserver-ftpaccess.md)ガイドの利用をおすすめします。

![img](https://screensaver01.zap-hosting.com/index.php/s/NTR5oygagD6M6mY/preview)

![img](https://screensaver01.zap-hosting.com/index.php/s/MiX4GG2zoe5mkSc/preview)

## まとめ

ここまでの手順を踏めば、無事にバックアップが作成できています。もし質問やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にお問い合わせくださいね！🙂

<InlineVoucher />