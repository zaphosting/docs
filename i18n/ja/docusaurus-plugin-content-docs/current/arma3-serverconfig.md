---
id: arma3-serverconfig
title: "Arma 3: サーバー設定ファイルの編集"
description: "Arma 3サーバーの設定をカスタマイズして、最適なゲームプレイとパフォーマンスを実現しよう → 今すぐチェック"
sidebar_label: Server.cfg
services:
  - gameserver-arma3
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Server.cfgのパラメータと設定

Arma 3のServer.cfgは、どんなArma 3ゲームサーバーの運用にも必須で、  
Arma 3サーバーを個別に設定するための多彩なオプションを提供しています。

Server.cfgは、プリインストール済みのゲームサーバーやVPSにFTPで直接アクセスして編集するか、  
ゲームサーバーの場合は左側メニューの「Configs」からも編集可能です。  
そこから数クリックでServer.cfgを編集できます。

<InlineVoucher />

## ZAPエディターでServer.cfgを編集する方法

ZAPエディターでArma 3サーバーのserver.cfgを編集するには、まずインターフェースでサーバーをクリックし、  
左メニューの「設定」内にある「Configs」を選択します。

![](https://puu.sh/Fo5i6/183ee65ef3.png)

そこにArma 3用の設定ファイル一覧が表示されますが、今回はServer.cfgのみ編集します。  
青い「ファイルを開く」ボタンをクリックするとZAPエディターが開きます。

![](https://puu.sh/Fk7Ez/b0f32d8c61.png)

ここでサーバー名やスロット数など、Arma 3サーバーを自由にカスタマイズできます。  
設定を変更したら「保存」をクリックしましょう。

![](https://puu.sh/Fk7I1/407a039e38.png)

サーバー名を指定する際は、名前を必ずダブルクォーテーションで囲んでください。  
そうしないとサーバーが読み込めません。  
また、各行の末尾には必ずセミコロン（;）を付けてください。  
付け忘れると後続の設定が読み込まれなくなります。  
例外は「motd[]」のオプションで、こちらは各行の末尾にカンマを付けますが、最後の行だけはカンマを付けません。

## 正しい例：

セミコロンやカンマ、ダブルクォーテーションが正しく設定されています。

![](https://puu.sh/Fk7Mq/e2542b12f7.png)

## 間違った例：

セミコロンやカンマ、ダブルクォーテーションの設定が抜けており、  
このままだとサーバーは起動しません。

![](https://puu.sh/Fk7NK/f96a31199d.png)

## FTPでServer.cfgを編集する方法

ZAPエディターの代わりに、FTP経由で直接Server.cfgを編集することも可能です。  
ここでは例として**FileZilla**を使い、ゲームサーバーへFTP接続してディレクトリを操作します。

ゲームサーバーへFTP接続する方法はこちらでチェック：[FTPアクセス](gameserver-ftpaccess.md)。

## 接続してserver.cfgのパスへ移動する

:::info
FTPで作業中は必ずゲームサーバーを停止してください。
:::

上記の手順でゲームサーバーへFTP接続したら、FileZillaの右下ウィンドウでserver.cfgのあるディレクトリへ移動します。  
パスは以下の通りです：**/g198376/arma3/config**

![](https://puu.sh/Fo5eC/4d222f5a99.png)

:::info
最初のフォルダ名（g198376）はサーバーIDなので、複数のゲームサーバーを持っている場合はフォルダで区別できます。
:::

![](https://puu.sh/Fo4Tw/06f7a53914.png)

このディレクトリ内にArma 3サーバーのServer.cfgやその他の設定ファイルがあります。  
Server.cfgを**右クリック**して「表示/編集」を選択しましょう。

![](https://puu.sh/Fo5fM/f3519a8936.png)

標準のエディターが開くので、上記の説明に従ってServer.cfgを編集してください。  
編集後は**CTRL+S**で保存し、エディターを閉じればOK。  
これでサーバーの再起動準備が整いました。

<InlineVoucher />