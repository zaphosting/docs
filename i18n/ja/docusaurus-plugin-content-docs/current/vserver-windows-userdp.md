---
id: vserver-windows-userdp
title: "VPS: リモートデスクトップ（RDP）でWindowsサーバーにアクセスする方法"
description: "RDPを使ってWindowsサーバーに安全にリモート接続し、アクセス管理を簡単にする方法をチェック → 今すぐ詳しく見る"
sidebar_label: 初回アクセス（RDP）
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Windows OSはリモートデスクトップ（RDP）プロトコルを使って、他のWindowsシステムへ簡単にリモート接続できるようになっています。このガイドでは、RDPを使ってWindowsサーバーに接続するシンプルな手順を紹介します。

<InlineVoucher />

## 接続情報の準備

Windowsサーバーにアクセスするアプリケーションに関わらず、接続時には必ず認証情報の入力が必要です。

まずはサーバーのウェブインターフェースのコントロールパネルにアクセスし、**アクセス＆セキュリティ**セクションへ進みましょう。このページで、主にサーバーの**IPアドレス**とユーザー接続情報を確認できます。ユーザー認証情報は、`Administrator`という**ユーザー名**と**パスワード**で構成されています。

サーバーが新規の場合は、このページのプロンプトから初期のランダム生成されたパスワードを確認できます。そうでない場合はセキュリティ上パスワードは伏せられていますが、忘れた場合は同じページで新しいパスワードを生成または設定可能です。

![](https://screensaver01.zap-hosting.com/index.php/s/amLy6sC6XzBN5fQ/preview)

接続情報が揃ったら、次のセクションで適切な接続アプリを選びましょう。

## Windowsからの接続

RDPの登場以来、Windows OSには標準で**リモートデスクトップ接続**アプリが搭載されています。Windowsの検索バーで「リモートデスクトップ接続」と検索するか、Windowsキーを押してスタートメニューの検索バーからアクセスできます。

![](https://screensaver01.zap-hosting.com/index.php/s/TRfpNC3rACZ3KGB/preview)

新しいウィンドウで、**コンピューター**欄にサーバーのIPアドレスを入力し、**接続**をクリックします。するとWindowsのネイティブ認証画面が表示されるので、ユーザー名に`Administrator`、パスワードにWindowsサーバーのパスワードを入力してください。

![](https://screensaver01.zap-hosting.com/index.php/s/GCRs6KbGHz27HBS/preview)

**OK**を押せば、Windowsサーバーへリモート接続できます。もし接続できない場合は、入力した認証情報が正しいか再確認しましょう。

:::info
初回接続時に証明書エラーが表示されることがありますが、これは正常で無視して問題ありません。
:::

これでWindowsサーバーへの接続が完了です。

## その他のリモート接続（RDP）アプリ

### デスクトップアプリ

以下のプログラムは、WindowsサーバーへRDPで接続するのに便利な代替アプリです。Windowsからアクセスする場合は、前述の標準アプリを使うのが手間も少なくおすすめです。

- Remote Desktop Connection Manager (RDCMan)
- mRemoteNG
- RoyalTS
- Devolutions Remote Desktop Manager
- DameWare Mini Remote Control

### モバイルデバイスアプリ

最近では、Microsoftが主要なモバイルOS向けに公式のリモートデスクトップ（RDP）アプリを提供しています。モバイルでの利用にはこれらがおすすめで、多くの便利な機能が搭載されています。

プラットフォーム別のダウンロードはこちらから：[Android](https://play.google.com/store/apps/details?id=com.microsoft.rdc.androidx&hl=en) と [iOS](https://apps.apple.com/us/app/remote-desktop-mobile/id714464092)

<InlineVoucher />