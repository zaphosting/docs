---
id: dedicated-linux-jitsi
title: "LinuxサーバーにJitsi Meetをセットアップ - 自分だけのビデオ会議プラットフォームをホストしよう"
description: "安全なJitsi Meetビデオ会議サーバーを自分でセットアップして運用する方法を解説 → 今すぐチェック！"
sidebar_label: Jitsi Meetのインストール
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Jitsi Meetはオープンソースのビデオ会議ソフトで、自分のサーバー上にビデオ会議環境を簡単に構築できます。Jitsi Meetの大きなメリットは使いやすさ。ブラウザだけで利用でき（スマホの場合はJitsiアプリ）、外部サービスへのログインも不要です。各ビデオ会議には専用のURLが割り当てられ、初心者でも気軽に参加可能。  
注意：特別な設定をしない限り、Jitsi Meetサーバーにアクセスした誰でも自分のビデオ会議を開始できてしまいます。

## DebianサーバーにJitsi Meetをインストールする

ここではDebianサーバーにJitsi Meetサーバーをインストールする手順を紹介します。基本的にUbuntuなど他のLinuxサーバーでもほぼ同じ手順で動作します。

### 準備

Jitsi Meetを快適に使うには、自分のドメインを使ってJitsiサーバーにアクセスするのがおすすめです。Jitsi Meetサーバー用にサブドメインを作るのがベスト。例として「meet.zap-testdomain.de」を使います。  
ZAP-Hostingのドメインなら、DNS管理画面で新しいエントリを作成してください。  
「名前」欄にサブドメイン名（例：meet）を、「値」欄にサーバーのIPアドレスを入力します。  
例では「meet」を名前に、Jitsi MeetをインストールするZAPテストサーバーのIP「185.239.239.49」を値に入力します。（実際は自分のサーバーのIPを入れてね）

IPアドレスだけでもJitsi Meetサーバーにアクセスはできますが、SSL証明書にはドメインが必須です。ドメインがないとブラウザでセキュリティ警告が出ます。

サブドメインの設定が反映されるまで最大24時間かかることがあります。設定が完了したらサーバーの準備に進みましょう。  
PuttyやWinSCPでサーバーに接続してください。  
続ける前にサーバーが最新状態か確認しましょう。必要に応じてコマンドの前に「sudo」を付けて実行してください（例：sudo apt-get update）。

```
$	apt-get update
```
```
$	apt-get upgrade
```

サーバーにファイアウォールが入っていなければ、UFWなどをインストールしましょう：
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

まずはgnupgパッケージをインストールします：
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

Jitsiリポジトリを追加します：
```
$	nano /etc/apt/sources.list.d/jitsi-stable.list
```

エディタに以下の行を追加し、保存して閉じます：
```
$	deb https://download.jitsi.org stable/
```

パッケージリストを更新してJitsi Meetをインストール：
```
$	apt update
```
```
$	apt install jitsi-meet
```

インストール中にホスト名の入力を求められます。ここには作成したサブドメインを入力してください。  
例：meet.zap-testdomain.de

![](https://screensaver01.zap-hosting.com/index.php/s/jHEGSQARQrDKLoz/preview)

「Ok」で確定すると、自己署名TLS証明書を作成するか既存の証明書を使うか聞かれます。  
「新しい自己署名証明書を生成する」を選択しましょう：

![](https://screensaver01.zap-hosting.com/index.php/s/QWmYp3gdXMnBdnC/preview)

これでJitsi Meetのインストールは完了です。あとはTLS証明書を取得するだけ。  
Certbotパッケージをインストールします：
```
$	apt install certbot
```

TLS証明書取得用スクリプトを実行：
```
$	/usr/share/jitsi-meet/scripts/install-letsencrypt-cert.sh
```

実行中にletsencrypt.orgに送信するメールアドレスを聞かれます。メールアドレスを入力して確定してください。

これでJitsi Meetがサーバーに完全インストールされ、稼働しているはずです。  
正しくインストールされたか確認するには、ブラウザのURLバーに設定したサブドメインを入力してアクセスしてみてください。  
このチュートリアルの例では：
```
https://meet.zap-testdomain.de
```

Jitsi Meetの画面が表示されれば、すぐに1回目のビデオ会議を始められます！