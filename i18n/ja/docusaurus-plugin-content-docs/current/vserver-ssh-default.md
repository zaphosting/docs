---
id: vserver-ssh-default
title: "VPS: プロフィールでのデフォルトSSHキー管理"
description: "ZAP-HostingでSSHキーのセットアップを自動化し、サーバーへのアクセスを高速化＆製品インストールをスムーズにする方法 → 今すぐチェック"
sidebar_label: デフォルトSSHキー
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
ZAP-Hostingのウェブインターフェースに新しく追加された機能の一つが、アカウントにデフォルトのSSHキーをウェブサイトから登録できるようになったことです。これの超便利なポイントは、プロフィールページで設定したSSHキーが、初回の製品セットアップやOS再インストール時に自動的に適用されること。つまり、SSHキーを手動で設定する手間が省けて時間を節約できちゃいます。

<InlineVoucher />

## 必要条件
この機能を使うには、SSHキーが生成されている必要があります。すでにSSHキーを持っているなら、次のセクションへ進んでください。

SSHキーを生成するには、VPSのウェブインターフェースの **Information->Access & Security** セクションにアクセスするのがおすすめです。

![](https://screensaver01.zap-hosting.com/index.php/s/N9FxTpdfibwCWSD/preview)

ここで、緑色の **Generate SSH Key** ボタンが見えます。このボタンを押すと、SSHプライベートキーが自動的にPCにダウンロードされます。このキーを使ってSSH接続を行います。

![](https://screensaver01.zap-hosting.com/index.php/s/tdYfxJYNBFC2R9k/preview)

表示されるプロンプトにあるパブリックキーを必ず保存してください。これがプロフィールにSSHキーを登録するときに必要なキーです。

![](https://screensaver01.zap-hosting.com/index.php/s/Tc9MEGamAC9dDF3/preview)

準備ができたら次のセクションへ進みましょう。

## プロフィールでのSSHキー管理
アカウントのデフォルトSSHキー管理は簡単です。**[ZAP-Hostingのプロフィールページ](https://zap-hosting.com/en/customer/home/profile/)** にアクセスし、下にスクロールして **Standard SSH Keys** セクションを見つけてください。

![](https://screensaver01.zap-hosting.com/index.php/s/QzefcYZWPGz3rJr/preview)

### 新しいキーの追加
キーを追加するには、まず緑色のプラスアイコンを押して作成プロンプトを開きます。ここで、SSHキーに付けたい名前を入力します。

次に、SSHパブリックキーを2番目のフィールドにペーストしてください。SSHキーはOpenSSH形式で、`ssh-rsa`で始まり、サフィックスで終わる形式である必要があります。準備ができたら、緑色の **Save** ボタンを押してキーを追加しましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/CBTcDSiBLfNYi2R/preview)

:::tip
必ず**SSHパブリックキー**を登録してください。SSHプライベートキーはログイン時にパブリックキーと認証するために使います。
:::

これでZAP-HostingアカウントにデフォルトSSHキーが追加されました。

### キーの編集や削除
キーを編集したい場合は、青い目のアイコンを押すと編集用のプロンプトが開きます。ここで現在の情報を確認し、そのまま編集して保存できます。

削除したい場合は、赤いゴミ箱アイコンを押すとそのキーを削除できます。

![](https://screensaver01.zap-hosting.com/index.php/s/56mPcDswpZBaHms/preview)

<InlineVoucher />