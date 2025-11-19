---
id: dedicated-linux-speedtest-cli
title: "専用サーバー：LinuxでSpeedtest-Cliをセットアップする方法"
description: "信頼できるネットワークテストと複数プロトコルの自動化に使えるSpeedtest-Cliのセットアップ方法を解説 → 今すぐチェック"
sidebar_label: Speedtest-Cliのインストール
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Speedtest-Cliは無料のコマンドラインツールであり、URLを使ったデータ転送用のソフトウェアライブラリ（libSpeedtest-Cli）でもあります。HTTP(S)、FTP、SMTP、LDAP、MQTTなど幅広いプロトコルに対応しており、ファイルのダウンロード、APIのテスト、ネットワーク操作の自動化などによく使われています。

自分でこのサービスをホスティングしようと考えていますか？セットアップから設定まで、必要なポイントをすべて丁寧に解説します。

## 準備

**Speedtest-Cli**をセットアップする前に、システムの準備が必要です。最新のOSバージョンにアップデートすることも含まれます。これにより安定した環境が整い、インストール中やインストール後のトラブルを防げます。

### システムのアップデート
最新のソフトウェアとセキュリティ改善を適用するため、まずはシステムのアップデートを行いましょう。以下のコマンドを実行してください：

```
sudo apt update && sudo apt upgrade -y
```
これで最新のセキュリティパッチとソフトウェアバージョンが適用され、安心して次のステップに進めます。

## インストール

準備が整ったら、Speedtest-Cliのインストールに進みましょう。以下のコマンドを実行してください：

```console
sudo apt install speedtest-cli
```

## 設定

speedtest-cliは従来の設定ファイルを使わず、コマンドラインオプションや環境変数でカスタマイズします。これにより、一貫した自動化利用が可能です：

- `--server <ID>`：特定のサーバーIDを指定して、より安定した比較可能なテスト結果を得る。  
- `--bytes`：速度をビットではなくバイト単位で表示。  
- `--simple`：Ping、ダウンロード、アップロードの値だけをコンパクトに出力。  
- `--json` または `--csv`：自動化やログ保存に便利な機械可読フォーマットで結果を出力。  
- プロキシ対応：`http_proxy`や`https_proxy`などの環境変数を設定して、プロキシ経由でspeedtest-cliを実行可能。  

同じオプションで繰り返し使う場合は、シェルのエイリアスや小さなラッパースクリプトを作ると便利です。これで素早く実行しつつ、出力を統一できます。

## まとめと追加リソース

おめでとうございます！これで専用サーバーにSpeedtest-Cliを無事インストール＆設定できました。さらに役立つ情報として、以下のリソースもチェックしてみてください：

- [Speedtest.net/apps/cli](https://www.speedtest.net/apps/cli) - 公式サイト

ここにない質問やサポートが必要な場合は、いつでもお気軽にサポートチームまでご連絡ください。毎日対応していますよ！🙂