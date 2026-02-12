---
id: vserver-linux-proxy
title: "VPS: Linuxでnginxを使ったリバースプロキシの設定"
description: "ウェブサイトやゲームサーバーのアクセス性と保護を強化する、安全で効率的なリバースプロキシの設定方法を解説 → 今すぐチェック"
sidebar_label: リバースプロキシ
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

リバースプロキシサーバーは、エンドユーザーと別のサーバーの間に立つ仲介役のサーバーです。ウェブサイトやゲームサーバーでの導入が多く、それぞれにセキュリティ向上、アクセスの簡便化、保護など様々なメリットがあります。

このガイドでは、ウェブサイト向けの汎用リバースプロキシと、ゲームサーバー向けに特化したリバースプロキシの設定方法を解説します。

<InlineVoucher />

## 準備

リバースプロキシを設定するには、**Linuxサーバー**が必要です。このサーバーがプロキシサーバーとして動作します。今回はUbuntuを例に使いますが、ほとんどのLinuxディストリビューションでほぼ同様の手順です。

:::tip 推奨VPSスペック
ゲームサーバー向けのリバースプロキシには、特にプレイヤー数が多い場合は高速なネットワーク回線を強くおすすめします。これはVPSがクライアント（プレイヤー）とゲームサーバー間で生のTCP/UDPを直接ストリーミングするためです。ウェブ関連のプロキシなら、基本スペックのサーバーでも十分です。:)
:::

プロキシは、**ご自身が所有するドメイン**で設定するのがおすすめです。使用予定のサブドメインごとに、`A` DNSレコード（例：`zapdocs.example.com`）を作成し、__Linux VPS__のIPアドレスを指すようにしてください。これがユーザーがウェブサイトやゲームサーバーにアクセスするためのアドレスになります。

### VPSへのアクセス

Linux VPSが準備できたら、接続する必要があります。接続方法は当社の[SSH初期アクセス](vserver-linux-ssh.md)ガイドを参考にしてください。

### Nginxのインストール

リバースプロキシサーバーには、高性能で人気のあるオープンソースのウェブサーバー「Nginx」を使います。

VPSにアクセスしたら、以下のコマンドでNginxをインストールしましょう。

```
sudo apt install nginx
```

インストール後は、ファイアウォールの設定を調整してインターネットからアクセスできるようにします。このガイドでは、Nginxがアプリとして登録されている**UFWファイアウォール**を使います。UFWの詳細は当社の[Linuxセキュリティのヒント](vserver-linux-security-tips.md)ガイドをご覧ください。

:::note
Iptablesなど他のファイアウォールを使っている場合は、Nginxが使うポート80と443へのアクセスを許可してください。
:::

`sudo ufw app list`でNginxのプロファイルを確認できます。ここではHTTPテスト用と本番用HTTPSを含む**Nginx Full**を選択します。

```
sudo ufw allow 'Nginx Full'
```

Nginxがセットアップできたら、ブラウザで以下のURLにアクセスして動作確認をしましょう。

```
http://[your_serverip]
```

