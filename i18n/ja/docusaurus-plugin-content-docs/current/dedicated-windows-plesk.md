---
id: dedicated-windows-plesk
title: "専用サーバー：Pleskのインストール"
description: "初心者から上級者まで、Pleskでウェブサイトやサーバーを効率的に管理する方法をチェック → 今すぐ詳しく見る"
sidebar_label: Pleskのインストール
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Pleskは、ウェブサイト、サーバー、メールアカウントなどを使いやすいインターフェースで管理できる総合的なホスティング＆サーバー管理プラットフォームです。初心者から経験豊富なウェブ開発者やシステム管理者まで幅広く使える万能ソリューションです。



## サーバーへの接続を確立する

Pleskをサーバーにインストールするには、まずサーバーに接続する必要があります。接続方法は別のガイドで詳しく解説しています：[初回アクセス（RDP）](vserver-windows-userdp.md)

## Pleskインストーラー

次に、Pleskのインストールに必要なPleskインストーラーを用意します。こちらからダウンロード可能です：[Pleskインストーラー](https://installer-win.plesk.com/plesk-installer.exe)

このインストーラーはフォルダに保存します。例として、デスクトップに作成した「Plesk」フォルダを使います。このファイルのパスが次のステップで重要になります。

![](https://screensaver01.zap-hosting.com/index.php/s/qpQK28F3oPezWR8/preview)

### コマンドプロンプトを開く

インストールのためにCMDコンソールを開きます。  
[Windows] + [R]キーの組み合わせで開くか、Windowsの検索で「command」と入力して起動します。

![](https://screensaver01.zap-hosting.com/index.php/s/ZHCiRtYrFK43Xbn/preview)

### Pleskのインストール

CMDコンソールで、Pleskインストーラーを保存したディレクトリに移動します。例では「デスクトップ」の「Plesk」フォルダです。

このディレクトリ移動はCMDの「*cd*」コマンドで行います。

![](https://screensaver01.zap-hosting.com/index.php/s/sCCpiogDGsrGN9F/preview)

正しいディレクトリに移動したら、最後にインストーラーを実行します。  
`plesk-installer.exe`を起動し、最新のPleskバージョンが自動でインストールされます。

![](https://screensaver01.zap-hosting.com/index.php/s/TKrkZagQr4CC7Hr/preview)

コマンド: `plesk-installer.exe --select-product-id=panel --select-release-latest --installation-type=recommended`

:::info
インストールには30分から60分ほどかかります。完了するとPleskがインストールされ、すぐに使える状態になります。
:::





## まとめ

おめでとうございます！Pleskのインストールが無事完了しました。  
もし質問やサポートが必要な場合は、いつでもお気軽にサポートチームまでご連絡ください。毎日対応していますよ！🙂