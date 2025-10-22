---
id: dedicated-linux-standard-notes
title: "専用サーバー：LinuxでStandard Notesをセットアップ"
description: "Standard Notesのセルフホスティングでデバイス間のノートを安全に同期・保護する方法 → 今すぐチェック"
sidebar_label: Standard Notesのインストール
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Standard Notesは、監査済みのエンドツーエンド暗号化であなたのデータを守るオープンソースのノートアプリです。復号キーはあなただけが管理。暗号化されたノートやファイルを無制限のデバイス間でシームレスに同期し、オフラインでもアクセス可能。外部からのアクセスからコンテンツをしっかり守ります。

![img](https://screensaver01.zap-hosting.com/index.php/s/b6ZpyKJGny5qAon/preview)

自分でこのサービスをホスティングしたい？セットアップから設定まで、必要なポイントを全部解説します。

<InlineVoucher />



## 前提条件

**Standard Notes**をインストールする前に、スムーズな導入と最適なパフォーマンスを保証するために、ホスティング環境が以下の要件を満たしていることを確認してください。

| ハードウェア | 最低限       | ZAP-Hosting推奨          |
| ---------- | ------------ | ------------------------ |
| CPU        | 1 vCPUコア   | 4 vCPUコア               |
| RAM        | 2 GB         | 4 GB                     |
| ディスク容量 | 5 GB         | 25 GB                    |

ソフトウェアは必要な依存関係がすべてインストールされていること、対応OS上で動作していることが必要です。インストール前に以下の要件を満たしているか必ずチェックしてください：

**依存関係:** `Docker (Engine 26+ と Compose)`

**OS:** Docker 26+をサポートする最新のUbuntuまたはDebian

依存関係がすべてインストールされていること、正しいOSバージョンを使っていることを確認し、Standard Notesのインストール時の互換性問題を避けましょう。



## 準備

**Standard Notes**のセットアップ前に、システムの準備が必要です。OSを最新バージョンにアップデートし、必要な依存関係をインストールします。これにより安定した環境が整い、インストール中やインストール後のトラブルを防げます。


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

Dockerのインストール方法や使い方の詳細は、当社の[Dockerガイド](vserver-linux-docker.md)で確認できます。




## インストール
すべての要件を満たし、準備が整ったら、Standard Notesのインストールを開始しましょう。



まず、設定ファイルやセットアップファイルを格納するフォルダを作成します。このフォルダがインストール作業の作業ディレクトリになります。

```
mkdir standardnotes
cd standardnotes
```

次に、作業ディレクトリ内に `.env` ファイルを作成し、プロジェクトのサンプル設定からデフォルト値を取得して中身を入れます：

```
touch .env
curl https://raw.githubusercontent.com/standardnotes/server/main/.env.sample > .env
```

このファイルには動作に最低限必要な変数だけが含まれています。現在使われている変数の完全リストはここで確認可能：[docker-entrypoint.sh](https://github.com/standardnotes/server/blob/main/docker/docker-entrypoint.sh)

`.env` ファイルを開き、KEYSセクションのすべてのキーが正しく設定されているか確認してください。必要な環境変数には以下のコマンドでランダムな値を生成して設定します：

```
openssl rand -hex 32
```

生成した値を `.env` ファイルにペーストしてください。Standard NotesはLocalStack用のブートストラップスクリプトが必要です。作業ディレクトリにダウンロードし、実行可能にします：

```shell
curl https://raw.githubusercontent.com/standardnotes/server/main/docker/localstack_bootstrap.sh > localstack_bootstrap.sh
chmod +x localstack_bootstrap.sh
```

公式のサンプル設定を `docker-compose.yml` として作業フォルダに保存します。このファイルはStandard Notesに必要なすべてのコンテナサービスを定義しています。

```
curl https://raw.githubusercontent.com/standardnotes/server/main/docker-compose.example.yml > docker-compose.yml
```

準備が整ったら、最新のイメージをプルしてサービスをデタッチモードで起動します：

```
docker compose pull && docker compose up -d
```



## 設定

提供された `docker-compose.yml` のデフォルト設定は、用途に合わせてカスタマイズ可能です。特に重要なのは `server` サービスの `ports` プロパティで、ここでホスト側のポートマッピングを調整できます。これにより他のサービスとのポート競合を避けたり、好みのネットワーク設定に合わせたりできます。

データベースのセキュリティ強化も必須です。デフォルトのパスワードは強力なランダム文字列に置き換えましょう。以下のコマンドで安全なパスワードを生成できます：

```
openssl rand -hex 12  
```

生成した値を `.env` ファイルの `DB_PASSWORD` に設定してください。同じ値を `docker-compose.yml` の `MYSQL_ROOT_PASSWORD` と `MYSQL_PASSWORD` にも設定し、コンテナ間の同期を保ちます。

これらの設定変更により、機能的で安全、かつ環境に最適化されたインストールが実現します。





## 同期サーバーへの接続

Standard Notesでアカウントを作成するには、アプリ右下のアバターアイコンをクリック。表示されるメニューから「アカウント作成」を選び、新しいユーザープロファイルを作成します。メールアドレスと安全なパスワードを入力してください。

完了前に「詳細オプション」を開き、「同期サーバー」欄で「カスタム」を選択。自分のサーバーのIPアドレスとポートを `IP:Port` 形式で入力します。これにより、ノートはStandard Notesのデフォルトサービスではなく、自分でホスティングしているサーバーと同期されます。

![img](https://screensaver01.zap-hosting.com/index.php/s/tpsFzSQEokP9xit/download)





## まとめと追加リソース

おめでとうございます！これで専用サーバーにStandard Notesを無事インストール・設定できました。さらにサーバー設定の参考になる以下のリソースもぜひチェックしてください。

- [Standardnotes.com](https://standardnotes.com/) - 公式サイト
- [Standardnotes.com/help](https://standardnotes.com/help) - Standard Notes ヘルプセンター（ドキュメント）

ここにない質問やサポートが必要な場合は、いつでもお気軽に当社サポートチームへお問い合わせください。毎日対応していますよ！🙂