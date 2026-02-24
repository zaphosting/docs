---
id: dedicated-linux-screen
title: "LinuxサーバーでScreenをセットアップ - 永続的なターミナルセッションを管理しよう"
description: "Screenを使ってLinuxで複数のターミナルセッションを管理し、生産性アップ＆セッションの持続性を実現 → 今すぐチェック"
sidebar_label: Screenのインストール
services:
  - vserver
  - dedicated
---

## はじめに

ScreenはLinuxなどのUnix系OS向けのターミナルマルチプレクサです。1つのウィンドウやリモート接続内で複数のターミナルセッションを管理できます。このガイドでは、インストール手順と使い方を紹介し、Screenに慣れてもらいます。

## 準備

サーバーに何かインストールする前に、OSに合わせたアップデートコマンドを実行してサーバーを安全に保つことをおすすめします。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
sudo apt update && sudo apt upgrade
```

</TabItem>
<TabItem value="centos" label="CentOS">

```
sudo yum update
```

</TabItem>
<TabItem value="opensuse" label="OpenSUSE">

```
sudo zypper update
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```
 sudo dnf update
```

</TabItem>
</Tabs>

## インストール

Screenユーティリティのインストールは、Linuxディストリビューションに応じて以下のコマンドを実行するだけでOKです。

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
sudo apt install screen
```

</TabItem>
<TabItem value="centos" label="CentOS">

```
sudo yum install screen
```

</TabItem>
<TabItem value="opensuse" label="OpenSUSE">

```
sudo zypper install screen
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```
sudo dnf install screen
```

</TabItem>
</Tabs>

## Screenの基本的な使い方

前述の通り、Screenは複数のセッションを作成できます。新しいセッションを始めるには、以下のコマンドを実行し、`[name]`を好きな名前に置き換えてください。
```
screen -S [name]
```

:::info
このガイド内のコマンドは大文字小文字を区別するので、特にパラメータフラグに注意してください。
:::

これで新しいScreenが開き、リモート接続を閉じても動かし続けたいスクリプトやプログラムを開始できます。

Screenから抜けるには、`CTRL + A`を押してから`D`を押すか、コンソールで`exit`と入力してください。

:::tip
現在アクティブなセッション/スクリーンは、`screen -ls`または`screen -list`コマンドで一覧表示できます。
:::

以前作成したスクリーンに戻るには、`screen -r [name]`コマンドを実行すれば、該当のスクリーンに即座に戻れます。

## Screenのパラメータフラグ

Screenにはコマンドを設定するための多くの`-`パラメータフラグがあります。重要なものを以下の表にまとめました。

| フラグ | 別名 | 説明 |
| ---- | ----- | ---- |
| -v   | | Screenの現在のバージョンを表示 |
| -S `[name]` | | `[name]`という名前の新しいスクリーンを開始 |
| -ls | -list | 実行中のスクリーンを一覧表示 |
| -wipe `[name]` | | オプションの`[name]`を指定してスクリーンを削除 |
| -r `[name]` | | `[name]`のスクリーンセッションに再接続 |
| -d -r `[name]` | | 現在のスクリーンからデタッチして`[name]`に再接続 |

:::tip
利用可能なパラメータは`screen -h`で一覧表示できるので、ぜひチェックしてみてください。
:::

## Screenの応用的な使い方

### ウィンドウ操作

基本コマンドに慣れたら、セッション内を効率よく移動できるショートカットを覚えましょう。Screen内では複数のウィンドウを作成して、別々の作業を同時に行えます。

:::note 
このパートのショートカットはすべて`CTRL + A`を押した後に実行してください。
:::

`C`を押すと、現在のディレクトリで新しい空のウィンドウが作成されます。ウィンドウ間の移動は`N`（次）、`P`（前）、または`"`を押して矢印キーで選択できます。

デフォルトではすべてのウィンドウは同じ名前（通常は使っているシェル名）ですが、`A`を押して新しい名前に変更可能です。

ウィンドウを削除するには`K`を押します。

#### ウィンドウの分割

2つのウィンドウを分割表示したい場合は、`S`（横分割）または`|`（縦分割）を押し、`Tab`で切り替えます。

:::tip
分割ウィンドウを作成したら`Tab`で切り替え、`"`を押して2画面目に前のウィンドウを表示させることができます。
:::

分割は好きなだけ増やせますが、マルチタスクになるほどサーバーのRAM使用量が増えるので注意してください。

## まとめ

このガイドでLinuxのScreenユーティリティの使い方がわかってもらえたら嬉しいです。もし質問やサポートが必要なら、いつでもサポートチームに気軽に連絡してくださいね！🙂