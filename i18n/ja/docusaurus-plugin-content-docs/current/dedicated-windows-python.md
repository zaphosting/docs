---
id: dedicated-windows-python
title: 'WindowsサーバーにPythonをセットアップ - 開発と自動化を始めよう'
description: "WindowsサーバーにPythonランタイムをインストールして、Pythonプログラムを効率的に動かす方法を学ぼう → 今すぐチェック"
sidebar_label: Pythonのインストール
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

このガイドでは、WindowsにPythonランタイムをインストールする手順を紹介します。以下の手順はRDP経由で実行してください。RDPでサーバーに接続する方法がわからない場合は、[初回アクセス（RDP）](vserver-windows-userdp.md)ガイドをチェックしてみてください。



## インストール

### ステップ1：ファイルのダウンロード
お好きなブラウザを開きます（このガイドではChromeを使います）そして[https://www.python.org/downloads/](https://www.python.org/downloads/)にアクセス。

![](https://screensaver01.zap-hosting.com/index.php/s/WAET5RFn6yBfNzC/preview)

次に、`Download Python [version]`ボタンをクリックしてダウンロードが完了するまで待ちます。

![](https://screensaver01.zap-hosting.com/index.php/s/b8j6ZbfGWoBjpep/preview)

### ステップ2：Pythonのインストール
ダウンロードしたインストーラーを実行します。インストール設定の画面が表示されるので、必ず下部の`Add python.exe to PATH`のチェックボックスにチェックを入れてください（これで後でPythonファイルを簡単に実行できます）。その後、`Install Now`ボタンをクリック。

![](https://screensaver01.zap-hosting.com/index.php/s/Z57KiQwHqP3RpPy/preview)

### ステップ3：インストール完了
ファイルのインストールが完了するまでしばらく待ちましょう。少し時間がかかることもあります。:)

![](https://screensaver01.zap-hosting.com/index.php/s/XA2Y3DGezb84Ek9/preview)

完了したら`Close`を押して、サーバー上でPythonを使い始められます。

![](https://screensaver01.zap-hosting.com/index.php/s/t7xPKRtsJ7kGRxw/preview)

## コードの実行

Pythonがサーバーにインストールできたので、Pythonプログラムを実行してみましょう。

### インタープリタモード

コマンドプロンプトやPowerShellで`python`コマンドを実行するとPythonインタープリタが起動します。`>>>`の後に有効なPythonコードを書いて`Enter`を押すと実行されます。終了したいときは`exit()`を入力するか、ウィンドウを閉じてください。

![](https://screensaver01.zap-hosting.com/index.php/s/DskKi5Ac28ERY38/preview)

### .pyファイルの実行

`.py`ファイルを実行するには、コマンドプロンプトやPowerShellで`python3 [filename].py`と入力します。`[filename]`は実行したいファイルのパスに置き換えてください。

:::tip
多くのオンラインで見つかるプログラムは`python3 main.py`で実行できます。`main.py`は多くのPythonプログラムのスタートポイントだからです。
:::

また、Windows上でPython（.py）ファイルをダブルクリックしたり、右クリックしてPythonで開くことも可能です。

## 仮想環境

Pythonプログラムを書くとき、pipから外部パッケージをインストールすることがあります。これらはグローバルにインストールしてすべての.pyスクリプトで使うこともできますが、仮想環境（venv）を作成して使うこともできます。

### venvの作成

まず、ファイルエクスプローラーでvenvを作成したいフォルダに移動し、そこで`python -m venv .`を実行します。これで必要なファイルがその場所にインストールされます。

### 有効化と無効化

venv内で`pip install`などのコマンドを使うには、`.\Scripts\activate`を実行して仮想環境を有効化します。これでコンソールはvenv内で動作し、スクリプトはローカルにインストールされたパッケージのみを参照します。

作業が終わったら`deactivate`コマンドでvenvを無効化できます。

![](https://screensaver01.zap-hosting.com/index.php/s/Ws5BosJzJ78s7Y9/preview)



## まとめ

おめでとうございます、Pythonのインストールが無事完了しました！もし質問やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にお問い合わせくださいね 🙂