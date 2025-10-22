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

Jitsi Meetはオープンソースのビデオ会議ソフトで、自分のサーバー上にビデオ会議環境を構築できます。Jitsi Meetの大きなメリットは操作の簡単さ。ブラウザだけで使え（スマホの場合はJitsiアプリ）、外部サービスへのログインも不要です。各ビデオ会議には専用のURLが割り当てられ、誰でも簡単に参加可能。ビデオ会議に慣れていない人とも気軽に使えるのが魅力です。  
注意：特別な設定をしない限り、Jitsi Meetサーバーにアクセスした誰でも自分のビデオ会議を開始できてしまいます。

<InlineVoucher />

## DebianサーバーへのJitsi Meetインストール

以下ではDebianサーバーにJitsi Meetサーバーをインストールする手順を紹介します。基本的にJitsi MeetはUbuntuなど他のLinuxサーバーでも動作し、インストール方法もほぼ同じです。

### 準備

Jitsi Meetを快適に使うには、自分のドメインでJitsiサーバーにアクセスするのがおすすめです。Jitsi Meetサーバー用にサブドメインを作成すると便利。例として「meet.zap-testdomain.de」というドメインを使います。  
ZAP-Hostingのドメインの場合はDNS管理画面で新しいエントリを作成してください。  
「名前」欄にサブドメイン名を、「値」欄にサーバーのIPアドレスを入力します。  
例では「meet」を名前欄に、Jitsi MeetをインストールするZAPテストサーバーのIPアドレス「185.239.239.49」（実際は自分のサーバーのIPを入力）を値欄に入れます。

Jitsi MeetサーバーにはIPアドレスでもアクセス可能ですが、SSL証明書にはドメインが必要です。ドメインがないとブラウザでセキュリティ警告が出ます。

サブドメインの設定が反映されるまで最大24時間かかることがあります。設定が完了したらサーバーの準備に進みましょう。  
PuttyやWinSCPでサーバーに接続します。  
続ける前にサーバーが最新状態か確認してください。必要に応じてコマンドの前に「sudo」を付けて実行します（例：「sudo apt-get update」）。

```
$	apt-get update
```
```
$	apt-get upgrade
```

サーバーにファイアウォールが入っていなければ、例えばUFWをインストールしましょう：
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

Jitsi Meetのリポジトリを追加します：
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

インストール中にホスト名の入力を求められます。ここには作成したJitsi Meet用サブドメインを入力してください。  
例のテストサーバーでは「meet.zap-testdomain.de」です。

![](https://screensaver01.zap-hosting.com/index.php/s/jHEGSQARQrDKLoz/preview)

「Ok」で確定すると、自己署名TLS証明書を作成するか既存の証明書を使うかの選択画面が出ます。  
「新しい自己署名証明書を生成する」を選択してください。

![](https://screensaver01.zap-hosting.com/index.php/s/QWmYp3gdXMnBdnC/preview)

これでJitsi Meetのインストールは完了し、あとはTLS証明書を取得するだけです。  
Certbotパッケージをインストールします：
```
$	apt install certbot
```

TLS証明書取得用スクリプトを実行：
```
$	/usr/share/jitsi-meet/scripts/install-letsencrypt-cert.sh
```

実行中にletsencrypt.orgに送信するメールアドレスの入力を求められます。メールアドレスを入力して確定してください。

これでJitsi Meetがサーバーに完全にインストールされ、稼働しているはずです。  
正しくインストールされたか確認するには、ブラウザのURLバーに設定したサブドメインを入力してアクセスしてみましょう。  
このチュートリアルの例では以下のURLです：
```
https://meet.zap-testdomain.de
```

Jitsi Meetの画面が表示されれば、すぐに1回目のビデオ会議を始められます。

<InlineVoucher />