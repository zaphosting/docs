---
id: fivem-installresources
title: "FiveM：リソースのインストール"
description: "FiveMサーバーを人気のリソースで拡張して、ロールプレイサーバーなどの大規模プロジェクトを実現しよう → 今すぐチェック"
sidebar_label: リソースのインストール
services:
  - gameserver-fivem
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/fivem-resources.json';

## はじめに

リソースはFiveMゲームサーバーに追加機能を加えるために使います。特にロールプレイサーバーのような大規模プロジェクトを始めるなら必須です。こういったプロジェクトは追加リソースなしでは成り立ちません。

FiveMとそのコミュニティは多種多様なリソースを提供しています。人気のリソース一覧はCfx.reフォーラムでチェックできます：https://forum.cfx.re/c/development/releases/7



<InlineVoucher />

## 準備

リソースのインストールはFTP経由で行います。サーバーにファイルをアップロードするためにFTPクライアントが必要です。FTPの使い方に慣れていない場合は、[FTPアクセス](gameserver-ftpaccess.md)ガイドを参考にしてください。

ダウンロードしたリソースは通常圧縮ファイルで提供されます。7ZipやWinrar、WinZipなどの解凍ソフトで圧縮ファイルを解凍してください。解凍後のリソースフォルダには最低でも `__resource.lua` または `fxmanifest.lua` と、それに関連するスクリプトファイルが含まれている必要があります。

:::info
これらのファイルが見当たらない場合は、リソース内のサブディレクトリに入っている可能性があります。
:::

## インストール

### ファイルのアップロード

解凍したファイルを（まだであれば）ひとつのフォルダにまとめて、サーバーの `resources` ディレクトリにアップロードしてください。ディレクトリ構造は通常 `/gXXXXXX/fivem/YOUR_TEMPLATE/resources` のようになっています。

![img](https://screensaver01.zap-hosting.com/index.php/s/9ZEX32BSrwGDjEc/preview)



一部のリソースはデータベースと連携しており、SQLファイルが同梱されていることがあります。その場合はSQLファイルをデータベースにインポートする必要があります。詳しくは[SQLファイルのインポート](fivem-sql-file-import.md)ガイドをご覧ください。

### 有効化

インストールしたリソースをサーバー起動時に読み込むには、サーバーの `server.cfg` ファイルで有効化する必要があります。`start [リソース名]` コマンドで起動を指定します。

例えば、`eup-ui` というフォルダ名でアップロードした場合、設定ファイルの起動コマンドは以下のようになります：
```
start eup-ui
```

`server.cfg` ファイルはtxAdminのCFGエディターからアクセスできます。

:::info
アップロードしたフォルダ名とstartコマンドの名前は完全に一致している必要があります。大文字・小文字も区別されるので注意してください。
:::


## 人気のリソース

まだサーバーにぴったりのリソースが見つかっていない？ここでは人気でおすすめのリソースを厳選して紹介しています。ゲームプレイを盛り上げて、サーバーに最高の仕上げを加えましょう。ぜひ参考にして、あなたのプロジェクトにぴったりの追加機能を見つけてください。

<SearchableItemList items={items} />


## まとめ
最後にサーバーを再起動しましょう。次回サーバーが完全に起動した際に、インストールしたリソースが読み込まれているはずです。これでFiveMゲームサーバーへのリソースインストールは完了です。質問やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にお問い合わせくださいね！🙂

<InlineVoucher />