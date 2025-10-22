---
id: vserver-linux-jitsi
title: "VPS: Jitsi Meetのインストール"
description: "Debianで自分だけの安全で使いやすいJitsi Meetビデオ会議サーバーをセットアップする方法をチェック → 今すぐ詳しく見る"
sidebar_label: Jitsi Meetのインストール
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Jitsi Meetはオープンソースのビデオ会議ソフトで、自分のサーバーにビデオ会議環境を簡単に構築できるよ。Jitsi Meetの大きなメリットは使いやすさ！ブラウザだけで使えて（スマホならJitsiアプリ）、外部サービスにログインする必要もなし。各ビデオ会議には専用のURLが割り当てられて、初心者でも気軽に参加できるのがポイント。
注意：特別な設定をしないと、Jitsi Meetサーバーにアクセスした誰でも自分のビデオ会議を開始できちゃうから気をつけてね。

<InlineVoucher />

## DebianサーバーにJitsi Meetをインストールする

ここではDebianサーバーにJitsi Meetサーバーをインストールする方法を紹介するよ。基本的にJitsi MeetはUbuntuなど他のLinuxサーバーでも動くし、インストール手順もほぼ同じだよ。

### 準備

Jitsi Meetをちゃんと使うには、自分のドメインを使ってJitsiサーバーにアクセスするのがおすすめ。Jitsi Meet用にサブドメインを作るのがベストだね。例として「meet.zap-testdomain.de」を使うよ。
ZAP-Hostingのドメインなら、DNS管理で新しいエントリーを作成しよう。サブドメイン名を「名前」欄に、サーバーのIPアドレスを「値」欄に入力する。今回の例では「meet」を名前に、Jitsi MeetをインストールするZAPテストサーバーのIP「185.239.239.49」を値に入れるよ。（自分のサーバーのIPを入れてね）

IPアドレスでJitsi Meetサーバーにアクセスすることもできるけど、SSL証明書にはドメインが必要だから、ドメインなしだとブラウザがセキュリティ警告を出すよ。

サブドメインの設定が反映されるまで最大24時間かかることがあるから、その後にサーバーの準備をしよう。
PuttyやWinSCPでサーバーに接続してね。
続ける前にサーバーが最新状態か確認しよう。必要ならコマンドはsudo付きで実行してね（例：「sudo apt-get update」）

```
$	apt-get update
```
```
$	apt-get upgrade
```

もしサーバーにファイアウォールが入ってなければ、UFWなどをインストールしよう：
```
$	apt install ufw
```

ファイアウォールに以下の設定を追加：

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

まずはgnupgパッケージをインストール：
```
$	apt install gnupg
```

パッケージインストール後、JitsiのGPGキーをダウンロードして追加：
```
$	wget https://download.jitsi.org/jitsi-key.gpg.key
```
```
$	apt-key add jitsi-key.gpg.key
```

Jitsiリポジトリを追加するためにファイルを編集：
```
$	nano /etc/apt/sources.list.d/jitsi-stable.list
```

エディタに以下の行を追加して保存＆終了：
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

インストール中にホスト名の入力を求められるよ。ここには作成したサブドメインを入れてね。今回の例だと「meet.zap-testdomain.de」

![](https://screensaver01.zap-hosting.com/index.php/s/oBEDBDx6GqzAoFa/preview)

「Ok」で確定すると、自己署名TLS証明書を作るか既存の証明書を使うか聞かれるよ。「新しい自己署名証明書を作成する」を選択しよう：

![](https://screensaver01.zap-hosting.com/index.php/s/jcr84boZHiakNDS/preview)

これでJitsi Meetのインストールは完了。あとはTLS証明書を取得するだけだよ。
Certbotパッケージをインストール：
```
$	apt install certbot
```

TLS証明書取得用スクリプトを実行：
```
$	/usr/share/jitsi-meet/scripts/install-letsencrypt-cert.sh
```

実行中にletsencrypt.orgに送るメールアドレスを聞かれるから入力してEnterを押してね。

これでJitsi Meetがサーバーに完全にインストールされて稼働しているはず。正しくインストールされたか確認するには、ブラウザのURLバーに設定したサブドメインを入れてアクセスしてみてね。今回の例は：
```
https://meet.zap-testdomain.de
```

## まとめ

おめでとう！Jitsiのインストールと設定が無事完了したよ。もし質問や問題があれば、毎日対応しているサポートチームに気軽に連絡してね！

<InlineVoucher />