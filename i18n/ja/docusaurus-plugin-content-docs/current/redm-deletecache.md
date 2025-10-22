---
id: redm-deletecache
title: "RedM：キャッシュの削除"
description: "RedMサーバーのキャッシュをクリアしてパフォーマンスを向上させ、エラーを解消し、より快適なゲーム体験を実現する方法 → 今すぐチェック"
sidebar_label: キャッシュ削除
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## はじめに

RedMサーバーのキャッシュをクリアすると、一時的に保存されたファイルが削除されます。これにより、次回サーバー起動時に必要なファイルがすべて再ダウンロードまたは再生成されます。古くなったデータや破損したデータを取り除くことで、パフォーマンスの問題、スクリプトエラー、クラッシュ、ゲームワールドの読み込み問題などを解決できます。

<InlineVoucher />

## 簡単な方法

RedMゲームサーバーのキャッシュ削除はとっても簡単です。まずはゲームサーバーのウェブインターフェースにアクセスしてください。ウェブインターフェースの**設定**セクションを見つけて開きます。

![img](https://screensaver01.zap-hosting.com/index.php/s/qAiDSjC7jjmAq5B/download)



次に、ページの一番下までスクロールすると、**アクション**のサブセクションに複数のボタンがあります。ここで**キャッシュファイルを削除**ボタンを押すと、ゲームサーバーのキャッシュがクリアされます。

![img](https://screensaver01.zap-hosting.com/index.php/s/CW8HcxLbNyrw3Qy/download)

:::warning 
この操作はキャッシュファイルをクリアするためにサーバーを即時再起動します。準備ができていることを確認してください。
:::


## 代替方法

まず、FTPでサーバーに接続する必要があります。FTPの使い方に慣れていない場合は、[FTPアクセス](gameserver-ftpaccess.md)ガイドを参考にしてください。次に、キャッシュフォルダを見つけて削除します。以下のパスにアクセスしてください：`/gXXXXXX/redm-txadmin/server-data/cache`

![img](https://screensaver01.zap-hosting.com/index.php/s/BkcqxjZ2dDeeMK2/download)

あとはキャッシュをクリアするだけです。**Cache**フォルダをクリックし、次に**Files**を開きます。**Cache**フォルダ内にあるすべてのフォルダを選択して削除してください。

![img](https://screensaver01.zap-hosting.com/index.php/s/sb9Ttc2gEWwAzRP/download)

最後にRedMサーバーを再起動して変更を反映させましょう。再起動後、サーバーがキャッシュを再生成します。



## まとめ

すべての手順を正しく行えば、サーバーのキャッシュは正常にクリアされています。もし質問やサポートが必要な場合は、いつでもお気軽にサポートチームまでご連絡ください！毎日対応していますよ！🙂

<InlineVoucher />