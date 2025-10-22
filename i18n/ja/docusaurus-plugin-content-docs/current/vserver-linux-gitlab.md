---
id: vserver-linux-gitlab
title: "VPS: LinuxにGitLabをインストールする方法"
description: "LinuxでGitLabを効率的にセットアップしてDevOpsワークフローを最適化し、チームコラボレーションを強化する方法をチェック → 今すぐ詳しく見る"
sidebar_label: GitLabのインストール
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

GitLabは、チームがコードで協力し、ワークフローを自動化し、ソフトウェア開発のライフサイクル全体を効率的に管理できる包括的なDevOpsプラットフォームです。このガイドでは、LinuxサーバーにGitLabをインストールする方法を説明します。

![](https://screensaver01.zap-hosting.com/index.php/s/ZWMPsLzrXZjnqEE/preview)

<InlineVoucher />

## 準備

以下の要件は公式の[GitLabチーム](https://docs.gitlab.com/ee/install/requirements.html)によって推奨されており、後々のトラブルや問題を避けるために必ず事前条件を守ることを強くおすすめします。

#### ハードウェア

| コンポーネント | 最低条件               | 推奨条件                   |
| -------------- | ---------------------- | -------------------------- |
| CPU            | 2x 2 GHz               | 4x 2.6+ GHz               |
| RAM            | 4 GB                   | 8 GB                      |
| ストレージ     | 10 GB                  | 50+ GB                    |
| 帯域幅         | 100 Mbit/s (上り・下り) | 100 Mbit/s (上り・下り)    |

#### ソフトウェア

| プラットフォーム | オプション                                                      |
| ---------------- | -------------------------------------------------------------- |
| OS               | Ubuntu (20.04, 22.04, 24.04), Debian(10, 11, 12), OpenSUSE (15.5) |
| データベース     | PostgreSQL 14.9+                                               |
| Webサーバー      | NGINX (GitLabに同梱), Puma 6.4.2+                              |
| その他           | Redis 7.x+, Sidekiq 7.3.2+, Prometheus 2.54.1+                 |

:::info
最新かつ正確な仕様情報は、GitLab公式の[ハードウェア要件](https://docs.gitlab.com/ee/install/requirements.html)ドキュメントを必ずご確認ください。
:::

LinuxサーバーにGitLabをインストールするには、SSHクライアントを使って接続する必要があります。詳しくは当社の[初回アクセス（SSH）](vserver-linux-ssh.md)ガイドをご覧ください。

接続が確立したら、GitLabの実際のインストールに必要なパッケージをインストールしましょう。

## ステップ1: 依存関係のインストール

まず、GitLabインストーラーを動かすために必要な依存関係をインストールします。以下のコマンドを使ってLinuxサーバーに必要なパッケージをインストールしてください。

<Tabs>
<TabItem value="ubuntu" label="Ubuntu" default>

パッケージリストを最新に更新し、OpenSSHサーバーとその依存パッケージをインストールします。GitLabのWebインターフェースパネルはこれでホストされます。

```
sudo apt update
sudo apt-get install -y curl openssh-server ca-certificates tzdata perl
```

GitLabでメール通知を使いたい場合は、Postfix（SMTPサーバー）もインストール可能です。これは**任意**です。

メール通知を使う場合は、以下のコマンドでPostfixをインストールしてください。

```
sudo apt-get install -y postfix
```

</TabItem>

<TabItem value="debian" label="Debian">

パッケージリストを最新に更新し、OpenSSHサーバーとその依存パッケージをインストールします。GitLabのWebインターフェースパネルはこれでホストされます。

```
sudo apt update
sudo apt-get install -y curl openssh-server ca-certificates perl
```

GitLabでメール通知を使いたい場合は、Postfix（SMTPサーバー）もインストール可能です。これは**任意**です。

メール通知を使う場合は、以下のコマンドでPostfixをインストールしてください。

```
sudo apt-get install -y postfix
```

</TabItem>

<TabItem value="opensuse" label="OpenSUSE">

OpenSSHサーバーとその依存パッケージをインストールします。GitLabのWebインターフェースパネルはこれでホストされます。

```
sudo zypper install curl openssh perl
```

次に、OpenSSHデーモンが有効になっているか以下のコマンドで確認し、有効化・起動します。

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

使っている場合は、デフォルトで必要なポート（80と443）を開放してください。

```
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo systemctl reload firewalld
```

GitLabでメール通知を使いたい場合は、Postfix（SMTPサーバー）もインストール可能です。これは**任意**です。

メール通知を使う場合は、以下のコマンドでPostfixをインストールし、有効化・起動してください。

```
sudo zypper install postfix
sudo systemctl enable postfix
sudo systemctl start postfix
```

</TabItem>
</Tabs>

:::info
Postfixのインストール中に設定画面が表示された場合は、「Internet Site」を選択してEnterを押してください。メール名にはLinuxサーバーの外部DNSを入力し、Enterを押します。追加の画面が出た場合は、すべてデフォルト設定でEnterを押して進めてください。

別のメール送信ソリューションを使いたい場合はこのステップをスキップし、GitLabインストール後に公式GitLabチームのガイドに従って[外部SMTPサーバーを設定](https://docs.gitlab.com/omnibus/settings/smtp)してください。
:::

## ステップ2: GitLabのインストール

必要な依存関係のインストールが完了したら、いよいよGitLabをインストールします。

このガイドでは、公式パッケージリポジトリから直接GitLabをインストールします。

<Tabs>

<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>
以下のスクリプトでGitLabのリポジトリをaptパッケージマネージャーに追加します。

```
curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.deb.sh | sudo bash
```

完了したら、`gitlab-ee`パッケージをインストールします。

```bash
sudo apt-get install -y gitlab-ee
```
</TabItem>

<TabItem value="opensuse" label="OpenSUSE" default>
以下のスクリプトでGitLabのリポジトリをZypperパッケージマネージャーに追加します。

```
curl -sS https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.rpm.sh | sudo bash
```

完了したら、`gitlab-ee`パッケージをインストールします。

```bash
sudo zypper install gitlab-ee
```
</TabItem>

</Tabs>

このプロセスが完了すると、LinuxサーバーにGitLabが準備完了しているはずです。次のセクションで、サーバーが正常に動作するための重要な設定を行います。

## ステップ3: GitLabの設定

すべてが正常に動作するように、設定ファイルにいくつか変更を加える必要があります。まずはお好みのテキストエディタでGitLabの設定ファイルを開きます。ここでは例としてプリインストールされている`nano`を使います。

```
sudo nano /etc/gitlab/gitlab.rb
```

次に、`external_url`の行を探し、ドメインをお持ちの場合はドメイン名を、ない場合はLinuxサーバーのIPアドレスを入力してください。

<!-- 以下は /etc/gitlab/gitlab.rb ファイルからの抜粋 -->
```
## GitLab URL
##! GitLabにアクセスするためのURL。
##! external_urlの設定方法の詳細は以下を参照：
##! https://docs.gitlab.com/omnibus/settings/configuration.html#configuring-the-external-url-for-gitlab
##!
##! 注意: インストールやアップグレード時に環境変数
##! EXTERNAL_URLの値がこの設定に使われます。
##! AWS EC2インスタンスの場合はAWSからパブリックホスト名/IPアドレスを取得しようとします。
##! 詳細は以下を参照：
##! https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instancedata-data-retrieval.html
external_url 'http`s`://`あなたのドメインまたはLinuxサーバーのIPv4アドレス`'
```

さらに、`letsencrypt['contact_emails']`の行にメールアドレスを入力することをおすすめします。これによりLet's Encryptから自動で無料のSSL証明書に関する通知が届きます。

:::note
無料のSSL証明書をLet's Encryptから取得するにはドメインが必要です。IPアドレスには直接発行できません。
:::

<!-- 以下は /etc/gitlab/gitlab.rb ファイルからの抜粋 -->
```
################################################################################
# Let's Encrypt連携設定
################################################################################
# letsencrypt['enable'] = nil
# letsencrypt['contact_emails'] = [`あなたのメールアドレス`] # 連絡先メールアドレスの配列で指定
# letsencrypt['group'] = 'root'
# letsencrypt['key_size'] = 2048
# letsencrypt['owner'] = 'root'
# letsencrypt['wwwroot'] = '/var/opt/gitlab/nginx/www'
# 詳細は https://docs.gitlab.com/omnibus/settings/ssl/index.html#renew-the-certificates-automatically を参照
# letsencrypt['auto_renew'] = true
# letsencrypt['auto_renew_hour'] = 0
# letsencrypt['auto_renew_minute'] = nil # 数字またはcron式
# letsencrypt['auto_renew_day_of_month'] = "*/4"
# letsencrypt['auto_renew_log_directory'] = '/var/log/gitlab/lets-encrypt'
# letsencrypt['alt_names'] = []
```

:::tip
`CTRL+W`で`letsencrypt['contact_emails']`を検索するとファイル内を手動で探さずに済みます。
:::

編集が終わったら、`CTRL+X`を押し、`Y`で保存、`Enter`で確定してください。

最後に、以下のコマンドでGitLabを新しい設定で再構成します。

```
sudo gitlab-ctl reconfigure
```

この処理は少し時間がかかります。更新された設定情報を使ってGitLabを初期化し、自動化された処理が行われます。ドメインを設定していればSSL証明書も発行されます。

## ステップ4: Webインターフェースへのアクセス

初期化が完了したら、Webブラウザからサーバーにアクセスできるようになります。以下のようにドメイン名またはIPアドレスを入力してアクセスしてください。

```
https://[あなたのドメイン] または http://[あなたのIPアドレス]
```

初回アクセス時にはログイン画面が表示されます。

![](https://screensaver01.zap-hosting.com/index.php/s/E46E3qS32GKFfk3/preview)

初回ログインで管理者権限を得るには、ユーザー名に`root`を使ってログインしてください。

パスワードはLinuxサーバー内のファイルに保存されています。以下のコマンドでファイルを開き、`Password`欄の値を確認してください。

```
sudo nano /etc/gitlab/initial_root_password
```

<!-- 以下は /etc/gitlab/initial_root_password ファイルからの抜粋 -->
```
# 警告: この値は以下の条件でのみ有効です

# 1. 手動で設定されている場合（`GITLAB_ROOT_PASSWORD`環境変数または`gitlab.rb`の`gitlab_rails['initial_root_password']`設定で、データベース初期化前に設定された場合）

# 2. パスワードがUIまたはコマンドラインで手動変更されていない場合

#

# もしここに表示されているパスワードでログインできない場合は、https://docs.gitlab.com/ee/security/reset_user_password.html#reset-your-root-password を参照して管理者パスワードをリセットしてください。

Password: `[ここにパスワードが表示されます]`

# 注意: このファイルは初回の再構成実行後24時間以内に自動削除されます。
```

ログイン画面でユーザー名とパスワードを入力し、GitLabのダッシュボードに初めてアクセスしましょう。これで自分だけのLinuxサーバー上にGitLabパネルが立ち上がりました。

![](https://screensaver01.zap-hosting.com/index.php/s/AqPHoEmY2Q2nFCF/preview)

`root`ユーザーのパスワード変更や新規ユーザー作成は強くおすすめします。画面左下の**Admin**から**Overview->Users**に進むとユーザー管理ができます。

## オプション: ufwでファイアウォールを設定する

ファイアウォールの設定をしたくない場合や、OpenSUSEで既に`firewalld`を使っている場合はこのセクションはスキップしてOKです。

ポート80/443と22を許可する必要があります。

### ufwのインストール

すでに`ufw`がインストール済みならこのステップはスキップしてください。

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
この操作で許可していないポートへのアクセスはすべてブロックされます。実行前にホワイトリストが正しく設定されていることを必ず確認してください。
:::

以下のコマンドでファイアウォールを有効にします。

```
sudo ufw enable
```

## まとめ

おめでとうございます！GitLabのインストールに成功しました！もし質問や問題があれば、毎日対応しているサポートチームまでお気軽にお問い合わせください。

さらに設定を進めたい場合は、[公式GitLabドキュメント](https://docs.gitlab.com/ee/install/next_steps.html)の次のステップを読むことをおすすめします。

<InlineVoucher />