---
id: fivem-mods-installaddon
title: "FiveM: サーバーにアドオンカーモッドをインストールする方法"
description: "FiveM用のカーモッドを簡単にダウンロード＆変換してゲーム体験をアップグレードする方法をステップバイステップで解説 → 今すぐチェック！"
sidebar_label: アドオンカーモッドのインストール
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## FTPでサーバーに接続しよう

まずはFTPでサーバーに接続しよう。ZAPの[FTPアクセスガイド](gameserver-ftpaccess.md)を参考にしてね。

## 準備

今回は[rpf2fivem](https://github.com/Avenze/rpf2fivem-repository/releases/latest)というツールを使うよ。これがあれば作業がめっちゃ楽になる！「Releases」セクションから「NConvert.zip」と「rpf2fivem.zip」をダウンロードしよう：

![](https://screensaver01.zap-hosting.com/index.php/s/7o2JCm3SdMz5Gga/preview)

まずはrpf2fivem.zipを空のフォルダに解凍：

![](https://screensaver01.zap-hosting.com/index.php/s/czBs5E82SpPa2Px/preview)

次にNConvert.zipを開いて、「NConvert」フォルダを先ほどのフォルダにコピーしよう：

![](https://screensaver01.zap-hosting.com/index.php/s/8qNGTCMLjgZNTbK/preview)

これで`rpf2fivem.exe`を起動できるよ！


## モッドのダウンロード

rpf2fivemでモッドをインストールするには、直接リンクを追加する必要があるよ。例えばgta5-mods.comから好きなカーモッドを選んで「Download」をクリック。

ダウンロードボタンを右クリックして「リンクのアドレスをコピー」を選択し、それをrpf2fivemの左上にペーストしよう：

![](https://screensaver01.zap-hosting.com/index.php/s/T6ksM4qmfodiy8s/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/cdNmSztB69TN74T/preview)

ここで好きなリソース名を入力して「Add to queue」を押すよ。

他にもモッドを追加したい場合は同じ手順でどんどんキューに入れられる。複数のカーモッドを同時にインストール可能！


## モッドの変換

モッドリストができたら「Start」ボタンを押そう。

:::info
ポイント：FiveMでカーモッドのテクスチャエラーを防ぐために、「compress/downsize textures」のチェックは必ず入れてね。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/BrFZWJkMaryLrzg/preview)

これでカーモッドがダウンロードされ、FiveM用に変換されるよ。

## リソースのアップロード

rpf2fivemが終わったら、「rpf2fivem」フォルダにカーモッドができているはず：

![](https://screensaver01.zap-hosting.com/index.php/s/yPCK5nwFa9Xscif/preview)

あとは[リソースのインストール](fivem-installresources.md)を使ってアップロードするだけ。rpf2fivemフォルダ内には`servercfg.txt`も作成されていて、そこにカーモッドをserver.cfgに直接追加するための記述があるから、それをコピーしてserver.cfgに貼り付けてね。


これで完了！サーバーを再起動すればカーモッドが使えるようになるよ。

<InlineVoucher />