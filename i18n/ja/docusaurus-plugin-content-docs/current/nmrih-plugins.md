---
id: nmrih-plugins
title: "No More Room In Hell: 自分のサーバーにプラグインをインストールしよう"
description: "SourcemodとMetamodでゲームサーバーをカスタマイズ＆強化して、管理や機能をもっと便利に → 今すぐチェック"
sidebar_label: プラグインのインストール
services:
  - gameserver-nmrih
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/nmrih-plugins.json';


## はじめに

SourcemodとMetamodのインストール方法とプラグインの使い方を紹介するよ。これらの拡張機能はCS:S、CS:GO、DoD:S、TF2などのゲームをカスタマイズできて、ゲームサーバーの管理オプションを大幅に増やせるんだ。

SourcemodとMetamodを使えば、プラグインを追加したり、特別な機能を有効にしたり、サーバーを自分好みにピッタリ調整できるよ。

<InlineVoucher />



## Sourcemod / Metamodのインストール

### 準備

必要な拡張機能はそれぞれ[こちらのSourcemod](https://sourcemod.net/)と[Metamod](https://www.sourcemm.net/downloads.php?branch=stable)からダウンロードできるよ。常に最新の**安定版**を使って、機能や互換性をしっかり確保しよう。

![img](https://screensaver01.zap-hosting.com/index.php/s/STp7pRgjYS4c4yg/preview)

Linux用のパッケージである**Sourcemod**と**Metamod**が必要だよ。指定されたサイトからダウンロードしてね。ダウンロード後は2つの圧縮ファイルが手に入るはず。パソコンで解凍すると、`sourcemod`と`metamod`フォルダが入ったaddonsディレクトリができるよ。

![img](https://screensaver01.zap-hosting.com/index.php/s/WbxyRK8FM7GKxqt/preview)

### インストール

上記の準備ができたら、いよいよインストールに進もう。FTPクライアントを使ってファイルをサーバーにアップロードしてね。FTPの使い方がわからない場合は、こちらのガイドを参考にしてみて：[FTPアクセス](gameserver-ftpaccess.md)

次に、**addons**フォルダをサーバーのメインディレクトリにアップロードしよう。フォルダ構成はこんな感じになるはず：

```
/gxxxxxx/dods/dod/addons
```

![img](https://screensaver01.zap-hosting.com/index.php/s/JzWxPT3yP4zAsHz/preview)

これで**Sourcemod**と**Metamod**のセットアップは完了！ゲーム内でサーバーに接続して、コンソールで``sm version``コマンドを実行してみて。SourcemodとMetamodが正しくインストールされていれば、こんな感じの表示が出るよ：

```
SourceMod Version Information:
             SourceMod Version: 1.9.0.6281
             SourcePawn Engine: 1.9.0.6281, jit-x86 (build 1.9.0.6281)
             SourcePawn API: v1 = 4, v2 = 12
             Compiled on: May 14 2019 16:03:05
             Built from: https://github.com/alliedmodders/sourcemod/commit/c5efe48
             Build ID: 6281:c5efe48
             http://www.sourcemod.net/
```
```             
Metamod:Source version 1.10.7-dev
         Built from: https://github.com/alliedmodders/metamod-source/commit/63da1c3
         Build ID: 970:63da1c3
         Loaded As: Valve Server Plugin
         Compiled on: Mar 28 2019
         Plugin interface version: 15:14
         SourceHook version: 5:5
         http://www.metamodsource.net/
```

もし**Unknown command**（不明なコマンド）と表示されたら、インストールに何か問題があった可能性があるから、もう一度手順を確認してみてね。



## プラグインのインストール

### 準備

SourcemodとMetamodがちゃんと動いているのを確認したら、次はプラグインの追加だよ。サーバーに入れたいプラグインは[Sourcemod公式サイト](https://sourcemod.net/)からダウンロードしよう。ここには長年にわたって公開されてきた豊富なプラグインが揃ってるよ。プラグインごとに対応する.smхファイルを必ずゲットしてね。

### インストール

欲しいプラグインをダウンロードしたら、FTPで以下のディレクトリにアップロードしよう：

```
../addons/sourcemod/plugins/
```

![img](https://screensaver01.zap-hosting.com/index.php/s/A6E4cQCwQnoqTKc/preview)



## 人気プラグイン
まだサーバーにピッタリのプラグインが見つかってない？ここでは人気でおすすめのプラグインを厳選して紹介してるよ。ゲームプレイをもっと楽しくしたり、サーバーに最高の仕上げを加えたいならぜひチェックしてみて。プロジェクトに合うプラグインがきっと見つかるはず！
<SearchableItemList items={items} />


## まとめ

すべての手順をしっかり踏めば、Sourcemod/Metamodとお好みのプラグインが無事インストールできているはず。もしわからないことや困ったことがあったら、いつでもサポートチームに連絡してね。毎日対応してるから安心して！🙂

<InlineVoucher />