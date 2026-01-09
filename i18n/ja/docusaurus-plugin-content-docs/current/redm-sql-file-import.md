---
id: redm-sql-file-import
title: "RedM: SQLファイルのインポート"
description: "RedMのデータベースにSQLファイルを正しくインポートして、リソースの機能やデータベース統合を確実にする方法をチェック → 今すぐ詳しく知ろう"
sidebar_label: SQLファイルのインポート
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## RedMのデータベースへのSQLファイルのインポート

多くのRedMリソースは正しく動作するためにデータベースが必要です。だからこそ、リソースに付属しているSQLファイルを正しくデータベースにインポートして、リソースがデータベースにエントリーを作成し、期待通りに機能できるようにすることが重要です。

:::info
すべてのリソースがデータベースを必要とするわけではありません！リソースをダウンロードしたら、説明やドキュメントを確認してSQLファイルのインポートが必要かどうかをチェックしましょう。
:::

多くの場合、リソースのダウンロードファイルには**.sql**拡張子のファイルが1つ以上含まれています。これらをデータベースにインポートする必要があります。

## SQLファイルの準備

ここではRPフレームワークの**RedEM**のSQLファイルをインポートする例を紹介します。インポートしたいリソースのSQLファイルを準備してください。データベースが必要なリソースのフォルダを開き、**.sql**拡張子のファイルを探します。

![](https://screensaver01.zap-hosting.com/index.php/s/QTeYKS3MrXTPi76/preview)

:::info
インポートを進める前に、.sqlファイルをテキストエディタで開き、以下の行が含まれているか確認してください：

![](https://screensaver01.zap-hosting.com/index.php/s/wXLmBpmiwYp3Zzo/preview)

もしこれらが.sqlファイルにある場合は、`CREATE`と`USE`のデータベース指定行を削除してファイルを保存してください。そうしないとSQLファイルはインポートできません。

これは、最初の行が新しいデータベースを作成することを宣言していますが、RedMゲームサーバーにはすでに別名のデータベースがあるため不要だからです。2行目は`essentialmode`という名前のデータベースを使うことを宣言していますが、こちらも既存のデータベースを使うため不要です。
:::

## RedMのデータベースにSQLファイルをインポートする

まずはゲームサーバーのウェブインターフェースの**データベース**セクションにアクセスしましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/mq2JdMmfiaqjtND/preview)

データベースページではバックアップや作成、管理など様々な機能が使えますが、ここではデータベースへのアクセスにフォーカスします。もっと詳しく知りたい場合は他のデータベースガイドもチェックしてみてください：[外部データベースアクセス](gameserver-database-external-access.md)。

青いリダイレクトアイコンを押すと、簡単にデータベースにアクセスできるツール**phpmyadmin**に移動します。ログイン画面が出たら、データベースページに記載されている認証情報でログインしてください。

ページに入ったら、左側のリストからデータベースを選択します。データベース名は**必ず**`zap`で始まるプレフィックスが付いています。

![](https://screensaver01.zap-hosting.com/index.php/s/Qx37APa9233B7zt/preview)

まだ使っていなければデータベースは空の状態です。ここでいよいよ.sqlファイルをインポートします。

phpmyadminの上部ナビゲーションバーにある**インポート**ボタンを押してインポートメニューを開きます。

![](https://screensaver01.zap-hosting.com/index.php/s/McfzS8DraJsXPTZ/preview)

次に**参照...**ボタンを押してファイルエクスプローラーを開き、インポートしたい**.sql**ファイルを選択します。

![](https://screensaver01.zap-hosting.com/index.php/s/Dk2Q2QgHzYEMCsa/preview)

:::note
最大ファイルサイズは2MBです。もしSQLファイルがこれより大きい場合は、SQLスプリッターを使ってファイルを分割しましょう。おすすめは[Pinetools SQL-Splitter](https://pinetools.com/split-files)です。分割後は通常通りSQLファイルをインポートできます。
:::

最後にページ下部の**インポート**ボタンを押してインポートを開始します。問題なく完了すれば成功メッセージが表示され、左側に新しいテーブルが作成されているのが確認できます。

![](https://screensaver01.zap-hosting.com/index.php/s/iyobgkNtQpnNjoH/preview)

これでゲームサーバーのデータベースにSQLファイルを無事インポートできました！


## まとめ

RedMサーバーで多くのリソースを問題なく使うにはSQLファイルのインポートが必須です。もしわからないことやサポートが必要な場合は、いつでも気軽にサポートチームに連絡してくださいね！毎日対応していますよ 🙂 

<InlineVoucher />