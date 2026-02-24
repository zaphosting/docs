---
id: dedicated-windows-plex
title: "WindowsサーバーでPlexをセットアップ - 自分だけのメディアライブラリをストリーミング"
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

Plexは、映画、テレビ番組、音楽、写真などのメディアコンテンツを一元管理し、ストリーミングできるプラットフォームです。Plexメディアサーバーを使えば、ライブラリを整理し、メタデータを自動で補完し、ローカルネットワークやインターネット経由で様々なデバイスにストリーミング可能。自分だけのメディアコレクションに手軽かつ便利にアクセスできる柔軟なソリューションです。

![img](https://screensaver01.zap-hosting.com/index.php/s/68xdESEHimoY9Jp/preview)

自分でこのサービスをホスティングしようと考えていますか？セットアップから設定まで、必要なポイントをすべて丁寧に解説していきます。

## 前提条件

**Plex**をインストールする前に、スムーズな導入と最適なパフォーマンスを確保するために、ホスティング環境が以下の要件を満たしているか確認しましょう。

| ハードウェア | 最低要件      | ZAP-Hosting推奨スペック |
| ------------ | ------------ | ----------------------- |
| CPU          | 4 vCPUコア   | 8 vCPUコア             |
| RAM          | 4 GB         | 8 GB                   |
| ディスク容量 | 25GB         | 25 GB                  |

ソフトウェアは必要な依存関係がすべてインストールされていること、対応OS上で動作していることが必須です。以下の要件を満たしているか必ずチェックしてください。

**依存関係:** なし

**OS:** Windows 10/11、Windows Server 20XX

依存関係が揃っているか、対応OSが使われているかを確認し、Plexインストール時の互換性トラブルを防ぎましょう。

## インストール

公式Plexメディアサイトから、Windows版Plexメディアサーバーの最新版をダウンロードできます。64ビット版を選ぶことで、最新のWindows環境すべてに対応可能です。ダウンロードはこちらから：https://www.plex.tv/media-server-downloads/

![img](https://screensaver01.zap-hosting.com/index.php/s/d3b4mZsiQ4iqXrL/preview)

ダウンロード後、インストーラーを実行してPlexメディアサーバーをセットアップします。インストール完了後は、ブラウザ上のウェブインターフェースで設定を行い、ライブラリ作成やメディア管理が可能です。

![img](https://screensaver01.zap-hosting.com/index.php/s/5TnmMeRkdLAt2RJ/download)

セットアップが終わると、Plexメディアサーバーのウェブインターフェースが自動的に既定のブラウザで開きます。ここで既存のPlexアカウントにログインするか、新規作成を求められます。

このログインは、サーバーを個人アカウントに紐づけるために必要で、リモートアクセスやユーザー管理、デバイス間同期などの機能を利用可能にします。認証が完了すると、自分専用のPlexメディア環境に入れます。ここから映画、テレビ番組、音楽、写真のライブラリを作成し、メタデータを自動取得、ローカルネットワークやインターネット経由で他ユーザーとコンテンツを共有できます。

![img](https://screensaver01.zap-hosting.com/index.php/s/HmQPZGsBqxqPHmy/download)

セットアップ後は、ブラウザで `http://<ip-address>:32400` にアクセスしてPlexメディアサーバーに外部からも接続可能です。`<ip-address>` はサーバーのパブリックIPアドレスに置き換えてください。

ポート32400はPlexのウェブアクセスのデフォルトポートなので、インターネット経由で接続する場合はファイアウォールやルーターで許可設定が必要になることがあります。

アクセスするとPlexのログインページにリダイレクトされ、ライブラリや設定の管理ができます。安全な外部アクセスにはPlex設定内のリモートアクセスを有効にすることを推奨します。これにより通信が暗号化され、Plexサービス経由でトラフィックが中継されます。

![img](https://screensaver01.zap-hosting.com/index.php/s/jfQxZ6e4BGMfen5/preview)

## まとめと参考リンク

おめでとうございます！これでVPS/専用サーバーにPlexを無事インストール＆設定できました。さらにサーバー設定の参考になる以下のリソースもぜひチェックしてみてください。

- [Plex.com](https://Plex.com/) - 公式サイト
- [support.plex.tv/articles/](https://support.plex.tv/articles/) - Plexヘルプセンター（ドキュメント）

ここにない質問やサポートが必要な場合は、いつでもお気軽に当社サポートチームまでお問い合わせください。毎日対応していますよ！🙂