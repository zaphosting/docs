---
id: vserver-linux-ts6
title: "LinuxサーバーでTeamSpeak 6サーバーをセットアップ - 自分だけのボイスプラットフォームを構築しよう"
description: "信頼性の高いホスティングとパフォーマンスのためのTeamSpeak 6サーバーのセットアップと最適化方法を解説 → 今すぐチェック"
sidebar_label: TeamSpeak 6サーバーのインストール
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

2025年夏、TeamSpeakは**TeamSpeak 6サーバー**の**ベータ版**をリリースしました。次世代のTeamSpeakをいち早く体験できます！

自分でこのサービスをホスティングしてみたい？セットアップから設定まで、必要なポイントを全部わかりやすく解説します。

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)

<InlineVoucher />



## 前提条件

**TeamSpeak 6サーバー**をインストールする前に、スムーズな導入と最適なパフォーマンスを保証するために、ホスティング環境が以下の要件を満たしているか確認しましょう。

| ハードウェア   | 最低要件      | ZAP-Hosting推奨スペック |
| ---------- | ------------ | -------------------------- |
| CPU        | 1 vCPUコア | 4 vCPUコア               |
| RAM        | 1 GB         | 4 GB                       |
| ディスク容量 | 1 GB         | 25 GB                      |



## 準備

**TeamSpeak 6サーバー**のセットアップ前に、システムの準備が必要です。OSを最新バージョンにアップデートし、必要な依存関係をインストールしましょう。これにより安定した環境が整い、インストール中や後のトラブルを防げます。


### システムのアップデート
最新のソフトウェアとセキュリティ改善を適用するため、まずはシステムのアップデートを行いましょう。以下のコマンドを実行してください：

```
sudo apt update && sudo apt upgrade -y
```
これで最新のセキュリティパッチとソフトウェアバージョンが適用されます。

### 依存関係のインストール
アップデートが完了したら、依存関係のインストールに進みます。簡単かつ推奨される方法はDockerを使うことです。まずはDockerエンジンをインストールしましょう：

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```




## インストール
要件を満たし準備が整ったら、TeamSpeak 6サーバーのインストールに進みます。

次に、TeamSpeak 6サーバー用のDocker Composeファイル `docker-compose.yml` を作成します。任意のディレクトリで構いませんが、ここでは例として `/opt/containers/ts6/` に作成します。公式のTeamSpeak Composeファイルを使用します：

```
services:
  teamspeak:
    image: teamspeaksystems/teamspeak6-server:latest
    container_name: teamspeak-server
    restart: unless-stopped
    ports:
      - "9987:9987/udp"   # ボイスポート
      - "30033:30033/tcp" # ファイル転送
      # - "10080:10080/tcp" # Webクエリ
    environment:
      - TSSERVER_LICENSE_ACCEPTED=accept
    volumes:
      - teamspeak-data:/var/tsserver/

volumes:
  teamspeak-data:
```

ファイルを作成したいディレクトリに移動し、`nano docker-compose.yml` コマンドでファイルを開き、上記内容を貼り付けて保存してください。

![img](https://screensaver01.zap-hosting.com/index.php/s/yBZTKL8MYgLiJEt/download)


DockerコンテナとTeamSpeak 6サーバーを起動するには、以下のDocker Composeコマンドを実行します：
```
docker compose -f /opt/containers/ts6/docker-compose.yml up
```

これでTeamSpeak 6サーバーのDockerコンテナが起動します。デフォルトではまだ常駐起動しません。初回起動時に**Server Query管理者アカウント**と**特権キー**に関する重要な情報が表示されます。

![img](https://screensaver01.zap-hosting.com/index.php/s/7nNwWkEdG84yx4y/download)

この情報は次回以降の起動時には表示されないので、必ず安全な場所に保存してください。確認後は `CTRL+C` でコンテナを停止しましょう。



## 設定

Docker Composeファイル内の**環境変数**を使って、TeamSpeak 6サーバーの追加設定が可能です。これにより、自分のニーズに合わせてサーバーをカスタマイズできます。利用可能なオプションの全リストは公式の[TeamSpeak 6サーバー](https://github.com/teamspeak/teamspeak6-server/blob/main/CONFIG.md)ドキュメントで確認できます。

`docker-compose.yml` の例：

```
environment:
  - TS6_SERVER_NAME=MyTS6Server
  - TS6_QUERY_PORT=10022
```



## サーバー運用

TeamSpeak 6サーバーをバックグラウンドで常時稼働させるには、以下のコマンドでコンテナを起動します：

```
docker compose -f /opt/containers/ts6/docker-compose.yml up -d
```

サーバーを停止したい場合は、以下のコマンドでコンテナを停止してください：

```
docker compose -f /opt/containers/ts6/docker-compose.yml down
```



## 接続方法

TeamSpeak 6サーバーが起動したら、TeamSpeak 6クライアントを使って接続できます。サーバーのIPアドレスと正しいポート番号を入力して、クライアントから接続し、動作を確認しましょう。

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)



## まとめと参考リンク

おめでとうございます！これでVPS/専用サーバーにTeamSpeak 6サーバーを無事インストール＆設定できました。さらにサーバー設定の参考になる以下のリソースもぜひチェックしてみてください。

- [公式サイト](https://teamspeak.com/en/) - TeamSpeak 6の情報とダウンロード
- [コミュニティフォーラム](https://community.teamspeak.com/) - ユーザーサポートとディスカッション
- [GitHub Issues](https://github.com/teamspeak/teamspeak6-server/issues) - バグ報告や課題管理

ここにない質問やサポートが必要な場合は、いつでもお気軽にサポートチームにお問い合わせください。毎日対応していますよ！🙂