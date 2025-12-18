---
id: scpservermod-uploadplugins
title: "SCP Secret Laboratory: サーバーへのプラグインインストール"
description: "SCPサーバー用のSMODプラグインのインストールと設定方法を解説。ゲームプレイやサーバー機能を強化しよう → 今すぐチェック"
sidebar_label: プラグインのインストール
services:
  - gameserver-scp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::warning アーカイブ済みガイド
このドキュメントはアーカイブされています。内容が古い、誤っている、または現在の状況に合わなくなった場合にアーカイブされます。今回の理由は以下の通りです：

理由：SCP用のServermod拡張は開発が終了しており、今後メンテナンスされません。代わりに**[SCP:EXILED](exiled-plugins.md)**への移行をおすすめします。 
::::

<InlineVoucher />

## FTPに接続する

プラグインをインストールする前に、[FTPアクセスの設定](gameserver-ftpaccess.md)を済ませてください。

設定が完了したら、以下のサーバーフォルダに接続して開きます。  
`/g#####/scp/sm_plugins`

![](https://screensaver01.zap-hosting.com/index.php/s/2Fid5MKq57YDCNj/preview)

## プラグインのインストール

### プラグインを探す

まずは、利用可能なSMOD対応プラグインを探しましょう。

一番おすすめなのは、公式の[Discord](https://discord.gg/T9aurNf)です。

:::info
ここだけが唯一の入手先ではありません。他の場所でも見つかることがあります。必ず自分のSMODバージョンに対応しているか確認してください。 
:::

今回は例として、以下のプラグインを入手します。

![](https://screensaver01.zap-hosting.com/index.php/s/bEEQP3cm33fgMFi/preview)

### プラグインのアップロード

欲しいプラグインを入手したら、サーバーのFTPにアップロードします。**sm_pluginsフォルダにドラッグ＆ドロップ**で簡単にアップロード可能です。

![](https://screensaver01.zap-hosting.com/index.php/s/HzRKJXFyENqK4N8/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/kSSMs23E6g4PfwN/preview)

:::info
注意：プラグインをインストールしたら、必ず**サーバーを再起動**して変更を反映させてください。
:::

### プラグインの設定

プラグインによっては、`config_gameplay.txt`に設定を追加する必要があります。

今回の例のプラグインでは、以下の設定が必要です。

![](https://screensaver01.zap-hosting.com/index.php/s/5PrLzeCQaFamGRn/preview)

これらを追加するには、`config_gameplay.txt`を編集します。

左側の**Configs**タブからアクセス可能です。

![](https://screensaver01.zap-hosting.com/index.php/s/mMck39x2mEnLtLY/preview)

次に、**config_gameplay.txt**を選択します。

![](https://screensaver01.zap-hosting.com/index.php/s/SGLpBYM5DAWRRzN/preview)

:::info
設定はどこに書いても動作しますが、ベストプラクティスとして`config_gameplay.txt`の「#Misc gameplay settings」セクションの下に書くのがおすすめです。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/JMK542jpCj472ag/preview)

:::info
注意：プラグインによって設定内容は異なります。必ずプラグインの説明書きを読んで、正しく設定を追加してください。
:::

設定を追加したら、サーバーを再起動（または起動）して、ゲーム内で動作を確認しましょう！

<InlineVoucher />