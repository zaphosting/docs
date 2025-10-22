---
id: dedicated-windows-userdp
title: "専用サーバー：リモートデスクトップ（RDP）でWindowsサーバーにアクセスする方法"
description: "RDPを使ってWindowsサーバーに簡単にリモート接続し、さまざまなデバイスから安全にアクセスする方法をチェック → 今すぐ詳しく見る"
sidebar_label: 初回アクセス（RDP）
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Windows OSはリモートデスクトップ（RDP）プロトコルを使って、他のWindowsシステムに簡単にリモート接続できるようになっています。このガイドでは、RDPを使ってあなたのWindowsサーバーに接続するシンプルな手順を紹介します。

<InlineVoucher />

## Windowsからの接続方法

RDPが登場して以来、Windows OSには**リモートデスクトップ接続**アプリが標準でインストールされています。Windowsの検索バーで「リモートデスクトップ接続」と検索するか、Windowsキー/アイコンを押してスタートメニューの検索バーから簡単にアクセスできます。

![](https://screensaver01.zap-hosting.com/index.php/s/TRfpNC3rACZ3KGB/preview)

新しいウィンドウで、**コンピューター**欄にサーバーのIPアドレスを入力し、**接続**をクリックします。するとWindowsのネイティブ認証画面が表示されるので、**ユーザー名**に`Administrator`を、**パスワード**にあなたのWindowsサーバーのパスワードを入力してください。

![](https://screensaver01.zap-hosting.com/index.php/s/GCRs6KbGHz27HBS/preview)

入力後、**OK**を押せばWindowsサーバーにリモート接続できます。もし接続できない場合は、入力した認証情報が正しいか再度確認してください。

:::info
初回接続時に証明書エラーが表示されることがありますが、これは正常で無視して問題ありません。
:::

これでWindowsサーバーへの接続が完了です。

## その他のリモート接続（RDP）アプリ

### デスクトップアプリ

以下のプログラムは、リモートデスクトッププロトコル（RDP）を使ってWindowsサーバーに接続するのに便利な代替アプリです。Windowsからアクセスする場合は、前述の標準アプリを使うのが一番手軽で安定しているのでおすすめです。

- Remote Desktop Connection Manager (RDCMan)
- mRemoteNG
- RoyalTS
- Devolutions Remote Desktop Manager
- DameWare Mini Remote Control

### モバイルデバイスアプリ

最近では、Microsoftが主要なモバイルOS向けに公式のリモートデスクトップ（RDP）アプリを提供しています。モバイルでの利用にはこれらのアプリがおすすめで、多くの便利な機能が搭載されています。

プラットフォーム別のアプリはこちらからダウンロード可能です：[Android](https://play.google.com/store/apps/details?id=com.microsoft.rdc.androidx&hl=en) / [iOS](https://apps.apple.com/us/app/remote-desktop-mobile/id714464092)

<InlineVoucher />