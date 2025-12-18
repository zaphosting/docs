---
id: vserver-linux-screen
title: "VPS: Screenのインストール"
description: "Unix系システムで複数のターミナルセッションを効率的に管理するScreenユーティリティの使い方 → 今すぐチェック"
sidebar_label: Screenのインストール
services:
  - vserver
---

## はじめに

ScreenはLinuxなどのUnix系OS向けのターミナルマルチプレクサです。1つのウィンドウやリモート接続内で複数のターミナルセッションを管理できます。このガイドでは、インストール手順と基本的な使い方を紹介し、Screenに慣れてもらいます。

## 準備

サーバーに何かをインストールする前に、OSに対応したアップデートコマンドを実行してサーバーを安全に保つことをおすすめします。

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

前述の通り、Screenは複数のセッションを作成できます。新しいセッションを開始するには、`[name]`を好きな名前に置き換えて以下のコマンドを実行してください。
```
screen -S [name]
```

:::info
このガイド内のコマンドは大文字・小文字を区別するので、特にパラメータフラグには注意してください。
:::

これで新しいScreenが開き、リモート接続を閉じても動かし続けたいスクリプトやプログラムを実行できます。

Screenから抜けるには、`CTRL + A`を押してから`D`を押すか、コンソールで`exit`コマンドを入力してください。

:::tip
現在アクティブなセッションやScreenは、`screen -ls`または`screen -list`コマンドで一覧表示できます。
:::

以前作成したScreenに戻るには、`screen -r [name]`コマンドを実行すれば該当のScreenに即座に戻れます。

## Screenのパラメータフラグ

Screenにはコマンドをカスタマイズできる多くの`-`パラメータフラグがあります。主なものを以下の表にまとめました。

| フラグ | 別名 | 説明 |
| ---- | ----- | ---- |
| -v   | | 現在のScreenのバージョンを表示 |
| -S `[name]` | | `[name]`という名前で新しいScreenを開始 |
| -ls | -list | 実行中のScreenをすべてリスト表示 |
| -wipe `[name]` | | オプションの`[name]`を指定してScreenを削除 |
| -r `[name]` | | `[name]`のScreenセッションに再接続 |
| -d -r `[name]` | | 現在のScreenからデタッチして`[name]`に再接続 |

:::tip
利用可能なパラメータは`screen -h`で一覧表示できるので、ぜひ試してみてください。
:::

## Screenの応用的な使い方

### ウィンドウ操作

基本コマンドに慣れたら、セッション内を効率よく操作するショートカットを覚えましょう。Screen内では複数のウィンドウを作成して、タスクごとに分けられます。

:::note 
このパートのショートカットはすべて`CTRL + A`を押した後に実行してください。
:::

`C`を押すと現在のディレクトリで新しい空のウィンドウが作成されます。ウィンドウ間の移動は`N`（次）、`P`（前）、または`"`を押して矢印キーで選択できます。

デフォルトではすべてのウィンドウ名は同じ（通常は使っているシェル名）ですが、`A`を押して新しい名前に変更可能です。

ウィンドウを削除するには`K`を押します。

#### ウィンドウの分割

2つのウィンドウを分割表示するには、`S`（横分割）または`|`（縦分割）を押し、`Tab`で切り替えます。

:::tip
分割ウィンドウを作成したら`Tab`で移動し、`"`を押して2画面目に別のウィンドウを表示できます。
:::

ウィンドウは好きなだけ分割できますが、マルチタスクが増えるとサーバーのRAM使用量も増えるので注意してください。

## まとめ

このガイドでLinuxのScreenユーティリティの使い方がわかったと思います。もし質問やサポートが必要なら、いつでもサポートチームに気軽に連絡してくださいね！🙂