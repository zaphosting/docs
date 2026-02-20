---
id: dedicated-linux-ssl
title: "LinuxサーバーでLet's Encrypt SSLを設定 - 専用サーバーをHTTPSで安全に"
description: "CertbotとLet's Encryptを使って無料SSL証明書でウェブサイトを安全に → 今すぐ詳しくチェック"
sidebar_label: SSL証明書のインストール（Let's Encrypt）
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

SSL証明書はインターネットの必須アイテムで、クライアントとホスト間のデータを安全に送受信できるようにします。このガイドでは、オープンソースの[**Certbot**](https://certbot.eff.org/)ツールを使って、非営利の証明書機関**Let's Encrypt**から無料のSSL証明書を取得する方法を解説します。

## 準備

Certbotを使うには、Linuxサーバーとあなたが所有する**ドメイン**が必要です。ドメインのDNS設定にアクセスでき、使用予定のルートドメインやサブドメインごとに、__Linuxサーバー__のIPアドレスを指す`A`レコードを必ず作成してください。

Certbotには、NginxやApacheなどのさまざまなウェブサーバーに対応した「ワンクリック」証明書設定ができるプラグインもあります。パフォーマンスが高く人気のあるオープンソースウェブサーバーであるNginxの利用をおすすめします。設定方法は[Linuxリバースプロキシ](dedicated-linux-proxy.md)ガイドも参考にしてください。

## インストール

まずは、無料SSL証明書を取得するために使うオープンソースの[**Certbot**](https://certbot.eff.org/)パッケージをインストールしましょう。

```
sudo apt install certbot
```

Certbotがインストールできたら、ドメインの証明書をリクエストできます。Let's EncryptとCertbotは、ドメイン所有権を確認するためにさまざまなACMEチャレンジを提供しています。

自動更新が可能なため、基本的にはデフォルトの**HTTP-01**方式を強くおすすめします。もし問題がある場合は、手動でTXT DNSレコードを使う**DNS-01**方式を代替として試せますが、自動更新はサポートされません。

:::tip ウェブサーバープラグインを活用しよう
NginxやApacheなどのウェブサーバーを使っている方は、以下の**Web Server Plugins**セクションで紹介するCertbotプラグインを使う方法がおすすめです。ウェブサーバーを停止せずにワンクリックで証明書を取得できます。
:::

### HTTP-01チャレンジ

Certbotがインストールできたら、ドメインの証明書をリクエストしましょう。ここではスタンドアロンモードを使います。これはCertbotが一時的にウェブサーバーを起動してチャレンジを実行する方式です。そのため、ファイアウォールでポート80を開放し、ポート80で既存のウェブサーバーやサービスが動いていない必要があります（チャレンジ名のHTTPはここから来ています）。

以下のコマンドで`--standalone`パラメータを使い、一時ウェブサーバーを利用することをCertbotに伝えます。

```
# ルートドメインの場合
certbot certonly --standalone -d [your_root_domain] -d www.[your_root_domain]

# サブドメインの場合
certbot certonly --standalone -d [your_domain]

# 対話式セットアップ
certbot certonly --standalone
```

コマンド実行後、初回はメールアドレスの入力や任意のメーリングリスト登録、利用規約の同意を求められます。

CertbotはACMEチャレンジを生成し、一時ウェブサーバーでホストします。Let's Encryptのサーバーがこれを取得できれば、証明書が作成され`/etc/letsencrypt/live/[your_domain]`に保存されます。

![](https://screensaver01.zap-hosting.com/index.php/s/7oGcQotKaowaDzM/preview)

あとは必要な場所でローカルパスを指定してSSL証明書を利用できます。

### TXT DNSレコード

HTTP-01方式で検証がうまくいかない場合は、代わりに**DNS-01**方式を試せます。これはLet's Encryptから指定された値を持つ**TXT** DNSレコードを作成する方法です。

ただし、この方法は自動更新に対応していないため、できるだけHTTP-01方式を使うことをおすすめします。

以下のコマンドで`--preferred-challenges`パラメータを使い、DNS-01方式を指定します。

```
# ルートドメインの場合
certbot certonly --preferred-challenges dns-01 -d [your_root_domain] -d www.[your_root_domain] --manual -m [your_root_domain] -m www.[your_root_domain]

# サブドメインの場合
certbot certonly --preferred-challenges dns-01 -d [your_domain] --manual -m [your_domain]

# 対話式セットアップ
certbot certonly --preferred-challenges dns-01
```

コマンド実行後、メールアドレスの入力や利用規約の同意などの対話式セットアップが始まります。

CertbotはTXTレコードの作成方法を指示します。通常、ターゲットは`_acme-challenge.`をドメインの前に付けたもの（例：`_acme-challenge.zapdocs.example.com`）で、値はコンソールに表示されます。

レコードを作成したらEnterを押して続行。正しく反映されていれば証明書が作成され、`/etc/letsencrypt/live/[your_domain]`に保存されます。

:::note
DNSレコードの反映には時間がかかる場合があります。通常は数分以内ですが、まれにもっと長くかかることもあります。
:::

あとは必要な場所でローカルパスを指定してSSL証明書を利用できます。

## ウェブサーバープラグイン

Certbotには複数のウェブサーバープラグインがあり、証明書管理がさらに簡単になります。プラグインは対象のサーバーブロックを自動で編集してくれます。使うには`certbot`コマンドに対応するパラメータを追加するだけ。

どのプラグインも**HTTP-01**チャレンジを使い、指定ドメインを含む`server_name`パラメータのサーバーブロックを探します。見つかるとACMEチャレンジを生成し、一時的に`location /.well-known/acme-challenge/...`を追加します。

Let's Encryptサーバーがチャレンジを取得できれば証明書が生成され、サーバーブロック設定が自動でHTTPS（ポート443）対応に書き換えられ、新しい証明書のパスが追加されます。

<Tabs>
<TabItem value="nginx" label="Nginx" default>

### Nginxプラグイン

プラグインを使う前にインストールされているか確認しましょう。

```
sudo apt install python3-certbot-nginx
```

Nginxプラグインを使うには、コマンドに`--nginx`パラメータを付けます。

```
# ルートドメインの場合
certbot --nginx -d [your_root_domain] -d www.[your_root_domain]

# サブドメインの場合
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

プラグインを使う前にインストールされているか確認しましょう。

```
sudo apt install python3-certbot-apache
```

Apacheプラグインを使うには、コマンドに`--apache`パラメータを付けます。

```
# ルートドメインの場合
certbot --apache -d [your_root_domain] -d www.[your_root_domain]

# サブドメインの場合
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

独自のローカルウェブサーバーを使っていて、伝統的なソフトウェアを使わない場合は、ウェブサーバーを停止せずに証明書を取得できるWebroot方式がおすすめです。

Webrootプラグインを使うには、`--webroot`パラメータと`-w [your_webserver_path]`（ウェブルートのトップディレクトリパス）を指定します。

```
# ルートドメインの場合
certbot --webroot -w [your_webserver_path] -d [your_root_domain] -d www.[your_root_domain]

# サブドメインの場合
certbot --webroot -w [your_webserver_path] -d [your_domain]

# 対話式セットアップ
certbot --webroot -w [your_webserver_path]
```

:::tip
よく使われるウェブルートは`/var/www/html`です。NginxやApacheでも、プラグインによる自動サーバーブロック編集を使いたくない場合にこの方法が使えます。
:::

</TabItem>
</Tabs>

## 自動更新

ほとんどの場合、Certbotはcronジョブやsystemdタイマーを使って自動的に証明書の更新を設定します。以下のコマンドで`--dry-run`パラメータを使い、更新処理のテストができます。

```
certbot renew --dry-run
```

:::tip
前述の通り、**DNS-01**方式はCertbotによる自動更新に対応していません。できるだけ**HTTP-01**方式を使いましょう。
:::

問題なければ成功します。自動更新の設定を確認・変更したい場合は、`/etc/crontab/`や`/etc/cron.*/*`、または`systemctl list-timers`で確認できます。

### 手動でcronジョブを設定する場合

もし自動更新が設定されていなければ、自分でcronジョブを追加できます。`crontab -e`でcrontab編集画面を開きます。初めての場合はエディタ選択が出るので、`/bin/nano`を選びましょう。

nanoでファイルが開いたら、以下の行を追加して毎日午前6時に更新を実行するようにします。

```
0 6 * * * certbot renew
```

保存してnanoを終了するには、`CTRL + X`、`Y`、`ENTER`の順に押します。

## まとめ

これで、スタンドアロン、ウェブルート、プラグインなどさまざまな方法でCertbotを使い、ドメインのSSL証明書を設定してHTTPSによる安全な通信を実現できました。質問やサポートが必要な場合は、いつでもお気軽に当社サポートチームまでお問い合わせくださいね！🙂