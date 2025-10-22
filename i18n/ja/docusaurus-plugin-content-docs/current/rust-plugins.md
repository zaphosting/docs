---
id: rust-plugins
title: "Rust: プラグインのインストール"
description: "Rustサーバーを人気プラグインでカスタマイズ＆ゲームプレイを向上させる方法をチェック → 今すぐ詳しく見る"
sidebar_label: プラグインのインストール
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/rust-plugins.json';

## はじめに

プラグインを使うことで、サーバーをさらに拡張＆個性化できます。ここでは、よく使われるプラグインの入手先と設定方法を解説します。

<InlineVoucher />


## 準備

まずは、サーバーにインストールしたいプラグインをダウンロードしましょう。豊富なプラグインは[umod.org（旧OXIDE）](https://umod.org/plugins)で見つかります。ダウンロードすると`.cs`ファイルが手に入ります。  

![](https://screensaver01.zap-hosting.com/index.php/s/BrQxNHwZqdpNGsp/preview)



## インストール

プラグインをダウンロードしたら、いよいよインストールです。これは**FTP**経由で行うので、FTPクライアントが必要です。FTPの使い方がまだなら、[FTPアクセス](gameserver-ftpaccess.md)ガイドを参考にしてください。

プラグインの正しいフォルダは `/gXXXXXX/rust-oxide/oxide/plugins` にあります。ダウンロードした`.cs`ファイルをこのフォルダにアップロードするだけ。アップロード後はこんな感じになります：  


![img](https://screensaver01.zap-hosting.com/index.php/s/eE5gdLg4Na5nCKM/preview)

これでインストールは完了です。あとはライブコンソールでプラグインが正常にコンパイル＆ロードされたか確認しましょう。出力例はこんな感じです：

```
AdminAutoTeams and AdminLogger were compiled successfully in 0ms
(Filename: ./Runtime/Export/Debug/Debug.bindings.h Line: 35)

Loaded plugin Admin Logger v2.3.4 by AK
(Filename: ./Runtime/Export/Debug/Debug.bindings.h Line: 35)
```



## 人気プラグイン

まだサーバーにピッタリのプラグインが見つかってない？

当社が厳選した人気＆おすすめプラグインリストをチェックして、ゲームプレイをグレードアップ＆サーバーに最高の仕上げを加えよう。インスピレーションを得て、プロジェクトにぴったりのプラグインを見つけてね。

<SearchableItemList items={items} />


## まとめ

手順通りに進めれば、プラグインは無事インストールできているはず。もし質問やサポートが必要なら、毎日対応しているサポートチームに気軽に連絡してね！🙂

<InlineVoucher />