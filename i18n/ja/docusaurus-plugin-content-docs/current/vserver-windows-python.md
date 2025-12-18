---
id: vserver-windows-python
title: 'VPS: Pythonのインストール'
description: "WindowsサーバーにPythonランタイムをインストールして、効率的にPythonプログラムを実行する方法を学ぼう → 今すぐ詳しく見る"
sidebar_label: Pythonのインストール
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

このガイドでは、WindowsにPythonランタイムをインストールする手順を紹介します。以下の手順はRDP経由で実行する必要があります。RDPでサーバーに接続する方法がわからない場合は、[初回アクセス（RDP）](vserver-windows-userdp.md)ガイドをチェックしてください。
<InlineVoucher />

## インストール

### ステップ1: ファイルのダウンロード
お好きなブラウザを開きます（このガイドではChromeを使います）そして[https://www.python.org/downloads/](https://www.python.org/downloads/)にアクセスしてください。

![](https://screensaver01.zap-hosting.com/index.php/s/WAET5RFn6yBfNzC/preview)

次に、`Download Python [version]`ボタンをクリックしてダウンロードが完了するまで待ちます。

![](https://screensaver01.zap-hosting.com/index.php/s/b8j6ZbfGWoBjpep/preview)

### ステップ2: Pythonのインストール
ダウンロードしたインストーラーを実行します。インストール設定の画面が表示されるので、必ず一番下の`Add python.exe to PATH`のチェックボックスにチェックを入れてください（これで後でPythonファイルの実行が楽になります）。その後、`Install Now`ボタンをクリック。

![](https://screensaver01.zap-hosting.com/index.php/s/Z57KiQwHqP3RpPy/preview)

### ステップ3: インストール完了
ファイルのインストールが完了するまでしばらく待ちます。少し時間がかかることもあるので気長にどうぞ。:)

![](https://screensaver01.zap-hosting.com/index.php/s/XA2Y3DGezb84Ek9/preview)

完了したら`Close`を押して、サーバー上でPythonを使い始めましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/t7xPKRtsJ7kGRxw/preview)

## コードの実行

Pythonがサーバーにインストールされたので、Pythonプログラムを実行できます。

### インタープリタモード

コマンドプロンプトやPowerShellで`python`コマンドを実行するとPythonインタープリタが起動します。`>>>`の後に有効なPythonコードを書いて`Enter`を押すと実行されます。終了するには`exit()`を入力するか、ウィンドウを閉じてください。

![](https://screensaver01.zap-hosting.com/index.php/s/DskKi5Ac28ERY38/preview)

### .pyファイルの実行

`.py`ファイルを実行するには、コマンドプロンプトやPowerShellで`python3 [filename].py`と入力します。`[filename]`は実行したいファイルのパスに置き換えてください。

:::tip
多くのオンラインで見つかるプログラムは`python3 main.py`で実行できます。`main.py`は多くのPythonプログラムの一般的な起点だからです。
:::

また、Windows上でPython（.py）ファイルをダブルクリックしたり、右クリックしてPythonで開くことでも実行可能です。

## 仮想環境

Pythonプログラムを書くときにpipから外部パッケージをインストールする必要があるかもしれません。これらはグローバルにインストールしてすべての.pyスクリプトで使うこともできますが、仮想環境（venv）を作成することもできます。

### venvの作成

まず、ファイルエクスプローラーでvenvを作成したいフォルダに移動し、準備ができたら`python -m venv .`を実行します。これで現在の場所に必要なファイルがインストールされます。

### 有効化と無効化

venv内で`pip install`などのコマンドを実行するには、`.\Scripts\activate`を実行して仮想環境を有効化します。これでコンソールはvenv内で動作し、スクリプトはローカルにインストールされたパッケージのみアクセス可能になります。

作業が終わったら`deactivate`コマンドでvenvを無効化して元に戻れます。

![](https://screensaver01.zap-hosting.com/index.php/s/Ws5BosJzJ78s7Y9/preview)

## まとめ

おめでとうございます！VPSにPythonを無事インストール＆設定できました！もし質問や問題があれば、毎日対応しているサポートチームまでお気軽にお問い合わせください！

<InlineVoucher />