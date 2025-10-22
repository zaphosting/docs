---
id: dedicated-linux-screen
title: "専用サーバー：Screenのインストール"
description: "Linuxで複数のターミナルセッションを管理して生産性アップ＆セッション維持 → 今すぐ詳しくチェック"
sidebar_label: Screenのインストール
services:
  - dedicated
---

## はじめに

ScreenはLinuxなどのUnix系OS向けのターミナルマルチプレクサーです。1つのウィンドウやリモート接続内で複数のターミナルセッションを管理できるようになります。このガイドでは、インストール手順と使い方を紹介して、Screenに慣れてもらいます。

## 準備

サーバーに何かをインストールする前に、OSに合わせたアップデートコマンドを実行してサーバーを安全に保つことをおすすめします。

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

前述の通り、Screenは複数のセッションを作成できます。新しいセッションを始めるには、`[name]`を好きな名前に置き換えて以下のコマンドを実行します。
```
screen -S [name]
```

:::info
このガイド内のコマンドは大文字・小文字を区別するので、特にパラメータフラグには注意してください。
:::

これで新しいScreenが開き、リモート接続を切断しても動かし続けたいスクリプトやプログラムを実行できます。

Screenから抜けるには、`CTRL + A`を押してから`D`を押すか、コンソールで`exit`と入力してください。

:::tip
現在アクティブなセッションやScreenを一覧表示するには、`screen -ls`または`screen -list`コマンドを使います。
:::

以前作成したScreenに戻るには、`screen -r [name]`コマンドを実行すれば該当のScreenに即座に戻れます。

## Screenのパラメータフラグ

Screenにはコマンドを設定するための多くの`-`パラメータフラグがあります。主なものを以下の表にまとめました。

| フラグ | 別名 | 説明 |
| ---- | ----- | ---- |
| -v   | | Screenの現在のバージョンを表示 |
| -S `[name]` | | `[name]`という名前で新しいScreenを開始 |
| -ls | -list | 実行中のScreenをすべて一覧表示 |
| -wipe `[name]` | | オプションの`[name]`を指定してScreenを削除 |
| -r `[name]` | | `[name]`のScreenセッションに再接続 |
| -d -r `[name]` | | 現在のScreenからデタッチして`[name]`に再接続 |

:::tip
利用可能なパラメータは`screen -h`を実行すると詳しいリストが表示されます。
:::

## Screenの応用的な使い方

### ウィンドウの使い方

基本コマンドに慣れたら、セッション内を効率よく移動できるショートカットを覚えましょう。Screen内では複数のウィンドウを作成して、タスクごとに分けられます。

:::note 
このパートのショートカットはすべて`CTRL + A`を押した後に実行してください。
:::

`C`を押すと現在のディレクトリで新しい空のウィンドウが作成されます。ウィンドウ間の移動は`N`（次）、`P`（前）、または`"`を押して矢印キーで選択できます。

デフォルトではすべてのウィンドウは同じ名前（通常は使っているシェル名）ですが、`A`を押して新しい名前に変更可能です。

ウィンドウを削除したい場合は`K`を押します。

#### ウィンドウの分割

2つのウィンドウを分割表示したい場合は、`S`（横分割）または`|`（縦分割）を押して、`Tab`で切り替えます。

:::tip
分割ウィンドウを作成したら`Tab`で切り替え、`"`を押して2画面目に以前のウィンドウを表示できます。
:::

ウィンドウは好きなだけ分割できますが、マルチタスクになるほどサーバーのRAM使用量が増えるので注意してください。

## まとめ

このガイドでLinuxのScreenユーティリティの使い方がわかってもらえたら嬉しいです。質問やサポートが必要な場合は、いつでもお気軽にサポートチームまでご連絡くださいね！🙂