---
id: csgo-plugins
title: "CS:GO: プラグインのインストール"
description: "CS:GOサーバーにSourcemodプラグインをインストールして、カスタム機能でゲームプレイを拡張する方法 → 今すぐ詳しく見る"
sidebar_label: プラグインのインストール
services:
  - gameserver-csgo
---

import Button from '@site/src/components/Button';
import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/csgo-plugins.json';



## はじめに

CS:GOはコミュニティ主導のサーバーカスタマイズの長い伝統を引き継いでいます。プラグインを使うことで、サーバーオーナーはゲームプレイを拡張したり、利便性を向上させたり、カスタムルールセットを実装したり、まったく新しいゲームモードを作成したりできます。

CS:GOのゲームサーバーでは、**Sourcemod**がサーバーサイドプラグイン用の最も広く使われているフレームワークです。Sourcemodは**Metamod:Source**と連携して動作し、Metamod:Sourceはプラグインがゲームエンジンにフックできる基盤レイヤーとして機能します。この2つのコンポーネントをインストールすることで、サーバー管理者はプラグインを簡単に管理し、サーバーの機能を拡張できます。

<InlineVoucher />



## Metamod:Sourceのインストール

SourcemodはMetamod:Sourceに依存しているため、まずMetamod:Sourceをインストールする必要があります。公式サイトから最新のMetamod:Sourceリリースをダウンロードし、PC上でアーカイブを解凍してください。

アーカイブ内には`addons`ディレクトリが含まれています。このディレクトリを[FTP](gameserver-ftpaccess.md)を使ってCS:GOゲームサーバーの`../csgo/`ディレクトリにアップロードし、既存のゲームディレクトリとマージしてください。


ファイルのアップロードが完了したら、サーバーを再起動します。Metamodが正しく動作しているか確認するには、サーバーコンソールを開いて以下のコマンドを実行してください：

```
meta version
```


Metamodが正しくインストールされていれば、コンソールにインストールされているバージョンや追加情報が表示されます。

<Button label="Metamod:Sourceをダウンロード" link="https://www.metamodsource.net/downloads.php" block />



## Sourcemodのインストール

Metamod:Sourceのインストールが完了したら、次にSourcemodをインストールします。公式サイトから最新の安定版Sourcemodをダウンロードし、アーカイブを解凍してください。含まれている`addons`と`cfg`フォルダを[FTP](gameserver-ftpaccess.md)を使ってCS:GOゲームサーバーの`../csgo/`ディレクトリにアップロードします。アップロード後、サーバーを再起動してください。SourcemodはMetamodを通じて自動的に読み込まれます。

Sourcemodが動作しているか確認するには、サーバーコンソールで以下を実行します：

```
sm version
```


インストールが成功していれば、現在のSourcemodのバージョンとビルド情報が表示されます。

<Button label="Sourcemodをダウンロード" link="https://www.sourcemod.net/downloads.php" block />



## プラグインのインストール

Sourcemod用プラグインは通常`.smx`ファイルとして配布されます。このコンパイル済みプラグインファイルをSourcemodの`plugins`ディレクトリにアップロードしてください。

```
../csgo/addons/sourcemod/plugins/
```


プラグインファイルをアップロードしたら、サーバーを再起動するか、サーバーコンソールから以下のコマンドでプラグインを直接リロードできます：

```
sm plugins load <pluginname>
```


プラグインが正しく読み込まれない場合は、Sourcemodの`logs`ディレクトリにあるサーバーログを確認してエラーメッセージを探してください。

一部のプラグインは追加の設定ファイルを含むことがあります。これらのファイルは通常以下のディレクトリに配置します：

```
../csgo/addons/sourcemod/configs/
```


プラグイン開発者が提供するインストール手順に必ず従い、正しく動作するようにしてください。



## 人気プラグイン

<SearchableItemList items={items} />



## まとめ

すべての手順を正しく実行すれば、Metamod:Source、Sourcemod、そしてお好みのプラグインをCS:GOゲームサーバーに無事インストールできているはずです。もし質問やサポートが必要な場合は、いつでもお気軽にサポートチームにお問い合わせください！毎日対応していますよ！🙂

<InlineVoucher />