---
id: redm-installresources
title: "RedM：リソースのインストール"
description: "ロールプレイサーバーなどの大規模プロジェクトに役立つ人気リソースでRedMサーバーを強化する方法 → 今すぐチェック"
sidebar_label: リソースのインストール
services:
  - gameserver-redm
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

リソースはRedMゲームサーバーに追加機能を拡張するために使えます。特にロールプレイサーバーのような大規模プロジェクトを始める場合にとても役立ちます。こういったプロジェクトは追加リソースなしでは実現できません。

RedMとそのコミュニティは多種多様なリソースを提供しています。人気リソースの一覧はCfx.reフォーラムで確認できます：https://forum.cfx.re/c/redm-development/54



<InlineVoucher />

## 準備

リソースのインストールはFTP経由で行います。サーバーにファイルをアップロードするためにFTPクライアントが必要です。FTPの使い方に慣れていない場合は、[FTPアクセス](gameserver-ftpaccess.md)ガイドをチェックすることをおすすめします。

ダウンロードしたリソースは通常圧縮形式で提供されます。7Zip、WinRAR、WinZipなどの解凍ソフトで圧縮ファイルを解凍してください。解凍後のリソースフォルダには最低でも `__resource.lua` または `fxmanifest.lua` と、それに関連するスクリプトファイルが含まれているはずです。

:::info
これらのファイルが見当たらない場合は、リソース内のサブディレクトリに入っている可能性があります。
:::

## インストール

### ファイルのアップロード

解凍したファイルを（まだであれば）個別のフォルダとしてまとめ、サーバーの `resource` ディレクトリにアップロードしてください。ディレクトリ構造は通常以下のようになります：`/gXXXXXX/redm-txadmin/YOUR_FRAMEWORK/resources`

![img](https://screensaver01.zap-hosting.com/index.php/s/ofMKfG6rfewsb3o/preview)



一部のリソースはデータベースと連携しており、SQLファイルが含まれていることがあります。その場合はSQLファイルをデータベースにインポートする必要があります。詳しくは[SQLファイルのインポート](redm-sql-file-import.md)ガイドをご覧ください。

### 有効化

インストールしたリソースをサーバー起動時に読み込むためには、まずサーバーの `server.cfg` ファイルで有効化する必要があります。有効化は `start [リソース名]` コマンドで行います。

例えば、`eup-ui` という名前のフォルダでリソースをアップロードした場合、設定ファイルの起動コマンドは以下のようになります：
```
start eup-ui
```

`server.cfg` ファイルはtxAdminのCFGエディターからアクセスできます。

:::info
作成したフォルダ名とstartコマンドの名前は完全に一致している必要があります。大文字・小文字も区別されるので注意してください。
:::



## まとめ
最後にサーバーを再起動してください。次回サーバーが完全に起動した際に、インストールしたリソースが読み込まれているはずです。これでRedMゲームサーバーにリソースを無事インストールできました。質問やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にご連絡くださいね！🙂

<InlineVoucher />