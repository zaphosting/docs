---
id: vserver-linux-supabase
title: "LinuxサーバーにSupabaseをセットアップ - オープンソースのバックエンドプラットフォームを始めよう"
description: "認証やリアルタイム機能を備えた信頼性の高いオープンソースPostgresプラットフォームSupabaseのホスティングと設定方法を解説 → 今すぐチェック"
sidebar_label: Supabaseのインストール
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Supabaseは、フル機能のPostgresデータベースに加え、認証、即時API、リアルタイム、ストレージを提供するオープンソースのPostgres開発プラットフォームで、Firebaseのオープンソース代替として注目されています。

![img](https://screensaver01.zap-hosting.com/index.php/s/gE9NRSMr22oZaCx/preview)

自分でこのサービスをホスティングしようと考えていますか？セットアップと設定の全ステップをわかりやすく解説し、注意すべきポイントもすべてお伝えします。

<InlineVoucher />

## 前提条件

**Supabase**をインストールする前に、スムーズな導入と最適なパフォーマンスを保証するため、ホスティング環境が以下の要件を満たしていることを確認してください。

| ハードウェア | 最低限       | ZAP-Hosting推奨             |
| ------------ | ------------ | -------------------------- |
| CPU          | 1 vCPUコア   | 4 vCPUコア                 |
| RAM          | 4 GB         | 8 GB                       |
| ディスク容量 | 25 GB        | 25 GB                      |

ソフトウェアは必要な依存関係がすべてインストールされていること、かつサポートされているOS上で動作していることが必要です。インストールを進める前に、以下の要件を満たしているか必ず確認してください。

**依存関係:** `Git`, `Docker (Engine と Compose)`

**OS:** Docker 2をサポートする最新のUbuntuまたはDebian

Supabaseのインストール中に互換性の問題が起きないよう、依存関係がすべて揃っていることと正しいOSバージョンを使用していることを確認しましょう。

## 準備

**Supabase**のセットアップ前に、システムの準備が必要です。OSを最新バージョンにアップデートし、必要な依存関係をすべてインストールします。これにより安定した環境が整い、インストール中やインストール後のトラブルを防げます。

### システムのアップデート
最新のソフトウェアとセキュリティ改善を適用するため、まずはシステムのアップデートを行いましょう。以下のコマンドを実行してください。

```
sudo apt update && sudo apt upgrade -y
```

これで最新のセキュリティパッチとソフトウェアバージョンが適用されます。

### 依存関係のインストール
アップデートが完了したら、依存関係のインストールに進みます。

#### Git
SupabaseのデータはGitHubからダウンロードします。そのため、まずGitをインストールする必要があります。以下のコマンドを実行してください。

```
sudo apt install git-all
```

#### Docker

SupabaseはDockerコンテナ上でデプロイ・実行されます。Dockerをインストールするため、以下のコマンドを実行してください。

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Dockerのインストール手順や使い方の詳細は、当社の[Docker](dedicated-linux-docker.md)ガイドでご確認いただけます。

## インストール
すべての要件を満たし準備が整ったら、Supabaseのインストールを進めましょう。

Supabaseリポジトリを取得し、専用のプロジェクトディレクトリを作成、Docker関連ファイルとサンプル環境ファイルをコピーします。

```
git clone --depth 1 https://github.com/supabase/supabase
mkdir supabase-project

cp -rf supabase/docker/* supabase-project
cp supabase/docker/.env.example supabase-project/.env
```

プロジェクトディレクトリに移動し、最新のコンテナイメージをプルして、スタックをデタッチモードで起動します。

```
cd supabase-project
docker compose pull
docker compose up -d
```

![img](https://screensaver01.zap-hosting.com/index.php/s/njapji2YePRgema/preview)

これで `http://<your-ip>:8000` からSupabase Studioにアクセス可能です。ユーザー名とパスワードの入力を求められます。デフォルトの認証情報は以下の通りです。

- ユーザー名: `supabase`
- パスワード: `this_password_is_insecure_and_should_be_updated`

![img](https://screensaver01.zap-hosting.com/index.php/s/oBpk2K3S46gETHf/preview)

:::warning デフォルト認証情報について
現在、アプリはデフォルト認証情報で稼働しています。以下の手順でできるだけ早くサービスをセキュアにしましょう。
:::

## 設定
デフォルトやサンプルの値での運用は絶対に避けてください。すべてのプレースホルダーを強力でユニークなシークレットに置き換え、セキュリティ要件に沿って設定を見直し、変更を反映するためにすべてのサービスを再起動しましょう。

サービスを公開する前に安全なAPIキーを生成してください。まず40文字のJWTシークレットを選びます。提供されている値を使うか、自分で作成してください。このシークレットはローカルの安全な場所に保管し、共有やバージョン管理へのコミットは避けてください。シークレットを使ってJWTを生成し、Supabaseドキュメントのフォーム（`https://supabase.com/docs/guides/self-hosting/docker#generate-api-keys`）を参照してanonキーとserviceキーを導出します。

フォームを2回実行して両方のキーを作成し、`./docker/.env` に以下を更新してください。

- `ANON_KEY`: anonキー
- `SERVICE_ROLE_KEY`: serviceキー

`./docker/.env` の必須シークレットも更新してください。これらは動作に必須です。

- `POSTGRES_PASSWORD`: `postgres`ロールのパスワード
- `JWT_SECRET`: PostgRESTとGoTrueで使用
- `SITE_URL`: サイトのベースURL
- `SMTP_*`: メールサーバーの認証情報
- `POOLER_TENANT_ID`: Supavisorプーラーで使用するテナントID

本番運用前にダッシュボードの認証情報も変更して保護しましょう。`./docker/.env` を編集して以下を設定します。

- `DASHBOARD_USERNAME`: ダッシュボードユーザー名
- `DASHBOARD_PASSWORD`: ダッシュボードパスワード

複数のダッシュボードユーザーを設定したい場合は、`./docker/volumes/api/kong.yml` に以下のように記述します。

```
basicauth_credentials:
  - consumer: DASHBOARD
    username: user_one
    password: password_one
  - consumer: DASHBOARD
    username: user_two
    password: password_two
```

`localhost`以外からダッシュボードの全機能を使いたい場合は、`./docker/.env` の `SUPABASE_PUBLIC_URL` にアクセスに使うURLまたはIPを設定してください。

設定変更を反映するにはスタックを再起動します。

```
docker compose down
docker compose up -d
```

## まとめと追加リソース

おめでとうございます！これでVPS/専用サーバーにSupabaseのインストールと設定が完了しました。サーバー設定の参考になる以下のリソースもぜひチェックしてみてください。

- [Supabase.com](https://Supabase.com/) - 公式サイト
- [Supabase.com/docs/guides/self-hosting](https://supabase.com/docs/guides/self-hosting) - Supabase公式ドキュメント

ここにない質問やサポートが必要な場合は、いつでもお気軽に当社サポートチームまでご連絡ください。毎日対応しています！🙂

<InlineVoucher />