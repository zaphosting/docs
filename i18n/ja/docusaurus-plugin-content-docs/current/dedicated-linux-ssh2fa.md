---
id: dedicated-linux-ssh2fa
title: "専用サーバー: SSH 二要素認証"
description: "Google Authenticatorの2FAでSSHセキュリティを強化し、安全なサーバーアクセスを実現 → 今すぐ詳しくチェック"
sidebar_label: 2FA (SSH)
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

GoogleのSSH二要素認証（2FA）サービス、**Google Authenticator SSH**は、SSH（Secure Shell）アクセスのセキュリティを強化するために、認証の第二層を追加します。SSHはすでにリモートサーバーへの暗号化接続を確立する安全な方法ですが、2FAを導入することで、ユーザーはパスワードに加えてGoogle Authenticatorが生成するワンタイム認証コードの入力も求められ、セキュリティレベルがさらにアップします。このガイドでは、Linuxサーバーに**Google Authenticator SSH**サービスをインストールし設定する手順を解説します。

## インストール

まずはLinux VPSにGoogle Authenticatorをインストールしましょう。以下のコマンドを実行してください：

```
sudo apt install libpam-google-authenticator
```

パッケージのインストール確認で「Y」を入力し、Enterを押すとGoogle Authenticatorがインストールされます！

![](https://screensaver01.zap-hosting.com/index.php/s/mtqePXTr5KdoHkm/preview)

`google-authenticator`と入力してGoogle Authenticatorを起動します。QRコードが表示されるのに十分なウィンドウサイズを確保してください。もし小さい場合は「CTRL+C」で中断し、再度実行してください。

![](https://screensaver01.zap-hosting.com/index.php/s/agW9EHjs5Aimc43/preview)

実行確認が表示されるので「Y」を入力して進めます。QRコードが表示されるので、スマホの認証アプリでスキャンしてください。ここではGoogle Authenticatorを例に使います：

![](https://screensaver01.zap-hosting.com/index.php/s/CmQERELXNotsgZB/preview)

バックアップコードは必ずコピーしておきましょう。認証アプリを紛失した場合に一度だけ使えます。

![](https://screensaver01.zap-hosting.com/index.php/s/pkKM2SANJbEejFD/preview)

アプリにはログイン時に必要なコードが表示されます。こんな感じです：

![](https://screensaver01.zap-hosting.com/index.php/s/QnBxLbR8Grf2GL4/preview)

次に以下の質問が表示されます：

1. Google Authenticatorの設定を保存しますか？
2. 30秒ごとに1回のログインに制限しますか？
3. コードの有効時間を延長しますか？
4. 30秒ごとに3回までのログインに制限しますか？（ブルートフォース対策）

セキュリティのため、すべて「Yes」で進めることをおすすめします。

![](https://screensaver01.zap-hosting.com/index.php/s/A9RmFA6nWgKzSF6/preview)

## 設定

次にGoogle Authenticatorを実際に使うための設定を行います。2つのファイルを編集します。

### /etc/ssh/sshd_config

`/etc/ssh/sshd_config`で必要なモジュールを有効化します。以下のコマンドでファイルを開きます：

```
sudo nano /etc/ssh/sshd_config
```

テキストエディタが開くので、矢印キーで移動し、自由に編集できます。編集後は`CTRL + X`、`Y`、`Enter`で保存してください。

`UsePAM`と`ChallengeResponseAuthentication`の2行が`yes`になっていることを確認しましょう。こんな感じです：

![](https://screensaver01.zap-hosting.com/index.php/s/f5a9G5Wif9HcwQq/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/qdf4JCqLgZ85nia/preview)

保存したら、以下のコマンドでSSHを再起動します：

```
sudo systemctl restart ssh
```

### /etc/pam.d/sshd

次に`/etc/pam.d/sshd`にGoogle Authenticatorを追加します。以下のコマンドでファイルを開きます：

```
sudo nano /etc/pam.d/sshd
```

ファイルの一番下までスクロールし、以下の行を追加してください：

```
auth required pam_google_authenticator.so
```

![](https://screensaver01.zap-hosting.com/index.php/s/Mgw8tJJtTbkg7T3/preview)

保存は`CTRL + X`、`Y`、`Enter`で完了です。

## アクセスのテスト

いよいよ2FAでの初ログインです。上記の設定を終えたら、SSH接続を再起動してください。

![](https://screensaver01.zap-hosting.com/index.php/s/RwaymAzjGjMgbYL/preview)

通常通りパスワードを入力します。続いてコードの入力を求められるので、最新の2FAコードを入力してください。

![](https://screensaver01.zap-hosting.com/index.php/s/w7BFMMTMdcwXj2x/preview)

これでログイン完了です！

## まとめ

おめでとうございます！SSHアクセスに2FAを無事設定できました。もし質問やサポートが必要な場合は、いつでもお気軽にサポートチームまでご連絡ください。毎日対応していますよ！🙂