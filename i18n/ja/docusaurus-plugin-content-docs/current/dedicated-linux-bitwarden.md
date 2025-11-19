---
id: dedicated-linux-bitwarden
title: "専用サーバー：LinuxでBitwardenをセットアップ"
description: "エンドツーエンド暗号化でパスワードを安全に管理するBitwardenのクラウドまたはセルフホストセットアップ方法 → 今すぐ詳しく学ぼう"
sidebar_label: Bitwardenのインストール
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Bitwardenは、ゼロ知識・エンドツーエンド暗号化を使ってデータを保護するオープンソースのパスワードマネージャーです。クラウドサービスとしてもセルフホストとしても利用でき、強力な認証情報の生成、保存、自動入力機能を備えています。

![img](https://screensaver01.zap-hosting.com/index.php/s/RwKmstAct5kNQwB/preview)

セルフホストでの運用を検討中？セットアップから設定まで、必要なポイントをすべて丁寧に解説します。

## 前提条件

**Bitwarden**をインストールする前に、スムーズな導入と最適なパフォーマンスを確保するために、ホスティング環境が以下の要件を満たしていることを確認してください。

| ハードウェア   | 最低要件     | ZAP-Hosting推奨スペック |
| ---------- | ----------- | -------------------------- |
| CPU        | 1 CPUコア | 4 CPUコア                |
| RAM        | 2 GB        | 4 GB                       |
| ディスク容量 | 12 GB       | 25 GB                      |

ソフトウェアは必要な依存関係がすべてインストールされていること、対応OS上で動作していることが必要です。インストール前に以下の要件を満たしているか必ず確認してください：

**依存関係:** `Docker (Engine 26+ と Compose)`

**OS:** Docker 26+をサポートする最新のUbuntuまたはDebian

依存関係がインストールされていること、正しいOSバージョンを使用していることを確認し、Bitwardenのインストール時の互換性問題を避けましょう。

## 準備

**Bitwarden**のセットアップ前に、システムの準備を行います。OSを最新バージョンにアップデートし、必要な依存関係をインストールすることで、安定した環境を整え、インストール中やインストール後のトラブルを防ぎます。

### システムのアップデート
最新のソフトウェアとセキュリティ改善を適用するため、まずはシステムのアップデートを行いましょう。以下のコマンドを実行してください：

```
sudo apt update && sudo apt upgrade -y
```

これにより、最新のセキュリティパッチとソフトウェアバージョンが適用されます。

### 依存関係のインストール
アップデートが完了したら、依存関係のインストールに進みます。Bitwardenは複数のDockerコンテナで構成されるため、まずDockerをインストールする必要があります。以下のコマンドを実行してください：

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Dockerのインストール方法や使い方の詳細は、当社の[Dockerガイド](dedicated-linux-docker.md)をご覧ください。

### ユーザーとディレクトリの作成

Linuxサーバーに専用の`bitwarden`サービスアカウントを作成し、そのアカウントでBitwardenをインストール・実行することを推奨します。これにより、Bitwardenのインスタンスが他のアプリケーションから分離され、安全性が向上します。

bitwardenユーザーを作成し、強力でユニークなパスワードを設定してください。

```
sudo adduser bitwarden
sudo passwd bitwarden
```

dockerグループが存在しない場合は作成し、bitwardenユーザーをdockerグループに追加します：

```
sudo groupadd docker
sudo usermod -aG docker bitwarden
```

作業ディレクトリを作成し、権限を設定、所有者をbitwardenに割り当てます：

```
sudo mkdir /opt/bitwarden
sudo chmod -R 700 /opt/bitwarden
sudo chown -R bitwarden:bitwarden /opt/bitwarden
```

### ドメインの設定

Bitwardenはデフォルトでホストのポート80（HTTP）と443（HTTPS）で動作します。特にインターネット上で公開する場合は、ホストを指すDNSレコードを設定したドメイン（例：server.example.com）を用意しましょう。ホスト名に「bitwarden」を含めるのは、サーバーの役割やソフトウェア情報の漏洩を防ぐため避けるのがおすすめです。

## インストール

要件を満たし準備が整ったら、Bitwardenのインストールに進みます。

Bitwardenのインストールスクリプトをダウンロードし、実行してください。`bitwarden.sh`のある場所に相対的に`./bwdata`ディレクトリが作成されます。

```
curl -Lso bitwarden.sh "https://func.bitwarden.com/api/dl/?app=self-host&platform=linux" && chmod 700 bitwarden.sh
./bitwarden.sh install
```

インストーラーではまずBitwardenインスタンスのドメイン名（通常は設定済みのDNSレコード）を入力します。次にLet’s Encryptで無料の信頼されたSSL証明書を生成するか選択します。生成する場合は有効期限通知用のメールアドレスを入力します。生成しない場合は証明書に関する質問が続きます。

[Bitwarden](https://bitwarden.com/host)で取得したインストールIDとインストールキーを入力し、地域（USまたはEU）を選択します。これはセルフホストインスタンスを有料サブスクリプションに接続する場合のみ影響します。

Let’s Encryptを使わない場合は、既存の証明書ファイルを`./bwdata/ssl/your.domain`に配置し、信頼されているかどうかを指定します。自己署名証明書を生成することも可能ですが、テスト用途のみ推奨です。証明書なしを選択した場合は、HTTPSプロキシを設置しないとBitwardenアプリケーションは動作しません。

## 設定

インストール後は、2つのファイルを使って基本設定を行います。まず`./bwdata/env/global.override.env`の環境ファイルを編集し、SMTPサーバーのホスト、ポート、SSL、ユーザー名、パスワードを設定してください。これによりBitwardenが認証メールや組織招待メールを送信できます。システム管理者ポータルにアクセスする場合は、`adminSettings__admins`に管理者メールを追加します。

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

SMTP設定の検証は`./bitwarden.sh checksmtp`で行います。正しく設定されていれば成功メッセージが表示されます。問題があればOpenSSLの不足や値の誤りが表示されます。設定変更後は`./bitwarden.sh restart`で反映してください。

次に`./bwdata/config.yml`のインストールパラメータを確認します。このファイルは生成されるアセットを制御し、プロキシの背後で動作させる場合やポートを変更する場合など、特殊な環境に合わせて調整が必要です。変更後は`./bitwarden.sh rebuild`を実行してください。

最後に`./bitwarden.sh start`でインスタンスを起動します。初回起動はDockerイメージのダウンロードに時間がかかることがあります。`docker ps`で全コンテナが正常に動作しているか確認しましょう。設定したドメインのWebボールトにアクセスし、必要に応じてアカウント登録してください。メール認証には正しく設定されたSMTPが必須です。

## まとめと参考リソース

おめでとうございます！これで専用サーバーにBitwardenを無事インストール・設定できました。さらに役立つ情報として、以下のリソースもぜひチェックしてみてください。

- [bitwarden.com](https://bitwarden.com/) - 公式サイト
- https://bitwarden.com/help/ - Bitwardenヘルプセンター（ドキュメント）

ここにない質問やサポートが必要な場合は、いつでもお気軽に当社サポートチームまでお問い合わせください。毎日対応していますよ！🙂