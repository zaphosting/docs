---
id: 7d2d-mods
title: "7 Days to Die：MODのインストール方法"
description: "人気のMODでサーバーをカスタマイズして、ユニークなプレイ体験を楽しもう → 今すぐチェック"
sidebar_label: MODのインストール
services:
  - gameserver-7d2d
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

MODを使えば、サーバーをもっと自由にカスタマイズできるよ。ここでは人気のサーバーMODの探し方と設定方法を解説するね。Alpha 17 Experimentalからは「modlets」という仕組みが導入されたよ。modletsはバニラのXMLファイルを上書きせず、modsフォルダから読み込まれる小さめのMODのことだよ。

![](https://screensaver01.zap-hosting.com/index.php/s/McQLetfwmEMbo6N/preview)

<InlineVoucher />

## 準備

まずはサーバーに入れたいMODをダウンロードしよう。たくさんのMODは[7daystodiemods.com](https://7daystodiemods.com/)で見つかるよ。1000以上のMODがあって、どんどん追加されてるんだ。MODをダウンロードすると、以下のようなファイル構成になっているはずだよ：

```
  Config/
  ItemIcons/
  Resources/
  ModInfo.xml
```

## インストール

MODをダウンロードしたら、いよいよインストールだ。MODのセットアップはFTP経由で行うよ。サーバーにファイルをアップロードするにはFTPクライアントが必要だよ。FTPがわからない人は、こちらのガイドをチェックしてね：[FTPアクセス方法](gameserver-ftpaccess.md)

![](https://screensaver01.zap-hosting.com/index.php/s/9Q86iArComw55cH/preview)

``/gXXXXX4/7dtd-linux-exp/`` フォルダの中に **Mods** という名前のフォルダを作成しよう。右クリックして **ディレクトリを作成** を選べばOK。

![](https://screensaver01.zap-hosting.com/index.php/s/RE2n6WodsWq38Pr/preview)

あとはMODのファイルをModsフォルダにアップロードするだけ！

![](https://screensaver01.zap-hosting.com/index.php/s/WjNY5tMnAt7jfga/preview)

これでMODのインストールは完了。次回サーバーを起動すると、自動的にMODが読み込まれるよ。

<InlineVoucher />