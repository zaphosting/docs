---
id: dedicated-linux-ssl
title: "専用サーバー：LinuxサーバーでのSSL証明書作成（Let's Encrypt）"
description: "CertbotとLet's Encryptを使って無料のSSL証明書でウェブサイトを安全に保護する方法を解説 → 今すぐチェック"
sidebar_label: SSL証明書のインストール（Let's Encrypt）
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

SSL証明書はインターネットの重要な要素で、クライアントとホスト間のデータを安全に送受信できるようにします。このガイドでは、オープンソースの[**Certbot**](https://certbot.eff.org/)ツールを使って、非営利の証明書発行機関**Let's Encrypt**から無料のSSL証明書を取得する手順を紹介します。

## 準備

Certbotを使うには、Linuxサーバーとあなたが所有する**ドメイン**が必要です。ドメインのDNS設定にアクセスでき、使用予定のルートドメインやサブドメインごとに__Linuxサーバー__のIPアドレスを指す`A`レコードを必ず作成してください。

Certbotには、NginxやApacheなどのさまざまなウェブサーバーに対応した「ワンクリック」証明書設定ができる追加プラグインもあります。パフォーマンスが高く人気のあるオープンソースのNginxを使うことをおすすめします。設定方法は[Linuxリバースプロキシ](dedicated-linux-proxy.md)ガイドを参照してください。

## インストール

まずは、無料SSL証明書を取得するために使うオープンソースの[**Certbot**](https://certbot.eff.org/)パッケージをインストールしましょう。

```
sudo apt install certbot
```

Certbotがインストールできたら、ドメインの証明書をリクエストできます。Let's EncryptとCertbotは、ドメイン所有権を確認するためにさまざまなACMEチャレンジを提供しています。

自動更新が可能なため、基本的には**HTTP-01**方式の利用を強く推奨します。ただし問題がある場合は、手動でTXT DNSレコードを使う**DNS-01**方式を代替として試すことも可能です。ただしDNS-01は自動更新に対応していません。

:::tip ウェブサーバープラグインの活用
NginxやApacheなどのウェブサーバーを使っている方は、以下の**Web Server Plugins**セクションをチェックしてください。Certbotの追加プラグインを使って「ワンクリック」設定やウェブサーバーを停止せずに証明書を取得する方法を解説しています。
:::

### HTTP-01チャレンジ

Certbotがインストールできたら、ドメインの証明書をリクエストしましょう。ここではスタンドアロンモードを使います。これはCertbotが一時的にウェブサーバーを起動してチャレンジを実行する方式です。そのため、ファイアウォールでポート80を開放し、ポート80で動作中のウェブサーバーやサービスがない状態にしてください（チャレンジ名にHTTPが入っている理由です）。

以下のコマンドで`--standalone`パラメータを使い、一時ウェブサーバーを利用することをCertbotに伝えます。

```
# ルートドメインの場合
certbot certonly --standalone -d [your_root_domain] -d www.[your_root_domain]

# サブドメインの場合
certbot certonly --standalone -d [your_domain]

# 対話式セットアップ
certbot certonly --standalone
```

コマンド実行後、初回はメールアドレスの入力や任意のメーリングリスト登録、利用規約の同意などの対話式セットアップが求められます。

CertbotはACMEチャレンジを生成し、一時ウェブサーバーでホストします。Let's Encryptのサーバーがこれを取得できれば証明書が作成され、`/etc/letsencrypt/live/[your_domain]`に保存されます。

![](https://screensaver01.zap-hosting.com/index.php/s/7oGcQotKaowaDzM/preview)

あとは証明書のローカルパスを指定して、必要な場所でSSL証明書を利用できます。

### TXT DNSレコード

もし**HTTP-01**方式でドメイン認証がうまくいかない場合は、代わりに**DNS-01**方式を試せます。これはLet's Encryptから指定された値を持つ**TXT** DNSレコードを作成する方法です。

ただしこの方法は自動更新に対応していません。自動更新を使いたい場合はできるだけ**HTTP-01**方式を使いましょう。

以下のコマンドで`--preferred-challenges`パラメータを使い、`DNS-01`方式を指定します。

```
# ルートドメインの場合
certbot certonly --preferred-challenges dns-01 -d [your_root_domain] -d www.[your_root_domain] --manual -m [your_root_domain] -m www.[your_root_domain]

# サブドメインの場合
certbot certonly --preferred-challenges dns-01 -d [your_domain] --manual -m [your_domain]

# 対話式セットアップ
certbot certonly --preferred-challenges dns-01
```

コマンド実行後、初回はメールアドレスの入力や任意のメーリングリスト登録、利用規約の同意などの対話式セットアップが求められます。

CertbotはTXTレコードの作成方法を指示します。通常、対象は`_acme-challenge.`をドメインの前に付けた名前（例：`_acme-challenge.zapdocs.example.com`）で、値はコンソールに表示されます。

レコードを作成したらEnterを押して続行してください。正しく反映されていれば証明書が作成され、`/etc/letsencrypt/live/[your_domain]`に保存されます。

:::note
DNSレコードの反映には時間がかかることがあります。通常は数分以内ですが、まれにもっと長くかかる場合もありますので気長にお待ちください。
:::

証明書のローカルパスを指定して、必要な場所でSSL証明書を利用できます。

## ウェブサーバープラグイン

Certbotには複数のウェブサーバープラグインがあり、証明書管理がさらに簡単になります。プラグインは該当するサーバーブロックを自動で編集してくれます。使うには`certbot`コマンドに対応するパラメータを追加するだけです。

どのプラグインも**HTTP-01**チャレンジを使い、動作はほぼ同じです。プラグイン使用時は、Certbotが対象ドメインを含む`server_name`パラメータのサーバーブロックを探し、ACMEチャレンジ用の一時的な`location /.well-known/acme-challenge/...`ブロックを追加します。

Let's Encryptサーバーがチャレンジを取得できれば証明書が生成され、サーバーブロック設定が自動でHTTPS（ポート443）対応に書き換えられ、新しい証明書のパスが追加されます。

<Tabs>
<TabItem value="nginx" label="Nginx" default>

### Nginxプラグイン

プラグインを使う前にインストールされているか確認しましょう。

```
sudo apt install python3-certbot-nginx
```

Nginxプラグインを使うには、コマンドに`--nginx`パラメータを追加します。

```
# ルートドメインの場合
certbot --nginx -d [your_root_domain] -d www.[your_root_domain]

# サブドメインの場合
certbot --nginx -d [your_domain]

# 対話式セットアップ
certbot --nginx
```

:::tip
Certbotによる自動のサーバーブロック編集を無効にしたい場合は、`certonly`パラメータを追加して`certbot certonly`のように実行してください。
:::

</TabItem>

<TabItem value="apache" label="Apache">

### Apacheプラグイン

プラグインを使う前にインストールされているか確認しましょう。

```
sudo apt install python3-certbot-apache
```

Apacheプラグインを使うには、コマンドに`--apache`パラメータを追加します。

```
# ルートドメインの場合
certbot --apache -d [your_root_domain] -d www.[your_root_domain]

# サブドメインの場合
certbot --apache -d [your_domain]

# 対話式セットアップ
certbot --apache
```

:::tip
Certbotによる自動のサーバーブロック編集を無効にしたい場合は、`certonly`パラメータを追加して`certbot certonly`のように実行してください。
:::

</TabItem>

<TabItem value="webroot" label="Webroot">

### Webrootプラグイン

独自のウェブサーバーを使っていて、NginxやApacheのような一般的なソフトを使っていない場合は、Webroot方式を使うとウェブサーバーを停止せずに証明書を取得できます。

Webrootプラグインを使うには、コマンドに`--webroot`パラメータと、ウェブサーバーのトップディレクトリを指定する`-w [your_webserver_path]`（`--webroot-path`の省略形）を追加します。

```
# ルートドメインの場合
certbot --webroot -w [your_webserver_path] -d [your_root_domain] -d www.[your_root_domain]

# サブドメインの場合
certbot --webroot -w [your_webserver_path] -d [your_domain]

# 対話式セットアップ
certbot --webroot -w [your_webserver_path]
```

:::tip
よく使われるウェブルートの場所は`/var/www/html`です。NginxやApacheでも自動サーバーブロック編集を使いたくない場合にこの方法を使うことがあります。
:::

</TabItem>
</Tabs>

## 自動更新

通常、Certbotはcronジョブやsystemdタイマーを使って証明書の自動更新を設定します。以下のコマンドで`--dry-run`パラメータを使い、更新処理のテストができます。

```
certbot renew --dry-run
```

:::tip
繰り返しになりますが、**DNS-01**方式はCertbotによる自動更新に対応していません。自動更新を使いたい場合は**HTTP-01**方式をおすすめします。
:::

問題なければ成功するはずです。自動更新の設定は`/etc/crontab/`、`/etc/cron.*/*`、または`systemctl list-timers`で確認できます。

### 手動でcronジョブを設定する場合

もし自動更新が設定されていなければ、自分でcronジョブを追加できます。`crontab -e`でcrontab編集画面を開きます。初めての場合はエディタ選択が求められるので、最初の`/bin/nano`を選んでください。

nanoでファイルが開いたら、以下の行を追加して毎日午前6時に更新を実行するようにします。

```
0 6 * * * certbot renew
```

保存してnanoを終了するには、`CTRL + X`、`Y`、`ENTER`の順に押します。

## まとめ

これで、スタンドアロン、Webroot、プラグインなどさまざまな方法でCertbotを使い、ドメインのSSL証明書を設定できました。HTTPSで安全なデータ通信が可能になっています。質問やサポートが必要な場合は、いつでもお気軽にサポートチームにお問い合わせくださいね！🙂