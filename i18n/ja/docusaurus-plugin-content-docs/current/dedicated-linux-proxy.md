---
id: dedicated-linux-proxy
title: "専用サーバー：Linuxでnginxを使ったリバースプロキシの設定"
description: "ウェブサイトやゲームサーバーのアクセス性と保護を向上させる、安全で効率的なリバースプロキシの設定方法を解説 → 今すぐチェック"
sidebar_label: リバースプロキシ
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

リバースプロキシサーバーは、エンドユーザーと別のサーバーの間に立つ仲介役のサーバーです。ウェブサイトやゲームサーバーでの利用が多く、それぞれにセキュリティ向上、アクセスの簡便化、保護強化など様々なメリットがあります。

このガイドでは、ウェブサイト向けの一般的なリバースプロキシと、ゲームサーバー向けに特化したリバースプロキシの設定方法を紹介します。

<InlineVoucher />

## 準備

リバースプロキシを設定するには、**Linuxサーバー**が必要です。このサーバーがプロキシサーバーとして機能します。今回はUbuntuを例に使いますが、ほとんどのLinuxディストリビューションでインストール手順はほぼ同じです。

:::tip 推奨VPSスペック
ゲームサーバー向けのリバースプロキシには、特にプレイヤー数が多い場合は高速なネットワーク回線を強くおすすめします。これは、VPSがクライアント（プレイヤー）とゲームサーバー間で生のTCP/UDPを直接ストリーミングするためです。ウェブ関連のプロキシなら、基本スペックのサーバーで十分な場合が多いですよ。:)
:::

プロキシには、所有している**ドメイン**を使うのがおすすめです。使いたいサブドメインごとに、`A` DNSレコード（例：`zapdocs.example.com`）を作成し、__Linux VPS__のIPアドレスを指すように設定してください。これがユーザーがウェブサイトやゲームサーバーにアクセスするためのアドレスになります。

### VPSへのアクセス

Linux VPSが準備できたら、接続します。接続方法は[SSH初期アクセス](vserver-linux-ssh.md)ガイドを参考にしてください。

### Nginxのインストール

リバースプロキシサーバーには、高性能で人気のあるオープンソースのウェブサーバー、Nginxを使います。

VPSにアクセスしたら、以下のコマンドでNginxをインストールしましょう。

```
sudo apt install nginx
```

インストール後は、ファイアウォールの設定を調整してインターネットからアクセスできるようにします。このガイドでは、Nginxがアプリとして登録されている**UFWファイアウォール**を使います。設定方法は[Linuxセキュリティのヒント](vserver-linux-security-tips.md)ガイドで詳しく解説しています。

:::note
Iptablesなど他のファイアウォールを使っている場合は、Nginxが使うポート80と443へのアクセスを許可してください。
:::

`sudo ufw app list`でNginxのプロファイルを確認できます。ここではHTTPテスト用と本番用HTTPSアクセスを許可する**Nginx Full**を選びます。

```
sudo ufw allow 'Nginx Full'
```

Nginxがセットアップできたら、ブラウザで以下のURLにアクセスして動作確認しましょう。

```
http://[your_serverip]
```

