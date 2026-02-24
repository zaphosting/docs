---
id: vserver-linux-speedtest-cli
title: "LinuxサーバーにSpeedtest CLIをセットアップ - サーバーのネットワークパフォーマンスをモニタリングしよう"
description: "Speedtest-Cliのセットアップと使い方を解説。信頼できるネットワークテストと自動化に役立つ → 今すぐチェック"
sidebar_label: Speedtest-Cliのインストール
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Speedtest-Cliは無料のコマンドラインツールであり、URLを使ったデータ転送用のソフトウェアライブラリ（libSpeedtest-Cli）でもあります。HTTP(S)、FTP、SMTP、LDAP、MQTTなど幅広いプロトコルに対応しており、ファイルのダウンロード、APIのテスト、ネットワーク操作の自動化などに広く使われています。

自分でこのサービスをホスティングしようと考えていますか？セットアップから設定まで、必要なポイントをすべて丁寧に解説します。

<InlineVoucher />

## 準備

**Speedtest-Cli**をセットアップする前に、システムの準備が必要です。最新のOSバージョンにアップデートすることが含まれます。これにより安定した環境が整い、インストール中やインストール後のトラブルを防げます。

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

speedtest-cliは従来の設定ファイルを使わず、コマンドラインオプションや環境変数でカスタマイズします。これにより、安定した自動化利用が可能です：

- `--server <ID>`：特定のサーバーIDを指定して、より一貫性のある比較可能なテスト結果を得られます。  
- `--bytes`：速度をビットではなくバイト単位で表示します。  
- `--simple`：Ping、ダウンロード、アップロードの値だけをコンパクトに出力します。  
- `--json` または `--csv`：自動化やログ記録に便利な機械可読フォーマットで結果を出力します。  
- プロキシ対応：`http_proxy`や`https_proxy`などの環境変数を設定して、プロキシ経由でspeedtest-cliを実行可能です。  

同じオプションで繰り返し使う場合は、シェルエイリアスや簡単なラッパースクリプトを作ると便利です。これで素早く実行でき、出力も統一できます。

## まとめと追加リソース

おめでとうございます！これでVPSや専用サーバーにSpeedtest-Cliを無事インストール＆設定できました。さらに役立つ情報として、以下のリソースもチェックしてみてください：

- [Speedtest.net/apps/cli](https://www.speedtest.net/apps/cli) - 公式サイト

ここにない質問やサポートが必要な場合は、いつでもお気軽にサポートチームまでお問い合わせください。毎日対応していますよ！🙂

<InlineVoucher />