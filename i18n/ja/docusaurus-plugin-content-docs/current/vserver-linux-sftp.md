---
id: vserver-linux-sftp
title: "VPS: SFTPで接続を確立する方法"
description: "SFTPを使って安全にファイルを転送し、暗号化された接続でデータを守る方法をチェック → 今すぐ詳しく見る"
sidebar_label: SFTP接続
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';





## はじめに

SFTPは、インターネットやネットワークを介してコンピューター間でファイルを安全に転送するためのプロトコルです。**「SSHファイル転送プロトコル」**または**「セキュアファイル転送プロトコル」**の略で、**SSHプロトコル（Secure Shell）**をベースにしています。

FTP（ファイル転送プロトコル）とは異なり、FTPではデータが暗号化されずに転送されますが、SFTPはすべてのデータを暗号化しているため、不正アクセスから保護されます。

<InlineVoucher />



## 接続の確立

**SFTP**で接続するには、rootユーザーのログイン情報を使います。ここではWinSCPアプリを使った接続設定の例を紹介します。WinSCPで**新しいセッション**を作成しましょう。

![img](https://screensaver01.zap-hosting.com/index.php/s/HDsMr5mnJpC7FtM/download)

新しいセッションの設定画面で、**転送プロトコル**に`SFTP`を選択します。次に、サーバーの**IPアドレス**とポート番号**22**を入力。ユーザー名とパスワードには`root`ユーザーのログイン情報を使います。

![img](https://screensaver01.zap-hosting.com/index.php/s/Wq59YHDnirKYkDr/download)

:::warning SSHキーの利用について
パスワードの代わりにSSHキーを使う場合は、**詳細設定**をクリックし、**SSH -> 認証**に進んでください。そこでSSHキーを登録できます。
:::

初めてSFTPで接続すると、パソコンがまだサーバーを認識していないため、このメッセージが表示されます。サーバーを信頼できる場合は**「はい」**をクリックしてください。これでサーバーのセキュリティキーが保存され、次回以降は確認が不要になります。新しいサーバーに初めて接続するときの通常の手順です。

![img](https://screensaver01.zap-hosting.com/index.php/s/DxErsePZJnkxyCp/download)





## まとめ

すべての手順を正しく行えば、サーバーへのSFTP接続が無事に確立できています。もし質問やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にお問い合わせくださいね！🙂

<InlineVoucher />