![](https://screensaver01.zap-hosting.com/index.php/s/JaBgE4Cn73L5Xe8/preview)

## ウェブサイト向け

ウェブサイト向けリバースプロキシは、内部サーバーリソース（例：vaultwardenインスタンス）へのリダイレクトや、URLにポート番号を含めずにアクセスできるようにしたり、外部コンテンツへの中継、負荷分散や保護に役立ちます。

最大のメリットは、単一のウェブサーバーがポート80/443で動作するのとは違い、複数のソースやドメインからのリクエストを処理できることです。

### Nginxの設定

まず、先ほど選んだドメイン用にNginxの設定ファイルを作成します。通常はサブドメイン（例：`zapdocs.example.com`）を使います。

:::important
設定を始める前に、必ずプロキシサーバーのIPアドレスを指す`A`レコードを作成してください。これがないとドメインや後続の設定が正しく動作しません。
:::

サーバーブロックのフォルダに移動します。ここにプロキシ設定を保存します。

```
cd /etc/nginx/sites-available/
```

次に、新しい設定ファイルを作成します。ファイル名はドメイン名にすると管理しやすいです（例：zapdocs.example.com）。`[your_filename]`は好きな名前に置き換えてください。

```
sudo nano [your_filename]
```

nanoエディタが開くので、以下のテンプレートをコピーして貼り付けます。`[your_domain]`はプロキシに使うドメインに、`[your_target_server]`はアクセス先のサーバーに置き換えてください。

```
upstream targetServer {
    # 目標とするサーバーを指定します。以下のいずれかです：
    # 内部のlocalhostリダイレクト（例：127.0.0.1:9090）
    # 外部サーバー（例：103.146.43.52:9000）
    server [your_target_server];
}

server {
    listen 80;
    listen [::]:80;

    # 対応するドメイン名（例：zapdocs.example.com）
    server_name [your_domain];

    location / {
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $remote_addr;
        proxy_pass_request_headers on;
        proxy_http_version 1.1;
        proxy_pass http://targetServer;
    }
}
```

内容を編集したら、`CTRL + X`で保存終了、`Y`で確定、`ENTER`で完了します。

次に、設定ファイルを有効化するためにシンボリックリンクを作成します。

```
sudo ln -s /etc/nginx/sites-available/[your_filename] /etc/nginx/sites-enabled/[your_filename]
```

設定に問題がないか、構文チェックを行います。

```
sudo nginx -t
```

問題なければ、Nginxを再起動して設定を反映させます。

```
systemctl reload nginx.service
```

サービス再起動後、ブラウザで設定したドメインにアクセスしてみてください。`targetServer`で指定したコンテンツが表示されれば成功です。問題があれば、`journalctl -f -u nginx.service`でログを確認してトラブルシューティングしましょう。

## ゲームサーバー向け

ゲームサーバー向けリバースプロキシは、メインホストへのアクセス制限やDDoS対策など、セキュリティと信頼性を高めるのに役立ちます。

:::tip
ほとんどの専用ゲームサーバーは、今回設定する生のTCP/UDPエンドポイントプロキシで問題なく動作します。ただしBeamMPのようにVPNやプロキシと相性が悪いゲームもあるので、ゲームごとに動作確認が必要です。
:::

### Nginxの設定

ゲームサーバー用には、標準のNginxには含まれていない**Nginx Streamモジュール**が必要です。

#### Nginx Streamモジュールのインストール

<Tabs>

<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>
```bash
sudo apt install -y libnginx-mod-stream
```
</TabItem>

<TabItem value="centos-fedora" label="CentOS & Fedora">
```bash
sudo dnf -y install nginx-mod-stream 
```
</TabItem>

</Tabs>

#### Nginx Streamの設定

`nginx.conf`のメイン設定ファイルに新しい`stream`ブロックを追加し、アップストリームサーバーとプロキシで待ち受けるポートを指定します。

以下のコマンドでファイルを開きます。

```
sudo nano /etc/nginx/nginx.conf
```

ファイル内に以下のテンプレートをコピーして貼り付けます。`[your_target_server]`はストリーム先のゲームサーバーIPとポート（例：`103.146.43.52:30120`）、`[your_port_listener]`はプロキシで待ち受けるポート番号に置き換えてください。

```
stream {
    upstream targetServer {
        # 目標とするサーバーを指定（例：103.146.43.52:30120）
        server [your_target_server];
    }

    server {
        # 接続を受け付けて中継するポート（例：30120）
        listen [your_port_listener];
        proxy_pass targetServer;
    }
}
```

Nginxは指定したポートで接続を待ち受け、すべての通信をターゲットサーバーに中継します。

編集が終わったら、`CTRL + X`、`Y`、`ENTER`で保存して終了します。

構文チェックをして問題がなければ、Nginxを再起動して設定を反映させます。

```
sudo nginx -t
systemctl reload nginx.service
```

サービス再起動後、プロキシドメイン経由でゲームサーバーに接続してみてください。`targetServer`で指定したゲームサーバーに接続できれば成功です。問題があれば、`journalctl -f -u nginx.service`でログを確認しましょう。

## SSL証明書

リバースプロキシの設定が完了したら、使用するドメインにSSL証明書を導入してHTTPSで安全に通信することを強くおすすめします。証明書の取得と自動更新の方法は、[Certbotのインストール](dedicated-linux-certbot.md)ガイドで詳しく解説しています。

## まとめ

おめでとうございます！ウェブサイトやゲームサーバー（または両方）向けのリバースプロキシを無事に設定できました。これによりセキュリティ、信頼性、パフォーマンスが大幅に向上します。もし質問やサポートが必要な場合は、いつでもサポートチームにお問い合わせください。毎日対応していますよ！🙂

<InlineVoucher />