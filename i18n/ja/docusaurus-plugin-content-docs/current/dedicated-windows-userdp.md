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

Windows OSはリモートデスクトップ（RDP）プロトコルを使って、他のWindowsシステムへ簡単にリモート接続できるようになっています。このガイドでは、RDPを使ってあなたのWindowsサーバーに簡単に接続する方法を紹介します。

## Windowsからの接続方法

RDPが登場して以来、Windows OSには標準で**リモートデスクトップ接続**アプリが搭載されています。Windowsの検索バーで「リモートデスクトップ接続」と検索するか、Windowsキーを押してスタートメニューの検索バーから簡単にアクセスできます。

![](https://screensaver01.zap-hosting.com/index.php/s/TRfpNC3rACZ3KGB/preview)

新しいウィンドウが開いたら、**コンピューター**欄にあなたのサーバーのIPアドレスを入力し、**接続**をクリックしてください。するとWindowsの認証画面が表示されるので、**ユーザー名**に`Administrator`を、**パスワード**にはあなたのWindowsサーバーのパスワードを入力します。

![](https://screensaver01.zap-hosting.com/index.php/s/GCRs6KbGHz27HBS/preview)

入力が完了したら**OK**を押して、Windowsサーバーにリモート接続できるはずです。もし接続できない場合は、入力した認証情報が正しいか再度確認してください。

:::info
初回接続時に証明書エラーが表示されることがありますが、これは正常な挙動で無視して問題ありません。
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

各プラットフォームのアプリはこちらからダウンロード可能です：[Android](https://play.google.com/store/apps/details?id=com.microsoft.rdc.androidx&hl=en) / [iOS](https://apps.apple.com/us/app/remote-desktop-mobile/id714464092)