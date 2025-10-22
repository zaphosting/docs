---
id: source-metamod-installation
title: サーバーにSource ModとMeta Modをインストールする
description: "Source- と MetamodでSourceエンジンのゲームサーバーを高度にカスタマイズ＆管理 → 今すぐ詳しくチェック"
sidebar_label: インストール
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## SMとMMって何？

Source- と MetamodはHalf Life 2の拡張機能で、Sourceエンジンのゲームサーバー（例：CS:S、CS:GO、DoD:S、TF2など）を通常以上に個別カスタマイズできるようにするもの。プラグインの利用やサーバーの拡張管理が可能になるよ。

<InlineVoucher />

## SM / MMのインストール

### ファイルをダウンロード

まずは拡張機能本体が必要。常に最新の安定版（**stable**）を使うのがポイント。最新バージョンは以下のサイトからダウンロードできるよ：

- [Metamod](https://www.sourcemm.net/downloads.php?branch=stable)
- [Sourcemod](https://www.sourcemod.net/downloads.php?branch=stable)

![](https://screensaver01.zap-hosting.com/index.php/s/zb6LsPbnAYJSHap/preview)

:::info
ZAP-HostingのSourceエンジンゲームサーバーは基本的にLinux OSで動いてるから、拡張機能もLinux版を使ってね。
:::

### ファイルを解凍

ダウンロードすると2つの圧縮ファイル（sourcemod-XXX-gitXXXX-linux.tar / mmsource-XXX-gitXXX-linux.tar）が手に入るから、アップロード前に解凍しよう。Winrarや7zipなどのツールが使えるよ。

![](https://screensaver01.zap-hosting.com/index.php/s/fw8r376kqKr5rgL/preview)

解凍するとaddonsとcfgフォルダが出てくるよ：

![](https://screensaver01.zap-hosting.com/index.php/s/oJazFjaDWCjt9oP/preview)

### ファイルをアップロード

ここからが本格的なインストール。FTPでサーバーに接続して、拡張機能のフォルダをアップロードしよう。

アップロード先はメインディレクトリ。メインディレクトリはゲームごとに以下のフォルダ構成になってる：

| ゲーム | フォルダ  |
| :-----: |:-------------:| 
| CS: Global Offensive | csgo |
| CS: Source | cstrike |
| Team Fortress 2 | tf2 |
| L4D2 | left4dead2 |

![](https://screensaver01.zap-hosting.com/index.php/s/g384YWYRN8TaPRx/preview)

アップロード後のフォルダ構成はこんな感じになるはず：

![](https://screensaver01.zap-hosting.com/index.php/s/JTwTwzeXQdZrYY7/preview)

## SM / MMのインストール確認

拡張機能が正しくインストールされたか確認する方法は2つ：

1. ゲーム内コンソール
2. リモートコンソール（HLSW - RCON）

### コマンドでバージョン確認

サーバーのバージョンを確認する手順は：

1. ゲーム内でサーバーに接続
2. コンソールを開いて以下のコマンドを入力：

```
sm version
meta version
```

結果はこんな感じになるよ：

![](https://screensaver01.zap-hosting.com/index.php/s/qdNywS6PLdJkrnP/preview)

### 📖 RCONでバージョン確認

![](https://screensaver01.zap-hosting.com/index.php/s/jZZ6FFxksJgcCSf/preview)

自分のサーバーでバージョンを確認する手順は：

1. 上部のIP / ポート欄にIPアドレスを入力
2. 下のRcon設定へ進む
3. Rconパスワードを入力
4. コンソールを開いて以下のコマンドを入力：

```
sm version
meta version
```

結果はこんな感じ：

```
SourceMod Version Information:
             SourceMod Version: 1.9.0.6281
             SourcePawn Engine: 1.9.0.6281, jit-x86 (build 1.9.0.6281)
             SourcePawn API: v1 = 4, v2 = 12
             Compiled on: May 14 2019 16:03:05
             Built from: https://github.com/alliedmodders/sourcemod/commit/c5efe48
             Build ID: 6281:c5efe48
             http://www.sourcemod.net/
             
Metamod:Source version 1.10.7-dev
         Built from: https://github.com/alliedmodders/metamod-source/commit/63da1c3
         Build ID: 970:63da1c3
         Loaded As: Valve Server Plugin
         Compiled on: Mar 28 2019
         Plugin interface version: 15:14
         SourceHook version: 5:5
         http://www.metamodsource.net/
```

HLSWダウンロード：http://www.hlsw.net/hlsw/download/

<InlineVoucher />