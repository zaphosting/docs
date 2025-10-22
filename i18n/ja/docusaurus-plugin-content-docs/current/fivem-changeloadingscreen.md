---
id: fivem-changeloadingscreen
title: "FiveM：カスタムローディング画面の導入"
description: "FiveMのローディング画面をカスタマイズして、ユニークなプレイヤー体験を作り出し、サーバーの見た目をアップグレードしよう → 今すぐチェック"
sidebar_label: カスタムローディング画面の導入
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## はじめに

デフォルトのFiveMローディング画面ではなく、自分だけのカスタムローディング画面を使いたい？ここではその方法と手順をわかりやすく解説するよ！

<InlineVoucher />



## 準備

カスタムローディング画面を導入するには、まず適切なリソースを見つける必要があるよ。公式の[Cfx.reサイト](https://forum.cfx.re/c/releases/7)にはたくさんのリソースがあるからチェックしてみてね。気に入ったリソースをダウンロードして、パソコンで解凍しよう。

![img](https://screensaver01.zap-hosting.com/index.php/s/zZKWWMWCJPqKonj/preview)



## 導入方法

ローディング画面の導入はFTP経由で行うよ。まずはゲームサーバーにFTPで接続しよう。FTPの使い方がわからない場合は、こちらの[FTPアクセス](gameserver-ftpaccess.md)ガイドを参考にしてね。

FTPで接続したら、リソースフォルダに移動しよう。導入しているフレームワークによって場所は変わるけど、だいたい以下のフォルダ構成の中にあるよ：`/gXXXXXX/fivem/YOUR_FRAMEWORK/resources`

先ほどダウンロードして解凍したリソースのフォルダを、この場所にアップロードしよう。

![img](https://screensaver01.zap-hosting.com/index.php/s/qkYBKoMox94EEWK/download)



ローディング画面のリソースをアップロードできたら、次はサーバーの設定ファイル `server.cfg` に追加する必要があるよ。txAdminのインターフェースにログインして、CFGエディターを開こう。

そして、`start resourcename` コマンドでリソースを起動設定に追加しよう。例えば今回の例なら `start loadingscreen` だね。変更を保存して、サーバーを再起動すればOK。

![img](https://screensaver01.zap-hosting.com/index.php/s/gxniiKj3HmLGeEE/preview)







## まとめ

ここまでの手順をしっかりやれば、次回サーバーを再起動したときに新しいローディング画面が表示されるはず！もしわからないことがあったら、いつでも気軽にサポートチームに連絡してね。毎日対応してるから安心して！🙂

<InlineVoucher />