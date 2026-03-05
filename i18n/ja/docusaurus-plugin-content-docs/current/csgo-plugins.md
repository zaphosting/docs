---
id: csgo-plugins
title: "CS:GO：プラグインのインストール"
description: "CS:GOプラグインやコミュニティプロジェクトの進化する世界を探検して、カウンターストライク体験をさらに充実させよう → 今すぐチェック"
sidebar_label: プラグインのインストール
services:
  - gameserver-csgo
---

import Button from '@site/src/components/Button';
import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/csgo-plugins.json';



## はじめに

CS:GOはコミュニティ主導のサーバーカスタマイズの長い伝統を引き継いでいます。プラグインを使うことで、サーバーオーナーはゲームプレイを拡張したり、利便性を向上させたり、カスタムルールセットを実装したり、まったく新しいゲームモードを作り出すことができます。

Source 2への移行に伴い、プラグインのエコシステムは大きく変わりました。CS:GOでは、**CounterStrikeSharp**がサーバーサイドプラグイン開発の主要かつ積極的にメンテナンスされているフレームワークとして確立されています。

<InlineVoucher />



## Metamod:Sourceのインストール

CounterStrikeSharpはMetamodに依存しているため、まずMetamodをインストールする必要があります。[Metamod:Source 2.x Dev Build](https://www.metamodsource.net/downloads.php?branch=dev)をダウンロードしたら、アーカイブを解凍してください。アーカイブ内にある`addons`ディレクトリを、[FTP](gameserver-ftpaccess.md)を使ってCS:GOのゲームディレクトリに直接アップロードします。

```
../game/csgo/
```

ファイルをコピーしたら、`/game/csgo/`内の`gameinfo.gi`ファイルをテキストエディタで開きます。ファイル内で`Game_LowViolence csgo_lv`という行を探し、その直下に以下の行を追加してください。

```
Game csgo/addons/metamod
```

<Button label="Metamod:Sourceをダウンロード" link="https://www.metamodsource.net/downloads.php?branch=dev" block />





## CounterStrikeSharpのインストール

Metamodが正常に動作していることを確認したら、CounterStrikeSharpをインストールします。CounterStrikeSharpは公式GitHubリポジトリから配布されており、プリコンパイル済みのリリースパッケージとして提供されています。ランタイムを含むCounterStrikeSharpのリリースをダウンロードし、アーカイブを解凍してください。含まれている`addons`ディレクトリを、[FTP](gameserver-ftpaccess.md)を使って同じCS:GOゲームディレクトリにコピーします。

```
/game/csgo/
```

ディレクトリを手動でマージしたり名前を変更したりしないでください。アーカイブの構造はそのまま維持する必要があります。ファイルをアップロードしたら、サーバーを再起動してください。起動時にMetamodが自動的にCounterStrikeSharpを読み込みます。インストールが成功しているか確認するには、サーバーコンソールで以下を実行します。

```
meta list
Listing 1 plugin:
  [01] CounterStrikeSharp (0.1.0) by Roflmuffin
```

<Button label="CounterStrikeSharpをダウンロード" link="https://github.com/roflmuffin/CounterStrikeSharp/releases/tag/v1.0.354" block />



## プラグインのインストール

CounterStrikeSharp用のプラグインはコンパイル済みの`.dll`ファイルとして提供されます。これらのファイルはCounterStrikeSharpのインストールパス内の`plugins`ディレクトリに配置します。

プラグインをこのディレクトリにコピーしてサーバーを再起動すると、CounterStrikeSharpが利用可能なすべてのプラグインを自動的に読み込みます。プラグインの読み込みに失敗した場合は、サーバーログを確認してCounterStrikeSharpやプラグインに関連するエラーメッセージを探してください。




## 人気プラグイン

<SearchableItemList items={items} />



## まとめ

すべての手順を正しく実行していれば、Metamod/CounterStrikeSharpとお好みのプラグインが無事にインストールされているはずです。もし質問やサポートが必要な場合は、いつでもお気軽にサポートチームまでご連絡ください！毎日対応していますよ 🙂




<InlineVoucher />