![](https://screensaver01.zap-hosting.com/index.php/s/JaBgE4Cn73L5Xe8/preview)

## ウェブサイト向け

ウェブサイト向けのリバースプロキシは、内部サーバーリソース（例：vaultwardenインスタンス）へのリダイレクトや、外部コンテンツへの中継に便利です。これによりURLにポート番号を含める必要がなくなったり、負荷分散や保護にも役立ちます。

最大のメリットは、単一のウェブサーバーがポート80/443で動作するのとは違い、複数のソースやドメインからのリクエストを処理できることです。

### Nginxの設定

まず、先ほど選んだドメイン用にNginxの設定ファイルを作成します。通常はサブドメイン（例：`zapdocs.example.com`）を使います。

:::important
設定を進める前に、必ずプロキシサーバーのIPアドレスを指す`A`レコードを作成してください。これがないとドメインや以降の設定が正しく動作しません。
:::

サーバーブロックのフォルダに移動します。ここにプロキシ設定を保存します。

```
cd /etc/nginx/sites-available/
```

次に新しい設定ファイルを作成します。ファイル名はドメイン名にすると管理しやすいです（例：zapdocs.example.com）。`[your_filename]`は好きな名前に置き換えてください。

```
sudo nano [your_filename]
```

nanoエディタが開くので、以下のテンプレートをコピーして貼り付けます。`[your_domain]`はプロキシしたいドメインに、`[your_target_server]`はアクセス先のサーバーに置き換えてください。

```
upstream targetServer {
    # ここにアクセス先サーバーを指定します。例：
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

編集が終わったら、`CTRL + X`で終了、`Y`で保存、`ENTER`で確定します。

次に、この設定ファイルを有効化するためにシンボリックリンクを作成します。

```
sudo ln -s /etc/nginx/sites-available/[your_filename] /etc/nginx/sites-enabled/[your_filename]
```

設定の文法チェックを行いましょう。

```
sudo nginx -t
```

問題なければ、Nginxを再起動して設定を反映させます。

```
systemctl reload nginx.service
```

再起動後、ブラウザで設定したドメインにアクセスしてみてください。`targetServer`で指定したコンテンツが表示されれば成功です。問題があれば、`journalctl -f -u nginx.service`でログを確認して原因を探りましょう。

## ゲームサーバー向け

ゲームサーバー向けのリバースプロキシは、セキュリティや信頼性を高めるために役立ちます。アクセス制限やDDoS対策の強化にもつながります。

:::tip
ほとんどの専用ゲームサーバーは、今回設定する生のTCP/UDPエンドポイントプロキシで問題なく動作します。ただしBeamMPのようにVPNやプロキシと相性が悪いゲームもあるので、ゲームごとに動作確認が必要です。
:::

### Nginxの設定

ゲームサーバー向けには、標準のNginxには含まれていない**Nginx Streamモジュール**が必要です。

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

`nginx.conf`ファイルに新しく`stream`ブロックを追加し、アップストリームサーバーとプロキシが待ち受けるポートを指定します。

以下のコマンドでファイルを開きます。

```
sudo nano /etc/nginx/nginx.conf
```

ファイル内に以下のテンプレートを追加してください。`[your_target_server]`は接続先ゲームサーバーのIPとポート（例：`103.146.43.52:30120`）、`[your_port_listener]`はプロキシが待ち受けるポート番号に置き換えます。

```
stream {
    upstream targetServer {
        # 接続先サーバーを指定（例：103.146.43.52:30120）
        server [your_target_server];
    }

    server {
        # 接続を受け付けるポート（例：30120）
        listen [your_port_listener];
        proxy_pass targetServer;
    }
}
```

この設定により、Nginxは指定ポートで接続を受け付け、ターゲットサーバーへストリーム転送します。

編集後は`CTRL + X`で終了、`Y`で保存、`ENTER`で確定します。

文法チェックを行いましょう。

```
sudo nginx -t
```

問題なければNginxを再起動して設定を反映します。

```
systemctl reload nginx.service
```

再起動後、プロキシドメイン経由でゲームサーバーに接続を試みてください。`targetServer`で指定したゲームサーバーに接続できれば成功です。問題があれば、`journalctl -f -u nginx.service`でログを確認してください。

## SSL証明書

リバースプロキシの設定が完了したら、使用するドメインにSSL証明書を導入してHTTPSで安全に通信することを強くおすすめします。当社の[Certbotのインストール](dedicated-linux-certbot.md)ガイドでは、証明書の取得から自動更新までの手順を詳しく解説しています。

## まとめ

おめでとうございます！ウェブサイトやゲームサーバー（または両方）のリバースプロキシ設定が無事完了しました。これによりセキュリティ、信頼性、パフォーマンスが向上します。もし質問やサポートが必要な場合は、いつでも当社のサポートチームにお気軽にお問い合わせくださいね！🙂

<InlineVoucher />