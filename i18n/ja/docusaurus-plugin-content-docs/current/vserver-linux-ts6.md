---
id: vserver-linux-ts6
title: "VPS: Linux VPSでTeamspeak 6サーバーをセットアップする方法"
description: "信頼性の高いホスティングとパフォーマンスのためにTeamSpeak 6サーバーをセットアップ＆最適化する方法をチェック → 今すぐ詳しく見る"
sidebar_label: Teamspeak 6サーバーのインストール
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

2025年夏、TeamSpeakは**TeamSpeak 6サーバー**の**ベータ版**をリリースしました。次世代のTeamSpeakをいち早く体験できます！

自分でこのサービスをホスティングしようと考えていますか？セットアップから設定まで、必要なポイントをすべて丁寧に解説します。

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)

<InlineVoucher />



## 前提条件

**Teamspeak 6サーバー**をインストールする前に、スムーズな導入と最適なパフォーマンスを保証するために、ホスティング環境が以下の要件を満たしていることを確認してください。

| ハードウェア   | 最低要件      | ZAP-Hosting推奨スペック |
| ---------- | ------------ | -------------------------- |
| CPU        | 1 vCPUコア   | 4 vCPUコア               |
| RAM        | 1 GB         | 4 GB                       |
| ディスク容量 | 1 GB         | 25 GB                      |



## 準備

**TeamSpeak 6サーバー**をセットアップする前に、システムの準備が必要です。これにはOSの最新バージョンへのアップデートと、必要な依存関係のインストールが含まれます。これらの準備は安定した環境を作り、インストール中やインストール後の問題を防ぎます。


### システムのアップデート
最新のソフトウェアとセキュリティ改善を適用するために、まずシステムのアップデートを行いましょう。以下のコマンドを実行してください：

```
sudo apt update && sudo apt upgrade -y
```
これで最新のセキュリティパッチとソフトウェアバージョンが適用されます。

### 依存関係のインストール
アップデートが完了したら、依存関係のインストールに進みます。簡単かつ推奨される方法としてDockerの利用をおすすめします。まずDockerエンジンをインストールしましょう：

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```




## インストール
すべての要件を満たし、準備が整ったら、Teamspeak 6サーバーのインストールに進みます。

次に、TeamSpeak 6サーバー用のDocker Composeファイル `docker-compose.yml` を作成します。任意のディレクトリで構いませんが、ここでは例として `/opt/containers/ts6/` に作成します。公式のTeamSpeak Composeファイルを使用します：

```
services:
  teamspeak:
    image: teamspeaksystems/teamspeak6-server:latest
    container_name: teamspeak-server
    restart: unless-stopped
    ports:
      - "9987:9987/udp"   # ボイス用ポート
      - "30033:30033/tcp" # ファイル転送用
      # - "10080:10080/tcp" # Webクエリ用
    environment:
      - TSSERVER_LICENSE_ACCEPTED=accept
    volumes:
      - teamspeak-data:/var/tsserver/

volumes:
  teamspeak-data:
```

ファイルを作成したいディレクトリに移動し、`nano docker-compose.yml` コマンドでファイルを開き、上記内容をペーストしてください。

![img](https://screensaver01.zap-hosting.com/index.php/s/yBZTKL8MYgLiJEt/download)


DockerコンテナとTeamSpeak 6サーバーを起動するには、以下のDocker Composeコマンドを実行します：
```
docker compose -f /opt/containers/ts6/docker-compose.yml up
```

これでTeamSpeak 6サーバーのDockerコンテナが起動します。デフォルトではまだ常駐はしません。初回起動時には**サーバークエリアドミンアカウント**と**特権キー**に関する**重要な情報**が表示されます。

![img](https://screensaver01.zap-hosting.com/index.php/s/7nNwWkEdG84yx4y/download)

この情報は次回以降表示されないので、必ず安全な場所に保存してください。保存後は `CTRL+C` でコンテナを停止しましょう。



## 設定

Docker Composeファイル内の**環境変数**を使って、TeamSpeak 6サーバーの追加設定が可能です。これにより、サーバーを自分のニーズに合わせてカスタマイズできます。利用可能なオプションの全リストは公式の[TeamSpeak 6 Server](https://github.com/teamspeak/teamspeak6-server/blob/main/CONFIG.md)ドキュメントで確認できます。

`docker-compose.yml`の例：

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

停止する場合は、以下のコマンドでコンテナを停止してください：

```
docker compose -f /opt/containers/ts6/docker-compose.yml down
```



## 接続方法

TeamSpeak 6サーバーが起動したら、TeamSpeak 6クライアントを使って接続できます。サーバーのIPアドレスと正しいポート番号を入力して、クライアントから接続し、動作を確認しましょう。

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)



## まとめと追加リソース

おめでとうございます！これでVPSにTeamspeak 6サーバーを無事インストール＆設定できました。さらに役立つ情報やサポートを得るために、以下のリソースもぜひチェックしてください。

- [公式サイト](https://teamspeak.com/en/) - TeamSpeak 6の情報とダウンロード
- [コミュニティフォーラム](https://community.teamspeak.com/) - ユーザーサポートとディスカッション
- [GitHub Issues](https://github.com/teamspeak/teamspeak6-server/issues) - バグ報告や課題管理

ここにない具体的な質問があれば、いつでもサポートチームにお問い合わせください。毎日対応しているので安心してどうぞ！🙂