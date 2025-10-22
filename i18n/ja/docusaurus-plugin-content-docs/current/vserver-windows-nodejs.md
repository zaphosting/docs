---
id: vserver-windows-nodejs
title: "VPS: WindowsでNode.jsをセットアップ"
description: "Dockerとシステム準備を使って、スケーラブルでリアルタイムなアプリ向けの安定したNode.js環境を構築する方法 → 今すぐチェック"
sidebar_label: Node.jsのインストール
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Node.jsはクロスプラットフォーム対応のオープンソースJavaScriptランタイム環境で、ブラウザの外、サーバーやコマンドラインツール上でJavaScriptコードを実行します。V8エンジンをベースにしており、非同期・イベント駆動型のI/Oをサポートするため、スケーラブルなネットワークやリアルタイムアプリの構築に超効率的です。

「JavaScriptをどこでも使う」パラダイムにより、バックエンドもフロントエンドも同じ言語で開発できちゃいます。  

<InlineVoucher />

## 準備

**Node.js**をセットアップする前に、システムの準備が必要です。OSを最新バージョンにアップデートし、必要な依存関係をインストールしましょう。これで安定した環境が整い、インストール中や後のトラブルを防げます。

### システムのアップデート
最新のソフトウェアとセキュリティ改善を適用するため、まずはシステムアップデートを行いましょう。以下のコマンドを実行してください：

```
sudo apt update && sudo apt upgrade -y
```
これで最新のセキュリティパッチとソフトウェアバージョンが適用されます。

### 依存関係のインストール
アップデートが終わったら、依存関係のインストールに進みます。Node.jsはDockerコンテナ群を使ってマシン上で動かすので、まずDockerをインストールする必要があります。以下のコマンドを実行してください：

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Dockerのインストール手順や使い方は、[Docker](vserver-windows-docker.md)ガイドで詳しく解説しています。

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

コンテナ内で`node -v`を実行し、`v22.19.0`が表示されればOKです。`npm -v`で`10.9.3`が出れば、Node.jsとnpmのバージョンが正しく用意されていることが確認できます。

## 設定

Node.jsコンテナを起動したら、環境内で基本的なNode.js設定を行うのがおすすめです。よくある方法は環境変数の設定で、例えば：

```
export NODE_ENV=production
```

これで本番モードが有効になり、パフォーマンス最適化やログの調整が行われます。開発用なら`NODE_ENV=development`にして、詳細なエラーメッセージやデバッグ機能を活用しましょう。

プロジェクトディレクトリはしっかり構成するのが大事で、まずは以下で設定ファイルを作成します：

```
npm init -y
```

これで`package.json`が生成され、依存関係やスクリプト、メタデータを管理できます。Node.jsアプリの中心的な設定ファイルです。

依存パッケージは`npm install <package>`で、開発用依存は`npm install <package> --save-dev`で追加します。`package.json`の`scripts`セクションには`npm start`や`npm run build`などのカスタムコマンドを定義でき、実行や管理が楽になります。

さらに高度な設定では、`.npmrc`や`.nvmrc`ファイルを使ってプライベートレジストリの設定やキャッシュオプション、特定のNode.jsバージョンの強制などが可能です。これにより、異なる環境でもアプリが安定して動作します。

## まとめと追加リソース

おめでとう！これでVPSにNode.jsを無事インストール＆設定できました。サーバー設定の参考になる以下のリソースもぜひチェックしてみてください：

- [Node.js.com](https://Node.js.com/) - 公式サイト
- https://Node.js.com/help/ - Node.jsヘルプセンター（ドキュメント）

ここにない質問や困ったことがあれば、いつでもサポートチームに連絡してくださいね。毎日対応してるので安心してどうぞ！🙂