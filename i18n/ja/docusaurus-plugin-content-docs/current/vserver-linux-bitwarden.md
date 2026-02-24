---
id: vserver-linux-bitwarden
title: "LinuxサーバーにBitwardenをセットアップ - パスワード管理を安全に"
description: "エンドツーエンド暗号化と強力な認証機能でパスワードを管理するBitwardenを安全にセルフホストする方法 → 今すぐチェック"
sidebar_label: Bitwardenのインストール
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Bitwardenは、ゼロ知識証明とエンドツーエンド暗号化を使ってデータを保護するオープンソースのパスワードマネージャーです。クラウドサービスとしても使えますし、セルフホストも可能。強力な認証情報の生成、保存、自動入力機能が備わっています。

![img](https://screensaver01.zap-hosting.com/index.php/s/RwKmstAct5kNQwB/preview)

自分でこのサービスをホストしようと考えていますか？セットアップから設定まで、必要なポイントをすべて丁寧に解説します。

<InlineVoucher />



## 前提条件

**Bitwarden**をインストールする前に、スムーズな導入と最適なパフォーマンスを保証するために、ホスティング環境が以下の要件を満たしていることを確認してください。

| ハードウェア   | 最低限       | ZAP-Hosting推奨           |
| ---------- | ------------ | -------------------------- |
| CPU        | 1 vCPUコア   | 4 vCPUコア                |
| RAM        | 2 GB         | 4 GB                      |
| ディスク容量 | 12 GB        | 25 GB                     |

ソフトウェアは必要な依存関係がすべてインストールされていること、そしてサポートされているOS上で動作していることが必要です。インストールを進める前に、以下の要件を満たしているか必ず確認してください。

**依存関係:** `Docker (Engine 26+ と Compose)`

**OS:** Docker 26+をサポートする最新のUbuntuまたはDebian

依存関係がインストールされていること、正しいOSバージョンを使っていることを確認し、Bitwardenのインストール時の互換性問題を避けましょう。



## 準備

**Bitwarden**のセットアップ前に、システムの準備が必要です。OSを最新バージョンにアップデートし、必要な依存関係をインストールします。これにより安定した環境が整い、インストール中やインストール後のトラブルを防げます。


### システムのアップデート
最新のソフトウェアとセキュリティ改善を適用するため、まずはシステムのアップデートを行いましょう。以下のコマンドを実行してください。

```
sudo apt update && sudo apt upgrade -y
```
これで最新のセキュリティパッチとソフトウェアバージョンが適用されます。

### 依存関係のインストール
アップデートが完了したら、依存関係のインストールに進みます。Bitwardenは複数のDockerコンテナで動作するため、まずDockerをインストールする必要があります。以下のコマンドを実行してください。

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Dockerのインストール手順や使い方の詳細は、当社の[Docker](dedicated-linux-docker.md)ガイドをご覧ください。



### ユーザーとディレクトリの作成

Linuxサーバーには専用の`bitwarden`サービスアカウントを作成し、そこからBitwardenをインストール・実行することを推奨します。これにより、Bitwardenのインスタンスが他のアプリケーションから分離され、安全性が高まります。

bitwardenユーザーを作成し、強力でユニークなパスワードを設定しましょう。

```
sudo adduser bitwarden
sudo passwd bitwarden
```

dockerグループが存在しない場合は作成し、bitwardenユーザーをdockerグループに追加します。

```
sudo groupadd docker
sudo usermod -aG docker bitwarden
```

作業用ディレクトリを作成し、権限を設定、所有者をbitwardenに変更します。

```
sudo mkdir /opt/bitwarden
sudo chmod -R 700 /opt/bitwarden
sudo chown -R bitwarden:bitwarden /opt/bitwarden
```



### ドメインの設定

Bitwardenはデフォルトでホストのポート80（HTTP）と443（HTTPS）で動作します。特にインターネット上で公開する場合は、ホストを指すDNSレコードを設定したドメイン（例：server.example.com）を用意しましょう。ホスト名にBitwardenを含めるのは、サーバーの役割やソフトウェアを特定されやすくなるため避けるのがおすすめです。




## インストール
すべての要件を満たし、準備が整ったらBitwardenのインストールに進みましょう。

Bitwardenのインストールスクリプトをマシンにダウンロードし、実行します。`bitwarden.sh`のある場所に相対的に`./bwdata`ディレクトリが作成されます。

```
curl -Lso bitwarden.sh "https://func.bitwarden.com/api/dl/?app=self-host&platform=linux" && chmod 700 bitwarden.sh
./bitwarden.sh install
```

インストーラーではまずBitwardenインスタンスのドメイン名（通常は設定したDNSレコード）を入力します。次にLet’s Encryptで無料の信頼されたSSL証明書を生成するか選択。生成する場合は有効期限通知用のメールアドレスを入力します。生成しない場合は証明書に関する質問が続きます。

[Bitwarden](https://bitwarden.com/host)で取得したインストールIDとインストールキーを入力し、USかEUのリージョンを選択します。これは有料サブスクリプションに接続する場合のみ影響します。

Let’s Encryptを使わない場合は、既存の証明書を`./bwdata/ssl/your.domain`に配置し、信頼済みかどうかを指定できます。自己署名証明書を生成することも可能ですが、テスト用途のみ推奨です。証明書なしを選ぶ場合は、HTTPSプロキシを前段に置かないとBitwardenが正常に動作しません。



## 設定

インストール後は、2つのファイルを使って基本設定を行います。まず`./bwdata/env/global.override.env`の環境ファイルを編集し、SMTPサーバーの情報（ホスト、ポート、SSL、ユーザー名、パスワード）を設定します。これによりBitwardenが認証メールや組織招待メールを送信可能になります。システム管理者ポータルにアクセスしたい場合は、`adminSettings__admins`に管理者メールを追加してください。

```
...
globalSettings__mail__smtp__host=<placeholder>
globalSettings__mail__smtp__port=<placeholder>
globalSettings__mail__smtp__ssl=<placeholder>
globalSettings__mail__smtp__username=<placeholder>
globalSettings__mail__smtp__password=<placeholder>
...
adminSettings__admins=
...
```

`./bitwarden.sh checksmtp`でSMTP設定を検証します。正しく設定されていれば成功メッセージが表示されます。問題があればOpenSSLの不足や値の誤りが通知されます。設定変更後は`./bitwarden.sh restart`で反映しましょう。

次に`./bwdata/config.yml`のインストールパラメータを確認します。このファイルは生成されるアセットを制御し、プロキシの背後で動かす場合やポートを変更する場合など特殊な環境では調整が必要です。変更後は`./bitwarden.sh rebuild`を実行してください。

最後に`./bitwarden.sh start`でインスタンスを起動します。初回起動はDockerイメージの取得に時間がかかることがあります。`docker ps`で全コンテナが正常に動作しているか確認しましょう。設定したドメインのWebボールトにアクセスし、必要に応じてアカウント登録してください。メール認証には正しく設定されたSMTPが必須です。

## まとめと追加リソース

おめでとうございます！これでVPS/専用サーバーにBitwardenを無事インストール・設定できました。さらに役立つ情報やサポートを得たい場合は、以下のリソースもチェックしてみてください。

- [bitwarden.com](https://bitwarden.com/) - 公式サイト
- https://bitwarden.com/help/ - Bitwardenヘルプセンター（ドキュメント）

ここにない具体的な質問があれば、いつでもサポートチームにお問い合わせください。毎日対応しているので気軽にどうぞ！🙂