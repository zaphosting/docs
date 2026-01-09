---
id: sunkenland-setup-server
title: "Sunkenland: Sunkenlandサーバーセットアップ"
description: "Sunkenlandゲームサーバーをスムーズにプレイ＆正しく動作させるためのセットアップ方法 → 今すぐチェック"
sidebar_label: サーバーセットアップ
services:
  - gameserver-sunkenland
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Sunkenlandサーバーは正しく動作させるために、初回に簡単なセットアップが必要です。このガイドでは、Sunkenlandゲームサーバーのセットアップ手順を解説します。

<InlineVoucher />

## 準備
まずはSunkenlandを起動し、ワールドのセーブファイルを作成してください。必ずワールドをセーブしてから次に進みましょう。

後でサーバーファイルにアクセスするために、[WinSCP](https://winscp.net/eng/index.php) や [FileZilla](https://filezilla-project.org/) のようなFTPクライアントが必要です。どちらもオープンソースで無料ダウンロード可能です。

## ローカルデータへのアクセス
最初のステップは、Sunkenlandのセーブデータにアクセスすることです。

キーボードで `CTRL+R` を押し、Windowsの「ファイル名を指定して実行」欄に以下を入力してください：
```
%localappdata%low\Vector3 Studio\Sunkenland\
```

この場所に `Worlds` フォルダがあり、ローカルのセーブファイルがすべて入っています。サーバーでホストしたいセーブファイルを選ぶか、新規で作成したものを選択してください。

:::tip
何も見えない？Sunkenlandを起動してワールドを作成し、セーブファイルを作成しているか確認してください。
:::

## セーブゲームのアップロード
次に、FTPでゲームサーバーに接続し、先ほど選んだセーブゲームをアップロードします。

ゲームサーバーのウェブインターフェースの **ツール -> FTPブラウザ** にある認証情報を使い、FTPクライアントでサーバーに接続してください。接続方法は[FTPアクセスガイド](gameserver-ftpaccess.md)も参考にどうぞ。

接続したら、Sunkenlandフォルダ内の「AppData」フォルダ、その中の「Worlds」フォルダを開き、先ほどのセーブゲームをアップロードします。

フォルダ構成は以下のようになります。`Marvin's World~cef76ff5-447a-48df-b3a8-74b9ea5b7a86` はあなたのセーブゲーム名です。
![](https://screensaver01.zap-hosting.com/index.php/s/eFg6Ek3giFM3DLs/preview)

:::important
この段階で、セーブゲーム名の末尾にあるGUIDをコピーしてください。次のステップでサーバーを動かすのに必要です。

GUIDの例：
```
ZAP-Hosting's World~cef76ff5-447a-48df-b3a8-74b9ea5b7a86 # フルワールド名
cef76ff5-447a-48df-b3a8-74b9ea5b7a86 # 必要なGUID部分
```
:::

## サーバーの有効化
最後に、ゲームサーバーのウェブインターフェースの **設定** セクションに移動します。

ここで **World GUID** オプションを探し、前のステップでコピーしたGUIDを入力してください。

ページ下部の緑色の **保存** ボタンを必ず押しましょう。これでサーバーを起動すると、正常に立ち上がるはずです。

これでSunkenlandゲームサーバーのセットアップは完了です。

<InlineVoucher />