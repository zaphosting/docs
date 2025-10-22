---
id: vserver-linux-python
title: "VPS: Pythonのインストール"
description: "さまざまなLinuxディストリビューションでPythonランタイムをインストール・更新して、安全で最新の環境を整える方法 → 今すぐチェック"
sidebar_label: Pythonのインストール
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

このガイドでは、Pythonランタイムとvenvのインストール手順を紹介します。これらのコマンドはSSH経由で実行する必要があります。SSHでサーバーに接続する方法がわからない場合は、[初期アクセス（SSH）](vserver-linux-ssh.md)ガイドを参考にしてください。

<InlineVoucher />

## 準備

サーバーに何かをインストールする前に、OSに対応したアップデートコマンドを実行してサーバーのセキュリティを保つことをおすすめします。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
  sudo apt update
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

ほとんどのLinuxディストリビューションにはPythonがプリインストールされていますが、バージョンが古かったり、一部のパッケージが入っていない場合があります。`python3 --version`でインストール状況を確認し、以下のコマンドでランタイムを更新またはインストールしてください。

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
  // バージョン確認
  python3 --version

  // ランタイムの更新 / インストール
  sudo apt install python3
```

</TabItem>
<TabItem value="centos" label="CentOS">

```
  // バージョン確認
  python3 --version

  // ランタイムの更新
  sudo yum install python3
```

</TabItem>
<TabItem value="opensuse" label="OpenSUSE">

```
  // バージョン確認
  python3 --version

  // ランタイムの更新
  sudo zypper install python3
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```
  // バージョン確認
  python3 --version

  // ランタイムの更新
  sudo dnf install python3
```

</TabItem>
</Tabs>

## コードの実行

Pythonがサーバーにインストールされたので、Pythonプログラムの実行を始められます。

### インタープリタモード

`python3`コマンドを実行するとPythonインタープリタが起動します。`>>>`の後に有効なPythonコードを書き、Enterを押すと実行されます。終了するには`exit()`を入力してください。

### .pyファイルの実行

`.py`ファイルを実行するには、`python3 [ファイル名].py`コマンドを使います。`[ファイル名]`は実行したいファイルのパスに置き換えてください。

:::tip
多くのオンラインで見つかるプログラムは、`python3 main.py`で実行できます。`main.py`はPythonプログラムの一般的なエントリーポイントだからです。
:::

## 仮想環境

Pythonプログラムを書くとき、pipから外部パッケージをインストールすることがあります。これらはグローバルにインストールしてすべての`.py`スクリプトで使うこともできますが、仮想環境（venv）を作成することも可能です。

### venvの作成

まず、`cd`でvenvを作成したいフォルダに移動し、準備ができたら`python3 -m venv .`を実行します。これで現在の場所に必要なファイルがインストールされます。

### 有効化と無効化

venv内で`pip install`などのコマンドを使うには、`source /bin/activate`でvenvを有効化します。これでコンソールはvenv内で動作し、スクリプトはローカルにインストールされたパッケージのみアクセス可能になります。

作業が終わったら、`deactivate`コマンドでvenvを無効化して元の環境に戻れます。

## まとめ

おめでとうございます！Pythonのインストールと設定が無事完了しました。もし質問や問題があれば、毎日対応しているサポートチームまでお気軽にお問い合わせください！

<InlineVoucher />