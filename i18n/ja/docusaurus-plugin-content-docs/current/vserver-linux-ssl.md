---
id: vserver-linux-ssl
title: "VPS: Linuxサーバー向けSSL証明書の作成（Let's Encrypt）"
description: "CertbotとLet's Encryptを使って無料のSSL証明書でウェブサイトを安全に保護する方法を解説 → 今すぐチェック"
sidebar_label: SSL証明書のインストール（Let's Encrypt）
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

SSL証明書はインターネットの重要な要素で、クライアントとホスト間のデータを安全に送受信できるようにします。このガイドでは、オープンソースの[**Certbot**](https://certbot.eff.org/)ツールを使って、非営利の証明書発行機関**Let's Encrypt**から無料のSSL証明書を取得する手順を紹介します。

<InlineVoucher />

## 準備

Certbotを使うには、Linuxサーバーとあなたが所有する**ドメイン**が必要です。ドメインのDNS設定にアクセスでき、使用予定のルートドメインやサブドメインごとに__Linuxサーバー__のIPアドレスを指す`A`レコードを必ず作成してください。

Certbotには、NginxやApacheなどのさまざまなウェブサーバーに対応した「ワンクリック」証明書設定が可能なプラグインもあります。パフォーマンスが高く人気のあるオープンソースウェブサーバーであるNginxの利用をおすすめします。設定方法は[Linuxリバースプロキシ](vserver-linux-proxy.md)ガイドを参照してください。

## インストール

まずは無料のSSL証明書を取得するために使うオープンソースの[**Certbot**](https://certbot.eff.org/)パッケージをインストールしましょう。

```
sudo apt install certbot
```

Certbotがインストールできたら、ドメインの証明書をリクエストできます。Let's EncryptとCertbotは、ドメイン所有権を確認するためにさまざまなACMEチャレンジを提供しています。

自動更新が可能なため、デフォルトの**HTTP-01**方式の利用を強く推奨します。もし問題がある場合は、手動でTXT DNSレコードを使う**DNS-01**方式を代替として試せますが、自動更新には対応していません。

:::tip ウェブサーバープラグインの活用
NginxやApacheなどのウェブサーバーを使っている方は、以下の**Web Server Plugins**セクションを参照してください。Certbotのプラグインを使うことで、ウェブサーバーを停止せずにワンクリックで証明書を取得・設定できます。
:::

### HTTP-01チャレンジ

Certbotがインストールできたら、ドメインの証明書をリクエストしましょう。ここではスタンドアロンモードを使います。これはCertbotが一時的にウェブサーバーを起動して処理を行うため、ファイアウォールでポート80を開放し、ポート80で他のウェブサーバーやサービスが動作していない必要があります（チャレンジ名にある`HTTP`の由来です）。

以下のコマンドで`--standalone`パラメータを使い、一時ウェブサーバーを利用することをCertbotに伝えます。

```
# ルートドメイン用
certbot certonly --standalone -d [your_root_domain] -d www.[your_root_domain]

# サブドメイン用
certbot certonly --standalone -d [your_domain]

# 対話式セットアップ
certbot certonly --standalone
```

コマンド実行後、初回はメールアドレスの入力や任意のメーリングリスト登録、利用規約の同意を求められます。

CertbotはACMEチャレンジを生成し、一時ウェブサーバーでホストします。Let's Encryptのサーバーがこれを取得できれば、証明書が作成され`/etc/letsencrypt/live/[your_domain]`に保存されます。

![](https://screensaver01.zap-hosting.com/index.php/s/7oGcQotKaowaDzM/preview)

あとは証明書のローカルパスを指定して、必要な場所でSSL証明書を利用できます。

### TXT DNSレコード

**HTTP-01**方式で検証がうまくいかない場合は、代わりに**DNS-01**方式を試せます。これはLet's Encryptから指定された値を持つ**TXT** DNSレコードを作成する方法です。

ただし、この方法は自動更新に対応していないため、可能な限り**HTTP-01**方式を使うことをおすすめします。

以下のコマンドで`--preferred-challenges`パラメータを使い、`DNS-01`方式を指定します。

```
# ルートドメイン用
certbot certonly --preferred-challenges dns-01 -d [your_root_domain] -d www.[your_root_domain] --manual -m [your_root_domain] -m www.[your_root_domain]

# サブドメイン用
certbot certonly --preferred-challenges dns-01 -d [your_domain] --manual -m [your_domain]

# 対話式セットアップ
certbot certonly --preferred-challenges dns-01
```

コマンド実行後、メールアドレスの入力や利用規約の同意などの対話式セットアップが始まります。

Certbotは指定された値を持つ**TXT** DNSレコードの作成方法を案内します。通常、ターゲットは`_acme-challenge.`をドメインの前に付けた名前（例：`_acme-challenge.zapdocs.example.com`）で、値はコンソールに表示されます。

レコードを作成したらEnterを押して続行します。正しく反映されていれば証明書が作成され、`/etc/letsencrypt/live/[your_domain]`に保存されます。

:::note
DNSレコードの反映には時間がかかる場合があります。通常は数分以内ですが、まれにもっと時間がかかることもありますので気長にお待ちください。
:::

証明書のローカルパスを指定して、必要な場所でSSL証明書を利用できます。

## ウェブサーバープラグイン

Certbotには複数のウェブサーバープラグインがあり、証明書管理がさらに簡単になります。プラグインを使うと、Certbotが自動で該当するサーバーブロックを編集してくれます。プラグインを使うには、`certbot`コマンドに対応するパラメータを追加するだけです。

どのプラグインも**HTTP-01**チャレンジを使い、基本的な動作は同じです。プラグイン使用時は、Certbotがリクエストされたドメインを含む`server_name`パラメータのサーバーブロックを探し、ACMEチャレンジ用の一時的な`location /.well-known/acme-challenge/...`ブロックを追加します。

Let's Encryptサーバーがチャレンジを取得できれば証明書が生成され、サーバーブロック設定が自動でHTTPS（ポート443）対応に書き換えられ、新しい証明書のパスが追加されます。

<Tabs>
<TabItem value="nginx" label="Nginx" default>

### Nginxプラグイン

プラグインを使う前に、インストールされているか確認しましょう。

```
sudo apt install python3-certbot-nginx
```

Nginxプラグインを使うには、コマンドに`--nginx`パラメータを付けます。

```
# ルートドメイン用
certbot --nginx -d [your_root_domain] -d www.[your_root_domain]

# サブドメイン用
certbot --nginx -d [your_domain]

# 対話式セットアップ
certbot --nginx
```

:::tip
Certbotによる自動のサーバーブロック編集を無効にしたい場合は、`certonly`パラメータを付けて`certbot certonly`のように実行してください。
:::

</TabItem>

<TabItem value="apache" label="Apache">

### Apacheプラグイン

プラグインを使う前に、インストールされているか確認しましょう。

```
sudo apt install python3-certbot-apache
```

Apacheプラグインを使うには、コマンドに`--apache`パラメータを付けます。

```
# ルートドメイン用
certbot --apache -d [your_root_domain] -d www.[your_root_domain]

# サブドメイン用
certbot --apache -d [your_domain]

# 対話式セットアップ
certbot --apache
```

:::tip
Certbotによる自動のサーバーブロック編集を無効にしたい場合は、`certonly`パラメータを付けて`certbot certonly`のように実行してください。
:::

</TabItem>

<TabItem value="webroot" label="Webroot">

### Webrootプラグイン

独自のウェブサーバーを使っていて、従来のNginxやApacheを使わない場合は、ウェブルート方式を使うとサーバーを停止せずに証明書を取得できます。

Webrootプラグインを使うには、`--webroot`パラメータと`-w [your_webserver_path]`（ウェブルートのトップディレクトリパス）を指定します。

```
# ルートドメイン用
certbot --webroot -w [your_webserver_path] -d [your_root_domain] -d www.[your_root_domain]

# サブドメイン用
certbot --webroot -w [your_webserver_path] -d [your_domain]

# 対話式セットアップ
certbot --webroot -w [your_webserver_path]
```

:::tip
よく使われるウェブルートの場所は`/var/www/html`です。NginxやApacheでも、プラグインによる自動編集を使わずにウェブルート方式で証明書を取得したい場合に便利です。
:::

</TabItem>
</Tabs>

## 自動更新

通常、Certbotはcronジョブやsystemdタイマーを使って証明書の自動更新を設定します。以下のコマンドで`--dry-run`パラメータを使い、更新処理のテストができます。

```
certbot renew --dry-run
```

:::tip
前述の通り、**DNS-01**方式はCertbotによる自動更新に対応していません。可能な限り**HTTP-01**方式を使いましょう。
:::

問題なければ成功します。自動更新の設定は`/etc/crontab/`、`/etc/cron.*/*`、または`systemctl list-timers`で確認・変更できます。

### 手動でのcronジョブ設定

もし自動更新が設定されていなければ、自分でcronジョブを追加できます。`crontab -e`でcrontab編集画面を開きます。初めての場合はエディタ選択が求められるので、最初の`/bin/nano`を選びましょう。

nanoでファイルが開いたら、以下の行を追加して毎日午前6時に更新を実行するようにします。

```
0 6 * * * certbot renew
```

保存してnanoを終了するには、`CTRL + X`、`Y`、`ENTER`の順に押します。

## まとめ

これで、スタンドアロン、ウェブルート、プラグインなどさまざまな方法でCertbotを使い、ドメインのSSL証明書を設定してHTTPSによる安全な通信を実現できました。質問やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にご連絡ください！🙂

<InlineVoucher />