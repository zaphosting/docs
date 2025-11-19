---
id: dedicated-windows-manage-users
title: "専用サーバー：Windowsサーバーでのユーザー管理"
description: "複数のWindowsサーバーユーザーを管理して、安全で同時アクセス可能なリモート環境と個別の作業環境を実現 → 今すぐ詳しくチェック"
sidebar_label: ユーザー追加＆管理
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Windows OSには標準でユーザー管理機能があり、追加ユーザーの管理が簡単にできます。個別ユーザーを使うメリットには、各自の資格情報で最大2人まで同時にリモートデスクトップアクセスが可能、個別のデスクトップやファイルアクセス、シンプルな権限管理システムなどがあります。このガイドでは、Windowsサーバー上でのユーザー管理の手順を解説します。

## 準備

まずはRDPでWindowsサーバーに接続しましょう。接続方法がわからない場合は、[初回アクセス（RDP）](dedicated-windows-userdp.md)ガイドを参考にしてください。

:::important 管理者権限について
Windowsサーバーにログインする際は、**Administrator**ユーザーまたは管理者権限を持つユーザーを使ってください。そうしないとユーザー管理ができません。
:::

Windowsサーバーで作成した各ユーザーは、自分の資格情報でリモートデスクトップ接続が可能です。また、ユーザーごとに独立したデスクトップ、ファイル、プログラム環境が用意され、管理者権限を持つユーザーのみが他ユーザーの環境を閲覧できます。全ユーザー向けにインストールされたプログラムは全ユーザーが利用可能です。

通常のWindows Serverライセンスでは、**2**アカウントまで同時ログインが可能です。これを超えて新たに接続すると、先に接続していたユーザーが切断されます。ユーザーアカウントの作成数に制限はありません。

## ユーザー管理画面へのアクセス

ユーザーアカウントの管理はコントロールパネルの設定から行います。Windowsサーバーのスタートメニューを開き、**コントロールパネル**を選択してください。次に**ユーザーアカウント**を選ぶとサブメニューが表示されます。

![](https://screensaver01.zap-hosting.com/index.php/s/zePaY2rcCwTgaCo/preview)

再度、メニューから**ユーザーアカウント**を選択すると、ユーザーアカウントの概要画面に移動します。

![](https://screensaver01.zap-hosting.com/index.php/s/rafwZP8rDnycjpa/preview)

概要ページで**別のアカウントの管理**を選択すると、主にユーザー管理を行う**アカウント管理**画面にアクセスできます。

![](https://screensaver01.zap-hosting.com/index.php/s/iyQ9ZXoFLdMTNSZ/preview)

これでWindowsサーバーのユーザー管理ができる状態です。次のセクションから、やりたい操作に応じて進めてください。

## 新規ユーザーの作成

ユーザー作成を始めるには、**アカウント管理**画面の**ユーザーアカウントの追加**を選択します。

![](https://screensaver01.zap-hosting.com/index.php/s/x4EpREF5FJoLycw/preview)

画面にアカウント情報入力フォームが表示されます。ユーザー名、パスワード、パスワードのヒントを入力してください。パスワードは強力なものを設定しないとエラーになることがあります。

![](https://screensaver01.zap-hosting.com/index.php/s/dAyCkyAA2BLwNNe/preview)

入力が完了したら「次へ」を押して新規ユーザーを作成します。

![](https://screensaver01.zap-hosting.com/index.php/s/zEZGXQH9ErcCbgD/preview)

最後に、新規ユーザーをリモートデスクトップ接続リストに追加して、RDP接続を許可する必要があります。コントロールパネルに戻り、**システムとセキュリティ**を開きます。

![](https://screensaver01.zap-hosting.com/index.php/s/NtNg7sRRgDdnffr/preview)

ここで**リモートアクセスの許可**を選択し、新しいメニューを開きます。

![](https://screensaver01.zap-hosting.com/index.php/s/diBL57HtffpNAGX/preview)

メニュー下部の**ユーザーの選択...**を押すと、現在リモートデスクトップアクセスが許可されているユーザー一覧が表示されます。

![](https://screensaver01.zap-hosting.com/index.php/s/TP7LW2pWboFKixy/preview)

表示されたメニューで**追加...**を選択し、さらに**詳細設定...**をクリックします。

![](https://screensaver01.zap-hosting.com/index.php/s/MTinLT9PDA45TAS/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/SNd89fxNXKbfBBt/preview)

ウィンドウが拡張されるので、**今すぐ検索**ボタンを押してユーザー一覧を取得し、新規ユーザー（例：`ZAP-Docs`）を探します。

![](https://screensaver01.zap-hosting.com/index.php/s/spQL9fTNd778bry/preview)

ユーザーを選択し、**OK**を押してすべてのメニューを閉じて変更を確定してください。

これで新規ユーザーがリモートデスクトップアクセス可能な状態で作成されました。新ユーザーの資格情報でRDP接続を試して、正常に動作するか確認しましょう。

## ユーザーの管理

**アカウント管理**画面から、管理したいユーザーを選択して簡単に操作できます。

:::important 管理者権限について
ユーザー管理を行うには、メインの**Administrator**アカウントか、管理者権限を持つユーザーでログインしている必要があります。これにより必要な権限が付与されます。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/yJPTWKieZNZXifH/preview)

この画面で、ユーザー名の変更、パスワードリセット、アカウントタイプの変更、ユーザー削除など様々な管理操作が可能です。

![](https://screensaver01.zap-hosting.com/index.php/s/tkPtbrmfsnK3TcG/preview)