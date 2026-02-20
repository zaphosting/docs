---
id: vserver-windows-plesk
title: "WindowsサーバーにPleskをセットアップ - 強力なコントロールパネルでウェブサイトを管理しよう"
description: "初心者から上級者まで使えるPleskの多機能プラットフォームで、ウェブサイトやサーバーを効率的に管理する方法をチェック → 今すぐ詳しく"
sidebar_label: Pleskのインストール
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Pleskは、ウェブサイト、サーバー、メールアカウントなどを使いやすいインターフェースで管理できる総合的なホスティング＆サーバー管理プラットフォームです。初心者から経験豊富なウェブ開発者やシステム管理者まで幅広く対応できる万能ソリューションです。  
<InlineVoucher />


## サーバーへの接続を確立する

Pleskをサーバーにインストールするには、まずサーバーに接続する必要があります。接続方法は別のガイドで詳しく解説しています：[初回アクセス（RDP）](vserver-windows-userdp.md)

## Pleskインストーラー

次に、Pleskのインストールに必要なPleskインストーラーを用意します。こちらからダウンロード可能です：[Pleskインストーラー](https://installer-win.plesk.com/plesk-installer.exe)

ダウンロードしたインストーラーはフォルダに保存します。例として、デスクトップに作成した「Plesk」フォルダを使います。このファイルのパスが次のステップで重要になります。

![](https://screensaver01.zap-hosting.com/index.php/s/kLWzpPdxXRPKbHP/preview)

### コマンドプロンプトを開く

インストールのためにCMDコンソールを開きます。  
[Windows] + [R]キーの組み合わせで「ファイル名を指定して実行」を開き、「command」と入力してもOKです。

![](https://screensaver01.zap-hosting.com/index.php/s/Bxy33gxjASsf5G3/preview)

### Pleskのインストール

CMDコンソールで、Pleskインストーラーを保存したディレクトリに移動します。例では「デスクトップ」の「Plesk」フォルダです。

ディレクトリ移動はCMDの「*cd*」コマンドで行います。

![](https://screensaver01.zap-hosting.com/index.php/s/QzQmFzpi3SDQbbE/preview)

正しいディレクトリに移動したら、最後にインストーラーを実行します。  
`plesk-installer.exe`を起動すると、最新のPleskバージョンが自動でインストールされます。

![](https://screensaver01.zap-hosting.com/index.php/s/2XcY2WEyX48RM4G/preview)

コマンド: `plesk-installer.exe --select-product-id=panel --select-release-latest --installation-type=recommended`

:::info
インストールには30分から60分ほどかかります。完了後、Pleskがインストールされてすぐに使える状態になります。
:::


## まとめ

おめでとうございます！これでVPS/専用サーバーにPleskのインストールと設定が完了しました。  
もし質問や問題があれば、いつでも対応可能なサポートチームまでお気軽にお問い合わせください！

<InlineVoucher />