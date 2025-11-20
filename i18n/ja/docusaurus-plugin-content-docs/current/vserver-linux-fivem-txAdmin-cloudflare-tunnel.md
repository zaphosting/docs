---
id: vserver-linux-fivem-txAdmin-cloudflare-tunnel
title: "VPS: txAdmin用Cloudflareトンネルの設定"
description: "txAdminのセキュリティを強化するCloudflareトンネルの設定方法 → 今すぐチェック"
sidebar_label: txAdmin用Cloudflareトンネル
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## はじめに

ZAP-HostingのDDoS保護に加えてさらにセキュリティを強化したいなら、Cloudflareトンネルを使ってtxAdminインスタンスを守るのがおすすめ。この設定をすると、txAdminのウェブインターフェースはサーバーのパブリックIP経由ではなく、自分のドメインを通じて安全にアクセスできるようになるよ。txAdminのポートを狙った攻撃はCloudflareがフィルタリングし、ローカルポートは完全にロックダウンしてもアクセスは失わない仕組み。

<InlineVoucher />

## 前提条件

LinuxでCloudflareトンネルを使うには、Linux VPS、動作中のtxAdminインストール、txAdminのポート、そしてCloudflareアカウントに接続済みのドメインが必要。まだドメインをCloudflareに接続していない場合は、まず[Cloudflareセットアップ](domain-cloudflare-setup.md)ガイドをチェックしてね。

Cloudflareトンネルは、サーバーからCloudflareへの暗号化されたアウトゴーイング接続を作る仕組みだから、txAdmin用に公開ポートを開けっぱなしにする必要がないよ。


## Cloudflareの設定

Linux vServerにcloudflaredをインストールする前に、Cloudflareのダッシュボードでトンネルを作成・設定しよう。

CloudflareアカウントにログインしてZero Trustセクションに進むと、新しいトンネルを作成できる。ここで作ったトンネルが後でtxAdminインターフェースへのトラフィックを転送するよ。

![img](https://screensaver01.zap-hosting.com/index.php/s/KeEEZaecdbNjzPG/download)




## Cloudflareトンネルのインストール

Cloudflareが提供する小さなツール「cloudflared」を使うよ。Linuxへのcloudflaredインストールは超簡単。まずLinux用インストーラーをダウンロードして実行しよう。

![img](https://screensaver01.zap-hosting.com/index.php/s/93TFH8xfxEEDobd/preview)

```
# CloudflareのGPGキーを追加
sudo mkdir -p --mode=0755 /usr/share/keyrings
curl -fsSL https://pkg.cloudflare.com/cloudflare-public-v2.gpg | sudo tee /usr/share/keyrings/cloudflare-public-v2.gpg >/dev/null

# aptリポジトリにCloudflareを追加
echo 'deb [signed-by=/usr/share/keyrings/cloudflare-public-v2.gpg] https://pkg.cloudflare.com/cloudflared any main' | sudo tee /etc/apt/sources.list.d/cloudflared.list

# cloudflaredをインストール
sudo apt-get update && sudo apt-get install cloudflared
```

インストールが終わったら、指定されたコマンドを実行しよう：

```
cloudflared.exe service install eyJhIjoiMj...
```

コマンド実行後、サーバーはトンネル経由でCloudflareに接続する。セットアップが成功すると、Connectorsセクションのステータスが**Connected**に変わり、トンネルがアクティブで正常に動作していることが確認できるよ。

![img](https://screensaver01.zap-hosting.com/index.php/s/YWdHzTgx8B2dQJm/preview)



## Cloudflareトンネルの設定

次にRoute Trafficの設定を行う。好きなサブドメインを新規作成しよう。ここでは例として`txAdmin`というサブドメインを使い、後でtxAdminインターフェースにアクセスするのに使うよ。

使いたいドメインを選択し、サービスの種類は**HTTP**に設定。URLには**localhost:ポート番号**を入力。ポート番号はtxAdminで設定したものに置き換えてね。ここでは例としてポート40500を使うよ。

![img](https://screensaver01.zap-hosting.com/index.php/s/JEJGLrd8rrPZpq2/download)

:::warning セキュリティ推奨
デフォルトのtxAdminポート**40120**を使うより、セキュリティ向上のために別のポートを使うのがおすすめ。
:::



## Linuxファイアウォールの設定

トンネルの外からポートにアクセスされないように、Linuxのファイアウォール（iptables）で該当ポートへの接続をlocalhostからのものだけに制限しよう。リモートアドレスを127.0.0.1に限定することで、すべてのトラフィックがローカルシステム発信となり、外部からのアクセスをブロック。cloudflaredの背後にあるサービスがトンネル外からアクセスできなくなるよ。

```
sudo iptables -A INPUT -p tcp --dport 40500 ! -s 127.0.0.1 -j DROP
```

この設定で、マシン外からのアクセス試行はすべてブロックされ、cloudflaredの背後のサービスはトンネル外からはアクセス不可になるよ。



## まとめ

Cloudflareトンネルがアクティブになると、txAdminインターフェースは自分のドメイン経由でのみアクセス可能になり、すべてのリクエストはCloudflareを通過してフィルタリング・保護される。

![img](https://screensaver01.zap-hosting.com/index.php/s/qFwKn6gfeyDzPKX/preview)

サーバーのIP経由でのtxAdminポートへの直接アクセスはブロックされ、元の攻撃対象が完全に消える。これでtxAdminは安定して安全に使え、誰かがインターフェースを過負荷や攻撃しようとしても安心だよ。

質問やサポートが必要な場合は、毎日対応しているサポートチームまで気軽に連絡してね！🙂

<InlineVoucher />