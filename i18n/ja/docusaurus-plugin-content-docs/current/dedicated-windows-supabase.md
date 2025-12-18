---
id: dedicated-windows-supabase
title: "専用サーバー：WindowsでSupabaseをセットアップ"
description: "認証やリアルタイム機能を備えた信頼性の高いオープンソースPostgresプラットフォーム、Supabaseのセットアップと設定方法を解説 → 今すぐチェック"
sidebar_label: Supabaseのインストール
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Supabaseは、認証、即時API、リアルタイム、ストレージを備えたフル機能のPostgresデータベースを提供するオープンソースのPostgres開発プラットフォームで、Firebaseのオープンソース代替として注目されています。

![img](https://screensaver01.zap-hosting.com/index.php/s/gE9NRSMr22oZaCx/preview)

自分でこのサービスをホスティングしようと考えていますか？セットアップと設定の全ステップをわかりやすく解説し、注意すべきポイントもすべてお伝えします。

## 前提条件

**Supabase**をインストールする前に、スムーズな導入と最適なパフォーマンスを確保するために、ホスティング環境が以下の要件を満たしていることを確認してください。

| ハードウェア   | 最低要件     | ZAP-Hosting推奨スペック |
| ---------- | ----------- | -------------------------- |
| CPU        | 1 CPUコア | 4 CPUコア                |
| RAM        | 4 GB        | 8 GB                       |
| ディスク容量 | 25 GB       | 25 GB                      |

ソフトウェアは必要な依存関係がすべてインストールされていること、そしてサポートされているOS上で動作していることが必要です。インストールを進める前に、以下の要件を満たしているか必ず確認してください：

**依存関係:** `Git`, `Docker (EngineとCompose)`

**OS:** Docker 2をサポートする最新のUbuntuまたはDebian

依存関係がすべてインストールされていること、正しいOSバージョンが使用されていることを確認し、Supabaseのインストール時の互換性問題を避けましょう。

## 準備

**Supabase**のセットアップ前に、システムの準備が必要です。OSを最新バージョンにアップデートし、必要な依存関係をすべてインストールします。これにより安定した環境が整い、インストール中やインストール後のトラブルを防げます。

### システムのアップデート
最新のソフトウェアとセキュリティ改善を適用するため、まずはシステムアップデートを実行しましょう。これにより、最新のセキュリティパッチとソフトウェアバージョンが適用されます。

### 依存関係のインストール
アップデートが完了したら、依存関係のインストールに進みます。

#### Git
SupabaseのデータはGitHubからダウンロードされるため、まずGitをインストールする必要があります。サーバーに[Git for Windows](https://git-scm.com/downloads/win)をインストールしてください。

#### Docker
SupabaseはDockerコンテナを使ってマシン上にデプロイ・実行されます。Dockerを先にインストールする必要があります。サーバーに[Docker Desktop](https://docs.docker.com/desktop/setup/install/windows-install/)をインストールしてください。

Dockerのインストール手順や使い方は、当社の[Docker](dedicated-windows-docker.md)ガイドで詳しく解説しています。

## インストール
すべての要件を満たし、準備が整ったらSupabaseのインストールに進みましょう。コマンドプロンプトを開き、Supabaseリポジトリを取得し、専用のプロジェクトディレクトリを作成、Docker関連ファイルとサンプル環境ファイルをコピーします。

```
git clone --depth 1 https://github.com/supabase/supabase
mkdir .\supabase-project

Copy-Item .\supabase\docker\* -Destination .\supabase-project -Recurse -Force
Copy-Item .\supabase\docker\.env.example -Destination .\supabase-project\.env -Force
```

プロジェクトディレクトリに移動し、最新のコンテナイメージをプルして、スタックをデタッチモードで起動します。

```
cd supabase-project
docker compose pull
docker compose up -d
```

これで `http://<your-ip>:8000` からSupabase Studioにアクセスできます。ユーザー名とパスワードの入力を求められます。デフォルトの認証情報は以下の通りです：

- ユーザー名: `supabase`
- パスワード: `this_password_is_insecure_and_should_be_updated`

![img](https://screensaver01.zap-hosting.com/index.php/s/oBpk2K3S46gETHf/preview)

:::warning デフォルト認証情報について
現在、アプリはデフォルト認証情報で稼働しています。以下の手順でできるだけ早くサービスをセキュアにしてください。
:::

## 設定
デフォルトやサンプルの値での運用は絶対に避けてください。すべてのプレースホルダーを強力でユニークなシークレットに置き換え、セキュリティ要件に合わせて設定を見直し、変更を反映するためにすべてのサービスを再起動しましょう。

サービスを公開する前に安全なAPIキーを生成してください。まずは40文字のJWTシークレットを選びます。提供されている値を使うか、自分で作成してください。このシークレットはローカルの安全な場所に保管し、共有やバージョン管理へのコミットは避けてください。シークレットを使ってJWTを生成し、Supabaseドキュメントのフォーム（https://supabase.com/docs/guides/self-hosting/docker#generate-api-keys）を参考にanonキーとservice APIキーを導出します。

フォームを2回実行して両方のキーを作成し、`./docker/.env`を以下のように更新します：

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

複数のダッシュボードユーザーを設定したい場合は、`./docker/volumes/api/kong.yml`に以下のように記述します：

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

おめでとうございます！これで専用サーバーにSupabaseを無事インストール・設定できました。サーバー設定の参考になる以下のリソースもぜひチェックしてください。

- [Supabase.com](https://Supabase.com/) - 公式サイト
- [Supabase.com/docs/guides/self-hosting](https://supabase.com/docs/guides/self-hosting) - Supabase公式ドキュメント

ここにない具体的な質問があれば、いつでもお気軽にサポートチームまでお問い合わせください。毎日対応していますので安心してどうぞ！🙂