---
id: fivem-installels
title: "FiveM: サーバーにELSをインストールする方法"
description: "サーバーでのゲームプレイを強化するために、carmods付きのELS-FiveMをセットアップして有効化する方法をチェック → 今すぐ詳しく見る"
sidebar_label: ELSのインストール
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## FTPに接続する

リソースをインストールするには、[FTPアクセスの設定](gameserver-ftpaccess.md)が必要です。

## 準備

まずは最新の[ELS-FiveMバージョン](https://github.com/MrDaGree/ELS-FiveM/releases/latest)を「Assets」からダウンロードしましょう。

ダウンロードしたらファイルを解凍し、「ELS-FiveM」フォルダを開きます。

## 設定

次に、`vcf.default.lua`をコピーして`vcf.lua`にリネームし、ELS-FiveMを設定します。

:::info
注意: 古い`vcf.default.lua`は削除しないでください。
:::

その他の設定は「config.lua」で調整可能ですが、今回はデフォルトのままにします。

## リソースのアップロード

ファイルをドラッグ＆ドロップで「resources」フォルダにアップロードして、ELS-FiveMをインストールします。

アップロードが完了したら、server-dataフォルダ内のserver.cfgを開きます：

![](https://screensaver01.zap-hosting.com/index.php/s/6AfsTS6wyy9REFB/preview)

他のリソースの起動エントリーに加えて、ELS-FiveMのエントリーを追加しましょう。

その後、サーバーを再起動すればゲーム内でELS-FiveMが使えるようになります！

## Carmodsの設定

新しいcarmodsをELS-FiveMに追加するには、まずダウンロードしたcarmodのフォルダにあるELS設定ファイルが必要です。通常は`autoname.xml`という名前ですが、今回は`scpdvic.xml`です。

これらをFTPでELS-FiveMフォルダ内の「vcf」フォルダにアップロードします。

ファイルをアップロードしたら、ELS-FiveMフォルダ内の`vcf.lua`ファイルを開きます。

:::info
前の行が必ずカンマで終わっていることを確認してください。
:::

これで完了！サーバーを再起動すれば、CarmodがELS対応で機能するはずです。

<InlineVoucher />