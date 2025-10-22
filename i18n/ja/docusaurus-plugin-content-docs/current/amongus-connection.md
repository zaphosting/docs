---
id: amongus-connection
title: "Among Us：サーバーへの接続方法"
description: "シームレスなマルチプレイのためにAmong Usサーバーの設定と接続方法をチェック → 今すぐ詳しく見る"
sidebar_label: サーバーへの接続
services:
  - gameserver-amongus
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## 準備 - ダウンロード

サーバーに参加するには、接続を可能にするファイルが必要です。
まずは[Impostor](https://impostor.github.io/Impostor/)を開いて、必要な情報を入力しましょう。

ファイルを作成するには、IP、ポート、名前などの情報が必要です。
![](https://screensaver01.zap-hosting.com/index.php/s/bQ7KzTAJcbAsLJd/preview)

ここにZAP-Hostingのインターフェースから取得したデータを入力します。例えばこんな感じ：

![](https://screensaver01.zap-hosting.com/index.php/s/7scfddD5WPFr25b/preview)

31.214.245.215がIPで、2000がポートです。

サーバー名は自由に決められます。すべて入力したら「Download Server File」をクリック。
「regioninfo.json」という名前のファイルがダウンロードされます。

次に `Win` + `R` を押して、

```
%APPDATA%\..\LocalLow\Innersloth\Among Us
```

と入力しEnter。フォルダが開くので、そこにregioninfo.jsonを移動して既存のファイルを上書きしてください。

![](https://screensaver01.zap-hosting.com/index.php/s/KTrfij6ww64DPCq/preview)


## ゲーム内でサーバーを作成

PCでAmong Usを起動。
メインメニューの「online」をクリックし、「Create Game」を選択。

![](https://screensaver01.zap-hosting.com/index.php/s/SfMwr82R9BbDK2P/preview)

ここでサーバーの設定を自由にカスタマイズできます：

![](https://screensaver01.zap-hosting.com/index.php/s/imzCR9WZenyrTSX/preview)

設定が完了したら「confirm」をクリック。
これでサーバーに接続完了です！

ロビーではサーバーを公開（Public）か非公開（Private）に設定可能。
切り替えは「Private」か「Public」のアイコンをクリックするだけ。

サーバーが「Public」なら、他のプレイヤーも同じように接続できます。
彼らはゲームのメインメニューで「Create Game」ではなく「Find Game」を選択。
ここでチャットが「others」に設定されていて、フィルターがサーバーの設定と完全に一致している必要があります。
そうでないとサーバーが表示されません。

「Private」サーバーの場合はメインメニューの「Enter Code」をクリック。
サーバー作成者がロビーで確認できるコードを入力してください。


<InlineVoucher />