---
id: vserver-linux-standard-notes
title: "VPS：LinuxでStandard Notesをセットアップする方法"
description: "Standard Notesのセルフホスティングでデバイス間のノートを安全に同期・保護する方法 → 今すぐチェック"
sidebar_label: Standard Notesのインストール
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Standard Notesは、監査済みのエンドツーエンド暗号化であなたのデータを守るオープンソースのノートアプリです。復号キーはあなただけが管理。暗号化されたノートやファイルを無制限のデバイス間でシームレスに同期し、オフラインでもアクセス可能。外部からのアクセスからもコンテンツをしっかり守ります。

![img](https://screensaver01.zap-hosting.com/index.php/s/b6ZpyKJGny5qAon/preview)

自分でこのサービスをホスティングしてみたい？セットアップから設定まで、必要なポイントを全部わかりやすく解説します。

<InlineVoucher />

## 前提条件

**Standard Notes**をインストールする前に、スムーズな導入と最適なパフォーマンスを保証するために、ホスティング環境が以下の要件を満たしているか確認しましょう。

| ハードウェア | 最低限       | ZAP-Hosting推奨          |
| ------------ | ------------ | ------------------------ |
| CPU          | 1 vCPUコア   | 4 vCPUコア               |
| RAM          | 2 GB         | 4 GB                     |
| ディスク容量 | 5 GB         | 25 GB                    |

ソフトウェアは必要な依存関係がすべてインストールされていること、そして対応OS上で動作していることが必須です。インストール前に以下の条件を満たしているか必ずチェックしてください：

**依存関係:** `Docker（Engine 26以上とCompose）`

**OS:** Docker 26+をサポートする最新のUbuntuまたはDebian

依存関係がすべて揃い、対応OSが使われていることを確認し、Standard Notesのインストール時の互換性トラブルを防ぎましょう。

## 準備

**Standard Notes**のセットアップ前に、システムの準備が必要です。OSを最新にアップデートし、必要な依存関係をインストールします。これにより安定した環境が整い、インストール中やその後のトラブルを防げます。

### システムのアップデート
最新のソフトウェアとセキュリティ改善を適用するため、まずはシステムのアップデートを行いましょう。以下のコマンドを実行してください：

```
sudo apt update && sudo apt upgrade -y
```

これで最新のセキュリティパッチとソフトウェアバージョンが適用されます。

### 依存関係のインストール
アップデートが完了したら、依存関係のインストールに進みます。Standard Notesは複数のDockerコンテナで動作するため、まずDockerをインストールする必要があります。以下のコマンドを実行してください：

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Dockerのインストール方法や使い方の詳しい解説は、当社の[Dockerガイド](dedicated-linux-docker.md)をチェック！

## インストール

すべての要件を満たし準備が整ったら、Standard Notesのインストールに進みましょう。

まず、設定やセットアップファイルを格納するフォルダを作成します。このフォルダが作業ディレクトリになります。

```
mkdir standardnotes
cd standardnotes
```

次に、作業ディレクトリ内に `.env` ファイルを作成し、プロジェクトのサンプル設定からデフォルト値を取得します：

```
touch .env
curl https://raw.githubusercontent.com/standardnotes/server/main/.env.sample > .env
```

このファイルには最低限必要な環境変数だけが含まれています。現在使用されている全変数のリストはここで確認可能：[docker-entrypoint.sh](https://github.com/standardnotes/server/blob/main/docker/docker-entrypoint.sh)

`.env` ファイルを開き、KEYSセクションのすべてのキーが正しく設定されているか確認しましょう。必要な環境変数には以下のコマンドでランダムな値を生成して設定します：

```
openssl rand -hex 32
```

生成した値を `.env` ファイルに貼り付けてください。Standard NotesはLocalStack用のブートストラップスクリプトも必要です。作業ディレクトリにダウンロードし、実行可能にします：

```shell
curl https://raw.githubusercontent.com/standardnotes/server/main/docker/localstack_bootstrap.sh > localstack_bootstrap.sh
chmod +x localstack_bootstrap.sh
```

公式のサンプル設定ファイルを `docker-compose.yml` として作業フォルダに保存します。これがStandard Notesに必要なすべてのコンテナサービスを定義しています。

```
curl https://raw.githubusercontent.com/standardnotes/server/main/docker-compose.example.yml > docker-compose.yml
```

準備が整ったら、最新のイメージをプルしてサービスをデタッチモードで起動します：

```
docker compose pull && docker compose up -d
```

## 設定

提供された `docker-compose.yml` のデフォルト設定は、用途に合わせてカスタマイズ可能です。特に重要なのは `server` サービスの `ports` 設定。ここでホスト側のポートを調整でき、他のサービスとのポート競合を避けたり、好みのネットワーク構成に合わせられます。

データベースのセキュリティも超重要。デフォルトのパスワードは強力なランダム文字列に置き換えましょう。以下のコマンドで安全なパスワードを生成できます：

```
openssl rand -hex 12
```

生成した値を `.env` ファイルの `DB_PASSWORD` に設定し、同じ値を `docker-compose.yml` の `MYSQL_ROOT_PASSWORD` と `MYSQL_PASSWORD` にも設定してコンテナ間の同期を保ちます。

これらの設定変更で、機能的かつ安全に環境に合わせたインストールが完成します。

## 同期サーバーへの接続

Standard Notesでアカウントを作成するには、アプリ右下のアバターアイコンをクリック。表示されるメニューから「Create Account」を選択し、新規ユーザープロファイルを作成します。メールアドレスと安全なパスワードを入力してください。

完了前に「Advanced Options」を開き、「Sync Server」欄で「Custom」を選択。自分のサーバーのIPアドレスとポートを `IP:Port` 形式で入力します。これでノートはStandard Notesのデフォルトサービスではなく、自分でホスティングしているサーバーと同期されます。

![img](https://screensaver01.zap-hosting.com/index.php/s/tpsFzSQEokP9xit/download)

## まとめと追加リソース

おめでとう！これでVPSにStandard Notesを無事インストール＆設定できました。さらに役立つ情報やサポートが欲しい場合は、以下のリソースもぜひチェックしてみてください：

- [Standardnotes.com](https://standardnotes.com/) - 公式サイト
- [Standardnotes.com/help](https://standardnotes.com/help) - Standard Notes ヘルプセンター（ドキュメント）

ここにない質問や困ったことがあれば、いつでもサポートチームに気軽にお問い合わせください。毎日対応してますよ！🙂