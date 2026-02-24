---
id: vserver-windows-bitwarden
title: "WindowsサーバーでBitwardenをセットアップ - パスワード管理を安全に"
description: "エンドツーエンド暗号化と強力な認証機能でパスワード管理を安全にセルフホストする方法を解説 → 今すぐチェック"
sidebar_label: Bitwardenのインストール
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Bitwardenはゼロ知識、エンドツーエンド暗号化を使ってデータを守るオープンソースのパスワードマネージャーです。クラウドサービスとしても使えますが、セルフホストも可能で、強力な認証情報の生成、保存、自動入力機能を備えています。

![img](https://screensaver01.zap-hosting.com/index.php/s/RwKmstAct5kNQwB/preview)

自分でこのサービスをホストしようと考えていますか？セットアップから設定まで、必要なポイントをすべて丁寧に解説します。

<InlineVoucher />



## 前提条件

**Bitwarden**をインストールする前に、スムーズな導入と最適なパフォーマンスを保証するために、ホスティング環境が以下の要件を満たしていることを確認してください。

| ハードウェア   | 最低限       | ZAP-Hosting推奨            |
| ---------- | ------------ | -------------------------- |
| CPU        | 1 vCPUコア   | 4 vCPUコア                 |
| RAM        | 2 GB         | 4 GB                       |
| ディスク容量 | 12 GB        | 25 GB                      |

ソフトウェアは必要な依存関係がすべてインストールされていること、対応OS上で動作していることが必要です。インストールを進める前に以下の要件を満たしているか必ず確認してください：

**依存関係:** `Docker (Engine 26+ と Compose)`

**OS:** Docker 26+をサポートする最新のWindows Server

依存関係がすべてインストールされていること、正しいOSバージョンを使用していることを確認し、Bitwardenのインストール時の互換性問題を避けましょう。



## 準備

**Bitwarden**のセットアップ前に、システムの準備が必要です。OSを最新バージョンにアップデートし、必要な依存関係をインストールします。これにより安定した環境が整い、インストール中やインストール後のトラブルを防げます。


### システムのアップデート
最新のソフトウェアとセキュリティ改善を適用するため、まずはシステムアップデートを行いましょう。これにより、最新のセキュリティパッチとソフトウェアバージョンが適用されます。

### 依存関係のインストール
アップデートが完了したら、依存関係のインストールに進みます。Bitwardenは複数のDockerコンテナで構成されて動作するため、まずDockerをインストールする必要があります。サーバーに[Docker Desktop](https://docs.docker.com/desktop/setup/install/windows-install/)をインストールしてください。

Dockerのインストール手順や使い方は、当社の[Docker](vserver-windows-docker.md)ガイドで詳しく解説しています。



### ユーザーとディレクトリの作成

Windowsサーバーには専用の`bitwarden`サービスアカウントを作成し、そこからBitwardenをインストール・実行することをおすすめします。これにより、Bitwardenが他のアプリケーションから分離され、安全性が高まります。

管理者権限でPowerShellを開き、以下のコマンドを実行してBitwardenのローカルユーザーを作成します。1つ目のコマンド実行後にパスワード入力ダイアログが表示されるので、希望のパスワードを入力して確定してください。その後、2つ目のコマンドを実行して作成を完了します。

```
PS C:\> $Password = Read-Host -AsSecureString
New-LocalUser "Bitwarden" -Password $Password -Description "Bitwarden Local Admin"
```

続いて、新しく作成したユーザー用に`C:\`直下にBitwardenフォルダを作成します：

```
PS C:\> mkdir Bitwarden
```

Docker Desktopの設定で、**Settings → Resources → File Sharing**に移動し、`C:\Bitwarden`を共有パスに追加してください。変更を適用するために「Apply & Restart」を選択します。



### ドメインの設定

Bitwardenはデフォルトでホストのポート80（HTTP）と443（HTTPS）で動作します。特にインターネット上で公開する場合は、ホストを指すDNSレコードを持つドメイン（例：server.example.com）を設定しましょう。ホスト名に「Bitwarden」を含めるのは、サーバーの役割やソフトウェアを特定されやすくなるため避けるのがおすすめです。




## インストール
すべての要件を満たし、準備が整ったらBitwardenのインストールを進めましょう。

Bitwardenのインストールスクリプトをサーバーにダウンロードし、実行します；

```
cd C:\Bitwarden
Invoke-RestMethod -OutFile bitwarden.ps1 -Uri "https://func.bitwarden.com/api/dl/?app=self-host&platform=windows"
.\bitwarden.ps1 -install
```

インストーラーではまずBitwardenインスタンスのドメイン名（通常は設定したDNSレコード）を入力します。次にLet’s Encryptで無料の信頼されたSSL証明書を発行するか選択します。発行する場合は有効期限通知用のメールアドレスを入力します。発行しない場合は証明書に関する質問が続きます。

[Bitwarden](https://bitwarden.com/host)で取得したインストールIDとインストールキーを入力し、USかEUのリージョンを選択します。これは有料サブスクリプションに接続する場合のみ影響します。

Let’s Encryptを使わない場合は、既存の証明書ファイルを`C:\Bitwarden\bwdata\ssl\<your_domain>`に配置し、信頼済みかどうかを指定します。自己署名証明書を生成することも可能ですが、テスト用途のみ推奨です。証明書なしを選択した場合は、HTTPSプロキシを設置しないとBitwardenが正常に動作しません。



## 設定

インストール後は2つのファイルを使って基本設定を行います。まず`bwdata\env\global.override.env`の環境ファイルを編集し、SMTPサーバーのホスト、ポート、SSL、ユーザー名、パスワードを設定してください。これによりBitwardenが認証メールや組織招待メールを送信できます。システム管理者ポータルにアクセスしたい場合は、`adminSettings__admins`に管理者メールを追加します。

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

SMTP設定を検証します。正しく設定されていれば成功メッセージが表示されます。OpenSSLがない、または値が間違っている場合はエラーメッセージが出ます。設定変更は`.\bitwarden.ps1 -start`で反映してください。

次に`.\bwdata\config.yml`のインストールパラメータを確認します。このファイルは生成される資産を制御し、プロキシの背後で動かす場合や別ポートを使う場合など特殊環境に合わせて調整が必要です。変更後は`.\bitwarden.ps1 -rebuild`で反映します。

最後に`.\bitwarden.ps1 -start`でインスタンスを起動します。初回起動はDockerイメージのダウンロードで時間がかかることがあります。`docker ps`で全コンテナが正常に動作しているか確認しましょう。設定したドメインのWebボールトにアクセスし、必要に応じてアカウント登録してください。メール認証には正しいSMTP設定が必須です。

## まとめと参考リンク

おめでとうございます！これでVPS/専用サーバーにBitwardenを無事インストール・設定できました。さらに役立つ情報として以下のリソースもチェックしてみてください。

- [bitwarden.com](https://bitwarden.com/) - 公式サイト
- https://bitwarden.com/help/ - Bitwardenヘルプセンター（ドキュメント）

ここにない質問やサポートが必要な場合は、いつでもお気軽に当社サポートチームにお問い合わせください。毎日対応していますよ！🙂