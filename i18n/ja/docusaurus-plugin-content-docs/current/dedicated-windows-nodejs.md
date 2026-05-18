---
id: dedicated-windows-nodejs
title: "WindowsサーバーにNode.jsをセットアップ - 最新JavaScriptアプリを動かそう"
description: "スケーラブルでリアルタイムなアプリを作るためのNode.jsセットアップ方法をサクッと解説 → 今すぐチェック"
sidebar_label: Node.jsのインストール
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Node.jsはクロスプラットフォーム対応のオープンソースJavaScriptランタイム環境で、ブラウザの外、サーバーやコマンドラインツール上でJavaScriptコードを実行できます。V8エンジンをベースにしており、非同期・イベント駆動型のI/Oをサポート。これにより、スケーラブルなネットワークやリアルタイムアプリの構築に超効率的です。

「JavaScriptをどこでも使う」パラダイムにより、バックエンドもフロントエンドも同じ言語で開発できちゃいます。

## 準備

**Node.js**をセットアップする前に、システムの準備が必要です。OSを最新バージョンにアップデートし、必要な依存関係をインストールしましょう。これで安定した環境が整い、インストール中や後のトラブルを防げます。

### システムのアップデート
最新のソフトウェアとセキュリティ改善を適用するため、まずはシステムアップデートを行いましょう。以下のコマンドを実行してください：

```
sudo apt update && sudo apt upgrade -y
```
これで最新のセキュリティパッチとソフトウェアバージョンが適用されます。

### 依存関係のインストール
アップデートが終わったら、依存関係のインストールに進みます。Node.jsはDockerコンテナを使ってデプロイ・実行するので、まずDockerをインストールしましょう。以下のコマンドを実行してください：

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Dockerのインストール手順や使い方は、[Docker](vserver-windows-docker.md)ガイドで詳しく解説しています。

## インストール

必要な準備が整ったら、Node.jsアプリのインストールに進みましょう。

Node.jsを隔離された環境で使うには、まず公式のAlpineベースイメージをダウンロードします。以下のコマンドで最新のNode.js 22イメージを取得し、コンテナ展開に使えるようにします：

```
docker pull node:22-alpine
```

次に、このイメージを使ってコンテナを起動し、シェルセッションを開きます。`--rm`オプションで終了時にコンテナが自動削除され、ホスト環境がスッキリ保たれます。

```
docker run -it --rm --entrypoint sh node:22-alpine
```

コンテナ内で`node -v`を実行し、`v22.19.0`が表示されればOK。`npm -v`で`10.9.3`が出れば、Node.jsとnpmのバージョンが正しくセットアップされていることが確認できます。

## 設定

Node.jsコンテナを起動したら、環境内で基本的なNode.js設定を行うのがおすすめです。よくあるのは環境変数の設定：

```
export NODE_ENV=production
```

これで本番モードが有効になり、パフォーマンス最適化やログ出力の調整がされます。開発用なら`NODE_ENV=development`にして、詳細なエラーメッセージやデバッグ機能を活用しましょう。

プロジェクトディレクトリは整理しておくのがベター。まずは以下で設定ファイルを作成します：

```
npm init -y
```

これで`package.json`が生成され、依存関係やスクリプト、メタデータを管理できます。Node.jsアプリの中心的な設定ファイルです。

依存パッケージは`npm install <package>`で、開発用依存は`npm install <package> --save-dev`で追加可能。`package.json`の`scripts`セクションに`npm start`や`npm run build`などのカスタムコマンドを定義すれば、実行や管理がラクになります。

さらに高度な設定は`.npmrc`や`.nvmrc`ファイルで行えます。プライベートレジストリの指定やキャッシュ設定、特定のNode.jsバージョンの強制などが可能で、環境間での一貫性を保てます。

## まとめと追加リソース

おめでとう！これでVPS/専用サーバーにNode.jsを無事インストール＆設定できました。さらに役立つリソースもチェックしてみてください：

- [Node.js.com](https://Node.js.com/) - 公式サイト
- https://Node.js.com/help/ - Node.jsヘルプセンター（ドキュメント）

ここにない質問や困ったことがあれば、いつでもサポートチームに連絡してくださいね。毎日対応してるので安心してどうぞ！🙂