---
id: dedicated-windows-port
title: "専用サーバー：Windows Defender ファイアウォールルールの管理"
description: "Windows Defender ファイアウォールルールの効果的な管理方法と安全なサーバー通信のためのポートフォワーディング最適化を解説 → 今すぐチェック"
sidebar_label: ポートフォワーディング（ファイアウォール）
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Windows OSには、サーバーとインターネット間の入出力トラフィックを管理するWindows Defender ファイアウォールが標準搭載されています。このガイドでは、ファイアウォールルールの管理方法とポートフォワーディングの基本的なコツを紹介します。

## Windows Defender ファイアウォールへのアクセス

Windows OSには、**Windows Defender ファイアウォール 高度なセキュリティ**というシステムアプリがあり、ここでファイアウォールルールを一元管理できます。

Windowsの検索バーで名前を入力するか、Windowsキーを押してスタートメニューの検索バーから簡単にアクセス可能です。

![](https://screensaver01.zap-hosting.com/index.php/s/MEdQwo2do8zA84m/preview)

## ルールの管理

特にゲームサーバーやウェブサーバーのようにインターネット経由でアクセスされるアプリやプロセスは、クライアントがサーバー（ホスト）と通信できるようにポートフォワーディングが必要です。

:::info
Windowsはデフォルトで必要なアプリケーションのみファイアウォールを開放し、それ以外のポートは閉じたままにします。これは不要なポートの公開を防ぎ、リスクを減らすためです。例えばゲームを初めて起動した際にUACの確認が出るのは、新しいファイアウォールルールを許可するためです。
:::

Windowsでのルール管理は主に2つの方法があります。プログラム単位でルールを作成するか、ポート単位でルールを作成するかです（ポート単位はそのポートを使う全てのプログラムやプロセスに適用されます）。

ルールには2種類あります：
- インバウンドルール：インターネットからサーバーへの通信を制御するルール
- アウトバウンドルール：サーバーからインターネットへの通信を制御するルール

通常、ポートフォワーディングではクライアントとの通信を許可するために両方のルールを作成しますが、用途や環境によって異なります。

![](https://screensaver01.zap-hosting.com/index.php/s/a8HCX6ZyWfemQtN/preview)

### プログラムルール

プログラムルールの作成は推奨される方法で、特定のプログラムやプロセスに通信を限定できるため、ポート全体を開放するより安全です。

ここでは、接続を許可するインバウンドルールとアウトバウンドルールの2つを作成します。

以下の例では**インバウンド**ルールの作成手順のみ説明します。アウトバウンドルールも同様の手順なので、必ず自分で繰り返して作成してください。

まず、サイドバーの**インバウンドルール**を右クリックし、**新しいルール...**を選択します。

![](https://screensaver01.zap-hosting.com/index.php/s/mnZXWgEWyxSciE4/preview)

最初の画面で、ルールの種類として**プログラム**を選択します。

![](https://screensaver01.zap-hosting.com/index.php/s/NPm9ae8BsD78An9/preview)

次に、ポートフォワーディングしたいプログラムを参照ボタンで選択します。例としてMozilla Firefoxブラウザを選びました。

![](https://screensaver01.zap-hosting.com/index.php/s/XsS2iTa4JjXF8j5/preview)

アクションの画面では、**接続を許可する**を選択します。

![](https://screensaver01.zap-hosting.com/index.php/s/pnFz9EoxPqPT8xS/preview)

プロファイル画面では全てのオプションにチェックを入れたまま次へ進みます。最後の画面で、わかりやすい名前を付けて必要なら説明も追加してください。

準備ができたら、**完了**ボタンを押してルールを作成します。

![](https://screensaver01.zap-hosting.com/index.php/s/dpWEYFYGtWQYkw3/preview)

これでWindowsサーバー用のプログラムルールが作成できました。同じ手順で**アウトバウンドルール**も作成してください。

### ポートルール

ポート単位のルール作成も多くのケースで便利で、手順はプログラムルールと似ています。

ここでもインバウンドとアウトバウンドの2つのルールを作成します。

以下の例では**インバウンド**ルールの作成のみ説明します。アウトバウンドルールも同様の手順なので、必ず自分で繰り返して作成してください。

まず、サイドバーの**インバウンドルール**を右クリックし、**新しいルール...**を選択します。

![](https://screensaver01.zap-hosting.com/index.php/s/mnZXWgEWyxSciE4/preview)

最初の画面で、ルールの種類として**ポート**を選択します。

![](https://screensaver01.zap-hosting.com/index.php/s/eobA3wzbwQSqjpK/preview)

次に、ポートの種類（TCPかUDP）とフォワードしたいポート番号を指定します。TCPとUDP両方をフォワードしたい場合は、それぞれ別のルールを作成してください。

例として、Minecraftのデフォルトポートである25565（TCP）を指定しています。

![](https://screensaver01.zap-hosting.com/index.php/s/yMco5L6ERWiLEHk/preview)

アクションの画面では、**接続を許可する**を選択します。

![](https://screensaver01.zap-hosting.com/index.php/s/pnFz9EoxPqPT8xS/preview)

プロファイル画面では全てのオプションにチェックを入れたまま次へ進みます。最後の画面で、わかりやすい名前を付けて必要なら説明も追加してください。

準備ができたら、**完了**ボタンを押してルールを作成します。

![](https://screensaver01.zap-hosting.com/index.php/s/Ro5k6JgTF73exoH/preview)

これでWindowsサーバー用のポートルールが作成できました。同じ手順で**アウトバウンドルール**も作成してください。