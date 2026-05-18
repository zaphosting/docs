---
id: fivem-proxy
title: "FiveM：リバースプロキシの設定"
description: "FiveMサーバーのセキュリティと信頼性をリバースプロキシ設定で強化し、DDoS保護とパフォーマンスを向上させる方法をチェック → 今すぐ詳しく見る"
sidebar_label: リバースプロキシ
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

リバースプロキシサーバーは、エンドユーザー（あなたのプレイヤー）とFiveMゲームサーバーの間に立つ仲介サーバーです。頻繁にDDoS攻撃を受けるサーバーにとって非常に有効で、メインホストの可視性を減らし、追加の緩和策を提供することでセキュリティと信頼性の層を増やします。

このガイドでは、FiveMゲームサーバー用のリバースプロキシ設定の手順を解説します。このシナリオでは、connectエンドポイント用の「コネクトプロキシ」と、生のTCP/UDPプロキシングが行われるサーバーエンドポイント用の「サーバープロキシ」の2種類のリバースプロキシがあります。どちらも独立して設定可能です。

<InlineVoucher />

## 準備

リバースプロキシを設定するには、プロキシサーバーをホストする**Linuxサーバー**（VPSなど）が必要です。ここではUbuntuを例に使いますが、ほとんどのLinuxディストリビューションでインストール手順はほぼ同じです。

:::tip 推奨VPSスペック
特にサーバープロキシを設定する場合は、プレイヤー数が多いなら高速なネットワーク回線のVPSを強くおすすめします。これはVPSがクライアント（プレイヤー）とFiveMゲームサーバー間で生のTCP/UDPを直接ストリーミングするためです。そうでなければ、基本スペックのサーバーでも十分です。:)
:::

また、プロキシには**所有しているドメイン**を使うことをおすすめします。使用したいドメイン（例：`zapdocs.example.com`）に`A`レコードを作成し、__Linux VPS__のIPアドレスを指すように設定してください。プレイヤーはこのドメインを使って接続しますが、技術的にはプロキシサーバーのIPアドレスを直接使うことも可能です。

### VPSへのアクセス

Linux VPSが準備できたら接続します。接続方法は[SSH初期アクセス](vserver-linux-ssh.md)ガイドを参考にしてください。

### Nginxのインストール

リバースプロキシサーバーには、高性能で人気のあるオープンソースのWebサーバー「Nginx」を使います。

VPSにアクセスしたら、以下のコマンドでNginxをインストールしましょう。

```
sudo apt install nginx
```

インストール後は、ファイアウォールを調整してインターネットからアクセスできるようにします。このガイドでは、Nginxがアプリとして登録されている**UFWファイアウォール**を使います。設定方法は[Linuxセキュリティのヒント](vserver-linux-security-tips.md)ガイドで詳しく解説しています。

:::note
Iptablesなど他のファイアウォールを使っている場合は、Nginxのサービスが動作するポート80と443へのアクセスを許可してください。
:::

`sudo ufw app list`でNginxのプロファイルを確認できます。この場合はHTTPテスト用と本番用HTTPSアクセスを含む**Nginx Full**を選択します。

```
sudo ufw allow 'Nginx Full'
```

Nginxがセットアップできたら、ブラウザで以下のURLにアクセスして動作確認をしましょう。

```
http://[your_serverip]
```

