---
id: vserver-linux-ssh2fa
title: "VPS: SSHの二要素認証（2FA）"
description: "Google Authenticatorの2FAでSSHのセキュリティを強化し、安全にサーバーアクセス！Linux環境を守る方法を今すぐチェック"
sidebar_label: 2FA (SSH)
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

GoogleのSSH二要素認証（2FA）サービス、**Google Authenticator SSH**は、SSH（Secure Shell）アクセスのセキュリティを強化するために、認証の第二層を追加します。SSHはすでにリモートサーバーへの暗号化接続を確立する安全な方法ですが、2FAを導入することで、パスワードに加えてGoogle Authenticatorが生成するワンタイム認証コードの入力も必要になり、セキュリティレベルがさらにアップします。このガイドでは、Linuxサーバーに**Google Authenticator SSH**サービスをインストールし設定する手順を解説します。

<InlineVoucher />

## インストール

まずはLinux VPSにGoogle Authenticatorをインストールします。以下のコマンドを実行してください：

```
sudo apt install libpam-google-authenticator
```

インストール確認のため「Y」を入力してEnterを押すと、Google Authenticatorがインストールされます！

![](https://screensaver01.zap-hosting.com/index.php/s/AnKdPXEzKdB5xWS/preview)

`google-authenticator`と入力してGoogle Authenticatorを起動します。QRコードが表示されるのに十分なウィンドウサイズがあるか確認してください。もし小さい場合は「CTRL+C」で中断し、再度実行してください。

![](https://screensaver01.zap-hosting.com/index.php/s/8w9aDz5ZbSmNPZ9/preview)

実行確認が求められたら「Y」を入力して承認します。QRコードが表示されるので、スマホの認証アプリでスキャンしてください。ここではGoogle Authenticatorを例に使います：

![](https://screensaver01.zap-hosting.com/index.php/s/J5CL6mjzPRMSiap/preview)

バックアップコードは必ずコピーしておきましょう。認証アプリを紛失した場合に一度だけ使えます。

![](https://screensaver01.zap-hosting.com/index.php/s/itdjPyGrFb7Wq39/preview)

アプリにはログイン時に必要なコードが表示されます。こんな感じです：

![](https://screensaver01.zap-hosting.com/index.php/s/TW24xBe26TbgCqE/preview)

次に以下の質問が表示されます：

1. Google Authenticatorの設定を保存しますか？
2. 30秒ごとに1回のログインに制限しますか？
3. コードの有効時間を延長しますか？
4. 30秒ごとに3回までのログインに制限しますか？（ブルートフォース対策）

セキュリティのため、すべて「Yes」で答えることをおすすめします。

![](https://screensaver01.zap-hosting.com/index.php/s/bdYRncwk7ssQyYJ/preview)

## 設定

次にGoogle Authenticatorを有効にするための設定を行います。2つのファイルを編集します。

### /etc/ssh/sshd_config

`/etc/ssh/sshd_config`で必要なモジュールを有効化します。以下のコマンドでファイルを開きます：

```
sudo nano /etc/ssh/sshd_config
```

テキストエディタが開くので、矢印キーで移動し、自由に編集してください。編集後は「CTRL + X」→「Y」→「Enter」で保存します。

`UsePAM`と`ChallengeResponseAuthentication`の2行が`yes`になっていることを確認してください。こんな感じです：

![](https://screensaver01.zap-hosting.com/index.php/s/n8MzX8724T2GFAF/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/zLk98HrkF4jk4Jf/preview)

保存したら、以下のコマンドでSSHを再起動します：

```
sudo systemctl restart ssh
```

### /etc/pam.d/sshd

次に`/etc/pam.d/sshd`にGoogle Authenticatorを追加します。以下のコマンドでファイルを開きます：

```
sudo nano /etc/pam.d/sshd
```

ファイルの最後までスクロールし、以下の行を追加してください：

```
auth required pam_google_authenticator.so
```

![](https://screensaver01.zap-hosting.com/index.php/s/xwodXzPifANsQAM/preview)

保存は「CTRL + X」→「Y」→「Enter」で完了です。

## アクセスのテスト

いよいよ2FAでの初ログインです。上記の設定を終えたら、SSH接続を再起動してください。

![](https://screensaver01.zap-hosting.com/index.php/s/cN3x3aFbtfxdi7M/preview)

通常通りパスワードを入力した後、認証コードの入力を求められます。スマホの認証アプリに表示されている最新の2FAコードを入力しましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/y3dgYXezL8sDbJe/preview)

これでログイン完了です！

## まとめ

おめでとうございます！SSHの2FAを無事に有効化・設定できました。もし何か質問やトラブルがあれば、いつでもサポートチームに連絡してくださいね。毎日サポート対応しています！

<InlineVoucher />