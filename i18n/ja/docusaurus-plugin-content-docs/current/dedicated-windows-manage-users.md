---
id: dedicated-windows-manage-users
title: "専用サーバー：Windowsサーバーでユーザー管理"
description: "複数のWindowsサーバーユーザーを管理して、安全で同時にリモートアクセス可能なパーソナライズされた環境を作る方法 → 今すぐチェック"
sidebar_label: ユーザー追加＆管理
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Windows OSには標準でユーザー管理機能があり、追加ユーザーの管理が簡単にできます。個別ユーザーを使うメリットには、最大2人までの同時リモートデスクトップアクセス（各自の認証情報で）、個別のデスクトップやファイルアクセス、シンプルな権限管理システムなどがあります。このガイドでは、Windowsサーバーでのユーザー管理の手順を解説します。

<InlineVoucher />

## 準備

まずはRDPでWindowsサーバーに接続しましょう。接続方法がわからない場合は、[初回アクセス（RDP）](dedicated-windows-userdp.md)ガイドを参照してください。

:::important 管理者権限について
Windowsサーバーにログインする際は、**Administrator**ユーザーか管理者権限を持つユーザーを使ってください。そうしないとユーザー管理ができません。
:::

Windowsサーバーで作成した各ユーザーは、自分の認証情報でリモートデスクトップ接続が可能です。また、各ユーザーは独立したデスクトップ、ファイル、プログラムを持ち、管理者権限を持つユーザーだけが他のユーザーの環境を閲覧できます。全ユーザー向けにインストールされたプログラムは全員が利用可能です。

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

最後に、新ユーザーをリモートデスクトップ接続リストに追加して、サーバーがRDP接続を許可するように設定します。コントロールパネルから**システムとセキュリティ**に進んでください。

![](https://screensaver01.zap-hosting.com/index.php/s/NtNg7sRRgDdnffr/preview)

ここで**リモートアクセスの許可**を選択すると新しいメニューが開きます。

![](https://screensaver01.zap-hosting.com/index.php/s/diBL57HtffpNAGX/preview)

メニュー下部の**ユーザーの選択...**を押すと、現在リモートデスクトップアクセスが許可されているユーザー一覧が表示されます。

![](https://screensaver01.zap-hosting.com/index.php/s/TP7LW2pWboFKixy/preview)

表示されたメニューで**追加...**を選択し、次に**詳細設定...**をクリックします。

![](https://screensaver01.zap-hosting.com/index.php/s/MTinLT9PDA45TAS/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/SNd89fxNXKbfBBt/preview)

ウィンドウが拡張されるので、**今すぐ検索**ボタンを押してユーザー一覧を取得し、新しく作成したユーザー（例：`ZAP-Docs`）を見つけてください。

![](https://screensaver01.zap-hosting.com/index.php/s/spQL9fTNd778bry/preview)

ユーザーを選択し、**OK**を押してすべてのメニューを閉じて変更を確定します。

これでWindowsサーバーに新しいユーザーがリモートデスクトップアクセス権付きで作成されました。作成したユーザーの認証情報でRDP接続を試して、正常に動作するか確認しましょう。

## ユーザーの管理

**アカウントの管理**セクションから簡単にユーザーを管理できます。管理したいユーザーを選択してください。

:::important 管理者権限について
ユーザー管理を行うには、メインの**Administrator**アカウントか、管理者権限を持つユーザーでログインしている必要があります。これにより必要な権限が付与されます。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/yJPTWKieZNZXifH/preview)

このページでは、ユーザー名の変更、パスワードのリセット、アカウントタイプの変更、ユーザー削除など様々な操作が可能です。

![](https://screensaver01.zap-hosting.com/index.php/s/tkPtbrmfsnK3TcG/preview)

<InlineVoucher />