![](https://screensaver01.zap-hosting.com/index.php/s/JaBgE4Cn73L5Xe8/preview)

## コネクトプロキシ

コネクトプロキシはFiveMゲームサーバーのconnectエンドポイントをプロキシします。つまり、プロキシサーバーがconnectエンドポイントへのリクエストを受け取り、メインのFiveMゲームサーバーに転送します。これにより、サーバーリストから本当のFiveMホストのIPアドレスを隠せるため、可視性を減らせます。

### Nginxの設定

まず、ドメイン設定時に選んだホスト用にNginxのディレクトリにエントリを作成します。ここでは例として`zapdocs.example.com`を使います。

以下のコマンドでサーバーブロックを作成し、`[your_domain]`を自分のドメインに置き換えてください。

```
sudo nano /etc/nginx/sites-available/[your-domain]
```

次に、以下のテンプレートをコピーしてエディタに貼り付け、自分の環境に合わせて値を調整します。

```
upstream backend {
    # FiveMゲームサーバーのIPアドレス
    server [your_fivem_serverip]:30120;
}

proxy_cache_path /srv/cache levels=1:2 keys_zone=assets:48m max_size=20g inactive=2h;

server {
    listen 80;
    listen [::]:80;

    server_name [your_domain]; # 例: zapdocs.example.com

    location / {
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $remote_addr;
        # 認証ヘッダーを正しく渡すために必要
        proxy_pass_request_headers on;
        # 接続を即座に閉じないようにするために必要
        proxy_http_version 1.1;
        proxy_pass http://backend;
    }

    # キャッシュ用の追加ブロック
    location /files/ {
        proxy_pass http://backend$request_uri;
        add_header X-Cache-Status $upstream_cache_status;
        proxy_cache_lock on;
        proxy_cache assets;
        proxy_cache_valid 1y;
        proxy_cache_key $request_uri$is_args$args;
        proxy_cache_revalidate on;
        proxy_cache_min_uses 1;
    }
}
```

編集が終わったら、`CTRL + X`でnanoを終了し、`Y`で保存、`ENTER`で確定します。

次に、サーバーブロックを有効化するためにシンボリックリンクを作成します。

```
sudo ln -s /etc/nginx/sites-available/[your_filename] /etc/nginx/sites-enabled/[your_filename]
```

設定に問題がないか、特に構文エラーがないかを以下のコマンドでチェックします。

```
sudo nginx -t
```

問題なければ、Nginxを再起動して新しい設定を反映させます。

```
systemctl reload nginx.service
```

サービス再起動後、ブラウザで設定したドメインにアクセスしてみてください。成功すれば、`targetServer`パラメータで設定したコンテンツが表示されます。問題があれば、`journalctl -f -u nginx.service`でログを確認してトラブルシューティングしましょう。

### FiveMの設定

プロキシ設定後は、FiveMゲームサーバーの`server.cfg`ファイルにいくつか設定を追加します。

以下の内容を自分の環境に合わせて追加してください。

```
# サーバーリストに実際のIPを表示させないようにする
set sv_forceIndirectListing true

# サーバーリストのバックエンドがデフォルトではなくドメインを使うようにする（例: zapdocs.example.com）
set sv_listingHostOverride "[your_domain]"

# 'X-Real-IP'を許可し、レートリミッターをバイパスするIPv4ネットワークのCIDR表記リスト（スペース区切り）
set sv_proxyIPRanges "[your_proxy_serverip]/32"

# 実際にサーバーがホストされているエンドポイント、または1つ以上のサーバーエンドポイントプロキシ
set sv_endpoints "[your_fivem_serverip]:30120"
```

保存してサーバーを再起動してください。次回起動時から、ドメイン経由でFiveMゲームサーバーに接続できるようになります。

動作確認は以下のURLにアクセスしてみてください。正しく読み込めればコネクトプロキシは正常に動作しています。

```
https://[your_domain]/info.json
```

## サーバープロキシ

サーバープロキシはFiveMゲームサーバーのサーバーエンドポイントをプロキシし、生のTCP/UDPエンドポイントとストリームを直接プロキシします。

### Nginxの設定

これにはNginxの**stream**モジュールを使います。`nginx.conf`ファイルをnanoで開きます。

```
sudo nano /etc/nginx/nginx.conf
```

以下の内容をrootスコープにコピーし、自分の環境に合わせて値を置き換えてください。

```
stream {
    upstream backend {
        server [your_fivem_serverip]:30120;
    }
    
    server {
		listen 30120;
		proxy_pass backend;
	}

	server {
		listen 30120 udp reuseport;
		proxy_pass backend;
	}
}
```

編集が終わったら、`CTRL + X`でnanoを終了し、`Y`で保存、`ENTER`で確定します。

構文チェックを行い、問題なければNginxを再起動します。

```
sudo nginx -t
systemctl reload nginx.service
```

サービス再起動後、プロキシドメイン経由でゲームサーバーに接続を試みてください。成功すれば、`targetServer`パラメータで設定したサーバーに接続できます。問題があれば、`journalctl -f -u nginx.service`でログを確認してトラブルシューティングしましょう。

### FiveMの設定

プロキシ設定後は、FiveMゲームサーバーの`server.cfg`ファイルに以下の設定を追加します。

:::tip
すでにコネクトプロキシで`set sv_endpoints`を設定済みなら、このステップはスキップしてOKです。
:::

```
# 実際にサーバーがホストされているエンドポイント、または1つ以上のサーバーエンドポイントプロキシ
set sv_endpoints "[your_fivem_serverip]:30120"
```

保存してサーバーを再起動してください。次回起動時から、生のTCP/UDPエンドポイントがリバースプロキシ経由でストリーミングされます。

プレイヤーのIPアドレスを確認すると、すべてプロキシサーバーのIPアドレスとランダムに割り当てられたポートになっているはずです。

## SSL証明書

FiveMリバースプロキシの設定が完了したら、使用しているドメインにSSL証明書を追加して、HTTPS経由で安全にデータを送信することを強くおすすめします。

証明書の取得と自動更新の手順は、[Certbotのインストール](dedicated-linux-certbot.md)ガイドをチェックしてください。

## まとめ

おめでとうございます！FiveMゲームサーバー用のリバースプロキシ設定が無事完了し、セキュリティ、信頼性、パフォーマンスが大幅に向上しました。質問やサポートが必要な場合は、いつでもお気軽にサポートチームまでお問い合わせください。毎日対応していますよ！🙂

<InlineVoucher />