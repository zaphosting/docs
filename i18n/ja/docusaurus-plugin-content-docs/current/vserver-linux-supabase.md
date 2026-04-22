---
id: vserver-linux-supabase
title: "LinuxサーバーにSupabaseをセットアップ - オープンソースバックエンドプラットフォームを始めよう"
description: "認証やリアルタイム機能を備えた信頼性の高いオープンソースPostgresプラットフォームSupabaseのホスティングと設定方法をチェック → 今すぐ詳しく"
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

## One Click AppsインストーラーでSupabaseをインストール

VPSのウェブインターフェースにある**One Click Appsインストーラー**から、**Supabase**を直接インストールできます。初期セットアップが完了したら、アプリカタログを開き、**Supabase**を検索。プロジェクト、環境、ドメイン設定を選んでデプロイを開始しましょう。コマンドラインの手動設定なしで、ウェブベースの管理、カスタムドメイン対応、SSL発行（対応している場合）などの便利な機能を活用しながら、素早く簡単にSupabaseを運用できます。

<InlineVoucher />

## 前提条件

**Supabase**をインストールする前に、スムーズな導入と最適なパフォーマンスを確保するために、ホスティング環境が以下の要件を満たしていることを確認してください。

| ハードウェア   | 最低限       | ZAP-Hosting推奨           |
| ------------- | ------------ | ------------------------- |
| CPU           | 1 vCPUコア   | 4 vCPUコア                |
| RAM           | 4 GB         | 8 GB                      |
| ディスク容量  | 25 GB        | 25 GB                     |

ソフトウェアは必要な依存関係がすべてインストールされていること、対応OS上で動作していることが必須です。以下の要件を満たしているか必ず確認してください：

**依存関係:** `Git`, `Docker (EngineとCompose)`

**OS:** Docker 2をサポートする最新のUbuntuまたはDebian

Supabaseのインストール中に互換性の問題が起きないよう、依存関係のインストールとOSバージョンの確認は必須です。

## 準備

**Supabase**のセットアップ前に、システムの準備を行います。OSを最新バージョンにアップデートし、必要な依存関係をインストールすることで、安定した環境を整え、インストール中や運用後のトラブルを防ぎます。

### システムのアップデート
最新のソフトウェアとセキュリティアップデートを適用するため、まずはシステムのアップデートを行いましょう。以下のコマンドを実行してください：

```
sudo apt update && sudo apt upgrade -y
```
これで最新のセキュリティパッチとソフトウェアバージョンが適用されます。

### 依存関係のインストール
アップデートが完了したら、依存関係のインストールに進みます。

#### Git
SupabaseのデータはGitHubからダウンロードするため、Gitのインストールが必要です。以下のコマンドを実行してください：

```
sudo apt install git-all
```

#### Docker

SupabaseはDockerコンテナ上で動作します。Dockerのインストールが必要なので、以下のコマンドを実行してください：

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Dockerのインストール方法や使い方の詳細は、当社の[Dockerガイド](dedicated-linux-docker.md)も参考にしてください。

## インストール
すべての要件を満たし、準備が整ったらSupabaseのインストールに進みましょう。

Supabaseのリポジトリを取得し、専用のプロジェクトディレクトリを作成。Docker関連のファイルとサンプル環境ファイルをコピーします。

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

これで `http://<your-ip>:8000` からSupabase Studioにアクセス可能です。ユーザー名とパスワードの入力を求められます。デフォルトの認証情報は以下の通りです：

- ユーザー名: `supabase`
- パスワード: `this_password_is_insecure_and_should_be_updated`

![img](https://screensaver01.zap-hosting.com/index.php/s/oBpk2K3S46gETHf/preview)

:::warning デフォルト認証情報について
現在、アプリはデフォルト認証情報で稼働しています。以下の手順で速やかにサービスを保護してください。
:::

## 設定
デフォルトやサンプルの値のまま運用するのは絶対に避けてください。すべてのプレースホルダーを強力でユニークなシークレットに置き換え、セキュリティ要件に沿って設定を見直し、変更を反映するためにサービスを再起動しましょう。

サービス公開前に安全なAPIキーを生成してください。まず40文字のJWTシークレットを選びます。提供されている値を使うか、自分で作成してください。このシークレットはローカルの安全な場所に保管し、絶対に共有やバージョン管理に含めないでください。JWTを生成し、Supabaseドキュメントのフォーム（https://supabase.com/docs/guides/self-hosting/docker#generate-api-keys）を使ってanonキーとservice APIキーを導出します。

フォームは2回実行して両方のキーを作成してください。`./docker/.env`を以下のように更新します：

- `ANON_KEY`: anonキー
- `SERVICE_ROLE_KEY`: serviceキー

`./docker/.env`内の必須シークレットも更新してください。これらは動作に必須です：

- `POSTGRES_PASSWORD`: `postgres`ロールのパスワード
- `JWT_SECRET`: PostgRESTとGoTrueで使用
- `SITE_URL`: サイトのベースURL
- `SMTP_*`: メールサーバーの認証情報
- `POOLER_TENANT_ID`: Supavisorプーラーで使うテナントID

本番運用前にダッシュボードの認証情報も変更して保護しましょう。`./docker/.env`を編集：

- `DASHBOARD_USERNAME`: ダッシュボードユーザー名
- `DASHBOARD_PASSWORD`: ダッシュボードパスワード

複数のダッシュボードユーザーを設定したい場合は、`./docker/volumes/api/kong.yml`に以下のように記述できます：

```
basicauth_credentials:
  - consumer: DASHBOARD
    username: user_one
    password: password_one
  - consumer: DASHBOARD
    username: user_two
    password: password_two
```

`localhost`以外からダッシュボードの全機能を使いたい場合は、`./docker/.env`の`SUPABASE_PUBLIC_URL`にアクセスに使うURLまたはIPを設定してください。

設定変更を反映するにはスタックを再起動します：

```
docker compose down
docker compose up -d
```

## まとめと追加リソース

おめでとうございます！これでVPS/専用サーバーにSupabaseを無事インストールし、設定できました。さらにサーバー設定を深めたい場合は、以下のリソースもぜひチェックしてください：

- [Supabase.com](https://Supabase.com/) - 公式サイト
- [Supabase.com/docs/guides/self-hosting](https://supabase.com/docs/guides/self-hosting) - Supabase公式ドキュメント

ここにない質問やサポートが必要な場合は、いつでもお気軽に当社サポートチームまでご連絡ください。毎日対応しています！🙂