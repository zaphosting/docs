---
id: minecraft-faultyworld
title: "Minecraft: ワールドから不良チャンクを削除する方法"
description: "Minecraftのチャンクエラーを修正して、壊れたワールド部分を削除しスムーズなプレイを取り戻す方法 → 今すぐチェック"
sidebar_label: 不良ワールド（チャンク）
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

ワールドの一部が過負荷やバグで正常に動作せず、まともにプレイできない？これは特定のエリアにアイテムが多すぎたり、そもそも壊れたチャンクが含まれている場合に起こります。チャンクエラーはMinecraftでよくある不具合の一つで、チャンクが正しく読み込まれないと発生します。

![img](https://screensaver01.zap-hosting.com/index.php/s/A5bj6posqkTfGK8/preview)

## 準備

Minecraftのワールドを編集できるツールはいくつかありますが、ここでは最もポピュラーな[ MCA Selector](https://github.com/Querz/mcaselector)を使います。まずは`MCA_Selector_Setup.exe`をダウンロードしてください。

それから、ワールドのファイルを自分のPCに用意する必要があります。ワールドはFTP経由でダウンロード可能です。FTPの使い方がわからない場合は、[FTPアクセス](gameserver-ftpaccess.md)ガイドを参考にしてください。ゲームサーバーのディレクトリから`world`フォルダをダウンロードしましょう。

## ワールドの読み込み

ツールとワールドを用意したら、ツールにワールドをインポートします。ツールのメニューから`File -> Open World`をクリックしてください。すると、例のようにワールドが表示されるはずです。

:::info
座標によっては、マウスでズームアウトして該当エリアを探す必要があります。
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/eGY45mKdd4ZEwW4/download)

## チャンクの削除

マウスクリックで個別のチャンク（ボックス）を選択できます。問題のあるチャンクを探して選択し、メニューの`Selection -> Delete selected Chunks`をクリックしてください。

![img](https://screensaver01.zap-hosting.com/index.php/s/HDCAEX3iWyjjXQm/download)

これで選択したチャンクが削除されました。あとはFTPでワールドをサーバーにアップロードし直せばOKです。

## まとめ

おめでとうございます！不良チャンクを無事に削除できたので、また快適にこのワールドで遊べるはずです。もし質問やサポートが必要なら、毎日対応しているサポートチームまで気軽にお問い合わせくださいね！🙂

<InlineVoucher />