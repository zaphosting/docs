---
id: dedicated-linux-certbot
title: "LinuxサーバーでのCertbotセットアップ - Let's Encrypt SSLでウェブサイトを安全に"
description: "CertbotとLet's Encryptを使って無料SSL証明書でウェブサイトを安全に → 今すぐ詳しくチェック"
sidebar_label: Certbotのインストール
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

SSL証明書はインターネットの重要な要素で、クライアントとホスト間のデータを安全に送受信できるようにします。このガイドでは、オープンソースの[**Certbot**](https://certbot.eff.org/)ツールを使って、非営利の証明書機関**Let's Encrypt**から無料のSSL証明書を取得する方法を解説します。

## 準備

Certbotを使うには、Linuxサーバーとあなたが所有する**ドメイン**が必要です。ドメインのDNS設定にアクセスでき、使用予定のルートドメインやサブドメインごとに、__Linuxサーバー__のIPアドレスを指す`A`レコードを必ず作成してください。

Certbotには、NginxやApacheなどのさまざまなウェブサーバーに対応した「ワンクリック」証明書設定が可能なプラグインもあります。パフォーマンスが高く人気のあるオープンソースウェブサーバーであるNginxの利用をおすすめします。設定方法は[Linuxリバースプロキシ](dedicated-linux-proxy.md)ガイドを参照してください。

## インストール

まずは、無料SSL証明書を取得するために使うオープンソースの[**Certbot**](https://certbot.eff.org/)パッケージをインストールしましょう。

```
sudo apt install certbot
```

Certbotがインストールできたら、ドメインの証明書をリクエストできます。Let's EncryptとCertbotは、ドメイン所有権を確認するために複数のACMEチャレンジ方式を提供しています。

自動更新が可能なため、基本的にはデフォルトの**HTTP-01**方式を強く推奨します。ただし問題がある場合は、手動でTXT DNSレコードを使う**DNS-01**方式を代替として試せますが、自動更新には対応していません。

:::tip ウェブサーバープラグインの活用
NginxやApacheなどのウェブサーバーを使っている方は、以下の**Web Server Plugins**セクションで、Certbotのプラグインを使った「ワンクリック」設定やウェブサーバーを停止せずに証明書を取得する方法をチェックしてください。
:::

### HTTP-01チャレンジ

Certbotがインストールできたら、ドメインの証明書をリクエストしましょう。ここではスタンドアロンモードを使います。これはCertbotが一時的にウェブサーバーを起動して処理を行うため、ファイアウォールでポート80を開放し、ポート80で他のウェブサーバーやサービスが動いていない必要があります（チャレンジ名のHTTPはここから来ています）。

以下のコマンドで`--standalone`パラメータを使い、一時ウェブサーバーを利用することをCertbotに伝えます。

```
# ルートドメインの場合
certbot certonly --standalone -d [your_root_domain] -d www.[your_root_domain]

# サブドメインの場合
certbot certonly --standalone -d [your_domain]

# 対話式セットアップ
certbot certonly --standalone
```

コマンド実行後、初回はメールアドレスの入力やオプションのメーリングリスト登録、利用規約の同意などの対話式セットアップが求められます。

CertbotはACMEチャレンジを生成し、一時ウェブサーバーでホストします。Let's Encryptのサーバーがこれを取得できれば、証明書が生成され`/etc/letsencrypt/live/[your_domain]`に保存されます。

![](https://screensaver01.zap-hosting.com/index.php/s/7oGcQotKaowaDzM/preview)

あとは必要な場所で証明書のローカルパスを指定して使うだけです。

### TXT DNSレコード

HTTP-01方式で検証がうまくいかない場合は、代わりに**DNS-01**方式を試せます。これはLet's Encryptから指定される値を持つ**TXT** DNSレコードを作成する方法です。

ただし、この方法は自動更新に対応していないため、自分で管理インフラを用意しない限り手動更新が必要です。可能な限りHTTP-01方式を使うことをおすすめします。

以下のコマンドで`--preferred-challenges`パラメータを使い、DNS-01方式を指定します。

```
# ルートドメインの場合
certbot certonly --preferred-challenges dns-01 -d [your_root_domain] -d www.[your_root_domain] --manual -m [your_root_domain] -m www.[your_root_domain]

# サブドメインの場合
certbot certonly --preferred-challenges dns-01 -d [your_domain] --manual -m [your_domain]

# 対話式セットアップ
certbot certonly --preferred-challenges dns-01
```

コマンド実行後、メールアドレスの入力や利用規約の同意などの対話式セットアップが求められます。

CertbotはTXTレコードの作成方法を指示します。通常、対象は`_acme-challenge.`をドメインの前に付けた名前（例：`_acme-challenge.zapdocs.example.com`）で、値はコンソールに表示されます。

レコードを作成したらEnterを押して続行します。正しく反映されていれば証明書が生成され、`/etc/letsencrypt/live/[your_domain]`に保存されます。

:::note
DNSレコードの反映には時間がかかることがあります。通常は数分以内ですが、まれにもっと長くかかる場合もありますので気長に待ちましょう。
:::

あとは必要な場所で証明書のローカルパスを指定して使うだけです。

## ウェブサーバープラグイン

Certbotには複数のウェブサーバープラグインがあり、証明書管理がさらに簡単になります。プラグインを使うには、`certbot`コマンドに対応するパラメータを追加するだけです。

どのプラグインも**HTTP-01**チャレンジを使い、基本的な動作は同じです。プラグインはまず、リクエストされたドメインが含まれる`server_name`パラメータを持つサーバーブロックを探します。見つかると、ACMEチャレンジを生成し、一時的に`location /.well-known/acme-challenge/...`の設定を追加します。

Let's Encryptのサーバーがこれを取得できれば証明書が生成され、選択したウェブサーバーの設定が自動でHTTPS（ポート443）対応に書き換えられ、新しい証明書のパスが追加されます。

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
Certbotによる自動のサーバーブロック調整を無効にしたい場合は、`certonly`パラメータを追加して`certbot certonly`のように実行してください。
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
Certbotによる自動のサーバーブロック調整を無効にしたい場合は、`certonly`パラメータを追加して`certbot certonly`のように実行してください。
:::

</TabItem>

<TabItem value="webroot" label="Webroot">

### Webrootプラグイン

独自のローカルウェブサーバーを使っていて、NginxやApacheのような一般的なソフトを使っていない場合は、ウェブサーバーを停止せずに証明書を取得できるWebroot方式がおすすめです。

Webrootプラグインを使うには、コマンドに`--webroot`パラメータと、ウェブサーバーのトップディレクトリを指定する`-w [your_webserver_path]`（`--webroot-path`の短縮）を追加します。

```
# ルートドメインの場合
certbot --webroot -w [your_webserver_path] -d [your_root_domain] -d www.[your_root_domain]

# サブドメインの場合
certbot --webroot -w [your_webserver_path] -d [your_domain]

# 対話式セットアップ
certbot --webroot -w [your_webserver_path]
```

:::tip
よく使われるウェブルートの場所は`/var/www/html`です。NginxやApacheでも、自動的なサーバーブロック調整を使いたくない場合にこの方法を使うことがあります。
:::

</TabItem>
</Tabs>

## 自動更新

ほとんどの場合、Certbotはcronジョブやsystemdタイマーを使って証明書の自動更新を設定してくれます。以下のコマンドで`--dry-run`パラメータを使い、更新処理のテストができます。

```
certbot renew --dry-run
```

:::tip
繰り返しになりますが、**DNS-01**方式はCertbotによる自動更新に対応していません。自分で管理インフラを用意しない限り、**HTTP-01**方式を使うことを強くおすすめします。
:::

問題なければ成功します。自動更新の設定を確認・変更したい場合は、`/etc/crontab/`、`/etc/cron.*/*`、または`systemctl list-timers`で確認できます。

### 手動でのcronジョブ設定

もし自動更新が設定されていない場合は、自分でcronジョブを追加できます。`crontab -e`でcrontab編集画面を開きます。初めての場合はエディタ選択が求められるので、最初の`/bin/nano`を選びましょう。

nanoでファイルが開いたら、以下の行を追加して毎日午前6時に更新を実行するようにします。

```
0 6 * * * certbot renew
```

保存してnanoを終了するには、`CTRL + X`、`Y`、`ENTER`の順に押してください。

## まとめ

これで、スタンドアロン、Webroot、プラグインなどさまざまな方法でCertbotをセットアップし、あなたのドメインにHTTPSによる安全なデータ通信を実現できました。質問やサポートが必要な場合は、いつでもお気軽にサポートチームにお問い合わせくださいね！🙂