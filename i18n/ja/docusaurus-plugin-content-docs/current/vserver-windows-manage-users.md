---
id: vserver-windows-manage-users
title: "VPS: Windowsサーバーでユーザー管理"
description: "Windowsサーバーで複数ユーザーアカウントを管理し、安全で同時接続可能なリモートアクセスや個別デスクトップを実現 → 今すぐ詳しくチェック"
sidebar_label: ユーザー追加＆管理
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Windows OSには標準でユーザー管理機能があり、追加ユーザーの管理が簡単にできます。個別ユーザーを使うメリットは、最大2人まで同時に自分の資格情報でリモートデスクトップ接続ができること、個別のデスクトップやファイルアクセスが可能なこと、そしてシンプルな権限管理ができることです。このガイドでは、Windowsサーバーでのユーザー管理方法を解説します。

<InlineVoucher />

## 準備

まずはRDPでWindowsサーバーに接続しましょう。接続方法がわからない場合は、[初回アクセス（RDP）](vserver-windows-userdp.md)ガイドを参照してください。

:::important 管理者権限について
Windowsサーバーにログインする際は、**Administrator**ユーザーか管理者権限を持つユーザーを使ってください。そうしないとユーザー管理ができません。
:::

Windowsサーバーで作成した各ユーザーは、自分の資格情報でリモートデスクトップ接続が可能です。また、各ユーザーは独立したデスクトップ、ファイル、プログラムを持ち、管理者権限を持つユーザーのみが他のユーザーの内容を閲覧できます。全ユーザー向けにインストールされたプログラムは全ユーザーが利用可能です。

通常のWindows Serverライセンスでは、**2**アカウントまで同時ログインが可能です。これを超えて新たに接続すると、先に接続していたユーザーが切断されます。ユーザーアカウントの作成数に制限はありません。

## ユーザー管理へのアクセス

ユーザーアカウントの管理はコントロールパネルの設定から行います。Windowsサーバーのスタートメニューを開き、**コントロールパネル**を選択してください。次に**ユーザーアカウント**を選ぶとサブメニューに移動します。

![](https://screensaver01.zap-hosting.com/index.php/s/zePaY2rcCwTgaCo/preview)

もう一度メニューから**ユーザーアカウント**を選択すると、概要画面に移動します。

![](https://screensaver01.zap-hosting.com/index.php/s/rafwZP8rDnycjpa/preview)

概要ページで**別のアカウントの管理**を選択すると、主にユーザー管理に使う**アカウントの管理**セクションにアクセスできます。

![](https://screensaver01.zap-hosting.com/index.php/s/iyQ9ZXoFLdMTNSZ/preview)

これでWindowsサーバーのユーザー管理ができる状態です。行いたい操作に応じて次のセクションに進んでください。

## 新規ユーザーの作成

ユーザー作成を始めるには、**アカウントの管理**セクション内の**ユーザーアカウントの追加**を選択します。

![](https://screensaver01.zap-hosting.com/index.php/s/x4EpREF5FJoLycw/preview)

画面にアカウント情報入力のプロンプトが表示されます。ユーザー名、パスワード、パスワードのヒントを入力してください。パスワードは強力なものにしないとエラーになる場合があります。

![](https://screensaver01.zap-hosting.com/index.php/s/dAyCkyAA2BLwNNe/preview)

準備ができたら「次へ」を押すと新しいユーザーが作成されます。

![](https://screensaver01.zap-hosting.com/index.php/s/zEZGXQH9ErcCbgD/preview)

最後に、新ユーザーをリモートデスクトップ接続リストに追加して、サーバーがRDP接続を許可するように設定します。コントロールパネルの**システムとセキュリティ**に移動してください。

![](https://screensaver01.zap-hosting.com/index.php/s/NtNg7sRRgDdnffr/preview)

ここで**リモートアクセスの許可**を選択すると新しいメニューが開きます。

![](https://screensaver01.zap-hosting.com/index.php/s/diBL57HtffpNAGX/preview)

メニュー下部の**ユーザーの選択...**を押すと、現在リモートデスクトップアクセスが許可されているユーザー一覧が表示されます。

![](https://screensaver01.zap-hosting.com/index.php/s/TP7LW2pWboFKixy/preview)

表示されたメニューで**追加...**を選択し、さらに**詳細設定...**をクリックします。

![](https://screensaver01.zap-hosting.com/index.php/s/MTinLT9PDA45TAS/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/SNd89fxNXKbfBBt/preview)

ウィンドウが拡張されるので、**今すぐ検索**ボタンを押してユーザー一覧を表示し、新規ユーザー（例：`ZAP-Docs`）を探します。

![](https://screensaver01.zap-hosting.com/index.php/s/spQL9fTNd778bry/preview)

ユーザーを選択し、**OK**を押してすべてのメニューを閉じて変更を確定してください。

これで新しいユーザーがリモートデスクトップアクセス権付きで作成されました。新ユーザーの資格情報でRDP接続を試して、正常に動作するか確認しましょう。

## ユーザーの管理

**アカウントの管理**セクションから簡単にユーザーを管理できます。管理したいユーザーを選択してください。

:::important 管理者権限について
ユーザー管理を行うには、メインの**Administrator**アカウントか、管理者権限を持つユーザーでログインしている必要があります。これにより必要な権限が付与されます。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/yJPTWKieZNZXifH/preview)

このページでは、ユーザー名やパスワードの変更、アカウントタイプの調整、ユーザー削除など様々な操作が可能です。

![](https://screensaver01.zap-hosting.com/index.php/s/tkPtbrmfsnK3TcG/preview)

<InlineVoucher />