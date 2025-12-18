---
id: dedicated-windows-fivem-txAdmin-cloudflare-tunnel
title: "専用サーバー：txAdmin用Cloudflareトンネルの設定"
description: "txAdminのセキュリティを強化するCloudflareトンネルの設定方法 → 今すぐチェック"
sidebar_label: txAdmin用Cloudflareトンネル
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## はじめに

ZAP-HostingのDDoS保護に加えてさらにセキュリティを強化したいなら、Cloudflareトンネルを使ってtxAdminインスタンスを守る方法があります。この設定をすると、txAdminのウェブインターフェースはサーバーのパブリックIP経由で公開されることなく、自分のドメイン経由で安全にアクセスできるようになります。txAdminのポートを狙った攻撃はCloudflareがフィルタリングし、ローカルポートは完全に閉じてもアクセスを失うことはありません。



## 前提条件

WindowsでCloudflareトンネルを使うには、Windows専用サーバー、動作中のtxAdminインストール、txAdminのポート、そしてCloudflareアカウントに接続済みのドメインが必要です。まだドメインをCloudflareに接続していない場合は、まず[Cloudflareセットアップ](domain-cloudflare-setup.md)ガイドを参考にしてください。

Cloudflareトンネルは、サーバーからCloudflareへの暗号化されたアウトゴーイング接続を作成する仕組みなので、txAdmin用に公開ポートを開けっぱなしにする必要がありません。


## Cloudflareの設定

WindowsのVPSにcloudflaredをインストールする前に、まずCloudflareのダッシュボード内でトンネルを作成・設定します。

Cloudflareアカウントにログインし、Zero Trustセクションに移動します。ここで新しいトンネルを作成し、後でtxAdminインターフェースへのトラフィックを転送する設定を行います。

![img](https://screensaver01.zap-hosting.com/index.php/s/KeEEZaecdbNjzPG/download)




## Cloudflareトンネルのインストール

Cloudflareが提供する小さなツール「cloudflared」のWindowsへのインストールはとても簡単です。まず、[Windowsインストーラー](https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-windows-amd64.msi)をダウンロードしてください。

![img](https://screensaver01.zap-hosting.com/index.php/s/JFsdnjkcR6LrJAr/preview)

ファイルをダウンロードしたら、インストーラーを実行してセットアップを完了させます。インストールが終わったら、管理者権限でコマンドプロンプトを開き、以下のコマンドを実行します：

```
cloudflared.exe service install eyJhIjoiMj...
```

コマンド実行後、サーバーはトンネルを通じてCloudflareに接続します。セットアップが成功すると、Connectorsセクションのステータスが**Connected**に変わり、トンネルが正常に動作していることが確認できます。

![img](https://screensaver01.zap-hosting.com/index.php/s/YWdHzTgx8B2dQJm/preview)



## Cloudflareトンネルの設定

次に、トラフィックルートの設定を行います。好きなサブドメインを新規作成してください。ここでは例として、txAdminインターフェースにアクセスするためのサブドメイン`txAdmin`を使います。

使用したいドメインを選択し、サービスの種類を**HTTP**に設定、URLには**localhost:ポート番号**を入力します。ポート番号はtxAdminで設定しているポートに置き換えてください。ここでは例としてポート40500を使います。

![img](https://screensaver01.zap-hosting.com/index.php/s/JEJGLrd8rrPZpq2/download)

:::warning セキュリティ推奨
デフォルトのtxAdminポート**40120**を使う代わりに、セキュリティ向上のため別のポートを使うことをおすすめします。
:::



## Windowsファイアウォールの設定

トンネルの外からポートにアクセスされないように、Windowsファイアウォールで該当ポートへの接続をlocalhostからのみに制限します。リモートアドレスを127.0.0.1に限定してください。これにより、すべてのトラフィックはローカルシステムから発生する必要があり、外部からのアクセスはブロックされます。cloudflaredの背後にあるサービスがトンネル外からアクセスされることを防ぎます。

```
netsh advfirewall firewall add rule name="Cloudflared Local Only" dir=in action=allow protocol=TCP localport=40500 remoteip=127.0.0.1
```

この設定で、マシン外からのアクセスはすべてブロックされ、cloudflaredの背後にあるサービスはトンネル外からアクセスできなくなります。



## まとめ

Cloudflareトンネルがアクティブになると、txAdminインターフェースは自分のドメイン経由でのみアクセス可能になり、すべてのリクエストはCloudflareを通過してフィルタリング・保護されます。

![img](https://screensaver01.zap-hosting.com/index.php/s/qFwKn6gfeyDzPKX/preview)

サーバーのIP経由でのtxAdminポートへの直接アクセスはブロックされ、攻撃対象が完全に排除されます。これにより、txAdminは安定して安全に、インターフェースへの過負荷や攻撃があっても信頼して使い続けられます。

質問やサポートが必要な場合は、いつでもお気軽にサポートチームにご連絡ください。毎日対応していますよ！🙂

<InlineVoucher />