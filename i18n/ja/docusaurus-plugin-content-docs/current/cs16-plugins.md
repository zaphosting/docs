---
id: cs16-plugins
title: "CS 1.6: 自分のサーバーにプラグインをインストールする方法"
description: "Counter-Strike 1.6サーバーをAMXmodXとMetamodで強化して、高度なカスタマイズと管理を実現する方法をチェック → 今すぐ詳しく見る"
sidebar_label: プラグインのインストール
services:
  - gameserver-cs16

---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/cs16-plugins.json';

## はじめに

**AMXmodX** と **Metamod** は、Counter-Strike 1.6のゲームサーバーでプラグインを使うために必要な拡張機能です。これらはHalf Lifeの拡張で、通常以上にサーバーをカスタマイズできるようにします。例えばプラグインの利用や、サーバーの管理機能の拡張などが可能になります。

<InlineVoucher />

## AMXmodX / Metamod のインストール

### 準備

まずは拡張機能本体が必要です。拡張機能は[amxmodx.org](https://amxmodx.org/downloads-new.php)からダウンロードできます。常に最新の安定版（**stable**）を使うようにしてください。そうすることで、機能が完全に動作し互換性も保たれます。

![img](https://screensaver01.zap-hosting.com/index.php/s/SxJaFb7Cz79c7ER/preview)

Linux用のパッケージである **AMX Mod X Base, Counter-Strike Addon, Metamod** が必要です。これらをダウンロードしてください。ダウンロード後、3つの圧縮ファイルが手元にあるはずです。パソコンで解凍すると、**addons** フォルダができ、その中に **amxmodx** と **metamod** フォルダが入っています：

![](https://screensaver01.zap-hosting.com/index.php/s/LQdb93T39YApA6B/preview)

### インストール

上記の準備ができたら、いよいよ実際のインストールです。ファイルはFTPを使ってサーバーにアップロードします。サーバーにファイルをアップロードするにはFTPクライアントが必要です。FTPが何か、どう使うか分からない場合は、こちらのガイドをチェックしてください：[FTPアクセスについて](gameserver-ftpaccess.md)

次に、**addons** フォルダをサーバーのメインディレクトリにアップロードします。フォルダ構成は以下のようになっているはずです：

![](https://screensaver01.zap-hosting.com/index.php/s/A5zqJ9GxL47tCrW/preview)

これで **AMXmodX** と **Metamod** のセットアップは完了です。ゲーム内でサーバーに接続し、コンソールで ``amxx version`` コマンドを実行して、AMXが正しくインストールされているか確認しましょう。出力は以下のようになります：

```
AMX Mod X 1.8.2
Authors: ....
Compiled: Feb 14 2013, 00:56:31
URL:http://www.amxmodx.org/
Core mode: JIT
```

もし **Unknown command** と表示されたら、インストールに何か問題があった可能性があります。

## プラグインのインストール

### 準備

**AMXmodX** と **Metamod** のセットアップが完了し正常に動作していることを確認したら、プラグインのインストールを始めましょう。まずはサーバーに入れたいプラグインをダウンロードします。豊富なプラグインは[amxmodx.org](https://www.amxmodx.org/compiler.php)で見つかります。長年にわたり多くのプラグインが公開されており、今も定期的に追加されています。プラグインのファイルは **.amxx** 形式です。

### インストール

プラグインをダウンロードしたら、実際のインストールに進みます。プラグインのセットアップもFTP経由で行います。プラグインファイルは ``../addons/amx/plugins`` ディレクトリにアップロードしてください。

![](https://screensaver01.zap-hosting.com/index.php/s/FG2ocNpWCRManSd/preview)

次回サーバーを起動すると、アップロードしたプラグインが自動的に読み込まれます。

## 人気プラグイン

まだサーバーにぴったりのプラグインを探してる？
当社が厳選した人気＆おすすめプラグインのリストをチェックして、ゲームプレイをさらに盛り上げてサーバーを完璧に仕上げよう。インスピレーションを得て、プロジェクトにぴったりの追加機能を見つけてね。

<SearchableItemList items={items} />

## まとめ

すべての手順を正しく行えば、AMXmodX / Metamodとお好みのプラグインを無事にインストールできているはずです。もし質問やサポートが必要なら、いつでも毎日対応しているサポートチームに気軽に連絡してくださいね！🙂

<InlineVoucher />