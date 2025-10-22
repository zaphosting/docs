---
id: rust-decay
title: "Rust: ディケイ（劣化）を変更する方法"
description: "Rustサーバーのディケイ率を調整し、設定を保存してゲームプレイをもっとコントロールしよう → 今すぐチェック"
sidebar_label: ディケイ
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

RCONを使えば、コマンドを直接実行して自分を管理者にすることができるよ。まずは[こちらのRCON接続ガイド](rust-connectrcon.md)を参考にしてね。

:::info
サーバーが完全に起動していないと、RCONで接続できないから注意！
:::

接続できたら、コントロールパネルのコンソールセクションに移動してコマンドを実行しよう。ここでは例として**RustAdmin**を使ってるよ。

ディケイ率は以下のように変更できるよ：

`decay.scale 1.0` は通常のディケイ率<br/>
`decay.scale 0.5` はディケイ率を50%に減らす<br/>
`decay.scale 0` はディケイを完全に無効化する<br/>

例えば、ディケイを完全に無効にしたい場合は、以下のコマンドを実行してね。

```decay.scale 0``` コマンド入力後にEnterを押す。

コンソールタブでコマンドが正常に送信されたか確認できるよ。

![](https://screensaver01.zap-hosting.com/index.php/s/J4HPW5Dee93BDJP/preview)

変更を保存するには、以下のコマンドを一度だけ送信してEnterを押そう。

```server.writecfg```

![](https://screensaver01.zap-hosting.com/index.php/s/kEbCodqYTf8tqKp/preview)

コンソールに `Config Saved` と表示されたら、サーバーが変更を反映した証拠だよ。


<InlineVoucher />