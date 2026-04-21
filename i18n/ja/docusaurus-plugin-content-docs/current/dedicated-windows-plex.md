---
id: dedicated-windows-plex
title: "WindowsサーバーにPlexをセットアップ - 自分だけのメディアライブラリをストリーミング"
description: "Plexで個人のメディアを簡単に管理＆ストリーミングして、どこからでもシームレスにアクセス → 今すぐチェック"
sidebar_label: Plexのインストール
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Plexは映画、TV番組、音楽、写真などのメディアコンテンツを一元管理＆ストリーミングできるプラットフォームです。Plexメディアサーバーを使えば、ライブラリを整理し、メタデータを自動で付加し、ローカルネットワークやインターネット経由で様々なデバイスにストリーミング可能。自分だけのメディアコレクションに手軽かつ便利にアクセスできる柔軟なソリューションです。

![img](https://screensaver01.zap-hosting.com/index.php/s/68xdESEHimoY9Jp/preview)

自分でこのサービスをホスティングしようと考えていますか？セットアップから設定まで、必要なポイントを全部わかりやすく解説します。

## One Click AppsインストーラーでPlexをインストール

VPSのウェブインターフェースにある**One Click Appsインストーラー**から、**Plex**を直接インストールできます。初期セットアップが終わったらアプリカタログを開き、**Plex**を検索。好きなプロジェクトや環境、ドメイン設定を選んでデプロイを開始しましょう。コマンドライン不要で簡単にPlexを導入でき、ウェブベースの管理やカスタムドメイン対応、SSL設定も利用可能です。

## 必要条件

**Plex**をインストールする前に、スムーズな導入と快適な動作のためにホスティング環境が以下の要件を満たしているか確認してください。

| ハードウェア | 最低要件     | ZAP-Hosting推奨          |
| ------------ | ------------ | ------------------------ |
| CPU          | 4 vCPUコア   | 8 vCPUコア               |
| RAM          | 4 GB         | 8 GB                     |
| ディスク容量 | 25GB         | 25 GB                    |

ソフトウェアは必要な依存関係がインストールされていること、対応OS上で動作していることが前提です。以下の要件を満たしているか必ずチェックしてください。

**依存関係:** なし

**対応OS:** Windows 10/11、Windows Server 20XX

依存関係が揃っているか、対応OSを使っているかを確認し、Plexのインストール時に互換性トラブルを避けましょう。

## インストール手順

公式PlexメディアサイトからWindows版Plexメディアサーバーの最新バージョンをダウンロードできます。64ビット版を選ぶと最新のWindows環境に対応しています。ダウンロードはこちらから：https://www.plex.tv/media-server-downloads/

![img](https://screensaver01.zap-hosting.com/index.php/s/d3b4mZsiQ4iqXrL/preview)

ダウンロード後、インストーラーを実行してPlexメディアサーバーをセットアップします。インストール完了後はブラウザのウェブインターフェースで設定を行い、ライブラリ作成やメディア管理が可能です。

![img](https://screensaver01.zap-hosting.com/index.php/s/5TnmMeRkdLAt2RJ/download)

セットアップが終わると、Plexメディアサーバーのウェブインターフェースが自動で既定のブラウザに開きます。ここで既存のPlexアカウントにログインするか、新規作成してください。

このログインはサーバーを個人アカウントに紐付けるために必要で、リモートアクセスやユーザー管理、デバイス間同期などの機能を使うためのステップです。認証が完了すると、自分専用のPlexメディア環境に入れます。映画、TV番組、音楽、写真のライブラリを作成し、メタデータを自動取得、ローカルネットワークやインターネット経由で他のユーザーとコンテンツを共有できます。

![img](https://screensaver01.zap-hosting.com/index.php/s/HmQPZGsBqxqPHmy/download)

セットアップ後は、`http://<ip-address>:32400` にブラウザでアクセスすることで外部からもPlexメディアサーバーに接続可能です。`<ip-address>`はサーバーのパブリックIPアドレスに置き換えてください。

ポート32400はPlexのウェブアクセスのデフォルトポートなので、インターネット経由で接続したい場合はファイアウォールやルーターで許可が必要です。

アクセスするとPlexのログインページにリダイレクトされ、ライブラリや設定の管理ができます。安全な外部アクセスにはPlex設定のリモートアクセスを有効にするのがおすすめ。これにより通信が暗号化され、Plexサービス経由でトラフィックが中継されます。

![img](https://screensaver01.zap-hosting.com/index.php/s/jfQxZ6e4BGMfen5/preview)

## まとめ＆参考リンク

おめでとう！これでVPS/専用サーバーにPlexを無事インストール＆設定できました。さらに設定を深めたいときは、以下のリソースもチェックしてみてください。

- [Plex.com](https://Plex.com/) - 公式サイト
- [support.plex.tv/articles/](https://support.plex.tv/articles/) - Plexヘルプセンター（ドキュメント）

ここにない質問や困ったことがあれば、いつでもサポートチームに連絡してくださいね。毎日対応してるので安心してどうぞ！🙂