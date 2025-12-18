---
id: dedicated-linux-gitlab
title: "専用サーバー：LinuxにGitLabをインストールする方法"
description: "GitLabをLinuxにセットアップしてDevOpsワークフローを効率化し、チームコラボレーションを強化しよう → 今すぐチェック"
sidebar_label: GitLabのインストール
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

GitLabは、チームがコードでコラボし、ワークフローを自動化し、ソフトウェア開発のライフサイクル全体を効率的に管理できる包括的なDevOpsプラットフォームです。このガイドでは、LinuxサーバーにGitLabをインストールする方法を解説します。

![](https://screensaver01.zap-hosting.com/index.php/s/ZWMPsLzrXZjnqEE/preview)



## 準備

以下の要件は公式の[GitLabチーム](https://docs.gitlab.com/ee/install/requirements.html)によって推奨されており、後々のトラブルを避けるために必ず事前に確認しておくことを強くおすすめします。

#### ハードウェア

| コンポーネント | 最低要件               | 推奨                     |
| -------------- | ---------------------- | ------------------------ |
| CPU            | 2x 2 GHz               | 4x 2.6+ GHz             |
| RAM            | 4 GB                   | 8 GB                    |
| ストレージ     | 10 GB                  | 50 GB以上               |
| 帯域幅         | 100 Mbit/s (上り下り)  | 100 Mbit/s (上り下り)   |

#### ソフトウェア

| プラットフォーム | オプション                                                      |
| ---------------- | -------------------------------------------------------------- |
| OS               | Ubuntu (20.04, 22.04, 24.04), Debian(10, 11, 12), OpenSUSE (15.5) |
| データベース     | PostgreSQL 14.9+                                               |
| Webサーバー      | NGINX (GitLabにバンドル), Puma 6.4.2+                         |
| その他           | Redis 7.x+, Sidekiq 7.3.2+, Prometheus 2.54.1+                 |

:::info
最新かつ正確な仕様情報については、GitLab公式の[ハードウェア要件](https://docs.gitlab.com/ee/install/requirements.html)ドキュメントを必ずご確認ください。
:::

## 準備

LinuxサーバーにGitLabをインストールするには、SSHクライアントを使って接続を確立する必要があります。詳しくは当社の[初期アクセス（SSH）](vserver-linux-ssh.md)ガイドをご覧ください。

接続が確立したら、GitLabのインストールに必要なパッケージをインストールしましょう。

## ステップ1：依存関係のインストール

まず、GitLabインストーラーを動かすために必要な依存関係をインストールします。以下のコマンドを使ってLinuxサーバーに必要なパッケージをインストールしてください。

<Tabs>
<TabItem value="ubuntu" label="Ubuntu" default>

パッケージリストを最新に更新し、OpenSSHサーバーと必要な前提条件をインストールします。これがGitLabのWebインターフェースをホストする仕組みです。

```
sudo apt update
sudo apt-get install -y curl openssh-server ca-certificates tzdata perl
```

GitLabでメール通知を送りたい場合は、Postfix（SMTPサーバー）もインストール可能です。これは**任意**です。

メール通知を使いたい場合は、以下のコマンドでPostfixをインストールしてください。
```
sudo apt-get install -y postfix
```

</TabItem>

<TabItem value="debian" label="Debian">

パッケージリストを最新に更新し、OpenSSHサーバーと必要な前提条件をインストールします。これがGitLabのWebインターフェースをホストする仕組みです。

```
sudo apt update
sudo apt-get install -y curl openssh-server ca-certificates perl
```

GitLabでメール通知を送りたい場合は、Postfix（SMTPサーバー）もインストール可能です。これは**任意**です。

メール通知を使いたい場合は、以下のコマンドでPostfixをインストールしてください。
```
sudo apt-get install -y postfix
```

</TabItem>

<TabItem value="opensuse" label="OpenSUSE">

OpenSSHサーバーと必要な前提条件をインストールします。これがGitLabのWebインターフェースをホストする仕組みです。

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

使っている場合は、必要なポート（デフォルトで80と443）を開放してください。

```
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo systemctl reload firewalld
```

GitLabでメール通知を送りたい場合は、Postfix（SMTPサーバー）もインストール可能です。これは**任意**です。

メール通知を使いたい場合は、以下のコマンドでPostfixをインストールし、有効化・起動してください。
```
sudo zypper install postfix
sudo systemctl enable postfix
sudo systemctl start postfix
```

</TabItem>
</Tabs>

:::info
Postfixのインストール中に設定画面が表示された場合は、「Internet Site」を選択してEnterを押してください。メール名にはLinuxサーバーの外部DNSを入力し、Enterを押します。追加の画面が出たらすべてEnterでデフォルト設定を受け入れてください。

別のメール送信ソリューションを使いたい場合はこのステップをスキップし、GitLabインストール後に公式GitLabチームのガイドに従って[外部SMTPサーバーを設定](https://docs.gitlab.com/omnibus/settings/smtp)してください。
:::

## ステップ2：GitLabのインストール

依存関係のインストールが完了したら、いよいよGitLabをインストールします。

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

このプロセスが完了すると、LinuxサーバーにGitLabがインストールされているはずです。次のセクションで、サーバーが正常に動作するための重要な設定を行います。

## ステップ3：GitLabの設定

正常に動作させるために、設定ファイルの一部を編集します。まずはお好みのテキストエディタでGitLabの設定ファイルを開きましょう。ここでは例として`nano`を使います。

```
sudo nano /etc/gitlab/gitlab.rb
```

次に、`external_url`の行を探し、ドメインをお持ちの場合はドメイン名を、ない場合はLinuxサーバーのIPアドレスを入力してください。

<!-- 以下は /etc/gitlab/gitlab.rb ファイルの一部 -->
```
## GitLab URL
##! GitLabにアクセスするURL
##! 詳細は以下を参照:
##! https://docs.gitlab.com/omnibus/settings/configuration.html#configuring-the-external-url-for-gitlab
##!
##! 注意: インストールやアップグレード時に環境変数
##! EXTERNAL_URLの値がここに反映されます。
##! AWS EC2インスタンスの場合は、AWSからパブリックホスト名/IPアドレスを取得しようとします。
##! 詳細は以下を参照:
##! https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instancedata-data-retrieval.html
external_url 'http`s`://`あなたのドメインまたはLinuxサーバーのIPv4アドレス`'
```

さらに、`letsencrypt['contact_emails']`の行にメールアドレスを入力することをおすすめします。これにより、Let's Encryptから自動で無料のSSL証明書に関する通知が届きます。

:::note
無料のSSL証明書をLet's Encryptから取得するにはドメインが必要です。IPアドレスでは直接取得できません。
:::

<!-- 以下は /etc/gitlab/gitlab.rb ファイルの一部 -->
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
# letsencrypt['auto_renew_minute'] = nil # 数字またはcron式
# letsencrypt['auto_renew_day_of_month'] = "*/4"
# letsencrypt['auto_renew_log_directory'] = '/var/log/gitlab/lets-encrypt'
# letsencrypt['alt_names'] = []
```

:::tip
`CTRL+W`で`letsencrypt['contact_emails']`を検索するとファイル内を手早く探せます。
:::

編集が終わったら、`CTRL+X`を押し、`Y`で保存、`Enter`で確定してください。

最後に、以下のコマンドでGitLabを新しい設定で再構成します。

```
sudo gitlab-ctl reconfigure
```

この処理は少し時間がかかります。GitLabが新しい設定で初期化され、自動的にSSL証明書も発行されます（ドメインを使っている場合）。

## ステップ4：Webインターフェースへのアクセス

初期化が完了したら、ブラウザからサーバーにアクセスできます。以下のようにドメイン名またはIPアドレスを入力してください。

```
https://[あなたのドメイン] または http://[あなたのIPアドレス]
```

初回アクセス時はログイン画面が表示されます。

![](https://screensaver01.zap-hosting.com/index.php/s/E46E3qS32GKFfk3/preview)

初回ログインは`root`ユーザーで管理者アクセスが可能です。ユーザー名は`root`を使います。

パスワードはLinuxサーバー内のファイルに保存されているので、以下のコマンドで確認してください。

```
sudo nano /etc/gitlab/initial_root_password
```

<!-- 以下は /etc/gitlab/initial_root_password ファイルの一部 -->
```
# 警告: この値は以下の条件でのみ有効です

# 1. 手動で設定されている場合（`GITLAB_ROOT_PASSWORD`環境変数または`gitlab_rails['initial_root_password']`設定）

# 2. パスワードがUIやコマンドラインで変更されていない場合

#

# もしここにあるパスワードでログインできない場合は、以下の手順で管理者パスワードをリセットしてください。
# https://docs.gitlab.com/ee/security/reset_user_password.html#reset-your-root-password

Password: `[ここにパスワードが表示されます]`

# 注意: このファイルは24時間後の最初の再構成時に自動削除されます。
```

ログイン画面でユーザー名とパスワードを入力すると、GitLabのダッシュボードにアクセスできます。

![](https://screensaver01.zap-hosting.com/index.php/s/AqPHoEmY2Q2nFCF/preview)

セキュリティのため、`root`ユーザーのパスワード変更や新規ユーザー作成を強くおすすめします。左下の**Admin**から**Overview->Users**にアクセスするとユーザー管理が可能です。

## オプション：ufwでファイアウォールを設定する

ファイアウォール設定をしたくない場合や、OpenSUSEで`firewalld`を使っている場合はこのセクションはスキップしてOKです。

ポート80/443と22を許可する必要があります。

### ufwのインストール

すでに`ufw`をインストール済みならこのステップはスキップしてください。

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

ファイアウォールを有効にするには以下のコマンドを実行します。

```
sudo ufw enable
```

## まとめ

おめでとうございます！GitLabのインストールに成功しました！もし質問や問題があれば、いつでも対応可能なサポートチームにご連絡ください。

さらに設定を進めたい場合は、[公式GitLabドキュメント](https://docs.gitlab.com/ee/install/next_steps.html)の次のステップを読むことをおすすめします。