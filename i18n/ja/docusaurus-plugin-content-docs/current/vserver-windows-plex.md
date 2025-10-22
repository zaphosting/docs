---
id: vserver-windows-plex
title: "VPS: WindowsでPlexをセットアップ"
description: "Plexで自分だけのメディアライブラリを簡単に管理＆ストリーミング。どんなデバイスでもシームレスにアクセス → 今すぐチェック"
sidebar_label: Plexのインストール
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

Plexは、映画、テレビ番組、音楽、写真などのメディアコンテンツを一元管理し、ストリーミングできるプラットフォームです。Plexメディアサーバーを使えば、ライブラリを整理し、メタデータを自動で補完し、ローカルネットワークやインターネット経由で様々なデバイスにストリーミング可能。自分のメディアコレクションに手軽かつ便利にアクセスできる柔軟なソリューションです。

![img](https://screensaver01.zap-hosting.com/index.php/s/68xdESEHimoY9Jp/preview)

自分でこのサービスをホスティングしようと考えていますか？セットアップから設定まで、必要なポイントを全部わかりやすく解説します。

<InlineVoucher />

## 前提条件

**Plex**をインストールする前に、スムーズな導入と最適なパフォーマンスを確保するために、ホスティング環境が以下の要件を満たしているか確認しましょう。

| ハードウェア   | 最低要件      | ZAP-Hosting推奨スペック |
| ---------- | ------------ | -------------------------- |
| CPU        | 4 vCPUコア   | 8 vCPUコア               |
| RAM        | 4 GB         | 8 GB                       |
| ディスク容量 | 25GB         | 25 GB                      |

ソフトウェアは必要な依存関係がすべてインストールされていること、対応OS上で動作していることが必要です。インストール前に以下の条件を満たしているか必ずチェックしてください：

**依存関係:** なし

**対応OS:** Windows 10/11、Windows Server 20XX

依存関係が揃っていること、正しいOSバージョンを使っていることを確認し、Plexのインストール時の互換性トラブルを避けましょう。

## インストール

公式PlexメディアサイトからWindows版Plexメディアサーバーの最新版をダウンロードできます。64ビット版を選ぶことで、最新のWindowsエディションすべてに対応可能です。ダウンロードはこちらから：https://www.plex.tv/media-server-downloads/

![img](https://screensaver01.zap-hosting.com/index.php/s/d3b4mZsiQ4iqXrL/preview)

ダウンロード後、インストーラーを実行してPlexメディアサーバーをセットアップします。インストール完了後はブラウザのウェブインターフェースで設定を行い、ライブラリ作成やメディア管理が可能です。

![img](https://screensaver01.zap-hosting.com/index.php/s/5TnmMeRkdLAt2RJ/download)

セットアップが終わると、Plexメディアサーバーのウェブインターフェースが自動的に既定のブラウザで開きます。ここで既存のPlexアカウントにログインするか、まだ持っていなければ新規作成を求められます。

このログインはサーバーを個人アカウントに紐づけるために必要で、リモートアクセスやユーザー管理、デバイス間同期などの機能を利用可能にします。認証が完了すると、自分専用のPlexメディア環境に入れます。ここから映画、テレビ番組、音楽、写真のライブラリを作成し、メタデータを自動取得、ローカルネットワークやインターネット経由で他のユーザーとコンテンツを共有できます。

![img](https://screensaver01.zap-hosting.com/index.php/s/HmQPZGsBqxqPHmy/download)

セットアップ後は、`http://<ip-address>:32400` にブラウザでアクセスすることで外部からもPlexメディアサーバーに接続可能です。`<ip-address>`はサーバーのパブリックIPアドレスに置き換えてください。

ポート32400はPlexのウェブアクセスのデフォルトポートなので、インターネット経由で接続したい場合はファイアウォールやルーターで許可設定が必要になることがあります。

アクセスするとPlexのログインページにリダイレクトされ、ライブラリや設定の管理ができます。安全な外部アクセスにはPlex設定のリモートアクセスを有効にすることをおすすめします。これにより通信が暗号化され、Plexサービス経由でトラフィックが中継されます。

![img](https://screensaver01.zap-hosting.com/index.php/s/jfQxZ6e4BGMfen5/preview)

## まとめと追加リソース

おめでとうございます！これでVPSにPlexを無事インストール＆設定できました。サーバー設定の参考になる以下のリソースもぜひチェックしてみてください。

- [Plex.com](https://Plex.com/) - 公式サイト
- [support.plex.tv/articles/](https://support.plex.tv/articles/) - Plexヘルプセンター（ドキュメント）

ここにない質問や困ったことがあれば、いつでもサポートチームにお問い合わせください。毎日対応しているので安心してどうぞ！🙂

<InlineVoucher />