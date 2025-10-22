---
id: vserver-windows-docker
title: "VPS: WindowsでDockerをセットアップする方法"
description: "Dockerコンテナでアプリを効率的にデプロイ＆管理し、スムーズなスケーリングとアップデートを実現 → 今すぐチェック"
sidebar_label: Dockerのインストール
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Dockerは、アプリケーションをコンテナ内で開発・配布・実行するためのオープンプラットフォームです。コンテナはアプリとその依存関係をまとめて標準化された単位にパッケージ化し、異なる環境でも安定して動作させることができます。

これにより、開発環境・テスト環境・本番環境の違いによる問題を解消。Dockerを使えば、アプリのデプロイが高速化され、効率的にスケールし、ダウンタイムなしでアップデートも可能です。

自分でこのサービスをホスティングしたい？セットアップから設定まで、必要なポイントを全部わかりやすく解説します。

<InlineVoucher />



## 前提条件

**Docker**をインストールする前に、スムーズな導入と最適なパフォーマンスを確保するために、ホスティング環境が以下の要件を満たしているか確認しましょう。

| ハードウェア | 最低要件     | ZAP-Hosting推奨スペック |
| ------------ | ------------ | ----------------------- |
| CPU          | 1 vCPUコア   | 4 vCPUコア              |
| RAM          | 4 GB         | 4 GB                    |
| ディスク容量 | 10 GB        | 25 GB                   |



## インストール

Windows ServerにDockerをセットアップするには、PowerShellスクリプト `install-docker-ce.ps1` をダウンロードして実行します。これにより、コンテナに必要なOS機能が有効化され、Dockerランタイムがインストールされます。管理者権限でPowerShellを開き、以下のコマンドを実行してください：

```powershell
Invoke-WebRequest -UseBasicParsing "https://raw.githubusercontent.com/microsoft/Windows-Containers/Main/helpful_tools/Install-DockerCE/install-docker-ce.ps1" -o install-docker-ce.ps1
.\install-docker-ce.ps1
```

このスクリプトは、コンテナ関連のWindows機能を有効化し、Docker EngineとDocker CLIをインストール、さらにDockerサービスを自動起動に登録します。

![img](https://screensaver01.zap-hosting.com/index.php/s/y26fPWy63FAWJGp/download)

インストール中にシステムが再起動し、その後自動的に続行されます。再起動後にサインインし、スクリプトの指示があれば同じコマンドを再度実行してサービスの初期化を完了させてください。スクリプト完了時の出力例は以下の通りです：

```
Installing Docker... C:\Users\Administrator\DockerDownloads\docker-28.3.3\docker\docker.exe
Installing Docker daemon... C:\Users\Administrator\DockerDownloads\docker-28.3.3\docker\dockerd.exe
Configuring the docker service...
Waiting for Docker daemon...
Successfully connected to Docker Daemon.
The following images are present on this machine:
REPOSITORY   TAG       IMAGE ID   CREATED   SIZE

Script complete!
```



## 設定

### Dockerサービスの起動・停止

DockerはWindows上でサービスとして動作します。インストール後は自動的に起動しますが、手動で操作する場合は以下のコマンドを使います：

```
Start-Service docker    # Dockerサービスを起動
Stop-Service docker     # Dockerサービスを停止
Restart-Service docker  # Dockerサービスを再起動
```



### コンテナの起動・停止

`docker run` コマンドでコンテナを起動します。例：IISウェブサーバーをコンテナ内のポート80からホストのポート8080にマッピングして起動する場合：

```
docker run -d --name web -p 8080:80 mcr.microsoft.com/windows/servercore/iis:windowsservercore-ltsc2022
```



### コンテナの状態確認

コンテナの状態は以下のコマンドでチェック可能です：

```
docker ps        # 実行中のコンテナ一覧
docker ps -a     # 停止中も含む全コンテナ一覧
docker inspect web   # 詳細情報
docker logs web      # コンテナのログ
```



#### リソースとステータス

```
docker stats            # CPU/RAM/IOのリアルタイム情報
```




## まとめと参考リンク

おめでとう！これでVPSにDockerを無事インストール＆設定できました。さらにサーバー設定を深めたいなら、以下のリソースもチェックしてみてください。

- [Docker.com](https://Docker.com/) - 公式サイト
- [docs.docker.com](https://docs.docker.com/) - Docker公式ドキュメント

ここにない質問や困ったことがあれば、いつでもサポートチームに連絡してくださいね。毎日対応してるので安心してどうぞ！🙂