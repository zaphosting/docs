---
id: fivem-sql-file-import
title: "FiveM: SQLファイルのインポート"
description: "FiveMリソースがデータベースと正しく連携するために、SQLファイルを正しくインポートする方法を理解しよう → 今すぐ詳しくチェック"
sidebar_label: SQLファイルのインポート
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

多くのFiveMリソースは正しく動作させるためにデータベースが必要です。だからこそ、リソースに付属しているSQLファイルを正しくデータベースにインポートして、リソースがデータベースにエントリーを作成し、期待通りに動作するようにすることが重要です。

:::info
すべてのリソースがデータベースを必要とするわけではありません！リソースをダウンロードしたら、説明やドキュメントを確認してSQLファイルのインポートが必要かどうかをチェックしましょう。
:::

多くの場合、リソースのダウンロードファイルには**.sql**拡張子のファイルが1つ以上含まれています。これらをデータベースにインポートする必要があります。

<InlineVoucher />

## SQLファイルの準備

ここでは例として**ESX**のSQLファイルをインポートします。インポートしたいリソースのSQLファイルを準備してください。データベースが必要なリソースのフォルダを開き、**.sql**拡張子のファイルを探しましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/3YMrCZ29pc87aW8/preview)

:::info
インポートを進める前に、.sqlファイルをテキストエディタで開き、以下のような行が含まれていないか確認してください：

![](https://screensaver01.zap-hosting.com/index.php/s/wXLmBpmiwYp3Zzo/preview)

もしこれらがあれば、`CREATE` と `USE` のデータベース指定行を削除してファイルを保存してください。そうしないとSQLファイルはインポートできません。

これは、最初の行が新しいデータベースを作成しようとしているためですが、RedMゲームサーバーにはすでに別名のデータベースがあるため不要です。2行目は `essentialmode` という名前のデータベースを使う指定ですが、こちらも既存のデータベースを使うため不要です。
:::

## SQLファイルをデータベースにインポートする

ゲームサーバーのウェブインターフェースで**データベース**セクションにアクセスしましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/jk6BBm4d5dDtNcd/preview)

データベースページでは、バックアップ作成や作成、管理など様々な機能が使えます。ここではデータベースへのアクセスにフォーカスしますが、もっと詳しく知りたい場合は他のデータベースガイドもチェックしてください：[外部データベースアクセス](gameserver-database-external-access.md)。

青いリダイレクトアイコンを押すと、**phpmyadmin**というツールに移動します。ここで簡単にデータベースにアクセスできます。ログイン画面が出たら、データベースページに記載されている認証情報を使ってログインしてください。

ページに入ったら、左側のリストからデータベースを選択します。データベース名は必ず `zap` で始まります。

![](https://screensaver01.zap-hosting.com/index.php/s/Qx37APa9233B7zt/preview)

まだ使っていなければ、データベースは空の状態です。ここでいよいよ.sqlファイルをインポートします。

phpmyadminの上部ナビゲーションバーにある**インポート**ボタンを押してインポートメニューを開きましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/McfzS8DraJsXPTZ/preview)

次に**参照...**ボタンを押すとファイルエクスプローラーが開くので、最初にインポートしたい.sqlファイルを選択します。

![](https://screensaver01.zap-hosting.com/index.php/s/cfTYGYfFGMEyQbA/preview)

:::note
最大ファイルサイズは2MBです。もしそれ以上の大きなSQLファイルがある場合は、SQLスプリッターを使ってファイルを分割しましょう。おすすめは[Pinetools SQL-Splitter](https://pinetools.com/split-files)です。分割後は通常通りSQLファイルをインポートできます。
:::

最後にページ下部の**インポート**ボタンを押してインポートを開始します。問題なく完了すれば成功メッセージが表示され、左側に新しいテーブルが作成されているのが確認できます。

![](https://screensaver01.zap-hosting.com/index.php/s/iyobgkNtQpnNjoH/preview)

## まとめ

FiveMサーバーで多くのリソースを問題なく使うには、SQLファイルのインポートが必須です。もしわからないことやサポートが必要な場合は、いつでも毎日対応しているサポートチームに気軽に連絡してくださいね！🙂

<InlineVoucher />