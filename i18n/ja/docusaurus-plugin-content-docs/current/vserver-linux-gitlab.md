---
id: vserver-linux-gitlab
title: "LinuxサーバーにGitLabをセットアップ - 自分だけのDevOpsプラットフォームをホストしよう"
description: "LinuxでGitLabを効率的にセットアップしてDevOpsワークフローを最適化し、チームコラボレーションを強化 → 今すぐチェック"
sidebar_label: GitLabのインストール
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

GitLabは、チームがコードでコラボし、ワークフローを自動化し、ソフトウェア開発のライフサイクル全体を効率的に管理できる包括的なDevOpsプラットフォームです。このガイドでは、LinuxサーバーにGitLabをインストールする方法を解説します。

![](https://screensaver01.zap-hosting.com/index.php/s/ZWMPsLzrXZjnqEE/preview)

<InlineVoucher />

## 準備

以下の要件は公式の[GitLabチーム](https://docs.gitlab.com/ee/install/requirements.html)によって推奨されており、後々のトラブルを避けるためにも必ず事前に確認しておくことをおすすめします。

#### ハードウェア

| コンポーネント | 最低要件               | 推奨                      |
| -------------- | ---------------------- | ------------------------- |
| CPU            | 2x 2 GHz               | 4x 2.6+ GHz               |
| RAM            | 4 GB                   | 8 GB                      |
| ストレージ     | 10 GB                  | 50+ GB                    |
| 帯域幅         | 100 mbit/s (上り下り)  | 100 mbit/s (上り下り)     |

#### ソフトウェア

| プラットフォーム | オプション                                                      |
| ---------------- | -------------------------------------------------------------- |
| OS               | Ubuntu (20.04, 22.04, 24.04), Debian(10, 11, 12), OpenSUSE (15.5) |
| データベース     | PostgreSQL 14.9+                                               |
| Webサーバー      | NGINX (GitLabに同梱), Puma 6.4.2+                             |
| その他           | Redis 7.x+, Sidekiq 7.3.2+, Prometheus 2.54.1+                 |

:::info
最新かつ正確な仕様情報は、GitLab公式の[ハードウェア要件](https://docs.gitlab.com/ee/install/requirements.html)ドキュメントを必ずご確認ください。
:::

LinuxサーバーにGitLabをインストールするには、SSHクライアントで接続する必要があります。詳しくは[初期アクセス（SSH）](vserver-linux-ssh.md)ガイドを参照してください。

接続が確立したら、GitLabのインストールに必要なパッケージをインストールしましょう。

## ステップ1: 依存関係のインストール

まず、GitLabインストーラーを動かすために必要な依存関係をインストールします。以下のコマンドでLinuxサーバーに必要なパッケージを入れましょう。

<Tabs>
<TabItem value="ubuntu" label="Ubuntu" default>

パッケージリストを最新に更新し、OpenSSHサーバーと必要な前提パッケージをインストールします。これがGitLabのWebインターフェースをホストする仕組みです。

```
sudo apt update
sudo apt-get install -y curl openssh-server ca-certificates tzdata perl
```

メール通知を使いたい場合は、Postfix（SMTPサーバー）もインストール可能です。これは**任意**です。

メール通知を使う場合は、以下のコマンドでPostfixをインストールしてください。
```
sudo apt-get install -y postfix
```

</TabItem>

<TabItem value="debian" label="Debian">

パッケージリストを最新に更新し、OpenSSHサーバーと必要な前提パッケージをインストールします。これがGitLabのWebインターフェースをホストする仕組みです。

```
sudo apt update
sudo apt-get install -y curl openssh-server ca-certificates perl
```

メール通知を使いたい場合は、Postfix（SMTPサーバー）もインストール可能です。これは**任意**です。

メール通知を使う場合は、以下のコマンドでPostfixをインストールしてください。
```
sudo apt-get install -y postfix
```

</TabItem>

<TabItem value="opensuse" label="OpenSUSE">

OpenSSHサーバーと必要な前提パッケージをインストールします。これがGitLabのWebインターフェースをホストする仕組みです。

```
sudo zypper install curl openssh perl
```

次に、OpenSSHデーモンが有効になっているか確認し、必要なら起動します。

```
sudo systemctl status sshd
sudo systemctl enable sshd
sudo systemctl start sshd
```

`firewalld`を使っている場合は、ファイアウォールが必要なアクセスを許可しているか確認してください。

まずは以下のコマンドで`firewalld`を使っているか確認します。

```bash
sudo systemctl status firewalld
```

使っている場合は、必要なポート（デフォルトで80と443）を開放しましょう。

```
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo systemctl reload firewalld
```

メール通知を使いたい場合は、Postfix（SMTPサーバー）もインストール可能です。これは**任意**です。

メール通知を使う場合は、以下のコマンドでPostfixをインストールし、有効化・起動してください。

```
sudo zypper install postfix
sudo systemctl enable postfix
sudo systemctl start postfix
```

</TabItem>
</Tabs>

:::info
Postfixのインストール中に設定画面が表示されたら、「Internet Site」を選択してEnterを押してください。メール名にはLinuxサーバーの外部DNSを入力し、Enterを押します。追加の画面が出た場合はすべてEnterでデフォルト設定を受け入れてください。

別のメール送信方法を使いたい場合は、このステップをスキップし、GitLabインストール後に公式GitLabチームのガイドに従って[外部SMTPサーバーを設定](https://docs.gitlab.com/omnibus/settings/smtp)してください。
:::

## ステップ2: GitLabのインストール

依存関係のインストールが完了したら、いよいよGitLab本体をインストールします。

ここでは公式パッケージリポジトリから直接インストールする方法を紹介します。

<Tabs>

<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>
以下のスクリプトでGitLabのリポジトリをaptパッケージマネージャーに追加します。

```
curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.deb.sh | sudo bash
```

追加が完了したら、`gitlab-ee`パッケージをインストールします。

```bash
sudo apt-get install -y gitlab-ee
```
</TabItem>

<TabItem value="opensuse" label="OpenSUSE" default>
以下のスクリプトでGitLabのリポジトリをZypperパッケージマネージャーに追加します。

```
curl -sS https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.rpm.sh | sudo bash
```

追加が完了したら、`gitlab-ee`パッケージをインストールします。

```bash
sudo zypper install gitlab-ee
```
</TabItem>

</Tabs>

インストールが完了したら、次のセクションでサーバーを正常に動作させるための基本設定を行います。

## ステップ3: GitLabの設定

正常に動作させるために、設定ファイルを編集します。まずはお好みのテキストエディタでGitLabの設定ファイルを開きましょう。ここでは`nano`を例にします。

```
sudo nano /etc/gitlab/gitlab.rb
```

次に、`external_url`の行を探し、ドメインをお持ちの場合はドメイン名を、ない場合はLinuxサーバーのIPアドレスを入力してください。

<!-- /etc/gitlab/gitlab.rbファイルからの抜粋 -->
```
## GitLab URL
##! GitLabにアクセスするためのURL
##! 詳細は以下を参照:
##! https://docs.gitlab.com/omnibus/settings/configuration.html#configuring-the-external-url-for-gitlab
##!
##! インストールやアップグレード時には環境変数
##! EXTERNAL_URLの値がここに反映されます。
##! AWS EC2の場合はパブリックホスト名/IPを自動取得します。
##! 詳細は以下を参照:
##! https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instancedata-data-retrieval.html
external_url 'http`s`://`あなたのドメインまたはLinuxサーバーのIPv4アドレス`'
```

さらに、`letsencrypt['contact_emails']`の行にメールアドレスを入力することをおすすめします。これによりLet's Encryptから自動で無料SSL証明書の通知が届きます。

:::note
無料SSL証明書をLet's Encryptから取得するにはドメインが必要です。IPアドレスでは取得できません。
:::

<!-- /etc/gitlab/gitlab.rbファイルからの抜粋 -->
```
################################################################################
# Let's Encrypt連携設定
################################################################################
# letsencrypt['enable'] = nil
# letsencrypt['contact_emails'] = [`あなたのメールアドレス`] # 連絡先メールアドレスの配列
# letsencrypt['group'] = 'root'
# letsencrypt['key_size'] = 2048
# letsencrypt['owner'] = 'root'
# letsencrypt['wwwroot'] = '/var/opt/gitlab/nginx/www'
# 詳細は https://docs.gitlab.com/omnibus/settings/ssl/index.html#renew-the-certificates-automatically を参照
# letsencrypt['auto_renew'] = true
# letsencrypt['auto_renew_hour'] = 0
# letsencrypt['auto_renew_minute'] = nil # 数字かcron式
# letsencrypt['auto_renew_day_of_month'] = "*/4"
# letsencrypt['auto_renew_log_directory'] = '/var/log/gitlab/lets-encrypt'
# letsencrypt['alt_names'] = []
```

:::tip
`CTRL+W`で`letsencrypt['contact_emails']`を検索するとファイル内を手早く探せます。
:::

編集が終わったら、`CTRL+X` → `Y` → `Enter`で保存して終了します。

最後に以下のコマンドでGitLabを新しい設定で再構成します。

```
sudo gitlab-ctl reconfigure
```

この処理は少し時間がかかります。設定情報を元にGitLabが初期化され、ドメインを使っていればSSL証明書も自動発行されます。

## ステップ4: Webインターフェースへのアクセス

初期化が完了したら、ブラウザからサーバーにアクセスできます。以下のようにドメイン名またはIPアドレスを入力してください。

```
https://[あなたのドメイン] または http://[あなたのIPアドレス]
```

初回アクセス時はログイン画面が表示されます。

![](https://screensaver01.zap-hosting.com/index.php/s/E46E3qS32GKFfk3/preview)

管理者アクセスを得るには、ユーザー名に`root`を使ってログインしてください。

パスワードはLinuxサーバー内のファイルに保存されています。以下のコマンドでファイルを開き、`Password`欄の値を確認してください。

```
sudo nano /etc/gitlab/initial_root_password
```

<!-- /etc/gitlab/initial_root_passwordファイルからの抜粋 -->
```
# 警告: この値は以下の条件でのみ有効です

# 1. 手動で設定されている場合（`GITLAB_ROOT_PASSWORD`環境変数か`gitlab_rails['initial_root_password']`設定）

# 2. パスワードがUIやコマンドラインで変更されていない場合

#

# もしここにあるパスワードでログインできない場合は、以下の手順で管理者パスワードをリセットしてください。
# https://docs.gitlab.com/ee/security/reset_user_password.html#reset-your-root-password

Password: `[ここにパスワードが表示されます]`

# 注意: このファイルは24時間後の最初の再構成時に自動削除されます。
```

ログイン画面でユーザー名とパスワードを入力すると、GitLabのダッシュボードにアクセスできます。

![](https://screensaver01.zap-hosting.com/index.php/s/AqPHoEmY2Q2nFCF/preview)

セキュリティのため、`root`ユーザーのパスワード変更や新規ユーザー作成を強くおすすめします。画面左下の**Admin**から**Overview->Users**に進むとユーザー管理ができます。

## オプション: ufwでファイアウォールを設定する

ファイアウォール設定をしたくない場合や、OpenSUSEで既に`firewalld`を使っている場合はこのセクションはスキップしてOKです。

ポート80/443と22を許可する必要があります。

### ufwのインストール

すでに`ufw`が入っている場合はこのステップはスキップしてください。

<Tabs>

<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>
```bash
sudo apt-get install -y ufw
```
</TabItem>

<TabItem value="opensuse" label="OpenSUSE" default>
```bash
sudo zypper install ufw
```
</TabItem>

</Tabs>

### 必要なポートを開放

```
sudo ufw allow http
sudo ufw allow https
sudo ufw allow OpenSSH
```

### ファイアウォールを有効化

:::warning
この操作で許可していないポートへのアクセスはすべてブロックされます。実行前にホワイトリストが正しく設定されているか必ず確認してください。
:::

以下のコマンドでファイアウォールを有効にします。

```
sudo ufw enable
```

## まとめ

おめでとうございます！GitLabのインストールが無事完了しました！もし質問や問題があれば、いつでもサポートチームにお問い合わせください。毎日対応しています！

さらに細かい設定をしたい場合は、[公式GitLabドキュメント](https://docs.gitlab.com/ee/install/next_steps.html)の次のステップを読むのがおすすめです。

<InlineVoucher />