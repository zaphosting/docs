---
id: dedicated-windows-ts6
title: "専用サーバー：Windows専用サーバーにTeamspeak 6サーバーをセットアップする方法"
description: "TeamSpeak 6サーバーのセットアップと最適化で最高のパフォーマンスとセキュリティを実現 → 今すぐ詳しくチェック"
sidebar_label: Teamspeak 6サーバーのインストール
services:
  - dedicated
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

| ハードウェア | 最低要件     | ZAP-Hosting推奨スペック |
| ---------- | ------------ | ----------------------- |
| CPU        | 1 vCPUコア   | 4 vCPUコア              |
| RAM        | 1 GB         | 4 GB                    |
| ディスク容量 | 1 GB         | 25 GB                   |



## 準備

**TeamSpeak 6サーバー**のセットアップ前に、システムの準備をしましょう。最新のソフトウェアとセキュリティアップデートを適用しておくことが重要です。

これにより、最新のセキュリティパッチとソフトウェアバージョンが適用された状態で作業を進められます。




## インストール
すべての要件を満たし、準備が整ったら、Teamspeak 6サーバーのインストールに進みましょう。まずはGitHubから最新リリースファイル `http://teamspeak-server_win64-v6.0.0-beta6.zip/` をダウンロードします：[TeamSpeak 6 Server (Windows 64-bit)](https://github.com/teamspeak/teamspeak6-server/releases/download/v6.0.0%2Fbeta6/teamspeak-server_win64-v6.0.0-beta6.zip)

![img](https://screensaver01.zap-hosting.com/index.php/s/Ywc6mMTJybbgtF5/preview)

次に、ファイルを任意のディレクトリに解凍します。**PowerShell**を開き、サーバーファイルを解凍したディレクトリに移動してください。以下のコマンドでサーバーを起動します：

```
.\tsserver.exe
```

初回起動時にライセンス契約のウィンドウが表示されるので、同意してください。その後、Server Query管理者アカウントの認証情報と特権キーが表示されます。これらは一度しか表示されないので、必ず安全に保管してください。

![img](https://screensaver01.zap-hosting.com/index.php/s/rsmBkcJiAAinjE6/download)

確認が完了すると、TeamSpeak 6サーバーはバックグラウンドで起動し、すぐに利用可能な状態になります。

##### 

## 設定

**TeamSpeak 6サーバー**は**コマンドライン引数**で追加設定も可能です。起動時にオプションを直接指定します。利用可能なオプションの全リストは公式の[TeamSpeak 6 Server](https://github.com/teamspeak/teamspeak6-server/blob/main/CONFIG.md)ドキュメントで確認できます。例：

```
./tsserver --default-voice-port 9987
```



## 接続方法

TeamSpeak 6サーバーが起動したら、TeamSpeak 6クライアントを使って接続できます。サーバーのIPアドレスと正しいポート番号を入力するだけで、サーバーに接続して動作を確認できます。

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)



## まとめと追加リソース

おめでとうございます！これで専用サーバーにTeamspeak 6サーバーを無事インストール・設定できました。さらに役立つ情報やサポートを得るために、以下のリソースもぜひチェックしてください。

- [公式サイト](https://teamspeak.com/en/) - TeamSpeak 6の情報とダウンロード
- [コミュニティフォーラム](https://community.teamspeak.com/) - ユーザーサポートとディスカッション
- [GitHub Issues](https://github.com/teamspeak/teamspeak6-server/issues) - バグ報告や課題管理

ここにない質問やサポートが必要な場合は、いつでもお気軽にサポートチームにお問い合わせください。毎日対応していますよ！🙂

<InlineVoucher />