---
id: dedicated-linux-certbot
title: "専用サーバー：LinuxでのCertbotセットアップ"
description: "CertbotとLet's Encryptを使って無料のSSL証明書でウェブサイトを安全に保護する方法をチェック → 今すぐ詳しく見る"
sidebar_label: Certbotのインストール
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

SSL証明書はインターネットの重要な要素で、クライアントとホスト間のデータを安全に送受信できるようにします。このガイドでは、オープンソースの[**Certbot**](https://certbot.eff.org/)ツールを使って、非営利の証明書機関**Let's Encrypt**から無料のSSL証明書を取得する方法を解説します。

## 準備

Certbotを使うには、Linuxサーバーとあなたが所有する**ドメイン**が必要です。ドメインのDNS設定にアクセスでき、使用予定のルートドメインやサブドメインごとに__Linuxサーバー__のIPアドレスを指す`A`レコードを必ず作成してください。

Certbotには、NginxやApacheなどのさまざまなウェブサーバーに対応した「ワンクリック」証明書設定ができる追加プラグインもあります。パフォーマンスが高く人気のあるオープンソースウェブサーバーであるNginxの利用をおすすめします。設定方法は[Linuxリバースプロキシ](dedicated-linux-proxy.md)ガイドを参照してください。

## インストール

まずは、無料のSSL証明書を取得するために使うオープンソースの[**Certbot**](https://certbot.eff.org/)パッケージをインストールしましょう。

```
sudo apt install certbot
```

Certbotがインストールできたら、ドメインの証明書をリクエストできます。Let's EncryptとCertbotは、ドメイン所有権を確認するためにさまざまなACMEチャレンジを提供しています。

自動更新が可能なため、基本的には**HTTP-01**方式の利用を強く推奨します。ただし問題がある場合は、手動でTXT DNSレコードを使う**DNS-01**方式を代替として試すこともできますが、自動更新はサポートされません。

:::tip ウェブサーバープラグインの活用
NginxやApacheなどのウェブサーバーを使っている方は、以下の**Web Server Plugins**セクションをチェックしてください。Certbotの追加プラグインを使うことで、ウェブサーバーを停止せずにワンクリックで証明書を取得・設定できます。
:::

### HTTP-01チャレンジ

Certbotがインストールできたら、ドメインの証明書をリクエストしましょう。ここではスタンドアロンモードを使います。これはCertbotが一時的にウェブサーバーを起動して必要な処理を行う方式です。そのため、ファイアウォールでポート80を開放し、ポート80で既存のウェブサーバーやサービスが動作していない必要があります（チャレンジ名のHTTPはここから来ています）。

以下のコマンドでは、`--standalone`パラメータを使って一時ウェブサーバーを使うことをCertbotに伝えます。

```
# ルートドメインの場合
certbot certonly --standalone -d [your_root_domain] -d www.[your_root_domain]

# サブドメインの場合
certbot certonly --standalone -d [your_domain]

# 対話式セットアップ
certbot certonly --standalone
```

コマンド実行後、初回はメールアドレスの入力やオプションのメーリングリスト登録、利用規約の同意などの対話式セットアップが求められます。

CertbotはACMEチャレンジを生成し、一時ウェブサーバーでホストします。Let's Encryptのサーバーがこれを取得できれば、証明書が作成され`/etc/letsencrypt/live/[your_domain]`に保存されます。

![](https://screensaver01.zap-hosting.com/index.php/s/7oGcQotKaowaDzM/preview)

あとは必要な場所で証明書のローカルパスを指定して使うだけです。

### TXT DNSレコード

もし**HTTP-01**方式でドメイン認証がうまくいかない場合は、代わりに**DNS-01**方式を試せます。これはLet's Encryptから提供される値を使って**TXT** DNSレコードを作成する方法です。

ただし、この方法は自動更新に対応していません。自動更新を自分で管理するインフラを用意しない限り、基本的には**HTTP-01**方式を使うことをおすすめします。

以下のコマンドでは、`--preferred-challenges`パラメータで`dns-01`を指定し、手動モードで実行します。

```
# ルートドメインの場合
certbot certonly --preferred-challenges dns-01 -d [your_root_domain] -d www.[your_root_domain] --manual -m [your_root_domain] -m www.[your_root_domain]

# サブドメインの場合
certbot certonly --preferred-challenges dns-01 -d [your_domain] --manual -m [your_domain]

# 対話式セットアップ
certbot certonly --preferred-challenges dns-01
```

コマンド実行後、初回はメールアドレスの入力やオプションのメーリングリスト登録、利用規約の同意などの対話式セットアップが求められます。

CertbotはTXTレコードの作成方法を案内します。通常、ターゲットは`_acme-challenge.`をドメインの前に付けた名前（例：`_acme-challenge.zapdocs.example.com`）で、値はコンソールに表示されます。

レコードを作成したらEnterを押して続行します。正しく反映されていれば証明書が作成され、`/etc/letsencrypt/live/[your_domain]`に保存されます。

:::note
DNSレコードの反映には時間がかかる場合があります。通常は数分以内ですが、まれにもっと時間がかかることもありますので気長にお待ちください。
:::

あとは必要な場所で証明書のローカルパスを指定して使うだけです。

## ウェブサーバープラグイン

Certbotにはさまざまなウェブサーバープラグインがあり、証明書管理がさらに簡単になります。プラグインは対象のサーバーブロックを自動で編集し、HTTPS対応に切り替えたり証明書パスを設定したりします。使うには`certbot`コマンドに対応するパラメータを追加するだけです。

どのプラグインも**HTTP-01**チャレンジを使い、基本的な動作は同じです。プラグインはまずリクエストされたドメインを含む`server_name`パラメータのサーバーブロックを探し、ACMEチャレンジ用の一時的な`location /.well-known/acme-challenge/...`を追加します。

Let's Encryptのサーバーがこれを取得できれば証明書が生成され、サーバーブロック設定が自動でHTTPS（ポート443）対応に切り替わり、新しい証明書のパスが追加されます。

<Tabs>
<TabItem value="nginx" label="Nginx" default>

### Nginxプラグイン

プラグインを使う前に、インストールされているか確認しましょう。

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

プラグインを使う前に、インストールされているか確認しましょう。

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

Webrootプラグインを使うには、コマンドに`--webroot`パラメータと`-w [your_webserver_path]`（`--webroot-path`の省略形）を指定します。`[your_webserver_path]`はウェブサーバーのトップディレクトリのパスです。

```
# ルートドメインの場合
certbot --webroot -w [your_webserver_path] -d [your_root_domain] -d www.[your_root_domain]

# サブドメインの場合
certbot --webroot -w [your_webserver_path] -d [your_domain]

# 対話式セットアップ
certbot --webroot -w [your_webserver_path]
```

:::tip
よく使われるWebrootの場所は`/var/www/html`です。NginxやApacheでも、自動的なサーバーブロック編集を使いたくない場合にこの方法を使うことがあります。
:::

</TabItem>
</Tabs>

## 自動更新

ほとんどの場合、Certbotはcronジョブやsystemdタイマーを使って証明書の自動更新を設定します。以下のコマンドで`--dry-run`パラメータを使い、更新処理のテストができます。

```
certbot renew --dry-run
```

:::tip
繰り返しになりますが、**DNS-01**方式はCertbotによる自動更新に対応していません。自動更新を使いたい場合は**HTTP-01**方式を使いましょう。
:::

問題なければ成功します。自動更新の設定を確認・変更したい場合は、`/etc/crontab/`や`/etc/cron.*/*`、または`systemctl list-timers`で確認できます。

### 手動でのcronジョブ設定

もし自動更新が設定されていなければ、自分でcronジョブを追加できます。`crontab -e`でcrontab編集画面を開きます。初めての場合はエディタ選択が求められるので、`/bin/nano`を選びましょう。

nanoが開いたら、以下の行を追加して毎日午前6時に更新を実行するようにします。

```
0 6 * * * certbot renew
```

保存してnanoを終了するには、`CTRL + X`、`Y`、`ENTER`の順に押します。

## まとめ

これで、スタンドアロン、Webroot、プラグインなどさまざまな方法でCertbotをセットアップし、あなたのドメインにHTTPSによる安全なデータ通信を実現できました。質問やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にお問い合わせくださいね！🙂