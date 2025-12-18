---
id: valheim-plugins-bepinex
title: "Valheim：サーバーにプラグインをインストールする方法（BepInEx）"
description: "BepInExプラグインでValheimのプレイ体験をアップグレードし、新しいモッディングの可能性を広げよう → 今すぐチェック！"
sidebar_label: プラグインのインストール（BepInEx）
services:
  - gameserver-valheim
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/valheim-plugins.json';

## はじめに
BepInExは、公式にモッディングがサポートされていないゲームにもモッドを追加できる、超人気のオープンソースプラグイン＆モッディングフレームワークです。このガイドでは、ValheimでBepInExを使ってプラグインをインストールする方法を紹介します。

<InlineVoucher />

## BepInEx対応ゲームバージョン

Valheimで**BepInEx**対応プラグインを使うには、まずサーバーに**Valheim Plus**のゲームバージョンをインストールする必要があります。単体の**Valheim BepInEx**バージョンもありますが、Valheim Plusには必要なものが全部入っているので、そちらの利用をおすすめします。ゲームサーバーのゲーム切り替え機能を使えば簡単に切り替え可能です。詳しくは[ゲーム切り替えガイド](gameserver-gameswitch.md)をチェック！

:::info
Valheim PlusはPCにもローカルインストールが必要です。ダウンロードはこちらから：[Valheim Plus ダウンロード](https://www.nexusmods.com/valheim/mods/4)
:::

## プラグインのアップロード

まずはBepInEx対応のモッドを探して、サーバーに追加したいものを見つけましょう。プラグインのダウンロードページに対応情報が書かれていることが多いです。

:::important
プラグインは必ず**BepInEx対応**のものを使ってください。対応していないと動作しません！
:::

モッドが用意できたら、FTPでゲームサーバーに接続します。FTP接続方法は[FTPアクセスガイド](gameserver-ftpaccess.md)を参考にしてください。

FTPクライアントで以下のディレクトリに移動します：
```
../valheim-linux-plus/BepInEx/plugins
```

ここにダウンロードしたモッド（通常は`.dll`ファイル）をアップロードしてください。

:::note
サーバーはモッドの追加・編集時に必ず停止してください。起動中だと変更が反映されないことがあります。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/d8gTeFiGXTsxHwz/preview)

## サーバーの起動

プラグインをアップロードしたら、サーバーを再起動するだけでOKです。

:::info
一部のプラグインはPC側にもクライアント用のインストールが必要な場合があります。プラグインの公式サイトの情報を必ず確認してください。
:::

これでValheimゲームサーバーに新しいBepInExプラグインが無事インストールされました！

## 人気プラグイン

まだサーバーにぴったりのプラグインが見つかっていない？

当社が厳選した人気＆おすすめプラグインリストから、ゲームプレイをさらに楽しくするプラグインを探してみよう。サーバーに最高の仕上げを加えるアイデアがきっと見つかるはず！

<SearchableItemList items={items} />

<InlineVoucher />