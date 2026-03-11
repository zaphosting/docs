---
id: server-linux-coolify
title: "LinuxサーバーにCoolifyをセットアップ - セルフホスティングクラウドアプリ"
description: "Coolifyをインストールして、自分のアプリケーションやデータベース、サービスを簡単にセルフホストする方法をチェック → 今すぐ詳しく見る"
sidebar_label: Coolifyのインストール
services:
  - vserver-service-coolify
  - dedicated-service-coolify
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## はじめに

[Coolify](https://coolify.io/)は、オープンソースのセルフホスト型Heroku/Vercel代替ツールで、サーバー、アプリケーション、データベースを簡単に管理できます。

![img](https://screensaver01.zap-hosting.com/index.php/s/nrXeZsgjXn43sfw/preview)

Coolifyの直感的なダッシュボードでセルフホスティングが超簡単に。インフラを完全にコントロールできて、GitHubの自動デプロイも対応。クラウドコストも抑えられます。

このガイドでは、セットアップの全手順、管理者アカウントの事前設定、必要な設定をすべて解説します。

<InlineVoucher />

## Coolifyの活用シーン

Coolifyは日常のさまざまなシーンで使え、アプリの自動デプロイやデータベースのホスティング、バックグラウンドワーカーの運用をしたい人にピッタリ。初心者から上級者まで幅広く対応しています。

静的サイト、Node.js、Python、PHP、Rust、Dockerコンテナのデプロイを標準サポート。WordPress、Ghost、Grafana、Appwrite、Nextcloud、PostgreSQLなどの人気ワンクリックテンプレートも搭載。Let's EncryptのSSL証明書発行やTraefikによるリバースプロキシルーティングも自動で処理します。

## 準備

Coolify自体は軽量ですが、同時に動かすアプリやDockerビルド、データベースの数によってはリソース消費が大幅に増えます。VPSや専用サーバーでCoolifyをホストするなら、以下のハードウェア要件を推奨します。

| ハードウェア | 最低限       | 推奨                      |
| ------------ | ------------ | ------------------------- |
| CPU          | 2 vCPUコア   | 4 vCPUコア                |
| RAM          | 2 GB         | 4 GB以上                  |
| ディスク容量 | 30 GB        | 50 GB以上                 |

<InlineServiceLink />

Coolifyをインストールする前に、サーバーに接続してOSが最新か確認しましょう。root権限でSSH接続する必要があります。SSH接続が不安な場合は、[SSH初期アクセス](vserver-linux-ssh.md)ガイドを参考にしてください。

:::tip[SSHキー認証]
パスワード認証よりもSSHキー認証の設定を**強く推奨**します。設定方法は[SSHキー設定](vserver-linux-sshkey.md)チュートリアルでチェック！
:::

## インストール

サーバーに接続したら、まずシステムパッケージをアップデートし、Coolifyインストールスクリプト取得に必要な`curl`をインストールします：

```bash
sudo apt update && sudo apt upgrade -y && sudo apt install curl -y
```

### 管理者ユーザー情報の準備

Coolifyは管理者アカウントに厳格なセキュリティポリシーを設けています。インストールコマンドを実行する前に、以下の条件を満たす管理者ユーザー情報を用意してください：

* **ユーザー名**
  * 最低3文字
  * 最大255文字
  * 英数字、スペース、アンダースコア、ハイフンのみ使用可
* **メールアドレス**
  * 有効なメールアドレスであること
  * 有効なDNSレコードが存在すること
  * 最大255文字
* **パスワード**
  * 最低8文字
  * 大文字・小文字を両方含むこと
  * 数字を最低1つ含むこと
  * 特殊記号を最低1つ含むこと
  * よく使われるパスワードや漏洩済みパスワードは不可

### インストールスクリプトの実行

Coolifyは高速で自動化されたインストールスクリプトを提供しています。セットアップ中の不正アクセスを防ぐため、環境変数で管理者アカウントを事前定義して実行しましょう。

以下のコマンドを実行し、`username`、`email`、`password`は自分の安全な情報に置き換えてください：

```bash
env ROOT_USERNAME=zaphosting ROOT_USER_EMAIL=info@zap-hosting.com ROOT_USER_PASSWORD=zaphosting bash -c 'curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash'
```
:::note[オープンソース]
インストールスクリプトのソースコードは[公式Coolifyリポジトリ](https://github.com/coollabsio/coolify/blob/v4.x/scripts/install.sh)で確認できます。
:::

スクリプトはDockerのインストール、必要なネットワーク設定、Coolifyコンテナの構成を自動で行います。サーバーの性能によっては数分かかることがあります。

![img](https://screensaver01.zap-hosting.com/index.php/s/Zx5DXzEH2MmrkrX/preview)

### Coolifyへのアクセス

インストール完了後は、ブラウザでダッシュボードにアクセスします。サーバーのIPアドレスにポート8000を付けてアクセス：`http://[your_server_ip]:8000`

インストール時に指定した認証情報があるので、初期セットアップウィザードはスキップされ、直接ログイン画面が表示されます。

コマンドで使ったメールアドレスとパスワードを入力してログインしてください。

### DNSレコードの設定

Coolifyダッシュボードにログインしたら、まずはカスタムドメインを設定しましょう。IPアドレスでのアクセス（`http://[your_server_ip]:8000`）はセキュリティ的に弱いです。

ドメインを接続すると、Coolifyがダッシュボードや今後のアプリに無料のSSL証明書を自動発行してくれます。

ドメイン管理画面で、サーバーを指す2つの`A`レコードを追加してください。ZAP-Hostingでドメインを管理しているなら、[ドメインレコード](domain-records.md)ガイドを参考に簡単に設定できます：

| 名前 / ホスト | 種類 | 値                 | TTL           |
| ------------- | ---- | ------------------ | ------------- |
| `@`           | A    | `[your_server_ip]` | 自動 / 最低   |
| `*`           | A    | `[your_server_ip]` | 自動 / 最低   |

:::info[DNSルーティング]
* `@`レコードはドメインのルートをCoolifyに割り当てます
* `*`（ワイルドカード）レコードは新しいサブドメイン（例：`api.[your_domain]`）を自動でルーティングし、プロジェクトごとにDNSレコードを追加する手間を省きます
:::

### インスタンスドメインの設定

CoolifyインスタンスをSSLで保護するため、ドメインを割り当てましょう。左サイドバーの**設定**に移動し、**インスタンスドメイン**欄に`https://`付きのドメイン（例：`https://coolify.[your_domain]`）を入力。**保存**をクリックして完了です。

![img](https://screensaver01.zap-hosting.com/index.php/s/jYW63sF9k5sZez3/preview)

## 最初のアプリをデプロイしよう

これで**プロジェクト**タブから最初のアプリをデプロイできます！

**+ リソースを追加**をクリックして、公開リポジトリやDocker Composeファイルを追加したり、ワンクリックテンプレートライブラリからサービスを選んだりできます。Coolifyの準備はバッチリです！

![img](https://screensaver01.zap-hosting.com/index.php/s/nEf9XBDrfypijE7/preview)

## まとめと追加リソース

お疲れさま！Coolifyのインストールが完了し、すぐにプロジェクトのデプロイを始められます。さらに役立つ情報は以下の公式リソースもチェックしてみてください。

- [coolify.io](https://coolify.io/) - 公式サイト
- [coolify.io/docs](https://coolify.io/docs/) - Coolifyドキュメント

ここにない質問やサポートが必要な場合は、いつでもお気軽にサポートチームへお問い合わせください。毎日対応していますよ！🙂

<InlineVoucher />