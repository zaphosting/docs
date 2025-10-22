---
id: factorio-mods
title: "Factorio: FactorioサーバーへのMod/DLCのインストール"
description: "DLCを有効化し、Modを追加してFactorioのプレイ体験をカスタマイズする方法をチェックしよう → 今すぐ詳しく見る"
sidebar_label: Mod/DLCのインストール
services:
  - gameserver-factorio
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/factorio-mods.json';

## はじめに

FactorioはネイティブでMod対応しているので、購入したゲームDLCに加えて、さまざまなModをゲームやゲームサーバーに簡単に追加できます。このガイドでは、DLCの有効化とクライアントおよびFactorioサーバーへのModのインストール方法を解説します。

<InlineVoucher />

## 準備

[公式Factorio Mods](https://mods.factorio.com/)のサイトにアクセスしてModを探せます。このサイトにはコミュニティが作成した無料のModが豊富に揃っていて、さまざまなカテゴリから選べます。

:::tip
ダウンロードするModが、あなたのFactorioサーバーのバージョンに対応しているか必ず確認してね。
:::

## DLCの有効化

Factorio 2.0アップデートで初のDLC「Space Age」が登場しました。これに合わせて、ウェブインターフェースのパネルにDLCの有効化を切り替えられる新しい設定オプションが追加されました。

<YouTube videoId="i9CuAsCxUsk" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/BRa5saY3L76xe5F/preview" title="Factorio Space Age DLCの有効化" description="実際の動きを見たほうが理解しやすい？そんなあなたに！動画でわかりやすく解説。急いでる時も、じっくり情報を吸収したい時もバッチリ！"/>

あなたの製品のウェブインターフェースパネルにアクセスし、**設定**セクションを開いてください。下にスクロールすると、デフォルトで有効になっているはずの**Space Age DLC**オプションが見つかります。

![](https://screensaver01.zap-hosting.com/index.php/s/T5G5GrEzwoxM3Xk/preview)

この機能を切り替え、ページ下部の緑色の**保存**ボタンを押せば、FactorioのDLCが有効になります。

## Modの追加＆アップロード

好きなModをダウンロードしたら、FTP経由でFactorioサーバーにアップロードする必要があります。接続方法は[FTPアクセス](gameserver-ftpaccess.md)ガイドを参考にしてください。

:::note
Modの追加や編集を行う際は、必ずサーバーを停止してください。停止しないと変更が反映されないことがあります。
:::

準備ができたら、以下のディレクトリにダウンロードした`.zip`形式のModをアップロードしましょう。

```
../factorio/saves/mods
```

![](https://screensaver01.zap-hosting.com/index.php/s/APFEnmg29jBCFKn/preview)

:::tip
Modを使うときは、クライアントとサーバーでModの同期が必要です。Factorioはこれをすごく簡単にしてくれます。Modを調整した後、初めてサーバーに接続すると、自動でModの同期を促す画面が出ますよ。
:::

最後にサーバーを再起動すれば、Modが自動的に有効化・インストールされます。もしサーバーが自動でシャットダウンするなどのエラーが出たら、ウェブインターフェースの**情報 -> イベントログ**をチェックしてみてください。バージョンの不一致が原因のことが多いです。

## 人気のMod

まだサーバーにピッタリのModが見つかってない？ここでは人気でおすすめのModを厳選して紹介しています。ゲームプレイをさらに楽しくして、サーバーに最高の仕上げを加えよう。インスピレーションを得て、あなたのプロジェクトにぴったりのModを見つけてね。

<SearchableItemList items={items} />

## まとめ

おめでとう！FactorioサーバーにModを無事インストールできました。質問やサポートが必要なときは、いつでも気軽にサポートチームに連絡してくださいね。毎日対応してますよ！🙂

<InlineVoucher />