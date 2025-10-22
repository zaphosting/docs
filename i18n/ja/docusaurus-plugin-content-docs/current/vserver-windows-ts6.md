---
id: vserver-windows-ts6
title: "VPS: Windows VPSでTeamspeak 6サーバーをセットアップする方法"
description: "TeamSpeak 6サーバーのベータ版をスムーズにホスティング＆最適化する方法をチェック → 今すぐ詳しく見る"
sidebar_label: Teamspeak 6サーバーのインストール
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

2025年夏、TeamSpeakは**TeamSpeak 6サーバー**の**ベータ版**をリリースしました。次世代のTeamSpeakをいち早く体験できます！

自分でこのサービスをホスティングしてみたい？セットアップから設定まで、必要なポイントを全部わかりやすく解説します。

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)

<InlineVoucher />



## 必要条件

**Teamspeak 6サーバー**をインストールする前に、スムーズな導入と最高のパフォーマンスを保証するために、ホスティング環境が以下の要件を満たしているか確認しましょう。

| ハードウェア | 最低条件     | ZAP-Hosting推奨スペック |
| ------------ | ------------ | ----------------------- |
| CPU          | 1 vCPUコア   | 4 vCPUコア              |
| RAM          | 1 GB         | 4 GB                    |
| ディスク容量 | 1 GB         | 25 GB                   |



## 準備

**TeamSpeak 6サーバー**をセットアップする前に、システムの準備が必要です。最新のソフトウェアとセキュリティアップデートを適用しておくことで、システムが最新の状態で安全に動作します。

これにより、最新のセキュリティパッチやソフトウェアバージョンが適用された状態で作業を進められます。




## インストール
必要条件を満たし、準備が整ったら、Teamspeak 6サーバーのインストールに進みましょう。まずはGitHubから最新のリリースファイル `http://teamspeak-server_win64-v6.0.0-beta6.zip/` をダウンロードします：[TeamSpeak 6 Server (Windows 64-bit)](https://github.com/teamspeak/teamspeak6-server/releases/download/v6.0.0%2Fbeta6/teamspeak-server_win64-v6.0.0-beta6.zip)

![img](https://screensaver01.zap-hosting.com/index.php/s/Ywc6mMTJybbgtF5/preview)

次に、ファイルを任意のディレクトリに解凍します。**PowerShell**を開き、サーバーファイルを解凍したディレクトリに移動してください。以下のコマンドでサーバーを起動します：

```
.\tsserver.exe
```

初回起動時にライセンス契約のウィンドウが表示されるので、同意してください。その後、Server Query管理者アカウントの認証情報と特権キーが表示されます。これらは一度しか表示されないので、必ず安全に保管しましょう。

![img](https://screensaver01.zap-hosting.com/index.php/s/rsmBkcJiAAinjE6/download)

確認が完了すると、TeamSpeak 6サーバーはバックグラウンドで起動し、すぐに利用可能な状態になります。

##### 

## 設定

**TeamSpeak 6サーバー**は**コマンドライン引数**を使って追加設定も可能です。起動時にオプションを直接指定します。利用可能なオプションの一覧は公式の[TeamSpeak 6 Server](https://github.com/teamspeak/teamspeak6-server/blob/main/CONFIG.md)ドキュメントで確認できます。例：

```
./tsserver --default-voice-port 9987
```



## 接続方法

TeamSpeak 6サーバーが起動したら、TeamSpeak 6クライアントから接続できます。サーバーのIPアドレスと正しいポート番号を使ってクライアントに入力し、接続して動作を確認しましょう。

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)



## まとめと追加リソース

おめでとうございます！これでVPSにTeamspeak 6サーバーを無事インストール＆設定できました。さらに役立つ情報やサポートを得たい場合は、以下のリソースもチェックしてみてください。

- [公式サイト](https://teamspeak.com/en/) - TeamSpeak 6の情報とダウンロード
- [コミュニティフォーラム](https://community.teamspeak.com/) - ユーザーサポート＆ディスカッション
- [GitHub Issues](https://github.com/teamspeak/teamspeak6-server/issues) - バグ報告や課題管理

ここにない質問や困ったことがあれば、いつでもサポートチームに連絡してくださいね！毎日対応しているので安心です 🙂