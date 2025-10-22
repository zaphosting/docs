---
id: fivem-deletecache
title: "FiveM：キャッシュの削除"
description: "FiveMサーバーのキャッシュをクリアしてパフォーマンスを向上させ、エラーを解消し、快適なゲーム体験を実現する方法 → 今すぐチェック"
sidebar_label: キャッシュ削除
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## はじめに

FiveMゲームサーバーのキャッシュをクリアすると、一時的に保存されたファイルが削除されます。これにより、次回サーバー起動時に必要なファイルがすべて再ダウンロードまたは再生成されます。古くなったデータや破損したデータを取り除くことで、パフォーマンスの問題やスクリプトエラー、クラッシュ、ゲームワールドの読み込み問題を解決できます。

<InlineVoucher />

## 簡単な方法

FiveMゲームサーバーのキャッシュ削除はとっても簡単！まずはゲームサーバーのウェブインターフェースにアクセスして、**設定**セクションを開きましょう。



![img](https://screensaver01.zap-hosting.com/index.php/s/nizHMSk7oXCsJS4/download)



次にページの一番下までスクロールすると、**アクション**の項目に複数のボタンがあります。ここで**キャッシュファイルを削除**ボタンを押すと、ゲームサーバーのキャッシュがクリアされます。

![img](https://screensaver01.zap-hosting.com/index.php/s/A2RiTo8gJiTibGR/download)

:::warning 
この操作はキャッシュ削除のためにサーバーを即時再起動するので、準備ができていることを確認してください。
:::


## もう一つの方法

まずはFTPでサーバーに接続する必要があります。FTPの使い方がわからない場合は、[FTPアクセス](gameserver-ftpaccess.md)ガイドをチェックするのがおすすめです。次にキャッシュフォルダを見つけて削除します。パスは `/gXXXXXX/fivem/server-data/cache` です。

![img](https://screensaver01.zap-hosting.com/index.php/s/dfpssTy8KL7B3cK/download)

あとはキャッシュを空にするだけ。**Cache**フォルダを開いて**Files**をクリックし、表示されているすべてのフォルダを選択して削除してください。

![img](https://screensaver01.zap-hosting.com/index.php/s/MnHpWiDmBgHa63B/download)

最後にFiveMサーバーを再起動すれば完了。再起動後にサーバーがキャッシュを再生成します。



## まとめ

すべての手順を踏めば、サーバーのキャッシュは無事クリアされています。もし質問やサポートが必要なら、いつでも気軽にサポートチームに連絡してくださいね！毎日対応しています 🙂 

<InlineVoucher />