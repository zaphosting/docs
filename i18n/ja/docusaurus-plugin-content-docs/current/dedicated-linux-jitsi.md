---
id: dedicated-linux-jitsi
title: "専用サーバー：Jitsi Meetのインストール"
description: "自分だけの安全なJitsi Meetビデオ会議サーバーをセットアップして、簡単でプライベートなオンラインミーティングを実現しよう → 今すぐ詳しくチェック"
sidebar_label: Jitsi Meetのインストール
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Jitsi Meetはオープンソースのビデオ会議ソフトで、自分のサーバー上にビデオ会議環境を構築できます。Jitsi Meetの大きなメリットは使いやすさ：ブラウザだけで利用でき（スマホの場合はJitsiアプリ）、外部サービスへのログインは不要です。各ビデオ会議には専用のURLが割り当てられ、誰でも簡単に参加可能。初心者でも使いやすいビデオ会議ツールとして最適です。  
注意：特別な設定をしない限り、Jitsi Meetサーバーにアクセスした全員が自分のビデオ会議を開始できる状態になります。

## DebianサーバーへのJitsi Meetインストール

ここではDebianサーバーにJitsi Meetサーバーをインストールする方法を紹介します。基本的にJitsi MeetはUbuntuなど他のLinuxサーバーでも動作し、インストール手順もほぼ同じです。

### 準備

Jitsi Meetを正しく使うには、自分のドメインでJitsiサーバーにアクセスするのがおすすめです。Jitsi Meetサーバー用にサブドメインを作成すると便利です。例として、ドメイン meet.zap-testdomain.de を使います。  
ZAP-Hostingのドメインの場合は、DNS管理画面で新しいエントリーを作成してください。  
「名前」欄にサブドメイン名を、「値」欄にサーバーのIPアドレスを入力します。  
例では「meet」を名前欄に、Jitsi MeetをインストールするZAPテストサーバーのIPアドレス 185.239.239.49 を値欄に入力します（必ず自分のサーバーのIPアドレスを入力してください）。

IPアドレスでJitsi Meetサーバーにアクセスすることも可能ですが、SSL証明書にはドメインが必要です。ドメインがないとブラウザでセキュリティ警告が表示されます。

サブドメインの設定が反映されるまで最大24時間かかることがあります。設定が完了したらサーバーのインストール準備を始めましょう。  
PuttyやWinSCPでサーバーに接続してください。  
続ける前にサーバーが最新状態か確認しましょう。必要に応じてコマンドは管理者権限で実行してください。コマンドの前に「sudo」を付けます（例：`sudo apt-get update`）。

```
$	apt-get update
```
```
$	apt-get upgrade
```

サーバーにファイアウォールがインストールされていなければ、UFWなどをインストールしましょう：
```
$	apt install ufw
```

ファイアウォールに以下の設定を追加します：

```
$	ufw allow OpenSSH
$	ufw allow 80/tcp
$	ufw allow 443/tcp
$	ufw allow 4443/tcp
$	ufw allow 10000/udp
```

ファイアウォールを有効化：
```
$	ufw enable
```

状態を確認：
```
$	ufw status
```

### Jitsi Meetのインストール

Jitsi Meetをインストールするには、まずgnupgパッケージが必要です：
```
$	apt install gnupg
```

パッケージインストール後、JitsiのGPGキーをダウンロードして追加します：
```
$	wget https://download.jitsi.org/jitsi-key.gpg.key
```
```
$	apt-key add jitsi-key.gpg.key
```

Jitsi MeetをインストールするためにJitsiリポジトリを追加します：
```
$	nano /etc/apt/sources.list.d/jitsi-stable.list
```

エディタに以下の行を追加し、保存して閉じます：
```
$	deb https://download.jitsi.org stable/
```

これでJitsi Meetをインストールできます。念のためパッケージを再度更新しましょう：
```
$	apt update
```
```
$	apt install jitsi-meet
```

インストール中にホスト名の入力を求められます。ここにはJitsi Meetサーバー用に作成したサブドメインを入力してください。  
例のテストサーバーでは：meet.zap-testdomain.de

![](https://screensaver01.zap-hosting.com/index.php/s/jHEGSQARQrDKLoz/preview)

「Ok」で入力を確定すると、自己署名TLS証明書を作成するか既存の証明書を使うかの選択画面が表示されます。  
「新しい自己署名証明書を生成する」を選択してください：

![](https://screensaver01.zap-hosting.com/index.php/s/QWmYp3gdXMnBdnC/preview)

これでJitsi Meetのインストールは完了です。あとはTLS証明書を取得するだけです。  
Certbotパッケージをインストールします：
```
$	apt install certbot
```

TLS証明書取得用スクリプトを実行：
```
$	/usr/share/jitsi-meet/scripts/install-letsencrypt-cert.sh
```

実行中にletsencrypt.orgに送信するメールアドレスの入力を求められます。メールアドレスを入力して確定してください。

これでJitsi Meetはサーバー上に完全にインストールされ、稼働しているはずです。  
正しくインストールされたか確認するには、ブラウザのURLバーに設定したサブドメインを入力してください。  
このチュートリアルの例では：
```
https://meet.zap-testdomain.de
```

Jitsi Meetの画面が表示されれば、すぐに1回目のビデオ会議を始められます。