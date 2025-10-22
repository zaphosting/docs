---
id: unturned-firstthirdperson
title: "Unturned：サーバーの1人称/3人称視点設定"
description: "Unturnedサーバーのプレイヤー視点を1人称、3人称、または両方にカスタマイズしてゲームプレイを強化する方法をチェック → 今すぐ詳しく見る"
sidebar_label: 1人称/3人称視点
services:
  - gameserver-unturned
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## 1人称 / 3人称視点

Unturnedではサーバーの視点を変更することができます。1人称視点と3人称視点のどちらかを選べます。デフォルトでは1人称視点でプレイされますが、バージョン3.9.9.0以降はこれを変更可能です。以下でサーバーでの設定方法を解説します。



## 設定方法

変更は**Commands.dat**の設定ファイルで行います。これは**WebインターフェースのConfigs内**にあります。視点の設定に応じて、以下のコマンドを設定ファイルに追加してください：

![](https://screensaver01.zap-hosting.com/index.php/s/9mZyJKX6xCTeDeA/preview)



### 1人称視点（デフォルト）：

このオプションはデフォルトで有効になっており、コマンドがまだ設定ファイルに追加されていなくても動作します。ただし、完全性のためにこのコマンドを追加しても問題ありません。コマンドは以下のようになります：

```
perspective first
```



### 3人称視点：

1人称の代わりに3人称視点を使いたい場合は、こちらのコマンドを設定してください：

```
perspective third
```



### 両方の視点：

両方の視点を同時に使うことも可能です。この場合はコマンドの値を調整するだけです。コマンドは以下のようになります：

```
perspective both
```



サーバーを次回起動したときに、設定した視点が有効になります！

<InlineVoucher />