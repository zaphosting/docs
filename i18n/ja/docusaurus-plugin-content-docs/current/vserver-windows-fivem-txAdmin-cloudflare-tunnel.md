---
id: vserver-windows-fivem-txAdmin-cloudflare-tunnel
title: "VPS: txAdmin用Cloudflareトンネルの設定"
description: "txAdminのセキュリティを強化するCloudflareトンネルの設定方法 → 今すぐチェック"
sidebar_label: txAdmin用Cloudflareトンネル
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## はじめに

ZAP-HostingのDDoS保護に加えてさらにセキュリティを強化したいなら、Cloudflareトンネルを使ってtxAdminインスタンスを守るのがおすすめ。この設定をすると、txAdminのウェブインターフェースはサーバーのパブリックIPを通さず、自分のドメイン経由で安全にアクセスできるようになるよ。txAdminのポートを狙った攻撃はCloudflareがフィルタリングしてくれて、ローカルポートは完全にロックダウンできるけどアクセスは失わないってわけ。



## 前提条件

WindowsでCloudflareトンネルを使うには、Windows VPS、動作中のtxAdminインストール、txAdminのポート、そしてCloudflareアカウントに接続済みのドメインが必要。もしドメインがまだCloudflareに接続されていなければ、まずは[Cloudflareセットアップ](domain-cloudflare-setup.md)ガイドをチェックしてね。

Cloudflareトンネルは、サーバーからCloudflareへの暗号化されたアウトゴーイング接続を作る仕組みだから、txAdminのためにパブリックポートを開けっぱなしにする必要がないよ。


## Cloudflareの設定

WindowsのvServerにcloudflaredをインストールする前に、Cloudflareのダッシュボード内でトンネルを作成・設定するよ。

CloudflareアカウントにログインしてZero Trustセクションに進もう。そこで新しいトンネルを作成して、後でtxAdminインターフェースへのトラフィックを転送する設定をするんだ。

![img](https://screensaver01.zap-hosting.com/index.php/s/KeEEZaecdbNjzPG/download)




## Cloudflareトンネルのインストール

Cloudflareが提供する小さなツール「cloudflared」を使うよ。Windowsへのcloudflaredのインストールは超簡単。まずは[Windowsインストーラー](https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-windows-amd64.msi)をダウンロード。

![img](https://screensaver01.zap-hosting.com/index.php/s/JFsdnjkcR6LrJAr/preview)

ファイルをダウンロードしたらインストーラーを実行してセットアップを完了させてね。インストールが終わったら、管理者権限でコマンドプロンプトを開いて、以下のコマンドを実行しよう：

```
cloudflared.exe service install eyJhIjoiMj...
```

コマンドを実行すると、サーバーがトンネル経由でCloudflareに接続するよ。セットアップが成功すると、Connectorsセクションのステータスが**Connected**に変わって、トンネルがアクティブで動作していることが確認できる。

![img](https://screensaver01.zap-hosting.com/index.php/s/YWdHzTgx8B2dQJm/preview)



## Cloudflareトンネルの設定

次に、Route Trafficの設定を行うよ。好きなサブドメインを新規作成しよう。ここでは例としてサブドメイン`txAdmin`を使うよ。これが後でtxAdminインターフェースにアクセスするためのURLになる。

使いたいドメインを選択して、サービスの種類は**HTTP**に設定。URLには**localhost:ポート番号**を入力しよう。ポート番号はtxAdminで設定しているポートに置き換えてね。ここでは例として40500ポートを使うよ。

![img](https://screensaver01.zap-hosting.com/index.php/s/JEJGLrd8rrPZpq2/download)

:::warning セキュリティ推奨
デフォルトのtxAdminポート**40120**を使うよりも、別のポートを使うほうがセキュリティ的におすすめだよ。
:::



## Windowsファイアウォールの設定

トンネルの外からポートにアクセスされないように、Windowsファイアウォールで該当ポートへの接続をlocalhostからのみに制限しよう。リモートアドレスを127.0.0.1に限定するルールを追加するんだ。これで全てのトラフィックがローカルシステムから発生していることを強制し、外部からのアクセスをブロック。cloudflaredの背後にあるサービスがトンネル外からアクセスされるのを防げるよ。

```
netsh advfirewall firewall add rule name="Cloudflared Local Only" dir=in action=allow protocol=TCP localport=40500 remoteip=127.0.0.1
```

この設定で、マシン外からのアクセスは全てブロックされ、cloudflaredの背後のサービスはトンネル外からアクセスできなくなるよ。



## まとめ

Cloudflareトンネルがアクティブになると、txAdminインターフェースは自分のドメイン経由でのみアクセス可能になり、全リクエストはCloudflareを通ってフィルタリング＆セキュリティが強化される。

![img](https://screensaver01.zap-hosting.com/index.php/s/qFwKn6gfeyDzPKX/preview)

サーバーのIPから直接txAdminポートにアクセスできなくなるので、元々の攻撃対象が完全に消えるよ。これでtxAdminは安定して安全に使えて、誰かがインターフェースを攻撃や過負荷にしようとしても問題なし。

質問やサポートが必要な場合は、いつでも気軽にサポートチームに連絡してね！毎日対応してるよ 🙂 

<InlineVoucher />