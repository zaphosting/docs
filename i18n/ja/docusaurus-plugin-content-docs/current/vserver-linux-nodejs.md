---
id: vserver-linux-nodejs
title: "LinuxサーバーにNode.jsをセットアップ - 最新のJavaScriptアプリを動かそう"
description: "Dockerとシステム準備でスケーラブルなリアルタイムアプリ向けの安定したNode.js環境を構築する方法 → 今すぐチェック"
sidebar_label: Node.jsのインストール
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Node.jsはクロスプラットフォームのオープンソースJavaScriptランタイム環境で、ブラウザの外、例えばサーバーやコマンドラインツール上でJavaScriptコードを実行します。V8エンジンをベースにしており、非同期でイベント駆動型のI/Oをサポートするため、スケーラブルなネットワークやリアルタイムアプリの構築に超効率的です。

「JavaScript everywhere」の考え方により、開発者はバックエンドもフロントエンドも同じ言語で開発できちゃいます。  


<InlineVoucher />

## 準備

**Node.js**をセットアップする前に、システムの準備が必要です。OSを最新バージョンにアップデートし、必要な依存関係をインストールすることで、安定した環境を作り、インストール中や後のトラブルを防ぎます。


### システムのアップデート
最新のソフトウェアとセキュリティ改善を適用するため、まずはシステムのアップデートを行いましょう。以下のコマンドを実行してください：

```
sudo apt update && sudo apt upgrade -y
```
これで最新のセキュリティパッチとソフトウェアバージョンが適用されます。

### 依存関係のインストール
アップデートが終わったら、依存関係のインストールに進みます。Node.jsはDockerコンテナ群で動かすので、まずDockerをインストールする必要があります。以下のコマンドを実行してください：

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Dockerのインストール手順や使い方は、[Docker](dedicated-linux-docker.md)ガイドで詳しく解説しています。



## インストール

必要な準備が整ったら、Node.jsアプリのインストールに進みましょう。


Node.jsを隔離された環境で使うには、まず公式のAlpineベースのイメージをダウンロードします。以下のコマンドで最新のNode.js 22イメージを取得し、コンテナ展開に使えるようにします：

```
docker pull node:22-alpine
```

次に、このイメージを使ってコンテナを起動し、シェルセッションを開きます。インタラクティブなシェルでコンテナを起動するには以下のコマンドを使います。`--rm`オプションは終了時にコンテナを自動削除し、ホスト環境をクリーンに保ちます。

```
docker run -it --rm --entrypoint sh node:22-alpine
```

コンテナ内で`node -v`を実行し、`v22.19.0`が表示されればOKです。`npm -v`で`10.9.3`が表示されれば、Node.jsとnpmのバージョンが正しくセットアップされていることが確認できます。



## 設定

Node.jsコンテナを起動したら、環境内で基本的なNode.js設定を行うのがおすすめです。よくある方法は環境変数の設定で、例えば：

```
export NODE_ENV=production
```

これで本番モードが有効になり、パフォーマンス最適化やログ出力の調整が行われます。開発時は`NODE_ENV=development`に設定すると、詳細なエラーメッセージやデバッグ機能が使えます。

プロジェクトディレクトリはしっかり構成しましょう。まずは以下のコマンドで設定ファイルを作成します：

```
npm init -y
```

これで`package.json`が生成され、依存関係やスクリプト、メタデータを管理する中心ファイルになります。

依存パッケージは`npm install <package>`で、開発用依存は`npm install <package> --save-dev`で追加可能です。`package.json`の`scripts`セクションにカスタムコマンド（例：`npm start`や`npm run build`）を定義すると、実行や管理が楽になります。

さらに高度な設定は、`.npmrc`や`.nvmrc`ファイルでプライベートレジストリの指定やキャッシュ設定、特定のNode.jsバージョンの強制などが可能です。これにより、異なる環境でもアプリが安定して動作します。



## まとめと追加リソース

おめでとう！これでVPS/専用サーバーにNode.jsのインストールと設定が完了しました。サーバー設定の参考になる以下のリソースもぜひチェックしてみてください。

- [Node.js.com](https://Node.js.com/) - 公式サイト
- https://Node.js.com/help/ - Node.jsヘルプセンター（ドキュメント）

ここにない質問やサポートが必要な場合は、いつでもお気軽にサポートチームまでお問い合わせください。毎日対応してますよ！🙂