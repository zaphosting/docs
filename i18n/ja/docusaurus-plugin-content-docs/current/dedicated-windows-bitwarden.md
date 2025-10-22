---
id: dedicated-windows-bitwarden
title: "専用サーバー：WindowsでBitwardenをセットアップ"
description: "エンドツーエンド暗号化とセルフホスティングで安全にパスワード管理 → 今すぐ詳しくチェック"
sidebar_label: Bitwardenのインストール
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Bitwardenは、ゼロ知識・エンドツーエンド暗号化を使ってデータを守るオープンソースのパスワードマネージャーです。クラウドサービスとしてもセルフホストでも使え、強力な認証情報の生成、保存、自動入力機能を備えています。

![img](https://screensaver01.zap-hosting.com/index.php/s/RwKmstAct5kNQwB/preview)

セルフホスティングを検討中？セットアップから設定まで、必要なポイントを全部わかりやすく解説します。

<InlineVoucher />

## 前提条件

**Bitwarden**をインストールする前に、スムーズな導入と最適なパフォーマンスのためにホスティング環境が以下の要件を満たしているか確認しましょう。

| ハードウェア | 最低限       | ZAP-Hosting推奨          |
| ------------ | ------------ | ------------------------ |
| CPU          | 1 CPUコア    | 4 CPUコア                |
| RAM          | 2 GB         | 4 GB                     |
| ディスク容量 | 12 GB        | 25 GB                    |

必要な依存関係がすべてインストールされており、対応OSで動作していることが必須です。インストール前に以下の要件を満たしているか必ずチェックしてください。

**依存関係:** `Docker (Engine 26以上とCompose)`

**OS:** Docker 26+をサポートする最新のWindows Server

依存関係のインストールと対応OSの使用を確認し、Bitwardenのインストール時の互換性問題を防ぎましょう。

## 準備

**Bitwarden**のセットアップ前に、システムの準備を行います。OSの最新化や依存関係のインストールなど、安定した環境を整えてインストール時や運用中のトラブルを防ぎます。

### システムのアップデート
最新のソフトウェアとセキュリティアップデートを適用して、システムを最新状態にしましょう。これにより、セキュリティパッチやソフトウェアの最新版が適用され、安心してセットアップを進められます。

### 依存関係のインストール
アップデートが完了したら、依存関係のインストールに進みます。Bitwardenは複数のDockerコンテナで動作するため、まずDockerをインストールする必要があります。サーバーに[Docker Desktop](https://docs.docker.com/desktop/setup/install/windows-install/)をインストールしてください。

Dockerのインストール方法や使い方は、当社の[Dockerガイド](dedicated-linux-docker.md)で詳しく解説しています。

### ユーザーとディレクトリの作成

Windowsサーバーに専用の`bitwarden`サービスアカウントを作成し、そこからBitwardenをインストール・実行することを推奨します。これにより、Bitwardenの環境が他のアプリケーションから分離され、安全性が向上します。

管理者権限でPowerShellを開き、以下のコマンドを実行してBitwardenのローカルユーザーを作成します。1つ目のコマンド実行後にパスワード入力ダイアログが表示されるので、希望のパスワードを入力して確定してください。その後、2つ目のコマンドでユーザー作成を完了します。

```
PS C:\> $Password = Read-Host -AsSecureString
New-LocalUser "Bitwarden" -Password $Password -Description "Bitwarden Local Admin"
```

続いて、`C:\`直下にBitwarden用のフォルダを作成します。

```
PS C:\> mkdir Bitwarden
```

Docker Desktopの設定で、**Settings → Resources → File Sharing** に移動し、`C:\Bitwarden`を共有パスに追加します。変更を適用するために「Apply & Restart」を選択してください。

### ドメインの設定

Bitwardenはデフォルトでホストのポート80（HTTP）と443（HTTPS）で動作します。特にインターネット上で公開する場合は、ホストを指すDNSレコードを設定したドメイン（例：server.example.com）を用意しましょう。ホスト名に「Bitwarden」を含めるのは、サーバーの役割やソフトウェアを特定されやすくなるため避けるのがおすすめです。

## インストール

すべての要件を満たし準備が整ったら、Bitwardenのインストールに進みます。

Bitwardenのインストールスクリプトをサーバーにダウンロードし、実行してください。

```
cd C:\Bitwarden
Invoke-RestMethod -OutFile bitwarden.ps1 -Uri "https://func.bitwarden.com/api/dl/?app=self-host&platform=windows"
.\bitwarden.ps1 -install
```

インストーラーではまずBitwardenインスタンスのドメイン名（設定したDNSレコード）を入力します。次にLet’s Encryptで無料の信頼されたSSL証明書を生成するか選択します。生成する場合は有効期限通知用のメールアドレスを入力してください。生成しない場合は証明書関連の質問が続きます。

[Bitwarden](https://bitwarden.com/host)で取得したインストールIDとインストールキーを入力し、USかEUのリージョンを選択します。これは有料サブスクリプションと連携する場合のみ影響します。

Let’s Encryptを使わない場合は、既存の証明書ファイルを`C:\Bitwarden\bwdata\ssl\<your_domain>`に配置し、信頼済みかどうかを指定します。自己署名証明書の生成も可能ですが、テスト用途のみ推奨です。証明書なしを選ぶ場合は、HTTPSプロキシを前段に置かないとBitwardenが正常に動作しません。

## 設定

インストール後は、2つのファイルを使って基本設定を行います。まず`\bwdata\env\global.override.env`の環境ファイルを編集し、SMTPサーバーの情報（ホスト、ポート、SSL、ユーザー名、パスワード）を設定してください。これにより、Bitwardenが確認メールや組織招待メールを送信できるようになります。システム管理者ポータルにアクセスする場合は、`adminSettings__admins`に管理者メールを追加してください。

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

SMTP設定を検証します。正しく設定されていれば成功メッセージが表示され、問題があればOpenSSLの不足や値の誤りが通知されます。設定変更は`.\bitwarden.ps1 -start`で反映してください。

次に`.\bwdata\config.yml`のインストールパラメータを確認します。このファイルは生成される資産を制御し、プロキシの背後で動かす場合やポートを変更する場合など特殊環境に合わせて調整が必要です。変更後は`.\bitwarden.ps1 -rebuild`で反映します。

最後に`.\bitwarden.ps1 -start`でインスタンスを起動します。初回起動はDockerイメージの取得に時間がかかることがあります。`docker ps`で全コンテナが正常に動作しているか確認しましょう。設定したドメインのWebボールトにアクセスし、必要に応じてアカウント登録してください。メール認証には正しいSMTP設定が必須です。

## まとめと参考リンク

おめでとうございます！専用サーバーにBitwardenを無事インストール・設定できました。さらに役立つ情報は以下のリソースもチェックしてみてください。

- [bitwarden.com](https://bitwarden.com/) - 公式サイト
- https://bitwarden.com/help/ - Bitwardenヘルプセンター（ドキュメント）

ここにない質問やサポートが必要な場合は、いつでもお気軽に当社サポートチームへお問い合わせください。毎日対応しています！🙂