---
id: vrising-plugins-bepinex
title: "V Rising: サーバーにプラグインをインストールする方法（BepInEx）"
description: "BepInExモッズでV Risingのプレイをもっと楽しく！サーバーのカスタマイズも自由自在 → 今すぐチェック"
sidebar_label: プラグインのインストール（BepInEx）
services:
  - gameserver-vrising
---

import InlineVoucher from '@site/src/components/InlineVoucher';



:::warning アーカイブ済みガイド
このドキュメントはアーカイブされています。内容が古い、正確でない、または現在の状況に合わなくなった場合にアーカイブされます。今回のアーカイブ理由は以下の通りです：

**理由**: V RisingのBepInEx対応版は現在動作しなくなっており、ショップからも削除されています。 
::::

## はじめに
BepInExは人気の高いオープンソースのプラグイン＆モッディングフレームワークで、公式にモッズ対応していないゲームにもモッズを導入できるようにします。このガイドでは、V RisingでBepInExを使ってプラグインをインストールする方法を紹介します。
<InlineVoucher />

## BepInEx対応ゲームバージョン

V Risingで**BepInEx**対応プラグインを使うには、まずサーバーに**V Rising BepInEx**対応ゲームバージョンをインストールする必要があります。これは当社のゲームサーバーのゲーム切り替え機能を使えば簡単にできます。詳しくは[ゲーム切り替え](gameserver-gameswitch.md)ガイドをチェックしてみてください。

## プラグインのアップロード

まずはBepInEx対応のモッズを探して、サーバーに追加したいものを見つけましょう。通常、プラグインのダウンロードページに対応情報が記載されています。

:::important
プラグインは必ず**BepInEx**対応のものを使ってください。対応していないと動作しません！
:::

モッドが用意できたら、FTPでゲームサーバーに接続します。FTP接続方法は[FTPアクセス](gameserver-ftpaccess.md)ガイドを参考にしてください。

FTPクライアントで以下のディレクトリに移動します：
```
../vrising/BepInEx/plugins
```

ここにダウンロードしたモッズ（通常は`.dll`ファイル）をアップロードします。例として、コマンド作成に便利なフレームワークモッドをアップロードしています。

:::note
モッドの追加や編集をする際は、必ずサーバーを停止してください。起動中だと変更が反映されないことがあります。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/9xkrPmPMp7YZYWQ/preview)

## サーバーの起動

プラグインのアップロードが完了したら、サーバーを再起動しましょう。

:::info
一部のプラグインは、PC側のクライアントにもインストールが必要な場合があります。プラグインの公式サイトで確認してください。
:::

これでV Risingのゲームサーバーに新しいBepInExプラグインを無事インストールできました！

<InlineVoucher />